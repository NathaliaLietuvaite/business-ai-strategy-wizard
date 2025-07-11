import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const NathaliaChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hallo! Ich bin Nathalia, Ihr KI-Assistent für den Business AI Enforcer. Wie kann ich Ihnen helfen?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('analyse') || input.includes('start')) {
      return 'Gerne helfe ich Ihnen bei der KI-Analyse! Klicken Sie auf "Analyse starten" um den geführten Fragebogen zu beginnen. Dieser hilft uns, Ihre spezifischen Anforderungen zu verstehen.';
    }
    
    if (input.includes('kosten') || input.includes('preis')) {
      return 'Die Basis-Analyse ist kostenlos! Sie erhalten eine detaillierte Einschätzung Ihres KI-Potentials ohne versteckte Kosten. Für weiterführende Beratung können wir gerne individuelle Angebote erstellen.';
    }
    
    if (input.includes('dauer') || input.includes('zeit')) {
      return 'Die Analyse dauert etwa 5-10 Minuten. Sie erhalten sofort eine Zusammenfassung, die Sie als Grundlage für weitere Entscheidungen nutzen können.';
    }
    
    if (input.includes('daten') || input.includes('sicherheit')) {
      return 'Ihre Daten sind bei uns sicher! Wir speichern keine persönlichen Informationen dauerhaft und arbeiten DSGVO-konform. Die Analyse erfolgt in Echtzeit ohne Datenspeicherung.';
    }
    
    if (input.includes('hilfe') || input.includes('help')) {
      return 'Ich kann Ihnen bei folgenden Themen helfen:\n• Informationen zur KI-Analyse\n• Fragen zu Kosten und Dauer\n• Datenschutz und Sicherheit\n• Erste Schritte mit dem Business AI Enforcer';
    }
    
    return 'Das ist eine interessante Frage! Für spezifische Beratung empfehle ich Ihnen, unsere kostenlose Analyse zu durchlaufen. So kann ich Ihnen gezielteren Support bieten. Haben Sie weitere Fragen zum Business AI Enforcer?';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-primary shadow-glow hover:shadow-card transition-all duration-300 transform hover:scale-110"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-card border border-border rounded-lg shadow-card overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-primary p-4 text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Nathalia</h3>
                <p className="text-xs opacity-90">KI-Support Assistent</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 h-64 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="bg-ai-primary/20 p-1.5 rounded-full">
                      <Bot className="h-3 w-3 text-ai-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-muted text-muted-foreground'
                        : 'bg-ai-primary text-white'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-1 opacity-70`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {!message.isBot && (
                    <div className="bg-ai-secondary/20 p-1.5 rounded-full">
                      <User className="h-3 w-3 text-ai-secondary" />
                    </div>
                  )}
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="bg-ai-primary/20 p-1.5 rounded-full">
                    <Bot className="h-3 w-3 text-ai-primary" />
                  </div>
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg text-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-ai-primary rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-ai-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-ai-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Schreiben Sie Ihre Frage..."
                className="flex-1"
              />
              <Button onClick={sendMessage} size="icon" className="bg-ai-primary hover:bg-ai-primary/80">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NathaliaChat;