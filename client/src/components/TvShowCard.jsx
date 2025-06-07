import React from 'react'
import { AlarmClockPlus, TvMinimalPlay } from 'lucide-react';
import Button from './Button';
import axios from 'axios';
import toast from 'react-hot-toast';

const TvShowCard = ({_id, title, channel, timing, thumbnail, loadTvShows}) => {

  const deleteShows = async () => {
    try{
    const response = await axios.delete(`${import.meta.env.VITE_API_KEY}/tvshow/${_id}`);
    if(response.data.success){
      toast.success(response.data.message);
      loadTvShows();
    }else{
      toast.error(response.data.message);
    }
  }catch(e){
    toast.error(e.response.data.message);
  }
  }

  return (
    <div className='bg-white m-2 p-4 rounded-lg shadow-xl relative'>
        <h2 className='text-2xl font-bold text-sky-700 py-2'>{title}</h2>
        <img src={thumbnail} alt='tvshow-img' className='rounded-xl w-[300px] block mx-auto object-contain py-2'/>
        <h3 className='text-xl text-sky-700 font-medium py-2'><TvMinimalPlay color="#1b4164" className='inline me-1' /> {channel}</h3>
        <p><AlarmClockPlus color='#1b4164' className='inline me-1'/>{timing}</p>
        <Button variant={"secondary"} size={"sm"} btnPosition={"right"} btnText={"delete"} onClick={()=>{deleteShows()}}/>
    </div>
  )
}

export default TvShowCard