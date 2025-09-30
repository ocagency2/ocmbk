import React from 'react';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for small retailers getting started",
      features: [
        "Credit limit up to ₹5L",
        "50 transactions/month",
        "Basic analytics dashboard",
        "Email support",
        "Standard verification process",
        "Mobile app access",
        "GST invoice generation",
        "Basic payment gateway"
      ],
      cta: "Start Free Trial",
      popular: false,
      savings: "Save ₹6,000 annually"
    },
    {
      name: "Professional",
      price: "₹7,999",
      period: "/month",
      description: "Ideal for growing retail businesses",
      features: [
        "Credit limit up to ₹25L",
        "Unlimited transactions",
        "Advanced analytics & insights",
        "Priority phone & chat support",
        "Premium verification (24hrs)",
        "API access & integrations",
        "Bulk order management",
        "Custom payment terms",
        "Dedicated account manager",
        "Advanced reporting tools",
        "Multi-location support",
        "Inventory management tools"
      ],
      cta: "Most Popular",
      popular: true,
      savings: "Save ₹19,200 annually"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large retailers and manufacturers",
      features: [
        "Credit limit up to ₹50L+",
        "Unlimited everything",
        "Custom analytics dashboard",
        "Dedicated account manager",
        "White-label solutions",
        "Custom API integrations",
        "SLA guarantees (99.9% uptime)",
        "Volume-based discounts",
        "Custom workflow automation",
        "Advanced security features",
        "Compliance management",
        "24/7 priority support"
      ],
      cta: "Contact Sales",
      popular: false,
      savings: "Custom pricing available"
    }
  ];

  const addOns = [
    {
      name: "Advanced Analytics",
      price: "₹1,999/month",
      description: "Deep insights, predictive analytics, and custom reports"
    },
    {
      name: "API Access",
      price: "₹999/month",
      description: "Full API access for custom integrations and automation"
    },
    {
      name: "Priority Support",
      price: "₹1,499/month",
      description: "24/7 phone support with dedicated account manager"
    },
    {
      name: "White Label",
      price: "₹4,999/month",
      description: "Custom branding and white-label marketplace solution"
    }
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "All plans come with a 14-day free trial that includes full access to features, up to 10 transactions, and email support. No credit card required."
    },
    {
      question: "How does the credit limit work?",
      answer: "Credit limits are determined by our AI-powered assessment based on your business profile, transaction history, and financial health. Limits can be increased as your business grows."
    },
    {
      question: "Are there any setup fees?",
      answer: "No setup fees for any plan. You only pay the monthly subscription fee. Enterprise plans may have custom implementation costs depending on requirements."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, UPI, net banking, and bank transfers. All payments are processed securely through our PCI-compliant payment gateway."
    },
    {
      question: "Is there a long-term contract?",
      answer: "No long-term contracts required. All plans are month-to-month. Annual subscriptions are available with additional discounts."
    }
  ];

  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-6">
            Transparent Pricing for Every Business
          </h1>
          <p className="text-xl text-[#ECE8E3]/80 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core marketplace features with different credit and transaction limits.
          </p>
          
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className="text-[#ECE8E3]/70">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-12 h-6 bg-[#ECE8E3]/20 rounded-full cursor-pointer"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-[#D4AF37] rounded-full transition-transform"></div>
            </div>
            <span className="text-[#ECE8E3]/70">
              Annual 
              <span className="ml-2 px-2 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs rounded">
                Save 20%
              </span>
            </span>
          </div>
        </FadeInUp>

        {/* Pricing Cards */}
        <FadeInUp delay={100} className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-[#D4AF37] bg-gradient-to-b from-[#D4AF37]/10 to-transparent scale-105' 
                  : 'border-[#ECE8E3]/20 bg-[#ECE8E3]/5 hover:border-[#D4AF37]/50'
              }`}>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center px-4 py-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] text-sm font-semibold rounded-full">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-['Playfair_Display'] font-bold mb-2">{plan.name}</h3>
                  <p className="text-[#ECE8E3]/70 mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-[#ECE8E3]/60">{plan.period}</span>
                  </div>
                  <p className="text-sm text-[#D4AF37]">{plan.savings}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-[#ECE8E3]/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] hover:shadow-lg hover:shadow-[#D4AF37]/25'
                    : 'border border-[#ECE8E3]/30 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}>
                  {plan.cta}
                  {plan.cta !== 'Most Popular' && <ArrowRight className="inline-block w-4 h-4 ml-2" />}
                </button>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* Add-ons */}
        <FadeInUp delay={200} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-4">
              Powerful Add-ons
            </h2>
            <p className="text-xl text-[#ECE8E3]/80 max-w-3xl mx-auto">
              Enhance your plan with additional features and services tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="p-6 bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-xl hover:border-[#D4AF37]/30 transition-all duration-300">
                <h3 className="font-semibold mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-[#D4AF37] mb-3">{addon.price}</p>
                <p className="text-[#ECE8E3]/70 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* Features Comparison */}
        <FadeInUp delay={300} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-4">
              Compare Plans
            </h2>
            <p className="text-xl text-[#ECE8E3]/80">
              See what's included in each plan to make the right choice for your business.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-[#ECE8E3]/20 rounded-xl overflow-hidden">
              <thead className="bg-[#ECE8E3]/5">
                <tr>
                  <th className="text-left p-4 font-semibold">Features</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold bg-[#D4AF37]/10">Professional</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECE8E3]/10">
                {[
                  ['Credit Limit', '₹5L', '₹25L', '₹50L+'],
                  ['Monthly Transactions', '50', 'Unlimited', 'Unlimited'],
                  ['Analytics Dashboard', 'Basic', 'Advanced', 'Custom'],
                  ['Support', 'Email', 'Priority', '24/7 Dedicated'],
                  ['API Access', '❌', '✅', '✅'],
                  ['White Label', '❌', '❌', '✅'],
                  ['SLA Guarantee', '❌', '❌', '99.9%']
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="p-4 font-medium">{row[0]}</td>
                    <td className="p-4 text-center text-[#ECE8E3]/70">{row[1]}</td>
                    <td className="p-4 text-center bg-[#D4AF37]/5 text-[#ECE8E3]/70">{row[2]}</td>
                    <td className="p-4 text-center text-[#ECE8E3]/70">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInUp>

        {/* FAQ */}
        <FadeInUp delay={400} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#ECE8E3]/80">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-xl p-6">
                <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
                <p className="text-[#ECE8E3]/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* CTA */}
        <FadeInUp delay={500} className="text-center">
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#FFD777]/5 border border-[#D4AF37]/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#ECE8E3]/80 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already growing with Gallaa. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] font-semibold text-lg rounded-lg hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-[#ECE8E3]/20 hover:border-[#D4AF37] rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>

            <p className="text-[#ECE8E3]/60 mt-6 text-sm">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
};

export default Pricing;