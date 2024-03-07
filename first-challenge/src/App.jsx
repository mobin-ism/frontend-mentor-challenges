function App() {
  return (
    <>
      <div className=' bg-primary h-screen w-screen flex items-center text-center font-inter'>
        <div className='mx-auto w-[400px] bg-secondary p-7 rounded-[10px] flex flex-col items-center'>
          <img src="src/assets/images/avatar-jessica.jpeg" className='rounded-full w-[80px] h-[80px] mb-7' alt="" />
          <div className='flex flex-col gap-2'>
            <p className='text-white text-2xl font-interRegular'>Jessica Randall</p>
            <p className='text-green font-semibold'>London, United Kingdom</p>
          </div>
          <p className='text-white font-interRegular my-6'>{'"'}Front-end developer and avid reader{'"'}</p>
          <div className='flex flex-col gap-4 w-full'>
            <button className=' bg-grey hover:bg-green hover:text-grey py-[13px] rounded-[8px] w-full text-white font-interBold text-sm'> GitHub </button>
            <button className=' bg-grey hover:bg-green hover:text-grey py-[13px] rounded-[8px] w-full text-white font-interBold text-sm'> Frontend Monitor </button>
            <button className=' bg-grey hover:bg-green hover:text-grey py-[13px] rounded-[8px] w-full text-white font-interBold text-sm'> LinkedIn </button>
            <button className=' bg-grey hover:bg-green hover:text-grey py-[13px] rounded-[8px] w-full text-white font-interBold text-sm'> Twitter </button>
            <button className=' bg-grey hover:bg-green hover:text-grey py-[13px] rounded-[8px] w-full text-white font-interBold text-sm'> Instagram </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
