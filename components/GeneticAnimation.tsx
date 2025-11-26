import React from 'react';
import BrainVisual from './BrainVisual';
import geneticAnimationData from '/lottiefiles/brain-flow-4.json';

const GeneticAnimation: React.FC = () => {
  return <BrainVisual animationData={geneticAnimationData} />;
};

export default GeneticAnimation;
