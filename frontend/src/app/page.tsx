'use client';

import { useState } from 'react';
import BibleSearch from '@/components/BibleSearch';
import DevotionDisplay from '@/components/DevotionDisplay';

export default function Home() {
  const [devotion, setDevotion] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateDevotion = async (passage: string) => {
    try {
      setLoading(true);
      const response = await fetch('/api/devotion/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passage }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate devotion');
      }

      const data = await response.json();
      setDevotion(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to generate devotion. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-100 font-sans pb-20">
      <header className="w-full text-center pt-12 pb-8">
        <h1 className="text-5xl font-extrabold text-violet-700 tracking-tight drop-shadow-sm mb-2">DevotionAI</h1>
        <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-indigo-400 rounded-full mx-auto" />
      </header>
      <section className="w-full max-w-3xl mx-auto px-4">
        <BibleSearch onGenerate={handleGenerateDevotion} loading={loading} />
      </section>
      {devotion && (
        <section className="w-full max-w-3xl mx-auto px-4 mt-12">
          <DevotionDisplay devotion={devotion} />
        </section>
      )}
    </main>
  );
}
