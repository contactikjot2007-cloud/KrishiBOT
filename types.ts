
export type Language = 'en' | 'hi' | 'pa' | 'mr' | 'te';

export enum Page {
  HOME = 'home',
  BUDDY = 'buddy',
  MARKET = 'market',
  ABOUT = 'about',
  DISEASE_SCAN = 'disease_scan',
  WEATHER = 'weather',
  MANDI = 'mandi',
  GROWTH_TIPS = 'growth_tips',
  SOIL_HEALTH = 'soil_health',
  SCHEMES = 'schemes',
  NUZKHE = 'nuzkhe',
  EMERGENCY = 'emergency',
  FAQ = 'faq',
  COMMUNITY = 'community'
}

export interface TranslationMap {
  [key: string]: {
    [lang in Language]: string;
  };
}

export interface Crop {
  id: string;
  name: { [lang in Language]: string };
  icon: string;
}

export interface MandiPrice {
  cropId: string;
  quintalPrice: number;
  trend: 'increasing' | 'decreasing' | 'stable';
  marketName: string;
}

export interface Seed {
  id: string;
  name: string;
  image: string;
  isOrganic: boolean;
  grade: 'Good' | 'Better' | 'Best';
  why: string;
  producer: string;
  phone: string;
  price: string;
  rating: number;
  quantityOptions: string[];
}

export interface WeatherData {
  time: string;
  temp: number;
  precip: number;
  wind: number;
  condition: 'sunny' | 'rainy' | 'windy' | 'cloudy';
}
