import { Send } from "lucide-react";

const messages = [
  {
    from: "bot",
    text: "Hi! How can I help you today?",
  },
  {
    from: "user",
    text: "Can you help me build an MVP?",
  },
  {
    from: "bot",
    text: "Absolutely! I can help you build a launch-ready MVP in 30 days. What's your product idea?",
  },
  {
    from: "user",
    text: "A SaaS platform for project management",
  },
  {
    from: "bot",
    text: "Great choice! Let me connect you with our team...",
  },
];

export function ChatbotMockup() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border/30">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="text-xs font-bold text-primary-foreground">AI</span>
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold">AI Assistant</div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground">Online</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-3 overflow-hidden">
        {messages.map((msg, i) =>
          msg.from === "bot" ? (
            <div key={i} className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 shrink-0 mt-1" />
              <div className="bg-muted rounded-md p-3 max-w-[80%]">
                <span className="text-xs">{msg.text}</span>
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-md p-3 max-w-[80%]">
                <span className="text-xs">{msg.text}</span>
              </div>
            </div>
          ),
        )}

        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full bg-primary/20 shrink-0 mt-1" />
          <div className="bg-muted rounded-md px-3 py-2 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-pulse [animation-delay:0.2s]" />
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-pulse [animation-delay:0.4s]" />
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 bg-muted rounded-md p-2">
          <span className="text-xs text-muted-foreground flex-1 pl-1">
            Type a message...
          </span>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Send className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}
