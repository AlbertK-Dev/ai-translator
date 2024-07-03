import React from 'react'
import TraductionTab, { AvailableFormat } from './TraductionTab'
import TraductionContent from './TraductionContent'



export type Traduction = {
    src: AvailableFormat,
    dest: AvailableFormat
}

type ContainerProps = {
    isTranslated?: boolean,
    dest?: AvailableFormat,
    src?: AvailableFormat,
 
}


const TraductionContainer: React.FC<ContainerProps> = ({ isTranslated = false, dest = 'en-us', src = 'fr-fr' }) => {



  return (
      <div className=' flex flex-col flex-1   bg-slate-100'>
          
          <h1 className=' font-extrabold text-center'>{
              isTranslated?'Traduction':'Texte à traduire'
          }</h1>
          <TraductionTab active={isTranslated?dest:src} isDest={isTranslated} />
      
          <TraductionContent editable={!isTranslated}  />
    </div>
  )
}

export default TraductionContainer