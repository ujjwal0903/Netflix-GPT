/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useMovieTrailer(movieID);

    return (
        <div className="w-full h-full overflow-hidden absolute top-0 left-0">
            <iframe
                className="w-full h-full object-cover"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playlist=${trailerVideo?.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>

        </div>
    );
};

export default VideoBackground;

