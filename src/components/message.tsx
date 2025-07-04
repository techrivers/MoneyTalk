import { cn } from "@/lib/utils";
import { User, Bot, AlertTriangle } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface MessageProps {
  sender: "user" | "webhook" | "error";
  text: string;
}

export function Message({ sender, text }: MessageProps) {
  const isUser = sender === "user";

  const AvatarIcon =
    sender === "user" ? User : sender === "webhook" ? Bot : AlertTriangle;
    
  const avatarClasses = 
    sender === "user" ? "bg-primary text-primary-foreground"
    : sender === "webhook" ? "bg-card text-card-foreground"
    : "bg-destructive text-destructive-foreground"

  const messageClasses =
    sender === "user"
      ? "bg-primary text-primary-foreground"
      : sender === "webhook"
      ? "bg-card text-card-foreground"
      : "bg-destructive text-destructive-foreground";

  return (
    <div
      className={cn(
        "flex items-start gap-3 w-fit max-w-[85%]",
        isUser ? "self-end flex-row-reverse" : "self-start"
      )}
    >
      <Avatar className="w-8 h-8 shrink-0">
        <AvatarFallback className={cn("w-8 h-8 text-white", avatarClasses)}>
          <AvatarIcon className="w-4 h-4" />
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "px-4 py-2 rounded-lg shadow-md",
          messageClasses,
          isUser ? "rounded-br-none" : "rounded-bl-none"
        )}
      >
        <ReactMarkdown
          className="prose prose-sm dark:prose-invert max-w-none prose-p:my-0 prose-headings:my-2 prose-ul:my-2 prose-ol:my-2"
          remarkPlugins={[remarkGfm]}
        >
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
}
