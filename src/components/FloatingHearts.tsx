import React, { useEffect, useState } from 'react';
interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
}
export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  useEffect(() => {
    const emojis = ['❤️', '💖', '💕', '💗', '💓', '💞'];
    const newHearts: Heart[] = [];
    // Create 20 floating hearts with random properties
    for (let i = 0; i < 20; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 10,
        size: 1 + Math.random() * 2,
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
      });
    }
    setHearts(newHearts);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) =>
      <div
        key={heart.id}
        className="absolute bottom-0 animate-float opacity-0"
        style={{
          left: `${heart.left}%`,
          fontSize: `${heart.size}rem`,
          animationDelay: `${heart.delay}s`,
          animationDuration: `${heart.duration}s`
        }}>

          {heart.emoji}
        </div>
      )}
    </div>);

}