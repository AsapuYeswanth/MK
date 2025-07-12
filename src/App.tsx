import React, { useState, useEffect, useRef } from 'react';
import { 
  Truck, 
  Bot, 
  Building2, 
  CreditCard, 
  FileText,  
  Shield, 
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  Activity,
  Zap,
  TrendingUp,
  Package,
  Timer,
  Smartphone,
  Layers,
  Home,
  Bed,
  Pill,
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy'; // Adjust the path if needed
import TermsOfService from './TermsOfService';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<{
  hero: boolean;
  stats: boolean;
  delivery: boolean;
  Services: boolean;
  contact: boolean;
  about: boolean;
  privacy: boolean;
  terms: boolean;
  returnPolicy: boolean;
  ehr: boolean;
  [key: string]: boolean;
}>({
  hero: false,
  stats: false,
  delivery: false,
  Services: false,
  contact: false,
  about: false,
  privacy: false,
  terms: false,
  returnPolicy: false,
  ehr: false,
});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typewriterText, setTypewriterText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const heroRef = useRef(null);
  type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
};

const particlesRef = useRef<Particle[]>([]);

  // Enhanced typewriter effect with multiple phases
  useEffect(() => {
    const text = 'Medicine Deliveries';
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setTypewriterText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  // Glow intensity animation
  useEffect(() => {
    const glowTimer = setInterval(() => {
      setGlowIntensity((prev: number) => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(glowTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev: any) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Initialize particles for hero section
  useEffect(() => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    particlesRef.current = particles;
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const deliverySteps = [
    {
      icon: Smartphone,
      title: "Order Placed",
      description: "Patient or hospital staff places order through our platform",
      color: "from-blue-500 to-cyan-500",
      delay: "0ms"
    },
    {
      icon: Bot,
      title: "AI Processing",
      description: "Our AI validates prescription and checks inventory in real-time",
      color: "from-purple-500 to-pink-500",
      delay: "200ms"
    },
    {
      icon: Package,
      title: "Smart Packaging",
      description: "Automated systems prepare and package medications securely",
      color: "from-green-500 to-teal-500",
      delay: "400ms"
    },
    {
      icon: Truck,
      title: "Express Delivery",
      description: "Real-time tracked delivery from hospital pharmacy to patient bed or home",
      color: "from-orange-500 to-red-500",
      delay: "600ms"
    }
  ];

  const primaryServices = [
    {
      icon: Building2,
      title: "Tech-First Hospital Pharmacies",
      description: "We setup and operate cutting-edge, AI-powered pharmacies inside hospitals with automated inventory and smart dispensing systems.",
      color: "from-blue-600 to-cyan-600",
      stats: "Full Setup & Operations",
      highlight: true
    },
    {
      icon: Bed,
      title: "Virtual Pharmacy Kiosks",
      description: "first-of-its-kind solution empowering small clinics to offer medicines without owning a pharmacy, delivered under 10 minutes from our nearest hospital pharmacies.",
      color: "from-purple-600 to-pink-600",
      stats: "< 10 min in-hospital",
      highlight: true
    },
    {
      icon: Home,
      title: "Home Delivery Service",
      description: "Same-day delivery from hospital pharmacies to patient homes with real-time tracking and temperature-controlled transport.",
      color: "from-green-600 to-teal-600",
      stats: "Same-day home delivery",
      highlight: true
    }
  ];

  const additionalServices = [
    {
      icon: Bot,
      title: "Automated Pharmacy Operations",
      description: "Streamline inventory management, prescription processing, and workflow optimization with AI-powered automation.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Layers,
      title: "Virtual Pharmacy Kiosks",
      description: "Self-service kiosks for high-traffic hospitals offering medication dispensing in under 10 minutes.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Activity,
      title: "AI-First EHR/HMS",
      description: "Comprehensive electronic health records and hospital management system powered by artificial intelligence.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: CreditCard,
      title: "Loyalty & Financial Programs",
      description: "Cashbacks, loans, EMIs, and health insurance programs to enhance patient engagement and accessibility.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FileText,
      title: "AI Prescription Reading",
      description: "Advanced OCR tech that processes digital and handwritten prescriptions with ~100% accuracy (yes, seriously).",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Shield,
      title: "Secure Data Handling",
      description: "Enterprise-grade encryption and HIPAA-compliant data security for all patient information.",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const visionStats = [
    { number: "Vision", label: "Revolutionizing Healthcare", icon: Package, color: "from-blue-500 to-cyan-500" },
    { number: "AI", label: "Intelligence at Our Core", icon: Building2, color: "from-purple-500 to-pink-500" },
    { number: "Speed", label: "< 10min Hospital Delivery", icon: Timer, color: "from-green-500 to-teal-500" },
    { number: "Future", label: "Next-Gen Pharmacy Tech", icon: CheckCircle, color: "from-orange-500 to-red-500" }
  ];

  return (<Routes>
    <Route path="/" element={
      <>
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Advanced Particle System */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-x-hidden">
        <svg className="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[600px]">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {particlesRef.current.map((particle) => (
            <circle
              key={particle.id}
              cx={particle.x + Math.sin(scrollY * 0.01 + particle.id) * 20}
              cy={particle.y + Math.cos(scrollY * 0.01 + particle.id) * 15}
              r={particle.size}
              fill="url(#particleGradient)"
              opacity={particle.opacity}
              filter="url(#glow)"
              className="animate-pulse"
            />
          ))}
          <defs>
            <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="fixed pointer-events-none z-10 mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transition: 'all 0.1s ease-out'
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full opacity-50"></div>
      </div>

      {/* Advanced Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
  src="/CG_MK_Logo_trimmed.png"
  alt="MediKloud Logo"
  className="h-8 sm:h-10 md:h-12 w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[250px]"
/>



      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10 items-center">
        <button
  onClick={() => scrollToSection('delivery')}
  className="text-blue-600 text-base md:text-lg font-semibold hover:text-cyan-600 transition-colors px-4"
>
  Solutions
</button>
        <button
  onClick={() => scrollToSection('Services')}
  className="text-blue-600 text-base md:text-lg font-semibold hover:text-cyan-600 transition-colors px-4"
>
  Services
</button>

        {/* Contact Us Button (restored animation version) */}
        <button 
  onClick={() => scrollToSection('contact')}
  className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 flex items-center justify-center"
>
  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 font-semibold text-base md:text-lg">
  Talk to us
</span>

  {/* Animated gradient on hover */}
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

  {/* Subtle pulse effect */}
  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 animate-pulse rounded-xl"></div>
</button>

      </div>

      {/* Mobile toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-white border-t border-gray-200">
      <div className="px-4 py-2 space-y-2">
        <button onClick={() => scrollToSection('delivery')} className="block w-full text-left text-gray-700 py-2">
          Solutions
        </button>
        <button onClick={() => scrollToSection('Services')} className="block w-full text-left text-gray-700 py-2">
          Services
        </button>
        <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-blue-600 py-2 font-medium">
          Contact Us
        </button>
      </div>
    </div>
  )}
</nav>





      {/* Hero Section with Fixed Text Layout */}
      <section ref={heroRef} className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Morphing Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute -top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl transition-all duration-[3000ms] ease-in-out"
            style={{
              transform: `translate(${Math.sin(scrollY * 0.01) * 50}px, ${Math.cos(scrollY * 0.01) * 30}px) scale(${1 + Math.sin(scrollY * 0.005) * 0.2})`,
              filter: `blur(${30 + Math.sin(scrollY * 0.01) * 10}px)`
            }}
          ></div>
          <div 
            className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl transition-all duration-[4000ms] ease-in-out"
            style={{
              transform: `translate(${Math.cos(scrollY * 0.008) * 40}px, ${Math.sin(scrollY * 0.008) * 25}px) scale(${1 + Math.cos(scrollY * 0.006) * 0.15})`,
              filter: `blur(${25 + Math.cos(scrollY * 0.008) * 8}px)`
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            id="hero"
            className={`transition-all duration-1000 ease-out ${
              isVisible.hero ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <div className="mb-2">
  <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold animate-bounce">
    🚀 Accelerating Pharmacies inside Hospitals
  </span>
</div>
            
            <h1 
  className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 cursor-pointer select-none space-y-4"
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
>
              <div className="block">
                <span 
                  className="inline-block animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 transition-all duration-700 transform hover:scale-105"
                  style={{ animationDelay: '0.2s' }}
                >
                  Lightning-Fast
                </span>
              </div>
              
              <div className="block">
                <span className="relative inline-block group">
                  <span 
                    className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 animate-fade-in-up transform transition-all duration-500 hover:scale-110"
                    style={{ 
  animationDelay: '0.4s',
  textShadow: isHovering ? `0 0 4px rgba(59, 130, 246, 0.2)` : 'none',
  filter: isHovering ? `drop-shadow(0 0 3px rgba(6, 182, 212, 0.15))` : 'none'
}}
                  >
                    {typewriterText}
                  </span>
                  <span 
                    className="animate-blink text-blue-500 ml-1 text-6xl font-thin"
                    style={{
                      textShadow: `0 0 ${10 + glowIntensity * 0.1}px rgba(59, 130, 246, 0.6)`,
                      filter: `drop-shadow(0 0 5px rgba(6, 182, 212, 0.4))`
                    }}
                  >
                    |
                  </span>
                  
                  {/* Enhanced background glow - larger and more visible */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg"
                    style={{
                      transform: `scale(${1.3 + Math.sin(glowIntensity * 0.05) * 0.1})`,
                      top: '-20%',
                      bottom: '-20%',
                      left: '-30%',
                      right: '-30%'
                    }}
                  ></div>
                  
                  {/* Larger floating particles around text */}
                  {isHovering && [...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-70 animate-ping"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${i * 250}ms`,
                        animationDuration: `${1.8 + Math.random() * 0.7}s`
                      }}
                    ></div>
                  ))}
                </span>
              </div>
              
              <div className="block">
                <span 
                  className="inline-block animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600 transition-all duration-700 transform hover:scale-105"
                  style={{ animationDelay: '0.6s' }}
                >
                  from Hospitals
                </span>
              </div>
            </h1>
            
            <p 
  className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up transition-colors duration-300"
  style={{ animationDelay: '0.8s' }}
>
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold">
  Scripting the Future of Hospital Pharmacies
</span>
  <span className="block text-gray-600 hover:text-gray-700">
    with AI-powered systems, smart kiosks, and online medicine deliveries.
  </span>
</p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: '1s' }}
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
              
              {/* <button 
                onClick={() => scrollToSection('delivery')}
                className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center font-semibold">
                  Learn More
                </span>
              </button> */}
            </div>
          </div>

          {/* Animated Delivery Visualization */}
          <div 
            className={`relative transition-all duration-1000 ease-out ${
              isVisible.hero ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Seamless Ordering</h3>
                <p className="text-gray-600">From hospital pharmacy to patient location</p>
              </div>
              
              <div className="space-y-6">
                {deliverySteps.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 group cursor-pointer"
                    style={{ 
                      animationDelay: step.delay,
                      animation: `slideInRight 0.8s ease-out ${step.delay} both`
                    }}
                  >
                    <div className={`relative bg-gradient-to-br ${step.color} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <step.icon className="h-6 w-6 text-white" />
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                    <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-4 transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Vision Stats Section */}
      <section id="stats" className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {visionStats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center space-y-4 transform group-hover:scale-110 transition-all duration-500">
                  <div className={`relative bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                    <stat.icon className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl animate-pulse"></div>
                  </div>
                  
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-all duration-500">
                    <span className="inline-block animate-count-up">{stat.number}</span>
                  </div>
                  
                  <div className="text-blue-100 text-sm md:text-base group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
                
                {/* Ripple effect on hover */}
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Services - Delivery Focus */}
      <section id="delivery" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.delivery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Revolutionary
              </span>
              {' '}Hospital Pharmacy Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With AI-powered automation, we eliminate inventory losses and pilferage, unlock new revenue streams, and give hospitals full real-time control over their pharmacy operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {primaryServices.map((service, index) => (
              <div 
                key={index} 
                className={`group relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-transparent transition-all duration-700 transform hover:-translate-y-6 hover:rotate-1 cursor-pointer overflow-hidden ${
                  isVisible.delivery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                        animationDelay: `${i * 200}ms`,
                        animation: 'float 3s ease-in-out infinite'
                      }}
                    ></div>
                  ))}
                </div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700 shadow-2xl`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                      {service.stats}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                </div>
                
                {/* Advanced hover effect */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 group-hover:w-full transition-all duration-700"></div>
                <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 group-hover:h-full transition-all duration-700 delay-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-First EHR Section */}
      <section id="ehr" className="py-12 sm:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full">
              {[...Array(144)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded animate-pulse"
                  style={{
                    animationDelay: `${(i * 50) % 3000}ms`,
                    animationDuration: `${2000 + (i % 1000)}ms`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div 
              className={`transition-all duration-1000 ${
                isVisible.ehr ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-purple-100 text-purple-700 rounded-full text-sm font-semibold animate-bounce">
                  🚀 Launching Soon - Completely FREE
                </span>
              </div>
              
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  AI-First EHR
                </span>
                <br />
                <span className="text-white">
                  World-Class Features
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the future of healthcare management with our comprehensive Electronic Health Records system. 
                Powered by artificial intelligence and designed for hospitals and clinics of all sizes.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  { 
                    icon: "🤖", 
                    title: "AI-Powered Automation", 
                    description: "Intelligent workflow automation that learns and adapts to your hospital's unique processes"
                  },
                  { 
                    icon: "🏥", 
                    title: "Complete Hospital Management", 
                    description: "From patient registration to discharge - manage every aspect of your healthcare facility"
                  },
                  { 
                    icon: "📊", 
                    title: "Real-Time Analytics", 
                    description: "Advanced reporting and insights to optimize operations and improve patient outcomes"
                  },
                  { 
                    icon: "🔒", 
                    title: "Enterprise Security", 
                    description: "HIPAA-compliant with military-grade encryption and comprehensive audit trails"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 group cursor-pointer"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Get Early Access - FREE
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                
                <button className="group relative border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105">
                  <span className="relative z-10">Watch Demo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center font-semibold">
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>
            
            {/* Interactive EHR Dashboard Preview */}
            <div 
              className={`relative transition-all duration-1000 ${
                isVisible.ehr ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-400"></div>
                  </div>
                  <span className="text-white/80 text-sm font-medium">MediKloud EHR Dashboard</span>
                </div>
                
                {/* Dashboard Content */}
                <div className="space-y-4">
                  {/* Patient Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Active Patients", value: "1,247", color: "from-cyan-500 to-blue-500" },
                      { label: "Today's Visits", value: "89", color: "from-purple-500 to-pink-500" },
                      { label: "Pending Labs", value: "23", color: "from-green-500 to-teal-500" }
                    ].map((stat, index) => (
                      <div 
                        key={index}
                        className="bg-white/10 p-3 rounded-xl border border-white/20 group hover:bg-white/20 transition-all duration-300"
                        style={{ animationDelay: `${index * 300}ms` }}
                      >
                        <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                          {stat.value}
                        </div>
                        <div className="text-white/70 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Recent Activity */}
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Activity className="w-4 h-4 mr-2 text-cyan-400" />
                      Recent Activity
                    </h4>
                    <div className="space-y-2">
                      {[
                        { time: "2 min ago", action: "New patient registered", status: "success" },
                        { time: "5 min ago", action: "Lab results uploaded", status: "info" },
                        { time: "12 min ago", action: "Prescription generated", status: "warning" }
                      ].map((activity, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between text-sm group hover:bg-white/5 p-2 rounded transition-all duration-300"
                          style={{ animationDelay: `${(index + 3) * 200}ms` }}
                        >
                          <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                            {activity.action}
                          </span>
                          <span className="text-white/60 text-xs">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* AI Insights */}
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-4 rounded-xl border border-cyan-400/30">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Bot className="w-4 h-4 mr-2 text-cyan-400 animate-pulse" />
                      AI Insights
                    </h4>
                    <p className="text-white/80 text-sm">
                      "Patient flow is 15% higher than usual. Consider opening additional consultation rooms."
                    </p>
                  </div>
                </div>
                
                {/* Floating elements around dashboard */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-75 delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Additional Services */}
      <section id="Services" className="py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.Services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Healthcare Technology Suite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond deliveries, we're envisioning comprehensive solutions to modernize every aspect of hospital pharmacy operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-white p-6 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden ${
                  isVisible.Services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 75}ms`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`relative bg-gradient-to-br ${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="relative text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="relative text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30"></div>
          {/* Animated mesh gradient */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
            }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div 
              className={`transition-all duration-1000 ${
                isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Transform Your Hospital's 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {' '}Pharmacy Operations
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the future of healthcare delivery with our comprehensive pharmacy solutions. 
                From AI-powered automation to lightning-fast delivery networks, we're ready to revolutionize your operations.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: CheckCircle, text: "Enable medicine deliveries at no upfront cost" },
                  { icon: Zap, text: "AI-powered automation and efficiency" },
                  { icon: Shield, text: "Enterprise-grade security and compliance" },
                  { icon: TrendingUp, text: "Proven results and scalable solutions" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center text-gray-300 group cursor-pointer"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="group-hover:text-white transition-colors duration-300 text-lg">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              className={`bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 transition-all duration-1000 ${
                isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <form 
  onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/xrbkovkg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      setFormSubmitted(true);
      form.reset(); // optional: clear form
    }
  }}
  className="space-y-6"
>
  {[
    { id: "yourName", label: "Your Name", type: "text", name: "name", placeholder: "Enter your name", required: true },
    { id: "phone", label: "Phone Number", type: "tel", name: "phone", placeholder: "Enter your phone number", required: true },
    { id: "company", label: "Company/Hospital Name", type: "text", name: "company", placeholder: "Enter your organization name", required: true }
  ].map((field, index) => (
    <div key={field.id} style={{ animationDelay: `${index * 150}ms` }}>
      <label htmlFor={field.id} className="block text-sm font-medium text-white mb-2">
        {field.label} <span className="text-red-500">*</span>
      </label>
      <input 
        type={field.type} 
        id={field.id} 
        name={field.name}
        required={field.required}
        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
        placeholder={field.placeholder}
      />
    </div>
  ))}

  <div style={{ animationDelay: '450ms' }}>
    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
      Your Message
    </label>
    <textarea 
      id="message" 
      name="message"
      rows={4} 
      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
      placeholder="How can we help you?"
    ></textarea>
  </div>

  {/* Optional: Redirect to thank-you page */}
  <input type="hidden" name="_redirect" value="https://medikloud.com/thank-you" />
{formSubmitted && (
  <p className="text-green-400 text-lg font-semibold">
    Thanks for submitting the form. We will get in touch with you shortly.
  </p>
)}
  <button 
    type="submit" 
    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden group"
    style={{ animationDelay: '600ms' }}
  >
    <span className="relative z-10">Let's talk</span>
    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
  </button>
</form>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Footer */}
      <footer className="bg-white text-gray-800 py-10 sm:py-16 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-white"></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-4 gap-8">
      <div className="group">
        <div className="flex items-center space-x-3 mb-6">
          <img 
  src="/CG_MK_Logo_trimmed.png" 
  alt="MediKloud Logo" 
  className="h-auto w-[160px] sm:w-[200px] md:w-[240px] group-hover:scale-110 transition-transform duration-700" 
/>
        </div>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
          Revolutionizing healthcare delivery through innovative pharmacy logistics and AI-powered automation.
        </p>
      </div>

      {/* Solutions */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-gray-900">Solutions</h4>
        <ul className="space-y-3 text-gray-600">
          <li>Tech-First Pharmacies</li>
          <li>Virtual Pharmacies</li>
          <li>Home Delivery</li>
          <li>AI Automation</li>
        </ul>
      </div>

      {/* Technology */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-gray-900">Technology</h4>
        <ul className="space-y-3 text-gray-600">
          <li>AI Prescription Reading</li>
          <li>Virtual Kiosks</li>
          <li>EHR Integration</li>
          <li>Data Security</li>
        </ul>
      </div>

      {/* Contact Info or Leave Blank */}
      <div>
  <h4 className="text-lg font-semibold mb-4 text-gray-900">Company</h4>
  <ul className="space-y-3 text-gray-600 mb-4">
    <li>Email: hello@medikloud.com</li>
    <li>Phone: +91-7702670993</li>
  </ul>
  <div className="flex items-center space-x-4 text-gray-600">
    {/* LinkedIn Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.2 2.4-2.4 5-2.4 5.4 0 6.4 3.5 6.4 8v9.2h-5V17c0-2.1 0-4.8-3-4.8s-3.5 2.3-3.5 4.7v7.1H7.5V8z"/>
    </svg>

    {/* X (Twitter) Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
      <path d="M21.543 2.797c-.77.342-1.597.572-2.463.676a4.302 4.302 0 0 0 1.884-2.37 8.726 8.726 0 0 1-2.73 1.043 4.278 4.278 0 0 0-7.313 3.903 12.145 12.145 0 0 1-8.812-4.47 4.26 4.26 0 0 0-.579 2.15 4.28 4.28 0 0 0 1.905 3.564 4.257 4.257 0 0 1-1.937-.535v.053a4.28 4.28 0 0 0 3.433 4.192 4.295 4.295 0 0 1-1.13.15c-.276 0-.543-.026-.805-.077a4.282 4.282 0 0 0 3.997 2.974 8.59 8.59 0 0 1-6.323 1.771 12.11 12.11 0 0 0 6.56 1.926c7.872 0 12.18-6.518 12.18-12.172 0-.185-.004-.369-.012-.552a8.688 8.688 0 0 0 2.137-2.213z"/>
    </svg>
  </div>
</div>
    </div>

    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
      <p className="hover:text-gray-900 transition-colors duration-300">
        &copy; 2025 MediKloud. Transforming Healthcare Delivery. | <a href="/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</a> | <a href="/terms" className="text-cyan-400 hover:underline">Terms of Service</a>
    </div>
  </div>
</footer>

      <style>{`
          .hero-heading {
            line-height: 1.2;
          }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes count-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
           }
        
        .animate-count-up {
          animation: count-up 0.8s ease-out forwards;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
        </>
        }
      />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  );
}

export default App;