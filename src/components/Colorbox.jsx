import React from 'react'

const Colorbox = () => {
  return (
    <div className='hidden lg:block absolute w-[800px] h-[590px] top-10 -z-10 overflow-hidden opacity-70 '>
      <div className='absolute translate-x-28 translate-y-1/2 w-[250px] h-[250px] bg-blue-600 shadow-blue-600
       shadow-[0_1px_900px_1px] '></div>
      <div className='absolute top-[40%] right-44 w-[180px] h-[180px] bg-[#f00] shadow-[#f00]
       shadow-[0_1px_900px_1px]'></div>
      <div className='absolute top-16 right-[35%] w-[200px] h-[250px] bg-pink-700 shadow-pink-700
       shadow-[0_1px_900px_1px]'></div>
      <div className='absolute bottom-16 left-1/3 w-[200px] h-[200px] bg-blue-900 shadow-blue-900
       shadow-[0_1px_900px_1px]'></div>
    </div>
  )
}

export default Colorbox
