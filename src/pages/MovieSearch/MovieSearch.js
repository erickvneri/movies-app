import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IMDbService } from '../../services';
import { Header, Movie, Search, } from '../../components';
import './MovieSearch.css';

export function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useSearchEffect(search, setMovies);

  return (
    <>
      <Header actions={
        <Search value={search} onSearch={setSearch} />
      } />
      <MovieList>{movies}</MovieList>
    </>
  );
}

function useSearchEffect(search, setMovies) {
  useEffect(() => {
    if (search === '') return;
    
    const fetchMovies = async () => {
        const movies = await IMDbService.getAutoComplete(search);
        setMovies(movies);
    };

    const timer = setTimeout(() => fetchMovies(), 1000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [search, setMovies]);
}

function MovieList({ children }) {
  const history = useHistory();
  return (
    <div className="MovieList">
      {children.map(movie => {
        const onClick = () => history.push(`/movies/${movie.id}`);
        return <Movie key={movie.id} {...movie} onClick={onClick} />
      })}
    </div>
  );
}