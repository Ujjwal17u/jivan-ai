import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ChatInterface from "@/components/ChatInterface";
import ReligionCard from "@/components/ReligionCard";
import jivanLogo from "@/assets/jivan-ai-logo.png";
export type Religion = 'hindu' | 'muslim' | 'sikh' | 'christian';
const religions = [{
  id: 'hindu' as Religion,
  name: 'Hindu',
  greeting: 'नमस्ते',
  description: 'Find peace in ancient wisdom',
  symbol: '🕉️',
  gradient: 'from-orange-400 via-red-400 to-pink-400',
  bgColor: 'bg-gradient-to-br from-orange-50 to-red-50'
}, {
  id: 'muslim' as Religion,
  name: 'Muslim',
  greeting: 'السلام عليكم',
  description: 'Seek guidance in faith',
  symbol: '☪️',
  gradient: 'from-emerald-400 via-teal-400 to-blue-400',
  bgColor: 'bg-gradient-to-br from-emerald-50 to-blue-50'
}, {
  id: 'sikh' as Religion,
  name: 'Sikh',
  greeting: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
  description: 'Walk the path of truth',
  symbol: '☬',
  gradient: 'from-orange-400 via-yellow-400 to-blue-400',
  bgColor: 'bg-gradient-to-br from-orange-50 to-blue-50'
}, {
  id: 'christian' as Religion,
  name: 'Christian',
  greeting: 'Peace be with you',
  description: 'Find comfort in divine love',
  symbol: '✞',
  gradient: 'from-blue-400 via-purple-400 to-pink-400',
  bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50'
}];
const Index = () => {
  const [selectedReligion, setSelectedReligion] = useState<Religion | null>(null);
  if (selectedReligion) {
    return <ChatInterface religion={selectedReligion} onBack={() => setSelectedReligion(null)} />;
  }
  return <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-orange-200 to-red-200 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="relative mb-12 animate-fade-in">
          {/* Logo */}
          <div className="absolute top-0 right-0">
            
          </div>
          
          <div className="text-center">
            <div className="inline-block mb-4">
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/80 backdrop-blur-sm">
                🕊️ Spiritual AI Assistant
              </Badge>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Jivan AI
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your compassionate spiritual companion. Choose your faith tradition to begin a personalized, 
              culturally respectful conversation in a safe space designed for your spiritual journey.
            </p>
          </div>
        </div>

        {/* Religion Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {religions.map((religion, index) => <ReligionCard key={religion.id} religion={religion} index={index} onSelect={() => setSelectedReligion(religion.id)} />)}
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2">Privacy First</h3>
              <p className="text-sm text-gray-600">No login required. Your conversations are not stored.</p>
            </Card>
            <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-semibold mb-2">Culturally Adaptive</h3>
              <p className="text-sm text-gray-600">Interface and tone adapt to your faith tradition.</p>
            </Card>
            <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">Emotionally Safe</h3>
              <p className="text-sm text-gray-600">Designed for respectful, compassionate conversations.</p>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Built with respect for all faith traditions • Powered by AI • Open Source
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;