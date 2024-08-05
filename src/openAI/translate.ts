import { AvailableFormat } from "../components/TraductionTab";

export type Translated = {
    [key in AvailableFormat]: string;
};


import { GoogleGenerativeAI } from "@google/generative-ai";



const prompt = (src:AvailableFormat, dest: AvailableFormat, text:string) => {
    return `You are a helpful assistant. 
    Translate the following \n\n${text}\n\n from \n\n${src}\n\n to \n[${dest}]\n\n and return the result as a JSON stringified (give me just JSON object to parse, don't add backtick and 'json' word) object where the key is the target language code and the value is the translated text.`
};



export const translateText = async (apiKey="AIzaSyCcZdQsHuHnM0_jYHB6EYsj5RrWZ2XU9fE", src: AvailableFormat, dest: AvailableFormat[], text: string): Promise<Translated> => {
    try {

        // Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


 
        const translations: Partial<Translated> = {};

 

        for (const lang of dest) {
            console.log(prompt(src, lang, text))
            const result = await model.generateContent(prompt(src, lang, text));
            console.log(result.response.text());

            if (result.response.text()) {
                const messageContent = result.response.text().trim()
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
