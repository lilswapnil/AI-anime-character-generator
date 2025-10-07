"use client";

import Image from "next/image";
import { useState } from "react";
import { generateImage } from "./utils/openai";

export default function Home() {
  // State to hold the user's input text
  const [prompt, setPrompt] = useState("");
  // State to hold the URL of the generated image
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  // State to manage the loading status
  const [loading, setLoading] = useState(false);

  // Function to handle the "Generate" button click
  const handleGenerate = async () => {
    if (!prompt) {
      alert("What meme are yoy thiinking of?");
      return;
    }

    setLoading(true);
    setImageUrl(null); // Clear previous image

    try {
      // Call the server action to generate the image
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
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-foreground">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Memery - AI Meme Generator</h1>
        <div className="flex flex-col gap-4">
          {/* Art gallery style image container */}
          <div className="bg-stone-900 p-4 rounded-md shadow-2xl border-2 border-stone-700">
            <div className="aspect-square w-full bg-black flex items-center justify-center overflow-hidden">
              {loading ? (
                <span className="text-gray-400">Generating...</span>
              ) : imageUrl ? (
                <Image src={imageUrl} alt="Generated Meme" width={1024} height={1024} />
              ) : (
                <span className="text-gray-500">Image will appear here</span>
              )}
            </div>
          </div>

          {/* Text input */}
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your meme text"
            className="w-full p-3 border bg-textbox rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            disabled={loading}
          />

          {/* Generate button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:bg-gray-500"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      </div>
    </main>
  );
}
