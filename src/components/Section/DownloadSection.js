import Image from 'next/image'
import React from 'react'

function DownloadSection() {
  return (
    <div className='bg-[#262B8E] text-white mt-[60px]'>
      <div className="bg-[url('/bg-img/get-app-white.png')] w-[70%] m-auto bg-contain  bg-bottom bg-no-repeat flex justify-center py-9 ">
        <div className="w-[50%]">
          <h4 className='text-3xl font-squada font-bold'>DOWNLOAD OUR OFFICIAL</h4>

          <div className="flex items-center gap-3">

            <h4 className='text-3xl font-squada font-bold '><span className='text-[#FF9553] '> DANGAL ARENA</span> NOW!  </h4><Image src="/img/logo.png" width={40} height={40} alt="logo" />
          </div>
          <p className='text-[#FF9553] font-bold '>Immerse yourself in the pulsating world of Dangal Arena</p>
          <Image src="/img/app-store.png" height={100} width={100} alt='app-store' />
        </div>
        <div className="relative w-[140px]">

          <Image src="/img/phone.png" height={100} width={1500} alt='app-store' className='absolute bottom-[-30px]  h-[240px]' />
        </div>
      </div>
    </div>
  )
}

export default DownloadSection