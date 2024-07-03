import React from 'react'
import { useTraduction } from '../Hooks/useTraduction'

export type AvailableFormat = 'fr-FR' | 'en-US' | 'es-ES' | 'de-DE' | 'zh-CN'


export type Lang = {
    
    display: string, 
    format: AvailableFormat
}

const availableLang: Lang[]  = [
    {
        display: "Français", 
        format: 'fr-FR',
    },
    {
        display: "Anglais", 
        format: 'en-US',

    },
    {
        display: "Espagnol", 
        format: 'es-ES',

    },
    {
        display: "Allemand", 
        format: 'de-DE',

    },
    {
        display: "Chinois", 
        format: 'zh-CN',

    },

]

type TraductionTabProps = {
    active: AvailableFormat,
    isDest: boolean,
}


const TraductionTab: React.FC<TraductionTabProps> = ({ active = 'fr-FR', isDest=false }) => {
    const {setTraduction , src} = useTraduction()
  return (
      <div className=' flex gap-1 flex-wrap sm:gap-0 sm:flex-nowrap'>
          {availableLang.map((lang) => {
            // if (isDest && lang.format === src) {
            //     return null
            // }
              
             return (
              <button
                  key={lang.format}
                  disabled={active=== lang.format}
                  onClick={() => {
                      isDest? setTraduction(src,lang.format):setTraduction(lang.format)
                  }}
                  className={`text-center  hover:cursor-pointer sm:p-2 sm:no-underline ${active === lang.format ? 'bg-slate-50 underline font-bold' : 'sm:bg-slate-400'}`}>
                  {lang.display}
              </button>
          )
          } )} 
    </div>
  )
}

export default TraductionTab