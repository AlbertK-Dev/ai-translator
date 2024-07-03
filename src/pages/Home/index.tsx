import React, { useState } from 'react'

import Translator from '../../components/Translator'
import Modal from '../../components/Modal'
import { useTraduction } from '../../Hooks/useTraduction'
import { copyText, pasteText } from '../../utils/clipboard'

const Home: React.FC = () => {
  const {setApiKey, apiKey} = useTraduction()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
      <div className=' flex-1 bg-slate-300 min-h-full flex '>
      <div className='controlPanel hidden  flex-col gap-3 p-2  sm:flex flex-1'>
        <h1 className=' text-center font-extrabold  w-full uppercase underline'>Panneau de control</h1>
        <button type="button" onClick={openModal} className=' p-2 rounded-xl border-2 border-stone-700'>Modifier la clé d'api</button>
</div>
      <div className="translator flex-col w-full overflow-auto gap-2 m-2 sm:w-3/4  md:w-2/3 bg-blue-50 flex justify-center items-center ">
        <div className="appbar flex sm:hidden">

          <button type="button" onClick={openModal} className=' p-2 rounded-sm border-2 border-stone-700'>Modifier la clé d'api</button>

        </div>
                <Translator/>
          </div>
    
          <div className='avis hidden flex-1 md:flex'> Les avis</div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className=' w-full flex justify-center items-center flex-col gap-2'>
            <h2 className=' font-extrabold text-center w-full'>Modifier la clé d'API</h2>
                <p className=' font-semibold'>cette clé correspond à la clé qui vous à été fournit par openai _ votre clé de projet</p>
          <div className=' flex flex-row w-full gap-1 '>
            
            <button onClick={async() => {
              const operation = await pasteText();
              if (operation.done) {
                setApiKey(operation.text)
                alert("la clé d'api à été modifier avec succès")
              } else {
                alert("une erreur s'est produite veuillez autorisé le navigateur")
              }

            }} className=' hover:bg-stone-900 hover:text-white p-2 flex-1 bg-slate-400'>coller depuis le presse-papiers</button>
            <button onClick={async() => {
              const operation = await copyText(apiKey);
              if (operation) {
                
                alert("la clé d'api à été copier dans le presse-papiers")
              } else {
                alert("une erreur s'est produite veuillez autorisé le navigateur")
              }

            }} className=' p-2 hover:bg-stone-900 hover:text-white flex-1 bg-slate-400'>copier la clé dans le presse-papiers</button>
          </div>      
          
        </div>
              
            </Modal>
    </div>
    
  )
}

export default Home