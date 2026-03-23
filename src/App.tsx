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
  Users
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-neutral-200 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-neutral-900">Magpie Career</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Outcomes', 'Why Us', 'Testimonials'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all active:scale-95 cursor-pointer">
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-neutral-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {['Services', 'Outcomes', 'Why Us', 'Testimonials'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-lg font-medium text-neutral-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-black text-white w-full py-3 rounded-xl font-semibold">
              Book Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden bg-neutral-50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white border border-neutral-200 rounded-full text-neutral-500 shadow-sm">
            The #1 Career Partner for International Students
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-neutral-900 mb-8 leading-[1.1]">
            Study in Australia is easy. <br className="hidden md:block" />
            <span className="text-neutral-400">Building a career is not.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We help you go from student to hired by top companies. 
            Don’t just study in Australia. Build a successful career here.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group shadow-xl cursor-pointer">
              Book a Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="w-full sm:w-auto bg-white text-black border border-neutral-200 px-10 py-5 rounded-full text-lg font-bold hover:bg-neutral-50 transition-all active:scale-95 cursor-pointer">
              View Success Stories
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold uppercase tracking-widest">Mentors from</span>
              <div className="flex gap-6 items-center">
                <span className="text-xl font-bold">Google</span>
                <span className="text-xl font-bold">Amazon</span>
                <span className="text-xl font-bold">P&G</span>
                <span className="text-xl font-bold">Deloitte</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const stats = [
    { label: "Students Placed", value: "500+" },
    { label: "Top Universities", value: "All Group of 8" },
    { label: "Avg. Salary Increase", value: "45%" },
    { label: "Success Rate", value: "98%" },
  ];

  return (
    <section id="outcomes" className="py-24 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-black mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-neutral-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  return (
    <section className="py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-12">
              You got accepted... <br />
              <span className="text-neutral-500">Now what?</span>
            </h2>
            <div className="space-y-8">
              {[
                "No local work experience in Australia",
                "Hard to get interviews without a network",
                "Cultural barriers in recruitment processes",
                "Visa complexities affecting job offers"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-neutral-800 rounded-full">
                    <X size={16} className="text-red-400" />
                  </div>
                  <p className="text-xl text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-square bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="text-8xl font-black text-neutral-800 mb-4">72%</div>
                <p className="text-neutral-400 text-lg max-w-xs mx-auto">
                  of international students struggle to find relevant work within 6 months of graduation.
                </p>
              </div>
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
      icon: <GraduationCap size={32} />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Settle in Australia",
      desc: "From premium accommodation to local onboarding, we make your transition seamless.",
      icon: <Home size={32} />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Land a high-paying job",
      desc: "Direct referrals, interview coaching, and career strategy with mentors from Big Tech.",
      icon: <Briefcase size={32} />,
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">Your Path to Success</h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">A comprehensive 3-step strategy designed for the Australian market.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-300", step.color)}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
              <div className="mt-6 flex items-center text-sm font-bold text-black group-hover:gap-2 transition-all cursor-pointer">
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
    <section id="services" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">Premium Services</h2>
            <p className="text-xl text-neutral-500">Tailored support for every stage of your international journey.</p>
          </div>
          <button className="hidden md:block text-black font-bold border-b-2 border-black pb-1 hover:opacity-70 transition-opacity cursor-pointer">
            View all services
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] border border-neutral-200 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-6 leading-tight">{service.title}</h3>
              <p className="text-neutral-600 mb-10 leading-relaxed">{service.desc}</p>
              <ul className="space-y-4 mb-12">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm font-medium text-neutral-700">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl border border-neutral-200 font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentiation = () => {
  return (
    <section id="why-us" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-12">Why Magpie Career?</h2>
            
            <div className="space-y-12">
              {[
                {
                  title: "Mentors from Top Companies",
                  desc: "Learn from professionals who have actually worked at Google, Amazon, and P&G. Real insights, not theory.",
                  icon: <Users className="text-blue-600" />
                },
                {
                  title: "Real Job-Focused Strategy",
                  desc: "Most agents focus on commissions from universities. We focus on your employment outcome.",
                  icon: <Zap className="text-amber-500" />
                },
                {
                  title: "Personalized Guidance",
                  desc: "No cookie-cutter advice. We build a custom roadmap based on your specific career goals and background.",
                  icon: <ShieldCheck className="text-emerald-600" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="mt-1 w-12 h-12 shrink-0 bg-neutral-50 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-10">The Magpie Difference</h3>
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-neutral-800">
                  <div className="text-sm font-bold text-neutral-500 uppercase">Traditional Agents</div>
                  <div className="text-sm font-bold text-blue-400 uppercase">Magpie Career</div>
                </div>
                {[
                  ["University focused", "Career focused"],
                  ["Basic visa support", "End-to-end relocation"],
                  ["General advice", "Industry-specific mentors"],
                  ["No job guarantee", "Direct referral network"]
                ].map(([trad, mag], idx) => (
                  <div key={idx} className="grid grid-cols-2 gap-4 items-center">
                    <div className="text-neutral-400 flex items-center gap-2">
                      <X size={14} className="text-neutral-600" /> {trad}
                    </div>
                    <div className="font-medium flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-blue-400" /> {mag}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-sm text-neutral-300 italic">
                  "Magpie didn't just help me with my visa; they helped me land my dream job at Atlassian within 3 months of arriving."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-700" />
                  <span className="text-xs font-bold">Chen W., Software Engineer</span>
                </div>
              </div>
            </div>
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
          </div>
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
      image: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Kevin Zhang",
      role: "Data Analyst at Deloitte",
      content: "Magpie Career made my move to Melbourne so easy. The accommodation they found was perfect, and the career roadmap they built for me was spot on.",
      image: "https://picsum.photos/seed/kevin/100/100"
    },
    {
      name: "Ananya S.",
      role: "Software Engineer at Amazon",
      content: "I wouldn't be at Amazon today without Magpie. Their direct referral network and mock interview sessions gave me the confidence I needed.",
      image: "https://picsum.photos/seed/ananya/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">Student Success Stories</h2>
          <p className="text-xl text-neutral-500">Join 500+ students who built their careers in Australia with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
                </div>
                <Quote className="text-neutral-200 mb-4" size={40} />
                <p className="text-neutral-700 text-lg leading-relaxed mb-8 italic">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-50">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale"
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
    <section className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-black rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Don’t just come to Australia. <br />
            <span className="text-neutral-500 italic">Win here.</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto">
            Your career in Australia starts with a single conversation. 
            Book your free 30-minute strategy call today.
          </p>
          <button className="bg-white text-black px-12 py-6 rounded-full text-xl font-bold hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-2xl cursor-pointer">
            Book Your Free Call
          </button>
          <p className="mt-8 text-neutral-500 text-sm font-medium">
            Limited slots available for the 2026 intake.
          </p>
        </div>
        
        {/* Background effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-neutral-900">Magpie Career</span>
            </div>
            <p className="text-neutral-500 max-w-xs leading-relaxed mb-8">
              Premium career consulting for international students in Australia. 
              Bridging the gap between graduation and professional success.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-black hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <Globe size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Services</h5>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li><a href="#" className="hover:text-black transition-colors">University Support</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Accommodation</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Career Coaching</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Job Placement</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Our Mentors</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Legal</h5>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-400 text-xs font-medium uppercase tracking-widest">
          <div>© 2026 Magpie Career. All rights reserved.</div>
          <div className="flex gap-8">
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
        <Differentiation />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
