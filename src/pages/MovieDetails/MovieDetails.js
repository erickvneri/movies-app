import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMDbService } from '../../services';
import { Header, Movie } from '../../components';
import './MovieDetails.css';

export function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useFetchMovieDetailsEffect(id, setMovieDetails);

  return (
    <>
      <Header />
      <Details>{movieDetails}</Details>
    </>
  );
}

function useFetchMovieDetailsEffect(id = '', setMovie) {
  useEffect(() => {
    if (id === '') return;

    const fetchMovieDetails = async () => {
      const movieDetails = await IMDbService.getTitleGetDetails(id);
      setMovie(movieDetails);
    };

    fetchMovieDetails();
  }, [id, setMovie]);
}

function Details({ children }) {
  if (children == null) return null;
  const { name, imageUrl, type, year } = children;
  return (
    <div className="MovieDetails">
      <Movie imageUrl={imageUrl} name={name} />
      <div>
        <label className="Name">{name}</label>
        <div>
          <label className="Year">{year}</label>
          <small>|</small>
          <label className="Type">{type}</label>
        </div>
      </div>
    </div>
  );
}
