import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Paperclip, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getHealthAdvice } from "@/lib/gemini";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  attachments?: File[];
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi there, welcome to AI Gizi Assistant. Can I help you?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() && attachments.length === 0) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
      attachments,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setAttachments([]);
    setIsLoading(true);

    try {
      const response = await getHealthAdvice(input);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments([...attachments, ...Array.from(e.target.files)]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="space-y-4 px-4 md:px-[15%] pt-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] md:max-w-[70%] space-y-1 ${message.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-500">
                    {message.sender === "user" ? "You" : "AI Gizi Assistant"}
                  </span>
                </div>
                <div
                  className={`px-4 py-2 rounded-xl ${message.sender === "user" ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md" : "bg-white border border-gray-200 text-gray-900 shadow-sm backdrop-blur-sm"}`}
                >
                  <ReactMarkdown className="prose prose-sm max-w-none">
                    {message.text}
                  </ReactMarkdown>
                  {message.attachments?.map((file, index) => (
                    <div key={index} className="mt-1 text-xs">
                      📎 {file.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm backdrop-blur-sm">
                <div className="animate-pulse flex space-x-1">
                  <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                  <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                  <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t">
        {attachments.length > 0 && (
          <div className="px-4 md:px-[15%] py-2 flex gap-1.5 flex-wrap border-b">
            {attachments.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"
              >
                <span className="text-xs truncate max-w-[150px]">
                  {file.name}
                </span>
                <button
                  onClick={() => removeAttachment(index)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="px-4 md:px-[15%] py-3">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Ask about nutrition and health..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              disabled={isLoading}
              className="flex-1"
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              className="hidden"
              multiple
            />
            <Button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
