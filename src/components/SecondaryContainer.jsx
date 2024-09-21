import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);


    return (
        <div className="bg-black"> 
            <div className="mt-0 md:-mt-40 pl-4 md:pl-0 relative z-20">
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

