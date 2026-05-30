import { useEffect, useRef, useState } from "react";
import logoImg from "@assets/logo_sunrise_main.png";
import drShabinaImg from "@assets/dr_shabina_khan_1779703319427.webp";
import drRehanImg from "@assets/dr_rehan_1779703276874.jpeg";
import reviewsImg from "@assets/reviews_1779296683360.jpeg";
import clinicalImg from "@assets/oardefault_1779296683359.jpg";
import drShabinaNewImg from "@assets/dr_shabina_khan_1779712349240.PNG";
import drKhanImg from "@assets/dr_khan_1779712370826.PNG";
import avatarImg from "@assets/avatar_1779713189931.png";
import ultrasoundImg from "@assets/ultrasound_1779650535242.jpeg";
import iuiWorkstationImg from "@assets/I_U_I_work_station_1779650535243.jpeg";
import machineImg from "@assets/mechine_1779650535243.jpeg";
import machineTwoImg from "@assets/mechine_two_1779650535244.jpeg";
import machineThreeImg from "@assets/mechine_three_1779650535244.jpeg";
import ivfPicImg from "@assets/ivf_pic_1780134687573.png";
import iuiTreatmentImg from "@assets/IUI_Treatment_1780134687575.jpeg";
import fertilityConsultImg from "@assets/Fertility_Consultation_1780134687575.jpeg";
import pregnancyCareImg from "@assets/Pregnancy_Care_1780134687574.jpeg";
import infertilityDiagImg from "@assets/Infertility_Diagnosis_1780134687574.jpeg";
import womenHealthImg from "@assets/women_health_care_1780134687573.jpeg";
import clinicPhoto1 from "@assets/WhatsApp_Image_2026-05-30_at_15.05.51_1780135127340.jpeg";
import clinicPhoto2 from "@assets/WhatsApp_Image_2026-05-30_at_15.05.49_1780135127340.jpeg";
import clinicPhoto3 from "@assets/WhatsApp_Image_2026-05-30_at_15.05.47_1780135127341.jpeg";
import clinicPhoto4 from "@assets/WhatsApp_Image_2026-05-30_at_15.05.47_(1)_1780135127341.jpeg";
import clinicPhoto5 from "@assets/WhatsApp_Image_2026-05-30_at_15.05.46_1780135127342.jpeg";
import clinicPhoto6 from "@assets/WhatsApp_Image_2026-05-30_at_15.05.45_1780135127342.jpeg";
import clinicPhoto7 from "@assets/WhatsApp_Image_2026-05-30_at_15.05.42_1780135127343.jpeg";
import clinicPhoto8 from "@assets/WhatsApp_Image_2026-05-30_at_15.05.40_1780135127343.jpeg";

