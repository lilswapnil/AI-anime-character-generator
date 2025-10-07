# Anime Character Generator

An AI-powered web application that generates unique anime characters based on user descriptions. Provide a prompt, and the AI will bring your character to life!

## ✨ Features

*   **AI Character Generation:** Uses the OpenAI DALL-E API to create anime-style characters from text prompts.
*   **Simple Interface:** Easy-to-use input for quick character creation.
*   **Built with Modern Tech:** A fast, modern web application built with Next.js and React.

## 🛠️ Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **AI:** [OpenAI DALL-E API](https://openai.com/dall-e-2)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone <https://github.com/lilswapnil/AI-anime-character-generator.git>
cd memery
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a file named `.env` in the root of the project and add your OpenAI API key:

```
OPENAI_API_KEY="your_openai_api_key_here"
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 💡 How to Get Better Results

This application uses the **DALL-E 2** model from OpenAI to generate images. The quality of the generated character depends heavily on the prompt you provide. Here are some tips for writing effective prompts:

*   **Be Specific:** Instead of "a warrior", try "a female knight with silver armor, holding a glowing sword".
*   **Describe the Style:** You can influence the art style. For example, add "in the style of a 90s anime" or "with a modern, clean art style".
*   **Include Details:** Mention colors, clothing, accessories, and expressions. For example, "a cheerful mage with a blue robe and a wooden staff, smiling".
*   **Set the Scene:** While the prompt adds a simple background by default, you can specify elements like "standing in a forest" or "with a futuristic city in the background".

The application will combine your prompt with a base instruction to create a detailed anime character. Experiment with different descriptions to see what you can create!