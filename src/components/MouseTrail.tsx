import React, { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const MouseTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateTrail = () => {
      setTrail(prevTrail => {
        const newPoint: TrailPoint = {
          x: mouseX,
          y: mouseY,
          id: trailId++
        };

        const updatedTrail = [newPoint, ...prevTrail.slice(0, 8)];
        return updatedTrail;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(updateTrail, 50);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD777] opacity-30"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (1 - index / trail.length) * 0.3,
            transform: `scale(${1 - index / trail.length})`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;