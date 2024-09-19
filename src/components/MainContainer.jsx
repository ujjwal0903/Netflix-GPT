import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies) return null; 

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <VideoBackground movieID={id} />

            {/* Title Overlay */}
            <VideoTitle title={original_title} overview={overview} />
        </div>
    );
};

export default MainContainer;
