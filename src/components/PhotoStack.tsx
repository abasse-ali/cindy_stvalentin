import React, { useState } from 'react';
import { CameraIcon, HeartIcon, ChevronDownIcon, XIcon } from 'lucide-react';

import photo1 from '../assets/1.jpg';
import photo2 from '../assets/2.jpg';
import photo3 from '../assets/3.jpg';
import photo4 from '../assets/4.jpg';
import photo5 from '../assets/5.jpg';
import photo6 from '../assets/6.jpg';
import photo7 from '../assets/7.jpeg';
import photo8 from '../assets/8.jpg';

interface PhotoSlot {
  id: number;
  rotation: number;
  offsetX: number;
  offsetY: number;
  zIndex: number;
  caption: string;
  imageSrc?: string | null
}
const PHOTO_SLOTS: PhotoSlot[] = [
{
  id: 1,
  rotation: -8,
  offsetX: -30,
  offsetY: 0,
  zIndex: 1,
  caption: 'Notre premier rendez-vous 💕',
  imageSrc: photo1
},
{
  id: 2,
  rotation: 5,
  offsetX: 40,
  offsetY: -20,
  zIndex: 2,
  caption: "Ce sourire que j'adore 😍",
  imageSrc: photo2
},
{
  id: 3,
  rotation: -3,
  offsetX: -60,
  offsetY: 30,
  zIndex: 3,
  caption: 'Toi et moi ❤️',
  imageSrc: photo3
},
{
  id: 4,
  rotation: 12,
  offsetX: 20,
  offsetY: 50,
  zIndex: 4,
  caption: 'Mon moment préféré 🥰',
  imageSrc: photo4
},
{
  id: 5,
  rotation: -6,
  offsetX: 70,
  offsetY: 10,
  zIndex: 5,
  caption: 'Ensemble pour toujours 💞',
  imageSrc: photo5
},
{
  id: 6,
  rotation: 9,
  offsetX: -40,
  offsetY: -40,
  zIndex: 6,
  caption: 'Ma plus belle aventure 🌹',
  imageSrc: photo6
},
{
  id: 7,
  rotation: -11,
  offsetX: 50,
  offsetY: 40,
  zIndex: 7,
  caption: 'Chaque seconde avec toi ✨',
  imageSrc: photo7
},
{
  id: 8,
  rotation: 4,
  offsetX: -10,
  offsetY: -10,
  zIndex: 8,
  caption: 'Mon cœur est à toi 💖',
  imageSrc: photo8
}];

export function PhotoStack() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="w-full max-w-5xl mx-auto mb-20 z-10 animate-fade-in"
      style={{
        animationDelay: '2s',
      }}
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-romantic text-white text-center mb-4 drop-shadow-lg">
        📸 Nos plus beaux souvenirs 📸
      </h2>

      {/* Tap hint */}
      <p
        className="text-center text-white/80 text-sm mb-10 cursor-pointer flex items-center justify-center gap-1 transition-opacity"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <>
            Nos plus beaux moments ensembles 💞...
          </>
        ) : (
          <>
            <ChevronDownIcon className="w-4 h-4 animate-bounce" />
            Appuie sur la pile pour tout voir !
          </>
        )}
      </p>

      {/* === COLLAPSED: Scattered Polaroid Stack === */}
      {!isExpanded && (
        <div
          className="relative w-full flex justify-center cursor-pointer"
          onClick={() => setIsExpanded(true)}
        >
          <div
            className="relative"
            style={{
              width: '340px',
              height: '420px',
            }}
          >
            {PHOTO_SLOTS.map((slot, index) => (
              <div
                key={slot.id}
                className="absolute bg-white p-3 pb-14 rounded-sm shadow-2xl transition-all duration-500 hover:z-50 hover:scale-105 group"
                style={{
                  transform: `rotate(${slot.rotation}deg) translate(${slot.offsetX}px, ${slot.offsetY}px)`,
                  zIndex: slot.zIndex,
                  top: '50%',
                  left: '50%',
                  marginTop: '-100px',
                  marginLeft: '-80px',
                  animationDelay: `${2.5 + index * 0.15}s`,
                }}
              >
                {/* --- 3. AFFICHAGE DE LA PHOTO DANS LA PILE --- */}
                <div className="w-40 h-40 bg-gradient-to-br from-pink-50 to-rose-100 border-2 border-dashed border-pink-300 flex items-center justify-center overflow-hidden relative">
                  {slot.imageSrc ? (
                    <img 
                      src={slot.imageSrc} 
                      alt={slot.caption} 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  ) : (
                    <div className="text-pink-300 group-hover:text-pink-400 transition-colors flex flex-col items-center gap-1 z-10">
                      <CameraIcon className="w-8 h-8" />
                      <span className="text-[10px] font-medium">
                        Photo {slot.id}
                      </span>
                    </div>
                  )}
                </div>

                <p className="absolute bottom-3 left-3 right-3 text-center text-gray-500 font-romantic text-sm truncate">
                  {slot.caption}
                </p>
                <HeartIcon className="absolute top-1 right-1 w-3 h-3 text-pink-200 fill-pink-200 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
              </div>
            ))}
          </div>

          {/* Overlay hint on the pile */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/30 backdrop-blur-sm text-white px-5 py-3 rounded-full font-medium text-sm shadow-lg animate-pulse">
              👆 Appuie ici
            </div>
          </div>
        </div>
      )}

      {/* === EXPANDED: Full Gallery Grid === */}
      {isExpanded && (
        <div className="px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {PHOTO_SLOTS.map((slot, index) => (
              <div
                key={slot.id}
                className="bg-white p-3 pb-14 rounded-sm shadow-2xl relative animate-fade-in hover:-translate-y-1 hover:shadow-pink-500/20 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 0.08}s`,
                  transform: `rotate(${slot.rotation * 0.3}deg)`,
                }}
              >
                {/* --- 4. AFFICHAGE DE LA PHOTO DANS LA GRILLE --- */}
                <div className="w-full aspect-square bg-gradient-to-br from-pink-50 to-rose-100 border-2 border-dashed border-pink-300 flex items-center justify-center overflow-hidden relative">
                  {slot.imageSrc ? (
                    <img 
                      src={slot.imageSrc} 
                      alt={slot.caption} 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  ) : (
                    <div className="text-pink-300 group-hover:text-pink-400 transition-colors flex flex-col items-center gap-2 z-10">
                      <CameraIcon className="w-10 h-10" />
                      <span className="text-xs font-medium">Photo {slot.id}</span>
                    </div>
                  )}
                </div>

                {/* Caption */}
                <p className="absolute bottom-3 left-3 right-3 text-center text-gray-500 font-romantic text-sm truncate">
                  {slot.caption}
                </p>

                {/* Heart decoration */}
                <HeartIcon className="absolute top-1 right-1 w-4 h-4 text-pink-200 fill-pink-200 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
              </div>
            ))}
          </div>

          {/* Close button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsExpanded(false)}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium text-sm shadow-lg hover:bg-white/30 transition-all flex items-center gap-2"
            >
              <XIcon className="w-4 h-4" />
              Refermer la pile
            </button>
          </div>
        </div>
      )}
    </div>
  )
}