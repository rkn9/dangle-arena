import React from 'react'
import LiveNewsCard from '../Cards/LiveNewsCard'
import Heading from '../heading/Heading'
import LiveNewsHomeCard from '../Cards/LiveNewsHomeCard'

function LiveHomeSection() {
  return (
    <div className="my-4 bg-[url('https://s3-alpha-sig.figma.com/img/d0d4/705b/a20c31b87592798929d6870aa15f85d8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bKEZlWIy-3LqUN44MGmt8E9HeFVfVgQaYGi-lD9wvYcgjlpw1XUiv5ZyZLHRsDZd9Z1Q8BzMirxKpgAFZxQ71jXn6s4sp3H~a~zzg4ybwB7yEZzaxuObLf0cGrwimjxmqCXBohel-6x3mr12dQYDRUKjeiwMMFlfGWq1jQE~bLzGrFBt3sDR4sSN0UG1arMw3uQ~OV2ku1-otk6g64wxyx1v7seGCZp4HT5TrZRDpbHbZjWAQmKjjUjYiKvS48Ry~0PgkaVSFFgAvm0geGBN8P4vQadTxWW4Bu6ezMhNJorVr57iitIyU~2DhLl9iUS5uQKdIafHsVd2~Kvf5fnCuQ__')] ">
      <div className="text-white px-7">
        <Heading />
      </div>
      <div className="px-7 text-white">
        <LiveNewsHomeCard />
      </div>
      <div className="flex p-5 gap-5 whitespace-nowrap overflow-x-auto scrollbar-none  bg-cover bg-center text-white">
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
      </div>
    </div>


  )
}

export default LiveHomeSection