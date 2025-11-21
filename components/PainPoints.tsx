import React from 'react';
import { Grid3ColData } from '../types';

interface PainPointsProps {
  data: Grid3ColData;
}

const PainPoints: React.FC<PainPointsProps> = ({ data }) => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            {data.headline}
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className={`fa-solid ${card.icon} text-3xl text-brand-blue`}></i>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center">
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