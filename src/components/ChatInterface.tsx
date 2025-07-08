
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import { Religion } from "@/pages/Index";
import AnimatedSymbols from "@/components/AnimatedSymbols";
import { getReligionTheme } from "@/utils/religionThemes";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  religion: Religion;
  onBack: () => void;
}

const ChatInterface = ({ religion, onBack }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const theme = getReligionTheme(religion);

  useEffect(() => {
    // Add welcome message
    const welcomeMessage: Message = {
      id: 'welcome',
      text: `${theme.greeting}! Welcome to your spiritual sanctuary. I'm here to listen, support, and provide guidance rooted in ${theme.faithName} wisdom. Feel free to share what's on your heart - this is a safe, judgment-free space for you.`,
      isUser: false,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [religion, theme]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Simulate AI response (replace with actual Gemini API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `Thank you for sharing that with me. In ${theme.faithName} tradition, we find strength in community and wisdom in reflection. Your feelings are valid, and seeking guidance shows great courage. ${theme.spiritualGuidance}`,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`min-h-screen ${theme.backgroundColor} ${theme.backgroundPattern} relative overflow-hidden`}>
      {/* Animated Background Symbols */}
      <AnimatedSymbols religion={religion} />

      {/* Header */}
      <div className={`${theme.headerBackground} backdrop-blur-md border-b ${theme.borderColor} sticky top-0 z-50`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBack}
                className={`${theme.textSecondary} hover:${theme.textPrimary}`}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-3">
                <div className={`text-2xl animate-pulse`}>{theme.primarySymbol}</div>
                <div>
                  <h1 className={`text-xl font-bold ${theme.textPrimary}`}>
                    Jivan AI - {theme.faithName}
                  </h1>
                  <p className={`text-sm ${theme.textSecondary}`}>
                    Your spiritual companion
                  </p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className={`${theme.accentBackground} ${theme.textPrimary}`}>
              <Sparkles className="w-3 h-3 mr-1" />
              AI Powered
            </Badge>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="container mx-auto px-4 py-6 flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <Card className={`
                  max-w-3xl p-4 ${
                    message.isUser 
                      ? `${theme.userMessageBackground} ${theme.textPrimary} ml-12` 
                      : `${theme.aiMessageBackground} ${theme.textPrimary} mr-12`
                  } border-0 shadow-lg
                `}>
                  <div className="flex items-start space-x-3">
                    {!message.isUser && (
                      <div className={`text-xl ${theme.textPrimary}`}>
                        {theme.primarySymbol}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="leading-relaxed">{message.text}</p>
                      <span className={`text-xs ${theme.textSecondary} mt-2 block`}>
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <Card className={`max-w-3xl p-4 ${theme.aiMessageBackground} border-0 shadow-lg mr-12`}>
                  <div className="flex items-center space-x-3">
                    <div className={`text-xl animate-pulse ${theme.textPrimary}`}>
                      {theme.primarySymbol}
                    </div>
                    <div className="flex space-x-1">
                      <div className={`w-2 h-2 ${theme.accentBackground} rounded-full animate-bounce`}></div>
                      <div className={`w-2 h-2 ${theme.accentBackground} rounded-full animate-bounce`} style={{animationDelay: '0.1s'}}></div>
                      <div className={`w-2 h-2 ${theme.accentBackground} rounded-full animate-bounce`} style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </Card>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <Card className={`${theme.inputBackground} backdrop-blur-md border-0 shadow-xl sticky bottom-6`}>
            <div className="p-4">
              <div className="flex space-x-4">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={`Share your thoughts with ${theme.faithName} wisdom...`}
                  className={`flex-1 ${theme.inputBorder} ${theme.textPrimary} ${theme.inputBackground} border-0 focus:ring-2 focus:ring-offset-0`}
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className={`${theme.primaryButton} hover:${theme.primaryButtonHover} transition-all duration-200`}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className={`text-xs ${theme.textSecondary} mt-2 text-center`}>
                Your privacy is protected. Conversations are not stored or monitored.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
