import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);


    return (
        <div className="bg-black"> 
            <div className="-mt-40 relative z-20">
                {movies.nowPlayingMovies && (
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                )}
                {movies.popularMovies && (
                    <MovieList title={"Trending"} movies={movies.popularMovies} />
                )}
                {movies.topRatedMovies && (
                    <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                )}
            </div>
        </div>
    );
};

export default SecondaryContainer;

