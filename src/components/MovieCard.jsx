/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({ posterPath }) => {
    return (
        <div>
            <img 
                className="w-36 pr-4"
                src={IMG_CDN_URL + posterPath} 
                alt="Movie Card" 
            />
        </div>
    )
}

export default MovieCard
