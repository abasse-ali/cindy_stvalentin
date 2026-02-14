import React from 'react';
import { HeartConfetti } from './HeartConfetti';
import { AlphabetCard } from './AlphabetCard';
import { HeartIcon } from 'lucide-react';
import { PhotoStack } from './PhotoStack';

import photoA from '../assets/A.jpg';
import photoB from '../assets/B.jpg';
import photoC from '../assets/C.jpg';
import photoD from '../assets/D.jpg';
import photoE from '../assets/E.jpg';
import photoF from '../assets/F.jpg';
import photoG from '../assets/G.jpg';
import photoH from '../assets/H.jpg';
import photoI from '../assets/I.jpg';
import photoJ from '../assets/J.jpg';
import photoK from '../assets/K.jpg';
import photoL from '../assets/L.jpg';
import photoM from '../assets/M.jpg';
import photoN from '../assets/N.jpg';
import photoO from '../assets/O.jpg';
import photoP from '../assets/P.jpg';
import photoQ from '../assets/Q.jpg';
import photoR from '../assets/R.jpg';
import photoS from '../assets/S.jpg';
import photoT from '../assets/T.jpg';
import photoU from '../assets/U.jpg';
import photoV from '../assets/V.jpg';
import photoW from '../assets/W.jpg';
import photoX from '../assets/X.jpg';
import photoY from '../assets/Y.jpg';
import photoZ from '../assets/Z.jpg';

const ALPHABET_DATA = [
  {
    letter: 'A',
    word: 'Âme sœur',
    description: "Tu es l'âme sœur que j'ai passée une vie entière à chercher et que j'ai enfin trouvée.",
    imageSrc: photoA
  },
  {
    letter: 'B',
    word: 'Bouleversante',
    description: 'Ton existence seule a suffi à bouleverser mon monde de la plus belle des façons.',
    imageSrc: photoB
  },
  {
    letter: 'C',
    word: 'Captivante',
    description: "Chaque détail de ta personne, chaque sourire, m'envoûte un peu plus chaque jour.",
    imageSrc: photoC
  },
  {
    letter: 'D',
    word: 'Divine',
    description: 'Tu as cette grâce presque irréelle qui transforme mon quotidien en un conte de fées.',
    imageSrc: photoD
  },
  {
    letter: 'E',
    word: 'Essentielle',
    description: "Ta présence est devenue aussi vitale et essentielle à ma vie que l'air que je respire.",
    imageSrc: photoE
  },
  {
    letter: 'F',
    word: 'Fascinante',
    description: "Ton esprit est un univers merveilleux que j'aimerais passer l'éternité à explorer.",
    imageSrc: photoF
  },
  {
    letter: 'G',
    word: 'Gardienne',
    description: 'Tu es la précieuse gardienne de mon cœur, de ma tendresse et de mes plus beaux secrets.',
    imageSrc: photoG
  },
  {
    letter: 'H',
    word: 'Hypnotique',
    description: "Il me suffit de plonger mon regard dans le tien pour oublier le reste de l'univers.",
    imageSrc: photoH
  },
  {
    letter: 'I',
    word: 'Irremplaçable',
    description: "Tu as pris une place dans mon âme et dans ma vie qu'aucune autre ne pourrait jamais occuper.",
    imageSrc: photoI
  },
  {
    letter: 'J',
    word: 'Joyau',
    description: "Tu es le joyau le plus rare, le plus pur et le plus précieux que le destin m'ait offert.",
    imageSrc: photoJ
  },
  {
    letter: 'K',
    word: 'Kryptonite',
    description: "Tu es ma douce faiblesse, la seule personne devant qui je rends les armes avec un bonheur absolu.",
    imageSrc: photoK
  },
  {
    letter: 'L',
    word: 'Lueur',
    description: 'Même dans mes journées les plus sombres, tu es cette lueur chaleureuse qui me guide et me rassure.',
    imageSrc: photoL
  },
  {
    letter: 'M',
    word: 'Muse',
    description: "Tu es l'inspiration derrière mes pensées les plus douces et l'héroïne de mes rêves les plus fous.",
    imageSrc: photoM
  },
  {
    letter: 'N',
    word: 'Nécessité',
    description: "T'avoir à mes côtés n'est plus seulement un désir, c'est devenu ma plus belle nécessité.",
    imageSrc: photoN
  },
  {
    letter: 'O',
    word: "Œuvre d'art",
    description: "Chaque millimètre de ton être est un chef-d'œuvre que je pourrais admirer inlassablement.",
    imageSrc: photoO
  },
  {
    letter: 'P',
    word: 'Poésie',
    description: "La façon dont tu parles, dont tu ris, dont tu vis... tout en toi est une poésie qui m'émeut.",
    imageSrc: photoP
  },
  {
    letter: 'Q',
    word: 'Quintessence',
    description: "Tu es la définition même de l'amour pur, la quintessence de tout ce que j'ai toujours désiré.",
    imageSrc: photoQ
  },
  {
    letter: 'R',
    word: 'Rare',
    description: 'Une âme aussi belle, sincère et lumineuse que la tienne est une rareté absolue en ce monde.',
    imageSrc: photoR
  },
  {
    letter: 'S',
    word: 'Sanctuaire',
    description: "Tes bras sont mon refuge, le seul endroit sur cette Terre où mon âme se sent parfaitement en paix.",
    imageSrc: photoS
  },
  {
    letter: 'T',
    word: 'Trésor',
    description: "Si ma vie était une longue quête, te trouver et t'aimer aura été ma plus grande et ma plus belle victoire.",
    imageSrc: photoT
  },
  {
    letter: 'U',
    word: 'Univers',
    description: "Je n'ai plus besoin de lever les yeux vers les étoiles, mon univers tout entier se trouve face à moi.",
    imageSrc: photoU
  },
  {
    letter: 'V',
    word: 'Vitale',
    description: "Ton amour coule dans mes veines, tu es l'énergie qui fait battre mon cœur un peu plus fort.",
    imageSrc: photoV
  },
  {
    letter: 'W',
    word: 'Wonder Woman',
    description: "Tu es mon héroïne du quotidien, celle dont la force et le courage m'inspirent jour après jour.",
    imageSrc: photoW
  },
  {
    letter: 'X',
    word: 'X-traordinaire',
    description: "Il n'y a pas assez de mots dans le dictionnaire pour décrire à quel point tu es une femme exceptionnelle.",
    imageSrc: photoX
  },
  {
    letter: 'Y',
    word: 'Yin',
    description: "Tu es le Yin de mon Yang, l'évidence absolue, la moitié parfaite qui vient compléter mon âme.",
    imageSrc: photoY
  },
  {
    letter: 'Z',
    word: 'Zénith',
    description: "Avec toi, mon bonheur a atteint son zénith : un sommet de passion et de douceur qui ne redescendra jamais.",
    imageSrc: photoZ
  }
]

