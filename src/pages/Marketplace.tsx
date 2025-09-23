import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';

const Marketplace: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 1247 },
    { id: 'jewelry', name: 'Jewelry', count: 342 },
    { id: 'watches', name: 'Watches', count: 189 },
    { id: 'fashion', name: 'Fashion', count: 256 },
    { id: 'electronics', name: 'Electronics', count: 178 },
    { id: 'home-decor', name: 'Home & Decor', count: 234 },
    { id: 'automobiles', name: 'Automobiles', count: 48 }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Gold Necklace Set",
      manufacturer: "Rajesh Jewellers",
      price: 125000,
      originalPrice: 150000,
      rating: 4.8,
      reviews: 24,
      image: "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "jewelry",
      inStock: true,
      minOrder: 5,
      location: "Mumbai, Maharashtra"
    },
    {
      id: 2,
      name: "Luxury Swiss Watch Collection",
      manufacturer: "TimeKeepers Ltd",
      price: 85000,
      originalPrice: 95000,
      rating: 4.9,
      reviews: 18,
      image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "watches",
      inStock: true,
      minOrder: 2,
      location: "Delhi, NCR"
    },
    {
      id: 3,
      name: "Designer Silk Saree Collection",
      manufacturer: "Heritage Textiles",
      price: 15000,
      originalPrice: 18000,
      rating: 4.7,
      reviews: 31,
      image: "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "fashion",
      inStock: true,
      minOrder: 10,
      location: "Bangalore, Karnataka"
    },
    {
      id: 4,
      name: "Premium Leather Handbags",
      manufacturer: "Crafted Leather Co",
      price: 8500,
      originalPrice: 10000,
      rating: 4.6,
      reviews: 42,
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "fashion",
      inStock: false,
      minOrder: 20,
      location: "Chennai, Tamil Nadu"
    },
    {
      id: 5,
      name: "Crystal Chandelier Set",
      manufacturer: "Illumina Decor",
      price: 45000,
      originalPrice: 52000,
      rating: 4.8,
      reviews: 15,
      image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "home-decor",
      inStock: true,
      minOrder: 3,
      location: "Jaipur, Rajasthan"
    },
    {
      id: 6,
      name: "Premium Audio System",
      manufacturer: "SoundTech Pro",
      price: 35000,
      originalPrice: 40000,
      rating: 4.7,
      reviews: 28,
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "electronics",
      inStock: true,
      minOrder: 5,
      location: "Pune, Maharashtra"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeInUp className="mb-8">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Luxury Marketplace
          </h1>
          <p className="text-xl text-[#ECE8E3]/80 max-w-3xl">
            Discover premium products from verified manufacturers across India. Access exclusive wholesale pricing and credit-backed purchasing.
          </p>
        </FadeInUp>

        {/* Search and Filters */}
        <FadeInUp delay={100} className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#ECE8E3]/50" />
              <input
                type="text"
                placeholder="Search products, manufacturers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#ECE8E3]/10 border border-[#ECE8E3]/20 rounded-lg focus:border-[#D4AF37] focus:outline-none text-[#ECE8E3] placeholder-[#ECE8E3]/50"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center px-4 py-2 border border-[#ECE8E3]/20 rounded-lg hover:border-[#D4AF37]/50 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </button>
              
              <div className="flex border border-[#ECE8E3]/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-[#D4AF37] text-[#08070A]' : 'hover:bg-[#ECE8E3]/10'} transition-colors`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-[#D4AF37] text-[#08070A]' : 'hover:bg-[#ECE8E3]/10'} transition-colors`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </FadeInUp>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <FadeInUp delay={200} className="lg:w-64 flex-shrink-0">
            <div className="bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                          : 'hover:bg-[#ECE8E3]/10'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="float-right text-sm text-[#ECE8E3]/60">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>

          {/* Products Grid */}
          <div className="flex-1">
            <FadeInUp delay={300} className="mb-6">
              <div className="flex items-center justify-between">
                <p className="text-[#ECE8E3]/70">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
                <select className="px-4 py-2 bg-[#ECE8E3]/10 border border-[#ECE8E3]/20 rounded-lg focus:border-[#D4AF37] focus:outline-none">
                  <option className="bg-[#08070A] text-[#ECE8E3]">Sort by: Featured</option>
                  <option className="bg-[#08070A] text-[#ECE8E3]">Price: Low to High</option>
                  <option className="bg-[#08070A] text-[#ECE8E3]">Price: High to Low</option>
                  <option className="bg-[#08070A] text-[#ECE8E3]">Rating</option>
                  <option className="bg-[#08070A] text-[#ECE8E3]">Newest</option>
                </select>
              </div>
            </FadeInUp>

            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product, index) => (
                <FadeInUp key={product.id} delay={400 + index * 50}>
                  <div className={`group bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-xl overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}>
                    <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-semibold">Out of Stock</span>
                        </div>
                      )}
                      <div className="absolute top-3 right-3 flex gap-2">
                        <button className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-[#D4AF37]/20 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-[#D4AF37]/20 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-lg group-hover:text-[#D4AF37] transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center text-sm text-[#ECE8E3]/60">
                          <Star className="w-4 h-4 text-[#D4AF37] mr-1" />
                          {product.rating} ({product.reviews})
                        </div>
                      </div>
                      
                      <p className="text-[#ECE8E3]/70 text-sm mb-3">{product.manufacturer}</p>
                      <p className="text-[#ECE8E3]/60 text-sm mb-4">{product.location}</p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold text-[#D4AF37]">
                          ₹{product.price.toLocaleString()}
                        </span>
                        <span className="text-[#ECE8E3]/50 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-sm text-green-400">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                        </span>
                      </div>
                      
                      <p className="text-sm text-[#ECE8E3]/60 mb-4">
                        Min. Order: {product.minOrder} pieces
                      </p>
                      
                      <div className="flex gap-2">
                        <button 
                          disabled={!product.inStock}
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] font-medium rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </button>
                        <button className="px-4 py-2 border border-[#ECE8E3]/20 hover:border-[#D4AF37] rounded-lg transition-colors">
                          Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>

            {/* Pagination */}
            <FadeInUp delay={600} className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border border-[#ECE8E3]/20 rounded-lg hover:border-[#D4AF37] transition-colors">
                  Previous
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      page === 1
                        ? 'bg-[#D4AF37] text-[#08070A]'
                        : 'border border-[#ECE8E3]/20 hover:border-[#D4AF37]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-4 py-2 border border-[#ECE8E3]/20 rounded-lg hover:border-[#D4AF37] transition-colors">
                  Next
                </button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;