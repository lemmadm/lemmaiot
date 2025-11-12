import type { Config, Context } from "@netlify/functions";
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY;

export default async (req: Request, context: Context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!API_KEY) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await req.json();
    const { action, ...params } = body;

    const ai = new GoogleGenAI({ apiKey: API_KEY });

    switch (action) {
      case 'getDigitalStrategy': {
        const { businessDescription } = params;
        
        const prompt = `
          You are a sharp, direct digital strategy consultant for Nigerian SMEs. A business owner has provided the following description:
          "${businessDescription}"

          Based on this, provide a concise and actionable digital strategy. Your response must use simple Markdown (only bolding, italics, and bullet points). Do not use markdown headlines (#, ##, etc.).

          Structure your response as follows:
          - **Immediate Actions:** 2-3 top-priority, high-impact steps.
          - **Key Service Recommendations:** Suggest 2-3 of our core services (like Web Development, AI Automation, Digital Marketing) that are most critical for them and briefly explain why.
          - **Growth Tip:** One powerful, forward-thinking tip for the Nigerian market.

          Keep the tone professional, encouraging, and direct. Conclude with the exact sentence: 'Stick with LemmaIoT to bring this strategy to life and accelerate your growth.'
        `;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt
        });

        return new Response(JSON.stringify({ text: response.text }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      case 'getAIAgentResponse': {
        const { history } = params;
        const model = "gemini-2.5-flash";
        const systemInstruction = `You are a warm, engaging, and professional AI assistant for LemmaIoT, a digital solutions provider in Nigeria. Your goal is to understand a potential customer's needs through a simple, guided conversation. Your tone should be encouraging and helpful.

RULES:
1.  **One Question at a Time:** Always ask only ONE clear question.
2.  **Provide Buttons:** After your question, ALWAYS provide 3-4 short, relevant options for the user to click. Format them EXACTLY like this on a new line: [Option 1 | Option 2 | Option 3]
3.  **Allow User Input:** Always offer a way for the user to provide their own answer, such as a 'Something else' button.
4.  **Keep it Brief:** Your responses should be very short and conversational. Use simple markdown like **bold text** for emphasis and line breaks (<br>) for readability.
5.  **Conversation Flow:**
    - Start by understanding their main goal.
    - Ask 1-2 clarifying questions based on their answers.
    - **Automation Specifics:** When a user selects an option like 'Automate my business', your next question MUST dig deeper into the specific type of automation they need. Offer clear options like 'AI Chatbot for my website', 'WhatsApp Bot for sales', 'Custom AI solution', and 'Not sure yet'.
    - After 3-4 interactions, you will have enough information. At that point, provide a concise summary of their needs.
6.  **Conclusion Marker:** The summary message **MUST** start with the exact text \`[CONCLUSION]\`. For example: \`[CONCLUSION]Okay, to summarize: you're looking for a new website for your catering business...\`. Do **not** include suggestion buttons \`[...]\` in the conclusion message.
  `;

        const contents = history.map((msg: { role: string; text: string }) => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        }));

        const response = await ai.models.generateContent({
          model: model,
          contents: contents,
          config: {
            systemInstruction: systemInstruction,
          }
        });

        const rawText = response.text;
        let text = rawText;
        let suggestions: string[] = [];
        let isConclusion = false;

        if (rawText.startsWith('[CONCLUSION]')) {
          isConclusion = true;
          text = rawText.substring('[CONCLUSION]'.length).trim();
        } else {
          const suggestionMatch = rawText.match(/\[(.*?)\]/);
          if (suggestionMatch && suggestionMatch[1]) {
            text = rawText.replace(/\[.*?\]/, '').trim();
            suggestions = suggestionMatch[1].split('|').map(s => s.trim());
          }
        }

        return new Response(JSON.stringify({ text, suggestions, isConclusion }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      case 'generateBusinessNames': {
        const { description, keywords } = params;
        
        const prompt = `
          Based on the following business description and keywords, generate 10 creative, modern, and memorable business names suitable for the Nigerian market. For each name, also create a short, catchy tagline.

          Business Description: "${description}"
          Keywords: "${keywords}"

          Provide unique and brandable names. Avoid generic terms.
        `;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                names: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: {
                        type: Type.STRING,
                        description: "The business name.",
                      },
                      tagline: {
                        type: Type.STRING,
                        description: "A short, catchy tagline for the business name.",
                      },
                    },
                    required: ["name", "tagline"],
                  },
                },
              },
              required: ["names"],
            },
          },
        });

        const jsonResponse = JSON.parse(response.text);
        return new Response(JSON.stringify({ names: jsonResponse.names || [] }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      default:
        return new Response(JSON.stringify({ error: 'Invalid action' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
    }
  } catch (error) {
    console.error('Gemini function error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const config: Config = {
  path: "/api/gemini"
};
