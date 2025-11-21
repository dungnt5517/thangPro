import React from 'react';
import { TestimonialCardsData } from '../types';

interface TestimonialsProps {
  data: TestimonialCardsData;
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-blue mb-4">{data.headline}</h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {data.reviews.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col relative border border-slate-100">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-brand-gold flex items-center justify-center rounded-full text-white text-xl shadow-lg">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              
              <p className="text-slate-600 italic mb-8 flex-grow text-lg leading-relaxed font-light">"{item.text}"</p>
              
              <div className="flex items-center pt-6 border-t border-slate-100">
                <img 
                  src={item.avatar_placeholder} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-brand-gold p-0.5" 
                />
                <div>
                  <h4 className="font-bold text-brand-blue text-lg font-serif">{item.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{item.info}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[1,2,3,4,5].map(i => (
                     <i key={i} className="fa-solid fa-star text-brand-gold text-xs"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;