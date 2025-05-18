import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface BackgroundVideoProps {
  videoUrl: string;
}

const BackgroundVideo = ({ videoUrl }: BackgroundVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.error('Autoplay failed:', err);
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => {
        console.error('Play failed:', err);
      });
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-luxe-navy/30 pointer-events-none" />

      <div className="absolute bottom-6 right-6 z-10">
        <button
          onClick={togglePlay}
          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>
    </div>
  );
};

export default BackgroundVideo;
