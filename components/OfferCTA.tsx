import React from 'react';
import { OfferCtaData } from '../types';

interface OfferCTAProps {
  data: OfferCtaData;
}

const OfferCTA: React.FC<OfferCTAProps> = ({ data }) => {
  return (
    <section id="offer_cta" className="py-20 bg-gradient-to-br from-brand-blue to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {data.headline}
            </h2>
            <p className="text-xl md:text-2xl text-brand-gold font-semibold">
              {data.subheadline}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
             <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Left: Form & Info */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                   <div className="space-y-8 mb-8">
                      <div className="flex items-center">
                          <div className="w-14 h-14 rounded-full bg-brand-gold flex items-center justify-center text-brand-blue text-2xl mr-4 flex-shrink-0">
                            <i className="fa-solid fa-phone"></i>
                          </div>
                          <div>
                            <div className="text-sm text-slate-300 uppercase tracking-wider">Hotline tư vấn 24/7</div>
                            <a href={`tel:${data.phone.replace(/[^\d]/g, '')}`} className="text-3xl font-bold text-white hover:text-brand-gold transition">
                              {data.phone}
                            </a>
                          </div>
                      </div>

                      <div className="flex items-center">
                          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl mr-4 flex-shrink-0">
                            <i className="fa-solid fa-map-location-dot"></i>
                          </div>
                          <div>
                            <div className="text-sm text-slate-300 uppercase tracking-wider">Địa chỉ văn phòng</div>
                            <div className="text-white font-medium text-lg">
                              {data.address}
                            </div>
                          </div>
                      </div>
                   </div>

                   {/* Form */}
                   <div className="bg-white p-6 rounded-xl text-brand-dark">
                      <h3 className="font-bold text-xl mb-4 text-center text-brand-blue">Đăng Ký Tư Vấn Miễn Phí</h3>
                      <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.'); }}>
                        <input type="text" placeholder="Tên của bạn" className="w-full px-4 py-3 bg-gray-100 rounded border border-gray-300 text-gray-800 focus:outline-none focus:border-brand-blue" required />
                        <input type="tel" placeholder="Số điện thoại" className="w-full px-4 py-3 bg-gray-100 rounded border border-gray-300 text-gray-800 focus:outline-none focus:border-brand-blue" required />
                        <button type="submit" className="w-full bg-brand-gold text-brand-blue font-bold py-3 rounded hover:bg-yellow-400 transition shadow-lg animate-pulse text-lg uppercase">
                          {data.button_text}
                        </button>
                      </form>
                   </div>
                </div>

                {/* Right: Map */}
                <div className="h-full min-h-[400px] bg-slate-800 relative">
                   {data.map_iframe_src ? (
                     <iframe 
                        src={data.map_iframe_src}
                        width="100%" 
                        height="100%" 
                        style={{border:0, minHeight: '400px', height: '100%'}} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Bản đồ vị trí"
                        className="absolute inset-0 w-full h-full"
                      ></iframe>
                   ) : (
                     <div className="flex items-center justify-center h-full text-white/50">
                       <p>Bản đồ chưa được cập nhật</p>
                     </div>
                   )}
                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferCTA;