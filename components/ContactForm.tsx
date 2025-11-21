import React from 'react';
import { ContactSectionData } from '../types';

interface ContactProps {
  data: ContactSectionData;
}

const ContactForm: React.FC<ContactProps> = ({ data }) => {
  return (
    <section id="contact" className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">{data.title}</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fa-solid fa-location-dot text-brand-gold"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Địa Chỉ</h3>
                  <p className="text-slate-300">{data.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fa-solid fa-phone text-brand-gold"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Hotline</h3>
                  <a href={`tel:${data.phone.replace(/\./g, '')}`} className="text-brand-gold text-xl font-bold hover:text-yellow-400 block">
                    {data.phone}
                  </a>
                </div>
              </div>

               <div className="flex items-start">
                <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fa-solid fa-envelope text-brand-gold"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-slate-300">{data.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-white/5 p-6 rounded-lg border border-white/10">
               <h3 className="font-bold text-xl mb-4">Đăng ký tư vấn miễn phí</h3>
               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <input type="text" placeholder="Họ tên của bạn" className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-600 text-white focus:border-brand-gold outline-none" />
                 <input type="tel" placeholder="Số điện thoại" className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-600 text-white focus:border-brand-gold outline-none" />
                 <button className="w-full bg-brand-gold text-brand-blue font-bold py-3 rounded hover:bg-yellow-400 transition">
                   GỬI YÊU CẦU
                 </button>
               </form>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] bg-slate-800 rounded-xl overflow-hidden">
            <iframe
              src={data.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;