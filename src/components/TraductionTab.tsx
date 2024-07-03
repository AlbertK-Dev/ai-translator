import React from 'react'
import { useTraduction } from '../Hooks/useTraduction'

export type AvailableFormat = 'fr-fr' | 'en-us'


export type Lang = {
    
    display: string, 
    format: AvailableFormat
}

const availableLang: Lang[]  = [
    {
        display: "Français", 
        format: 'fr-fr',
    },
    {
        display: "Anglais", 
        format: 'en-us',

    },

]

type TraductionTabProps = {
    active: AvailableFormat,
    isDest: boolean,
}


const TraductionTab: React.FC<TraductionTabProps> = ({ active = 'fr-fr', isDest=false }) => {
    const {setTraduction , src, dest} = useTraduction()
  return (
      <div className=' flex'>
          {availableLang.map((lang) => (
              <button
                  key={lang.format}
                  disabled={active=== lang.format}
                  onClick={() => {
                     
                      isDest ? 
                          setTraduction(active, src) :
                          setTraduction(dest,active)
                  }}
                  className={`text-center p-2 hover:cursor-pointer ${active === lang.format ? 'bg-slate-50' : 'bg-slate-400'}`}>
                  {lang.display}
              </button>
          ))} 
    </div>
  )
}

export default TraductionTab