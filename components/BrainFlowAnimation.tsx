import React from 'react';
import BrainVisual from './BrainVisual';
import brainFlowData from '/lottiefiles/brain-flow-1.json';

const BrainFlowAnimation: React.FC = () => {
  return <BrainVisual animationData={brainFlowData} loop={false} />;
};

export default BrainFlowAnimation;
