import React from 'react'
import Heading from '../heading/Heading'
import Newscard from '../Cards/Newscard'

function NewsSection() {
  return (
    <div>
      <Heading />
      <div className="flex  gap-5 news-card  ">
        <Newscard />
        <Newscard />
        <Newscard />
      </div>
    </div>
  )
}

export default NewsSection