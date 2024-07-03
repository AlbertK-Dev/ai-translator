import React from 'react'
import { useTraduction } from '../Hooks/useTraduction';

type ContentProps = {
    editable?: boolean;
   
}

const TraductionContent:React.FC<ContentProps> = ({editable=true}) => {

    const { text, setText, translatedText, dest, error } = useTraduction()
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  
  }; 
  return (
    <textarea
      value={editable ? text : translatedText[dest]}
      onChange={handleChange}
      readOnly={!editable}
      className={`bg-slate-50 flex-1 min-h-80 rounded-lg p-1 ${error ? 'border-red-700 bg-red-200': ''}`}
    rows={5} // Définit le nombre de lignes visibles
  />
  )
}

export default TraductionContent