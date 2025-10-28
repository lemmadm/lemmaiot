import React, { useRef, useEffect, useState } from 'react';
import { useAIAgent } from '../hooks/useAIAgent';
import { CloseIcon, SendIcon } from './Icons';

const AIAgentModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { messages, isLoading, sendMessage } = useAIAgent();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Auto-scroll to the latest message
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  // Reset typing state when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setIsTyping(false);
      setInputValue('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const lastMessage = messages[messages.length - 1];
  const suggestions = lastMessage?.role === 'model' && !isLoading ? lastMessage.suggestions : [];
  const whatsAppLink = lastMessage?.role === 'model' && !isLoading ? lastMessage.whatsAppLink : null;

  const handleSuggestionClick = (text: string) => {
    if (isLoading) return;
    if (text.toLowerCase() === 'others' || text.toLowerCase() === 'something else') {
      setIsTyping(true);
    } else {
      sendMessage(text);
    }
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue('');
      setIsTyping(false);
    }
  };
  
  // Simple parser to convert markdown to HTML for display
  const parseMessageContent = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
      .replace(/_(.*?)_/g, '<em>$1</em>') // Italic
      .replace(/\n/g, '<br />'); // Newlines
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeInUp" style={{animationDuration: '0.3s'}}>
      <div className="bg-brand-blue-dark rounded-2xl shadow-2xl w-full max-w-lg h-[90vh] max-h-[700px] flex flex-col relative border border-white/20">
        <div className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
          <div>
             <h2 className="text-xl font-bold text-white">LemmaIoT AI Assistant</h2>
             <p className="text-sm text-blue-200">Let's find the perfect solution for you.</p>
          </div>
          <button onClick={onClose} className="p-2 text-blue-200 hover:text-white transition-colors rounded-full hover:bg-white/10" aria-label="Close">
            <CloseIcon />
          </button>
        </div>
        
        <div ref={chatContainerRef} className="flex-1 p-6 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs md:max-w-md rounded-2xl px-4 py-3 ${msg.role === 'user' ? 'bg-brand-blue text-white rounded-br-none' : 'bg-gray-700/50 text-blue-100 rounded-bl-none'}`}>
                <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: parseMessageContent(msg.text) }}></p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="max-w-xs md:max-w-md rounded-2xl px-4 py-3 bg-gray-700/50 text-blue-100 rounded-bl-none flex items-center space-x-2">
                  <span className="w-2 h-2 bg-brand-pink rounded-full animate-pulse" style={{animationDelay: '0s'}}></span>
                  <span className="w-2 h-2 bg-brand-pink rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                  <span className="w-2 h-2 bg-brand-pink rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
               </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-white/10 flex-shrink-0">
          {whatsAppLink ? (
             <a 
                href={whatsAppLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center bg-brand-pink text-white px-6 py-3 rounded-full hover:bg-brand-pink-light transition-all duration-300 font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 block"
              >
                Send to LemmaIoT on WhatsApp
             </a>
          ) : isTyping ? (
            <form onSubmit={handleTextSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your response..."
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-pink"
                autoFocus
              />
              <button type="submit" disabled={isLoading || !inputValue.trim()} className="p-3 bg-brand-pink rounded-full text-white hover:bg-brand-pink-light transition-colors disabled:bg-pink-800/50 disabled:cursor-not-allowed">
                <SendIcon />
              </button>
            </form>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {suggestions && suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  disabled={isLoading}
                  className="bg-white/10 text-white text-sm text-center p-3 rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAgentModal;