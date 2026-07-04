import { GoogleGenAI } from "@google/genai"

const AI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

export const AIinteraction = async (text: string) =>
  await AI.interactions.create({
    model: "gemini-3.5-flash",
    input: text,
  })
