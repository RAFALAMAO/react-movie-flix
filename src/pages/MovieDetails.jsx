import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { httpGet } from '../utils/httpClient';
// import movie from './movie.json'
import styles from './MovieDetails.module.css'

export function MovieDetails() {

  // Obtiene el parametro al final de la direccion
  const { movieId } = useParams();

  // Para saber si se encuentra cargando la info de la peli
  const [isLoading, setIsLoading] = useState(true)

  // Para poder almacenar la respuesta y no se pierda
  const [movie, setMovie] = useState(null);

  // Hooks Realiza una acción despues de haber cargado el componente
  useEffect(() => {
    setIsLoading(true);

    httpGet('/movie/' + movieId)
    .then(data => {
      setMovie(data);
      setIsLoading(false);
      console.log(data)
    });
  }, [movieId]); // Arreglo para que solo se cargue una vez el efecto

  if (isLoading) {
    return <Spinner/>;
  }

  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div className={styles.deatilsContainer}>
      <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title}/>
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <h1 className={`${styles.title}`}>{movie.title}</h1>
        <div className={`${styles.description}`}>
          <p><strong>Overview</strong><br /><br /> {movie.overview}</p><br />
          <p><strong>Genres:</strong>
            &nbsp;{movie.genres.map((genre) => (genre.name)).join(", ")}.
          </p>
          <p><strong>⭐</strong>
            &nbsp;{movie.vote_average}/10
          </p>
        </div>
      </div>
    </div>
  );
}