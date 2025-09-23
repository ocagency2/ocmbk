import React, { useState } from 'react';
import { 
  Star, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  CreditCard, 
  CheckCircle,
  ArrowRight,
  Play,
  Globe,
  Lock
} from 'lucide-react';
import FadeInUp from '../components/FadeInUp';

const Home: React.FC = () => {
  const [activeTestVariant, setActiveTestVariant] = useState('A'); // A/B test state

  // A/B Test Hero Variants
  const heroVariants = {
    A: {
      headline: "India's Premier Luxury B2B Marketplace",
      subheadline: "Connect with verified luxury manufacturers. Access credit-backed inventory. Scale your premium retail business with confidence.",
      cta: "Start Your Journey"
    },
    B: {
      headline: "Credit-Powered Luxury Trade Platform",
      subheadline: "Revolutionary inventory financing meets premium B2B marketplace. Transform how you source and sell luxury goods in India.",
      cta: "Unlock Credit Access"
    }
  };

  const currentHero = heroVariants[activeTestVariant];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-4 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#D4AF37]/5 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center max-w-4xl mx-auto">
            <div className="mb-6 flex justify-center">
              <div className="flex items-center space-x-2 px-4 py-2 bg-[#ECE8E3]/10 rounded-full border border-[#ECE8E3]/20">
                <Star className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-medium">Trusted by 500+ Premium Brands</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold leading-tight mb-6">
              {currentHero.headline}
            </h1>
            
            <p className="text-xl md:text-2xl text-[#ECE8E3]/80 leading-relaxed mb-8 max-w-3xl mx-auto">
              {currentHero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] font-semibold text-lg rounded-lg hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 transform hover:-translate-y-1 min-w-48">
                {currentHero.cta}
                <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </button>
              <button className="flex items-center px-8 py-4 border border-[#ECE8E3]/20 hover:border-[#D4AF37]/50 rounded-lg transition-all duration-300 min-w-48">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </FadeInUp>

          {/* Trust Badges */}
          <FadeInUp delay={200} className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm">Bank-Grade Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm">PCI DSS Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm">GST Integrated</span>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-6">
              Revolutionizing Luxury B2B Trade
            </h2>
            <p className="text-xl text-[#ECE8E3]/80 max-w-3xl mx-auto">
              Experience the future of premium wholesale with our comprehensive marketplace ecosystem designed for India's luxury market.
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: "Smart Credit Solutions",
                description: "Access instant credit lines up to ₹50L based on AI-powered risk assessment and transaction history.",
                features: ["Instant approval", "Flexible terms", "Dynamic limits"]
              },
              {
                icon: Users,
                title: "Verified Network",
                description: "Connect with pre-verified luxury manufacturers and authorized distributors across India.",
                features: ["KYC verified", "Quality assured", "Performance tracked"]
              },
              {
                icon: TrendingUp,
                title: "Market Intelligence",
                description: "Make informed decisions with real-time pricing data, trend analysis, and demand forecasting.",
                features: ["Live pricing", "Trend alerts", "Demand insights"]
              },
              {
                icon: Shield,
                title: "Secure Transactions",
                description: "Bank-grade security with escrow protection, fraud prevention, and secure payment processing.",
                features: ["Escrow protected", "Fraud detection", "Encrypted payments"]
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Process orders, payments, and documentation in minutes with our streamlined workflows.",
                features: ["Quick processing", "Auto documentation", "Same-day settlement"]
              },
              {
                icon: Globe,
                title: "Pan-India Reach",
                description: "Access manufacturers and retailers across all major Indian cities with integrated logistics.",
                features: ["National coverage", "Local partnerships", "Express delivery"]
              }
            ].map((feature, index) => (
              <FadeInUp key={index} delay={index * 100}>
                <div className="group p-8 bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-2xl hover:border-[#D4AF37]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD777]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#D4AF37]/30 group-hover:to-[#FFD777]/30 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-['Playfair_Display'] font-semibold mb-4">{feature.title}</h3>
                  <p className="text-[#ECE8E3]/70 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-[#ECE8E3]/60">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-6">
              Join India's Premier Luxury Trade Network
            </h2>
            <p className="text-xl text-[#ECE8E3]/80 mb-8 leading-relaxed">
              Whether you're a manufacturer looking to expand your reach or a retailer seeking premium inventory, Gallaa provides the platform to scale your luxury business.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <button className="group p-6 border border-[#ECE8E3]/20 rounded-xl hover:border-[#D4AF37]/50 transition-all duration-300 text-left">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD777]/20 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-semibold">For Manufacturers</h3>
                </div>
                <p className="text-[#ECE8E3]/70 mb-4">
                  Connect with verified retailers, expand your distribution network, and access working capital solutions.
                </p>
                <span className="text-[#D4AF37] group-hover:text-[#FFD777] transition-colors">
                  Register as Manufacturer →
                </span>
              </button>

              <button className="group p-6 border border-[#ECE8E3]/20 rounded-xl hover:border-[#D4AF37]/50 transition-all duration-300 text-left">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD777]/20 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-semibold">For Retailers</h3>
                </div>
                <p className="text-[#ECE8E3]/70 mb-4">
                  Source premium inventory, access credit lines, and grow your luxury retail business with confidence.
                </p>
                <span className="text-[#D4AF37] group-hover:text-[#FFD777] transition-colors">
                  Register as Retailer →
                </span>
              </button>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* A/B Test Toggle (for demo purposes - remove in production) */}
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={() => setActiveTestVariant(activeTestVariant === 'A' ? 'B' : 'A')}
          className="px-4 py-2 bg-[#D4AF37] text-[#08070A] rounded-lg text-sm font-medium"
        >
          Test Variant: {activeTestVariant}
        </button>
      </div>
    </div>
  );
};

export default Home;