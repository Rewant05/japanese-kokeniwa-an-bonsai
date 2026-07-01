import React from 'react';
import { siteData } from '../config/siteData';
import { Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--vermilion)', color: 'var(--warm-ivory)', fontFamily: 'var(--font-serif)', fontSize: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 24px', borderRadius: '4px' }}>庵</div>
          <h1 style={{ fontSize: '36px', marginBottom: '16px' }}>私たちについて</h1>
          <p style={{ color: 'var(--moss-green)', letterSpacing: '0.1em' }}>ABOUT US</p>
        </div>

        <section style={{ backgroundColor: 'var(--warm-ivory)', padding: '40px', borderRadius: '4px', border: '1px solid var(--stone-gray-light)', marginBottom: '40px', lineHeight: '2' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '24px', textAlign: 'center', borderBottom: '2px solid var(--soil-brown)', paddingBottom: '16px' }}>
            {siteData.tagline}
          </h2>
          
          <p style={{ marginBottom: '24px' }}>
            苔庭庵（Kokeniwa An）は、日本の伝統的な盆栽文化を、現代の暮らしにやさしく取り入れるための架空のアトリエです。
          </p>
          
          <p style={{ marginBottom: '24px' }}>
            慌ただしい日常の中で、土の香りをかぎ、小さな葉の成長を愛でる時間。
            それは、自然と対話し、自分自身と向き合う「静かな時間」でもあります。
          </p>
          
          <p style={{ marginBottom: '24px' }}>
            私たちは、初心者の方にも分かりやすい言葉で、盆栽の選び方、育て方、そして四季折々の手入れの方法をお伝えします。
            「枯らしてしまったらどうしよう」という不安を減らし、植物と共に暮らす喜びを広げることが私たちの願いです。
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--moss-green-dark)', marginTop: '40px', paddingTop: '24px', borderTop: '1px dashed var(--stone-gray-light)' }}>
            <Leaf size={16} />
            <span style={{ fontSize: '14px', fontFamily: 'var(--font-serif)' }}>季節をうつす小さな鉢。</span>
          </div>
        </section>

        <section style={{ textAlign: 'center', padding: '40px', backgroundColor: 'rgba(213, 213, 209, 0.2)', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--pine-black)' }}>アトリエ概要（架空）</h3>
          <p style={{ marginBottom: '8px' }}><strong>名称:</strong> {siteData.atelierName}</p>
          <p style={{ marginBottom: '8px' }}><strong>所在地:</strong> {siteData.address}</p>
          <p style={{ marginBottom: '8px' }}><strong>営業時間:</strong> {siteData.businessHours}</p>
          <p style={{ marginTop: '24px', fontSize: '12px', color: 'var(--stone-gray)' }}>
            ※当サイトはフィクションであり、実在する人物・団体・施設とは一切関係ありません。
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
