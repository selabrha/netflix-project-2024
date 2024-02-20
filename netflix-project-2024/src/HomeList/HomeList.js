import React, { useEffect, useState } from 'react'
import axios from 'axios'
import movietrailer from 'movie-trailer'
import YouTube from 'react-youtube'

const HomeList = ({title,FETCHURL}) => {
    const [video,setvideo]=useState([]);
    const [trailer,settrailer]=useState('')
    useEffect(()=>{
        axios.get(FETCHURL)
        .then((data)=>{
            setvideo(data.data.results);
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    console.log(video)
    const watchmovie=(movies)=>{
        if(trailer){
            settrailer('');
        }
        else{
            movietrailer(movies?.title || movies?.name || movies?.overview)
            .then((url)=>{
                const urlparms= new URLSearchParams(new URL(url).search);
                console.log(urlparms)
                settrailer(urlparms.get('v'))
            })

        }
    }

    const opts = {
        height: '390',
        width: '1500',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
    };


    return (
    <div>
        <div className=''>
            <h1 className='text-gray-200 md:text-2xl p-10 '>{title}</h1>           
            <div className=''>
                <div className='w-full ' style={{padding:''}}>{trailer && <YouTube videoId={trailer} opts={opts}/>}
                </div>
                <div id={'slider'} className=' h-full scroll-smooth whitespace-nowrap scrollbar-hide overflow-x-scroll'>
                    <div className='w-full h-full'>{video?.map((items, id)=>(
                        <div key={id} className='w-[160px] inline-block cursor-pointer transtion-transform  '>
                            <img className='' src={`http://image.tmdb.org/t/p/w500/${items?.backdrop_path}`}  onClick={()=>watchmovie(items)}/>
                            <p className='text-blue-200 top-30 h-full absolute'>{items?.title}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeList
