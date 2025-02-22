import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

export async function getHealthAdvice(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(
    `As a health and nutrition expert, please answer the following question: ${prompt}. Keep the answer concise and focused on healthy eating and nutrition.`,
  );

  const response = await result.response;
  return response.text();
}
