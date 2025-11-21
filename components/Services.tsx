import React from 'react';
import { ServiceListData } from '../types';

interface ServicesProps {
  data: ServiceListData;
}

const Services: React.FC<ServicesProps> = ({ data }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">{data.headline}</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col group"
            >
              {/* Image Area */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.media.placeholder_src || item.media.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-brand-gold text-brand-blue font-bold px-3 py-1 rounded text-sm shadow-md">
                  {item.price}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-blue mb-4">{item.title}</h3>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => document.getElementById('offer_cta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-2 border-2 border-brand-blue text-brand-blue font-bold rounded hover:bg-brand-blue hover:text-white transition-colors"
                >
                  Tư Vấn Ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;