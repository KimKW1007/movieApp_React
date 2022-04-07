import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/Detail.css";
import { useHistory } from "react-router-dom";

export default function Detail() {
  const {id} = useParams();
  const [movie, setMovie] = useState();
  const [loading ,setLoding] = useState(true);
  const [popupOn ,setPopupOn] = useState(true);
  let history = useHistory();
  const getMovie = async()=>{
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoding(false);
    console.log(json.data.movie);

  };
  useEffect(()=>{
    getMovie();
  },[]);

  const popupOnFn = () =>{
    setPopupOn(false);
  }
  const popupOffFn = () =>{
    setPopupOn(true);
  }


  return (
    <div className="detail_item">
       {loading ?  <h1>Loading...</h1> : 
        <>
          <button className="backBtn" onClick={()=>{history.goBack();}}>Go Back</button>
          <img src={movie.medium_cover_image} onClick={popupOnFn} />
          <div className="detail_content">
            <h2>{movie.title_long}</h2>
            <ul>
              {movie.genres.map(g=>(<li key={g}>{g}</li>))}
            </ul>
            <p>{movie.description_intro}</p>
          </div>
          {popupOn ? null : 
          <div className="popup">
            <div className="popupDim" onClick={popupOffFn}></div>
            <img src={movie.large_cover_image}/>
          </div>}
        </>
      }
    </div>
  )
}
