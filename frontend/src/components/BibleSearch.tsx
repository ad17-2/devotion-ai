'use client';

import { useState } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';

interface BibleSearchProps {
  onGenerate: (passage: string) => void;
  loading: boolean;
}

interface Verse {
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}

export default function BibleSearch({ onGenerate, loading }: BibleSearchProps) {
  const [reference, setReference] = useState('');
  const [verses, setVerses] = useState<Verse[]>([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    setVerses([]);
    try {
      const response = await fetch(`/api/bible/search?reference=${encodeURIComponent(reference)}`);
      if (!response.ok) throw new Error('Failed to fetch Bible passage');
      const data = await response.json();
      setVerses(data.verses || []);
    } catch {
      setError('Failed to fetch Bible passage.');
    }
  };

  const passageForDevotion = verses.map(v => v.text.trim()).join(' ');

  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      <label htmlFor="reference" className="block text-gray-700 font-semibold mb-2 text-lg">Bible Reference</label>
      <div className="flex gap-2 mb-5">
        <input
          id="reference"
          type="text"
          className="flex-1 border border-violet-200 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 placeholder-gray-400 text-base shadow-sm bg-white/80"
          placeholder="e.g., John 1:1-3"
          value={reference}
          onChange={e => setReference(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-500 hover:from-violet-700 hover:to-indigo-600 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all duration-150"
        >
          <FaSearch className="text-white" />
          <span>Search</span>
        </button>
      </div>
      {error && <div className="text-red-500 text-sm mb-3 font-medium">{error}</div>}
      {verses.length > 0 && (
        <div className="bg-violet-50/70 p-4 rounded-lg mb-5 space-y-2 border border-violet-200 max-h-48 overflow-y-auto">
          {verses.map(v => (
            <div key={`${v.book_name}-${v.chapter}-${v.verse}`} className="flex items-start gap-3">
              <span className="inline-block bg-gradient-to-r from-violet-500 to-indigo-400 text-white text-xs font-bold px-2 py-1 rounded shadow min-w-fit">{v.book_name} {v.chapter}:{v.verse}</span>
              <span className="text-gray-800 text-base">{v.text.trim()}</span>
            </div>
          ))}
        </div>
      )}
      {verses.length > 0 && (
        <button
          onClick={() => onGenerate(passageForDevotion)}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-lg font-bold text-lg shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        >
          {loading && <FaSpinner className="animate-spin" />}
          {loading ? 'Generating...' : 'Generate Devotion'}
        </button>
      )}
    </div>
  );
} 