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

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-white relative overflow-x-hidden">
          {/* Navigation */}
          <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <div className="flex items-center">
                  <img
                    src="/New_Logo_MK.png"
                    alt="MediKloud Logo"
                    className="h-8 sm:h-10 md:h-12 w-auto"
                  />
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('Services')}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('ehr')}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    EHR System
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Us
                  </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                <div className="px-4 py-6 space-y-4">
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('Services')}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('ehr')}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                  >
                    EHR System
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="block w-full text-left bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 mt-4"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* Hero Section */}
          <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  Revolutionizing
                  <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {typewriterText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  AI-powered hospital pharmacies, instant medicine delivery, and cutting-edge healthcare technology
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button 
                    onClick={() => scrollToSection('Services')}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    Explore Our Solutions
                    <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started Today
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section id="stats" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {visionStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index}
                      className={`text-center transform transition-all duration-700 ${
                        isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 transform hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                      <p className="text-gray-600">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Test Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Welcome to MediKloud</h2>
              <p className="text-xl text-gray-600">Your healthcare technology partner</p>
            </div>
          </section>
        </div>
      } />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  );
}

export default App;