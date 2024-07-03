import React from 'react'


type Props = {

    text?: string,
    onClic: () => void,
    



}
const TranslationButton:React.FC<Props> = ({ text='translate', onClic}) => {
  return (

          <div onClick={onClic} className=' max-lg:rotate-90   rotate-0   text-white bg-blue-500   p-2 flex justify-center items-center rounded-full hover:cursor-pointer hover:bg-slate-700  '>
              {text}
          </div>
  
  )
}

export default TranslationButton