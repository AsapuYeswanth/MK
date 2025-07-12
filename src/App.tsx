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
        <>
          <div className="min-h-screen bg-white relative overflow-x-hidden">
            {/* Rest of your component code */}
          </div>
        </>
      } />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms\" element={<TermsOfService />} />
    </Routes>
  );
}

export default App;