import { useState, useEffect, CSSProperties } from 'react';

interface Beam {
  id: number;
  type: 'primary' | 'secondary';
  style: CSSProperties;
}

interface CybercoreBackgroundProps {
  beamCount?: number;
}

export default function CybercoreBackground({ beamCount = 70 }: CybercoreBackgroundProps) {
  const [beams, setBeams] = useState<Beam[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: beamCount }).map((_, i) => {
      const riseDur = Math.random() * 3 + 5;
      const fadeDur = riseDur;
      const type: 'primary' | 'secondary' = Math.random() < 0.15 ? 'secondary' : 'primary';
      return {
        id: i,
        type,
        style: {
          left: `${Math.random() * 100}%`,
          width: `${Math.floor(Math.random() * 2) + 1}px`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${riseDur}s, ${fadeDur}s`,
        },
      };
    });
    setBeams(generated);
  }, [beamCount]);

  return (
    <div className="cyber-scene" aria-hidden="true">
      <div className="cyber-floor" />
      <div className="cyber-column" />
      <div className="cyber-beams">
        {beams.map((beam) => (
          <div
            key={beam.id}
            className={`cyber-beam cyber-beam--${beam.type}`}
            style={beam.style}
          />
        ))}
      </div>
    </div>
  );
}
