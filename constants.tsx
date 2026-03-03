
import { Language, Crop, Seed, TranslationMap, MandiPrice } from './types';

export const LANGUAGES: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'mr', name: 'मराठी' },
  { code: 'te', name: 'తెలుగు' }
];

export const TRANSLATIONS: TranslationMap = {
  home: { en: 'Home', hi: 'होम', pa: 'ਹੋਮ', mr: 'होम', te: 'హోమ్' },
  buddy: { en: 'Buddy', hi: 'बडी', pa: 'ਬੱਡੀ', mr: 'ਬਡੀ', te: 'బడ్డీ' },
  market: { en: 'Market', hi: 'बाजार', pa: 'ਬਾਜ਼ਾਰ', mr: 'बाजार', te: 'మార్కెట్' },
  about: { en: 'About', hi: 'हमारे बारे में', pa: 'ਬਾਰੇ', mr: 'बद्दल', te: 'గురించి' },
  scan: { en: 'Disease Scan', hi: 'रोग जांच', pa: 'ਬਿਮਾਰੀ ਸਕੈਨ', mr: 'रोग तपासणी', te: 'వ్యాధి స్కాన్' },
  weather: { en: 'Weather', hi: 'मौसम', pa: 'ਮੌਸਮ', mr: 'हवामान', te: 'వాతావరణం' },
  mandi: { en: 'Mandi Prices', hi: 'मंडी भाव', pa: 'ਮੰਡੀ ਭਾਅ', mr: 'मंडी भाव', te: 'మండి ధరలు' },
  growth: { en: 'Growth Tips', hi: 'बढ़त के टिप्स', pa: 'ਵਾਧੇ ਦੇ ਟਿਪਸ', mr: 'वाढ टिप्स', te: 'పెరుగుదల చిట్కాలు' },
  soil: { en: 'Soil Health', hi: 'मिट्टी की सेहत', pa: 'ਮਿੱਟੀ ਦੀ ਸਿਹਤ', mr: 'माती आरोग्य', te: 'నేల ఆరోగ్యం' },
  schemes: { en: 'Govt Schemes', hi: 'सरकारी योजनाएं', pa: 'ਸਰਕਾਰੀ ਸਕੀਮਾਂ', mr: 'सरकारी योजना', te: 'ప్రభుత్వ పథకాలు' },
  faq: { en: 'Frequently Asked Questions', hi: 'अक्सर पूछे जाने वाले सवाल', pa: 'ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ', mr: 'नेहमी विचारले जाणारे प्रश्न', te: 'తరచుగా అడిగే ప్రశ్నలు' },
  feedback: { en: 'Feedback', hi: 'फीडबैक', pa: 'ਫੀਡਬੈਕ', mr: 'अभिप्राय', te: 'अभिप्राय' },
  emergency: { en: 'Emergency Help', hi: 'आपातकालीन मदद', pa: 'ਐਮਰਜੈਂਸੀ ਮਦਦ', mr: 'आणीबाणी मदत', te: 'అత్యవసర సహాయం' },
  details: { en: 'Details', hi: 'विवरण', pa: 'ਵੇਰਵੇ', mr: 'तपशील', te: 'వివరాలు' },
  rain_chance: { en: 'Rain %', hi: 'बारिश %', pa: 'ਮੀਂਹ %', mr: 'पाऊस %', te: 'వర్షం %' },
  wind_speed: { en: 'Wind', hi: 'हवा', pa: 'ਹਵਾ', mr: 'वारा', te: 'గాలి' },
  humidity: { en: 'Humidity', hi: 'नमी', pa: 'ਨਮੀ', mr: 'दमटपणा', te: 'తేమ' },
  time: { en: 'Time', hi: 'समय', pa: 'ਸਮਾਂ', mr: 'ਵੇਲ', te: 'సమయం' },
  temp: { en: 'Temp', hi: 'तापमान', pa: 'ਤਾਪਮਾਨ', mr: 'तापमान', te: 'ఉష్ణోగ్రత' },
  alert: { en: 'Alert', hi: 'चेतावनी', pa: 'ਚੇਤਾਵਨੀ', mr: 'सूचना', te: 'హెచ్చరిక' },
  kb_recommendation: { en: 'KrishiBot Advice', hi: 'कृषिबॉट की सलाह', pa: 'ਕ੍ਰਿਸ਼ੀਬੋਟ ਦੀ ਸਲਾਹ', mr: 'कृषिबॉटचा सल्ला', te: 'కృషిబాట్ సలహా' },
  action_best_spray: { en: 'Best time to spray pesticides', hi: 'कीटनाशक छिड़कने का सबसे अच्छा समय', pa: 'ਕੀਟਨਾਸ਼ਕ ਛਿੜਕਣ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਸਮਾਂ', mr: 'कीटकनाशक फवारणीसाठी उत्तम वेळ', te: 'పురుగుమందులు చల్లడానికి ఉత్తమ సమయం' },
  action_rain_avoid: { en: 'Rain expected – avoid pesticides', hi: 'बारिश की संभावना – छिड़काव न करें', pa: 'ਮੀਂਹ ਦੀ ਸੰਭਾਵਨਾ – ਛਿੜਕਾਅ ਨਾ ਕਰੋ', mr: 'पावसाची शक्यता - फवारणी टाळा', te: 'వర్షం వచ్చే అవకాశం ఉంది - మందులు చల్లకండి' },
  action_best_irrigation: { en: 'Ideal time for irrigation', hi: 'सिंचाई के लिए उत्तम समय', pa: 'ਸਿੰਚਾਈ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਸਮਾਂ', mr: 'सिंचनासाठी योग्य वेळ', te: 'నీటి పారుదలకి అనువైన సమయం' },
  action_too_hot: { en: 'Too hot – avoid direct sun work', hi: 'बहुत गर्मी – धूप में काम से बचें', pa: 'ਬਹੁਤ ਗਰਮੀ - ਸਿੱਧੀ ਧੁੱਪ ਤੋਂ ਬਚੋ', mr: 'खूप उष्णता - उन्हात काम टाळा', te: 'చాలా వేడిగా ఉంది - ఎండలో పని చేయకండి' },
  action_best_fertilizer: { en: 'Perfect for fertilizer application', hi: 'खाद डालने के लिए सबसे सही समय', pa: 'ਖਾਦ ਪਾਉਣ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਸਮਾਂ', mr: 'खत टाकण्यासाठी उत्तम वेळ', te: 'ఎరువులు వేయడానికి సరైన సమయం' },
  seed_store: { en: 'Seed Store', hi: 'बीज भंडार', pa: 'ਬੀਜ ਸਟੋਰ', mr: 'बियाणे दुकान', te: 'విత్తన దుకాణం' },
  nuzkhe: { en: 'Ancestral Nuzkhe', hi: 'पुराने नुस्खे', pa: 'ਪੁਰਾਣੇ ਨੁਸਖੇ', mr: 'पूर्वजांचे उपाय', te: 'పురాతన చిట్కాలు' },
  nuzkhe_subtitle: { en: 'Traditional farming wisdom from our ancestors.', hi: 'हमारे पूर्वजों की पारंपरिक खेती का ज्ञान।', pa: 'ਸਾਡੇ ਵੱਡੇ-ਵਡੇਰਿਆਂ ਦੀ ਖੇਤੀ ਸੂਝ।', mr: 'आपल्या पूर्वजांचे पारंपारिक शेती ज्ञान.', te: 'మన పూర్వీకుల సాంప్రదాయ వ్యవసాయ జ్ఞానం.' },
  see_all_faqs: { en: 'See All 20+ FAQs', hi: 'सभी 20+ प्रश्न देखें', pa: 'ਸਾਰੇ 20+ ਸਵਾਲ ਦੇਖੋ', mr: 'सर्व २०+ प्रश्न पहा', te: 'అన్ని 20+ ప్రశ్నలను చూడండి' },
  soil_importance_title: { en: 'Why Soil Health Matters?', hi: 'मिट्टी की सेहत क्यों जरूरी है?', pa: 'ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਕਿਉਂ ਜ਼ਰੂਰੀ ਹੈ?', mr: 'मातीचे आरोग्य का महत्त्वाचे आहे?', te: 'నేల ఆరోగ్యం ఎందుకు ముఖ్యం?' },
  soil_importance_desc: { en: 'Healthy soil is like a bank for plants. It holds nutrients and water, helping crops grow strong and resist diseases naturally.', hi: 'स्वस्थ मिट्टी पौधों के लिए बैंक की तरह है। यह पोषक तत्वों और पानी को सोखकर रखती है।', pa: 'ਸਿਹਤਮੰਦ ਮਿੱਟੀ ਪੌਦਿਆਂ ਲਈ ਬੈਂਕ ਵਾਂਗ ਹੈ।', mr: 'निरोगी माती वनस्पतींसाठी बँकेसारखी असते.', te: 'ఆరోగ్యకరమైన నేల మొక్కలకు బ్యాంకు వంటిది.' },
  organic_care_title: { en: 'Organic Care Methods', hi: 'जैविक देखभाल के तरीके', pa: 'ਜੈਵਿਕ ਸੰਭਾਲ ਦੇ ਤਰੀਕੇ', mr: 'सेंद्रिय काळजी पद्धती', te: 'సేంద్రీయ సంరక్షణ పద్ధతులు' },
  community_title: { en: 'Farmer Community', hi: 'किसान समुदाय', pa: 'ਕਿਸਾਨ ਭਾਈਚਾਰਾ', mr: 'शेतकरी समुदाय', te: 'రైతు సంఘం' },
  community_desc: { en: 'Connect with 10,000+ local farmers, share experiences, and get help.', hi: '10,000+ स्थानीय किसानों से जुड़ें, अनुभव साझा करें और मदद लें।', pa: '10,000+ ਸਥਾਨਕ ਕਿਸਾਨਾਂ ਨਾਲ ਜੁੜੋ ਅਤੇ ਅਨੁਭਵ ਸਾਂਝੇ ਕਰੋ।', mr: '१०,०००+ स्थानिक शेतकऱ्यांशी संपर्क साधा आणि अनुभव सामायिक करा.', te: '10,000+ స్థానిక రైతులతో కనెక్ట్ అవ్వండి మరియు అనుభవాలను పంచుకోండి.' },
  join_now: { en: 'Join Now', hi: 'अभी जुड़ें', pa: 'ਹੁਣੇ ਸ਼ਾਮਲ ਹੋਵੋ', mr: 'आता सामील व्हा', te: 'ఇప్పుడే చేరండి' },
  welcome_greeting: { 
    en: 'Namaste, Kisan Bhai!', 
    hi: 'नमस्ते, किसान भाई!', 
    pa: 'ਨਮਸਤੇ, ਕਿਸਾਨ ਵੀਰੋ!', 
    mr: 'नमस्कार, शेतकरी बांधवांनो!', 
    te: 'నమస్తే, రైతు సోదరులారా!' 
  },
  welcome_subtext: { 
    en: 'Ready to farm smarter today?', 
    hi: 'क्या आप आज बेहतर खेती के लिए तैयार हैं?', 
    pa: 'ਕੀ ਤੁਸੀਂ ਅੱਜ ਬਿਹਤਰ ਖੇਤੀ ਲਈ ਤਿਆਰ ਹੋ?', 
    mr: 'आज स्मार्ट शेतीसाठी तयार आहात का?', 
    te: 'ఈరోజు మరింత తెలివిగా వ్యవసాయం చేద్దామా?' 
  },
  camera_access_title: { en: 'Allow Camera Access', hi: 'कैमरा एक्सेस दें', pa: 'ਕੈਮਰੇ ਦੀ ਪਹੁੰਚ ਦਿਓ', mr: 'कॅमेरा एक्सेस द्या', te: 'కెమెరా యాక్సెస్ అనుమతించండి' },
  camera_access_desc: { 
    en: "To scan for diseases, please tap the button below and point your camera at the infected leaves.", 
    hi: "बीमारी की जांच के लिए, कृपया नीचे दिए बटन पर क्लिक करें और कैमरे को पत्तों की तरफ करें।", 
    pa: "ਬਿਮਾਰੀ ਦੀ ਜਾਂਚ ਕਰਨ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤੇ ਬਟਨ 'ਤੇ ਟੈਪ ਕਰੋ ਅਤੇ ਆਪਣੇ ਕੈਮਰੇ ਨੂੰ ਸੰਕਰਮਿਤ ਪੱਤਿਆਂ ਵੱਲ ਕਰੋ।", 
    mr: "रोगाची तपासणी करण्यासाठी, कृपया खालील बटणावर टॅप करा आणि आपला कॅमेरा संक्रमित पानांवर धरा.", 
    te: "వ్యాధిని స్కాన్ చేయడానికి, దయచేసి క్రింద ఉన్న బటన్‌ను నొక్కండి మరియు మీ కెమెరాను సోకిన ఆకుల వైపు చూపండి." 
  },
  eligibility: { en: 'Eligibility', hi: 'पात्रता', pa: 'ਯੋਗਤਾ', mr: 'पात्रता', te: 'అర్హత' },
  benefits: { en: 'Benefits', hi: 'लाभ', pa: 'ਲਾਭ', mr: 'फायदे', te: 'ప్రయోజనాలు' },
  apply_steps: { en: 'Enrollment Steps', hi: 'नामांकन प्रक्रिया', pa: 'ਨਾਮਾਂਕਣ ਪ੍ਰਕਿਰਿਆ', mr: 'नोंदणी प्रक्रिया', te: 'నమోదు విధానం' },
  select_symptoms: { en: 'Select Symptoms', hi: 'लक्षण चुनें', pa: 'ਲੱਛਣ ਚੁਣੋ', mr: 'लक्षणे निवडा', te: 'లక్షణాలు ఎంచుకోండి' }
};

