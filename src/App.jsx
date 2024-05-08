import { useState } from 'react'
import './App.css'
import { SearchIcon } from './icons/SearchIcon'

function App() {
  const [city, setCity] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
   }

  return (
    <>
      <header className='flex items-center justify-center mx-auto mt-20 bg-[#3a4874] max-w-[1200px] h-[60px] rounded-3xl drop-shadow-xl '>
      <form className='flex items-center justify-center gap-12'
      onSubmit={handleSubmit}>
        <span className='flex items-center justify-center gap-2'>
          <input
          placeholder='Argentina, Belgica, Brasil...' 
          className='w-[800px] h-[30px] border-none rounded-xl
          px-2 py-2 text-gray-600 font-semibold' 
          type="search" />
          <SearchIcon />
        </span>
        <button
        className='bg-[#171d42]  text-lg px-4 py-2 drop-shadow-xl text-white rounded-xl font-semibold' 
        type='submit'>Search</button>
      </form>
      </header>

     <div className='flex items-center justify-center gap-4'>
      <main className='my-4 bg-[#3a4874] w-[800px] h-[500px] rounded-3xl'>
        <h1>aca va el nombre del pais buscado con info principal e imagen de temperatura actual</h1>
      </main>
      <div className='my-4 bg-[#3a4874] w-[380px] h-[500px] rounded-3xl'>
        <h1>temperatura a lo largo del dia e infor extra</h1>
      </div>
     </div>

     
      <footer className='flex items-center justify-center mx-auto gap-4 bg-[#3a4874] max-w-[1200px] h-[100px] rounded-3xl'>
        <h1>info de los demas dias</h1>
      </footer>
     
    </>
  )
}

export default App
