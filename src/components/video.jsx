import React from 'react';
import '../styles/style.css'


function VideoContainer() {
  return (
    <div className="contenedor-video">
      <video className='video_video' autoPlay loop muted>
        <source src="video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}

export default VideoContainer;