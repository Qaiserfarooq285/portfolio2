'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cvData, chatbotKnowledge } from '@/data/cvData';

const greetingMessage = "Hello. I'm Qaiser's portfolio AI assistant. How can I help you today? Would you like to know about Qaiser's skills, experience, projects or availabality?";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: greetingMessage,
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('salam')) {
      return greetingMessage;
    }

    if (lowerMessage.includes('whatsapp') || lowerMessage.includes('wa.me')) {
      return `You can contact directly on WhatsApp: ${cvData.personal.social.whatsapp}`;
    }

    if (lowerMessage.includes('who are you') || lowerMessage.includes('your name')) {
      return `I'm Qaiser's portfolio assistant. Qaiser Farooq is an AI Engineer and Researcher.`;
    }

    if (lowerMessage.includes('location') || lowerMessage.includes('where are you')) {
      return `Qaiser is based in ${cvData.personal.location}.`;
    }

    if (lowerMessage.includes('available') || lowerMessage.includes('work') || lowerMessage.includes('hire')) {
      return chatbotKnowledge.availability;
    }

    if (lowerMessage.includes('skill') || lowerMessage.includes('expert') || lowerMessage.includes('proficient')) {
      return chatbotKnowledge.skills_summary;
    }

    if (lowerMessage.includes('education') || lowerMessage.includes('studied') || lowerMessage.includes('degree')) {
      return chatbotKnowledge.education_summary;
    }

    if (lowerMessage.includes('experience') || lowerMessage.includes('worked') || lowerMessage.includes('job')) {
      return chatbotKnowledge.experience_summary;
    }

    if (lowerMessage.includes('project') || lowerMessage.includes('built') || lowerMessage.includes('portfolio')) {
      return chatbotKnowledge.projects_summary;
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
      return `You can reach Qaiser at:\n📧 Email: ${cvData.personal.email}\n📱 Phone: ${cvData.personal.phone}\n💬 WhatsApp: ${cvData.personal.social.whatsapp}`;
    }

    const defaultResponses = [
      `That's a great question! Qaiser is available for opportunities. You can contact him on WhatsApp: ${cvData.personal.social.whatsapp}.`,
      `I can help answer questions about Qaiser's background, projects, and expertise. He is available and reachable on WhatsApp: ${cvData.personal.social.whatsapp}.`,
      `I'm here to provide information about Qaiser's professional profile. He is available for work—WhatsApp: ${cvData.personal.social.whatsapp}.`,
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const messageText = input.trim();
    const userMessage = {
      id: generateId(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText }),
      });

      if (!response.ok) throw new Error('API request failed');

      const data = await response.json();
      const botReply = data?.reply || generateBotResponse(messageText);

      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          text: botReply,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          text: generateBotResponse(messageText),
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    'What are your skills?',
    'Tell me about your projects',
    'How can I contact you?',
    'Are you available for work?',
  ];

  return (
    <>
      <section id="chatbot" className="h-0 w-0" aria-hidden="true"></section>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white text-black text-sm px-4 py-2 rounded-xl shadow-lg"
          >
            Ask me anything!
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-16 h-16 rounded-full bg-white text-black shadow-2xl flex items-center justify-center"
          aria-label="Open chat"
        >
          <span className="text-2xl">💬</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-[min(92vw,400px)] h-[550px] bg-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="px-4 py-3 border-b border-white/15 bg-white/5 flex justify-between items-center">
              <div>
                <p className="text-white font-semibold">Qaiser's Assistant</p>
                <p className="text-gray-400 text-xs">Ask about my work</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-white text-black'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 px-4 py-2 rounded-lg">
                    <p className="text-sm text-gray-400">Thinking...</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-white/15 space-y-3">
              <div className="flex gap-2 flex-wrap">
                {quickQuestions.slice(0, 2).map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                      setTimeout(() => handleSend(), 0);
                    }}
                    className="text-xs px-2 py-1 bg-white/10 rounded hover:bg-white/20 transition"
                  >
                    {q.substring(0, 15)}...
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 bg-white/10 rounded text-white placeholder-gray-500 outline-none focus:bg-white/20 transition"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="px-4 py-2 bg-white text-black rounded font-semibold hover:bg-gray-200 disabled:opacity-50 transition"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
