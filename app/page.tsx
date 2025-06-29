'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/ui/navbar';
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Shield, 
  Search, 
  MessageCircle, 
  Building2,
  Zap,
  Globe,
  CheckCircle,
  Star,
  PlayCircle
} from 'lucide-react';

export default function Home() {
  const [animatedStats, setAnimatedStats] = useState({
    startups: 0,
    investors: 0,
    funding: 0,
    matches: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate statistics
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;
      
      let step = 0;
      const animate = () => {
        step++;
        const progress = step / steps;
        
        setAnimatedStats({
          startups: Math.floor(1250 * progress),
          investors: Math.floor(890 * progress),
          funding: Math.floor(450 * progress),
          matches: Math.floor(2300 * progress)
        });
        
        if (step < steps) {
          setTimeout(animate, increment);
        }
      };
      
      animate();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Smart Matching",
      description: "AI-powered algorithm connects startups with the right investors based on industry, stage, and investment criteria."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Integrated Communication",
      description: "Built-in video chat and messaging system streamlines the networking and due diligence process."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Profiles",
      description: "Thoroughly vetted startup founders and accredited investors ensure quality connections."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Deal Analytics",
      description: "Comprehensive insights and metrics help both parties make informed investment decisions."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up and build a comprehensive profile showcasing your startup or investment portfolio."
    },
    {
      number: "02",
      title: "Get Matched",
      description: "Our smart algorithm finds compatible connections based on your preferences and criteria."
    },
    {
      number: "03",
      title: "Connect & Grow",
      description: "Start conversations, schedule meetings, and close deals through our integrated platform."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
              <Zap className="h-4 w-4 mr-1" />
              Connecting Innovation with Investment
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Where 
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Startups{" "}
              </span>
              Meet
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                {" "}Investors
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join the premier platform connecting innovative startups with strategic investors. 
              Streamline your fundraising journey with AI-powered matching, integrated communication, 
              and comprehensive deal management tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4 group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-slate-300 hover:bg-slate-50 group"
              >
                <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {animatedStats.startups.toLocaleString()}+
              </div>
              <div className="text-slate-600">Active Startups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {animatedStats.investors.toLocaleString()}+
              </div>
              <div className="text-slate-600">Verified Investors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                ${animatedStats.funding.toLocaleString()}M+
              </div>
              <div className="text-slate-600">Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {animatedStats.matches.toLocaleString()}+
              </div>
              <div className="text-slate-600">Successful Matches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}Succeed
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful tools and features designed to accelerate connections and streamline the investment process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Simple 
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {" "}Three-Step{" "}
              </span>
              Process
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Get started in minutes and begin building meaningful connections that drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 transform translate-x-8" />
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by 
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                {" "}Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-slate-600">Join thousands of successful entrepreneurs and investors</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "PitchNest connected us with the perfect investor who understood our vision. 
                  The platform made the entire process seamless and efficient."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">John Doe</div>
                    <div className="text-slate-500">CEO, TechStart Inc.</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "As an investor, I've found exceptional startups through PitchNest. 
                  The quality of deals and founders on the platform is outstanding."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Sarah Miller</div>
                    <div className="text-slate-500">Partner, Apex Ventures</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "The integrated communication tools and deal analytics helped us close 
                  our Series A in record time. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MK
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Mike Kim</div>
                    <div className="text-slate-500">Founder, GrowthLab</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your 
            <span className="block">Fundraising Journey?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of successful startups and investors who are already using PitchNest 
            to build the future of innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
            >
              Schedule Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center mt-8 space-x-6 text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Free 30-day trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Setup in minutes
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">PitchNest</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Connecting innovative startups with strategic investors to build the future of business.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">For Startups</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Investors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© 2025 PitchNest. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Globe className="h-5 w-5 text-slate-400" />
              <span className="text-slate-400">Made with ❤️ for entrepreneurs worldwide</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}