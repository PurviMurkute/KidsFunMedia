import React from 'react'
import { AlarmClockPlus, TvMinimalPlay } from 'lucide-react';

const TvShowCard = ({_id, title, channel, timing, thumbnail}) => {
  return (
    <div className='bg-white m-2 p-4 rounded-lg shadow-xl'>
        <h2 className='text-2xl font-bold text-sky-700 py-2'>{title}</h2>
        <img src={thumbnail} alt='tvshow-img' className='rounded-xl w-[300px] block mx-auto object-contain py-2'/>
        <h3 className='text-xl text-sky-700 font-medium py-2'><TvMinimalPlay color="#1b4164" className='inline me-1' /> {channel}</h3>
        <p><AlarmClockPlus color='#1b4164' className='inline me-1'/>{timing}</p>
    </div>
  )
}

export default TvShowCard