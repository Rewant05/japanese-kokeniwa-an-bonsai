import React from 'react';
import { Link } from 'react-router-dom';
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
              <h2>ç›†æ ½ã‚’å§‹ã‚ã‚‹</h2>
              <p>åˆã‚ã¦ã®æ–¹ã«ãŠã™ã™ã‚ã®ä»£è¡¨çš„ãªæ¨¹ç¨®ã‚’ã”ç´¹ä»‹ã—ã¾ã™ã€‚</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '50px' }}>
            {siteData.bonsaiGuides.slice(0, 3).map((guide, idx) => (
              <ScrollReveal key={idx} animation="fadeUp" delay={idx * 150}>
                <BonsaiCard {...guide} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="zoomIn" delay={200}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/guide">
                <WoodenLabelCTA text="ã™ã¹ã¦ã®ç›†æ ½ã‚¬ã‚¤ãƒ‰ã‚’è¦‹ã‚‹" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--warm-ivory)' }}>
        <div className="container">
          <ScrollReveal animation="fadeUp">
            <div className="section-title">
              <h2>å­£ç¯€ã®æ‰‹å…¥ã‚Œ</h2>
              <p>å°ã•ãªåº­ã«ã‚‚ã€å››å­£ã®ç§»ã‚ã„ãŒã‚ã‚Šã¾ã™ã€‚</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '50px' }}>
            {siteData.careCalendar.slice(0, 2).map((season, idx) => (
              <ScrollReveal key={idx} animation="fadeUp" delay={idx * 200}>
                <CareCalendarCard index={idx} {...season} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="zoomIn" delay={200}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/calendar">
                <WoodenLabelCTA text="å¹´é–“ã‚«ãƒ¬ãƒ³ãƒ€ãƒ¼ã‚’è¦‹ã‚‹" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-raked-sand">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <ScrollReveal animation="fadeUp">
            <div className="section-title">
              <h2>ç›†æ ½ä½“é¨“ãƒ»ãƒ¯ãƒ¼ã‚¯ã‚·ãƒ§ãƒƒãƒ—</h2>
            </div>
            <p style={{ marginTop: '24px', marginBottom: '40px', lineHeight: '2' }}>
              è‹”åº­åºµã§ã¯ã€åœŸã«è§¦ã‚Œã€æ¨¹ã¨å‘ãåˆã†é™ã‹ãªæ™‚é–“ã‚’æä¾›ã—ã¦ã„ã¾ã™ã€‚<br />
              åˆå¿ƒè€…ã®æ–¹ã‚‚ã€é“å…·ã‚’æŒãŸãšã«ãŠæ°—è»½ã«ã”å‚åŠ ã„ãŸã ã‘ã¾ã™ã€‚
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/workshop">
                <WoodenLabelCTA text="ãƒ¯ãƒ¼ã‚¯ã‚·ãƒ§ãƒƒãƒ—ä¸€è¦§ã‚’è¦‹ã‚‹" />
              </Link>
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
            <h2 style={{ color: 'var(--warm-ivory)', fontSize: '32px', marginBottom: '16px' }}>ãŠå•ã„åˆã‚ã›</h2>
            <p style={{ marginBottom: '40px', color: 'var(--stone-gray-light)' }}>
              è‚²ã¦æ–¹ã®ç›¸è«‡ã‚„ã€ã‚¢ãƒˆãƒªã‚¨ã¸ã®ã”è³ªå•ã¯ã“ã¡ã‚‰ã‹ã‚‰æ‰¿ã‚Šã¾ã™ã€‚
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/contact">
                <WoodenLabelCTA text="ãŠå•ã„åˆã‚ã›ãƒ•ã‚©ãƒ¼ãƒ ã¸" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default HomeSections;
