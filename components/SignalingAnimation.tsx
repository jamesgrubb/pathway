import React from 'react';
import BrainVisual from './BrainVisual';
import signalingAnimationData from '/lottiefiles/brain-flow-2.json';

const SignalingAnimation: React.FC = () => {
  return <BrainVisual animationData={signalingAnimationData} />;
};

export default SignalingAnimation;
