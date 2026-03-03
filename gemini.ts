
import { GoogleGenAI } from "@google/genai";

// Use process.env.API_KEY directly for initialization as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getKrishiBuddyResponse = async (prompt: string, location?: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are KrishiBuddy, a trusted personal farming assistant for Indian farmers. 
      TONE: Friendly, respectful, and encouraging, like a knowledgeable elder sibling or a village expert (Pradhan). 
      STYLE: Use very simple language. Focus on practical benefits like "better yield," "saving money," and "soil health." Avoid technical jargon. 
      If the user is worried, be empathetic. If they ask about prices, be precise.
      Current context/location: ${location || 'India'}.
      User query: ${prompt}`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        maxOutputTokens: 500
      }
    });
    // Access the .text property directly instead of calling it as a method
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf kijiye, abhi main connect nahi ho pa raha hoon. Kripya thodi der baad koshish karein. (I'm having trouble connecting right now. Please try again later.)";
  }
};
