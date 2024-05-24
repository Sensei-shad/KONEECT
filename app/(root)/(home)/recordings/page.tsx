import CallList from '@/components/CallList'
import React from 'react'

const Recordings = () => {
  return (
    <section className="flex size-full flex-col gap-10 mt-12 text-black dark:text-white font-semibold">
      <h1 className='text-3xl font-bold'>
      Recordings
      </h1>

      <CallList type="recordings" />
      </section>
  )
}

export default Recordings