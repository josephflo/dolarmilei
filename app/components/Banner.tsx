import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <Image
      src="/bull-publi-2.png"
      alt='Banner'
      width={1078}
      height={300}
      className='mt-10'
    />
  )
}

export default Banner