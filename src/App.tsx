import './App.css'
import TraductionProvider from './Provider/Traduction'
import Router from './router'

function App() {

  return (
    <>
      <div className='p-0 flex justify-center  items-center h-screen w-screen' >
        <TraductionProvider>
           <Router/>
        </TraductionProvider>
       
      </div>
    </>
  )
}

export default App
