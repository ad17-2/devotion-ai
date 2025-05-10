'use client';

import { FaRegLightbulb, FaListUl, FaPrayingHands, FaBookOpen, FaQuestionCircle } from 'react-icons/fa';

interface Devotion {
  summary: string;
  actionPoints: string[];
  prayer: string;
  context: string;
  reflectionQuestions: string[];
}

interface DevotionDisplayProps {
  devotion: Devotion;
}

export default function DevotionDisplay({ devotion }: DevotionDisplayProps) {
  return (
    <div className="space-y-16">
      <section className="w-full max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <FaRegLightbulb className="text-violet-500 text-xl" />
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Summary</h2>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">{devotion.summary}</p>
      </section>
      <div className="h-0.5 w-full max-w-2xl mx-auto bg-gradient-to-r from-violet-100 via-gray-200 to-violet-100 rounded-full" />
      <section className="w-full max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <FaListUl className="text-green-500 text-xl" />
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Action Points</h2>
        </div>
        <ul className="list-none space-y-3">
          {devotion.actionPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700 text-lg">
              <span className="inline-block mt-1 w-2 h-2 bg-green-400 rounded-full" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>
      <div className="h-0.5 w-full max-w-2xl mx-auto bg-gradient-to-r from-violet-100 via-gray-200 to-violet-100 rounded-full" />
      <section className="w-full max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <FaPrayingHands className="text-amber-500 text-xl" />
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Prayer</h2>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed italic">{devotion.prayer}</p>
      </section>
      <div className="h-0.5 w-full max-w-2xl mx-auto bg-gradient-to-r from-violet-100 via-gray-200 to-violet-100 rounded-full" />
      <section className="w-full max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <FaBookOpen className="text-indigo-500 text-xl" />
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Context</h2>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">{devotion.context}</p>
      </section>
      <div className="h-0.5 w-full max-w-2xl mx-auto bg-gradient-to-r from-violet-100 via-gray-200 to-violet-100 rounded-full" />
      <section className="w-full max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <FaQuestionCircle className="text-pink-500 text-xl" />
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Reflection Questions</h2>
        </div>
        <ul className="list-none space-y-3">
          {devotion.reflectionQuestions.map((question, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700 text-lg">
              <span className="inline-block mt-1 w-2 h-2 bg-pink-400 rounded-full" />
              <span>{question}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
} 