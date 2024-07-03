import { AvailableFormat } from "../components/TraductionTab";

// api.js
import OpenAI from "openai";


export type Translated = {
    [key in AvailableFormat]: string;
};

export const translateText = async (apiKey: string, src: AvailableFormat, dest: AvailableFormat[], text: string): Promise<Translated> => {
    try {
        const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

        const translations: Partial<Translated> = {};

        for (const lang of dest) {
            const completion = await openai.chat.completions.create({
                messages: [
                    { role: "system", content: `You are a helpful assistant. Translate the following text from ${src} to ${lang} and return the result as a JSON object where the key is the target language code and the value is the translated text.` },
                    { role: "user", content: text },
                ],
                model: "gpt-3.5-turbo",
            });

            if (completion && completion.choices && completion.choices.length > 0) {
                const messageContent = completion.choices[0].message?.content?.trim();
                if (messageContent) {
                    const result = JSON.parse(messageContent);
                    translations[lang] = result[lang] || 'erreur';
                } else {
                    translations[lang] = 'erreur';
                }
            } else {
                translations[lang] = 'erreur';
            }
        }

        return translations as Translated;

    } catch (error) {
        console.error('Translation error:', error);
        throw new Error('Translation error:' + error);
    }
};

export default translateText;
