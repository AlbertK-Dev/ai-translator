import React, { createContext,  useState, ReactNode } from 'react';
import { AvailableFormat } from '../components/TraductionTab';
import translateText from '../openAI/translate';

// Définition du type du contexte
type TraductionContextType = {
    src: AvailableFormat;
    dest: AvailableFormat;
    setTraduction: (src: AvailableFormat, dest: AvailableFormat,text?:string, translatedText?:string) => void;
    text: string;
    translatedText: string;
    setText: (text: string) => void,
    translate: () => Promise<void>,
    isTranslating:boolean,
};

// Valeur initiale du contexte
export const TraductionContext = createContext<TraductionContextType | undefined>(undefined);

type Props = {
    children: ReactNode;
};

const TraductionProvider: React.FC<Props> = ({ children }) => {
    // État local pour les langues
    const [src, setSrc] = useState<AvailableFormat>('fr-fr');
    const [dest, setDest] = useState<AvailableFormat>('en-us');
    const [text, setText] = useState<string>('')
    const [translatedText, setTranslatedText] = useState<string>('')
    const [isTranslating, setIstranslating] = useState(false)
    
    // Fonction pour mettre à jour les langues
    const setTraduction = (newSrc: AvailableFormat = 'fr-fr', newDest: AvailableFormat = 'en-us', text='', translatedText='') => {
        setSrc(newSrc);
        setDest(newDest);
        setText(text)
        setTranslatedText(translatedText)
    };


    const translate = async () => {
        try {
            setIstranslating(true)
      const translated = await translateText(src, dest, text)
        setIstranslating(false)
        if (translated) {
            setTranslatedText(translated)
        } 
        setIstranslating(false)
    } catch (error) {
            setIstranslating(false)
            setTranslatedText("error interne" + error)
        }
       
        
       
    }
    

    return (
        <TraductionContext.Provider value={{ src, dest, setTraduction, text, translatedText, setText, translate, isTranslating }}>
            {children}
        </TraductionContext.Provider>
    );
};



export default TraductionProvider
