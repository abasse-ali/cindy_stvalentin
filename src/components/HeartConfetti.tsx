import React, { useEffect, useState } from 'react';
interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  emoji: string;
  rotation: number;
}
export function HeartConfetti() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  useEffect(() => {
    const emojis = ['❤️', '💖', '💕', '💗', '🌹', '✨'];
    const pieces: ConfettiPiece[] = [];
    // Generate 50 pieces of confetti
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        rotation: Math.random() * 360
      });
    }
    setConfetti(pieces);
    // Cleanup isn't strictly necessary for a one-off celebration effect
    // that disappears when component unmounts, but good practice
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) =>
      <div
        key={piece.id}
        className="absolute top-0 animate-confetti"
        style={{
          left: `${piece.left}%`,
          animationDelay: `${piece.delay}s`,
          fontSize: '1.5rem',
          transform: `rotate(${piece.rotation}deg)`
        }}>

          {piece.emoji}
        </div>
      )}
    </div>);

}