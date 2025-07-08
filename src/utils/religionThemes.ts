
import { Religion } from "@/pages/Index";

export interface ReligionTheme {
  faithName: string;
  greeting: string;
  primarySymbol: string;
  backgroundColor: string;
  backgroundPattern: string;
  headerBackground: string;
  textPrimary: string;
  textSecondary: string;
  borderColor: string;
  accentBackground: string;
  userMessageBackground: string;
  aiMessageBackground: string;
  inputBackground: string;
  inputBorder: string;
  primaryButton: string;
  primaryButtonHover: string;
  spiritualGuidance: string;
}

export const getReligionTheme = (religion: Religion): ReligionTheme => {
  const themes: Record<Religion, ReligionTheme> = {
    hindu: {
      faithName: "Hindu",
      greeting: "🙏 नमस्ते",
      primarySymbol: "🕉️",
      backgroundColor: "bg-gradient-to-br from-orange-50 via-red-50 to-pink-50",
      backgroundPattern: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]",
      headerBackground: "bg-gradient-to-r from-orange-100/80 to-red-100/80",
      textPrimary: "text-orange-900",
      textSecondary: "text-orange-700",
      borderColor: "border-orange-200",
      accentBackground: "bg-orange-200",
      userMessageBackground: "bg-gradient-to-r from-orange-100 to-red-100",
      aiMessageBackground: "bg-white/90",
      inputBackground: "bg-white/95",
      inputBorder: "border-orange-300 focus:ring-orange-400",
      primaryButton: "bg-gradient-to-r from-orange-500 to-red-500 text-white",
      primaryButtonHover: "from-orange-600 to-red-600",
      spiritualGuidance: "Remember, as the Bhagavad Gita teaches us, we find peace in surrender and action without attachment to results."
    },
    muslim: {
      faithName: "Muslim",
      greeting: "☾ السلام عليكم",
      primarySymbol: "☪️",
      backgroundColor: "bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50",
      backgroundPattern: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]",
      headerBackground: "bg-gradient-to-r from-emerald-100/80 to-teal-100/80",
      textPrimary: "text-emerald-900",
      textSecondary: "text-emerald-700",
      borderColor: "border-emerald-200",
      accentBackground: "bg-emerald-200",
      userMessageBackground: "bg-gradient-to-r from-emerald-100 to-teal-100",
      aiMessageBackground: "bg-white/90",
      inputBackground: "bg-white/95",
      inputBorder: "border-emerald-300 focus:ring-emerald-400",
      primaryButton: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white",
      primaryButtonHover: "from-emerald-600 to-teal-600",
      spiritualGuidance: "As Allah (SWT) tells us in the Quran, 'And it is He who created the heavens and earth in truth. And the day He says, Be, and it is, His word is the truth.'"
    },
    sikh: {
      faithName: "Sikh",
      greeting: "🙏 ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
      primarySymbol: "☬",
      backgroundColor: "bg-gradient-to-br from-orange-50 via-yellow-50 to-blue-50",
      backgroundPattern: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]",
      headerBackground: "bg-gradient-to-r from-orange-100/80 to-blue-100/80",
      textPrimary: "text-orange-900",
      textSecondary: "text-orange-700",
      borderColor: "border-orange-200",
      accentBackground: "bg-orange-200",
      userMessageBackground: "bg-gradient-to-r from-orange-100 to-blue-100",
      aiMessageBackground: "bg-white/90",
      inputBackground: "bg-white/95",
      inputBorder: "border-orange-300 focus:ring-orange-400",
      primaryButton: "bg-gradient-to-r from-orange-500 to-blue-500 text-white",
      primaryButtonHover: "from-orange-600 to-blue-600",
      spiritualGuidance: "Guru Nanak Dev Ji reminds us that 'Truth is high, but higher still is truthful living.' Your journey toward truth is blessed."
    },
    christian: {
      faithName: "Christian",
      greeting: "✞ Peace be with you",
      primarySymbol: "✞",
      backgroundColor: "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50",
      backgroundPattern: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]",
      headerBackground: "bg-gradient-to-r from-blue-100/80 to-purple-100/80",
      textPrimary: "text-blue-900",
      textSecondary: "text-blue-700",
      borderColor: "border-blue-200",
      accentBackground: "bg-blue-200",
      userMessageBackground: "bg-gradient-to-r from-blue-100 to-purple-100",
      aiMessageBackground: "bg-white/90",
      inputBackground: "bg-white/95",
      inputBorder: "border-blue-300 focus:ring-blue-400",
      primaryButton: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
      primaryButtonHover: "from-blue-600 to-purple-600",
      spiritualGuidance: "As Jesus taught us, 'Come to me, all you who are weary and burdened, and I will give you rest.' You are loved and never alone."
    }
  };

  return themes[religion];
};
