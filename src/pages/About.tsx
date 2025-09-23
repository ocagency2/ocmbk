import React from 'react';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Heart,
  Target,
  Lightbulb,
  CheckCircle
} from 'lucide-react';
import FadeInUp from '../components/FadeInUp';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Verified Manufacturers', icon: Users },
    { number: '2,000+', label: 'Active Retailers', icon: TrendingUp },
    { number: '₹50Cr+', label: 'Transaction Volume', icon: Award },
    { number: '25+', label: 'Cities Covered', icon: Globe }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in building lasting relationships through complete transparency in all our dealings and maintaining the highest standards of trust.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We continuously innovate to solve real problems in the luxury B2B space, leveraging cutting-edge technology to create better solutions.'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'Our success is measured by the success of our customers. We are committed to helping businesses grow and thrive on our platform.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product quality to customer service, setting new standards in the industry.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: '15+ years in luxury retail and fintech. Previously led digital transformation at major Indian conglomerates.'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Former tech lead at top fintech companies. Expert in AI/ML and scalable marketplace architectures.'
    },
    {
      name: 'Amit Patel',
      role: 'Head of Credit',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: '12+ years in banking and credit assessment. Previously VP at leading Indian banks and NBFCs.'
    },
    {
      name: 'Sneha Gupta',
      role: 'VP Operations',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Operations expert with deep understanding of luxury supply chains and B2B marketplace dynamics.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'Gallaa was founded with a vision to revolutionize luxury B2B trade in India.'
    },
    {
      year: '2023',
      title: 'First 100 Partners',
      description: 'Onboarded our first 100 verified manufacturers and retailers across major Indian cities.'
    },
    {
      year: '2024',
      title: 'Credit Launch',
      description: 'Launched our AI-powered credit assessment system, enabling instant credit approvals.'
    },
    {
      year: '2024',
      title: 'Series A Funding',
      description: 'Raised ₹25 Cr in Series A funding to accelerate growth and expand operations.'
    },
    {
      year: '2024',
      title: 'Pan-India Expansion',
      description: 'Expanded operations to 25+ cities with over 500 verified manufacturers.'
    },
    {
      year: '2025',
      title: 'AI Innovation',
      description: 'Launched advanced AI features for demand forecasting and personalized recommendations.'
    }
  ];

  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-6">
            About Gallaa
          </h1>
          <p className="text-xl text-[#ECE8E3]/80 max-w-3xl mx-auto">
            We're on a mission to transform India's luxury B2B trade ecosystem by connecting verified manufacturers with retailers through smart credit solutions and cutting-edge technology.
          </p>
        </FadeInUp>

        {/* Stats */}
        <FadeInUp delay={100} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD777]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">{stat.number}</div>
                <div className="text-[#ECE8E3]/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* Mission & Vision */}
        <FadeInUp delay={200} className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD777]/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">Our Mission</h2>
              <p className="text-[#ECE8E3]/80 leading-relaxed">
                To democratize access to luxury trade by creating India's most trusted B2B marketplace that empowers manufacturers and retailers with smart credit solutions, transparent pricing, and seamless transactions.
              </p>
            </div>

            <div className="bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD777]/20 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">Our Vision</h2>
              <p className="text-[#ECE8E3]/80 leading-relaxed">
                To become the backbone of India's luxury economy by building the most comprehensive ecosystem that connects every stakeholder in the luxury value chain through technology and innovation.
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* Values */}
        <FadeInUp delay={300} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-[#ECE8E3]/80 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <FadeInUp key={index} delay={400 + index * 100}>
                <div className="group p-8 bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-2xl hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD777]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#D4AF37]/30 group-hover:to-[#FFD777]/30 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-['Playfair_Display'] font-semibold mb-4">{value.title}</h3>
                  <p className="text-[#ECE8E3]/70 leading-relaxed">{value.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </FadeInUp>

        {/* Team */}
        <FadeInUp delay={500} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-[#ECE8E3]/80 max-w-3xl mx-auto">
              Experienced leaders from luxury retail, fintech, and technology sectors driving innovation in B2B commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <FadeInUp key={index} delay={600 + index * 100}>
                <div className="group text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#ECE8E3]/10 group-hover:border-[#D4AF37]/30 transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-[#D4AF37] font-medium mb-3">{member.role}</p>
                  <p className="text-[#ECE8E3]/70 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </FadeInUp>

        {/* Timeline */}
        <FadeInUp delay={700} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-[#ECE8E3]/80 max-w-3xl mx-auto">
              From a vision to transform luxury B2B trade to becoming India's trusted marketplace platform.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#D4AF37] to-[#FFD777] hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <FadeInUp key={index} delay={800 + index * 100}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                    <div className="flex-1">
                      <div className={`p-6 bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-xl ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="text-[#D4AF37] font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                        <p className="text-[#ECE8E3]/70">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-4 h-4 bg-gradient-to-br from-[#D4AF37] to-[#FFD777] rounded-full flex-shrink-0 relative z-10"></div>
                    
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Recognition */}
        <FadeInUp delay={900} className="mb-20">
          <div className="bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-['Playfair_Display'] font-bold mb-4">
                Recognition & Certifications
              </h2>
              <p className="text-xl text-[#ECE8E3]/80">
                Trusted by industry leaders and certified by global standards.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD777]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-semibold mb-2">ISO 27001 Certified</h3>
                <p className="text-[#ECE8E3]/70 text-sm">Information security management system certification</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD777]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-semibold mb-2">PCI DSS Compliant</h3>
                <p className="text-[#ECE8E3]/70 text-sm">Payment card industry data security standards</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD777]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-semibold mb-2">Startup India</h3>
                <p className="text-[#ECE8E3]/70 text-sm">Recognized by Government of India's Startup India initiative</p>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* CTA */}
        <FadeInUp delay={1000} className="text-center">
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#FFD777]/5 border border-[#D4AF37]/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-[#ECE8E3]/80 mb-8 max-w-2xl mx-auto">
              Be part of India's luxury trade transformation. Whether you're a manufacturer, retailer, or looking to join our team, we'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] font-semibold text-lg rounded-lg hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border border-[#ECE8E3]/20 hover:border-[#D4AF37] rounded-lg transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
};

export default About;