
import React, { useState, useEffect } from 'react';
import { 
  Home, 
  MessageCircle, 
  ShoppingBag, 
  Info, 
  Moon, 
  Sun, 
  ArrowLeft,
  Camera,
  Upload,
  Droplets,
  Wind,
  Thermometer,
  ShieldCheck,
  AlertTriangle,
  MapPin,
  Mic,
  Send,
  Star,
  CheckCircle,
  HelpCircle,
  PhoneCall,
  Rocket,
  Siren,
  Users,
  Leaf,
  ChevronDown,
  ChevronRight,
  CloudRain,
  Sprout,
  Shovel,
  Zap,
  Loader2,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  Minus,
  Scale,
  Scroll,
  Filter,
  Users2,
  MessageSquare,
  Heart,
  Share2,
  Eye,
  Tractor,
  CalendarDays,
  Check
} from 'lucide-react';
import { Page, Language } from './types';
import { LANGUAGES, TRANSLATIONS, CROPS, SYMPTOMS, SEEDS, FAQS, MANDI_DATA, ANCESTRAL_NUZKHE, ORGANIC_CARE_METHODS, CROP_GROWTH_TIPS, COMMUNITY_POSTS, GOVT_SCHEMES, HOURLY_WEATHER_DATA } from './constants';
import { getKrishiBuddyResponse } from './services/gemini';

// Helper for translations
const t = (key: string, lang: Language) => TRANSLATIONS[key]?.[lang] || TRANSLATIONS[key]?.['en'] || key;

// Custom Tractor Logo component
const TractorLogo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="absolute -left-2 top-2 text-green-600 rotate-[-20deg]">
      <Leaf size={24} fill="currentColor" />
    </div>
    <div className="absolute -right-2 top-2 text-green-600 rotate-[20deg]">
      <Leaf size={24} fill="currentColor" />
    </div>
    <div className="text-green-800 dark:text-green-500">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="m10 11 11 .5c.6 0 1 .5 1 1.1v4.8c0 .6-.5 1.1-1.1 1.1H20" />
        <path d="M15 11V5c0-.6-.5-1.1-1.1-1.1H12L10 8" />
        <path d="M11 11H2" />
        <path d="m2 11 .5-4.5C2.6 5.9 3 5.5 3.5 5.5h1" />
        <circle cx="18" cy="18" r="4" />
        <circle cx="18" cy="18" r="1" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="5" cy="18" r=".5" />
      </svg>
    </div>
  </div>
);

/**
 * Standardized Organic Advice Card
 */
const OrganicAdviceCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  subtitle?: string, 
  description?: string, 
  steps?: string[],
  variant?: 'green' | 'yellow' | 'blue' | 'orange' | 'red',
  footer?: string,
  id?: string | number
}> = ({ 
  icon, 
  title, 
  subtitle, 
  description, 
  steps, 
  variant = 'green',
  footer,
  id
}) => {
  const themes = {
    green: 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800 text-green-700',
    yellow: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-100 dark:border-yellow-800 text-yellow-700',
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800 text-blue-700',
    orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800 text-orange-700',
    red: 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800 text-red-700',
  };

  return (
    <div key={id} className={`rounded-3xl p-5 shadow-sm border-2 ${themes[variant]} space-y-4 transition-all duration-300`}>
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-2xl bg-white dark:bg-gray-800 shadow-sm`}>
          {icon}
        </div>
        <div>
          <h4 className="font-black text-gray-800 dark:text-white uppercase tracking-tight leading-tight">{title}</h4>
          {subtitle && <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{subtitle}</p>}
        </div>
      </div>
      
      {description && (
        <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300 font-medium italic">
          "{description}"
        </p>
      )}

      {steps && steps.length > 0 && (
        <div className="space-y-2">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start space-x-3 text-xs font-medium bg-white/50 dark:bg-gray-800/50 p-3 rounded-xl border border-white/20">
              <span className={`w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-current text-white text-[10px] font-black`}>
                <span className="text-white">{i + 1}</span>
              </span>
              <span className="text-gray-700 dark:text-gray-200">{step}</span>
            </div>
          ))}
        </div>
      )}

      {footer && (
        <div className="pt-2 border-t border-white/30">
          <p className="text-[10px] font-bold uppercase tracking-tighter opacity-70 italic">{footer}</p>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [lang, setLang] = useState<Language>('en');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'buddy', text: string }[]>([
    { role: 'buddy', text: 'Namaste! I am KrishiBuddy. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [location, setLocation] = useState<string>('');

  // Growth Tips State
  const [selectedCropId, setSelectedCropId] = useState<string>(CROPS[0].id);

  // Disease Scan States
  const [scanCrop, setScanCrop] = useState<string | null>(null);
  const [scanSymptoms, setScanSymptoms] = useState<string[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<boolean>(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation(`${pos.coords.latitude}, ${pos.coords.longitude}`);
      });
    }
  }, []);

  const handleSendMessage = async (customText?: string) => {
    const text = customText || input;
    if (!text.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setIsTyping(true);

    const response = await getKrishiBuddyResponse(text, location);
    setMessages(prev => [...prev, { role: 'buddy', text: response || 'I am not sure, let me check.' }]);
    setIsTyping(false);
  };

  const buySeed = (seedName: string, qty: string) => {
    setCurrentPage(Page.BUDDY);
    handleSendMessage(`I want to buy ${qty} of ${seedName} seeds.`);
  };

  const handleStartScan = () => {
    if (!scanCrop) return;
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult(true);
    }, 2500);
  };

  const toggleSymptom = (id: string) => {
    setScanSymptoms(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const renderHome = () => {
    return (
      <div className="p-4 space-y-6 pb-24 animate-in fade-in duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TractorLogo className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold text-green-800 dark:text-green-400 leading-none">KrishiBot</h1>
              <p className="text-[8px] font-bold text-green-600 tracking-widest uppercase">Farming Made Simple</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-white dark:bg-gray-800 border rounded px-2 py-1 text-sm font-medium"
            >
              {LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
            </select>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </button>
          </div>
        </div>

        <div className="space-y-1 py-2">
          <h2 className="text-2xl font-black text-gray-800 dark:text-white tracking-tighter leading-tight">
            {t('welcome_greeting', lang)}
          </h2>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {t('welcome_subtext', lang)}
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-sm text-green-600 dark:text-green-400 font-medium">Ludhiana, Punjab</p>
            <h2 className="text-3xl font-bold dark:text-white">32°C ☀️</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('action_best_spray', lang)}</p>
          </div>
          <button onClick={() => setCurrentPage(Page.WEATHER)} className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-bold">{t('details', lang)}</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { id: Page.DISEASE_SCAN, label: t('scan', lang), icon: '🔍', color: 'bg-red-100 text-red-700' },
            { id: Page.WEATHER, label: t('weather', lang), icon: '☀️', color: 'bg-blue-100 text-blue-700' },
            { id: Page.MANDI, label: t('mandi', lang), icon: '⚖️', color: 'bg-orange-100 text-orange-700' },
            { id: Page.GROWTH_TIPS, label: t('growth', lang), icon: '🌱', color: 'bg-green-100 text-green-700' },
            { id: Page.SOIL_HEALTH, label: t('soil', lang), icon: '🪵', color: 'bg-yellow-100 text-yellow-800' },
            { id: Page.MARKET, label: t('seed_store', lang), icon: '🏪', color: 'bg-purple-100 text-purple-700' },
            { id: Page.SCHEMES, label: t('schemes', lang), icon: '📜', color: 'bg-teal-100 text-teal-700' },
            { id: Page.NUZKHE, label: t('nuzkhe', lang), icon: '📜', color: 'bg-amber-100 text-amber-800' }
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => setCurrentPage(item.id as Page)}
              className={`${item.color} p-4 rounded-2xl flex flex-col items-center justify-center space-y-2 shadow-sm active:scale-95 transition-transform`}
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-xs font-bold uppercase tracking-wide">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-[32px] shadow-lg border border-green-100 dark:border-green-900 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Users2 size={120} />
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-green-600 text-white p-4 rounded-2xl shadow-xl shadow-green-200 dark:shadow-none">
              <Users2 size={32} />
            </div>
            <div>
              <h3 className="text-xl font-black text-gray-800 dark:text-white uppercase tracking-tighter">{t('community_title', lang)}</h3>
              <p className="text-[10px] font-black text-green-600 uppercase tracking-[0.2em]">Kisan Parivar</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
            {t('community_desc', lang)}
          </p>
          <div className="flex -space-x-3 items-center overflow-hidden">
            {[1, 2, 3, 4, 5].map(i => (
              <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" alt="Farmer" />
            ))}
            <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 border-2 border-white dark:border-gray-800 flex items-center justify-center text-[10px] font-bold text-green-700">+9k</div>
          </div>
          <button 
            onClick={() => setCurrentPage(Page.COMMUNITY)}
            className="w-full bg-green-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-green-100 dark:shadow-none flex items-center justify-center space-x-2 active:scale-95 transition-all"
          >
            <MessageSquare size={16} />
            <span>{t('join_now', lang)}</span>
          </button>
        </div>
      </div>
    );
  };

  const renderWeather = () => {
    const getWeatherAdvice = (hourData: any) => {
      if (hourData.rainChance > 50) return { text: t('action_rain_avoid', lang), color: 'text-red-600', icon: '🌧️' };
      if (hourData.temp > 33) return { text: t('action_too_hot', lang), color: 'text-orange-600', icon: '🔥' };
      if (hourData.temp < 28 && hourData.rainChance < 20) return { text: t('action_best_spray', lang), color: 'text-green-600', icon: '✅' };
      if (hourData.rainChance < 10) return { text: t('action_best_fertilizer', lang), color: 'text-blue-600', icon: '🌱' };
      return { text: t('action_best_irrigation', lang), color: 'text-indigo-600', icon: '💧' };
    };

    return (
      <div className="p-4 space-y-6 pb-24 animate-in slide-in-from-right duration-300">
        <div className="flex items-center space-x-4">
          <button onClick={() => setCurrentPage(Page.HOME)}><ArrowLeft /></button>
          <h1 className="text-xl font-bold">{t('weather', lang)}</h1>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-[40px] shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Ludhiana, PB</p>
              <h2 className="text-6xl font-black mt-2">32°</h2>
              <p className="text-lg font-bold mt-1">Partly Sunny • ☀️</p>
            </div>
            <div className="text-7xl drop-shadow-2xl">☀️</div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
            <div className="text-center">
              <p className="text-[10px] font-black uppercase opacity-70 mb-1">{t('humidity', lang)}</p>
              <div className="flex items-center justify-center space-x-1">
                <Droplets size={14} />
                <span className="font-bold">64%</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-black uppercase opacity-70 mb-1">{t('wind_speed', lang)}</p>
              <div className="flex items-center justify-center space-x-1">
                <Wind size={14} />
                <span className="font-bold">14km/h</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-black uppercase opacity-70 mb-1">{t('rain_chance', lang)}</p>
              <div className="flex items-center justify-center space-x-1">
                <CloudRain size={14} />
                <span className="font-bold">12%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 p-5 rounded-3xl space-y-3">
          <div className="flex items-center space-x-3 text-green-700 dark:text-green-400">
            <div className="p-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <Lightbulb size={20} />
            </div>
            <h3 className="font-black uppercase tracking-tight text-xs">{t('kb_recommendation', lang)}</h3>
          </div>
          <p className="text-sm font-bold text-gray-800 dark:text-white leading-relaxed">
            "It's a hot day! Complete your fertilizer application before 10 AM. Rain is expected in the late afternoon (around 5 PM), so avoid spraying pesticides today."
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-black text-gray-400 text-[10px] uppercase tracking-widest">24-Hour Forecast & AI Alerts</h3>
            <CalendarDays size={16} className="text-gray-400" />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-700/50 border-b dark:border-gray-700">
                  <tr className="text-gray-400 text-[10px] uppercase tracking-widest font-black">
                    <th className="p-4">{t('time', lang)}</th>
                    <th className="p-4 text-center">{t('temp', lang)}</th>
                    <th className="p-4 text-center">{t('rain_chance', lang)}</th>
                    <th className="p-4">{t('alert', lang)}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {HOURLY_WEATHER_DATA.map((hour, i) => {
                    const advice = getWeatherAdvice(hour);
                    return (
                      <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                        <td className="p-4">
                          <span className="font-black text-sm text-gray-800 dark:text-gray-200">{hour.time}</span>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex flex-col items-center">
                            <span className="text-lg">{hour.condition}</span>
                            <span className="text-xs font-black text-blue-500">{hour.temp}°</span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="inline-flex flex-col items-center">
                            <span className="text-[10px] font-black text-gray-400 uppercase leading-none mb-1">Chance</span>
                            <span className={`text-sm font-black ${hour.rainChance > 40 ? 'text-blue-600' : 'text-gray-400'}`}>{hour.rainChance}%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className={`flex items-center space-x-2 text-[10px] font-black uppercase leading-tight ${advice.color}`}>
                            <span className="text-base">{advice.icon}</span>
                            <span className="max-w-[100px]">{advice.text}</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCommunity = () => (
    <div className="p-4 space-y-6 pb-24 animate-in slide-in-from-right duration-300">
      <div className="flex items-center space-x-4">
        <button onClick={() => setCurrentPage(Page.HOME)}><ArrowLeft /></button>
        <h1 className="text-xl font-bold">{t('community_title', lang)}</h1>
      </div>

      <div className="bg-green-600 text-white p-6 rounded-[32px] shadow-lg space-y-2 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-black uppercase tracking-tight">Kisan Chopal</h2>
          <p className="text-xs font-medium opacity-90">Talk with farmers from Punjab, Andhra, Maharashtra and more!</p>
        </div>
        <Users2 size={64} className="absolute -right-4 -bottom-4 opacity-20" />
      </div>

      <div className="space-y-4">
        {COMMUNITY_POSTS.map(post => (
          <div key={post.id} className="bg-white dark:bg-gray-800 p-5 rounded-[32px] shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src={post.avatar} className="w-12 h-12 rounded-full border-2 border-green-100 shadow-sm" alt={post.name} />
                <div>
                  <h4 className="font-black text-gray-800 dark:text-white text-sm uppercase leading-none">{post.name}</h4>
                  <div className="flex items-center space-x-1 mt-1.5">
                    <MapPin size={10} className="text-green-600" />
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{post.village}, {post.location}</span>
                  </div>
                </div>
              </div>
              <span className="text-[10px] text-gray-400 font-bold">{post.time}</span>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              {post.text}
            </p>
            
            <div className="flex items-center space-x-6 pt-4 border-t dark:border-gray-700">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                <Heart size={18} />
                <span className="text-xs font-black">{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-green-500 transition-colors">
                <MessageSquare size={18} />
                <span className="text-xs font-black">{post.replies}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 ml-auto">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="fixed bottom-28 right-4 bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 active:scale-95 transition-transform flex items-center space-x-2">
        <MessageSquare size={24} />
        <span className="font-black uppercase text-xs pr-2">Ask Community</span>
      </button>
    </div>
  );

  const renderSchemes = () => (
    <div className="p-4 space-y-6 pb-24 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center space-x-4">
        <button onClick={() => setCurrentPage(Page.HOME)}><ArrowLeft /></button>
        <h1 className="text-xl font-bold">{t('schemes', lang)}</h1>
      </div>

      <div className="bg-teal-700 text-white p-7 rounded-[40px] shadow-xl space-y-2 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-black uppercase tracking-tight">Govt. Aid Hub</h2>
          <p className="text-xs font-medium opacity-90">Essential schemes for your farm growth.</p>
        </div>
        <Scroll size={100} className="absolute -right-4 -bottom-4 opacity-10" />
      </div>

      <div className="space-y-4">
        {GOVT_SCHEMES.map(scheme => (
          <details key={scheme.id} className="group bg-white dark:bg-gray-800 rounded-[32px] border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <summary className="list-none p-6 flex items-center justify-between cursor-pointer active:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-2xl text-teal-600">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <h4 className="font-black text-gray-800 dark:text-white uppercase text-sm tracking-tight">{scheme.title[lang]}</h4>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">Official Govt. Program</p>
                </div>
              </div>
              <ChevronDown className="group-open:rotate-180 transition-transform text-gray-300" size={20} />
            </summary>
            
            <div className="p-6 pt-0 space-y-7 border-t border-gray-50 dark:border-gray-700 mt-2">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-teal-600 font-black text-[10px] uppercase tracking-widest">
                  <CheckCircle size={16} />
                  <span>{t('eligibility', lang)}</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-bold leading-relaxed pl-6">
                  {scheme.eligibility[lang]}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-green-600 font-black text-[10px] uppercase tracking-widest">
                  <Star size={16} />
                  <span>{t('benefits', lang)}</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-bold leading-relaxed pl-6">
                  {scheme.benefits[lang]}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-orange-600 font-black text-[10px] uppercase tracking-widest">
                  <Rocket size={16} />
                  <span>{t('apply_steps', lang)}</span>
                </div>
                <div className="space-y-3 pl-6">
                  {scheme.steps.map((step, i) => (
                    <div key={i} className="flex items-start space-x-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl border border-white dark:border-gray-800 shadow-sm">
                      <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xs font-black">{i + 1}</span>
                      <span className="text-xs text-gray-700 dark:text-gray-200 font-bold leading-relaxed">{step[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  setCurrentPage(Page.BUDDY);
                  handleSendMessage(`I want to apply for ${scheme.title['en']}. Can you help me with the application form and list of documents?`);
                }}
                className="w-full bg-teal-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest active:scale-95 transition-all shadow-lg shadow-teal-100 dark:shadow-none flex items-center justify-center space-x-2"
              >
                <span>Help me Apply with AI</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </details>
        ))}
      </div>
    </div>
  );

  const renderDiseaseScan = () => (
    <div className="p-4 flex flex-col h-full space-y-6 pb-40">
      <div className="flex items-center space-x-4">
        <button onClick={() => { setScanResult(false); setScanCrop(null); setScanSymptoms([]); setCurrentPage(Page.HOME); }}><ArrowLeft /></button>
        <h1 className="text-xl font-black uppercase tracking-tight">{t('scan', lang)}</h1>
      </div>
      
      {isScanning ? (
        <div className="flex-1 flex flex-col items-center justify-center space-y-6 animate-pulse">
          <Loader2 className="text-red-500 animate-spin" size={48} />
          <h2 className="text-xl font-black text-red-600">AI ANALYZING...</h2>
        </div>
      ) : !scanResult ? (
        <div className="space-y-6 flex-1 overflow-y-auto no-scrollbar pb-24">
          {/* Step 1: Select Crop */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 px-1">
               <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-[10px] font-black">1</div>
               <h3 className="font-black text-gray-800 dark:text-white uppercase text-xs tracking-tight">Select Crop</h3>
            </div>
            <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2">
              {CROPS.map(crop => (
                <button 
                  key={crop.id} 
                  onClick={() => setScanCrop(crop.id)} 
                  className={`flex-shrink-0 p-5 rounded-3xl flex flex-col items-center justify-center border-4 transition-all ${scanCrop === crop.id ? 'border-green-600 bg-green-50' : 'bg-white dark:bg-gray-800 border-gray-50'}`}
                >
                  <span className="text-3xl mb-1">{crop.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-tight">{crop.name[lang]}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Step 2: Select Symptoms */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 px-1">
               <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-[10px] font-black">2</div>
               <h3 className="font-black text-gray-800 dark:text-white uppercase text-xs tracking-tight">{t('select_symptoms', lang)}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {SYMPTOMS.map(symp => (
                <button 
                  key={symp.id} 
                  onClick={() => toggleSymptom(symp.id)}
                  className={`p-4 rounded-[28px] flex items-center space-x-3 border-4 transition-all relative overflow-hidden ${scanSymptoms.includes(symp.id) ? 'border-red-500 bg-red-50' : 'bg-white dark:bg-gray-800 border-gray-50'}`}
                >
                  <span className="text-xl">{symp.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-tight text-left leading-tight">{symp.label[lang]}</span>
                  {scanSymptoms.includes(symp.id) && (
                    <div className="absolute top-1 right-1">
                      <Check className="text-red-600" size={12} strokeWidth={4} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>

          <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-3xl border-2 border-dashed border-red-200 text-center space-y-2">
            <Camera size={28} className="text-red-500 mx-auto" />
            <h3 className="font-black text-red-700 uppercase text-sm">{t('camera_access_title', lang)}</h3>
            <p className="text-xs text-gray-500 font-medium">{t('camera_access_desc', lang)}</p>
          </div>

          <div className="fixed bottom-24 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-3 rounded-3xl shadow-2xl flex space-x-2 border border-gray-100 dark:border-gray-800">
            <button 
              onClick={handleStartScan} 
              disabled={!scanCrop || scanSymptoms.length === 0} 
              className={`flex-1 py-4 rounded-2xl font-black text-white uppercase tracking-widest text-xs transition-all ${scanCrop && scanSymptoms.length > 0 ? 'bg-red-600 shadow-lg shadow-red-200' : 'bg-gray-300'}`}
            >
              Analyze Leaf Health
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6 flex-1 overflow-y-auto">
          <div className="bg-red-600 text-white p-8 rounded-[40px] text-center shadow-xl">
            <h2 className="text-2xl font-black uppercase">Yellow Rust Detected</h2>
            <p className="text-xs font-bold opacity-80 uppercase mt-1">Status: Severe Infection</p>
          </div>
          <div className="p-4 space-y-4">
             <OrganicAdviceCard 
                title="Wood Ash Solution"
                subtitle="Traditional Remedy"
                description="Your wheat crop shows signs of fungal growth. Wood ash changes the pH level, stopping the fungus from spreading."
                steps={["Apply dry ash on leaves.", "Wait for 2 hours.", "Wash with clean water."]}
                variant="yellow"
             />
             <button onClick={() => { setScanResult(false); setScanCrop(null); setScanSymptoms([]); }} className="w-full bg-gray-100 dark:bg-gray-800 py-4 rounded-2xl font-black uppercase text-xs tracking-widest border border-gray-200 dark:border-gray-700">Start New Scan</button>
          </div>
        </div>
      )}
    </div>
  );

  const renderFAQ = () => (
    <div className="p-4 space-y-6 pb-24 animate-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center space-x-4">
        <button onClick={() => setCurrentPage(Page.HOME)}><ArrowLeft /></button>
        <h1 className="text-xl font-bold">{t('faq', lang)}</h1>
      </div>
      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="font-black text-green-800 dark:text-green-400 mb-3 text-sm uppercase tracking-tight">{faq.q[lang]}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{faq.a[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMarket = () => (
    <div className="p-4 space-y-6 pb-24 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black uppercase tracking-tight">{t('seed_store', lang)}</h1>
        <ShoppingBag className="text-green-600" />
      </div>
      <div className="grid grid-cols-1 gap-6">
        {SEEDS.map(seed => (
          <div key={seed.id} className="bg-white dark:bg-gray-800 rounded-[32px] shadow-md overflow-hidden flex flex-col border border-gray-100 dark:border-gray-700">
            <img src={seed.image} alt={seed.name} className="h-56 w-full object-cover" />
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight">{seed.name}</h3>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{seed.producer}</p>
              </div>
              <p className="text-sm italic text-gray-600 dark:text-gray-300 font-medium">"{seed.why}"</p>
              <div className="flex justify-between items-center bg-green-50 dark:bg-green-900/10 p-4 rounded-2xl">
                <span className="text-2xl font-black text-green-600">{seed.price}</span>
                <button onClick={() => buySeed(seed.name, "5kg")} className="bg-green-600 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-green-100">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBuddy = () => (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 pb-24">
      <div className="bg-white dark:bg-gray-800 p-5 shadow-sm flex items-center space-x-4">
        <div className="w-12 h-12 rounded-2xl bg-green-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-green-100">🤖</div>
        <div>
          <h2 className="font-black uppercase tracking-tight text-sm">KrishiBuddy AI</h2>
          <p className="text-[10px] text-green-500 font-black uppercase tracking-widest">Always Active</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-5 no-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-5 rounded-[28px] text-sm font-medium leading-relaxed ${m.role === 'user' ? 'bg-green-600 text-white rounded-tr-none' : 'bg-white dark:bg-gray-800 dark:text-white shadow-sm rounded-tl-none border border-gray-100 dark:border-gray-700'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
           <div className="flex justify-start">
             <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm rounded-tl-none animate-pulse text-xs text-gray-500 font-black uppercase tracking-widest">Thinking...</div>
           </div>
        )}
      </div>
      <div className="p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700 flex items-center space-x-2">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask about crops, pests, prices..."
          className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-2xl px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-green-600 transition-all"
        />
        <button onClick={() => handleSendMessage()} className="p-4 bg-green-600 text-white rounded-2xl shadow-xl shadow-green-100 active:scale-90 transition-transform">
          <Send size={24} />
        </button>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="p-4 space-y-8 pb-32 animate-in fade-in duration-500">
      <div className="flex items-center space-x-4">
        <button onClick={() => setCurrentPage(Page.HOME)}><ArrowLeft /></button>
        <h1 className="text-xl font-bold">{t('about', lang)}</h1>
      </div>

      <div className="bg-green-800 text-white p-10 rounded-[48px] text-center shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <TractorLogo className="w-24 h-24 mx-auto drop-shadow-lg" />
          <h1 className="text-4xl font-black tracking-tighter">KrishiBot (KB)</h1>
          <p className="text-[10px] font-black text-green-300 uppercase tracking-[0.3em]">Smart Farming Assistant</p>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Sprout size={120} />
        </div>
      </div>

      <div className="space-y-6">
        <section className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
          <div className="flex items-center space-x-3 text-green-600">
            <div className="p-2 bg-green-50 dark:bg-green-900/40 rounded-xl">
              <Info size={20} />
            </div>
            <h3 className="font-black uppercase tracking-tight text-sm">About KrishiBot (KB)</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium">
            KrishiBot is an AI-powered personal farming assistant that helps Indian farmers with crop guidance, disease detection, weather alerts, soil health tips, seed selection, mandi prices, and government schemes. It is simple, visual, and farmer-friendly, combining modern AI with traditional farming wisdom.
          </p>
        </section>

        <section className="bg-blue-600 text-white p-6 rounded-3xl shadow-xl space-y-4 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-white/20 rounded-xl">
                <Eye size={20} />
              </div>
              <h3 className="font-black uppercase tracking-tight text-sm">Vision</h3>
            </div>
            <p className="text-sm font-semibold leading-relaxed">
              To empower farmers with trusted, easy-to-use digital support that improves productivity, reduces losses, and promotes sustainable farming.
            </p>
          </div>
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full"></div>
        </section>

        <section className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-3xl border-2 border-orange-100 dark:border-orange-900/30 space-y-4">
          <div className="flex items-center space-x-3 text-orange-600">
            <div className="p-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <Rocket size={20} />
            </div>
            <h3 className="font-black uppercase tracking-tight text-sm">What’s Coming Next</h3>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {[
              { text: "Voice-based support", icon: <Mic size={14} /> },
              { text: "Offline access", icon: <Zap size={14} /> },
              { text: "Real-time data integration", icon: <TrendingUp size={14} /> },
              { text: "Advanced disease detection", icon: <AlertCircle size={14} /> },
              { text: "Personalized crop calendars", icon: <Scroll size={14} /> },
              { text: "Farmer-to-buyer marketplace", icon: <ShoppingBag size={14} /> }
            ].map((f, i) => (
              <div key={i} className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-sm border border-orange-50 dark:border-gray-700">
                <div className="text-orange-500">{f.icon}</div>
                <span className="text-xs font-bold text-gray-700 dark:text-gray-200">{f.text}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 text-center space-y-3">
          <div className="space-y-1">
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Lead Creator & Developer</p>
            <h4 className="text-2xl font-black text-gray-800 dark:text-white uppercase tracking-tighter">Ikjot Kaur</h4>
          </div>
          <div className="flex justify-center space-x-2">
            <span className="px-4 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-[10px] font-black tracking-widest">PROUDLY INDIAN 🇮🇳</span>
            <span className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full text-[10px] font-black tracking-widest">v1.2.0</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEmergency = () => (
    <div className="p-4 space-y-6 pb-24">
      <div className="flex items-center space-x-4">
        <button onClick={() => setCurrentPage(Page.HOME)}><ArrowLeft /></button>
        <h1 className="text-xl font-bold text-red-600">{t('emergency', lang)}</h1>
      </div>
      <div className="bg-red-600 text-white p-7 rounded-[40px] shadow-xl flex items-center space-x-5">
        <Siren size={44} className="animate-pulse" />
        <div>
           <h2 className="text-2xl font-black uppercase">Need Help?</h2>
           <p className="text-xs font-bold opacity-90">Call centers or veterinary help available 24/7.</p>
        </div>
      </div>
      <button onClick={() => window.location.href = 'tel:18001801551'} className="w-full bg-white dark:bg-gray-800 border-4 border-red-100 dark:border-red-900/30 p-6 rounded-[32px] flex items-center space-x-5 shadow-sm active:bg-red-50 transition-colors">
        <div className="p-4 bg-red-100 rounded-2xl text-red-600"><PhoneCall size={28} /></div>
        <div className="text-left">
          <h4 className="font-black uppercase tracking-tight text-sm">Kisan Call Center</h4>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">1800-180-1551 (Toll Free)</p>
        </div>
      </button>
    </div>
  );

  const renderSoilHealth = () => (
    <div className="p-4 space-y-6 pb-24 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center space-x-4">
        <button onClick={() => setCurrentPage(Page.HOME)} aria-label="Back to Home"><ArrowLeft /></button>
        <h1 className="text-xl font-bold">{t('soil', lang)}</h1>
      </div>
      <div className="bg-yellow-800 text-white p-6 rounded-3xl shadow-xl space-y-3 relative overflow-hidden">
        <h2 className="text-2xl font-black">{t('soil_importance_title', lang)}</h2>
        <p className="text-xs opacity-90 leading-relaxed font-medium">{t('soil_importance_desc', lang)}</p>
        <Shovel className="absolute -right-4 -bottom-4 opacity-10 w-32 h-32" />
      </div>
      <h3 className="text-lg font-black text-green-800 dark:text-green-400 px-1">{t('organic_care_title', lang)}</h3>
      <div className="space-y-4">
        {ORGANIC_CARE_METHODS.map((method, idx) => (
          <OrganicAdviceCard 
            key={idx}
            id={idx}
            icon={method.variant === 'green' ? <Leaf size={24} /> : method.variant === 'blue' ? <Droplets size={24} /> : method.variant === 'yellow' ? <Sprout size={24} /> : <Zap size={24} />}
            title={method.title[lang]}
            subtitle={method.subtitle}
            variant={method.variant}
            steps={method.steps}
          />
        ))}
      </div>
    </div>
  );

  const renderMandi = () => (
    <div className="p-4 space-y-6 pb-24 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center space-x-4">
        <button onClick={() => setCurrentPage(Page.HOME)}><ArrowLeft /></button>
        <h1 className="text-xl font-bold">{t('mandi', lang)}</h1>
      </div>
      
      <div className="bg-orange-600 text-white p-7 rounded-[40px] shadow-xl space-y-2 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-black uppercase tracking-tight">Mandi Bhav</h2>
          <p className="text-xs font-medium opacity-90">Real-time prices from markets across India.</p>
        </div>
        <Scale size={80} className="absolute -right-4 -bottom-4 opacity-10" />
      </div>

      <div className="space-y-4">
        {MANDI_DATA.map((item, idx) => {
          const crop = CROPS.find(c => c.id === item.cropId);
          if (!crop) return null;
          
          const trendConfig = {
            increasing: { icon: <TrendingUp size={16} />, color: 'text-green-600', bg: 'bg-green-50' },
            decreasing: { icon: <TrendingDown size={16} />, color: 'text-red-600', bg: 'bg-red-50' },
            stable: { icon: <Minus size={16} />, color: 'text-gray-400', bg: 'bg-gray-50' }
          };
          const trend = trendConfig[item.trend];

          return (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-[32px] shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-4xl p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl">{crop.icon}</span>
                <div>
                  <h3 className="font-black text-gray-800 dark:text-white text-sm uppercase tracking-tight">{crop.name[lang]}</h3>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{item.marketName}</p>
                </div>
              </div>
              <div className="text-right space-y-1">
                <div className="flex items-center justify-end space-x-2">
                  <span className="text-xl font-black text-gray-800 dark:text-white">₹{item.quintalPrice}</span>
                  <div className={`p-1.5 rounded-lg ${trend.color} ${trend.bg} dark:bg-opacity-10`}>
                    {trend.icon}
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Per 100Kg</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderGrowthTips = () => {
    const tips = CROP_GROWTH_TIPS[selectedCropId] || [];
    return (
      <div className="p-4 space-y-6 pb-24 animate-in slide-in-from-right duration-300">
        <div className="flex items-center space-x-4">
          <button onClick={() => setCurrentPage(Page.HOME)}><ArrowLeft /></button>
          <h1 className="text-xl font-bold">{t('growth', lang)}</h1>
        </div>

        <section className="space-y-4">
          <h3 className="font-black text-gray-400 text-[10px] uppercase tracking-widest px-1">Choose Crop</h3>
          <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2">
            {CROPS.map(crop => (
              <button 
                key={crop.id} 
                onClick={() => setSelectedCropId(crop.id)}
                className={`flex-shrink-0 px-6 py-4 rounded-3xl border-4 transition-all flex flex-col items-center justify-center space-y-1 ${selectedCropId === crop.id ? 'border-green-600 bg-green-50' : 'bg-white dark:bg-gray-800 border-gray-50'}`}
              >
                <span className="text-2xl">{crop.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-tight">{crop.name[lang]}</span>
              </button>
            ))}
          </div>
        </section>

        <div className="space-y-4">
          {tips.length > 0 ? (
            tips.map((tip, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-[32px] shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-5">
                <div className="text-3xl p-3 bg-green-50 dark:bg-green-900/30 rounded-2xl">{tip.icon}</div>
                <div className="space-y-1">
                  <h4 className="font-black text-gray-800 dark:text-white uppercase text-sm tracking-tight">{tip.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 opacity-40">
              <Sprout size={48} className="mx-auto mb-2" />
              <p className="font-black uppercase text-xs">No tips for this crop yet</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderNuzkhe = () => (
    <div className="p-4 space-y-6 pb-24 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center space-x-4">
        <button onClick={() => setCurrentPage(Page.HOME)}><ArrowLeft /></button>
        <h1 className="text-xl font-bold">{t('nuzkhe', lang)}</h1>
      </div>
      
      <div className="bg-amber-700 text-white p-7 rounded-[40px] shadow-xl space-y-2 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-black uppercase tracking-tight">{t('nuzkhe', lang)}</h2>
          <p className="text-xs font-medium opacity-90">{t('nuzkhe_subtitle', lang)}</p>
        </div>
        <Scroll size={80} className="absolute -right-4 -bottom-4 opacity-10" />
      </div>

      <div className="space-y-4">
        {ANCESTRAL_NUZKHE.map((nuzkha, idx) => (
          <OrganicAdviceCard 
            key={idx}
            id={idx}
            icon={<Leaf size={24} className="text-amber-600" />}
            title={nuzkha.title[lang]}
            subtitle={nuzkha.subtitle}
            description={nuzkha.description}
            steps={nuzkha.steps}
            variant={nuzkha.variant}
            footer="Traditional wisdom from our elders"
          />
        ))}
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return renderHome();
      case Page.WEATHER: return renderWeather();
      case Page.DISEASE_SCAN: return renderDiseaseScan();
      case Page.MARKET: return renderMarket();
      case Page.BUDDY: return renderBuddy();
      case Page.ABOUT: return renderAbout();
      case Page.EMERGENCY: return renderEmergency();
      case Page.FAQ: return renderFAQ();
      case Page.SOIL_HEALTH: return renderSoilHealth();
      case Page.GROWTH_TIPS: return renderGrowthTips();
      case Page.MANDI: return renderMandi();
      case Page.NUZKHE: return renderNuzkhe();
      case Page.COMMUNITY: return renderCommunity();
      case Page.SCHEMES: return renderSchemes();
      default: return renderHome();
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} font-sans transition-colors duration-300`}>
      <div className="max-w-md mx-auto h-screen relative flex flex-col overflow-hidden bg-white dark:bg-gray-900 shadow-2xl">
        <main className="flex-1 overflow-y-auto no-scrollbar relative">
          {renderPage()}
        </main>
        <nav className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t dark:border-gray-800 px-6 py-5 flex items-center justify-between z-[60]">
          <NavButton icon={<Home />} label={t('home', lang)} active={currentPage === Page.HOME} onClick={() => { setCurrentPage(Page.HOME); }} />
          <NavButton icon={<MessageCircle />} label={t('buddy', lang)} active={currentPage === Page.BUDDY} onClick={() => setCurrentPage(Page.BUDDY)} />
          <NavButton icon={<ShoppingBag />} label={t('market', lang)} active={currentPage === Page.MARKET} onClick={() => setCurrentPage(Page.MARKET)} />
          <NavButton icon={<Info />} label={t('about', lang)} active={currentPage === Page.ABOUT} onClick={() => setCurrentPage(Page.ABOUT)} />
        </nav>
        <button onClick={() => setCurrentPage(Page.EMERGENCY)} className="fixed left-4 bottom-28 bg-red-600 p-5 rounded-full shadow-2xl text-white z-50 animate-pulse active:scale-90 transition-transform">
          <Siren size={30} />
        </button>
      </div>
    </div>
  );
}

const NavButton = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) => (
  <button onClick={onClick} className={`flex flex-col items-center space-y-1.5 transition-all ${active ? 'text-green-600 scale-110' : 'text-gray-400'}`}>
    {React.cloneElement(icon as React.ReactElement, { size: 24, strokeWidth: active ? 3 : 2 })}
    <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
  </button>
);
