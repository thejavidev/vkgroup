import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-[100vh] top-0 fixed bg-[#f3f3f3] z-[9999] overflow-hidden transitions'>
        <div className="flex w-full h-[100vh] justify-center items-center relative">
            <div className="ball"></div>
        </div>
    </div>
  )
}

export default Loader
