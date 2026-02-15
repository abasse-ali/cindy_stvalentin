import React, { useState, useRef, useEffect } from 'react';

interface HomeSectionProps {
  onSuccess: () => void;
}

export function HomeSection({ onSuccess }: HomeSectionProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [isGone, setIsGone] = useState(false);
  const [isFlyingAway, setIsFlyingAway] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);
  
  const [safeBounds, setSafeBounds] = useState({
    minX: 0, maxX: 0, minY: 0, maxY: 0, originX: 0, originY: 0
  });

  const INITIAL_BTN_WIDTH = 180; 

  const NO_BTN_TEXTS = [
    'Non 💔🥲',
    'Tu es sûre ? 🤔',
    'Même pas en rêve ! 😤',
    'Clique sur Oui ! 👆',
    'Abandonne ! 🏳️',
    "C'est perdu d'avance 😂",
    '💔💔💔',
    'Ok... Oui ? 😅'
  ];

  useEffect(() => {
    if (noBtnRef.current) {
      const rect = noBtnRef.current.getBoundingClientRect();
      const padding = 20;
      setSafeBounds({
        minX: padding,
        maxX: window.innerWidth - rect.width - padding,
        minY: padding,
        maxY: window.innerHeight - rect.height - padding,
        originX: rect.left,
        originY: rect.top
      });
    }
  }, []);

  const handleDodge = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e && e.cancelable) e.preventDefault();
    if (e) e.stopPropagation();
    
    if (!containerRef.current || isGone || !noBtnRef.current) return;
    
    const newCount = dodgeCount + 1;

    if (newCount >= 8) {
      setIsFlyingAway(true);
      setDodgeCount(newCount);
      setYesScale((prev) => Math.min(prev + 0.15, 3));
      setTimeout(() => {
        setIsGone(true);
      }, 800);
      return;
    }

    const currentWidth = noBtnRef.current.offsetWidth;
    const padding = 20;
    const currentMaxX = window.innerWidth - currentWidth - padding;

    const targetX = Math.floor(safeBounds.minX + Math.random() * (currentMaxX - safeBounds.minX));
    const targetY = Math.floor(safeBounds.minY + Math.random() * (safeBounds.maxY - safeBounds.minY));

    const deltaX = targetX - safeBounds.originX;
    const deltaY = targetY - safeBounds.originY;

    setOffset({ x: deltaX, y: deltaY });
    setDodgeCount(newCount);
    setYesScale((prev) => Math.min(prev + 0.15, 3));
  };

  const getNoButtonText = () => {
    const index = Math.min(dodgeCount, NO_BTN_TEXTS.length - 1);
    return NO_BTN_TEXTS[index];
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 text-center z-10 overflow-hidden">

      <div className="bg-white/30 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl w-full border border-white/50 animate-fade-in relative z-20">
        <h1 className="text-6xl md:text-8xl font-romantic text-white mb-6 drop-shadow-lg transform -rotate-2">
          Mon Cœur ❤️
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 drop-shadow-md">
          Veux-tu être ma Valentine ? 🥹❤️
        </h2>

        <p className="text-white/90 text-lg mb-12 font-medium bg-black/10 inline-block px-4 py-2 rounded-full">
          Attention, appuyer sur « Non » est fortement déconseillé... à tes
          risques et périls 😏❤️
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative min-h-[100px]">
          {/* YES BUTTON */}
          <button
            onClick={onSuccess}
            style={{
              transform: `scale(${yesScale})`,
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-green-500/50 flex items-center gap-2 z-20 animate-heartbeat">
            Oui 😍❤️
          </button>

          {/* LE FANTÔME DEVIENT LE CONTENEUR DU BOUTON NON */}
          {!isGone && (
            <div 
              style={{ width: INITIAL_BTN_WIDTH, height: 60 }} 
              className="relative flex-shrink-0 flex items-center justify-center"
            >
              <button
                ref={noBtnRef}
                onMouseEnter={handleDodge}
                onClick={handleDodge}
                onTouchStart={handleDodge}
                style={{
                  position: 'absolute',
                  zIndex: 50,
                  // On applique l'animation directement ici. Le bouton est "calé" au centre du fantôme.
                  transform: isFlyingAway
                    ? `translate(${offset.x + 300}px, ${offset.y - 500}px) rotate(720deg) scale(0)`
                    : `translate(${offset.x}px, ${offset.y}px)`,
                  transition: isFlyingAway
                    ? 'all 0.8s cubic-bezier(0.6, -0.28, 0.74, 0.05)'
                    : dodgeCount > 0 ? 'transform 0.2s ease-out' : 'none',
                  opacity: isFlyingAway ? 0 : 1,
                  width: 'max-content' 
                }}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                {getNoButtonText()}
                {dodgeCount === 0}
              </button>
            </div>
          )}
        </div>

        {/* Message final */}
        {isGone && (
          <div className="mt-8 animate-fade-in w-full flex justify-center">
            <p className="text-white/90 text-lg md:text-xl font-medium bg-black/20 inline-block px-6 py-3 rounded-full shadow-inner">
              Il ne reste plus qu'une seule option, tu n'as plus le choix 😚❤️.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}