export const SYMPTOMS = [
  { id: 'yellowing', label: { en: 'Yellow Leaves', hi: 'पीले पत्ते', pa: 'ਪੀਲੇ ਪੱਤੇ', mr: 'पिवळी पाने', te: 'పసుపు ఆకులు' }, icon: '🍂' },
  { id: 'spots', label: { en: 'Brown Spots', hi: 'भूरे धब्बे', pa: 'ਭੂਰੇ ਧੱਬੇ', mr: 'तपकिरी ठिपके', te: 'గోధుమ రంగు మచ్చలు' }, icon: '🔘' },
  { id: 'holes', label: { en: 'Holes in Leaves', hi: 'पत्तों में छेद', pa: 'ਪੱਤਿਆਂ ਵਿੱਚ ਛੇਕ', mr: 'पानांमधील छिद्रे', te: 'ఆకులలో రంధ్రాలు' }, icon: '🐛' },
  { id: 'wilting', label: { en: 'Wilting/Drying', hi: 'मुरझाना', pa: 'ਮੁਰਝਾਉਣਾ', mr: 'सुकणे', te: 'వాడిపోవడం' }, icon: '🥀' },
  { id: 'curling', label: { en: 'Leaf Curling', hi: 'पत्तों का मुड़ना', pa: 'ਪੱਤਿਆਂ ਦਾ ਮੁੜਨਾ', mr: 'पाने गुंडाळणे', te: 'ఆకు ముడతలు' }, icon: '🌀' },
  { id: 'mold', label: { en: 'White/Grey Mold', hi: 'सफेद फफूंद', pa: 'ਚਿੱਟੀ ਉੱਲੀ', mr: 'पांढरी बुरशी', te: 'తెల్ల బూజు' }, icon: '❄️' },
  { id: 'rot', label: { en: 'Fruit/Stem Rot', hi: 'सड़न', pa: 'ਸੜਨ', mr: 'सडणे', te: 'కుళ్ళిపోవడం' }, icon: '🍎' },
  { id: 'stunted', label: { en: 'Short Height', hi: 'कम बढ़त', pa: 'ਘੱਟ ਵਾਧਾ', mr: 'खुंटलेली वाढ', te: 'పెరుగుదల లోపం' }, icon: '📉' },
  { id: 'sticky', label: { en: 'Sticky Residue', hi: 'चिपचिपा पदार्थ', pa: 'ਚਿਪਚਿਪਾ ਪਦਾਰਥ', mr: 'चिकट पदार्थ', te: 'జిగురు వంటి పదార్థం' }, icon: '🍯' }
];

