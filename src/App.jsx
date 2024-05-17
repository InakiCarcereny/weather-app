import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'

function App() {
  const API_KEY = 'df3ceb04b2c890324757170289007ac6'
  const URL_BASE = 'https://api.openweathermap.org/data/2.5/weather'

  const [city, setCity] = useState('')
  const [dataClima, setDataClima] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city === '') return
    fetchUrl()
   }

   const changeCity = (e) => {
    setCity(e.target.value)
    //console.log(city)
  }

  useEffect (() => {
    if (city === '') return
   }, [city])

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
      <Header city={city} setCity={setCity} fetchUrl={fetchUrl} handleSubmit={handleSubmit} changeCity={changeCity}/>

      {loading ? <p className='text-white font-semibold text-center py-4 text-xl'>Loading...</p> : <MainContent dataClima={dataClima}/>}

      <Footer dataClima={dataClima}/>
    </>
  )
}


export default App
