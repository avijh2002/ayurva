import React from 'react'

const TeamCard = () => {
  return (
    <div classname=" border-amber-950 relative h-full w-4/5 ">
      <div className=' absolute h-[57px] w-[308px] rounded-3xl bg-white  z-1000 '></div>
      <div className='absolute  h-[665px]  w-[343px]  rounded-xl bg-amber-800 z-5'></div>
      <div className='absolute h-[332px]  w-[308px]  rounded-xl bg-purple-600 z-109'></div>
      <div className='absolute h-[331px]  w-[475px] rounded-xl  bg-blue-200 z-100 '></div>
    </div>
  )
}

export default TeamCard