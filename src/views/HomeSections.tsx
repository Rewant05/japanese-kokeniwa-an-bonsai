import React from 'react';
import BonsaiCard from '../components/BonsaiCard';
import CareCalendarCard from '../components/CareCalendarCard';
import ScrollReveal from '../components/ScrollReveal';
import WoodenLabelCTA from '../components/WoodenLabelCTA';
import { siteData } from '../config/siteData';

const HomeSections: React.FC = () => {
  return (
    <>
      <section className="section bg-raked-sand">
        <div className="container">
          <ScrollReveal animation="fadeUp">
            <div className="section-title">
              <h2>盆栽を始める</h2>
              <p>初めての方におすすめの代表的な樹種をご紹介します。</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '32px', marginBottom: '50px' }}>
            {siteData.bonsaiGuides.slice(0, 3).map((guide, idx) => (
              <ScrollReveal key={idx} animation="fadeUp" delay={idx * 150}>
                <BonsaiCard {...guide} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="zoomIn" delay={200}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <WoodenLabelCTA text="すべての盆栽ガイドを見る" href="/collection" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--warm-ivory)' }}>
        <div className="container">
          <ScrollReveal animation="fadeUp">
            <div className="section-title">
              <h2>季節の手入れ</h2>
              <p>小さな庭にも、四季の移ろいがあります。</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px', marginBottom: '50px' }}>
            {siteData.careCalendar.slice(0, 2).map((season, idx) => (
              <ScrollReveal key={idx} animation="fadeUp" delay={idx * 200}>
                <CareCalendarCard index={idx} {...season} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="zoomIn" delay={200}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <WoodenLabelCTA text="年間カレンダーを見る" href="/care-guide" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-raked-sand">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <ScrollReveal animation="fadeUp">
            <div className="section-title">
              <h2>盆栽体験・ワークショップ</h2>
            </div>
            <p style={{ marginTop: '24px', marginBottom: '40px', lineHeight: '2' }}>
              苔庭庵では、土に触れ、樹と向き合う静かな時間を提供しています。<br />
              初心者の方も、道具を持たずにお気軽にご参加いただけます。
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <WoodenLabelCTA text="ワークショップ一覧を見る" href="/workshops" />
            </div>
            <p style={{ marginTop: '32px', fontSize: '13px', color: 'var(--stone-gray)', padding: '16px', border: '1px dashed rgba(156, 155, 150, 0.4)', borderRadius: '4px' }}>
              {siteData.disclaimers.workshopSafety}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--pine-black)', color: 'var(--warm-ivory)', backgroundImage: 'radial-gradient(circle at 50% 100%, rgba(82, 103, 67, 0.2) 0%, transparent 50%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal animation="fadeUp">
            <h2 style={{ color: 'var(--warm-ivory)', fontSize: '32px', marginBottom: '16px' }}>お問い合わせ</h2>
            <p style={{ marginBottom: '40px', color: 'var(--stone-gray-light)' }}>
              育て方の相談や、アトリエへのご質問はこちらから承ります。
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <WoodenLabelCTA text="お問い合わせフォームへ" href="/contact" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default HomeSections;