export function SuccessSection() {
  return (
    <div className="relative min-h-screen w-full py-12 px-4 md:px-8 flex flex-col items-center">
      <HeartConfetti />

      {/* Header */}
      <div className="text-center mb-16 animate-fade-in z-10">
        <h1 className="text-5xl md:text-7xl font-romantic text-white mb-4 drop-shadow-lg">
          🎉 Elle a dit Oui ! 🥳🎉
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-md">
          C'est officiel ! 💍💕 Voici mon abécédaire de l'amour pour toi mon amour 🥰❤️...
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl w-full mb-20 z-10">
        {ALPHABET_DATA.map((item, index) => (
          <AlphabetCard
            key={item.letter}
            letter={item.letter}
            word={item.word}
            description={item.description}
            index={index}
            // NOUVEAU : On passe l'image au composant enfant
            imageSrc={item.imageSrc}
          />
        ))}
      </div>

      {/* Photo Stack - Nos souvenirs */}
      <PhotoStack />

      {/* Footer Message */}
      <div
        className="text-center mt-auto pb-12 animate-fade-in z-10"
        style={{
          animationDelay: '3s',
        }}
      >
        <h2 className="text-4xl md:text-6xl font-romantic text-white mb-4 animate-heartbeat drop-shadow-lg">
          Je t'aime de tout mon cœur ma déesse 🥹❤️
        </h2>
        <h2 className="text-4xl md:text-6xl font-romantic text-white mb-4 drop-shadow-lg">
          Gros Bisous baveux 🤤😚❤️
        </h2>
        <p className="text-white/80 text-lg flex items-center justify-center gap-2">
          T'es à moi pour toujours et à jamais 😑💍❤️...
        </p>
      </div>
    </div>
  )
}