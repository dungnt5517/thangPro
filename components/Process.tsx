import React from 'react';
import { ProcessData } from '../types';

interface ProcessProps {
  data: ProcessData;
}

const Process: React.FC<ProcessProps> = ({ data }) => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
           <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2 block">Workflow</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-blue mb-6">{data.headline}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">{data.subheadline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

          {data.steps.map((step, index) => (
            <div key={index} className="relative z-10 bg-white group">
               <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 shadow-md relative">
                 <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute top-0 left-0 bg-brand-blue text-white font-serif font-bold text-xl px-4 py-3 rounded-br-2xl">
                   {step.step}
                 </div>
               </div>
               
               <div className="text-center px-4">
                 <h3 className="font-serif text-xl font-bold text-brand-blue mb-3">{step.title}</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;