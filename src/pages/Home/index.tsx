import React from 'react'

import Translator from '../../components/Translator'

const Home:React.FC = () => {
  return (
      <div className=' flex-1 bg-slate-300 min-h-full flex '>
          <div className='controlPanel hidden   sm:flex flex-1'>Affichage des possibilités de l'utilisateur</div>
          <div className="translator w-full  sm:w-3/4  md:w-2/3 bg-blue-50 flex justify-center items-center ">
                <Translator/>
          </div>
    
          <div className='avis hidden flex-1 md:flex'> Les avis</div>
      </div>
  )
}

export default Home