export const HOURLY_WEATHER_DATA = [
  { time: '06:00', temp: 22, rainChance: 5, wind: 8, condition: '☀️' },
  { time: '07:00', temp: 23, rainChance: 10, wind: 9, condition: '☀️' },
  { time: '08:00', temp: 24, rainChance: 5, wind: 10, condition: '☀️' },
  { time: '09:00', temp: 26, rainChance: 15, wind: 12, condition: '⛅' },
  { time: '10:00', temp: 28, rainChance: 20, wind: 14, condition: '⛅' },
  { time: '11:00', temp: 30, rainChance: 20, wind: 15, condition: '⛅' },
  { time: '12:00', temp: 32, rainChance: 10, wind: 16, condition: '☀️' },
  { time: '13:00', temp: 34, rainChance: 10, wind: 18, condition: '☀️' },
  { time: '14:00', temp: 35, rainChance: 15, wind: 20, condition: '☀️' },
  { time: '15:00', temp: 35, rainChance: 35, wind: 22, condition: '⛅' },
  { time: '16:00', temp: 33, rainChance: 55, wind: 25, condition: '🌦️' },
  { time: '17:00', temp: 31, rainChance: 70, wind: 28, condition: '🌧️' },
  { time: '18:00', temp: 29, rainChance: 80, wind: 30, condition: '🌧️' },
  { time: '19:00', temp: 27, rainChance: 85, wind: 28, condition: '🌧️' },
  { time: '20:00', temp: 26, rainChance: 60, wind: 24, condition: '🌦️' },
  { time: '21:00', temp: 25, rainChance: 40, wind: 20, condition: '⛅' },
  { time: '22:00', temp: 24, rainChance: 30, wind: 18, condition: '🌙' },
  { time: '23:00', temp: 24, rainChance: 20, wind: 16, condition: '🌙' },
  { time: '00:00', temp: 23, rainChance: 15, wind: 14, condition: '🌙' },
  { time: '01:00', temp: 23, rainChance: 10, wind: 12, condition: '🌙' },
  { time: '02:00', temp: 22, rainChance: 5, wind: 10, condition: '🌙' },
  { time: '03:00', temp: 22, rainChance: 5, wind: 9, condition: '🌙' },
  { time: '04:00', temp: 21, rainChance: 5, wind: 8, condition: '🌙' },
  { time: '05:00', temp: 21, rainChance: 5, wind: 8, condition: '🌅' }
];

