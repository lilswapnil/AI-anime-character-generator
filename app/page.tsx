"use client";

import Image from "next/image";
import { useState } from "react";
import { generateImage } from "./utils/openai";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) {
      alert("Please enter a character description.");
      return;
    }

    setLoading(true);
    setImageUrl(null);

    try {
      const url = await generateImage(prompt);
      setImageUrl(url);
    } catch (error) {
      console.error(error);
      alert("Failed to generate image. Please check the console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 text-white">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Anime Character Generator</h1>
          <p className="mt-2 text-gray-400">Bring your character ideas to life with AI.</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-700">
          <div className="aspect-square w-full bg-black flex items-center justify-center rounded-md overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-400"></div>
              </div>
            ) : imageUrl ? (
              <Image src={imageUrl} alt="Generated Anime Character" width={512} height={512} className="object-cover w-full h-full" />
            ) : (
              <span className="text-gray-500">Your character will appear here</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., a samurai with a robotic arm, neon city background"
            className="w-full p-3 border bg-gray-800 border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
            rows={3}
            disabled={loading}
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {loading ? "Generating..." : "Generate Character"}
          </button>
        </div>
      </div>
    </main>
  );
}