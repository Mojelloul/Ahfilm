import React,{useState,useEffect,isLArgeRow} from 'react'
import Youtube from "react-youtube"
import movieTrailer from 'movie-trailer'
import axios from "./axios"
import './Row.css'
const base_url="https://image.tmdb.org/t/p/original/"
function Row({title,fetchUrl,isLArgeRow}) {
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
useEffect(() => {
    axios.get(fetchUrl).then(res=>setMovies(res.data.results))
}, [fetchUrl])
const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie)=> {
    if(trailerUrl){
        setTrailerUrl("");
    }
    else{
        movieTrailer(movie?.name || movie?.title || movie?.original_title ||movie?.original_name || movie?.original_name || " ")
        .then((url) => {
            const urlParams= new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get('v'));
        })
        .catch(err=>{
            alert("sorry we can't find the Trailer")
            console.log("ee"+err)})
        console.log(movie)
    }
  }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie=>(
                        <img 
                        onClick={()=>handleClick(movie)}
                        key={movie.id}
                        className={`row__poster ${isLArgeRow && "row__isLArgeRow"}`}
                        src={`${base_url}${isLArgeRow ? movie.poster_path : movie.backdrop_path}`}  alt={movie.name} />
                    ))
                }
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
