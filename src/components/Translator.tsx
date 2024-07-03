import React from 'react'
import TraductionContainer from './TraductionContainer'
import TranslationButton from './TranslationButton'

import { useTraduction } from '../Hooks/useTraduction'



const Translator:React.FC = () => {

const {src, dest, isTranslating, translate, text} = useTraduction()

  return (
      <div className=' flex w-full  max-h-full h-full flex-col lg:flex-row   justify-between   gap-1'>
          <TraductionContainer src={src} dest={dest}  />
          <div className=' relative bg-blue-200 flex justify-center items-center' >
          <TranslationButton disabled={text.length === 0} text={isTranslating?'...':'>|'} onClic={translate} />
          </div>
       
          <TraductionContainer isTranslated src={src} dest={dest}  />
      </div>
  )
}

export default Translator