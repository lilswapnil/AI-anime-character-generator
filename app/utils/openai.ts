"use server";

import OpenAI from 'openai';

/**
 * Generates an image based on a user prompt using the DALL-E API.
 * @param userPrompt The text prompt from the user.
 * @returns The URL of the generated image, or null on failure.
 */
export async function generateImage(userPrompt: string) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    // A detailed prompt to guide the model's image generation.
    const fullPrompt = `A funny meme image that illustrates the following text but not text in the image: ${userPrompt}`
    // Request a single, cost-effective image from the DALL-E 2 model.
    const response = await openai.images.generate({
        model: "dall-e-2",
        prompt: fullPrompt,
        n: 1,
        size: "512x512",
    });

    const imageUrl = response.data?.[0]?.url;

    return imageUrl || null;
}
