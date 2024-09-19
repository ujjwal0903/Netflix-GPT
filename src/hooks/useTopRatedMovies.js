import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice.js";
import { API_OPTIONS } from "../utils/constants.js";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        try {
            const response = await fetch(
                'https://api.themoviedb.org/3/movie/top_rated?page=1',
                API_OPTIONS
            );
            const json = await response.json();
            dispatch(addTopRatedMovies(json.results));
        } catch (error) {
            console.error("Failed to fetch top-rated movies", error);
        }
    };
    

    useEffect(() => {
        getTopRatedMovies();
    }, []);

}


export default useTopRatedMovies;