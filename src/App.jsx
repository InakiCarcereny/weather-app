import { useEffect, useState } from 'react'
import './App.css'
import { SearchIcon } from './icons/SearchIcon'

function App() {
  const API_KEY = 'df3ceb04b2c890324757170289007ac6'
  const URL_BASE = 'https://api.openweathermap.org/data/2.5/weather'
  const converse = 273.15

  const [city, setCity] = useState('')
  const [dataClima, setDataClima] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city === '') return
    fetchUrl()
   }

   useEffect (() => {
    if (city === '') return
   }, [city])

   const changeCity = (e) => {
    setCity(e.target.value)
    //console.log(city)
  }

  const fetchUrl = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${URL_BASE}?q=${city}&appid=${API_KEY}`)
      const data = await response.json()
      setDataClima(data)
      //console.log(data)
    }
    catch (error) {
      console.log('There was an error', error)
      //console.log(error)
    }
    finally {
      setLoading(false)
    }
  } 

  return (
    <>
      <header className='flex items-center justify-center mx-auto mt-20 bg-[#3a4874] max-w-[1200px] h-[60px] rounded-3xl drop-shadow-xl '>
      <form className='flex items-center justify-center gap-12'
      onSubmit={handleSubmit}>
        <span className='flex items-center justify-center gap-2'>
          <input
          placeholder='Barcelona, Buenos Aires, Amsterdam...' 
          className='w-[800px] h-[30px] border-none rounded-xl
          px-2 py-2 text-gray-600 font-semibold' 
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

     <div className='flex items-center justify-center gap-4'>
      <main className='my-4 bg-[#171d42] w-[800px] h-[500px] rounded-3xl flex justify-center items-center'>
        {
          dataClima && (
            <div
            className='flex items-center justify-center flex-col gap-2' 
            key={dataClima.id}>
              {loading && <p className='text-white font-semibold text-xl mb-4'>Loading...</p>}
              <h1 className='text-white font-semibold text-4xl'>{dataClima.name}</h1>
              <img
              className='w-40 h-auto' 
              src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}/>
              <p className='text-white font-semibold text-xl'>{Math.floor(dataClima.main.temp - converse)} C</p>
            </div>
          )
        }
      </main>
      <div className='my-4 bg-[#171d42] w-[380px] h-[500px] rounded-3xl'>
        {
          dataClima && (
            <section className='text-white font-semibold text-center mt-6 text-xl'>
              <h1>Extra data</h1>
              <div className='grid grid-cols-2 items-center gap-2 mt-6'>
                <p>Feels like: {Math.floor(dataClima.main.feels_like - converse)} C</p>
                <p>Humidity: {dataClima.main.humidity} %</p>
                <p>Pressure: {dataClima.main.pressure} hPa</p>
                <p>Wind: {dataClima.wind.speed} m/s</p>
                <p>Temp min: {dataClima.main.temp_min}</p>
                <p>Temp max: {dataClima.main.temp_max}</p>
                <p className='text-white font-semibold text-xl'>Sunrise: {new Date(dataClima.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p className='text-white font-semibold text-xl'>Sunset: {new Date(dataClima.sys.sunset * 1000).toLocaleTimeString()}</p>
              </div>
            </section>
          )
        }
      </div>
     </div>

      <footer className='flex items-center justify-center mx-auto gap-4 bg-[#171d42] max-w-[1200px] h-[100px] rounded-3xl'>
        {
          dataClima && (
            <div className='flex items-center justify-center gap-4'>
              <p className='text-white font-semibold text-xl'>{dataClima.weather[0].description}</p>
            </div>
          )
        }
      </footer>
     
    </>
  )
}

export default App
