export function Footer ({ dataClima }) {

  return (
    <footer className='flex items-center justify-center mx-auto gap-4 bg-[#171d42] max-w-[1200px] h-[100px] rounded-3xl'>
        {
          dataClima && (
            <div className='flex items-center justify-center gap-4'>
              <p className='text-white font-semibold text-xl'>{dataClima.weather[0].description}</p>
            </div>
          )
        }
      </footer>
  )
}