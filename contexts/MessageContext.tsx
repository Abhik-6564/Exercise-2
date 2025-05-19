import React, { createContext, useState, useContext } from 'react';

type MessageContextType = {
  messages: string[];
  addMessage: (msg: string) => void;
  editMessage: (index: number, msg: string) => void;
  deleteMessage: (index: number) => void;
};

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (msg: string) => {
    setMessages(prev => [...prev, msg]);
  };

  const editMessage = (index: number, msg: string) => {
    setMessages(prev => prev.map((m, i) => (i === index ? msg : m)));
  };

  const deleteMessage = (index: number) => {
    setMessages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage, editMessage, deleteMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => {
  const context = useContext(MessageContext);
  if (!context) throw new Error("useMessages must be used inside a MessageProvider");
  return context;
};
