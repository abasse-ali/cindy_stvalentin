import React, { useState } from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { HomeSection } from './components/HomeSection';
import { SuccessSection } from './components/SuccessSection';
export function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-pink-400 via-rose-500 to-red-600 relative overflow-x-hidden">
      {/* Background Layer */}
      <FloatingHearts />

      {/* Content Layer */}
      <div className="relative z-10">
        {!showSuccess ?
        <HomeSection onSuccess={() => setShowSuccess(true)} /> :

        <SuccessSection />
        }
      </div>
    </main>);

}