import React from 'react'
import TraductionContainer from './TraductionContainer'
import TranslationButton from './TranslationButton'

import { useTraduction } from '../Hooks/useTraduction'



const Translator:React.FC = () => {

const {src, dest, isTranslating, translate} = useTraduction()

  return (
      <div className=' flex w-full h-full flex-col lg:flex-row  justify-between max-h-full relative gap-1'>
          <TraductionContainer src={src} dest={dest}  />
          <div className=' relative bg-blue-200 flex justify-center items-center' >
          <TranslationButton text={isTranslating?'...':'>|'} onClic={translate} />
          </div>
       
          <TraductionContainer isTranslated src={src} dest={dest}  />
      </div>
  )
}

export default Translator