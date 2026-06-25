import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  // Scroll Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ms' ? 'en' : 'ms';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="app">
      {/* ─── HEADER ─── */}
      <header className="header">
        <div className="header-inner container">
          <div className="logo">
            <img src="/asssets/azam-auto-logo-nobg.png" alt="Azam Auto Logo" className="logo-img" />
          </div>
          <nav className="nav">
            <a href="#">{t('nav.home')}</a>
            <a href="#benefits">{t('nav.benefits')}</a>
            <a href="#steps">{t('nav.steps')}</a>
            <a href="#providers">{t('nav.providers')}</a>
            <a href="#installments">{t('nav.installments')}</a>
            <a href="#footer">{t('nav.contactUs')}</a>
          </nav>
          <div className="header-actions">
            <button className="lang-pill" onClick={toggleLanguage}>
              {i18n.language === 'ms' ? 'EN' : 'BM'}
            </button>
            <a href="https://api.whatsapp.com/send?phone=60166707288&text=Hai.%20Saya%20nak%20tanya%20tentang%20insurance" target="_blank" rel="noopener noreferrer" className="btn btn-yellow header-cta">{t('nav.question')}</a>
          </div>
        </div>
      </header>

      <main>
        {/* ─── HERO ─── */}
        <section className="hero">
          <video
            className="hero-video-bg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/asssets/bg.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>

          <div className="container hero-content-centered">
            <h1 className="hero-title-massive">AZAM AUTO BODY WORK &amp; SERVICES (M)<br />SDN BHD</h1>
            <p className="hero-sub-title">{t('hero.title')}</p>
            <p className="hero-desc">{t('app.description')}</p>
            <a href="https://api.whatsapp.com/send?phone=60166707288&text=Hai.%20Saya%20nak%20tanya%20tentang%20insurance" target="_blank" rel="noopener noreferrer" className="btn btn-yellow btn-large">{t('nav.quote')}</a>
            <p className="hero-note">{t('hero.note')}</p>
          </div>

          {/* ─── TRUST STRIP ─── */}
          <div className="trust-strip">
            <div className="container trust-strip-inner">
              <div className="trust-item">
                {/* Clock / fast icon */}
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{t('trust.fast')}</span>
              </div>
              <div className="trust-item">
                {/* Tag / free quote icon */}
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.59 13.41L13.42 20.58a2 2 0 01-2.83 0L3 13V3h10l7.59 7.59a2 2 0 010 2.82z" /><circle cx="7" cy="7" r="1" fill="currentColor" />
                </svg>
                <span>{t('trust.free')}</span>
              </div>
              <div className="trust-item">
                {/* Bell / notification icon */}
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
                </svg>
                <span>{t('trust.notify')}</span>
              </div>
            </div>
          </div>
        </section>



        {/* ─── BENEFITS ─── */}
        <section id="benefits" className="benefits-section">
          <div className="container">
            <div className="section-header">
              <h2>{t('benefits.title')}</h2>
            </div>
            <div className="card-grid">
              <div className="card">
                <div className="card-icon-wrap">
                  {/* Lightning / fast */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3>{t('benefits.b1_title')}</h3>
                <p>{t('benefits.b1_desc')}</p>
              </div>
              <div className="card">
                <div className="card-icon-wrap">
                  {/* Tag / free quote */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.59 13.41L13.42 20.58a2 2 0 01-2.83 0L3 13V3h10l7.59 7.59a2 2 0 010 2.82z" /><circle cx="7" cy="7" r="1" fill="currentColor" />
                  </svg>
                </div>
                <h3>{t('benefits.b2_title')}</h3>
                <p>{t('benefits.b2_desc')}</p>
              </div>
              <div className="card">
                <div className="card-icon-wrap">
                  {/* Credit card / flexible */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                </div>
                <h3>{t('benefits.b3_title')}</h3>
                <p>{t('benefits.b3_desc')}</p>
              </div>
              <div className="card">
                <div className="card-icon-wrap">
                  {/* Bell / notify */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
                  </svg>
                </div>
                <h3>{t('benefits.b4_title')}</h3>
                <p>{t('benefits.b4_desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── STEPS ─── */}
        <section id="steps" className="steps-section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2>{t('steps.title')}</h2>
            </div>
            <div className="steps-timeline">
              <div className="timeline-item animate-on-scroll">
                <div className="timeline-number">1</div>
                <div className="timeline-content">
                  <h3>{t('steps.s1_title')}</h3>
                  <p>{t('steps.s1_desc')}</p>
                </div>
              </div>
              <div className="timeline-item animate-on-scroll">
                <div className="timeline-number">2</div>
                <div className="timeline-content">
                  <h3>{t('steps.s2_title')}</h3>
                  <p>{t('steps.s2_desc')}</p>
                </div>
              </div>
              <div className="timeline-item animate-on-scroll">
                <div className="timeline-number">3</div>
                <div className="timeline-content">
                  <h3>{t('steps.s3_title')}</h3>
                  <p>{t('steps.s3_desc')}</p>
                </div>
              </div>
              <div className="timeline-item animate-on-scroll">
                <div className="timeline-number">4</div>
                <div className="timeline-content">
                  <h3>{t('steps.s4_title')}</h3>
                  <p>{t('steps.s4_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PROVIDERS ─── */}
        <section id="providers" className="providers-section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2>{t('providers.title')}</h2>
              <p className="providers-desc">{t('providers.desc')}</p>
            </div>
            <div className="providers-marquee-container animate-on-scroll">
              <div className="providers-marquee">
                {/* Set 1 */}
                <div className="provider-card">
                  <img src="/asssets/etiqa.png" alt="Etiqa Logo" className="provider-logo" />
                </div>
                <div className="provider-card">
                  <img src="/asssets/allianz.png" alt="Allianz Logo" className="provider-logo" />
                </div>
                <div className="provider-card">
                  <img src="/asssets/zurich.png" alt="Zurich Logo" className="provider-logo" />
                </div>
                <div className="provider-card">
                  <img src="/asssets/takaful.png" alt="Takaful Malaysia Logo" className="provider-logo" />
                </div>
                <div className="provider-card">
                  <img src="/asssets/kurnia.png" alt="Kurnia Logo" className="provider-logo" />
                </div>
                
                {/* Set 2 (Duplicate for infinite scroll) */}
                <div className="provider-card">
                  <img src="/asssets/etiqa.png" alt="Etiqa Logo" className="provider-logo" />
                </div>
                <div className="provider-card">
                  <img src="/asssets/allianz.png" alt="Allianz Logo" className="provider-logo" />
                </div>
                <div className="provider-card">
                  <img src="/asssets/zurich.png" alt="Zurich Logo" className="provider-logo" />
                </div>
                <div className="provider-card">
                  <img src="/asssets/takaful.png" alt="Takaful Malaysia Logo" className="provider-logo" />
                </div>
                <div className="provider-card">
                  <img src="/asssets/kurnia.png" alt="Kurnia Logo" className="provider-logo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INSTALLMENTS (Redesigned Premium Fintech) ─── */}
        <section id="installments" className="installments-section">
          {/* SVG Wave Divider */}
          <div className="wave-divider-top">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>

          {/* Ambient Glow Effects */}
          <div className="installments-bg-glow glow-1"></div>
          <div className="installments-bg-glow glow-2"></div>

          <div className="container installments-inner">
            <div className="installments-header animate-on-scroll">
              <span className="trust-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Pilihan Pembiayaan Dipercayai
              </span>
              <h2>{t('installments.title')}</h2>
              <p className="installments-desc">{t('installments.desc')}</p>
            </div>

            <div className="installment-cards-grid animate-on-scroll">
              <button className="installment-card" aria-label="SPayLater financing option">
                <div className="installment-card-inner">
                  <img src="/asssets/spaylater.png" alt="SPayLater Logo" className="payment-logo" loading="lazy" />
                </div>
              </button>

              <button className="installment-card" aria-label="Atome financing option">
                <div className="installment-card-inner">
                  <img src="/asssets/atome.png" alt="Atome Logo" className="payment-logo" loading="lazy" />
                </div>
              </button>

              <button className="installment-card" aria-label="Direct Lending financing option">
                <div className="installment-card-inner">
                  <img src="/asssets/directlending.png" alt="Direct Lending Logo" className="payment-logo" loading="lazy" />
                </div>
              </button>
            </div>

            <div className="installments-benefits animate-on-scroll">
              <div className="benefit-pill">
                <div className="benefit-icon-wrapper">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Kelulusan Pantas</span>
              </div>
              <div className="benefit-pill">
                <div className="benefit-icon-wrapper">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Ansuran Fleksibel</span>
              </div>
              <div className="benefit-pill">
                <div className="benefit-icon-wrapper">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Proses Mudah</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── STRONG CTA ─── */}
        <section className="cta-section">
          <div className="container cta-inner animate-on-scroll">
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.desc')}</p>
            <div className="cta-actions">
              <a href="https://api.whatsapp.com/send?phone=60166707288&text=Hai.%20Saya%20nak%20tanya%20tentang%20insurance" target="_blank" rel="noopener noreferrer" className="btn btn-yellow btn-large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                {t('cta.btn1')}
              </a>
              <a href="https://api.whatsapp.com/send?phone=60166707288&text=Hai.%20Saya%20nak%20tanya%20tentang%20insurance" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-large">
                {t('cta.btn2')}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="footer" id="footer">
        <div className="container footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col footer-brand">
            <div className="footer-logo-wrap">
              <img
                src="/asssets/azam-auto-logo-nobg.png"
                alt="Azam Auto Logo"
                className="footer-logo"
              />
            </div>
            <p className="footer-tagline">{t('footer.subtitle')}</p>
            <div className="footer-socials">
              <a href="https://www.tiktok.com/@azamautohqkubangkerian" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="TikTok">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.13V9.5a7.21 7.21 0 0 0-1-.07 7.24 7.24 0 0 0-7.23 7.24 7.24 7.24 0 0 0 7.23 7.25 7.24 7.24 0 0 0 7.24-7.25V7.87a9.66 9.66 0 0 0 5.02 1.5v-3.3a4.81 4.81 0 0 1-2.04-.63z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100067465844743" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://api.whatsapp.com/send?phone=60166707288&text=Hai.%20Saya%20nak%20tanya%20tentang%20insurance" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t('footer.contactUs')}</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="footer-contact-icon">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>Lot 1966a, Jalan Wakaf Stan, Kubang Kerian, 16150 Kota Bharu, Kelantan.</span>
              </div>
              <div className="footer-contact-item align-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="footer-contact-icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="footer-phones">
                  <a href="tel:+60172525306">+60 17-252 5306</a>
                  <span className="phone-sep">|</span>
                  <a href="tel:+60192752637">+60 19-275 2637</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="footer-contact-icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:adminhq@aabwsb.com">adminhq@aabwsb.com</a>
              </div>

              {/* Operating Hours */}
              <div className="footer-hours">
                <span className="footer-hours-label">{t('footer.opHours')}</span>
                <p><strong>{t('footer.days1')}</strong> 9:30 AM – 6:00 PM</p>
                <p><strong>{t('footer.days2')}</strong> <span className="text-accent">{t('footer.closed')}</span></p>
              </div>
            </div>
          </div>

          {/* Column 3: Map */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t('footer.findUs')}</h4>
            <div className="footer-map">
              <iframe
                src="https://maps.google.com/maps?q=Azam%20Auto%20Body%20Work%20%26%20Services%20(M)%20Sdn%20Bhd%20Kubang%20Kerian&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AZAM AUTO BODYWORKS &amp; SERVICES (M) SDN BHD. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
