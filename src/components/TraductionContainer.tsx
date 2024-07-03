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


const TraductionContainer: React.FC<ContainerProps> = ({ isTranslated = false, dest = 'zh-CN', src = 'fr-FR' }) => {


  return (
      <div className=' flex flex-col flex-1  h-full overflow-auto  bg-slate-100'>
          
          {src !== dest && <h1 className=' font-extrabold text-center'>{
              isTranslated?'Traduction par l\'IA':'Texte à traduire'
          }</h1>}
          {src === dest && <h1 className=' font-extrabold text-center'>{
              isTranslated?'Correction par l\'IA':'Texte à corrigé'
          }</h1>}
          <TraductionTab active={isTranslated?dest:src} isDest={isTranslated} />
      
          <TraductionContent editable={!isTranslated}  />
    </div>
  )
}

export default TraductionContainer