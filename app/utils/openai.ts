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

    // Prompt for generating an anime character.
    const fullPrompt = `A high-quality, detailed anime character based on the following description: ${userPrompt}. The character should be in a dynamic pose, with a simple background.`;

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
