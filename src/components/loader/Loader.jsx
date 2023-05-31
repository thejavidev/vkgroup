import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-[100vh] top-0 fixed bg-[--bg] z-[9999] overflow-hidden transitions loader1'>
      <div className="flex w-full h-[100vh] justify-center items-center relative flex-col">
        <h2 id="pageLoadingText" className='text-[--text] text-[3vw] md:text-[8vw]'>Vkgroup.az</h2>
        <div className="absolute top-[50%] left-[50%] w-[500px] h-[500px] rounded-full transfrom1"></div>
        {/* <div className="ball mt-7"></div> */}
      </div>
    </div>
  )
}

export default Loader
