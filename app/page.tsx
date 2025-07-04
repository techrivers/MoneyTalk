import { ChatView } from "@/components/chat-view";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-background text-foreground">
      <header className="p-4 border-b shrink-0">
        <h1 className="text-2xl font-bold text-center font-headline">
          Quickbooks Chat
        </h1>
      </header>
      <ChatView />
    </main>
  );
}
