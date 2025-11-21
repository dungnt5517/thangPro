import React from 'react';
import { TestimonialCardsData } from '../types';

interface TestimonialsProps {
  data: TestimonialCardsData;
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-12">{data.headline}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {data.reviews.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 flex flex-col relative">
              <i className="fa-solid fa-quote-left text-4xl text-brand-blue/10 absolute top-6 left-6"></i>
              
              <p className="text-gray-600 italic mb-6 flex-grow relative z-10 pt-6">"{item.text}"</p>
              
              <div className="flex items-center border-t border-slate-200 pt-4">
                <img 
                  src={item.avatar_placeholder} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4 bg-gray-200" 
                />
                <div>
                  <h4 className="font-bold text-brand-blue">{item.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{item.info}</p>
                </div>
                <div className="ml-auto flex text-yellow-400 text-xs">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
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