export const CROPS: Crop[] = [
  { id: 'wheat', name: { en: 'Wheat', hi: 'गेहूं', pa: 'ਕਣਕ', mr: 'गहू', te: 'గోధుమ' }, icon: '🌾' },
  { id: 'rice', name: { en: 'Rice', hi: 'चावल', pa: 'ਚੌਲ', mr: 'तांदूळ', te: 'వరి' }, icon: '🍚' },
  { id: 'maize', name: { en: 'Maize', hi: 'मक्का', pa: 'ਮੱਕੀ', mr: 'मका', te: 'మొక్కజొన్న' }, icon: '🌽' },
  { id: 'tomato', name: { en: 'Tomato', hi: 'टमाटर', pa: 'ਟਮਾਟਰ', mr: 'टोमॅटो', te: 'టమోటా' }, icon: '🍅' },
  { id: 'cotton', name: { en: 'Cotton', hi: 'कपास', pa: 'ਕਪਾਹ', mr: 'कापूस', te: 'ప్రత్తి' }, icon: '☁️' },
  { id: 'potato', name: { en: 'Potato', hi: 'आलू', pa: 'ਆਲੂ', mr: 'बटाटा', te: 'బంగాళదుంప' }, icon: '🥔' },
  { id: 'sugarcane', name: { en: 'Sugarcane', hi: 'गन्ना', pa: 'ਗੰਨਾ', mr: 'ऊस', te: 'చెరకు' }, icon: '🎋' },
  { id: 'mustard', name: { en: 'Mustard', hi: 'सरसों', pa: 'ਸਰ੍ਹੋਂ', mr: 'मोहरी', te: 'ఆవాలు' }, icon: '🌿' },
  { id: 'onion', name: { en: 'Onion', hi: 'प्याज', pa: 'ਪਿਆਜ਼', mr: 'कांदा', te: 'ఉల్లిపాయ' }, icon: '🧅' },
  { id: 'chili', name: { en: 'Chili', hi: 'मिर्च', pa: 'ਮਿਰਚ', mr: 'मिरची', te: 'మిరపకాయ' }, icon: '🌶️' },
  { id: 'soybean', name: { en: 'Soybean', hi: 'सोयाबीन', pa: 'ਸੋਇਆਬੀਨ', mr: 'सोयाबीन', te: 'సోయాబీన్' }, icon: '🌱' },
  { id: 'grapes', name: { en: 'Grapes', hi: 'अंगूर', pa: 'ਅੰਗੂਰ', mr: 'द्राक्षे', te: 'ద్రాక్ష' }, icon: '🍇' }
];

export const MANDI_DATA: MandiPrice[] = [
  { cropId: 'wheat', quintalPrice: 2450, trend: 'increasing', marketName: 'Ludhiana Mandi' },
  { cropId: 'rice', quintalPrice: 3800, trend: 'stable', marketName: 'Karnal Mandi' },
  { cropId: 'maize', quintalPrice: 1950, trend: 'decreasing', marketName: 'Ahmedabad Mandi' },
  { cropId: 'tomato', quintalPrice: 2200, trend: 'increasing', marketName: 'Azadpur Mandi' },
  { cropId: 'onion', quintalPrice: 2800, trend: 'increasing', marketName: 'Lasalgaon Mandi' },
  { cropId: 'potato', quintalPrice: 1200, trend: 'stable', marketName: 'Agra Mandi' },
  { cropId: 'mustard', quintalPrice: 5400, trend: 'decreasing', marketName: 'Bharatpur Mandi' },
  { cropId: 'cotton', quintalPrice: 7200, trend: 'increasing', marketName: 'Guntur Mandi' },
  { cropId: 'sugarcane', quintalPrice: 350, trend: 'stable', marketName: 'Muzaffarnagar Mandi' },
  { cropId: 'chili', quintalPrice: 9500, trend: 'increasing', marketName: 'Byadgi Mandi' },
  { cropId: 'soybean', quintalPrice: 4200, trend: 'decreasing', marketName: 'Indore Mandi' },
  { cropId: 'grapes', quintalPrice: 6500, trend: 'stable', marketName: 'Nashik Mandi' }
];

export const ORGANIC_CARE_METHODS = [
  {
    title: { en: 'Vermicompost', hi: 'वर्मीकम्पोस्ट', pa: 'ਵਰਮੀਕੰਪੋਸਟ', mr: 'वर्मीकम्पोस्ट', te: 'వర్మీ కంపోస్ట్' },
    subtitle: 'Black Gold Fertilizer',
    variant: 'green' as const,
    steps: [
      "Use red earthworms (Eudrilus eugeniae).",
      "Feed them organic waste like vegetable peels.",
      "Harvest rich black soil every 60 days."
    ]
  },
  {
    title: { en: 'Mulching', hi: 'मल्चिंग', pa: 'ਮਲਚਿੰਗ', mr: 'मल्चिंग', te: 'మల్చింగ్' },
    subtitle: 'Moisture Lock',
    variant: 'yellow' as const,
    steps: [
      "Cover soil with dry grass or plastic sheets.",
      "Prevents weed growth naturally.",
      "Reduces water evaporation by 40%."
    ]
  },
  {
    title: { en: 'Panchagavya', hi: 'पंचगव्य', pa: 'ਪੰਚਗਵਿਆ', mr: 'पंचगव्य', te: 'పంచగవ్య' },
    subtitle: 'Immunity Booster',
    variant: 'orange' as const,
    steps: [
      "Mix cow dung, urine, milk, curd, and ghee.",
      "Ferment for 15-20 days.",
      "Spray 3% solution for faster growth."
    ]
  },
  {
    title: { en: 'Green Manuring', hi: 'हरी खाद', pa: 'ਹਰੀ ਖਾਦ', mr: 'हिरवळीचे खत', te: 'పచ్చిరొట్ట ఎరువు' },
    subtitle: 'Living Nutrients',
    variant: 'green' as const,
    steps: [
      "Grow Sunn hemp or Dhaincha crops.",
      "Plow them back into the soil before flowering.",
      "Increases soil nitrogen content naturally."
    ]
  },
  {
    title: { en: 'Soil Solarization', hi: 'मृदा सौरीकरण', pa: 'ਮਿੱਟੀ ਦਾ ਸੂਰਜੀਕਰਨ', mr: 'मातीचे सौरीकरण', te: 'నేల సౌరీకరణ' },
    subtitle: 'Heat Disinfection',
    variant: 'blue' as const,
    steps: [
      "Cover moist soil with clear plastic in summer.",
      "Let the sun heat the soil for 4 weeks.",
      "Kills soil-borne pests and weed seeds."
    ]
  },
  {
    title: { en: 'Bio-char', hi: 'बायो-चार', pa: 'ਬਾਇਓ-ਚਾਰ', mr: 'बायो-चार', te: 'బయో-చార్' },
    subtitle: 'Carbon Storage',
    variant: 'green' as const,
    steps: [
      "Burn farm waste in low oxygen environment.",
      "Mix black charcoal pieces into your soil.",
      "Helps retain nutrients for many years."
    ]
  }
];

export const CROP_GROWTH_TIPS: { [key: string]: any[] } = {
  wheat: [
    { title: 'CRI Stage Irrigation', desc: 'Crucial: Irrigate at Crown Root Initiation (21 days after sowing).', icon: '💧' },
    { title: 'Sowing Depth', desc: 'Keep depth at 4-5 cm for uniform germination.', icon: '📏' }
  ],
  rice: [
    { title: 'Puddling', desc: 'Ensures water retention and easier seedling transplanting.', icon: '🚜' },
    { title: 'Drying & Wetting', desc: 'Alternate irrigation to reduce water usage without yield loss.', icon: '🌾' }
  ]
};

