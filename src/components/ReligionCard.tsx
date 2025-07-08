
import { Card } from "@/components/ui/card";
import { Religion } from "@/pages/Index";

interface ReligionData {
  id: Religion;
  name: string;
  greeting: string;
  description: string;
  symbol: string;
  gradient: string;
  bgColor: string;
}

interface ReligionCardProps {
  religion: ReligionData;
  index: number;
  onSelect: () => void;
}

const ReligionCard = ({ religion, index, onSelect }: ReligionCardProps) => {
  return (
    <Card 
      className={`
        relative p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl 
        bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden group
        animate-fade-in
      `}
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={onSelect}
    >
      {/* Background Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${religion.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      {/* Animated Symbol */}
      <div className="relative z-10 text-center">
        <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
          {religion.symbol}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-800">{religion.name}</h3>
        
        <div className="text-sm text-gray-600 mb-3 font-medium">
          {religion.greeting}
        </div>
        
        <p className="text-sm text-gray-500 leading-relaxed">
          {religion.description}
        </p>
      </div>

      {/* Hover Effects */}
      <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-bounce"></div>
    </Card>
  );
};

export default ReligionCard;
