import React, { useState } from 'react';
import { 
  CreditCard, 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle, 
  Calculator,
  ArrowRight,
  DollarSign,
  FileText,
  Users
} from 'lucide-react';
import FadeInUp from '../components/FadeInUp';

const Credit: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [tenure, setTenure] = useState(12);
  const [businessType, setBusinessType] = useState('retailer');

  const calculateEMI = () => {
    const rate = 0.12 / 12; // 12% annual rate
    const emi = (loanAmount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    return Math.round(emi);
  };

  const creditFeatures = [
    {
      icon: Clock,
      title: "Instant Approval",
      description: "Get credit decisions in under 24 hours with our AI-powered assessment system.",
      benefit: "No waiting, start trading immediately"
    },
    {
      icon: TrendingUp,
      title: "Flexible Credit Limits",
      description: "Credit lines from ₹1L to ₹50L+ based on your business profile and transaction history.",
      benefit: "Grow your credit as your business grows"
    },
    {
      icon: Shield,
      title: "Competitive Rates",
      description: "Starting from 12% per annum with transparent pricing and no hidden charges.",
      benefit: "Save on financing costs"
    },
    {
      icon: FileText,
      title: "Minimal Documentation",
      description: "Simple application process with digital document submission and verification.",
      benefit: "Quick and hassle-free approval"
    }
  ];

  const eligibilityCriteria = [
    "GST registered business with minimum 1 year of operations",
    "Annual turnover of ₹25L+ for retailers, ₹50L+ for manufacturers",
    "Clean credit history with no defaults in last 12 months",
    "Valid business licenses and regulatory compliance",
    "Bank statements for last 6 months",
    "Audited financial statements (if applicable)"
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Apply Online",
      description: "Fill out our simple application form with basic business details.",
      time: "5 minutes"
    },
    {
      step: 2,
      title: "Document Upload",
      description: "Upload required documents through our secure portal.",
      time: "10 minutes"
    },
    {
      step: 3,
      title: "AI Assessment",
      description: "Our AI system analyzes your application and generates a risk score.",
      time: "2-4 hours"
    },
    {
      step: 4,
      title: "Credit Decision",
      description: "Receive approval notification with credit limit and terms.",
      time: "24 hours"
    },
    {
      step: 5,
      title: "Start Trading",
      description: "Begin using your credit line for inventory purchases immediately.",
      time: "Instant"
    }
  ];

  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-6">
            Smart Credit Solutions
          </h1>
          <p className="text-xl text-[#ECE8E3]/80 max-w-3xl mx-auto">
            Access instant credit lines up to ₹50L+ with our AI-powered assessment system. 
            Fuel your business growth with flexible financing tailored for luxury trade.
          </p>
        </FadeInUp>

        {/* Credit Calculator */}
        <FadeInUp delay={100} className="mb-20">
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#FFD777]/5 border border-[#D4AF37]/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-['Playfair_Display'] font-bold mb-4">
                Credit Calculator
              </h2>
              <p className="text-[#ECE8E3]/80">
                Calculate your potential EMI and see how much credit you can access
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Business Type</label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-4 py-3 bg-[#ECE8E3]/10 border border-[#ECE8E3]/20 rounded-lg focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="retailer">Retailer</option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="distributor">Distributor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Credit Amount: ₹{loanAmount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="100000"
                    max="5000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-[#ECE8E3]/20 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-[#ECE8E3]/60 mt-1">
                    <span>₹1L</span>
                    <span>₹50L</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tenure: {tenure} months
                  </label>
                  <input
                    type="range"
                    min="6"
                    max="36"
                    step="6"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-[#ECE8E3]/20 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-[#ECE8E3]/60 mt-1">
                    <span>6 months</span>
                    <span>36 months</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#ECE8E3]/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-[#D4AF37]" />
                  Loan Summary
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-[#ECE8E3]/70">Loan Amount</span>
                    <span className="font-semibold">₹{loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#ECE8E3]/70">Interest Rate</span>
                    <span className="font-semibold">12% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#ECE8E3]/70">Tenure</span>
                    <span className="font-semibold">{tenure} months</span>
                  </div>
                  <div className="border-t border-[#ECE8E3]/20 pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="text-[#ECE8E3]/70">Monthly EMI</span>
                      <span className="font-bold text-[#D4AF37]">₹{calculateEMI().toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-300">
                  Apply for Credit
                  <ArrowRight className="inline-block w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Credit Features */}
        <FadeInUp delay={200} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-4">
              Why Choose Gallaa Credit?
            </h2>
            <p className="text-xl text-[#ECE8E3]/80 max-w-3xl mx-auto">
              Designed specifically for luxury trade businesses with features that understand your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {creditFeatures.map((feature, index) => (
              <FadeInUp key={index} delay={300 + index * 100}>
                <div className="group p-8 bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-2xl hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD777]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#D4AF37]/30 group-hover:to-[#FFD777]/30 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-['Playfair_Display'] font-semibold mb-4">{feature.title}</h3>
                  <p className="text-[#ECE8E3]/70 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="flex items-center text-[#D4AF37]">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{feature.benefit}</span>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </FadeInUp>

        {/* Application Process */}
        <FadeInUp delay={400} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-4">
              Simple Application Process
            </h2>
            <p className="text-xl text-[#ECE8E3]/80 max-w-3xl mx-auto">
              Get approved in 5 simple steps. Our streamlined process ensures quick decisions without compromising on security.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#D4AF37] to-[#FFD777] hidden md:block"></div>
            
            <div className="space-y-12">
              {applicationProcess.map((step, index) => (
                <FadeInUp key={index} delay={500 + index * 100}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                    <div className="flex-1">
                      <div className={`p-6 bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-xl ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <span className="text-sm text-[#D4AF37] bg-[#D4AF37]/20 px-2 py-1 rounded">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-[#ECE8E3]/70">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD777] rounded-full flex items-center justify-center text-[#08070A] font-bold text-lg flex-shrink-0 relative z-10">
                      {step.step}
                    </div>
                    
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Eligibility Criteria */}
        <FadeInUp delay={600} className="mb-20">
          <div className="bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-['Playfair_Display'] font-bold mb-4">
                Eligibility Criteria
              </h2>
              <p className="text-xl text-[#ECE8E3]/80">
                Check if you meet our requirements for credit approval
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-[#ECE8E3]/80">{criteria}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-300">
                Check Eligibility
                <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </FadeInUp>

        {/* CTA Section */}
        <FadeInUp delay={700} className="text-center">
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#FFD777]/5 border border-[#D4AF37]/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-6">
              Ready to Accelerate Your Business Growth?
            </h2>
            <p className="text-xl text-[#ECE8E3]/80 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Gallaa Credit to scale their operations and increase profitability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] font-semibold text-lg rounded-lg hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300">
                Apply Now
                <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-[#ECE8E3]/20 hover:border-[#D4AF37] rounded-lg transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
};

export default Credit;