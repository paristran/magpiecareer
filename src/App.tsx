import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Home,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Menu,
  X,
  Star,
  Quote,
  ShieldCheck,
  Zap,
  Users,
  Heart,
  Target,
  Award,
  Linkedin,
  Calendar,
  Phone
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8",
        isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-neutral-100 py-3 shadow-sm" : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-neutral-900">Magpie Career</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {['Services', 'Mentors', 'About', 'Testimonials'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-neutral-600 hover:text-black transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
          <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-black/10">
            Book Free Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-neutral-900 p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-neutral-100 px-6 py-8 flex flex-col gap-1 lg:hidden shadow-2xl"
          >
            {['Services', 'Mentors', 'About', 'Testimonials'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-lg font-medium text-neutral-900 py-3 px-4 rounded-xl hover:bg-neutral-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-neutral-100">
              <button className="bg-black text-white w-full py-4 rounded-2xl font-semibold text-lg shadow-lg cursor-pointer">
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-blue-100/60 to-indigo-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-neutral-100/80 to-stone-100/40 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neutral-50/50 to-transparent rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest uppercase bg-white border border-neutral-200/80 rounded-full text-neutral-600 shadow-sm"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            The #1 Career Partner for International Students
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-neutral-900 mb-8 leading-[1.05] md:leading-[1.1]">
            <span className="block">Study in Australia</span>
            <span className="block mt-2 md:mt-3">is <span className="relative inline-block">
              easy
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-2 left-0 w-full h-3 text-neutral-300"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0 6 C 20 12, 40 0, 60 6 C 80 12, 100 0, 100 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>.</span>
            <span className="block mt-3 md:mt-4 text-neutral-300">Building a career is not.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
            We help you go from student to hired by top companies.
            <span className="block mt-1 text-neutral-900">Don't just study in Australia. Build a successful career here.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-black/20 cursor-pointer"
            >
              Book a Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-white text-black border-2 border-neutral-200 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-neutral-50 hover:border-neutral-300 transition-all cursor-pointer"
            >
              View Success Stories
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Mentors from</span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-50">
              {['Google', 'Amazon', 'P&G', 'Deloitte', 'Atlassian'].map((company) => (
                <span key={company} className="text-sm sm:text-base font-bold text-neutral-600">{company}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const stats = [
    { label: "Students Placed", value: "500+", suffix: "" },
    { label: "Top Universities", value: "All", suffix: "Group of 8" },
    { label: "Avg. Salary Increase", value: "45%", suffix: "" },
    { label: "Success Rate", value: "98%", suffix: "" },
  ];

  return (
    <section id="outcomes" className="py-16 sm:py-20 lg:py-24 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-1 sm:mb-2">
                {stat.value}
                {stat.suffix && <span className="text-lg sm:text-xl font-medium text-neutral-400 ml-1 sm:ml-2 block sm:inline">{stat.suffix}</span>}
              </div>
              <div className="text-xs sm:text-sm font-medium text-neutral-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 sm:mb-12">
              You got accepted... <br />
              <span className="text-neutral-500">Now what?</span>
            </h2>
            <div className="space-y-5 sm:space-y-6">
              {[
                "No local work experience in Australia",
                "Hard to get interviews without a network",
                "Cultural barriers in recruitment processes",
                "Visa complexities affecting job offers"
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 p-1.5 bg-red-500/10 rounded-full shrink-0">
                    <X size={14} className="text-red-400" />
                  </div>
                  <p className="text-base sm:text-lg text-neutral-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-neutral-800 flex items-center justify-center p-8 sm:p-12 relative">
              <div className="text-center relative z-10">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-4">72%</div>
                <p className="text-neutral-400 text-base sm:text-lg max-w-xs mx-auto leading-relaxed">
                  of international students struggle to find relevant work within 6 months of graduation.
                </p>
              </div>
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const steps = [
    {
      title: "Get into the right university",
      desc: "We don't just pick names. We pick the institutions that top employers actually hire from.",
      icon: <GraduationCap size={28} />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Settle in Australia",
      desc: "From premium accommodation to local onboarding, we make your transition seamless.",
      icon: <Home size={28} />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Land a high-paying job",
      desc: "Direct referrals, interview coaching, and career strategy with mentors from Big Tech.",
      icon: <Briefcase size={28} />,
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-4"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-4 sm:mb-6"
          >
            Your Path to Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-neutral-500 max-w-2xl mx-auto"
          >
            A comprehensive 3-step strategy designed for the Australian market.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center text-sm font-bold text-neutral-400 group-hover:bg-black group-hover:text-white transition-all duration-300">
                {idx + 1}
              </div>
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:shadow-lg duration-300", step.color)}>
                {step.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">{step.desc}</p>
              <div className="flex items-center text-sm font-bold text-black gap-1 cursor-pointer group-hover:gap-2 transition-all">
                Learn how it works <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "University Application Support",
      desc: "Strategic university selection and application management to maximize your admission chances at Group of 8 universities.",
      features: ["Personal Statement Review", "Scholarship Guidance", "Visa Processing"]
    },
    {
      title: "Accommodation & Onboarding",
      desc: "Premium housing solutions and local support to help you feel at home in Australia from day one.",
      features: ["Pre-arrival Housing", "Airport Pickup", "Bank & SIM Setup"]
    },
    {
      title: "Career Coaching & Placement",
      desc: "The ultimate career accelerator. We connect you with mentors and jobs at Australia's most prestigious companies.",
      features: ["Resume & LinkedIn Audit", "Mock Interviews", "Direct Referrals"]
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 lg:mb-20 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-4"
            >
              What We Offer
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-4"
            >
              Premium Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-neutral-500"
            >
              Tailored support for every stage of your international journey.
            </motion.p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-black font-bold border-b-2 border-black pb-1 hover:gap-3 transition-all cursor-pointer">
            View all services <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 sm:p-10 rounded-[2rem] border border-neutral-200 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 leading-tight">{service.title}</h3>
              <p className="text-neutral-600 mb-8 sm:mb-10 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm font-medium text-neutral-700">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 sm:py-4 rounded-xl border-2 border-neutral-200 font-bold hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// NEW: Founder Story Section
const FounderStory = () => {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-[2rem] sm:rounded-[3rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&crop=face"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-neutral-100 max-w-[200px] sm:max-w-[240px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={18} />
                  </div>
                  <span className="font-bold text-sm">Our Mission</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Empowering 10,000 international students by 2030.
                </p>
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full blur-2xl opacity-60" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6 sm:mb-8">
              I've been exactly where you are.
            </h2>
            <div className="space-y-4 sm:space-y-6 text-neutral-600 leading-relaxed text-base sm:text-lg">
              <p>
                When I first arrived in Australia as an international student, I was filled with excitement — and completely unprepared for what came next.
              </p>
              <p>
                Despite graduating with honors, I spent months applying to jobs with zero responses. No network. No local experience. No idea how the Australian job market actually worked.
              </p>
              <p>
                After countless rejections, I finally cracked the code. I landed roles at top companies, built a network from scratch, and learned the unwritten rules that separate successful graduates from those who struggle.
              </p>
              <p className="font-medium text-neutral-900">
                I founded Magpie Career because I believe no student should have to figure this out alone. Every international student deserves a fair shot at building an amazing career in Australia.
              </p>
            </div>
            <div className="mt-8 sm:mt-10 flex items-center gap-4">
              <div>
                <div className="font-bold text-lg text-neutral-900">Sarah Chen</div>
                <div className="text-sm text-neutral-500">Founder & CEO</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// NEW: Mentors Section
const Mentors = () => {
  const mentors = [
    {
      name: "Alex Thompson",
      role: "Former Senior Product Manager",
      company: "Google",
      image: "https://bc-user-uploads.brandcrowd.com/public/media-Production/46569724-49df-4e67-ac72-be8078a3912d/00980589-ce86-4952-99d7-7f1672a956c7_2x",
      expertise: "Tech Strategy & PM Interviews"
    },
    {
      name: "Priya Sharma",
      role: "Ex-Senior Consultant",
      company: "Deloitte",
      image: "https://bc-user-uploads.brandcrowd.com/public/media-Production/46569724-49df-4e67-ac72-be8078a3912d/b430f2ce-bf1f-45ad-b67e-eada86a7b7cb_2x",
      expertise: "Consulting & Case Interviews"
    },
    {
      name: "Michael Liu",
      role: "Former Operations Lead",
      company: "Amazon",
      image: "https://bc-user-uploads.brandcrowd.com/public/media-Production/46569724-49df-4e67-ac72-be8078a3912d/c320e06d-b87c-4f1e-84d4-1e2173b4f94e_2x",
      expertise: "Operations & Leadership"
    }
  ];

  return (
    <section id="mentors" className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-4"
          >
            <Award size={16} className="text-blue-600" />
            Meet Your Mentors
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-4 sm:mb-6"
          >
            Learn from the Best
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-neutral-500 max-w-2xl mx-auto"
          >
            Industry veterans from world-class companies ready to guide your journey.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {mentors.map((mentor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-[2rem] p-6 sm:p-8 border border-neutral-200 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Company badge */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-neutral-900 text-white text-xs font-bold rounded-full">
                {mentor.company}
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-6 ring-4 ring-neutral-100 group-hover:ring-black/10 transition-all">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-1">{mentor.name}</h3>
                <p className="text-sm text-neutral-500 mb-4">{mentor.role}</p>
                <div className="px-4 py-2 bg-blue-50 rounded-full">
                  <p className="text-xs sm:text-sm font-medium text-blue-700">{mentor.expertise}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-100 w-full">
                  <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-neutral-200 font-semibold text-sm hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer group/btn">
                    <Linkedin size={16} className="group-hover/btn:scale-110 transition-transform" />
                    Connect
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-neutral-600 mb-4">Ready to learn from mentors who've been there?</p>
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10 cursor-pointer">
            Book a Session with a Mentor
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Differentiation = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-8 sm:mb-12">
              Why Magpie Career?
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  title: "Mentors from Top Companies",
                  desc: "Learn from professionals who have actually worked at Google, Amazon, and P&G. Real insights, not theory.",
                  icon: <Users className="text-blue-600" size={22} />
                },
                {
                  title: "Real Job-Focused Strategy",
                  desc: "Most agents focus on commissions from universities. We focus on your employment outcome.",
                  icon: <Target className="text-amber-500" size={22} />
                },
                {
                  title: "Personalized Guidance",
                  desc: "No cookie-cutter advice. We build a custom roadmap based on your specific career goals and background.",
                  icon: <ShieldCheck className="text-emerald-600" size={22} />
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 sm:gap-5"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-neutral-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{item.title}</h4>
                    <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-neutral-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 lg:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">The Magpie Difference</h3>
                <div className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-neutral-800">
                    <div className="text-xs sm:text-sm font-bold text-neutral-500 uppercase">Traditional Agents</div>
                    <div className="text-xs sm:text-sm font-bold text-blue-400 uppercase">Magpie Career</div>
                  </div>
                  {[
                    ["University focused", "Career focused"],
                    ["Basic visa support", "End-to-end relocation"],
                    ["General advice", "Industry-specific mentors"],
                    ["No job guarantee", "Direct referral network"]
                  ].map(([trad, mag], idx) => (
                    <div key={idx} className="grid grid-cols-2 gap-3 sm:gap-4 items-center">
                      <div className="text-sm text-neutral-400 flex items-center gap-2">
                        <X size={14} className="text-neutral-600 shrink-0" /> {trad}
                      </div>
                      <div className="text-sm font-medium flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-blue-400 shrink-0" /> {mag}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p className="text-sm text-neutral-300 italic leading-relaxed">
                    "Magpie didn't just help me with my visa; they helped me land my dream job at Atlassian within 3 months of arriving."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      C
                    </div>
                    <div>
                      <div className="text-sm font-bold">Chen W.</div>
                      <div className="text-xs text-neutral-400">Software Engineer at Atlassian</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/10 blur-[80px] rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Lin",
      role: "Product Manager at Canva",
      content: "The mentorship I received was game-changing. My mentor from P&G helped me refine my resume and prepare for the specific nuances of Australian interviews.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Kevin Zhang",
      role: "Data Analyst at Deloitte",
      content: "Magpie Career made my move to Melbourne so easy. The accommodation they found was perfect, and the career roadmap they built for me was spot on.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ananya S.",
      role: "Software Engineer at Amazon",
      content: "I wouldn't be at Amazon today without Magpie. Their direct referral network and mock interview sessions gave me the confidence I needed.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-4 sm:mb-6"
          >
            Student Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-neutral-500"
          >
            Join 500+ students who built their careers in Australia with us.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
                </div>
                <Quote className="text-neutral-100 mb-3 sm:mb-4" size={32} />
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 italic">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-neutral-900">{t.name}</div>
                  <div className="text-sm text-neutral-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-black rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-20 text-center text-white relative overflow-hidden"
      >
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8"
          >
            <Zap className="text-yellow-400" size={32} />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 leading-tight">
            Don't just come to Australia.
            <span className="block text-neutral-500 mt-2 italic">Win here.</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 mb-8 sm:mb-10 max-w-xl mx-auto">
            Your career in Australia starts with a single conversation.
            Book your free 30-minute strategy call today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-black px-10 sm:px-12 py-5 sm:py-6 rounded-full text-lg sm:text-xl font-bold hover:bg-neutral-100 transition-all shadow-2xl cursor-pointer flex items-center justify-center gap-3"
            >
              <Calendar size={20} />
              Book Your Free Call
            </motion.button>
          </div>
          <p className="mt-6 sm:mt-8 text-neutral-500 text-xs sm:text-sm font-medium">
            Limited slots available for the 2026 intake.
          </p>
        </div>

        {/* Background effects */}
        <div className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] bg-gradient-to-br from-blue-600/30 to-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[500px] h-[500px] bg-gradient-to-tl from-indigo-600/20 to-blue-600/10 rounded-full blur-[120px]" />
      </motion.div>
    </section>
  );
};

// NEW: Sticky Mobile CTA
const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-200 p-4 shadow-2xl shadow-black/10"
        >
          <button className="w-full bg-black text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 shadow-lg shadow-black/20 cursor-pointer">
            <Phone size={18} />
            Book Free Consultation
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-100 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16 lg:mb-20">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 sm:mb-6 group">
              <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-neutral-900">Magpie Career</span>
            </a>
            <p className="text-neutral-500 max-w-xs leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Premium career consulting for international students in Australia.
              Bridging the gap between graduation and professional success.
            </p>
            <div className="flex gap-3">
              {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-black hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <Globe size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-4 sm:mb-6 text-sm sm:text-base">Services</h5>
            <ul className="space-y-3 sm:space-y-4 text-neutral-500 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-black transition-colors">University Support</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Accommodation</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Career Coaching</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Job Placement</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4 sm:mb-6 text-sm sm:text-base">Company</h5>
            <ul className="space-y-3 sm:space-y-4 text-neutral-500 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Our Mentors</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4 sm:mb-6 text-sm sm:text-base">Legal</h5>
            <ul className="space-y-3 sm:space-y-4 text-neutral-500 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 sm:pt-10 lg:pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-neutral-400 text-xs font-medium uppercase tracking-wider">
          <div>© 2026 Magpie Career. All rights reserved.</div>
          <div className="flex gap-6 sm:gap-8">
            <span>Sydney</span>
            <span>Melbourne</span>
            <span>Brisbane</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <Services />
        <FounderStory />
        <Mentors />
        <Differentiation />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
