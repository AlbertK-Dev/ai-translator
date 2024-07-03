import React from 'react'


type Props = {

    text?: string,
  onClic: () => void,
    disabled?: boolean,
    



}
const TranslationButton:React.FC<Props> = ({ text='translate', onClic, disabled=false }) => {
  return (

          <button disabled={disabled} onClick={onClic} className={` max-lg:rotate-90   rotate-0   text-white    p-2 flex justify-center items-center rounded-full ${ disabled? 'bg-stone-800': 'hover:cursor-pointer hover:bg-slate-700 bg-blue-500'} `}>
              {text}
          </button>
  
  )
}

export default TranslationButton