import React, { createContext,  useState, ReactNode } from 'react';
import { AvailableFormat } from '../components/TraductionTab';
import translateText from '../openAI/translate';

type Translated = {
    [key in AvailableFormat]: string;
}

// Définition du type du contexte
type TraductionContextType = {
    src: AvailableFormat;
    dest: AvailableFormat;
    setTraduction: (src: AvailableFormat, dest?: AvailableFormat,text?:string, newTranslatedText?: Partial<Translated>) => void;
    text: string;
    translatedText: Translated;
    setText: (text: string) => void,
    translate: () => Promise<void>,
    isTranslating: boolean,
    apiKey: string,
    setApiKey: (apikey: string) => void,
    error: string,
    setError:(error:string)=>void,
};

// Valeur initiale du contexte
export const TraductionContext = createContext<TraductionContextType | undefined>(undefined);

type Props = {
    children: ReactNode;
};

const TraductionProvider: React.FC<Props> = ({ children }) => {
    // État local pour les langues
    const [src, setSrc] = useState<AvailableFormat>('fr-FR');
    const [error, setError] = useState('')
    const [dest, setDest] = useState<AvailableFormat>('zh-CN');
    const allFormat: AvailableFormat[]= ['de-DE', 'en-US','es-ES','fr-FR','zh-CN']
    const [text, setText] = useState<string>('')
    const [translatedText, setTranslatedText] = useState<Translated>({
        'de-DE': 'résultat en allemand',
        'en-US': 'résultat en Anglais us',
        'es-ES': 'résultat en espagnol',
        'fr-FR': 'résultat en français',
        'zh-CN': 'résultat en chinois'
    })
    const [isTranslating, setIstranslating] = useState(false);
    const [apiKey, setApiKey] = useState("sk-proj-CTZmQzpbLGgtwNGs1P3jT3BlbkFJFVvTlcRnfIUMqveXpfY9")
    
    // Fonction pour mettre à jour les langues
    const setTraduction = (newSrc: AvailableFormat, newDest: AvailableFormat = dest, text='', newTranslatedText: Partial<Translated> = translatedText) => {
        
        if (newSrc === dest) {
            setDest(src)
        }
        setSrc(newSrc);
        if (newDest) {
             setDest(newDest);
        }
       
        if (text) {
            setText(text)
        }
        if (newTranslatedText) {
            setTranslatedText({ ...translatedText, ...newTranslatedText });
        }
        
    };


    const translate = async () => {
        setError('')
        try {
            setIstranslating(true)
      const translated = await translateText(apiKey,src, allFormat, text)
        setIstranslating(false)
        if (translated) {
            setTranslatedText(translated)
        } 
        setIstranslating(false)
    } catch (error) {
            setIstranslating(false)
            setTranslatedText(translatedText);
            setError(error as string)
            setTimeout(() => {
                setError('')
            },5000)
        }
       
        
       
    }
    

    return (
        <TraductionContext.Provider value={{ src, dest, setTraduction, text, translatedText, setText, translate, isTranslating, apiKey, setApiKey, error, setError }}>
            {children}
        </TraductionContext.Provider>
    );
};



export default TraductionProvider
