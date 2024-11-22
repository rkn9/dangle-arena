import React from 'react'

function Event() {
  return (
    <div>

      <div className='border-2 border-header border-solid m-1 rounded-[5px] overflow-hidden w-[311px]'>
        <div className="bg-header text-white px-3 py-1 flex  justify-between">
          <strong>Haryana(HR)</strong>
          <strong className='flex items-center'><img src="/icon/calender_daedline_date_event.png" alt="calender" className='w-[20px] h-[20px]' /> Sep 13, 2022</strong>
        </div>
        <div className='px-3 py-1 bg-[#E2E2EB]' >
          <p className='text-header text-[19px] font-bold'>Junior world Championships</p>
          <p className='flex items-center gap-2'><img src="/icon/location.png" alt="location" className='w-[20px] h-[20px]' />Sector 14, Gurugram</p>
        </div>
      </div>
    </div>
  )
}

export default Event
