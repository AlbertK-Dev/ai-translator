import { AvailableFormat } from "../components/TraductionTab";

// api.js
import OpenAI from "openai";

const openai = new OpenAI({apiKey:"sk-proj-CTZmQzpbLGgtwNGs1P3jT3BlbkFJFVvTlcRnfIUMqveXpfY9", dangerouslyAllowBrowser:true});

export const translateText = async (src:AvailableFormat, dest:AvailableFormat, text:string) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: `You are a helpful assistant. Translate the following text from ${src} to ${dest}.` },
                { role: "user", content: text },
            ],
            model: "gpt-3.5-turbo",
        });
        if (completion) {
            return completion?.choices[0]?.message?.content?.trim();
        }
        return 'erreur'

        
    } catch (error) {
        console.error('Translation error:', error);
        throw new Error('Translation error');
    }
};

export default translateText
