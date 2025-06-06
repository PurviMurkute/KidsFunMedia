import React from 'react'

const TvShowCard = ({_id, title, channel, timing, thumbnail}) => {
  return (
    <div className='bg-sky-100 m-3 p-4 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold text-sky-700 py-2'>{title}</h2>
        <img src={thumbnail} alt='tvshow-img' className='rounded-xl w-[300px] block mx-auto object-contain py-2'/>
        <h3 className='text-xl text-sky-700 font-medium py-2'>On {channel}</h3>
        <p>{timing}</p>
    </div>
  )
}

export default TvShowCard