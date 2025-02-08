// src/services/anthropicService.js
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true
});

export const testConnection = async () => {
  try {
    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: "Hello, can you respond with 'API Connection Successful'?"
        }
      ]
    });
    console.log('API Response:', response);
    return response.content[0].text;
  } catch (error) {
    console.error('API Connection Error:', error);
    throw error;
  }
}

export const generatePolicyAnalysis = async (policyQuestion) => {
  try {
    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: `Analyze this policy question: "${policyQuestion}". 
                   Return a JSON object with the following structure:
                   {
                     title: string,
                     subtopics: [{
                       id: string,
                       title: string,
                       summary: string,
                       factors: [{
                         id: string,
                         title: string,
                         summary: string,
                         sources: string[],
                         expertViews: {
                           perspective1: string,
                           perspective2: string
                         },
                         subfactors: string[]
                       }]
                     }]
                   }`
        }
      ]
    });

    return JSON.parse(response.content[0].text);
  } catch (error) {
    console.error('Error calling Claude API:', error);
    throw error;
  }
}