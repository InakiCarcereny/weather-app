export function Footer ({ dataClima }) {

  return (
    <footer className='flex items-center justify-center gap-4 mx-auto'>
      <div className="card w-[400px] h-[100px] flex items-center justify-center">
        {
          dataClima && (
            <div className='flex items-center justify-center gap-4'>
              <p className='text-white font-semibold text-2xl'>{dataClima.weather[0].description}</p>
            </div>
          )
        }
      </div>
      <div className="card w-[980px] h-[100px]">
        <h1>dasd</h1>
      </div>
      </footer>
  )
}