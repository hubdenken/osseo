import React from 'react';

interface YouTubeBackgroundProps {
  videoId: string;
  start: number;
  end: number;
  opacity?: number;
  className?: string;
}

const YouTubeBackground: React.FC<YouTubeBackgroundProps> = ({ 
  videoId, 
  start, 
  end, 
  opacity = 0.5, 
  className = "" 
}) => {
  const [key, setKey] = React.useState(0);
  const duration = (end - start) * 1000;

  React.useEffect(() => {
    if (duration <= 0) return;
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, duration);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0 scale-[1.2]">
        <iframe 
          key={key}
          src={`https://www.youtube.com/embed/${videoId}?controls=0&rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${videoId}&iv_load_policy=3&showinfo=0&start=${start}&end=${end}&enablejsapi=1`}
          title="Background Video"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[177.77vh] h-[56.25vw] min-w-full min-h-full"
          style={{ opacity }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeBackground;
