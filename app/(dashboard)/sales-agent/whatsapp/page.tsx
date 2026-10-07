"use client";

import { useState } from "react";
import { MessageSquare, Send, CheckCheck, Paperclip, Smile, Search, Phone } from "lucide-react";

export default function WhatsAppPage() {
  const [activeChat, setActiveChat] = useState("1");
  const [message, setMessage] = useState("");

  const chats = [
    { id: "1", name: "Rajesh Sharma", unread: 0, lastMsg: "Please send the loan schedule.", time: "10:30 AM" },
    { id: "2", name: "Ananya Verma", unread: 2, lastMsg: "When will the executive visit?", time: "09:45 AM" },
    { id: "3", name: "Vikram Malhotra", unread: 0, lastMsg: "Got the disbursement confirmation.", time: "Yesterday" },
  ];

  return (
    <div className="flex h-[calc(100vh-8rem)] overflow-hidden rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 shadow-sm backdrop-blur-sm">
      {/* Left Chat List */}
      <div className="flex w-80 flex-col border-r border-slate-800 bg-[#030712]/70">
        <div className="p-3.5 border-b border-slate-800">
          <div className="relative">
            <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full rounded-xl border border-slate-800 bg-[#020617] py-2 pl-9 pr-3 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-slate-800/40">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`flex cursor-pointer items-start justify-between p-3.5 transition-colors ${
                activeChat === chat.id ? "bg-sky-500/10 border-l-2 border-sky-400" : "hover:bg-slate-800/30"
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-xs font-bold text-sky-400">
                  {chat.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="truncate text-xs font-bold text-white">{chat.name}</span>
                  <span className="truncate text-[11px] text-slate-400">{chat.lastMsg}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="text-[10px] text-slate-500">{chat.time}</span>
                {chat.unread > 0 && (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-bold text-white">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Chat Window */}
      <div className="flex flex-1 flex-col justify-between bg-[#04091e]">
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-3.5 bg-[#030712]/50">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/20 text-xs font-bold text-sky-400">
              RS
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Rajesh Sharma</span>
              <span className="text-[10px] text-emerald-400">Online &bull; Personal Loan ₹5L</span>
            </div>
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 text-sky-400 hover:border-sky-400">
            <Phone size={14} />
          </button>
        </div>

        {/* Messages Stream */}
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-6">
          <div className="self-start max-w-sm rounded-2xl rounded-tl-none bg-slate-800/80 p-3.5 text-xs text-white">
            Hello, could you please send me the final interest rate sanction letter?
            <span className="mt-1 block text-right text-[10px] text-slate-400">10:28 AM</span>
          </div>

          <div className="self-end max-w-sm rounded-2xl rounded-tr-none bg-sky-600 p-3.5 text-xs text-white">
            Sure Rajesh Ji, sending the verified sanction breakdown right now. Interest rate locked at 10.5% p.a.
            <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-sky-200">
              <span>10:30 AM</span>
              <CheckCheck size={12} />
            </div>
          </div>
        </div>

        {/* Input Bar */}
        <div className="border-t border-slate-800 bg-[#030712]/80 p-3.5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!message.trim()) return;
              setMessage("");
            }}
            className="flex items-center gap-2"
          >
            <button type="button" className="text-slate-400 hover:text-white">
              <Paperclip size={18} />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your WhatsApp message..."
              className="flex-1 rounded-xl border border-slate-800 bg-[#020617] px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            />
            <button
              type="submit"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md hover:opacity-90"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
