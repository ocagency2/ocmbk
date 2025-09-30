import React, { useEffect } from 'react';
import FadeInUp from '../components/FadeInUp';

const Credit: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="mb-8">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Credit Solutions
          </h1>
          <p className="text-xl text-[#ECE8E3]/80 max-w-3xl">
            Access flexible credit solutions designed for B2B fashion businesses. Get the funding you need to grow your inventory and expand your operations.
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FadeInUp delay={100}>
            <div className="bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Trade Credit</h3>
              <p className="text-[#ECE8E3]/70 mb-4">
                Get instant credit approval for your wholesale purchases with flexible payment terms.
              </p>
              <ul className="space-y-2 text-sm text-[#ECE8E3]/60">
                <li>• Up to ₹10 Lakh credit limit</li>
                <li>• 30-90 day payment terms</li>
                <li>• Quick approval process</li>
              </ul>
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Business Loans</h3>
              <p className="text-[#ECE8E3]/70 mb-4">
                Secure funding for inventory expansion and business growth with competitive rates.
              </p>
              <ul className="space-y-2 text-sm text-[#ECE8E3]/60">
                <li>• Loans up to ₹50 Lakh</li>
                <li>• Competitive interest rates</li>
                <li>• Minimal documentation</li>
              </ul>
            </div>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Invoice Financing</h3>
              <p className="text-[#ECE8E3]/70 mb-4">
                Convert your pending invoices into immediate cash flow for business operations.
              </p>
              <ul className="space-y-2 text-sm text-[#ECE8E3]/60">
                <li>• Up to 80% invoice value</li>
                <li>• Same-day processing</li>
                <li>• No collateral required</li>
              </ul>
            </div>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
};

export default Credit;