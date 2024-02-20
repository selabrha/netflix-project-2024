import React, { useEffect, useState } from 'react'
import request from '../../Request';
import axios from 'axios';

const Banner = () => {
    const [Movies,setmovies]=useState([]);
    const movie=Movies[Math.floor(Math.random()*Movies.length)];
    useEffect(()=>{
        axios.get(request.requestrending)
        // console.log(request)
        .then((response)=>{
            setmovies(response.data.results);
        })
        .catch(err=>console.error('error:'+ err))
    },[])
        const description =(string,number)=>{
            if(string?.length>number){
                return string.slice(0, number) + "...."
            }
            else{
                return string;
            }
        }
  return (
    <>
        <div className='w-full h-[800px]'>
            <div className='w-full h-full'>
            <img className='w-full h-full' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}alt={movie?.title}/>
            </div>
            <div className='m-10 top-[20%] left-20 absolute'>
                <p className='text-gray-400 font-bold sm:font-sm'>{movie?.title}</p>
            </div>
            <div className='absolute top-[30%] left-20 my-8'>
                <button className='text-black-400 bg-red-400 p-2 w-24 m-4 rounded'>Play</button>
                <button className='text-black-400 bg-red-400 p-2 w-30 m-4 rounded'>Watch Later</button>
                <div className='text-gray-200 opasity-100 top[35%] left-20 absolute'>Release Date:{movie?.release_date}</div>
                <div className='text-gray-200 opasity-100 top[60%]  sm:w-[260px] w:md-[300px] my-10 left-20 sm:font-3xl md:font-5xl absolute'>{description(movie?.overview,100)}</div>
            </div>
        </div>
    </>
  )
}

export default Banner