export const ANCESTRAL_NUZKHE = [
  {
    title: { en: 'Wood Ash Spray', hi: 'लकड़ी की राख का उपयोग', pa: 'ਲੱਕੜ ਦੀ ਸੁਆਹ ਦੀ ਵਰਤੋਂ', mr: 'लाकडाची राख', te: 'కట్టెల బూడిద' },
    subtitle: 'Insect Protection',
    description: 'Sprinkle fine wood ash on leaves early in the morning when dew is present.',
    steps: ['Collect clean wood ash.', 'Wait for morning dew.', 'Dust lightly over plants.'],
    variant: 'yellow' as const
  },
  {
    title: { en: 'Garlic-Chili Spray', hi: 'लहसुन-मिर्च स्प्रे', pa: 'ਲਸਣ-ਮਿਰਚ ਸਪਰੇਅ', mr: 'लसूण-मिरची फवारणी', te: 'వెల్లుల్లి-మిర్చి స్ప్రే' },
    subtitle: 'Organic Pest Repellent',
    description: 'Powerful against aphids, whiteflies, and small caterpillars.',
    steps: ['Crush 100g garlic and 50g green chili.', 'Soak in water overnight.', 'Filter and dilute with 5L water before spraying.'],
    variant: 'red' as const
  },
  {
    title: { en: 'Marigold Guardian', hi: 'गेंदा रक्षक', pa: 'ਗੈਂਦਾ ਰੱਖਿਅਕ', mr: 'झेंडू रक्षक', te: 'బంతి పూల రక్షణ' },
    subtitle: 'Trap Cropping',
    description: 'Plant marigolds around your main crop to distract and trap pests.',
    steps: ['Plant marigold seedlings on borders.', 'They attract pests away from your crop.', 'They also reduce soil nematodes.'],
    variant: 'orange' as const
  },
  {
    title: { en: 'Yellow Sticky Traps', hi: 'पीला चिपचिपा जाल', pa: 'ਪੀਲਾ ਚਿਪਚਿਪਾ ਜਾਲ', mr: 'पिवळे चिकट सापळे', te: 'పసుపు రంగు జిగురు ఉచ్చులు' },
    subtitle: 'Insect Monitoring',
    description: 'Simple visual traps to monitor and catch flying pests.',
    steps: ['Take a yellow card or board.', 'Apply castor oil or grease on it.', 'Hang near crop level to catch sucking insects.'],
    variant: 'yellow' as const
  },
  {
    title: { en: 'Banana Peel Tea', hi: 'केले के छिलके का खाद', pa: 'ਕੇਲੇ ਦੇ ਛਿਲਕੇ ਦੀ ਖਾਦ', mr: 'केळीच्या सालीचे खत', te: 'అరటి తొక్క ఎరువు' },
    subtitle: 'Potassium Boost',
    description: 'Perfect for fruiting and flowering stages of plants.',
    steps: ['Soak dry banana peels in water for 3 days.', 'Dilute this liquid.', 'Pour near roots for stronger stems and bigger fruit.'],
    variant: 'green' as const
  },
  {
    title: { en: 'Ginger-Garlic Extract', hi: 'अदरक-लहसुन अर्क', pa: 'ਅਦਰਕ-ਲਸਣ ਦਾ ਅਰਕ', mr: 'आले-लसूण अर्क', te: 'అల్లం-వెల్లుల్లి సారం' },
    subtitle: 'Immunity Builder',
    description: 'Boosts plant defense against sudden fungal attacks.',
    steps: ['Boil ginger and garlic together.', 'Cool and mix with a little soap.', 'Spray during humid weather to prevent rot.'],
    variant: 'blue' as const
  }
];

export const SEEDS: Seed[] = [
  {
    id: 's1',
    name: 'Super Golden Wheat',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80',
    isOrganic: true,
    grade: 'Best',
    why: 'High yield with less water.',
    producer: 'Kisan Organic Seeds',
    phone: '9876543210',
    price: '₹450',
    rating: 4.8,
    quantityOptions: ['5 kg', '10 kg', 'Quintal']
  },
  {
    id: 's2',
    name: 'Hybrid Maize 404',
    image: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?auto=format&fit=crop&w=400&q=80',
    isOrganic: false,
    grade: 'Better',
    why: 'Disease resistant variety.',
    producer: 'AgroPlus Corp',
    phone: '9871122334',
    price: '₹550',
    rating: 4.2,
    quantityOptions: ['5 kg', '10 kg', 'Quintal']
  },
  {
    id: 's3',
    name: 'Native Basmati Rice',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80',
    isOrganic: true,
    grade: 'Best',
    why: 'Authentic aroma and flavor.',
    producer: 'Heritage Seeds India',
    phone: '9998887776',
    price: '₹1200',
    rating: 4.9,
    quantityOptions: ['5 kg', '10 kg', 'Quintal']
  },
  {
    id: 's4',
    name: 'Organic Cotton Gold',
    image: 'https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&w=400&q=80',
    isOrganic: true,
    grade: 'Good',
    why: 'Perfect for black soil.',
    producer: 'Bharat Bio Seeds',
    phone: '8887776665',
    price: '₹700',
    rating: 4.5,
    quantityOptions: ['1 kg', '5 kg']
  },
  {
    id: 's5',
    name: 'Arka Rakshak Tomato',
    image: 'https://images.unsplash.com/photo-1592841753381-7490b17c1c41?auto=format&fit=crop&w=400&q=80',
    isOrganic: true,
    grade: 'Best',
    why: 'Triple disease resistance.',
    producer: 'IIHR Certified',
    phone: '9448012345',
    price: '₹350',
    rating: 4.7,
    quantityOptions: ['10g', '50g', '100g']
  },
  {
    id: 's6',
    name: 'Pusa Bold Mustard',
    image: 'https://images.unsplash.com/photo-1628623190865-c335990263f3?auto=format&fit=crop&w=400&q=80',
    isOrganic: false,
    grade: 'Better',
    why: 'Higher oil content (42%).',
    producer: 'IARI Seeds',
    phone: '9123456789',
    price: '₹220',
    rating: 4.4,
    quantityOptions: ['1 kg', '5 kg']
  },
  {
    id: 's7',
    name: 'Desi Red Onion (Nasik)',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=400&q=80',
    isOrganic: true,
    grade: 'Good',
    why: 'Excellent storage life.',
    producer: 'Maharashtra Seeds Corp',
    phone: '9822098220',
    price: '₹400',
    rating: 4.6,
    quantityOptions: ['500g', '1 kg']
  },
  {
    id: 's8',
    name: 'Teja Hybrid Chili',
    image: 'https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?auto=format&fit=crop&w=400&q=80',
    isOrganic: false,
    grade: 'Best',
    why: 'Intense heat and high yield.',
    producer: 'Guntur Spice Seeds',
    phone: '8008008001',
    price: '₹600',
    rating: 4.8,
    quantityOptions: ['100g', '250g', '500g']
  },
  {
    id: 's9',
    name: 'Organic Soybean (JS 335)',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=400&q=80',
    isOrganic: true,
    grade: 'Better',
    why: 'Drought tolerant variety.',
    producer: 'Indore Agri Hub',
    phone: '7312345678',
    price: '₹180',
    rating: 4.3,
    quantityOptions: ['5 kg', '10 kg']
  },
  {
    id: 's10',
    name: 'Co 86032 Sugarcane Setts',
    image: 'https://images.unsplash.com/photo-1605336683522-861f9547d6e6?auto=format&fit=crop&w=400&q=80',
    isOrganic: false,
    grade: 'Best',
    why: 'Early maturing, high sugar.',
    producer: 'Tamil Nadu Sugarcane Board',
    phone: '9001002003',
    price: '₹1500',
    rating: 4.9,
    quantityOptions: ['1000 Setts', '5000 Setts']
  }
];

