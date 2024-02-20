const API_key ='069e5d713ffcb882988d19f79f1f2b01'
const request={
    requestrending:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&language=en-US&page=1`,
    requestNowPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_key}&language=en-US&page=1`,
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_key}&language=en-US&page=1`,
    requestActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=28`,
    requestComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=35`,
    requestRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=10749`,
    requestHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=27`,
}
export default request;