
import { Religion } from "@/pages/Index";

interface AnimatedSymbolsProps {
  religion: Religion;
}

const AnimatedSymbols = ({ religion }: AnimatedSymbolsProps) => {
  const renderHinduSymbols = () => (
    <>
      {/* Krishna's Flute */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <div className="text-6xl transform rotate-45 text-orange-400">🎵</div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce opacity-15">
        <div className="text-4xl text-red-400">🪷</div>
      </div>
      <div className="absolute bottom-32 left-1/4 animate-pulse opacity-10">
        <div className="text-8xl text-yellow-500">🕉️</div>
      </div>
      <div className="absolute bottom-20 right-1/3 animate-float opacity-20">
        <div className="text-5xl text-pink-400">🙏</div>
      </div>
    </>
  );

  const renderMuslimSymbols = () => (
    <>
      {/* Crescent Moon */}
      <div className="absolute top-16 right-16 animate-slow-spin opacity-20">
        <div className="text-7xl text-emerald-400">☪️</div>
      </div>
      <div className="absolute top-1/3 left-12 animate-pulse opacity-15">
        <div className="text-5xl text-teal-400">🌙</div>
      </div>
      <div className="absolute bottom-40 right-20 animate-float opacity-10">
        <div className="text-6xl text-blue-400">⭐</div>
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-bounce opacity-20">
        <div className="text-4xl text-green-400">🕌</div>
      </div>
    </>
  );

  const renderSikhSymbols = () => (
    <>
      {/* Khanda */}
      <div className="absolute top-24 left-16 animate-glow opacity-20">
        <div className="text-7xl text-orange-500">☬</div>
      </div>
      <div className="absolute top-1/2 right-12 animate-pulse opacity-15">
        <div className="text-5xl text-blue-500">🔱</div>
      </div>
      <div className="absolute bottom-36 left-1/4 animate-float opacity-10">
        <div className="text-6xl text-yellow-500">🎯</div>
      </div>
      <div className="absolute bottom-20 right-1/4 animate-bounce opacity-20">
        <div className="text-4xl text-orange-400">🙏</div>
      </div>
    </>
  );

  const renderChristianSymbols = () => (
    <>
      {/* Cross */}
      <div className="absolute top-20 right-12 animate-radiate opacity-20">
        <div className="text-7xl text-blue-400">✞</div>
      </div>
      <div className="absolute top-1/3 left-16 animate-float opacity-15">
        <div className="text-5xl text-purple-400">🕊️</div>
      </div>
      <div className="absolute bottom-32 right-1/3 animate-pulse opacity-10">
        <div className="text-6xl text-pink-400">❤️</div>
      </div>
      <div className="absolute bottom-24 left-1/4 animate-bounce opacity-20">
        <div className="text-4xl text-blue-500">🙏</div>
      </div>
    </>
  );

  const renderSymbols = () => {
    switch (religion) {
      case 'hindu':
        return renderHinduSymbols();
      case 'muslim':
        return renderMuslimSymbols();
      case 'sikh':
        return renderSikhSymbols();
      case 'christian':
        return renderChristianSymbols();
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {renderSymbols()}
      
      {/* Additional floating particles */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full opacity-25 animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-gradient-to-r from-green-300 to-blue-300 rounded-full opacity-40 animate-pulse"></div>
    </div>
  );
};

export default AnimatedSymbols;