export const GOVT_SCHEMES = [
  {
    id: 'pm-kisan',
    title: { en: 'PM-Kisan Samman Nidhi', hi: 'पीएम-किसान सम्मान निधि', pa: 'ਪੀਐਮ-ਕਿਸਾਨ ਸਨਮਾਨ ਨਿਧੀ', mr: 'पीएम-किसान सन्मान निधी', te: 'పీఎం-కిసాన్ సమ్మాన్ నిధి' },
    eligibility: { en: 'Small and marginal farmers owning land up to 2 hectares.', hi: '2 हेक्टेयर तक की भूमि वाले छोटे और सीमांत किसान।', pa: '2 ਹੈਕਟੇਅਰ ਤੱਕ ਜ਼ਮੀਨ ਵਾਲੇ ਛੋਟੇ ਕਿਸਾਨ।', mr: '२ हेक्टरपर्यंत जमीन असलेले अल्पभूधारक शेतकरी.', te: '2 హెక్టార్ల వరకు భూమి ఉన్న చిన్న మరియు సన్నకారు రైతులు.' },
    benefits: { en: 'Financial assistance of ₹6,000 per year in three installments.', hi: 'सालाना ₹6,000 की वित्तीय सहायता, तीन किश्तों में।', pa: 'ਸਾਲਾਨਾ ₹6,000 ਦੀ ਵਿੱਤੀ ਸਹਾਇਤਾ, ਤਿੰਨ ਕਿਸਤਾਂ ਵਿੱਚ।', mr: 'वर्षाला ₹६,००० आर्थिक मदत, तीन हप्त्यांमध्ये.', te: 'సంవత్సరానికి ₹6,000 ఆర్థిక సహాయం, మూడు విడతలలో.' },
    steps: [
      { en: 'Visit official PM-Kisan portal (pmkisan.gov.in).', hi: 'आधिकारिक पीएम-किसान पोर्टल पर जाएं।', pa: 'ਅਧਿਕਾਰਤ ਪੀਐਮ-ਕਿਸਾਨ ਪੋਰਟਲ ਤੇ ਜਾਓ।', mr: 'अधिकृत पीएम-किसान पोर्टलला भेट द्या.', te: 'అధికారిక పీఎం-కిసాన్ పోర్టల్‌ను సందర్శించండి.' },
      { en: 'Click on "New Farmer Registration" and enter Aadhaar details.', hi: '"न्यू फार्मर रजिस्ट्रेशन" पर क्लिक करें और आधार विवरण भरें।', pa: '"ਨਿਊ ਫਾਰਮਰ ਰਜਿਸਟ੍ਰੇਸ਼ਨ" ਤੇ ਕਲਿੱਕ ਕਰੋ।', mr: '"न्यू फार्मर रजिस्ट्रेशन" वर क्लिक करा.', te: '"కొత్త రైతు నమోదు" పై క్లిక్ చేయండి.' },
      { en: 'Upload land ownership documents and submit application.', hi: 'भूमि स्वामित्व दस्तावेज अपलोड करें और आवेदन जमा करें।', pa: 'ਜ਼ਮੀਨੀ ਦਸਤਾਵੇਜ਼ ਅਪਲੋਡ ਕਰੋ।', mr: 'जमिनीची कागदपत्रे अपलोड करा.', te: 'భూమి పత్రాలను అప్‌లోడ్ చేయండి.' }
    ]
  },
  {
    id: 'pmfby',
    title: { en: 'PM Fasal Bima Yojana', hi: 'पीएम फसल बीमा योजना', pa: 'ਪੀਐਮ ਫਸਲ ਬੀਮਾ ਯੋਜਨਾ', mr: 'पीएम पीक विमा योजना', te: 'పీఎం ఫసల్ బీమా యోజన' },
    eligibility: { en: 'All farmers including sharecroppers and tenant farmers.', hi: 'बटाईदार और किरायेदार किसानों सहित सभी किसान।', pa: 'ਸਾਰੇ ਕਿਸਾਨ, ਬਟਾਈਦਾਰ ਵੀ ਸ਼ਾਮਲ ਹਨ।', mr: 'कूळ आणि भाडेकरू शेतकऱ्यांसह सर्व शेतकरी.', te: 'కౌలు రైతులతో సహా అందరూ రైతులు.' },
    benefits: { en: 'Low premium insurance against crop loss due to natural calamities.', hi: 'प्राकृतिक आपदाओं से फसल नुकसान के खिलाफ कम प्रीमियम वाला बीमा।', pa: 'ਕੁਦਰਤੀ ਆਫ਼ਤਾਂ ਵਿਰੁੱਧ ਘੱਟ ਪ੍ਰੀਮੀਅਮ ਬੀਮਾ।', mr: 'नैसर्गिक आपत्तीमुळे पिकांच्या नुकसानीसाठी विमा.', te: 'ప్రకృతి వైపరీత్యాల వల్ల పంట నష్టపోతే తక్కువ ప్రీమియం బీమా.' },
    steps: [
      { en: 'Contact local bank or CSC center.', hi: 'स्थानीय बैंक या सीएससी (CSC) केंद्र से संपर्क करें।', pa: 'ਸਥਾਨਕ ਬੈਂਕ ਜਾਂ ਸੀਐਸਸੀ ਕੇਂਦਰ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।', mr: 'स्थानिक बँक किंवा CSC केंद्राशी संपर्क साधा.', te: 'స్థానిక బ్యాంకు లేదా సీఎస్సీ కేంద్రాన్ని సంప్రదించండి.' },
      { en: 'Provide crop sowing details and identification proof.', hi: 'फसल बुवाई का विवरण और पहचान प्रमाण दें।', pa: 'ਫਸਲ ਦੀ ਬਿਜਾਈ ਦੇ ਵੇਰਵੇ ਦਿਓ।', mr: 'पिकाच्या पेरणीचा तपशील द्या.', te: 'పంట విత్తిన వివరాలను అందించండి.' },
      { en: 'Pay small premium amount (1.5% to 5% based on crop).', hi: 'छोटा प्रीमियम भुगतान करें।', pa: 'ਘੱਟ ਪ੍ਰੀਮੀਅਮ ਅਦਾ ਕਰੋ।', mr: 'थोड्या प्रमाणात विमा हप्ता भरा.', te: 'తక్కువ ప్రీమియం మొత్తాన్ని చెల్లించండి.' }
    ]
  },
  {
    id: 'kcc',
    title: { en: 'Kisan Credit Card (KCC)', hi: 'किसान क्रेडिट कार्ड', pa: 'ਕਿਸਾਨ ਕ੍ਰੈਡਿਟ ਕਾਰਡ', mr: 'किसान क्रेडिट कार्ड', te: 'కిసాన్ క్రెడిట్ కార్డ్' },
    eligibility: { en: 'Owner cultivators, tenant farmers, and sharecroppers.', hi: 'मालिक काश्तकार, किरायेदार किसान और बटाईदार।', pa: 'ਮਾਲਕ ਕਿਸਾਨ ਅਤੇ ਕਿਰਾਏਦਾਰ ਕਿਸਾਨ।', mr: 'मालक शेतकरी आणि कुळ शेतकरी.', te: 'సొంత రైతులు మరియు కౌలు రైతులు.' },
    benefits: { en: 'Low interest loans for farming needs and credit support.', hi: 'खेती की जरूरतों के लिए कम ब्याज दर पर ऋण और क्रेडिट सहायता।', pa: 'ਖੇਤੀ ਲਈ ਘੱਟ ਵਿਆਜ ਤੇ ਕਰਜ਼ਾ।', mr: 'शेतीसाठी कमी दरात कर्ज.', te: 'వ్యవసాయ అవసరాల కోసం తక్కువ వడ్డీ రుణాలు.' },
    steps: [
      { en: 'Visit nearest bank or apply through CSC.', hi: 'नजदीकी बैंक जाएं या सीएससी के माध्यम से आवेदन करें।', pa: 'ਨੇੜਲੇ ਬੈਂਕ ਵਿੱਚ ਜਾਓ।', mr: 'जवळच्या बँकेला भेट द्या.', te: 'సమీప బ్యాంకును సందర్శించండి.' },
      { en: 'Submit KYC documents (Aadhaar, PAN) and land records.', hi: 'केवाईसी दस्तावेज और भूमि रिकॉर्ड जमा करें।', pa: 'ਆਧਾਰ ਅਤੇ ਜ਼ਮੀਨੀ ਦਸਤਾਵੇਜ਼ ਦਿਓ।', mr: 'आधार आणि जमिनीची कागदपत्रे द्या.', te: 'ఆధార్ మరియు భూమి పత్రాలను సమర్పించండి.' },
      { en: 'Complete verification for credit limit activation.', hi: 'क्रेडिट सीमा सक्रिय करने के लिए सत्यापन पूरा करें।', pa: 'ਵੈਰੀਫਿਕੇਸ਼ਨ ਪੂਰੀ ਕਰੋ।', mr: 'पडताळणी पूर्ण करा.', te: 'ధృవీకరణ పూర్తి చేయండి.' }
    ]
  },
  {
    id: 'soil-health-card',
    title: { en: 'Soil Health Card Scheme', hi: 'मृदा स्वास्थ्य कार्ड योजना', pa: 'ਸੋਇਲ ਹੈਲਥ ਕਾਰਡ ਸਕੀਮ', mr: 'मृदा आरोग्य कार्ड योजना', te: 'నేల ఆరోగ్య కార్డు పథకం' },
    eligibility: { en: 'All land-owning farmers in India.', hi: 'भारत के सभी भूमि मालिक किसान।', pa: 'ਸਾਰੇ ਜ਼ਮੀਨ ਮਾਲਕ ਕਿਸਾਨ।', mr: 'सर्व जमीन मालक शेतकरी.', te: 'భూమి ఉన్న రైతులందరూ.' },
    benefits: { en: 'Expert advice on fertilizer usage to save money.', hi: 'पैसे बचाने के लिए उर्वरक उपयोग पर विशेषज्ञ की सलाह।', pa: 'ਖਾਦ ਦੀ ਸਹੀ ਵਰਤੋਂ ਬਾਰੇ ਸਲਾਹ।', mr: 'खतांच्या वापराबाबत तज्ञ सल्ला.', te: 'ఎరువుల వాడకంపై నిపుణుల సలహాలు.' },
    steps: [
      { en: 'Collect soil samples from your field.', hi: 'अपने खेत से मिट्टी के नमूने लें।', pa: 'ਖੇਤ ਵਿੱਚੋਂ ਮਿੱਟੀ ਦਾ ਨਮੂਨਾ ਲਓ।', mr: 'शेतातून मातीचा नमुना घ्या.', te: 'పొలం నుండి నేల నమూనాలను సేకరించండి.' },
      { en: 'Submit sample to local soil testing lab.', hi: 'स्थानीय मिट्टी परीक्षण प्रयोगशाला में नमूना जमा करें।', pa: 'ਟੈਸਟਿੰਗ ਲੈਬ ਵਿੱਚ ਜਮ੍ਹਾਂ ਕਰੋ।', mr: 'माती परीक्षण प्रयोगशाळेत द्या.', te: 'స్థానిక నేల పరీక్షా కేంద్రంలో సమర్పించండి.' },
      { en: 'Receive digital card with nutrient details.', hi: 'पोषक तत्वों के विवरण के साथ डिजिटल कार्ड प्राप्त करें।', pa: 'ਡਿਜੀਟਲ ਕਾਰਡ ਪ੍ਰਾਪਤ ਕਰੋ।', mr: 'डिजिटल कार्ड मिळवा.', te: 'పోషకాల వివరాలతో కూడిన కార్డును పొందండి.' }
    ]
  },
  {
    id: 'pmksy',
    title: { en: 'PM Krishi Sinchai Yojana', hi: 'पीएम कृषि सिंचाई योजना', pa: 'ਪੀਐਮ ਕ੍ਰਿਸ਼ੀ ਸਿੰਚਾਈ ਯੋਜਨਾ', mr: 'पीएम कृषी सिंचाई योजना', te: 'పీఎం కృషి సించాయి యోజన' },
    eligibility: { en: 'Farmers with irrigation access or looking for micro-irrigation.', hi: 'सिंचाई पहुंच वाले या सूक्ष्म-सिंचाई की तलाश वाले किसान।', pa: 'ਸਿੰਚਾਈ ਸਹੂਲਤਾਂ ਚਾਹੁਣ ਵਾਲੇ ਕਿਸਾਨ।', mr: 'सिंचन सुविधा हवी असलेले शेतकरी.', te: 'నీటి పారుదల సౌకర్యం కోరుకునే రైతులు.' },
    benefits: { en: 'Subsidies on drip and sprinkler systems (up to 90%).', hi: 'ड्रिप और स्प्रिंकलर सिस्टम पर सब्सिडी (90% तक)।', pa: 'ਡ੍ਰਿਪ ਸਿਸਟਮ ਤੇ ਸਬਸਿਡੀ।', mr: 'ठिबक सिंचनावर अनुदान.', te: 'డ్రిప్ మరియు స్ప్రింక్లర్ పద్ధతులపై సబ్సిడీ.' },
    steps: [
      { en: 'Register on state agriculture portal.', hi: 'राज्य कृषि पोर्टल पर पंजीकरण करें।', pa: 'ਖੇਤੀਬਾੜੀ ਪੋਰਟਲ ਤੇ ਰਜਿਸਟਰ ਕਰੋ।', mr: 'कृषी पोर्टलवर नोंदणी करा.', te: 'రాష్ట్ర వ్యవసాయ పోర్టల్‌లో నమోదు చేసుకోండి.' },
      { en: 'Choose equipment vendor for site survey.', hi: 'साइट सर्वेक्षण के लिए उपकरण विक्रेता चुनें।', pa: 'ਵੈਂਡਰ ਚੁਣੋ।', mr: 'विक्रेता निवडा.', te: 'సర్వే కోసం విక్రేతను ఎంచుకోండి.' },
      { en: 'Submit application for departmental subsidy.', hi: 'विभागीय सब्सिडी के लिए आवेदन जमा करें।', pa: 'ਸਬਸਿਡੀ ਲਈ ਅਪਲਾਈ ਕਰੋ।', mr: 'अनुदानासाठी अर्ज करा.', te: 'సబ్సిడీ కోసం దరఖాస్తు చేసుకోండి.' }
    ]
  }
];

