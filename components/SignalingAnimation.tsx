import React, { useState, useEffect } from 'react';
import BrainVisual from './BrainVisual';

const SignalingAnimation: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/lottiefiles/brain-flow-2.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading signaling animation:', error));
  }, []);

  if (!animationData) {
    return <div className="w-full h-full flex items-center justify-center">Loading...</div>;
  }

  return <BrainVisual animationData={animationData} />;
};

export default SignalingAnimation;
