import type { BusinessNameSuggestion } from '../types';

interface AgentResponse {
  text: string;
  suggestions: string[];
  isConclusion: boolean;
}

const API_ENDPOINT = '/.netlify/functions/gemini';

export const getDigitalStrategy = async (businessDescription: string): Promise<string> => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'getDigitalStrategy',
        businessDescription
      })
    });

    if (!response.ok) {
      throw new Error('Failed to generate strategy');
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "An error occurred while generating your strategy. Please try again later.";
  }
};

export const getAIAgentResponse = async (history: { role: string; text: string }[]): Promise<AgentResponse> => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'getAIAgentResponse',
        history
      })
    });

    if (!response.ok) {
      throw new Error('Failed to get AI agent response');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getAIAgentResponse:", error);
    throw error;
  }
};

export const generateBusinessNames = async (description: string, keywords: string): Promise<BusinessNameSuggestion[]> => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'generateBusinessNames',
        description,
        keywords
      })
    });

    if (!response.ok) {
      throw new Error('Failed to generate business names');
    }

    const data = await response.json();
    return data.names || [];
  } catch (error) {
    console.error("Error calling Gemini API for business names:", error);
    throw new Error("An error occurred while generating business names. Please try again later.");
  }
};
