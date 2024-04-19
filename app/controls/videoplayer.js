import React, { useRef, useEffect, useState } from 'react';

const VideoPlayer = ({ id,cn, src, startTime, endTime }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.currentTime = startTime;
      videoRef.current.play();

      const handleTimeUpdate = () => {
        if (videoRef.current.currentTime >= endTime) {
          videoRef.current.pause();
          videoRef.current.currentTime = startTime;
          setIsPlaying(false);
        }
      };

      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [isPlaying, startTime, endTime]);

  const handleKeyPress = (event) => {
    if (event.keyCode === 32) {
      if (videoRef.current.paused) {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <>
    {!isPlaying && (
      <button onClick={handlePlayClick} id={id} className={cn}></button>
    )}
    <div className="video-player" >

      <video
        ref={videoRef}
        controls
        width="640"
        height="360"
        poster="placeholder.jpg"
        style={{ display: isPlaying ? 'block' : 'none' }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
};

export default VideoPlayer;
