import React from "react";
import PropTypes from "prop-types";
import "./InfoCard.scss";
import Rating from "./Rating";

function InfoCard({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  return (
    <div className="info-card">
      <button type="button" className="close-button" onClick={onClose}>
        X
      </button>
      <h2>{movie.title}</h2>
      <Rating />
      <p className="synopsis">{movie.overview}</p>
      <p>Date de sortie : {movie.release_date}</p>
      <div className="actors">
        {movie.cast &&
          movie.cast.slice(0, 4).map((actor) => (
            <div key={actor.id} className="actor">
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <p>{actor.name}</p>
            </div>
          ))}
      </div>
      {movie.trailerKey && (
        <iframe
          title="Trailer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${movie.trailerKey}`}
          allowFullScreen
        />
      )}
    </div>
  );
}

InfoCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        profile_path: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    trailerKey: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

InfoCard.defaultProps = {
  movie: null,
};

export default InfoCard;
