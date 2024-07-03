import './App.css'
import TraductionProvider from './Provider/Traduction'
import Router from './router'

function App() {

  return (
    <>
      <div className='p-0 flex overflow-auto justify-center  items-center sm:h-screen sm:max-h-screen w-screen' >
        <TraductionProvider>
           <Router/>
        </TraductionProvider>
       
      </div>
    </>
  )
}

export default App
