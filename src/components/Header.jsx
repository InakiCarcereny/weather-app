import { SearchIcon } from '../icons/SearchIcon'

export function Header ({ city, handleSubmit, changeCity}) {

  return (
    <header className='flex items-center justify-center mx-auto mt-20 bg-gray-50 max-w-[1200px] h-[60px] rounded-3xl drop-shadow-xl '>
    <form className='flex items-center justify-center gap-12'
    onSubmit={handleSubmit}>
      <span className='flex items-center justify-center gap-2'>
        <input
        placeholder='Barcelona, Buenos Aires, Amsterdam...' 
        className='w-[800px] h-[30px] border-none rounded-xl
        px-2 py-2 text-gray-600 font-semibold focus:outline-none bg-transparent' 
        type="search" 
        value={city}
        onChange={changeCity}/>
        
        <SearchIcon />
      </span>
      <button
      className='bg-[#171d42]  text-lg px-4 py-2 drop-shadow-xl text-white rounded-xl font-semibold' 
      type='submit'>Search</button>
    </form>
    </header>
  )
}