export const COMMUNITY_POSTS = [
  { id: 1, name: "Suresh Kumar", location: "Sirsa, Haryana", village: "Kalaan", time: "2h ago", text: "My wheat crop is showing yellow tips. Any suggestions? I used urea last week.", likes: 12, replies: 4, avatar: "https://i.pravatar.cc/150?u=suresh" },
  { id: 2, name: "Harpreet Singh", location: "Amritsar, Punjab", village: "Majitha", time: "4h ago", text: "Mandi rates for Basmati are high today! Glad I waited to sell.", likes: 45, replies: 2, avatar: "https://i.pravatar.cc/150?u=harpreet" },
  { id: 3, name: "Venkata Rao", location: "Guntur, Andhra Pradesh", village: "Tenali", time: "5h ago", text: "Chili prices are looking stable this week. Weather is a bit hot though.", likes: 21, replies: 8, avatar: "https://i.pravatar.cc/150?u=rao" },
  { id: 4, name: "Amol Patil", location: "Sangli, Maharashtra", village: "Walwa", time: "1d ago", text: "Organic grapes experiment is working well. No chemicals used so far!", likes: 89, replies: 15, avatar: "https://i.pravatar.cc/150?u=amol" },
  { id: 5, name: "Ramesh Sharma", location: "Jaipur, Rajasthan", village: "Chomu", time: "3h ago", text: "Rain predicted tomorrow. Hope the mustard harvest stays safe.", likes: 10, replies: 3, avatar: "https://i.pravatar.cc/150?u=ramesh" },
  { id: 6, name: "Siddharth Hegde", location: "Sirsi, Karnataka", village: "Banavasi", time: "6h ago", text: "Areca nut prices are rising. Should I sell now or wait for another week?", likes: 34, replies: 12, avatar: "https://i.pravatar.cc/150?u=sid" },
  { id: 7, name: "Manish Das", location: "Malda, West Bengal", village: "Gazole", time: "10h ago", text: "Mango flowering is excellent this year. Using organic neem spray for pests.", likes: 56, replies: 5, avatar: "https://i.pravatar.cc/150?u=manish" }
];

