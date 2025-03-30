import React, { useRef } from 'react';

const VideoPlayer = ({ videoId, start = 0, end }) => {
  const iframeRef = useRef(null);

  const videoUrl = `https://www.youtube.com/embed/${videoId}?start=${start}&end=${end}&autoplay=1&controls=1&rel=0&modestbranding=1`;

//   // Reload the video by resetting the src
//   const handleReplay = () => {
//     if (iframeRef.current) {
//       iframeRef.current.src = videoUrl;
//     }
//   };

  return (
    <div className="w-full md:w-2/5 rounded-3xl mx-auto mt-8 flex flex-col items-center">
      <p className="text-white text-center text-xs md:text-lg m-5">
        Refer to this video for demonstration of the test
      </p>
      <div className="cursor-pointer relative w-full pb-[56.25%]">
        <iframe
          ref={iframeRef}
          src={videoUrl}
          title="Video Player"
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Custom Replay Button */}
      {/* <button
        onClick={handleReplay}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Replay Video
      </button> */}
    </div>
  );
};

export default VideoPlayer;
