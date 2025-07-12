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
  Users,
  BarChart3,
  Clock,
  Database,
  Brain,
  Stethoscope,
  Heart,
  Calendar,
  FileCheck,
  AlertCircle,
  TrendingDown,
  Plus
} from 'lucide-react';
import { Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

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

          {/* Delivery Process Section */}
          <section id="delivery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.delivery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  How Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Smart Delivery</span> Works
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From prescription to patient in under 10 minutes with AI-powered automation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {deliverySteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div 
                      key={index}
                      className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                        isVisible.delivery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: step.delay }}
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} mb-6 transform hover:rotate-12 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      
                      {/* Step number indicator */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Revolutionary Hospital Pharmacy Solutions */}
          <section id="Services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.Services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Revolutionary <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Hospital Pharmacy Solutions</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive healthcare technology solutions that transform how hospitals and clinics operate
                </p>
              </div>

              {/* Primary Services */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {primaryServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={index}
                      className={`relative bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 ${
                        isVisible.Services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
                      <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 transform hover:rotate-12 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-white/90 mb-6 leading-relaxed">{service.description}</p>
                        <div className="bg-white/20 rounded-full px-4 py-2 text-sm font-semibold inline-block">
                          {service.stats}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {additionalServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={index}
                      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 ${
                        isVisible.Services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} mb-6 transform hover:rotate-12 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* AI-First EHR Section */}
          <section id="ehr" className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`transition-all duration-1000 ${isVisible.ehr ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Header Section */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-3 mb-6 animate-bounce">
                    <Zap className="h-5 w-5 text-cyan-400 mr-2" />
                    <span className="text-cyan-300 font-semibold">Launching Soon - Completely FREE</span>
                  </div>
                  
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    AI-First EHR with
                    <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      World-Class Features
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Complete hospital and clinic automation for any size - from small clinics to large hospitals. 
                    All workflows automated with cutting-edge AI technology.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                  {[
                    { icon: "🤖", title: "AI-Powered Automation", desc: "Smart workflows for all hospital operations" },
                    { icon: "🏥", title: "Complete Hospital Management", desc: "From small clinics to large hospitals" },
                    { icon: "📊", title: "Real-Time Analytics", desc: "Advanced insights and reporting" },
                    { icon: "🔒", title: "Enterprise Security", desc: "HIPAA compliant with end-to-end encryption" }
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 ${
                        isVisible.ehr ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Interactive Dashboard Preview */}
                <div className={`relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 mb-12 ${
                  isVisible.ehr ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: '800ms' }}>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full"></div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Activity className="h-6 w-6 mr-3 text-cyan-400" />
                    Live EHR Dashboard Preview
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Stats Cards */}
                    <div className="space-y-4">
                      {[
                        { label: "Active Patients", value: "1,247", icon: Users, trend: "+12%" },
                        { label: "Today's Visits", value: "89", icon: Calendar, trend: "+8%" },
                        { label: "Pending Labs", value: "23", icon: FileCheck, trend: "-5%" }
                      ].map((stat, index) => (
                        <div key={index} className="bg-white/10 rounded-xl p-4 border border-white/20">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-gray-300 text-sm">{stat.label}</p>
                              <p className="text-2xl font-bold text-white">{stat.value}</p>
                            </div>
                            <div className="flex flex-col items-end">
                              <stat.icon className="h-6 w-6 text-cyan-400 mb-1" />
                              <span className="text-green-400 text-xs">{stat.trend}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-4 flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Recent Activity
                      </h4>
                      <div className="space-y-3">
                        {[
                          { action: "New patient registered", time: "2 min ago", type: "success" },
                          { action: "Lab results uploaded", time: "5 min ago", type: "info" },
                          { action: "Prescription updated", time: "8 min ago", type: "warning" }
                        ].map((activity, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${
                              activity.type === 'success' ? 'bg-green-400' : 
                              activity.type === 'info' ? 'bg-blue-400' : 'bg-yellow-400'
                            }`}></div>
                            <div className="flex-1">
                              <p className="text-white text-sm">{activity.action}</p>
                              <p className="text-gray-400 text-xs">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Insights */}
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-4 flex items-center">
                        <Brain className="h-4 w-4 mr-2 animate-pulse" />
                        AI Insights
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-3">
                          <p className="text-cyan-300 text-sm font-medium">Efficiency Boost</p>
                          <p className="text-white text-xs">Patient wait time reduced by 23% this week</p>
                        </div>
                        <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg p-3">
                          <p className="text-green-300 text-sm font-medium">Cost Savings</p>
                          <p className="text-white text-xs">Inventory optimization saved $2,340</p>
                        </div>
                        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-3">
                          <p className="text-orange-300 text-sm font-medium">Alert</p>
                          <p className="text-white text-xs">Low stock: Paracetamol (3 days left)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="text-center">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                      Get Early Access - FREE
                      <ArrowRight className="inline-block ml-2 h-5 w-5" />
                    </button>
                    <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-indigo-900 transition-all duration-300 transform hover:scale-105">
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  About <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">MediKloud</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We're revolutionizing healthcare delivery through cutting-edge technology and AI-powered solutions
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    MediKloud is transforming healthcare delivery by creating the most advanced, AI-powered pharmacy and hospital management solutions. We believe that technology should make healthcare more accessible, efficient, and patient-centered.
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    From instant medicine delivery to comprehensive EHR systems, we're building the future of healthcare technology that serves hospitals, clinics, and patients with unprecedented efficiency and care.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">10min</div>
                      <div className="text-gray-600">Average Delivery Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                      <div className="text-gray-600">Service Availability</div>
                    </div>
                  </div>
                </div>

                <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-2xl">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Why Choose MediKloud?</h4>
                    <div className="space-y-4">
                      {[
                        { icon: Zap, title: "Lightning Fast", desc: "Sub-10 minute delivery times" },
                        { icon: Shield, title: "Secure & Compliant", desc: "HIPAA compliant with enterprise security" },
                        { icon: Bot, title: "AI-Powered", desc: "Advanced automation and intelligence" },
                        { icon: TrendingUp, title: "Scalable Solutions", desc: "From small clinics to large hospitals" }
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <feature.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">{feature.title}</h5>
                            <p className="text-gray-600">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Get in <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Touch</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ready to revolutionize your healthcare delivery? Let's discuss how MediKloud can transform your operations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <Smartphone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Phone</h4>
                          <p className="text-gray-600">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Email</h4>
                          <p className="text-gray-600">hello@medikloud.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Office</h4>
                          <p className="text-gray-600">123 Healthcare Ave, Medical District</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Hospital/Clinic name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Tell us about your needs..."
                        ></textarea>
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        {formSubmitted ? (
                          <span className="flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Message Sent!
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <img
                    src="/New_Logo_MK.png"
                    alt="MediKloud Logo"
                    className="h-12 w-auto mb-4 filter brightness-0 invert"
                  />
                  <p className="text-gray-400 mb-6 max-w-md">
                    Revolutionizing healthcare delivery through AI-powered pharmacy solutions and cutting-edge technology.
                  </p>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                      <span className="text-sm font-bold">f</span>
                    </div>
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                      <span className="text-sm font-bold">t</span>
                    </div>
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                      <span className="text-sm font-bold">in</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Services</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors duration-300">Hospital Pharmacies</a></li>
                    <li><a href="#" className="hover:text-white transition-colors duration-300">Medicine Delivery</a></li>
                    <li><a href="#" className="hover:text-white transition-colors duration-300">AI-First EHR</a></li>
                    <li><a href="#" className="hover:text-white transition-colors duration-300">Pharmacy Automation</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Company</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#about" className="hover:text-white transition-colors duration-300">About Us</a></li>
                    <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
                    <li><a href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p className="hover:text-gray-900 transition-colors duration-300">
                  &copy; 2025 MediKloud. Transforming Healthcare Delivery. | <a href="/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</a> | <a href="/terms" className="text-cyan-400 hover:underline">Terms of Service</a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      } />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  );
}

export default App;