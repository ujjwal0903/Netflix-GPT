/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null
    return (
        <div className="w-48 h-72 p-2 flex-shrink-0"> {/* Ensure fixed width, avoid shrinking */}
            <img 
                src={IMG_CDN_URL + posterPath} 
                alt="Movie Poster" 
                className="w-full h-full object-cover"  
            />
        </div>
    );
}

export default MovieCard;
