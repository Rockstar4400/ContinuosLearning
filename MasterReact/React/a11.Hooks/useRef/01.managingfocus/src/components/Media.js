import React, { useRef } from 'react';

const Media = () => {
  const videoRef = useRef(null);

  function playVideo() {
    videoRef.current.play();
  }

  function pauseVideo() {
    videoRef.current.pause();
  }

  return (
    <div>
      <video ref={videoRef} width="400">
        <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/mp4" />
      </video>
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
};

export default Media;