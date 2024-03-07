function App() {
  return (
    <>
      <div className='bg-yellow h-screen w-screen flex  items-center'>
        <div className="mx-auto w-[420px] bg-white p-7 rounded-[20px] border-2 border-black shadow-[10.0px_10.0px_1.0px_rgba(0,0,0,1)]">
          <img src="/src/assets/images/illustration-article.svg" className="w-full rounded-[15px] object-fit" alt="" />
          <div className="flex flex-col gap-4 mt-7">
            <button className="px-4 py-1 font-figtreeBold text-black rounded-[7px] bg-yellow w-fit">Learning</button>
            <p className="text-black font-figtreeRegular">Published 21 Dec 2023</p>
            <p className="text-black font-figtreeBold text-3xl hover:text-yellow">HTML & CSS foundations</p>
            <p className="text-grey">
              These languages are the backbone of every websites, difing structure, content and presentation.
            </p>
            <div className="text-black font-figtreeBold flex flex-row items-center gap-2 mt-3">
              <img src="src/assets/images/image-avatar.webp" className="h-[40px]" alt="" /> <span className="font-bold text-black">Greg Hooper</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
