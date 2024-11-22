import React from 'react'
import Event from '../Cards/Event'
import Heading from '../heading/Heading'
import Image from 'next/image'

function EventHome() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading />
        <span>View All</span>
      </div>
      <div className="flex overflow-x-auto scrollbar-none">
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
      <div className="my-2 flex  justify-between ">
        <Image src="https://s3-alpha-sig.figma.com/img/53fe/e8a8/67d6e9156710089f2e7892b1c6ab26c4?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EtQdFJVUy8qGhsWeC8gKPex4FZ5c09jkpt5p2vfbUNxKHVOnuIZEgpVuHPDS4YWKZp8QvI~xPuLK-OQ0UgebTfTJxRyrPVzLSbmmXn4sd8EFRy9dJU3cu93U7fB4LBx9S0lDNwmF6XLMGaXDeJ9mkmuKbS8mq93sbtJGdp24kUs~E57lLtxZCLBMrk6lRwILxyL6wYWBdqSR~J7NOVQj6kQw77O7k1fjZUpCX5af6vlDGvz1~VBQ6M-o2X5jwJH6kIqnvAkp3DacB8E-R2G94zwr7ASFjhHvYbdEH3F86oQu-9q8t6MrFCF4eMb7pzDtMOLFeWvabiMGDNY0zFU1nQ__" alt="event-img" width={300} height={10} className='w-[30vw] h-[17vw]' />
        <Image src="https://s3-alpha-sig.figma.com/img/53fe/e8a8/67d6e9156710089f2e7892b1c6ab26c4?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EtQdFJVUy8qGhsWeC8gKPex4FZ5c09jkpt5p2vfbUNxKHVOnuIZEgpVuHPDS4YWKZp8QvI~xPuLK-OQ0UgebTfTJxRyrPVzLSbmmXn4sd8EFRy9dJU3cu93U7fB4LBx9S0lDNwmF6XLMGaXDeJ9mkmuKbS8mq93sbtJGdp24kUs~E57lLtxZCLBMrk6lRwILxyL6wYWBdqSR~J7NOVQj6kQw77O7k1fjZUpCX5af6vlDGvz1~VBQ6M-o2X5jwJH6kIqnvAkp3DacB8E-R2G94zwr7ASFjhHvYbdEH3F86oQu-9q8t6MrFCF4eMb7pzDtMOLFeWvabiMGDNY0zFU1nQ__" alt="event-img" width={300} height={10} className='w-[30vw] h-[17vw]' />
        <Image src="https://s3-alpha-sig.figma.com/img/53fe/e8a8/67d6e9156710089f2e7892b1c6ab26c4?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EtQdFJVUy8qGhsWeC8gKPex4FZ5c09jkpt5p2vfbUNxKHVOnuIZEgpVuHPDS4YWKZp8QvI~xPuLK-OQ0UgebTfTJxRyrPVzLSbmmXn4sd8EFRy9dJU3cu93U7fB4LBx9S0lDNwmF6XLMGaXDeJ9mkmuKbS8mq93sbtJGdp24kUs~E57lLtxZCLBMrk6lRwILxyL6wYWBdqSR~J7NOVQj6kQw77O7k1fjZUpCX5af6vlDGvz1~VBQ6M-o2X5jwJH6kIqnvAkp3DacB8E-R2G94zwr7ASFjhHvYbdEH3F86oQu-9q8t6MrFCF4eMb7pzDtMOLFeWvabiMGDNY0zFU1nQ__" alt="event-img" width={300} height={10} className='w-[30vw] h-[17vw]' />
      </div>
    </div >
  )
}

export default EventHome