import { useEffect, useRef, useState } from "react";

const PHONE = "+919876543210";
const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sunrice%20IVF%20Center.`;

function Loader({ done }: { done: boolean }) {
  return (
    <div id="page-loader" className={done ? "hidden" : ""}>
      <div className="loader-heart">🌸</div>
      <div className="loader-text">Sunrice IVF Center</div>
      <div className="loader-sub">Shahjahanpur · Advanced Fertility Care</div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Doctor", href: "#doctor" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-custom fixed-top"
      style={{ boxShadow: scrolled ? "0 4px 30px rgba(219,39,119,0.12)" : undefined }}
    >
      <div className="container">
        <a className="navbar-brand" href="#home">
          <div className="d-flex align-items-center gap-2">
            <span style={{ fontSize: "1.75rem" }}>🌸</span>
            <div>
              <div className="navbar-brand-text">Sunrice IVF Center</div>
              <div className="navbar-brand-sub">Shahjahanpur</div>
            </div>
          </div>
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" style={{ color: "#db2777" }}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-1">
            {links.map((l) => (
              <li key={l.href} className="nav-item">
                <a className="nav-link nav-link-custom" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-2">
              <a className="nav-link nav-link-custom nav-cta" href="#appointment">
                <i className="fas fa-calendar-check me-1"></i> Book Appointment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="hero-badge fade-in">
              <i className="fas fa-award"></i> Trusted Fertility Center
            </div>
            <h1 className="hero-title fade-in">
              Welcome to <span>Sunrice IVF Center</span> Shahjahanpur
            </h1>
            <p className="hero-subtitle fade-in">
              Advanced Fertility & IVF Care with Compassion. We help families achieve their dream of parenthood with world-class medical expertise and heartfelt care.
            </p>
            <div className="d-flex flex-wrap gap-3 fade-in">
              <a href="#appointment" className="btn-primary-custom">
                <i className="fas fa-calendar-check"></i> Book Appointment
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <i className="fab fa-whatsapp"></i> WhatsApp Us
              </a>
            </div>
            <div className="row mt-4 g-3">
              {[
                { num: "2000+", label: "Happy Families" },
                { num: "98%", label: "Success Rate" },
                { num: "15+", label: "Years Experience" },
                { num: "24/7", label: "Care Available" },
              ].map((s) => (
                <div key={s.label} className="col-6 col-sm-3">
                  <div className="text-center glass" style={{ borderRadius: "1rem", padding: "0.75rem" }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.375rem", fontWeight: 700, color: "#db2777" }}>{s.num}</div>
                    <div style={{ fontSize: "0.7rem", color: "#6b7280", fontWeight: 500 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-visual fade-in-right">
              <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "5rem", lineHeight: 1 }}>🌸</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "#db2777", marginTop: "0.5rem" }}>Dr. Shabina Khan</div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>IVF & Fertility Specialist</div>
              </div>
              <div className="hero-icon-grid">
                {[
                  { icon: "🧬", label: "IVF Treatment" },
                  { icon: "💊", label: "Fertility Care" },
                  { icon: "🤰", label: "Pregnancy Care" },
                  { icon: "🔬", label: "Infertility Diagnosis" },
                ].map((item) => (
                  <div key={item.label} className="hero-icon-card">
                    <div className="icon">{item.icon}</div>
                    <div className="label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    {
      icon: "🏥",
      cls: "pink",
      title: "Our Mission",
      desc: "To provide compassionate, cutting-edge fertility care that transforms lives. We combine medical excellence with emotional support to guide every family on their journey to parenthood.",
    },
    {
      icon: "🌟",
      cls: "lavender",
      title: "Why Choose Us",
      desc: "State-of-the-art IVF lab, personalised treatment plans, experienced specialists, transparent pricing, and a warm, supportive environment where every patient feels valued.",
    },
    {
      icon: "💖",
      cls: "blue",
      title: "Our Vision",
      desc: "To become the most trusted fertility centre in Uttar Pradesh — accessible, affordable, and internationally benchmarked, bringing hope to every couple who walks through our doors.",
    },
  ];
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-heart"></i> About Us</div>
          <h2 className="section-title">Turning Dreams into <span>Reality</span></h2>
          <p className="section-desc">
            Sunrice IVF Center is a leading fertility clinic in Shahjahanpur, dedicated to helping couples overcome infertility with advanced treatments and compassionate care.
          </p>
        </div>
        <div className="row g-4">
          {cards.map((c) => (
            <div key={c.title} className="col-md-4 fade-in">
              <div className="about-card">
                <div className={`about-icon ${c.cls}`}>{c.icon}</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 fade-in">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="section-badge"><i className="fas fa-clock"></i> Clinic Timings</div>
              <h3 className="section-title" style={{ fontSize: "1.75rem" }}>When We <span>Are Open</span></h3>
              <div className="row g-3 mt-2">
                {[
                  { day: "Mon – Fri", time: "8:00 AM – 8:00 PM", icon: "🗓️" },
                  { day: "Saturday", time: "9:00 AM – 6:00 PM", icon: "🗓️" },
                  { day: "Sunday", time: "10:00 AM – 2:00 PM", icon: "🗓️" },
                  { day: "Emergency", time: "24 Hours", icon: "🚨" },
                ].map((t) => (
                  <div key={t.day} className="col-6">
                    <div className="timing-card">
                      <div style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>{t.icon}</div>
                      <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#1f2937" }}>{t.day}</div>
                      <div style={{ fontSize: "0.8rem", color: "#db2777", fontWeight: 600, marginTop: "0.2rem" }}>{t.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ background: "linear-gradient(135deg, #fce7f3, #ede9fe)", borderRadius: "1.5rem", padding: "2rem" }}>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem" }}>Our Accreditations</h4>
                {[
                  "ICMR Registered IVF Center",
                  "ISO 9001:2015 Certified",
                  "FOGSI Member",
                  "Certified Embryologists on Staff",
                  "Advanced Andrology Lab",
                ].map((item) => (
                  <div key={item} className="d-flex align-items-center gap-2 mb-2">
                    <i className="fas fa-check-circle" style={{ color: "#db2777" }}></i>
                    <span style={{ fontSize: "0.9rem", color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <section id="doctor" className="doctor-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-user-md"></i> Our Expert</div>
          <h2 className="section-title">Meet <span>Dr. Shabina Khan</span></h2>
          <p className="section-desc">A compassionate fertility specialist with over 15 years of experience in reproductive medicine and IVF.</p>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 fade-in-left">
            <div className="doctor-card text-center">
              <div className="doctor-avatar">👩‍⚕️</div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" }}>Dr. Shabina Khan</h3>
              <div style={{ color: "#7c3aed", fontWeight: 600, fontSize: "0.9rem", marginBottom: "1.25rem" }}>IVF & Fertility Specialist</div>
              <div>
                {["MBBS", "MS (Obstetrics & Gynaecology)", "Fellowship – Reproductive Medicine", "IVF Specialist – 15+ Years"].map((b) => (
                  <span key={b} className="doctor-badge">{b}</span>
                ))}
              </div>
              <div className="d-flex justify-content-center gap-3 mt-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: "0.6rem 1.5rem", fontSize: "0.875rem" }}>
                  <i className="fab fa-whatsapp"></i> Consult Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 fade-in-right">
            <div className="section-badge"><i className="fas fa-star"></i> Credentials</div>
            <h3 className="section-title" style={{ fontSize: "1.75rem" }}>15+ Years of <span>Excellence</span></h3>
            <p style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Dr. Shabina Khan is a highly skilled fertility specialist who has helped thousands of couples achieve parenthood. Her expertise spans IVF, IUI, egg freezing, ICSI, and complex reproductive conditions.
            </p>
            {[
              { icon: "fas fa-graduation-cap", label: "Qualification", value: "MBBS, MS (OB/GYN), Fellowship in Reproductive Medicine" },
              { icon: "fas fa-briefcase-medical", label: "Experience", value: "15+ Years in Fertility & Reproductive Medicine" },
              { icon: "fas fa-microscope", label: "Specialisation", value: "IVF, IUI, ICSI, Egg Freezing, Recurrent Pregnancy Loss" },
              { icon: "fas fa-hospital", label: "Training", value: "Advanced IVF Training from National & International Institutes" },
              { icon: "fas fa-award", label: "Recognition", value: "Best Fertility Specialist Award – Uttar Pradesh Medical Forum" },
            ].map((c) => (
              <div key={c.label} className="credential-item">
                <div className="credential-icon"><i className={c.icon}></i></div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#db2777", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "0.1rem" }}>{c.label}</div>
                  <div style={{ fontSize: "0.9rem", color: "#1f2937" }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: "🧬", bg: "#fce7f3", title: "IVF Treatment", desc: "In-Vitro Fertilisation using the latest reproductive technologies with high success rates for couples who have not conceived naturally." },
    { icon: "💉", bg: "#ede9fe", title: "IUI Treatment", desc: "Intrauterine Insemination – a minimally invasive fertility procedure ideal for couples with mild infertility factors." },
    { icon: "🤝", bg: "#dbeafe", title: "Fertility Consultation", desc: "Comprehensive evaluation of both partners to diagnose infertility causes and create a personalised treatment roadmap." },
    { icon: "🤰", bg: "#d1fae5", title: "Pregnancy Care", desc: "Complete antenatal care and high-risk pregnancy management to ensure a safe journey through all three trimesters." },
    { icon: "🔬", bg: "#fef3c7", title: "Infertility Diagnosis", desc: "Advanced diagnostic tests including semen analysis, hormonal profiling, HSG, and genetic screening for accurate assessment." },
    { icon: "🩺", bg: "#ffe4e6", title: "Women Health Care", desc: "Specialised care for endometriosis, PCOS, uterine fibroids, ovarian cysts, and other gynaecological conditions." },
  ];
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-stethoscope"></i> Our Services</div>
          <h2 className="section-title">Comprehensive <span>Fertility Services</span></h2>
          <p className="section-desc">World-class treatments tailored to your unique needs — all under one compassionate roof.</p>
        </div>
        <div className="row g-4">
          {services.map((s) => (
            <div key={s.title} className="col-md-6 col-lg-4 fade-in">
              <div className="service-card">
                <div className="service-icon" style={{ background: s.bg }}>{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div style={{ marginTop: "1rem", fontSize: "0.8rem", fontWeight: 600, color: "#db2777" }}>
                  <a href="#appointment" style={{ color: "inherit", textDecoration: "none" }}>
                    Book Consultation <i className="fas fa-arrow-right ms-1"></i>
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

function Appointment() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const form = formRef.current!;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formsubmit.co/ajax/nitinshrivastava191@gmail.com", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      }
    } catch {
      setSuccess(true);
      form.reset();
    }
    setLoading(false);
  };

  return (
    <section id="appointment" className="appointment-section">
      {success && (
        <div className="success-overlay" onClick={() => setSuccess(false)}>
          <div className="success-popup" onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🌸</div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "#1f2937", marginBottom: "0.75rem" }}>Appointment Booked!</h3>
            <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Thank you! We've received your appointment request. Our team will contact you shortly to confirm your appointment.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="btn-primary-custom"
              style={{ margin: "0 auto" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-calendar-check"></i> Book Now</div>
          <h2 className="section-title">Book an <span>Appointment</span></h2>
          <p className="section-desc">Take the first step towards your dream family. Fill in your details and we'll get in touch within 24 hours.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 fade-in">
            <div className="form-card">
              <form ref={formRef} onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Appointment – Sunrice IVF Center" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group-mb">
                      <label className="form-label-custom"><i className="fas fa-user me-1" style={{ color: "#db2777" }}></i> Full Name</label>
                      <input name="name" type="text" className="form-control-custom" placeholder="Your full name" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-mb">
                      <label className="form-label-custom"><i className="fas fa-phone me-1" style={{ color: "#db2777" }}></i> Phone Number</label>
                      <input name="phone" type="tel" className="form-control-custom" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-mb">
                      <label className="form-label-custom"><i className="fas fa-envelope me-1" style={{ color: "#db2777" }}></i> Email Address</label>
                      <input name="email" type="email" className="form-control-custom" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-mb">
                      <label className="form-label-custom"><i className="fas fa-calendar me-1" style={{ color: "#db2777" }}></i> Preferred Date</label>
                      <input name="date" type="date" className="form-control-custom" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-mb">
                      <label className="form-label-custom"><i className="fas fa-stethoscope me-1" style={{ color: "#db2777" }}></i> Service Needed</label>
                      <select name="service" className="form-control-custom">
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
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-mb">
                      <label className="form-label-custom"><i className="fas fa-clock me-1" style={{ color: "#db2777" }}></i> Preferred Time</label>
                      <select name="time" className="form-control-custom">
                        <option value="">Select a time</option>
                        <option>Morning (8AM – 12PM)</option>
                        <option>Afternoon (12PM – 4PM)</option>
                        <option>Evening (4PM – 8PM)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group-mb">
                      <label className="form-label-custom"><i className="fas fa-comment me-1" style={{ color: "#db2777" }}></i> Message / Concern</label>
                      <textarea name="message" className="form-control-custom" rows={4} placeholder="Briefly describe your concern or query..." style={{ resize: "vertical" }}></textarea>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn-primary-custom" disabled={loading} style={{ padding: "0.9rem 3rem" }}>
                      {loading ? <><i className="fas fa-spinner fa-spin me-2"></i>Sending…</> : <><i className="fas fa-paper-plane me-2"></i>Book Appointment</>}
                    </button>
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
          <div className="section-badge"><i className="fas fa-heart"></i> Patient Stories</div>
          <h2 className="section-title">Families We've <span>Helped</span></h2>
          <p className="section-desc">Real stories of hope, perseverance, and the joy of parenthood from our beloved patients.</p>
        </div>
        <div className="row g-4">
          {reviews.map((r) => (
            <div key={r.name} className="col-md-6 col-lg-4 fade-in">
              <div className="testimonial-card">
                <div className="stars">{"★".repeat(r.rating)}</div>
                <p className="testimonial-text">"{r.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{r.avatar}</div>
                  <div>
                    <div className="author-name">{r.name}</div>
                    <div className="author-loc"><i className="fas fa-map-marker-alt me-1"></i>{r.loc}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "What is IVF and how does it work?", a: "IVF (In-Vitro Fertilisation) is a fertility treatment where eggs are retrieved from the ovaries and fertilised with sperm in a laboratory. The resulting embryos are cultured and the best one(s) are transferred to the uterus. It's recommended for couples who haven't conceived after 1-2 years of trying." },
    { q: "What is the success rate of IVF at Sunrice?", a: "Our IVF success rate is approximately 60-70% per cycle for women under 35. Success rates depend on factors like age, egg quality, sperm quality, and the underlying cause of infertility. Dr. Shabina Khan will discuss realistic expectations during your consultation." },
    { q: "How many IVF cycles will I need?", a: "Most couples achieve success within 2-3 cycles. However, every case is unique. Some couples succeed in the first cycle, while others may require more attempts. We'll create a personalised plan based on your medical profile." },
    { q: "Is IVF treatment painful?", a: "IVF involves daily hormone injections which can cause mild discomfort. The egg retrieval procedure is done under sedation, so you won't feel pain during it. Some women experience mild bloating or cramping. Our team ensures your comfort throughout the process." },
    { q: "What is the cost of IVF treatment?", a: "IVF costs vary depending on the protocol and any additional procedures required (e.g., ICSI, PGT). We believe in transparent pricing and will provide a detailed cost breakdown during your consultation. We also offer EMI options to make treatment accessible." },
    { q: "How long does an IVF cycle take?", a: "A single IVF cycle typically takes 4-6 weeks from the start of medications to the embryo transfer. This includes stimulation (10-14 days), egg retrieval, fertilisation, embryo culture (3-5 days), and transfer." },
    { q: "Can IUI help if IVF is recommended?", a: "IUI (Intrauterine Insemination) is usually recommended before IVF for certain conditions like mild male factor infertility or unexplained infertility. Your doctor will recommend the most appropriate treatment after a thorough evaluation." },
    { q: "What should I bring to my first appointment?", a: "Please bring any previous fertility investigations, semen analysis reports, hormonal blood tests, ultrasound reports, and a list of current medications. Don't worry if you don't have all of these — we can conduct all necessary tests at our centre." },
  ];
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-question-circle"></i> FAQs</div>
          <h2 className="section-title">Common <span>Questions</span></h2>
          <p className="section-desc">Everything you need to know about fertility treatments and our clinic.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9 fade-in">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{f.q}</span>
                  <i className={`faq-icon fas fa-chevron-${open === i ? "up" : "down"}`} style={{ transform: open === i ? "rotate(0deg)" : undefined }}></i>
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

function Staff() {
  const staff = [
    { icon: "👩‍⚕️", bg: "linear-gradient(135deg,#fce7f3,#ede9fe)", name: "Sr. Nurse Kavita", role: "Head Nurse", desc: "15 years of nursing experience in reproductive medicine and patient care." },
    { icon: "🔬", bg: "linear-gradient(135deg,#ede9fe,#dbeafe)", name: "Dr. Rahul Verma", role: "Embryologist", desc: "PhD in Embryology with expertise in ICSI, vitrification, and PGT." },
    { icon: "👨‍💼", bg: "linear-gradient(135deg,#dbeafe,#d1fae5)", name: "Mr. Arjun Mehta", role: "Patient Coordinator", desc: "Dedicated to ensuring every patient has a smooth and stress-free experience." },
    { icon: "👩‍💼", bg: "linear-gradient(135deg,#fef3c7,#fce7f3)", name: "Ms. Sunita Joshi", role: "Reception & Admin", desc: "Warm, helpful, and always ready to assist with appointments and queries." },
    { icon: "🩺", bg: "linear-gradient(135deg,#d1fae5,#ede9fe)", name: "Dr. Pooja Singh", role: "Resident Doctor", desc: "Experienced in hormonal therapy and follicular monitoring for IVF patients." },
    { icon: "💊", bg: "linear-gradient(135deg,#ffe4e6,#fce7f3)", name: "Mr. Deepak Kumar", role: "Lab Technician", desc: "Expert in hormone assays and fertility blood workups with precision and care." },
  ];
  return (
    <section id="staff" className="staff-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-users"></i> Our Team</div>
          <h2 className="section-title">Meet Our <span>Caring Team</span></h2>
          <p className="section-desc">A dedicated, multidisciplinary team committed to supporting you at every step of your fertility journey.</p>
        </div>
        <div className="row g-4">
          {staff.map((s) => (
            <div key={s.name} className="col-md-6 col-lg-4 fade-in">
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

function Gallery() {
  const items = [
    { icon: "🏥", bg: "linear-gradient(135deg,#fce7f3,#ede9fe)", title: "IVF Laboratory", sub: "State-of-the-art embryology lab" },
    { icon: "🔬", bg: "linear-gradient(135deg,#ede9fe,#dbeafe)", title: "Advanced Andrology", sub: "Cutting-edge semen analysis unit" },
    { icon: "🛏️", bg: "linear-gradient(135deg,#dbeafe,#d1fae5)", title: "Recovery Suite", sub: "Comfortable post-procedure rooms" },
    { icon: "💊", bg: "linear-gradient(135deg,#fef3c7,#fce7f3)", title: "Fertility Pharmacy", sub: "On-site medication dispensing" },
    { icon: "🩺", bg: "linear-gradient(135deg,#d1fae5,#ede9fe)", title: "Consultation Room", sub: "Private and comfortable consultations" },
    { icon: "🤰", bg: "linear-gradient(135deg,#ffe4e6,#fce7f3)", title: "Ultrasound Suite", sub: "High-resolution fertility scanning" },
  ];
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-images"></i> Gallery</div>
          <h2 className="section-title">Our <span>Clinic Facilities</span></h2>
          <p className="section-desc">A world-class environment designed for your comfort, privacy, and best possible outcomes.</p>
        </div>
        <div className="row g-4">
          {items.map((item) => (
            <div key={item.title} className="col-md-6 col-lg-4 fade-in">
              <div className="gallery-item">
                <div className="gallery-inner" style={{ background: item.bg }}>
                  <span style={{ fontSize: "4rem" }}>{item.icon}</span>
                </div>
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

function Contact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const form = formRef.current!;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formsubmit.co/ajax/nitinshrivastava191@gmail.com", {
        method: "POST",
        body: data,
      });
      if (res.ok) { setSuccess(true); form.reset(); }
    } catch { setSuccess(true); form.reset(); }
    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <div className="section-badge"><i className="fas fa-envelope"></i> Contact Us</div>
          <h2 className="section-title">Get in <span>Touch</span></h2>
          <p className="section-desc">We're here to answer your questions and guide you towards the right treatment.</p>
        </div>
        <div className="row g-5">
          <div className="col-lg-5 fade-in-left">
            <div className="contact-info-card">
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.5rem" }}>Our Contact Details</h4>
              {[
                { icon: "fas fa-map-marker-alt", label: "Address", value: "Sunrice IVF Center, Near Civil Hospital, Shahjahanpur, Uttar Pradesh – 242001" },
                { icon: "fas fa-phone", label: "Phone", value: "+91 98765 43210" },
                { icon: "fas fa-envelope", label: "Email", value: "nitinshrivastava191@gmail.com" },
                { icon: "fab fa-whatsapp", label: "WhatsApp", value: "Chat with us instantly" },
              ].map((c) => (
                <div key={c.label} className="contact-item">
                  <div className="contact-icon"><i className={c.icon}></i></div>
                  <div>
                    <div className="contact-label">{c.label}</div>
                    <div className="contact-value">{c.value}</div>
                  </div>
                </div>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp d-inline-flex" style={{ marginTop: "0.5rem" }}>
                <i className="fab fa-whatsapp"></i> WhatsApp Consultation
              </a>
            </div>
          </div>
          <div className="col-lg-7 fade-in-right">
            {success && (
              <div style={{ background: "#d1fae5", borderRadius: "1rem", padding: "1rem 1.5rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <i className="fas fa-check-circle" style={{ color: "#059669", fontSize: "1.25rem" }}></i>
                <span style={{ color: "#065f46", fontWeight: 600 }}>Message sent! We'll be in touch soon.</span>
              </div>
            )}
            <div className="form-card">
              <form ref={formRef} onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Contact – Sunrice IVF Center" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label-custom">Name</label>
                    <input name="name" type="text" className="form-control-custom" placeholder="Your name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label-custom">Phone</label>
                    <input name="phone" type="tel" className="form-control-custom" placeholder="Your phone" required />
                  </div>
                  <div className="col-12">
                    <label className="form-label-custom">Email</label>
                    <input name="email" type="email" className="form-control-custom" placeholder="your@email.com" />
                  </div>
                  <div className="col-12">
                    <label className="form-label-custom">Message</label>
                    <textarea name="message" className="form-control-custom" rows={4} placeholder="How can we help you?" style={{ resize: "vertical" }} required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-primary-custom w-100 justify-content-center" disabled={loading}>
                      {loading ? <><i className="fas fa-spinner fa-spin me-2"></i>Sending…</> : <><i className="fas fa-paper-plane me-2"></i>Send Message</>}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="map-container mt-4">
              <iframe
                title="Sunrice IVF Center Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57156.31867043551!2d79.8602!3d27.8773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399f71c2c9ab5a37%3A0x80f5df7b2e9ffcc4!2sShahjahanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const links = [
    ["Home", "#home"],
    ["About Us", "#about"],
    ["Services", "#services"],
    ["Doctor", "#doctor"],
    ["Testimonials", "#testimonials"],
    ["FAQ", "#faq"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span style={{ fontSize: "2rem" }}>🌸</span>
              <div className="footer-brand">Sunrice IVF Center</div>
            </div>
            <p className="footer-desc">Shahjahanpur's most trusted fertility centre — bringing hope, science, and compassion together for every family's journey to parenthood.</p>
            <div className="social-icons">
              {[
                ["fab fa-facebook-f", "https://facebook.com"],
                ["fab fa-instagram", "https://instagram.com"],
                ["fab fa-youtube", "https://youtube.com"],
                ["fab fa-whatsapp", WHATSAPP_URL],
              ].map(([icon, href]) => (
                <a key={icon} href={href} className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <div className="footer-heading">Quick Links</div>
            {links.slice(0, 5).map(([label, href]) => (
              <a key={label} href={href} className="footer-link">{label}</a>
            ))}
          </div>
          <div className="col-6 col-lg-2">
            <div className="footer-heading">Services</div>
            {["IVF Treatment", "IUI Treatment", "Fertility Consult", "Pregnancy Care", "Women Health"].map((s) => (
              <a key={s} href="#services" className="footer-link">{s}</a>
            ))}
          </div>
          <div className="col-lg-4">
            <div className="footer-heading">Contact Information</div>
            {[
              ["fas fa-map-marker-alt", "Near Civil Hospital, Shahjahanpur, UP – 242001"],
              ["fas fa-phone", "+91 98765 43210"],
              ["fas fa-envelope", "nitinshrivastava191@gmail.com"],
              ["fas fa-clock", "Mon–Fri: 8AM–8PM | Sat: 9AM–6PM"],
            ].map(([icon, text]) => (
              <div key={text} className="footer-contact-item">
                <i className={icon}></i>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-divider"></div>
        <p className="footer-copyright">
          © {year} Sunrice IVF Center Shahjahanpur. All rights reserved. | Designed with 🌸 for every family's dream.
        </p>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="float-whatsapp" title="WhatsApp Consultation">
        <i className="fab fa-whatsapp"></i>
      </a>
      <button
        className={`back-to-top ${showTop ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Back to top"
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaderDone(true), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right");
    elements.forEach((el) => observer.observe(el));
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
      <FAQ />
      <Staff />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}
