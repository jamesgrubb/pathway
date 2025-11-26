import React, { useState, useEffect } from 'react';
import BrainVisual from './BrainVisual';

const GeneticAnimation: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/lottiefiles/brain-flow-4.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading genetic animation:', error));
  }, []);

  if (!animationData) {
    return <div className="w-full h-full flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <BrainVisual animationData={animationData} />
      <div className="max-w-xs">
        <div className="text-slate-600 text-sm font-medium bg-white/80 px-4 py-2 rounded-2xl shadow-sm text-center leading-tight">
          Disruption can result from Genetic or Acquired factors
        </div>
      </div>
    </div>
  );
};

export default GeneticAnimation;
