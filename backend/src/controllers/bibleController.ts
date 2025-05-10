import { RequestHandler } from 'express';
import axios from 'axios';

interface BiblePassageQuery {
  reference?: string;
}

export const getBiblePassage: RequestHandler<{}, any, {}, BiblePassageQuery> = async (req, res) => {
  try {
    const { reference } = req.query;

    if (!reference) {
      res.status(400).json({ error: 'Bible reference is required' });
      return;
    }

    const formattedReference = reference.replace(/\s+/g, '+');

    const url = `https://bible-api.com/${formattedReference}?translation=kjv`;

    const response = await axios.get(url);

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Bible passage:', error);
    res.status(500).json({ error: 'Failed to fetch Bible passage' });
  }
}; 