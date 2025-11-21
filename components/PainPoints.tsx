import React from 'react';
import { Grid3ColData } from '../types';

interface PainPointsProps {
  data: Grid3ColData;
}

const PainPoints: React.FC<PainPointsProps> = ({ data }) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            {data.headline}
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 border border-brand-gold/20">
                <i className={`fa-solid ${card.icon} text-3xl text-brand-gold bg-clip-text`}></i>
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4 text-center font-serif">
                {card.title}
              </h3>
              <p className="text-slate-600 text-center leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;