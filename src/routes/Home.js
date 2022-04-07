import { useState,useEffect } from "react";
import Movie from "../component/Movie";
import "../css/Home.css";


export default function Home() {
  const [loading ,setLoding] = useState(true);
  const [movies ,setMovies] = useState([]);

  const getMovies = async()=>{
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();
    setMovies(json.data.movies);
    setLoding(false);
  }
  useEffect(()=>{
    getMovies()
  },[])

  return (
    <div className="contianer">
    {loading ?  <h1 className="load">Loading...</h1> : 
    movies.map(movie =>
      (<Movie key={movie.id} coverImg={movie.medium_cover_image} genres={movie.genres} id={movie.id} title_long={movie.title_long} summary={movie.summary} />)
    )
    }
    </div>
  )
}
