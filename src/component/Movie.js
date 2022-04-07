import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Movie({coverImg,id,title_long,summary,genres}) {
  return (
    <div className="items">
      <img src={coverImg} />
      <div className="content">
        <h2><Link to={`/movie/${id}`}>{title_long}</Link></h2>
        <ul>
          {genres.map(g=>(<li key={g}>{g}</li>))}
        </ul>
        <p>{summary}</p>
      </div>
    </div>
  )
}

Movie.propTypes ={
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
