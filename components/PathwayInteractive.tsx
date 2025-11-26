import React, { useState, useRef, useEffect } from 'react';
import BrainFlowAnimation from './BrainFlowAnimation';
import SignalingAnimation from './SignalingAnimation';
import GeneticAnimation from './GeneticAnimation';

const steps = [
  {
    id: 0,
    title: "Understanding the MC4R pathway and its role",
    content: "The melanocortin-4 receptor (MC4R) pathway plays an important role in regulating appetite and energy balance by sending signals to the brain. Disruption of this signalling can affect how the brain responds to hunger and energy use.",
    action: "Find out how the MC4R pathway works",
    secondaryAction: "Learn more about the different root causes",
    VisualComponent: BrainFlowAnimation
  },
  {
    id: 1,
    title: "When MC4R signalling is affected",
    content: "Changes in MC4R pathway activity can lead to an imbalance in appetite control and metabolism. These changes may occur for two different reasons and can influence how the brain interprets signals. Identifying the type of disruption helps guide further understanding and care.",
    action: null,
    VisualComponent: SignalingAnimation
  },
  {
    id: 2,
    title: "Genetic and Acquired factors",
    content: "Disruption of the MC4R pathway can result from inherited genetic variants or factors acquired over time, both of which can affect how the pathway functions. Further information is available on the specific causes and their impact.",
    action: "Select the pathway you'd like to explore further:",
    VisualComponent: GeneticAnimation
  }
];

const PathwayInteractive: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [markerTop, setMarkerTop] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMarker = () => {
      const currentRef = stepRefs.current[activeStep];
      if (currentRef && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const itemRect = currentRef.getBoundingClientRect();
        // Calculate top relative to the container
        setMarkerTop(itemRect.top - containerRect.top);
      }
    };

    updateMarker();
    window.addEventListener('resize', updateMarker);
    // Extra timeout to ensure layout has settled (especially for fonts/dynamic content)
    setTimeout(updateMarker, 100);
    
    return () => window.removeEventListener('resize', updateMarker);
  }, [activeStep]);

  // Get the component for the active step
  const ActiveVisualComponent = steps[activeStep].VisualComponent;

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-2">
              Science-based information about the <span className="text-teal-600 font-medium">melanocortin-4 receptor pathway</span>
            </h2>
          </div>
          <div className="pt-2 text-slate-600 leading-relaxed">
            <p className="mb-4">The MC4R signalling pathway is a key regulator of hunger, satiety, and energy expenditure via neural circuits in the hypothalamus.</p>
            <p>Disruption in this pathway can alter how the body regulates appetite and weight. Explore how the MC4R pathway disruption develops:</p>
          </div>
        </div>

        {/* Interactive Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Visualizer */}
          <div className="order-2 lg:order-1 flex justify-center items-center bg-[#e0fbfe] rounded-3xl p-8 shadow-sm border border-slate-100 min-h-[400px] sticky top-24">
            <ActiveVisualComponent />
          </div>

          {/* Right Column: Steps */}
          <div className="order-1 lg:order-2 relative" ref={containerRef}>
            
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-[1.5rem] sm:left-[2.5rem] top-10 bottom-10 w-0.5 bg-slate-200/80 rounded-full" />
            
            {/* Animated Sliding Marker */}
            <div 
              className="absolute left-[1.5rem] sm:left-[2.5rem] w-4 h-4 bg-lime-400 rounded-full shadow-[0_0_0_4px_rgba(255,255,255,1)] ring-2 ring-lime-400 z-10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] -translate-x-1/2"
              style={{ top: markerTop }}
            />

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`
                    relative pl-12 sm:pl-20 pr-6 py-6 rounded-2xl transition-all duration-500 cursor-pointer border border-transparent
                    ${activeStep === index 
                      ? 'bg-white shadow-xl shadow-teal-900/5 border-teal-50/50 scale-[1.02]' 
                      : 'hover:bg-white/60 opacity-60 hover:opacity-100'}
                  `}
                >
                  {/* Anchor Point for Marker Calculation */}
                  <div 
                    ref={(el) => { stepRefs.current[index] = el; }}
                    className="absolute left-[1.5rem] sm:left-[2.5rem] top-8 w-4 h-4 -translate-x-1/2 flex items-center justify-center pointer-events-none"
                  >
                    {/* Inactive Static Dot */}
                    <div 
                      className={`w-2.5 h-2.5 bg-slate-300 rounded-full transition-all duration-300 ${activeStep === index ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`} 
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${activeStep === index ? 'text-teal-900' : 'text-slate-700'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 transition-opacity duration-300 ${activeStep === index ? 'text-slate-600 opacity-100' : 'text-slate-500 opacity-0 h-0 overflow-hidden sm:h-auto sm:opacity-100 sm:overflow-visible'}`}>
                      {step.content}
                    </p>

                    {/* Buttons (Only show for active step) */}
                    <div className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${activeStep === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
                    `}>
                      {step.action && (
                        <div className="flex flex-col sm:flex-row gap-3">
                           <button className="bg-lime-400 hover:bg-lime-500 text-teal-900 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">
                             {step.id === 2 ? 'Genetic causes' : 'Find out how it works'}
                           </button>
                           {step.secondaryAction && (
                             <button className="border border-slate-300 hover:border-teal-500 text-slate-600 hover:text-teal-700 px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                               Learn more
                             </button>
                           )}
                           {step.id === 2 && (
                             <button className="bg-white border border-slate-300 hover:border-teal-500 text-teal-900 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">
                               Acquired causes
                             </button>
                           )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathwayInteractive;
