import { useState, useEffect } from 'react';
import { getAIAgentResponse } from '../services/geminiService';

export interface Message {
  role: 'user' | 'model';
  text: string;
  suggestions?: string[];
  whatsAppLink?: string;
}

export const useAIAgent = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const WHATSAPP_NUMBER = "2347083682007"; // Your WhatsApp number

  useEffect(() => {
    // Start the conversation with a greeting from the AI
    const initialMessage: Message = {
      role: 'model',
      text: "Hello! I'm the LemmaIoT AI Assistant. I can help figure out the best digital solution for your business.<br><br>To start, what is your primary goal today?",
      suggestions: ['I need a website', 'Grow my business', 'Automate my business', 'Something else']
    };
    setMessages([initialMessage]);
  }, []);

  const sendMessage = async (userInput: string) => {
    // Add user message to history
    const userMessage: Message = { role: 'user', text: userInput };
    // Optimistically update UI
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);
    setError(null);

    try {
      const historyForApi = newMessages.map(m => ({role: m.role, text: m.text}));
      const response = await getAIAgentResponse(historyForApi);
      
      const { text, suggestions, isConclusion } = response;
      
      let whatsAppLink: string | undefined = undefined;
      
      if (isConclusion) {
         // Prepare summary for WhatsApp, replacing HTML breaks with newlines
         const summaryForWhatsApp = text
            .replace(/<br\s*\/?>/gi, '\n')
            .replace(/\*\*(.*?)\*\*/g, '*$1*'); // Convert bold markdown for WhatsApp

         const encodedText = encodeURIComponent(`Hello LemmaIoT, I used your AI Assistant and here's a summary of my needs:\n\n${summaryForWhatsApp}`);
         whatsAppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
      }
      
      const modelMessage: Message = {
        role: 'model',
        text,
        suggestions,
        whatsAppLink
      };

      setMessages(prev => [...prev, modelMessage]);

    } catch (err) {
      console.error("Error in useAIAgent:", err);
      setError('Sorry, I encountered an error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, error, sendMessage };
};