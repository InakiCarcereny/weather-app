export function MainContent ({ loading, dataClima }) {
  const converse = 273.15

  return (
    <div className='flex items-center justify-center gap-4'>
      <main className='my-4 border-gray-300 border-2 shadow-md w-[800px] h-[500px] rounded-3xl flex justify-center items-center'>
        {
          dataClima && (
            <div
            className='flex items-center justify-center flex-col gap-2' 
            key={dataClima.id}>
              {loading && <p className='text-white font-semibold text-xl mb-4'>Loading...</p>}
              <h1 className='text-white font-semibold text-4xl'>{dataClima.name}</h1>
              <div className="flex items-center gap-10">
                <p className='text-white font-semibold text-8xl'>{Math.floor(dataClima.main.temp - converse)}°<span className="text-6xl"> C</span></p>
                <img
                className='w-40 h-auto' 
                src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}/>
              </div>
            </div>
          )
        }
      </main>
      <div className='my-4 border-gray-300 border-2 shadow-md w-[380px] h-[500px] rounded-3xl'>
        {
          dataClima && (
            <section className='text-white font-semibold text-center mt-6 text-xl'>
              <h1>Extra data</h1>
              <div className='grid grid-cols-2 items-center gap-6 mt-6'>
                <p>Feels like: {Math.floor(dataClima.main.feels_like - converse)}° C</p>
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
  )
}