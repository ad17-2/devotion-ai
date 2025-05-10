import { RequestHandler } from 'express';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface DevotionRequest {
  passage: string;
}

interface DevotionResponse {
  summary: string;
  actionPoints: string[];
  prayer: string;
  context: string;
  reflectionQuestions: string[];
}

export const generateDevotion: RequestHandler<{}, DevotionResponse | { error: string }, DevotionRequest> = async (req, res) => {
  try {
    const { passage } = req.body;

    if (!passage) {
      res.status(400).json({ error: 'Bible passage is required' });
      return;
    }

    const prompt = `Given this Bible passage: "${passage}", please provide:
1. A concise summary (100-150 words)
2. Three practical action points for daily life
3. A heartfelt prayer inspired by this passage (100-150 words)
4. Brief historical or theological context (100 words)
5. Two thought-provoking reflection questions

Format the response as a JSON object with the following structure:
{
  "summary": "string",
  "actionPoints": ["string", "string", "string"],
  "prayer": "string",
  "context": "string",
  "reflectionQuestions": ["string", "string"]
}`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4o",
      response_format: { type: "json_object" },
    });

    const devotion = JSON.parse(completion.choices[0].message.content || '{}') as DevotionResponse;
    res.json(devotion);
  } catch (error) {
    console.error('Error generating devotion:', error);
    res.status(500).json({ error: 'Failed to generate devotion' });
  }
}; 