const WA_NUMBER = "918279612861";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sunrise%20IVF%20Center.`;
const EMAIL = "sunriseshahjahanpur@gmail.com";
const PHONE = "8279612861";
const PHONE2 = "8279683949";
const FB_URL = "https://www.facebook.com/profile.php?id=61588657432206&sk=reels_tab";
const IG_URL = "https://www.instagram.com/sunrise_ivf_shahjahanpur?igsh=bnRudnowajM4aDFl";
const MAPS_LINK = "https://maps.app.goo.gl/2pTCzudTQX1qamH66";
const MAPS_EMBED = "https://www.google.com/maps?q=Sunrise+IVF+Centre+Azizganj+Shahjahanpur+Uttar+Pradesh+242001&output=embed";
const FEMALE_AVATAR = avatarImg;

const UNSPLASH = {
  hero: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&q=80&auto=format&fit=crop",
  ivf: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80&auto=format&fit=crop",
  iui: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop",
  fertility: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80&auto=format&fit=crop",
  pregnancy: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80&auto=format&fit=crop",
  lab: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80&auto=format&fit=crop",
  womens: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80&auto=format&fit=crop",
};

/* ─────────────────────────────────────────────────────────
   Google Apps Script form hook.
   Uses Content-Type: text/plain to bypass CORS preflight.
───────────────────────────────────────────────────────── */
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbyKcSUgy0HEb0RhxiJNYpPJwBfS1qMJvQhu21u2xDLiSvv8YaP44samY0QgG9D7YIM/exec";

function useAjaxForm(formType: string) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    const data = new FormData(form);
    const payload: Record<string, string> = { formType };
    data.forEach((v, k) => { payload[k] = v.toString(); });
    try {
      await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return { status, setStatus, handleSubmit };
}

/* ──────────────────── Loader ──────────────────── */
function Loader({ done }: { done: boolean }) {
  return (
    <div id="page-loader" className={done ? "hidden" : ""}>
      <div className="loader-heart">
        <img src={logoImg} alt="Sunrise IVF Center" style={{ width: 180, height: 180, objectFit: "contain" }} />
      </div>
      <div className="loader-text">Sunrise IVF Center</div>
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
            <img src={logoImg} alt="Sunrise IVF Center Logo" style={{ height: 50, width: 50, objectFit: "contain", flexShrink: 0 }} />
            <div>
              <span className="navbar-brand-text">Sunrise IVF Center</span>
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
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge fade-in">
              <i className="fas fa-award" /> Trusted Fertility Centre · Shahjahanpur
            </div>
            <h1 className="hero-title fade-in">
              Welcome to <span>Sunrise IVF Center</span> Shahjahanpur
            </h1>
            <p className="hero-subtitle fade-in">
              Advanced Fertility &amp; IVF Care with Compassion — led by Dr. Shabina Khan, helping families achieve the dream of parenthood.
            </p>
            <div className="hero-btns fade-in">
              <a href="#appointment" className="btn-primary-custom">
                <i className="fas fa-calendar-check" /> Book Appointment
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <i className="fab fa-whatsapp" /> WhatsApp Us
              </a>
            </div>
            <div className="hero-stats fade-in">
              {[
                { num: "2000+", label: "Happy Families" },
                { num: "High", label: "Success Rate" },
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
          <div className="hero-doc-side">
            <div className="hero-doc-card fade-in-right">
              <img src={drShabinaImg} alt="Dr. Shabina Khan" className="hero-doc-img" />
              <div className="hero-doc-info">
                <div className="hero-doc-name">Dr. Shabina Khan</div>
                <div className="hero-doc-role">MBBS, MS · IVF &amp; Fertility Specialist</div>
                <div className="hero-doc-status">
                  <span className="status-dot" /> Available for Consultation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Animated Counters ──────────────────── */
function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function Counters() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { target: 2000, suffix: "+", label: "Happy Families", icon: "fas fa-heart", color: "#db2777", isText: false },
    { target: 0, suffix: "HIGH", label: "Success Rate", icon: "fas fa-chart-line", color: "#7c3aed", isText: true },
    { target: 15, suffix: "+", label: "Years of Excellence", icon: "fas fa-award", color: "#2563eb", isText: false },
    { target: 5000, suffix: "+", label: "Consultations Done", icon: "fas fa-user-md", color: "#059669", isText: false },
    { target: 24, suffix: "/7", label: "Patient Support", icon: "fas fa-headset", color: "#d97706", isText: false },
    { target: 100, suffix: "%", label: "Transparent Pricing", icon: "fas fa-shield-alt", color: "#dc2626", isText: false },
  ];

  const c0 = useCountUp(stats[0].target, 2000, active);
  const c2 = useCountUp(stats[2].target, 1500, active);
  const c3 = useCountUp(stats[3].target, 2200, active);
  const c4 = useCountUp(stats[4].target, 1200, active);
  const c5 = useCountUp(stats[5].target, 1600, active);
  const counts = [c0, 0, c2, c3, c4, c5];

  return (
    <section className="counters-section" ref={ref}>
      <div className="counters-bg" />
      <div className="container pos-rel">
        <div className="text-center mb-4 fade-in">
          <div className="section-badge section-badge-light"><i className="fas fa-star" /> Our Track Record</div>
          <h2 className="section-title" style={{ color: "white" }}>Numbers That <span style={{ WebkitTextFillColor: "transparent", background: "linear-gradient(135deg,#fce7f3,#e879f9)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>Speak for Themselves</span></h2>
          <p className="section-desc" style={{ color: "rgba(255,255,255,0.8)" }}>Every number represents a life changed, a dream fulfilled, a family completed.</p>
        </div>

        {/* Trust Indicators Card */}
        <div className="fade-in" style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
          <div style={{
            background: "white",
            borderRadius: "1.25rem",
            padding: "1.75rem 2.5rem",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            maxWidth: 420,
            width: "100%",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>☀️</div>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", color: "#1f2937", marginBottom: "1rem" }}>Trust Indicators</div>
            {[
              "FOGSI Member · Advanced Embryology Lab",
              "15+ Years of Excellence in Fertility Care",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.55rem", textAlign: "left" }}>
                <i className="fas fa-check-circle" style={{ color: "#db2777", fontSize: "0.95rem", flexShrink: 0 }} />
                <span style={{ fontSize: "0.875rem", color: "#374151", lineHeight: 1.45 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="counters-grid fade-in">
          {stats.map((s, i) => (
            <div key={s.label} className="counter-card">
              <div className="counter-icon-wrap" style={{ background: `${s.color}22` }}>
                <i className={s.icon} style={{ color: s.color }} />
              </div>
              <div className="counter-num">
                {s.isText ? <span>{s.suffix}</span> : <>{counts[i]}<span className="counter-suffix">{s.suffix}</span></>}
              </div>
              <div className="counter-label">{s.label}</div>
            </div>
          ))}
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
        <div className="two-col-grid">
          <div className="fade-in-left">
            <div className="about-img-wrapper">
              <img src={drShabinaNewImg} alt="Dr. Shabina Khan consulting a patient" className="about-main-img" />
              <div className="about-img-badge">
                <i className="fas fa-heart" style={{ color: "#db2777", fontSize: "1.25rem" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1rem" }}>2000+</div>
                  <div style={{ fontSize: "0.7rem", color: "#6b7280" }}>Happy Families</div>
                </div>
              </div>
            </div>
          </div>
          <div className="fade-in-right">
            <div className="section-badge"><i className="fas fa-heart" /> About Sunrise IVF</div>
            <h2 className="section-title">Turning Dreams into <span>Reality</span></h2>
            <p className="body-text mb-4">
              Sunrise IVF Center is Shahjahanpur's premier fertility clinic, committed to helping couples overcome infertility through advanced, compassionate care. Under the expert guidance of Dr. Shabina Khan, we blend cutting-edge reproductive technology with heartfelt support.
            </p>
            <div className="mini-cards-grid mb-4">
              {[
                { icon: "🏥", title: "Our Mission", desc: "Compassionate, world-class fertility care accessible to every family." },
                { icon: "🌟", title: "Why Choose Us", desc: "State-of-the-art IVF lab, personalised plans, transparent pricing." },
                { icon: "💖", title: "Our Vision", desc: "Most trusted fertility centre in UP — internationally benchmarked." },
              ].map((c) => (
                <div key={c.title} className="about-mini-card">
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{c.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#1f2937", marginBottom: "0.3rem" }}>{c.title}</div>
                  <div style={{ fontSize: "0.775rem", color: "#6b7280", lineHeight: 1.5 }}>{c.desc}</div>
                </div>
              ))}
            </div>
            {["FOGSI Member · Advanced Embryology Lab", "15+ Years of Excellence in Fertility Care", "Expert Multidisciplinary Medical Team"].map((item) => (
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

        {/* Timing inline — shown as a compact banner below about content */}
        <div className="fade-in mt-5" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.75rem",
            background: "linear-gradient(135deg,#fce7f3,#ede9fe)",
            border: "1px solid #fce7f3",
            borderRadius: "3rem",
            padding: "0.7rem 1.75rem",
            fontSize: "0.9rem",
            color: "#1f2937",
          }}>
            <i className="fas fa-clock" style={{ color: "#db2777" }} />
            <span style={{ fontWeight: 600 }}>Open Every Day:</span>
            <span style={{ color: "#db2777", fontWeight: 700 }}>10:00 AM – 6:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Services ──────────────────── */
function Services() {
  const services = [
    { img: ivfPicImg, title: "IVF Treatment", desc: "In-Vitro Fertilisation using the latest reproductive technologies with excellent clinical outcomes.", icon: "🧬" },
    { img: iuiTreatmentImg, title: "IUI Treatment", desc: "Intrauterine Insemination — a minimally invasive procedure ideal for couples with mild infertility.", icon: "💉" },
    { img: fertilityConsultImg, title: "Fertility Consultation", desc: "Comprehensive evaluation of both partners to diagnose infertility and create a personalised plan.", icon: "🤝" },
    { img: pregnancyCareImg, title: "Pregnancy Care", desc: "Complete antenatal care and high-risk pregnancy management for a safe journey.", icon: "🤰" },
    { img: infertilityDiagImg, title: "Infertility Diagnosis", desc: "Advanced diagnostics including semen analysis, hormonal profiling, HSG, and genetic screening.", icon: "🔬" },
    { img: womenHealthImg, title: "Women Health Care", desc: "Specialised care for endometriosis, PCOS, uterine fibroids, ovarian cysts, and more.", icon: "🩺" },
  ];
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-stethoscope" /> Our Services</div>
          <h2 className="section-title">Comprehensive <span>Fertility Services</span></h2>
          <p className="section-desc">World-class treatments tailored to your unique needs — all under one compassionate roof.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card fade-in">
              <div className="service-img-wrap">
                <img src={s.img} alt={s.title} className="service-img" loading="lazy" />
                <div className="service-img-icon">{s.icon}</div>
              </div>
              <div className="service-body">
                <p className="service-desc-text">{s.desc}</p>
                <a href="#appointment" className="service-link">
                  Book Consultation <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Clinic Photo Gallery ──────────────────── */
function ClinicGallery() {
  const [lightbox, setLightbox] = useState<{ img: string; title: string } | null>(null);
  const photos = [
    { img: clinicPhoto1, title: "Reception" },
    { img: clinicPhoto2, title: "Pharmacy" },
    { img: clinicPhoto3, title: "Waiting Area" },
    { img: clinicPhoto4, title: "Consultation Room" },
    { img: clinicPhoto5, title: "Clinic Exterior" },
    { img: clinicPhoto6, title: "Corridor" },
    { img: clinicPhoto7, title: "Doctor's Room" },
    { img: clinicPhoto8, title: "Doctor's Cabin Entrance" },
  ];
  return (
    <section id="clinic-gallery" className="gallery-section" style={{ background: "#fdf8ff" }}>
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-images" /> Our Clinic</div>
          <h2 className="section-title">Inside <span>Sunrise IVF Centre</span></h2>
          <p className="section-desc">A welcoming, modern environment designed with your comfort and care in mind.</p>
        </div>
        <div className="gallery-grid">
          {photos.map((p) => (
            <div key={p.title} className="gallery-item fade-in" onClick={() => setLightbox(p)} style={{ cursor: "pointer" }}>
              <img src={p.img} alt={p.title} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-overlay-title">{p.title}</div>
                <div style={{ marginTop: "0.4rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.75)" }}>
                  <i className="fas fa-search-plus me-1" /> Click to enlarge
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.90)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", backdropFilter: "blur(4px)" }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", maxWidth: 720, width: "100%", borderRadius: "1rem", overflow: "hidden" }}>
            <img src={lightbox.img} alt={lightbox.title} style={{ width: "100%", maxHeight: "80vh", objectFit: "contain", display: "block", background: "#0a0a0a" }} />
            <div style={{ padding: "1rem 1.5rem", background: "rgba(0,0,0,0.7)" }}>
              <div style={{ fontWeight: 700, color: "white", fontSize: "1.05rem" }}>{lightbox.title}</div>
            </div>
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(0,0,0,0.6)", border: "none", color: "white", width: 36, height: 36, borderRadius: "50%", fontSize: "1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            >✕</button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ──────────────────── Form status helpers ──────────────────── */
function FormSuccess({ msg, onClose }: { msg: string; onClose: () => void }) {
  return (
    <div className="form-status success-banner">
      <i className="fas fa-check-circle" style={{ fontSize: "1.4rem", color: "#059669", flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, color: "#065f46" }}>Sent Successfully!</div>
        <div style={{ fontSize: "0.83rem", color: "#047857", marginTop: "0.2rem" }}>{msg}</div>
      </div>
      <button className="status-close" onClick={onClose}>✕</button>
    </div>
  );
}
function FormError({ onClose }: { onClose: () => void }) {
  return (
    <div className="form-status error-banner">
      <i className="fas fa-exclamation-circle" style={{ fontSize: "1.4rem", color: "#dc2626", flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, color: "#7f1d1d" }}>Couldn't send right now</div>
        <div style={{ fontSize: "0.83rem", color: "#991b1b", marginTop: "0.2rem" }}>
          Please try again, or{" "}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#25d366", fontWeight: 700 }}>
            <i className="fab fa-whatsapp" /> WhatsApp us directly
          </a>.
        </div>
      </div>
      <button className="status-close" onClick={onClose}>✕</button>
    </div>
  );
}

/* ──────────────────── Appointment Form ──────────────────── */
function Appointment() {
  const { status, setStatus, handleSubmit } = useAjaxForm("appointment");

  return (
    <section id="appointment" className="appointment-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-calendar-check" /> Book Now</div>
          <h2 className="section-title">Book an <span>Appointment</span></h2>
          <p className="section-desc">Fill in your details and we'll confirm your appointment within 24 hours.</p>
        </div>

        <div className="appt-grid">
          <div className="appt-info-panel fade-in-left">
            <img src={drKhanImg} alt="Dr. Shabina Khan with patient" className="appt-info-img" />
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
              <a href={`tel:${PHONE2}`} className="call-number" style={{ marginTop: "0.25rem", fontSize: "0.95rem" }}>{PHONE2}</a>
            </div>
          </div>

          <div className="fade-in-right">
            {status === "success" && <FormSuccess msg="We'll contact you within 24 hours to confirm your appointment." onClose={() => setStatus("idle")} />}
            {status === "error" && <FormError onClose={() => setStatus("idle")} />}
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-user me-1 pink" /> Full Name *</label>
                    <input name="fullName" type="text" className="form-control-custom" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-phone me-1 pink" /> Phone Number *</label>
                    <input name="phoneNumber" type="tel" className="form-control-custom" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-envelope me-1 pink" /> Email</label>
                    <input name="email" type="email" className="form-control-custom" placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-calendar me-1 pink" /> Preferred Date *</label>
                    <input name="preferredDate" type="date" className="form-control-custom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom"><i className="fas fa-stethoscope me-1 pink" /> Service Needed</label>
                    <select name="serviceNeeded" className="form-control-custom">
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
                    <label className="form-label-custom"><i className="fas fa-clock me-1 pink" /> Preferred Time</label>
                    <select name="preferredTime" className="form-control-custom">
                      <option value="">Select a time</option>
                      <option>Morning (8AM – 12PM)</option>
                      <option>Afternoon (12PM – 4PM)</option>
                      <option>Evening (4PM – 8PM)</option>
                    </select>
                  </div>
                  <div className="form-group form-full">
                    <label className="form-label-custom"><i className="fas fa-comment me-1 pink" /> Message / Concern</label>
                    <textarea name="messageConcern" className="form-control-custom" rows={3} placeholder="Briefly describe your concern..." style={{ resize: "vertical" }} />
                  </div>
                  <div className="form-group form-full">
                    <button type="submit" className="btn-primary-custom btn-full" disabled={status === "loading"}>
                      {status === "loading" ? <><i className="fas fa-spinner fa-spin me-1" /> Sending…</> : <><i className="fas fa-paper-plane me-1" /> Submit Appointment Request</>}
                    </button>
                    <p className="form-note"><i className="fas fa-lock me-1" /> Your information is private and secure.</p>
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
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-heart" /> Patient Stories</div>
          <h2 className="section-title">Families We've <span>Helped</span></h2>
          <p className="section-desc">Real stories of hope, perseverance, and the joy of parenthood from our beloved patients.</p>
        </div>
        <div className="clinic-review-row fade-in">
          <img src={drKhanImg} alt="Dr. Shabina Khan with a patient" className="clinic-review-img" />
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
  const { status, setStatus, handleSubmit } = useAjaxForm("review");

  return (
    <section id="leave-review" className="leave-review-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-star" /> Share Your Story</div>
          <h2 className="section-title">Leave a <span>Patient Review</span></h2>
          <p className="section-desc">Your experience matters — share your journey and help other families find hope.</p>
        </div>
        <div className="review-form-wrap fade-in">
          {status === "success" && <FormSuccess msg="Thank you for sharing your story! We'll publish your review after verification. 🌸" onClose={() => setStatus("idle")} />}
          {status === "error" && <FormError onClose={() => setStatus("idle")} />}
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label-custom"><i className="fas fa-user me-1 pink" /> Your Name *</label>
                  <input name="yourName" type="text" className="form-control-custom" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label className="form-label-custom"><i className="fas fa-map-marker-alt me-1 pink" /> City / Location *</label>
                  <input name="cityLocation" type="text" className="form-control-custom" placeholder="e.g. Shahjahanpur" required />
                </div>
                <div className="form-group">
                  <label className="form-label-custom"><i className="fas fa-stethoscope me-1 pink" /> Treatment Received</label>
                  <select name="treatmentReceived" className="form-control-custom">
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
                  <label className="form-label-custom"><i className="fas fa-star me-1 pink" /> Your Rating *</label>
                  <select name="yourRating" className="form-control-custom" required>
                    <option value="">Select rating</option>
                    <option>⭐⭐⭐⭐⭐ (5 – Excellent)</option>
                    <option>⭐⭐⭐⭐ (4 – Very Good)</option>
                    <option>⭐⭐⭐ (3 – Good)</option>
                    <option>⭐⭐ (2 – Fair)</option>
                    <option>⭐ (1 – Poor)</option>
                  </select>
                </div>
                <div className="form-group form-full">
                  <label className="form-label-custom"><i className="fas fa-comment-dots me-1 pink" /> Your Story / Review *</label>
                  <textarea name="yourStoryReview" className="form-control-custom" rows={4} placeholder="Share your experience — how did Sunrise IVF Center help you?" style={{ resize: "vertical" }} required />
                </div>
                <div className="form-group form-full">
                  <button type="submit" className="btn-primary-custom btn-full" disabled={status === "loading"}>
                    {status === "loading" ? <><i className="fas fa-spinner fa-spin me-1" /> Sending…</> : <><i className="fas fa-heart me-1" /> Submit My Review</>}
                  </button>
                  <p className="form-note"><i className="fas fa-shield-alt me-1" /> Your review will be verified before being published.</p>
                </div>
              </div>
            </form>
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
    { q: "What is the success rate of IVF at Sunrise IVF Center?", a: "Our IVF outcomes are among the best in the region. Success depends on factors like age, egg quality, sperm quality, and the underlying cause of infertility. Dr. Shabina Khan will discuss realistic expectations and a personalised plan during your consultation." },
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
        <div className="faq-wrap fade-in">
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
    </section>
  );
}

/* ──────────────────── Gallery — Advanced Technology ──────────────────── */
function Gallery() {
  const [lightbox, setLightbox] = useState<{ img: string; title: string; sub: string } | null>(null);

  const items = [
    { num: 3, img: ultrasoundImg, title: "Advanced Ultrasound Imaging", sub: "Advanced Fertility Diagnostic Technology" },
    { num: 4, img: iuiWorkstationImg, title: "Swift I.U.I. Work Station", sub: "Precision IUI Preparation Unit" },
    { num: 5, img: machineTwoImg, title: "Digital Inverted Microscope (ICSI)", sub: "High-Resolution Embryology Scope" },
    { num: 7, img: machineThreeImg, title: "Vardhman Medicare Lab Hood", sub: "Sterile Embryo Culture Station" },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-flask" /> Our Laboratory</div>
          <h2 className="section-title">State-of-the-Art <span>Laboratory</span></h2>
          <p className="section-desc">Our modern embryology lab and advanced fertility technology ensure the best possible outcomes for every patient.</p>
        </div>
        <div className="lab-tags fade-in" style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center", marginBottom: "2rem" }}>
          {["Advanced Fertility Technology", "Modern Embryology Lab", "State-of-the-Art IVF Equipment"].map((tag) => (
            <span key={tag} style={{ background: "linear-gradient(135deg,#fce7f3,#ede9fe)", color: "#7c3aed", padding: "0.4rem 1rem", borderRadius: "2rem", fontSize: "0.82rem", fontWeight: 600, border: "1px solid #e9d5ff" }}>
              <i className="fas fa-check-circle me-1" style={{ color: "#db2777" }} />{tag}
            </span>
          ))}
        </div>
        <div className="gallery-grid">
          {items.map((item) => (
            <div key={item.title} className="gallery-item fade-in" onClick={() => setLightbox(item)} style={{ cursor: "pointer", position: "relative" }}>
              <img src={item.img} alt={item.title} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-overlay-title">{item.title}</div>
                <div className="gallery-overlay-sub">{item.sub}</div>
                <div style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.75)" }}>
                  <i className="fas fa-search-plus me-1" /> Click to enlarge
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.90)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1rem",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative", maxWidth: 720, width: "100%",
              borderRadius: "1rem", overflow: "hidden",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <img src={lightbox.img} alt={lightbox.title} style={{ width: "100%", maxHeight: "72vh", objectFit: "contain", display: "block", background: "#0a0a0a" }} />
            <div style={{ padding: "1rem 1.5rem", background: "rgba(0,0,0,0.7)" }}>
              <div style={{ fontWeight: 700, color: "white", fontSize: "1.05rem" }}>{lightbox.title}</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", marginTop: "0.25rem" }}>{lightbox.sub}</div>
            </div>
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              style={{
                position: "absolute", top: "0.75rem", right: "0.75rem",
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(0,0,0,0.65)", border: "1px solid rgba(255,255,255,0.25)",
                color: "white", fontSize: "1rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >✕</button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ──────────────────── Staff ──────────────────── */
function Staff() {
  const staff = [
    { icon: "👩‍⚕️", bg: "linear-gradient(135deg,#ede9fe,#dbeafe)", name: "Dr. Urvashi Yadav" },
    { icon: "👩‍⚕️", bg: "linear-gradient(135deg,#dbeafe,#d1fae5)", name: "Dr. Talat Naaz" },
    { icon: "👩‍⚕️", bg: "linear-gradient(135deg,#d1fae5,#fef9c3)", name: "Anita Verma" },
  ];
  return (
    <section id="staff" className="staff-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-users" /> Dedicated Staff</div>
          <h2 className="section-title">Dedicated <span>Staff</span></h2>
          <p className="section-desc">A dedicated team committed to providing exceptional fertility care and patient support.</p>
        </div>
        <div className="staff-grid">
          {staff.map((s) => (
            <div key={s.name} className="staff-card fade-in">
              <div className="staff-avatar" style={{ background: s.bg }}>{s.icon}</div>
              <div className="staff-name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Contact ──────────────────── */
function Contact() {
  const { status, setStatus, handleSubmit } = useAjaxForm("contact");

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-envelope" /> Contact Us</div>
          <h2 className="section-title">Get in <span>Touch</span></h2>
          <p className="section-desc">We're here to answer your questions and guide you towards the right treatment.</p>
        </div>
        <div className="contact-grid">
          <div className="fade-in-left">
            <div className="contact-info-card">
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "1.5rem" }}>Contact Details</h4>
              {[
                { icon: "fas fa-map-marker-alt", label: "Address", value: "Sunrise IVF Centre, near Punjabi Choola, Azizganj, Shahjahanpur, Uttar Pradesh 242001" },
                { icon: "fas fa-phone", label: "Phone", value: `${PHONE} / ${PHONE2}` },
                { icon: "fas fa-envelope", label: "Email", value: EMAIL },
                { icon: "fab fa-whatsapp", label: "WhatsApp", value: PHONE },
              ].map((c) => (
                <div key={c.label} className="contact-item">
                  <div className="contact-icon"><i className={c.icon} /></div>
                  <div>
                    <div className="contact-label">{c.label}</div>
                    <div className="contact-value">{c.value}</div>
                  </div>
                </div>
              ))}
              <div className="btn-row mt-3">
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
                title="Sunrise IVF Center Location"
                src={MAPS_EMBED}
                width="100%" height="240" style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "0.4rem",
                  marginTop: "0.6rem", fontSize: "0.85rem",
                  color: "#db2777", fontWeight: 600, textDecoration: "none",
                }}
              >
                <i className="fas fa-map-marked-alt" /> View on Google Maps
              </a>
            </div>
            <div className="mt-4" style={{ display: "flex", gap: "0.75rem" }}>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          <div className="fade-in-right">
            {status === "success" && <FormSuccess msg="We'll reply within 24 hours. For faster response, WhatsApp us directly." onClose={() => setStatus("idle")} />}
            {status === "error" && <FormError onClose={() => setStatus("idle")} />}
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label-custom">Name *</label>
                    <input name="name" type="text" className="form-control-custom" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom">Phone *</label>
                    <input name="phone" type="tel" className="form-control-custom" placeholder="Your phone number" required />
                  </div>
                  <div className="form-group form-full">
                    <label className="form-label-custom">Email</label>
                    <input name="email" type="email" className="form-control-custom" placeholder="your@email.com" />
                  </div>
                  <div className="form-group form-full">
                    <label className="form-label-custom">Message *</label>
                    <textarea name="message" className="form-control-custom" rows={5} placeholder="How can we help you?" style={{ resize: "vertical" }} required />
                  </div>
                  <div className="form-group form-full">
                    <button type="submit" className="btn-primary-custom btn-full" disabled={status === "loading"}>
                      {status === "loading" ? <><i className="fas fa-spinner fa-spin me-1" /> Sending…</> : <><i className="fas fa-paper-plane me-1" /> Send Message</>}
                    </button>
                    <p className="form-note"><i className="fas fa-lock me-1" /> Your information is private and secure.</p>
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
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-brand-row">
              <img src={logoImg} alt="Sunrise IVF Center" style={{ height: 52, width: 52, objectFit: "contain", flexShrink: 0 }} />
              <span className="footer-brand-name">Sunrise IVF Center</span>
            </div>
            <p className="footer-desc">Shahjahanpur's most trusted fertility centre — bringing hope, science, and compassion together for every family's journey to parenthood.</p>
            <div className="social-icons">
              <a href={FB_URL} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href={IG_URL} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://youtube.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube" />
              </a>
              <a href={WA_URL} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <div className="footer-heading">Quick Links</div>
            {[["Home","#home"],["About","#about"],["Services","#services"],["Reviews","#testimonials"],["FAQ","#faq"],["Contact","#contact"]].map(([l,h]) => (
              <a key={l} href={h} className="footer-link"><i className="fas fa-chevron-right footer-link-arrow" />{l}</a>
            ))}
          </div>

          <div className="footer-links-col">
            <div className="footer-heading">Our Services</div>
            {["IVF Treatment","IUI Treatment","Fertility Consult","Pregnancy Care","Women Health","Infertility Diagnosis"].map((s) => (
              <a key={s} href="#services" className="footer-link"><i className="fas fa-chevron-right footer-link-arrow" />{s}</a>
            ))}
          </div>

          <div className="footer-contact-col">
            <div className="footer-heading">Contact Us</div>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt" />
              <span>Sunrise IVF Centre, near Punjabi Choola, Azizganj, Shahjahanpur, Uttar Pradesh 242001</span>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-phone" />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                <a href={`tel:${PHONE}`} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{PHONE}</a>
                <a href={`tel:${PHONE2}`} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{PHONE2}</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-envelope" />
              <a href={`mailto:${EMAIL}`} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{EMAIL}</a>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-clock" />
              <span>Every Day: 10:00 AM – 6:00 PM</span>
            </div>
            <a href="#appointment" className="btn-primary-custom mt-3" style={{ fontSize: "0.875rem", padding: "0.7rem 1.25rem" }}>
              <i className="fas fa-calendar-check" /> Book Appointment
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} Sunrise IVF Center Shahjahanpur. All rights reserved.
          </p>
          <p className="footer-copyright">
            Designed with 🌸 for every family's dream.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────── WhatsApp Popup Widget ──────────────────── */
function WhatsAppPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const t = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(t);
  }, [dismissed]);

  const close = () => { setVisible(false); setDismissed(true); };
  const toggle = () => {
    if (dismissed) { setDismissed(false); setVisible(true); }
    else setVisible((v) => !v);
  };

  return (
    <>
      <div className={`wa-popup ${visible ? "wa-popup-visible" : ""}`}>
        <button className="wa-popup-close" onClick={close} aria-label="Close">✕</button>
        <div className="wa-popup-header">
          <div className="wa-popup-avatar">
            <img src={drShabinaImg} alt="Dr. Shabina Khan" />
            <span className="wa-popup-online" />
          </div>
          <div>
            <div className="wa-popup-name">Dr. Shabina Khan</div>
            <div className="wa-popup-role">IVF Specialist · Sunrise IVF Center</div>
          </div>
        </div>
        <div className="wa-popup-bubble">
          <p>👋 Hello! I'm Dr. Shabina Khan.</p>
          <p>Have questions about <strong>IVF, IUI, or fertility treatment</strong>? Chat with us for a <strong>free consultation!</strong> 🌸</p>
          <span className="wa-popup-time">Online now</span>
        </div>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="wa-popup-btn" onClick={close}>
          <i className="fab fa-whatsapp" /> Start Chat on WhatsApp
        </a>
      </div>
      <button className="float-whatsapp" onClick={toggle} aria-label="WhatsApp">
        <i className="fab fa-whatsapp" />
      </button>
    </>
  );
}

/* ──────────────────── Back to Top ──────────────────── */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button
      className={`back-to-top ${show ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up" />
    </button>
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
      <Counters />
      <About />
      <Services />
      <ClinicGallery />
      <Appointment />
      <Testimonials />
      <LeaveReview />
      <FAQ />
      <Staff />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppPopup />
      <BackToTop />
    </>
  );
}
