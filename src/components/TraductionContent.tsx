import React from 'react'
import { useTraduction } from '../Hooks/useTraduction';

type ContentProps = {
    editable?: boolean;
   
}

const TraductionContent:React.FC<ContentProps> = ({editable=true}) => {

    const { text, setText, translatedText } = useTraduction()
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    console.log(e.target.value); // Affiche le contenu du textarea dans la console
  }; 
  return (
    <textarea
    value={editable? text: translatedText}
    onChange={handleChange}
    readOnly={!editable}
    className='bg-slate-50 flex-1 rounded-lg p-1'
    rows={5} // Définit le nombre de lignes visibles
  />
  )
}

export default TraductionContent