import React, { useState, useEffect } from 'react';
import BrainVisual from './BrainVisual';

const BrainFlowAnimation: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/lottiefiles/brain-flow-1.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading brain flow animation:', error));
  }, []);

  if (!animationData) {
    return <div className="w-full h-full flex items-center justify-center">Loading...</div>;
  }

  return <BrainVisual animationData={animationData} loop={false} />;
};

export default BrainFlowAnimation;
