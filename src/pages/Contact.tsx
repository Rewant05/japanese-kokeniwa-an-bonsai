import React from 'react';
import { siteData } from '../config/siteData';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Clock } from '../components/icons';

const Contact: React.FC = () => {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '36px', marginBottom: '16px' }}>お問い合わせ</h1>
          <p style={{ color: 'var(--moss-green)', letterSpacing: '0.1em' }}>CONTACT</p>
          <p style={{ marginTop: '24px', color: 'var(--soil-brown)', maxWidth: '600px', margin: '24px auto 0' }}>
            育て方のご相談や、ワークショップについてのご質問など、お気軽にお問い合わせください。
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          <div style={{ padding: '32px', backgroundColor: 'rgba(213, 213, 209, 0.2)', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '24px', color: 'var(--pine-black)', borderBottom: '2px solid var(--moss-green-light)', paddingBottom: '8px' }}>アトリエ情報</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={20} color="var(--moss-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '14px', marginBottom: '4px', color: 'var(--stone-gray)' }}>所在地</h4>
                  <p style={{ fontSize: '15px' }}>{siteData.address}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Clock size={20} color="var(--moss-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '14px', marginBottom: '4px', color: 'var(--stone-gray)' }}>営業時間</h4>
                  <p style={{ fontSize: '15px' }}>{siteData.businessHours}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Mail size={20} color="var(--moss-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '14px', marginBottom: '4px', color: 'var(--stone-gray)' }}>メールアドレス</h4>
                  <p style={{ fontSize: '15px' }}><a href={`mailto:${siteData.email}`} style={{ color: 'var(--moss-green-dark)' }}>{siteData.email}</a></p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '40px' }}>
              <h3 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--pine-black)' }}>よくあるご質問</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {siteData.faqs.map((faq, idx) => (
                  <div key={idx} style={{ backgroundColor: 'var(--warm-ivory)', padding: '16px', borderRadius: '4px', fontSize: '13px' }}>
                    <p style={{ fontWeight: 'bold', color: 'var(--moss-green-dark)', marginBottom: '8px' }}>Q. {faq.q}</p>
                    <p style={{ color: 'var(--soil-brown)' }}>A. {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;
