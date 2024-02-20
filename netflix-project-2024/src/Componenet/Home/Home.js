import React from 'react'
import HomeList from '../../HomeList/HomeList'
import Request from '../../Request'

const Home = () => {
  return (
    <>
        <HomeList title='Movie' FETCHURL={Request.requestrending} />
        <HomeList title='Now Playing' FETCHURL={Request.requestNowPlaying} />
        <HomeList title='Popular' FETCHURL={Request.requestPopular} />
        <HomeList title='Top Rated' FETCHURL={Request.requestTopRated} />
        <HomeList title='Up Coming' FETCHURL={Request.requestUpcoming} />
        <HomeList title='Action Movie' FETCHURL={Request.requestActionMovies} />
        <HomeList title='Comedy Movie' FETCHURL={Request.requestComedyMovies} />
        <HomeList title='Romance Movie' FETCHURL={Request.requestRomanceMovies} />
        <HomeList title='Horror Movie' FETCHURL={Request.requestHorrorMovies} />
    </>
  )
}

export default Home