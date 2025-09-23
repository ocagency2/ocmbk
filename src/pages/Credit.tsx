import React, { useState } from 'react';
import { 
  Package, 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle, 
  Calculator,
  ArrowRight,
  Users
} from 'lucide-react';
import FadeInUp from '../components/FadeInUp';

const StockCredit: React.FC = () => {
  const [stockQuantity, setStockQuantity] = useState(10000); // default 10k items
  const [stockValuePerItem, setStockValuePerItem] = useState(500); // ₹500/item
  const [businessType, setBusinessType] = useState('retailer');
  const [creditScore, setCreditScore] = useState(750); // sample score

  const calculateStockWorth = () => {
    return stockQuantity * stockValuePerItem;
  };

  const calculateRepayment = () => {
    // Retailer pays only for sold items
    const assumedSellRate = 0.7; // e.g. 70% sell-through
    return Math.round(stockQuantity * stockValuePerItem * assumedSellRate);
  };

  const creditFeatures = [
    {
      icon: Package,
      title: "Risk-Free Stock Access",
      description: "Get inventory on credit. Pay only for what you sell, return the rest.",
      benefit: "Zero upfront cost"
    },
    {
      icon: TrendingUp,
      title: "Scalable Credit Score",
      description: "Your repayment history builds your credit score. Higher score = higher stock allocation.",
      benefit: "Grow faster with trust"
    },
    {
      icon: Shield,
      title: "Supervised by Gallaa",
      description: "We handle returns, reporting, and accountability between retailers and manufacturers.",
      benefit: "No stress on either side"
    },
    {
      icon: Users,
      title: "Shared Manufacturer Network",
      description: "Access stock from multiple manufacturers at once — diversify your catalog easily.",
      benefit: "One platform, many partners"
    }
  ];

  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-6">
            Smart Stock Credit
          </h1>
          <p className="text-xl text-[#ECE8E3]/80 max-w-3xl mx-auto">
            Access stock inventory on credit without upfront payments. 
            Sell first, pay later — while building your Gallaa credit score.
          </p>
        </FadeInUp>

        {/* Stock Credit Calculator */}
        <FadeInUp delay={100} className="mb-20">
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#FFD777]/5 border border-[#D4AF37]/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-['Playfair_Display'] font-bold mb-4">
                Stock Credit Calculator
              </h2>
              <p className="text-[#ECE8E3]/80">
                Estimate your allocated stock and repayment potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                
                {/* Business Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">Business Type</label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-4 py-3 bg-[#ECE8E3]/10 border border-[#ECE8E3]/20 rounded-lg focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 text-[#ECE8E3] transition-all duration-200"
                  >
                    <option value="retailer" className="bg-[#08070A] text-[#ECE8E3]">Retailer</option>
                    <option value="manufacturer" className="bg-[#08070A] text-[#ECE8E3]">Manufacturer</option>
                    <option value="distributor" className="bg-[#08070A] text-[#ECE8E3]">Distributor</option>
                  </select>
                </div>

                {/* Stock Quantity */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Stock Quantity: {stockQuantity.toLocaleString()} items
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="500"
                    value={stockQuantity}
                    onChange={(e) => setStockQuantity(Number(e.target.value))}
                    className="w-full h-2 bg-[#ECE8E3]/20 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-[#ECE8E3]/60 mt-1">
                    <span>1k</span>
                    <span>50k</span>
                  </div>
                </div>

                {/* Value Per Item */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Value Per Item: ₹{stockValuePerItem}
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={stockValuePerItem}
                    onChange={(e) => setStockValuePerItem(Number(e.target.value))}
                    className="w-full h-2 bg-[#ECE8E3]/20 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-[#ECE8E3]/60 mt-1">
                    <span>₹100</span>
                    <span>₹5000</span>
                  </div>
                </div>
              </div>

              {/* Stock Summary */}
              <div className="bg-[#ECE8E3]/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-[#D4AF37]" />
                  Stock Summary
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-[#ECE8E3]/70">Allocated Stock</span>
                    <span className="font-semibold">{stockQuantity.toLocaleString()} items</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#ECE8E3]/70">Value Per Item</span>
                    <span className="font-semibold">₹{stockValuePerItem}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#ECE8E3]/70">Total Stock Worth</span>
                    <span className="font-semibold">₹{calculateStockWorth().toLocaleString()}</span>
                  </div>
                  <div className="border-t border-[#ECE8E3]/20 pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="text-[#ECE8E3]/70">Expected Repayment (70% sell)</span>
                      <span className="font-bold text-[#D4AF37]">
                        ₹{calculateRepayment().toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-300">
                  Request Stock Credit
                  <ArrowRight className="inline-block w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Features */}
        <FadeInUp delay={200} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-4">
              Why Choose Gallaa Stock Credit?
            </h2>
            <p className="text-xl text-[#ECE8E3]/80 max-w-3xl mx-auto">
              Designed for B2B trade: risk-free inventory, flexible scaling, and AI-powered trust scoring.
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
      </div>
    </div>
  );
};

export default StockCredit;
