"use client";

import type React from "react";

import { useState } from "react";
import { Send, Paperclip } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (content: string) => void;
}

export default function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="p-4 border-t border-gray-700">
      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        <button
          type="button"
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
        >
          <Paperclip className="w-5 h-5" />
        </button>

        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="اكتب رسالة..."
            className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg py-3 px-4 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-32"
            rows={1}
            style={{ minHeight: "44px" }}
          />
        </div>

        <button
          type="submit"
          disabled={!message.trim()}
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
