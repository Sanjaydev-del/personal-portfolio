
import { GoogleGenAI } from "@google/genai";

const CONTEXT = `
You are an AI assistant for Sanjay's portfolio website. 
Sanjay is an Aspiring Software Developer, Problem Solver, and Tech Enthusiast.
Skills: React, TypeScript, Node.js, Python, AWS, Docker, Tailwind CSS.
Projects: Nexus Cloud Dashboard, AI Smart Recruiter, SafeStream Finance.
Education: Computer Science at University of Technology (3.9 GPA).
Personality: Confident, humble, growth-oriented, passionate about consistent learning.
Goal: To help recruiters and visitors learn about Sanjay's work and potential.
Be professional, concise, and friendly. If you don't know an answer, suggest they contact Sanjay directly.
`;

export async function askSanjayAI(query: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: CONTEXT,
        temperature: 0.7,
        maxOutputTokens: 250,
      }
    });

    return response.text || "I'm having trouble thinking right now. Feel free to contact Sanjay directly!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently offline. Please try again later.";
  }
}
