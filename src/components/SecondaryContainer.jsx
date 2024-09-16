import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    console.log(movies)
    return (
        movies.nowPlayingMovies && (
            <div className="bg-black">
                <div className="-mt-52 pl-12 relative z-20">
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>  
                </div>
                <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>  
                <MovieList title={"Popular"} movies={movies.popularMovies}/>  
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>  
            </div>
        )
    )
}

export default SecondaryContainer
