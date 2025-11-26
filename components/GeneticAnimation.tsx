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

  return <BrainVisual animationData={animationData} />;
};

export default GeneticAnimation;
