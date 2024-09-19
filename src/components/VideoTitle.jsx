/* eslint-disable react/prop-types */
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full h-full flex flex-col justify-start px-4 sm:px-8 md:px-16 lg:px-16 pt-36 text-white bg-gradient-to-r from-black bg-opacity-50">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className=" md:w-1/2 lg:w-1/3 py-6 text-lg">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