export const FAQS = [
  { 
    q: { en: "Why are my leaves turning yellow?", hi: "मेरे पत्ते पीले क्यों हो रहे हैं?", pa: "ਮੇਰੇ ਪੱਤੇ ਪੀਲੇ ਕਿਉਂ ਹੋ ਰਹੇ ਹਨ?", mr: "माझी पाने पिवळी का पडत आहेत?", te: "నా ఆకులు ఎందుకు పసుపు రంగులోకి మారుతున్నాయి?" }, 
    a: { en: "Yellowing can be caused by nutrient deficiency, over-watering, or pests. Check soil moisture and look for insects.", hi: "पीलापन पोषक तत्वों की कमी, अधिक पानी या कीटों के कारण हो सकता है। मिट्टी की नमी की जांच करें।", pa: "ਪੀਲਾਪਣ ਪੌਸ਼ਟਿਕ ਤੱਤਾਂ ਦੀ ਘਾਟ ਜਾਂ ਕੀੜਿਆਂ ਕਾਰਨ ਹੋ ਸਕਦਾ ਹੈ। ਮਿੱਟੀ ਦੀ ਨਮੀ ਦੀ ਜਾਂਚ ਕਰੋ।", mr: "पोषक तत्वांच्या कमतरतेमुळे किंवा कीटकांच्या हल्ल्यामुळे पाने पिवळी पडू शकतात.", te: "పోషకాల లోపం లేదా తెగుళ్ళ వల్ల ఆకులు పసుపు రంగులోకి మారవచ్చు." } 
  }
];
