import { useEffect, useRef, useState } from "react";
import doctorImg from "@assets/1740140174386-274160310_1779296683361.webp";
import reviewsImg from "@assets/reviews_1779296683360.jpeg";
import clinicalImg from "@assets/oardefault_1779296683359.jpg";

const WA_NUMBER = "916307228836";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sunrice%20IVF%20Center.`;
const EMAIL = "nitinshrivastava191@gmail.com";
const PHONE = "8630268144";

const UNSPLASH = {
  hero: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&q=80&auto=format&fit=crop",
  ivf: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80&auto=format&fit=crop",
  iui: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop",
  fertility: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80&auto=format&fit=crop",
  pregnancy: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80&auto=format&fit=crop",
  lab: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80&auto=format&fit=crop",
  womens: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80&auto=format&fit=crop",
  clinic1: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80&auto=format&fit=crop",
  clinic2: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=700&q=80&auto=format&fit=crop",
  clinic3: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=700&q=80&auto=format&fit=crop",
  clinic4: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&q=80&auto=format&fit=crop",
  clinic5: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80&auto=format&fit=crop",
  about: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop",
};

/* ─────────────────────────────────────────────────────────
   Reusable hidden-iframe form hook
   – posts to FormSubmit without navigating the React SPA
   – shows success immediately after submit
───────────────────────────────────────────────────────── */
function useIframeForm(iframeName: string) {
  const [success, setSuccess] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Let the form submit natively to the iframe; show success right away.
    setSuccess(true);
    setTimeout(() => {
      (e.currentTarget as HTMLFormElement).reset();
    }, 100);
  };

  const iframe = (
    <iframe
      ref={iframeRef}
      name={iframeName}
      title="form-target"
      style={{ display: "none" }}
    />
  );

  return { success, setSuccess, handleSubmit, iframe };
}

/* ──────────────────── Loader ──────────────────── */
function Loader({ done }: { done: boolean }) {
  return (
    <div id="page-loader" className={done ? "hidden" : ""}>
      <div className="loader-heart">🌸</div>
      <div className="loader-text">Sunrice IVF Center</div>
      <div className="loader-sub">Shahjahanpur · Advanced Fertility Care</div>
    </div>
  );
}

/* ──────────────────── Navbar ──────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Doctor", href: "#doctor" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar-custom" style={{ boxShadow: scrolled ? "0 4px 30px rgba(219,39,119,0.14)" : undefined }}>
        <div className="nav-container">
          <a className="navbar-brand-link" href="#home" onClick={close}>
            <span style={{ fontSize: "1.75rem", lineHeight: 1 }}>🌸</span>
            <div>
              <span className="navbar-brand-text">Sunrice IVF Center</span>
              <span className="navbar-brand-sub">Shahjahanpur</span>
            </div>
          </a>

          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`ham-line ${menuOpen ? "open" : ""}`} />
            <span className={`ham-line ${menuOpen ? "open" : ""}`} />
            <span className={`ham-line ${menuOpen ? "open" : ""}`} />
          </button>

          <div className={`nav-links-wrapper ${menuOpen ? "open" : ""}`}>
            <ul className="nav-links-list">
              {links.map((l) => (
                <li key={l.href}>
                  <a className="nav-link-custom" href={l.href} onClick={close}>{l.label}</a>
                </li>
              ))}
              <li>
                <a className="nav-link-custom nav-cta" href="#appointment" onClick={close}>
                  <i className="fas fa-calendar-check" /> Book Appointment
                </a>
              </li>
              <li>
                <a className="nav-link-custom nav-wa" href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={close}>
                  <i className="fab fa-whatsapp" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {menuOpen && <div className="nav-overlay" onClick={close} />}
    </>
  );
}

/* ──────────────────── Hero ──────────────────── */
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-image" style={{ backgroundImage: `url(${UNSPLASH.hero})` }} />
      <div className="hero-overlay" />
      <div className="container pos-rel">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-badge fade-in">
              <i className="fas fa-award" /> ICMR Registered · Trusted Fertility Centre
            </div>
            <h1 className="hero-title fade-in">
              Welcome to <span>Sunrice IVF Center</span> Shahjahanpur
            </h1>
            <p className="hero-subtitle fade-in">
              Advanced Fertility & IVF Care with Compassion — led by Dr. Shabina Khan, helping families achieve the dream of parenthood with world-class expertise.
            </p>
            <div className="hero-btns fade-in">
              <a href="#appointment" className="btn-primary-custom">
                <i className="fas fa-calendar-check" /> Book Appointment
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <i className="fab fa-whatsapp" /> WhatsApp Consultation
              </a>
            </div>
            <div className="hero-stats fade-in">
              {[
                { num: "2000+", label: "Happy Families" },
                { num: "98%", label: "Success Rate" },
                { num: "15+", label: "Years Exp." },
                { num: "24/7", label: "Support" },
              ].map((s) => (
                <div key={s.label} className="hero-stat-item">
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 d-none-mobile">
            <div className="hero-doc-card fade-in-right">
              <img src={doctorImg} alt="Dr. Shabina Khan" className="hero-doc-img" />
              <div className="hero-doc-info">
                <div className="hero-doc-name">Dr. Shabina Khan</div>
                <div className="hero-doc-role">MBBS, MS · IVF & Fertility Specialist</div>
                <div className="hero-doc-status">
                  <i className="fas fa-circle" style={{ fontSize: "0.45rem", marginRight: "0.3rem" }} /> Available for Consultation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── About ──────────────────── */
function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 fade-in-left">
            <div className="about-img-wrapper">
              <img src={reviewsImg} alt="Dr. Shabina Khan consulting a patient" className="about-main-img" />
              <div className="about-img-badge">
                <i className="fas fa-heart" style={{ color: "#db2777", fontSize: "1.25rem" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1rem" }}>2000+</div>
                  <div style={{ fontSize: "0.7rem", color: "#6b7280" }}>Happy Families</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 fade-in-right">
            <div className="section-badge"><i className="fas fa-heart" /> About Sunrice IVF</div>
            <h2 className="section-title">Turning Dreams into <span>Reality</span></h2>
            <p className="body-text mb-4">
              Sunrice IVF Center is Shahjahanpur's premier fertility clinic, committed to helping couples overcome infertility through advanced, compassionate care. Under the expert guidance of Dr. Shabina Khan, we blend cutting-edge reproductive technology with heartfelt support.
            </p>
            <div className="row g-3 mb-4">
              {[
                { icon: "🏥", title: "Our Mission", desc: "Compassionate, world-class fertility care accessible to every family." },
                { icon: "🌟", title: "Why Choose Us", desc: "State-of-the-art IVF lab, personalised plans, transparent pricing." },
                { icon: "💖", title: "Our Vision", desc: "Most trusted fertility centre in UP — internationally benchmarked." },
              ].map((c) => (
                <div key={c.title} className="col-sm-4">
                  <div className="about-mini-card">
                    <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{c.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#1f2937", marginBottom: "0.3rem" }}>{c.title}</div>
                    <div style={{ fontSize: "0.775rem", color: "#6b7280", lineHeight: 1.5 }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            {["ICMR Registered IVF Center", "ISO 9001:2015 Certified Clinic", "FOGSI Member · Advanced Embryology Lab", "15+ Years of Excellence in Fertility Care"].map((item) => (
              <div key={item} className="check-row">
                <i className="fas fa-check-circle" style={{ color: "#db2777" }} />
                <span style={{ fontSize: "0.9rem", color: "#374151" }}>{item}</span>
              </div>
            ))}
            <div className="mt-4">
              <a href="#appointment" className="btn-primary-custom">
                <i className="fas fa-calendar-check" /> Book Free Consultation
              </a>
            </div>
          </div>
        </div>

        <div className="row g-3 mt-5 fade-in">
          <div className="col-12 text-center mb-3">
            <div className="section-badge"><i className="fas fa-clock" /> Clinic Timings</div>
            <h3 className="section-title" style={{ fontSize: "1.75rem" }}>When We <span>Are Open</span></h3>
          </div>
          {[
            { day: "Mon – Fri", time: "8:00 AM – 8:00 PM", icon: "🗓️" },
            { day: "Saturday", time: "9:00 AM – 6:00 PM", icon: "🗓️" },
            { day: "Sunday", time: "10:00 AM – 2:00 PM", icon: "🗓️" },
            { day: "Emergency", time: "24 Hours Available", icon: "🚨" },
          ].map((t) => (
            <div key={t.day} className="col-6 col-md-3">
              <div className="timing-card text-center">
                <div style={{ fontSize: "1.75rem", marginBottom: "0.4rem" }}>{t.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#1f2937" }}>{t.day}</div>
                <div style={{ fontSize: "0.8rem", color: "#db2777", fontWeight: 600, marginTop: "0.2rem" }}>{t.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Doctor ──────────────────── */
function Doctor() {
  return (
    <section id="doctor" className="doctor-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-user-md" /> Our Expert</div>
          <h2 className="section-title">Meet <span>Dr. Shabina Khan</span></h2>
          <p className="section-desc">A compassionate fertility specialist with 15+ years of experience in reproductive medicine and IVF.</p>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 fade-in-left">
            <div className="doctor-photo-card">
              <img src={doctorImg} alt="Dr. Shabina Khan – IVF Specialist" className="doctor-real-img" />
              <div className="doctor-photo-badge">
                <i className="fas fa-award" style={{ color: "#db2777", fontSize: "1.1rem" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.8rem" }}>Hindustan Gaurav Samman</div>
                  <div style={{ fontSize: "0.7rem", color: "#6b7280" }}>Award Recipient</div>
                </div>
              </div>
              <div className="doctor-name-overlay">
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", fontWeight: 700, color: "white" }}>Dr. Shabina Khan</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.85)" }}>MBBS, MS · IVF & Infertility Specialist</div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 fade-in-right">
            <div className="section-badge"><i className="fas fa-star" /> Credentials</div>
            <h3 className="section-title" style={{ fontSize: "1.75rem" }}>15+ Years of <span>Excellence</span></h3>
            <p className="body-text mb-4">
              Dr. Shabina Khan is one of Uttar Pradesh's most respected fertility specialists. With over 15 years in reproductive medicine, she has helped thousands of couples achieve parenthood through personalised, evidence-based fertility treatments.
            </p>
            {[
              { icon: "fas fa-graduation-cap", label: "Qualification", value: "MBBS, MS (Obstetrics & Gynaecology), Fellowship in Reproductive Medicine" },
              { icon: "fas fa-briefcase-medical", label: "Experience", value: "15+ Years in Fertility, IVF & Reproductive Medicine" },
              { icon: "fas fa-microscope", label: "Specialisation", value: "IVF, IUI, ICSI, Egg Freezing, PCOS, Recurrent Pregnancy Loss" },
              { icon: "fas fa-hospital", label: "Training", value: "Advanced IVF Training – National & International Institutes" },
              { icon: "fas fa-award", label: "Recognition", value: "Hindustan Gaurav Samman Award · FOGSI Member" },
              { icon: "fas fa-phone", label: "Contact", value: `Call: ${PHONE} · Email: khanshabina21@gmail.com` },
            ].map((c) => (
              <div key={c.label} className="credential-item">
                <div className="credential-icon"><i className={c.icon} /></div>
                <div>
                  <div className="credential-label">{c.label}</div>
                  <div style={{ fontSize: "0.875rem", color: "#1f2937" }}>{c.value}</div>
                </div>
              </div>
            ))}
            <div className="flex-wrap-gap mt-4">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <i className="fab fa-whatsapp" /> WhatsApp Consultation
              </a>
              <a href={`tel:${PHONE}`} className="btn-outline-pink">
                <i className="fas fa-phone" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Services ──────────────────── */
function Services() {
  const services = [
    { img: UNSPLASH.ivf, title: "IVF Treatment", desc: "In-Vitro Fertilisation using the latest reproductive technologies with high success rates.", icon: "🧬" },
    { img: UNSPLASH.iui, title: "IUI Treatment", desc: "Intrauterine Insemination — a minimally invasive procedure ideal for couples with mild infertility.", icon: "💉" },
    { img: UNSPLASH.fertility, title: "Fertility Consultation", desc: "Comprehensive evaluation of both partners to diagnose infertility and create a personalised plan.", icon: "🤝" },
    { img: UNSPLASH.pregnancy, title: "Pregnancy Care", desc: "Complete antenatal care and high-risk pregnancy management for a safe journey.", icon: "🤰" },
    { img: UNSPLASH.lab, title: "Infertility Diagnosis", desc: "Advanced diagnostics including semen analysis, hormonal profiling, HSG, and genetic screening.", icon: "🔬" },
    { img: UNSPLASH.womens, title: "Women Health Care", desc: "Specialised care for endometriosis, PCOS, uterine fibroids, ovarian cysts, and more.", icon: "🩺" },
  ];
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-stethoscope" /> Our Services</div>
          <h2 className="section-title">Comprehensive <span>Fertility Services</span></h2>
          <p className="section-desc">World-class treatments tailored to your unique needs — all under one compassionate roof.</p>
        </div>
        <div className="row g-4">
          {services.map((s) => (
            <div key={s.title} className="col-md-6 col-lg-4 fade-in">
              <div className="service-card">
                <div className="service-img-wrap">
                  <img src={s.img} alt={s.title} className="service-img" loading="lazy" />
                  <div className="service-img-icon">{s.icon}</div>
                </div>
                <div className="service-body">
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc-text">{s.desc}</p>
                  <a href="#appointment" className="service-link">
                    Book Consultation <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Appointment Form ──────────────────── */
function Appointment() {
  const { success, setSuccess, handleSubmit, iframe } = useIframeForm("iframe_appt");

  return (
    <section id="appointment" className="appointment-section">
      {iframe}
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-calendar-check" /> Book Now</div>
          <h2 className="section-title">Book an <span>Appointment</span></h2>
          <p className="section-desc">Fill in your details and we'll confirm your appointment within 24 hours.</p>
        </div>

        {success && (
          <div className="success-banner fade-in">
            <i className="fas fa-check-circle" style={{ fontSize: "1.5rem", color: "#059669" }} />
            <div>
              <div style={{ fontWeight: 700, color: "#065f46" }}>Appointment Request Sent!</div>
              <div style={{ fontSize: "0.85rem", color: "#047857" }}>We'll contact you within 24 hours to confirm. You can also WhatsApp us for faster response.</div>
            </div>
            <button className="success-close" onClick={() => setSuccess(false)}>✕</button>
          </div>
        )}

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-4 fade-in-left">
            <div className="appt-info-panel">
              <img src={clinicalImg} alt="Dr. Shabina Khan clinical session" className="appt-info-img" />
              <h4 className="appt-info-heading">Why Book With Us?</h4>
              {[
                "Free initial fertility consultation",
                "Expert guidance from Dr. Shabina Khan",
                "Transparent treatment costs",
                "Flexible appointment timings",
                "Warm, supportive environment",
              ].map((item) => (
                <div key={item} className="check-row">
                  <i className="fas fa-check-circle" style={{ color: "#db2777" }} />
                  <span style={{ fontSize: "0.875rem", color: "#374151" }}>{item}</span>
                </div>
              ))}
              <div className="call-box mt-3">
                <div style={{ fontSize: "0.8rem", color: "#db2777", fontWeight: 700 }}>
                  <i className="fas fa-phone me-1" /> Call us directly
                </div>
                <a href={`tel:${PHONE}`} className="call-number">{PHONE}</a>
              </div>
            </div>
          </div>

          <div className="col-lg-8 fade-in-right">
            <div className="form-card">
              <form
                action={`https://formsubmit.co/${EMAIL}`}
                method="POST"
                target="iframe_appt"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_subject" value="New Appointment – Sunrice IVF Center Shahjahanpur" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-user me-1" style={{ color: "#db2777" }} /> Full Name *</label>
                    <input name="Full Name" type="text" className="form-control-custom" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-phone me-1" style={{ color: "#db2777" }} /> Phone Number *</label>
                    <input name="Phone Number" type="tel" className="form-control-custom" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-envelope me-1" style={{ color: "#db2777" }} /> Email</label>
                    <input name="Email" type="email" className="form-control-custom" placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-calendar me-1" style={{ color: "#db2777" }} /> Preferred Date *</label>
                    <input name="Preferred Date" type="date" className="form-control-custom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-stethoscope me-1" style={{ color: "#db2777" }} /> Service Needed</label>
                    <select name="Service" className="form-control-custom">
                      <option value="">Select a service</option>
                      <option>IVF Treatment</option>
                      <option>IUI Treatment</option>
                      <option>Fertility Consultation</option>
                      <option>Pregnancy Care</option>
                      <option>Infertility Diagnosis</option>
                      <option>Women Health Care</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-clock me-1" style={{ color: "#db2777" }} /> Preferred Time</label>
                    <select name="Preferred Time" className="form-control-custom">
                      <option value="">Select a time</option>
                      <option>Morning (8AM – 12PM)</option>
                      <option>Afternoon (12PM – 4PM)</option>
                      <option>Evening (4PM – 8PM)</option>
                    </select>
                  </div>
                  <div className="form-group form-full">
                    <label className="form-label-custom"><i className="fas fa-comment me-1" style={{ color: "#db2777" }} /> Message / Concern</label>
                    <textarea name="Message" className="form-control-custom" rows={3} placeholder="Briefly describe your concern or query..." style={{ resize: "vertical" }} />
                  </div>
                  <div className="form-group form-full">
                    <button type="submit" className="btn-primary-custom btn-full">
                      <i className="fas fa-paper-plane me-1" /> Submit Appointment Request
                    </button>
                    <p className="form-note">
                      <i className="fas fa-lock me-1" /> Your information is private and secure. We'll contact you within 24 hours.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Testimonials ──────────────────── */
