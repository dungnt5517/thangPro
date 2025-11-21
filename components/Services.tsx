import React from 'react';
import { ServiceListData } from '../types';

interface ServicesProps {
  data: ServiceListData;
}

const Services: React.FC<ServicesProps> = ({ data }) => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
           <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2 block">Dịch Vụ Của Chúng Tôi</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-blue mb-4">{data.headline}</h2>
          {data.subheadline && <p className="text-slate-500 text-lg">{data.subheadline}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 flex flex-col"
            >
              {/* Image Area with Overlay */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.media.placeholder_src || item.media.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur text-brand-blue text-xs font-bold px-3 py-2 rounded inline-block shadow-sm uppercase tracking-wide">
                        {item.price}
                    </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl font-bold text-brand-blue mb-6 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-slate-600 text-sm font-medium">
                      <i className="fa-solid fa-check-circle text-brand-gold mt-1 mr-3 flex-shrink-0"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => document.getElementById('offer_cta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 border border-brand-blue/20 text-brand-blue font-bold rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 uppercase text-sm tracking-wider"
                >
                  Tư Vấn Chi Tiết
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