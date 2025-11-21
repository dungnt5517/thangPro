import React from 'react';
import { OfferCtaData } from '../types';

interface OfferCTAProps {
  data: OfferCtaData;
}

const OfferCTA: React.FC<OfferCTAProps> = ({ data }) => {
  return (
    <section id="offer_cta" className="py-24 bg-brand-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              {data.headline}
            </h2>
            <p className="text-xl md:text-2xl text-brand-gold font-serif italic">
              {data.subheadline}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
             <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Left: Form & Info */}
                <div className="p-8 md:p-16 flex flex-col justify-center">
                   <div className="space-y-8 mb-10">
                      <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold text-xl mr-6 flex-shrink-0 mt-1">
                            <i className="fa-solid fa-phone"></i>
                          </div>
                          <div>
                            <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Hotline VIP 24/7</div>
                            <a href={`tel:${data.phone.replace(/[^\d]/g, '')}`} className="text-2xl md:text-3xl font-bold text-white hover:text-brand-gold transition font-serif">
                              {data.phone}
                            </a>
                          </div>
                      </div>

                      <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold text-xl mr-6 flex-shrink-0 mt-1">
                            <i className="fa-solid fa-location-dot"></i>
                          </div>
                          <div>
                            <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Văn Phòng</div>
                            <div className="text-white text-lg font-light">
                              {data.address}
                            </div>
                          </div>
                      </div>
                   </div>

                   {/* Form */}
                   <div className="bg-white p-8 rounded-2xl shadow-xl">
                      <h3 className="font-serif font-bold text-2xl mb-6 text-center text-brand-blue">Đăng Ký Tư Vấn Miễn Phí</h3>
                      <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn Quý khách! Chuyên gia của chúng tôi sẽ liên hệ lại trong 5 phút.'); }}>
                        <div>
                           <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Họ và Tên</label>
                           <input type="text" placeholder="Nhập họ tên..." className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:border-brand-gold transition" required />
                        </div>
                        <div>
                           <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Số Điện Thoại</label>
                           <input type="tel" placeholder="Nhập số điện thoại..." className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:border-brand-gold transition" required />
                        </div>
                        <button type="submit" className="w-full bg-gold-gradient text-brand-blue font-bold py-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-widest">
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
                        className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
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