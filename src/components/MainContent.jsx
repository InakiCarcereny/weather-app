import { DropletIcon } from "../icons/DropletIcon"
import { FeelsLikeIcon } from "../icons/FeelsLikeIcon"
import { PressureIcon } from "../icons/PressureIcon"
import { TemperatureMaxIcon } from "../icons/TemperatureMaxIcon"
import { TemperatureMinIcon } from "../icons/TemperatureMinIcon"
import { WindIcon } from "../icons/WindIcon"
import { SunriseIcon } from "../icons/SunriseIcon"
import { SunsetIcon } from "../icons/SunsetIcon"

export function MainContent ({ loading, dataClima }) {
  const converse = 273.15

  return (
    <div className='flex items-center justify-center gap-4'>
      <main className='card my-4 w-[400px] h-[500px] flex justify-center items-center'>
        {
          dataClima && (
            <div
            className='flex items-center justify-center flex-col gap-2' 
            key={dataClima.id}>
              <h1 className='text-white font-semibold text-4xl'>{dataClima.name}</h1>
              <div className="flex flex-col items-center gap-6">
                <p className='text-white font-semibold text-8xl'>{Math.floor(dataClima.main.temp - converse)}°<span className="text-6xl"> C</span></p>
                <img
                className='w-40 h-auto' 
                src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}/>
              </div>
            </div>
          )
        }
      </main>
      <div className='card my-4 w-[980px] h-[500px]'>
        {
          dataClima && (
            <section className='text-white font-semibold text-center text-xl'>
              <div className='grid grid-cols-4 items-center gap-4 mt-10 mx-4'>
                <div className="card-weather h-[200px] flex justify-center items-center flex-col gap-4">
                  <p>Feels like</p>
                  <span className="flex items-center gap-2">
                    <FeelsLikeIcon />
                    {Math.floor(dataClima.main.feels_like - converse)} °C
                  </span>
                </div>
                <div className="card-weather h-[200px] flex justify-center items-center flex-col gap-4">
                  <p>Humidity</p>
                  <span className="flex items-center gap-2">
                    <DropletIcon />
                    {dataClima.main.humidity}%
                  </span>
                </div>
                <div className="card-weather h-[200px] flex justify-center items-center flex-col gap-4">
                  <p>Pressure</p>
                  <span className="flex items-center gap-2">
                    <PressureIcon />
                    {dataClima.main.pressure} hpa
                  </span>
                </div>
                <div className="card-weather h-[200px] flex justify-center items-center flex-col gap-4">
                  <p>Wind</p>
                  <span className="flex items-center gap-2">
                    <WindIcon />
                    {dataClima.wind.speed} m/s
                  </span>
                </div>
                <div className="card-weather h-[200px] flex justify-center items-center flex-col gap-4">
                  <p>Temp min</p>
                  <span className="flex items-center gap-2">
                    <TemperatureMinIcon />
                    {Math.floor(dataClima.main.temp_min - converse)} °C
                  </span>
                </div>
                <div className="card-weather h-[200px] flex justify-center items-center flex-col gap-4">
                  <p>Temp max</p>
                  <span className="flex items-center gap-2">
                    <TemperatureMaxIcon />
                    {Math.floor(dataClima.main.temp_max - converse)} °C
                  </span>
                </div>
                <div className="card-weather h-[200px] flex justify-center items-center flex-col gap-4">
                  <p>Sunrise</p>
                  <span className="flex items-center gap-2">
                    <SunriseIcon />
                    {new Date(dataClima.sys.sunrise * 1000).toLocaleTimeString()} HS
                  </span>
                </div>
                <div className="card-weather h-[200px] flex justify-center items-center flex-col gap-4">
                  <p>Sunrise</p>
                  <span className="flex items-center gap-2">
                    <SunsetIcon />
                    {new Date(dataClima.sys.sunset * 1000).toLocaleTimeString()} HS
                  </span>
                </div>
              </div>
            </section>
          )
        }
      </div>
     </div>
  )
}