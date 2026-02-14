import React from 'react'
import { CameraIcon, HeartIcon } from 'lucide-react'

interface AlphabetCardProps {
  letter: string
  word: string
  description: string
  index: number
  imageSrc?: string | null
}

export function AlphabetCard({
  letter,
  word,
  description,
  index,
  imageSrc
}: AlphabetCardProps) {
  return (
    <div
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-pink-100 flex flex-col items-center text-center animate-fade-in"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* ZONE PHOTO MODIFIÉE */}
      <div className="w-full aspect-square max-w-[200px] mb-4 rounded-xl bg-pink-50 border-2 border-dashed border-pink-300 flex items-center justify-center group cursor-pointer hover:bg-pink-100 transition-colors relative overflow-hidden">
        
        {/* CONDITION : Si une image existe, on l'affiche. Sinon, on affiche le placeholder. */}
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={`Illustration pour ${word}`}
            className="w-full h-full object-cover rounded-xl animate-fade-in"
          />
        ) : (
          // L'ancien placeholder (caméra)
          <div className="text-pink-300 group-hover:text-pink-400 transition-colors flex flex-col items-center p-2">
            <CameraIcon className="w-8 h-8 mb-2" />
            <span className="text-xs font-medium">Ajouter une photo</span>
          </div>
        )}

        {/* Petit cœur décoratif (ajout de z-10 pour qu'il soit au-dessus de la photo) */}
        <HeartIcon className="absolute top-2 right-2 w-4 h-4 text-pink-200 fill-pink-100 z-10 drop-shadow-sm" />
      </div>

      {/* Contenu Texte */}
      <div className="relative">
        <span className="absolute -top-6 -left-4 text-6xl font-romantic text-pink-100 -z-10 select-none">
          {letter}
        </span>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          <span className="text-pink-500 font-romantic text-3xl mr-1">
            {letter}
          </span>
          {word.substring(1)}
        </h3>
      </div>

      <p className="text-gray-600 italic font-medium leading-relaxed">
        "{description}"
      </p>
    </div>
  )
}