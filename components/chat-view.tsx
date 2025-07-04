"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { Send, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Message, type MessageProps } from "@/components/message";

export function ChatView() {
  const { toast } = useToast();
  const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

  const [messages, setMessages] = useState<MessageProps[]>([
    {
      sender: 'webhook',
      text: webhookUrl ? 'Hello! Send a message to begin.' : 'Hello! Webhook URL is not configured. Please set the `NEXT_PUBLIC_WEBHOOK_URL` environment variable.',
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);
  
  const isValidUrl = (urlString?: string) => {
    if (!urlString) return false;
    try {
      new URL(urlString);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (!isValidUrl(webhookUrl)) {
      toast({
        title: "Invalid or Missing Webhook URL",
        description: "Please make sure the NEXT_PUBLIC_WEBHOOK_URL environment variable is set to a valid URL.",
        variant: "destructive",
      });
      return;
    }

    const userMessage: MessageProps = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with status: ${response.status}`);
      }

      const responseText = await response.text();
      let webhookText = responseText; // Default to raw response
      try {
        const responseData = JSON.parse(responseText);

        if (Array.isArray(responseData) && responseData.length > 0 && responseData[0].hasOwnProperty('output')) {
          webhookText = responseData[0].output;
        } else if (responseData && responseData.hasOwnProperty('output')) {
          webhookText = responseData.output;
        }
      } catch (error) {
        // Parsing failed, webhookText is already set to responseText
      }

      const webhookMessage: MessageProps = { sender: "webhook", text: webhookText };
      setMessages((prev) => [...prev, webhookMessage]);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      const errorToastMessage: MessageProps = { sender: "error", text: `Error: ${errorMessage}` };
      setMessages((prev) => [...prev, errorToastMessage]);
      toast({
        title: "Webhook Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 h-full min-h-0">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} text={msg.text} />
          ))}
          {isLoading && (
            <div className="flex items-start self-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-card">
                <Bot className="w-5 h-5 text-card-foreground" />
              </div>
              <div className="px-4 py-3 rounded-lg bg-card text-card-foreground rounded-bl-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 border-t bg-background shrink-0">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading || !webhookUrl}
            className="flex-1"
            aria-label="Your message"
            style={{marginLeft: "50px"}}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim() || !webhookUrl} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Send className="w-5 h-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
