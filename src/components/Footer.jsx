export function Footer ({ dataClima }) {

  return (
    <footer className='flex items-center justify-center mx-auto gap-4 border-gray-300 border-2 shadow-md max-w-[1200px] h-[100px] rounded-3xl'>
        {
          dataClima && (
            <div className='flex items-center justify-center gap-4'>
              <p className='text-white font-semibold text-4xl'>{dataClima.weather[0].description}</p>
            </div>
          )
        }
      </footer>
  )
}