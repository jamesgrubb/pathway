import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface BrainVisualProps {
  animationData: string | object;
  loop?: boolean;
}

const BrainVisual: React.FC<BrainVisualProps> = ({ animationData, loop = true }) => {
  const [lottieData, setLottieData] = useState<object | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Reset state when animationData changes
    setError(false);
    
    // Only clear lottieData if we are switching to a new URL, to prevent flashing
    // If it's an object, we can set it immediately, so no need to clear.
    if (typeof animationData === 'string') {
        setLottieData(null); 
        fetch(animationData, { mode: 'cors', credentials: 'omit' })
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch lottie');
          return res.json();
        })
        .then((data) => setLottieData(data))
        .catch((err) => {
          console.error("Failed to load lottie", err);
          setError(true);
        });
    } else {
      // If it's already an object, use it directly
      setLottieData(animationData);
    }
  }, [animationData]);

  if (error) {
    return (
      <div className="w-full aspect-square flex items-center justify-center bg-slate-50 rounded-full text-slate-400 text-sm flex-col gap-2 p-8 text-center">
        <span className="block text-2xl opacity-50">⚠️</span>
        <span>Animation unavailable</span>
      </div>
    );
  }

  if (!lottieData) {
    return (
      <div className="w-full aspect-square flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center transition-all duration-700 overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      <Lottie 
        animationData={lottieData} 
        loop={loop} 
        autoplay={true}
        style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
      />
      
      {/* Enhanced background glow to match brain aesthetic */}
      <div className="absolute inset-0 bg-gradient-radial from-teal-400/10 via-teal-300/5 to-transparent rounded-full blur-2xl -z-10"></div>
      <div className="absolute inset-0 bg-teal-500/3 rounded-full blur-3xl -z-10 scale-75"></div>
    </div>
  );
};

export default BrainVisual;