function Testimonials() {
  const reviews = [
    { name: "Priya Sharma", loc: "Shahjahanpur", avatar: "P", text: "After 3 years of trying, Sunrice IVF Center gave us our little miracle. Dr. Shabina Khan is not just a doctor – she's an angel. The entire team was so supportive throughout our IVF journey.", rating: 5 },
    { name: "Rekha Gupta", loc: "Lucknow", avatar: "R", text: "The care and attention we received here was exceptional. Our IUI treatment was successful on the second attempt. The staff made us feel like family. Highly recommended!", rating: 5 },
    { name: "Sushma Verma", loc: "Bareilly", avatar: "S", text: "We traveled from Bareilly because a friend recommended Dr. Shabina Khan. Worth every kilometre! Professional, compassionate, and results-driven. We now have twins!", rating: 5 },
    { name: "Anjali Singh", loc: "Shahjahanpur", avatar: "A", text: "The clinic facilities are top-notch and the entire team from front desk to doctors is amazing. Dr. Khan explained everything clearly. Blessed to have found this centre.", rating: 5 },
    { name: "Meena Agarwal", loc: "Kanpur", avatar: "M", text: "After failed attempts elsewhere, Sunrice IVF Center gave us renewed hope. Their personalised approach made all the difference. Our baby girl is proof of their expertise!", rating: 5 },
    { name: "Kavita Rao", loc: "Hardoi", avatar: "K", text: "Excellent infrastructure, caring staff, and a doctor who truly listens. The transparency in treatment and pricing was refreshing. Our dream of becoming parents came true here.", rating: 5 },
  ];
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-heart" /> Patient Stories</div>
          <h2 className="section-title">Families We've <span>Helped</span></h2>
          <p className="section-desc">Real stories of hope, perseverance, and the joy of parenthood from our beloved patients.</p>
        </div>
        <div className="row g-4 mb-5">
          {reviews.map((r) => (
            <div key={r.name} className="col-md-6 col-lg-4 fade-in">
              <div className="testimonial-card">
                <div className="stars">{"★".repeat(r.rating)}</div>
                <p className="testimonial-text">"{r.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{r.avatar}</div>
                  <div>
                    <div className="author-name">{r.name}</div>
                    <div className="author-loc"><i className="fas fa-map-marker-alt me-1" />{r.loc}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="clinic-review-row fade-in">
          <img src={reviewsImg} alt="Dr. Shabina Khan with a happy patient" className="clinic-review-img" />
          <div className="clinic-review-caption">
            <i className="fas fa-quote-left" style={{ color: "#db2777", fontSize: "1.5rem", display: "block", marginBottom: "0.75rem" }} />
            <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", color: "#1f2937", fontStyle: "italic", lineHeight: 1.65 }}>
              "Every patient who walks through our doors becomes part of our family. We don't just treat — we care."
            </p>
            <div style={{ fontWeight: 700, color: "#db2777", marginTop: "0.75rem" }}>— Dr. Shabina Khan</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Patient Review Submission ──────────────────── */
function LeaveReview() {
  const { success, setSuccess, handleSubmit, iframe } = useIframeForm("iframe_review");

  return (
    <section id="leave-review" className="leave-review-section">
      {iframe}
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-star" /> Share Your Story</div>
          <h2 className="section-title">Leave a <span>Patient Review</span></h2>
          <p className="section-desc">Your experience matters — share your journey and help other families find hope.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 fade-in">
            {success && (
              <div className="success-banner" style={{ marginBottom: "1.5rem" }}>
                <i className="fas fa-heart" style={{ fontSize: "1.5rem", color: "#db2777" }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#065f46" }}>Thank you for sharing your story! 🌸</div>
                  <div style={{ fontSize: "0.85rem", color: "#047857" }}>Your review has been submitted and we'll share it on our website soon.</div>
                </div>
                <button className="success-close" onClick={() => setSuccess(false)}>✕</button>
              </div>
            )}
            <div className="form-card">
              <form
                action={`https://formsubmit.co/${EMAIL}`}
                method="POST"
                target="iframe_review"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_subject" value="New Patient Review – Sunrice IVF Center" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-user me-1" style={{ color: "#db2777" }} /> Your Name *</label>
                    <input name="Patient Name" type="text" className="form-control-custom" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-map-marker-alt me-1" style={{ color: "#db2777" }} /> City / Location *</label>
                    <input name="City" type="text" className="form-control-custom" placeholder="e.g. Shahjahanpur" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-stethoscope me-1" style={{ color: "#db2777" }} /> Treatment Received</label>
                    <select name="Treatment" className="form-control-custom">
                      <option value="">Select treatment</option>
                      <option>IVF Treatment</option>
                      <option>IUI Treatment</option>
                      <option>Fertility Consultation</option>
                      <option>Pregnancy Care</option>
                      <option>Infertility Diagnosis</option>
                      <option>Women Health Care</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-star me-1" style={{ color: "#db2777" }} /> Your Rating *</label>
                    <select name="Rating" className="form-control-custom" required>
                      <option value="">Select rating</option>
                      <option>⭐⭐⭐⭐⭐ (5 – Excellent)</option>
                      <option>⭐⭐⭐⭐ (4 – Very Good)</option>
                      <option>⭐⭐⭐ (3 – Good)</option>
                      <option>⭐⭐ (2 – Fair)</option>
                      <option>⭐ (1 – Poor)</option>
                    </select>
                  </div>
                  <div className="form-group form-full">
                    <label className="form-label-custom"><i className="fas fa-comment-dots me-1" style={{ color: "#db2777" }} /> Your Story / Review *</label>
                    <textarea name="Review" className="form-control-custom" rows={5} placeholder="Share your experience — how did Sunrice IVF Center help you? What was your journey like?" style={{ resize: "vertical" }} required />
                  </div>
                  <div className="form-group form-full">
                    <button type="submit" className="btn-primary-custom btn-full">
                      <i className="fas fa-heart me-1" /> Submit My Review
                    </button>
                    <p className="form-note">
                      <i className="fas fa-shield-alt me-1" /> Your review will be verified before being published on this website.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── FAQ ──────────────────── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "What is IVF and how does it work?", a: "IVF (In-Vitro Fertilisation) is a fertility treatment where eggs are retrieved from the ovaries and fertilised with sperm in a laboratory. The resulting embryos are cultured and the best one(s) are transferred to the uterus. It is recommended for couples who haven't conceived after 1-2 years of trying." },
    { q: "What is the success rate of IVF at Sunrice?", a: "Our IVF success rate is approximately 60-70% per cycle for women under 35. Success rates depend on factors like age, egg quality, sperm quality, and the underlying cause of infertility. Dr. Shabina Khan will discuss realistic expectations during your consultation." },
    { q: "How many IVF cycles will I need?", a: "Most couples achieve success within 2-3 cycles. However, every case is unique. Some couples succeed in the first cycle, while others may require more attempts. We'll create a personalised plan based on your medical profile." },
    { q: "Is IVF treatment painful?", a: "IVF involves daily hormone injections which can cause mild discomfort. The egg retrieval procedure is done under sedation, so you won't feel pain during it. Some women experience mild bloating or cramping. Our team ensures your comfort throughout." },
    { q: "What is the cost of IVF treatment?", a: "IVF costs vary depending on the protocol and any additional procedures required (e.g., ICSI, PGT). We believe in transparent pricing and will provide a detailed cost breakdown during your consultation. EMI options are also available." },
    { q: "How long does an IVF cycle take?", a: "A single IVF cycle typically takes 4-6 weeks from the start of medications to the embryo transfer. This includes stimulation (10-14 days), egg retrieval, fertilisation, embryo culture (3-5 days), and transfer." },
    { q: "Can IUI help if IVF is recommended?", a: "IUI (Intrauterine Insemination) is usually recommended before IVF for certain conditions like mild male factor infertility or unexplained infertility. Your doctor will recommend the most appropriate treatment after a thorough evaluation." },
    { q: "What should I bring to my first appointment?", a: "Please bring any previous fertility investigations, semen analysis reports, hormonal blood tests, ultrasound reports, and a list of current medications. Don't worry if you don't have all of these — we can conduct all necessary tests at our centre." },
  ];
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-question-circle" /> FAQs</div>
          <h2 className="section-title">Common <span>Questions</span></h2>
          <p className="section-desc">Everything you need to know about fertility treatments and our clinic.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9 fade-in">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{f.q}</span>
                  <i className={`faq-icon fas fa-chevron-${open === i ? "up" : "down"}`} />
                </button>
                <div className={`faq-answer ${open === i ? "open" : ""}`}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Gallery ──────────────────── */
function Gallery() {
  const items = [
    { img: UNSPLASH.clinic1, title: "IVF Laboratory", sub: "State-of-the-art embryology lab" },
    { img: UNSPLASH.clinic2, title: "Consultation Room", sub: "Private, comfortable consultations" },
    { img: UNSPLASH.clinic3, title: "Advanced Andrology", sub: "Cutting-edge diagnostic unit" },
    { img: UNSPLASH.clinic4, title: "Recovery Suite", sub: "Comfortable post-procedure rooms" },
    { img: UNSPLASH.clinic5, title: "Fertility Pharmacy", sub: "On-site medication dispensing" },
    { img: UNSPLASH.pregnancy, title: "Ultrasound Suite", sub: "High-resolution fertility scanning" },
  ];
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-images" /> Gallery</div>
          <h2 className="section-title">Our <span>Clinic Facilities</span></h2>
          <p className="section-desc">A world-class environment designed for your comfort, privacy, and best outcomes.</p>
        </div>
        <div className="row g-3">
          {items.map((item) => (
            <div key={item.title} className="col-6 col-md-4 fade-in">
              <div className="gallery-item">
                <img src={item.img} alt={item.title} className="gallery-img" loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-title">{item.title}</div>
                  <div className="gallery-overlay-sub">{item.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Staff ──────────────────── */
function Staff() {
  const staff = [
    { icon: "👩‍⚕️", bg: "linear-gradient(135deg,#fce7f3,#ede9fe)", name: "Sr. Nurse Kavita", role: "Head Nurse", desc: "15 years of nursing experience in reproductive medicine and patient care." },
    { icon: "🔬", bg: "linear-gradient(135deg,#ede9fe,#dbeafe)", name: "Dr. Rahul Verma", role: "Senior Embryologist", desc: "PhD in Embryology with expertise in ICSI, vitrification, and PGT." },
    { icon: "👨‍💼", bg: "linear-gradient(135deg,#dbeafe,#d1fae5)", name: "Mr. Arjun Mehta", role: "Patient Coordinator", desc: "Dedicated to ensuring every patient has a smooth, stress-free experience." },
    { icon: "👩‍💼", bg: "linear-gradient(135deg,#fef3c7,#fce7f3)", name: "Ms. Sunita Joshi", role: "Reception & Admin", desc: "Warm and helpful — always ready to assist with appointments and queries." },
  ];
  return (
    <section id="staff" className="staff-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-users" /> Our Team</div>
          <h2 className="section-title">Meet Our <span>Caring Team</span></h2>
          <p className="section-desc">A dedicated multidisciplinary team committed to your fertility journey.</p>
        </div>
        <div className="row g-4">
          {staff.map((s) => (
            <div key={s.name} className="col-sm-6 col-lg-3 fade-in">
              <div className="staff-card">
                <div className="staff-avatar" style={{ background: s.bg }}>{s.icon}</div>
                <div className="staff-name">{s.name}</div>
                <div className="staff-role">{s.role}</div>
                <p className="staff-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Contact ──────────────────── */
function Contact() {
  const { success, setSuccess, handleSubmit, iframe } = useIframeForm("iframe_contact");

  return (
    <section id="contact" className="contact-section">
      {iframe}
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-envelope" /> Contact Us</div>
          <h2 className="section-title">Get in <span>Touch</span></h2>
          <p className="section-desc">We're here to answer your questions and guide you towards the right treatment.</p>
        </div>
        <div className="row g-5">
          <div className="col-lg-5 fade-in-left">
            <div className="contact-info-card">
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "1.5rem" }}>Contact Details</h4>
              {[
                { icon: "fas fa-map-marker-alt", label: "Address", value: "निकट 100 फिटा मोड़, पीलीभीत बाईपास रोड बरेली, उत्तर प्रदेश" },
                { icon: "fas fa-phone", label: "Phone", value: PHONE },
                { icon: "fas fa-envelope", label: "Email", value: EMAIL },
                { icon: "fab fa-whatsapp", label: "WhatsApp", value: "6307228836" },
              ].map((c) => (
                <div key={c.label} className="contact-item">
                  <div className="contact-icon"><i className={c.icon} /></div>
                  <div>
                    <div className="contact-label">{c.label}</div>
                    <div className="contact-value">{c.value}</div>
                  </div>
                </div>
              ))}
              <div className="flex-wrap-gap mt-3">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: "0.875rem", padding: "0.7rem 1.25rem" }}>
                  <i className="fab fa-whatsapp" /> Open WhatsApp
                </a>
                <a href={`tel:${PHONE}`} className="btn-outline-pink" style={{ fontSize: "0.875rem", padding: "0.7rem 1.25rem" }}>
                  <i className="fas fa-phone" /> Call Now
                </a>
              </div>
            </div>
            <div className="map-container mt-4">
              <iframe
                title="Sunrice IVF Center Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57156.31867043551!2d79.8602!3d27.8773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399f71c2c9ab5a37%3A0x80f5df7b2e9ffcc4!2sShahjahanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="220" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="col-lg-7 fade-in-right">
            {success && (
              <div className="success-banner" style={{ marginBottom: "1.5rem" }}>
                <i className="fas fa-check-circle" style={{ fontSize: "1.5rem", color: "#059669" }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#065f46" }}>Message Sent!</div>
                  <div style={{ fontSize: "0.85rem", color: "#047857" }}>We'll reply within 24 hours. For faster response, please WhatsApp us.</div>
                </div>
                <button className="success-close" onClick={() => setSuccess(false)}>✕</button>
              </div>
            )}
            <div className="form-card">
              <form
                action={`https://formsubmit.co/${EMAIL}`}
                method="POST"
                target="iframe_contact"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_subject" value="New Contact Message – Sunrice IVF Center" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label-custom">Name *</label>
                    <input name="Name" type="text" className="form-control-custom" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom">Phone *</label>
                    <input name="Phone" type="tel" className="form-control-custom" placeholder="Your phone number" required />
                  </div>
                  <div className="form-group form-full">
                    <label className="form-label-custom">Email</label>
                    <input name="Email" type="email" className="form-control-custom" placeholder="your@email.com" />
                  </div>
                  <div className="form-group form-full">
                    <label className="form-label-custom">Message *</label>
                    <textarea name="Message" className="form-control-custom" rows={4} placeholder="How can we help you?" style={{ resize: "vertical" }} required />
                  </div>
                  <div className="form-group form-full">
                    <button type="submit" className="btn-primary-custom btn-full">
                      <i className="fas fa-paper-plane me-1" /> Send Message
                    </button>
                    <p className="form-note">
                      <i className="fas fa-lock me-1" /> Your information is private and secure.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Footer ──────────────────── */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
              <span style={{ fontSize: "2rem" }}>🌸</span>
              <div className="footer-brand">Sunrice IVF Center</div>
            </div>
            <p className="footer-desc">Shahjahanpur's most trusted fertility centre — bringing hope, science, and compassion together for every family's journey to parenthood.</p>
            <div className="social-icons">
              {[
                { icon: "fab fa-facebook-f", href: "https://facebook.com" },
                { icon: "fab fa-instagram", href: "https://instagram.com" },
                { icon: "fab fa-youtube", href: "https://youtube.com" },
                { icon: "fab fa-whatsapp", href: WA_URL },
              ].map(({ icon, href }) => (
                <a key={icon} href={href} className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <div className="footer-heading">Quick Links</div>
            {[["Home","#home"],["About","#about"],["Doctor","#doctor"],["Services","#services"],["Reviews","#testimonials"],["Contact","#contact"]].map(([l,h]) => (
              <a key={l} href={h} className="footer-link">{l}</a>
            ))}
          </div>
          <div className="col-6 col-lg-2">
            <div className="footer-heading">Services</div>
            {["IVF Treatment","IUI Treatment","Fertility Consult","Pregnancy Care","Women Health"].map((s) => (
              <a key={s} href="#services" className="footer-link">{s}</a>
            ))}
          </div>
          <div className="col-lg-4">
            <div className="footer-heading">Contact Information</div>
            {[
              { icon: "fas fa-map-marker-alt", text: "निकट 100 फिटा मोड़, पीलीभीत बाईपास रोड बरेली, उत्तर प्रदेश" },
              { icon: "fas fa-phone", text: PHONE },
              { icon: "fas fa-envelope", text: EMAIL },
              { icon: "fas fa-clock", text: "Mon–Fri: 8AM–8PM | Sat: 9AM–6PM" },
            ].map(({ icon, text }) => (
              <div key={text} className="footer-contact-item">
                <i className={icon} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-divider" />
        <p className="footer-copyright">
          © {year} Sunrice IVF Center Shahjahanpur. All rights reserved. | Designed with 🌸 for every family's dream.
        </p>
      </div>
    </footer>
  );
}

/* ──────────────────── Floating Buttons ──────────────────── */
function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <>
      <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="float-whatsapp" title="WhatsApp Consultation">
        <i className="fab fa-whatsapp" />
      </a>
      <button
        className={`back-to-top ${showTop ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up" />
      </button>
    </>
  );
}

/* ──────────────────── Root ──────────────────── */
export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaderDone(true), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loaderDone) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loaderDone]);

  return (
    <>
      <Loader done={loaderDone} />
      <Navbar />
      <Hero />
      <About />
      <Doctor />
      <Services />
      <Appointment />
      <Testimonials />
      <LeaveReview />
      <FAQ />
      <Staff />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}
