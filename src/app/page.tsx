'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/ui/navbar';
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Search,
  MessageCircle,
  Building2,
  CheckCircle,
  Star,
  Twitter,
  Github,
  Send,
} from "lucide-react";
import { Testimonial } from '@/components/ui/testimonial';
import HomePage from '@/views/homePage';

export default function Home() {
  const [animatedStats, setAnimatedStats] = useState({
    startups: 0,
    investors: 0,
    funding: 0,
    matches: 0,
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
          matches: Math.floor(2300 * progress),
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
      description:
        "AI-powered algorithm connects startups with the right investors based on industry, stage, and investment criteria.",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Integrated Communication",
      description:
        "Built-in video chat and messaging system streamlines the networking and due diligence process.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Profiles",
      description:
        "Thoroughly vetted startup founders and accredited investors ensure quality connections.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Deal Analytics",
      description:
        "Comprehensive insights and metrics help both parties make informed investment decisions.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Sign up and build a comprehensive profile showcasing your startup or investment portfolio.",
    },
    {
      number: "02",
      title: "Get Matched",
      description:
        "Our smart algorithm finds compatible connections based on your preferences and criteria.",
    },
    {
      number: "03",
      title: "Connect & Grow",
      description:
        "Start conversations, schedule meetings, and close deals through our integrated platform.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <Navbar />

      {/* Main Page */}
      <HomePage isVisible={isVisible} animatedStats={animatedStats} features={features} steps={steps} />

      {/* Social Proof Section */}
              <Testimonial />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block">Fundraising Journey?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of successful startups and investors who are already
            using PitchNest to build the future of innovation.
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
                Connecting innovative startups with strategic investors to build
                the future of business.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    For Startups
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    For Investors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Docs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>


          <div className="border-t border-slate-800 pt-8 relative flex flex-col md:flex-row items-center justify-between">

            <p className="text-slate-400 text-center md:text-left mb-4 md:mb-0">
              © 2025 PitchNest. All rights reserved.
            </p>

            <div className="md:hidden mb-4">
              <span className="text-slate-400 text-center block">
                Made with ❤️ for entrepreneurs worldwide
              </span>
            </div>

            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a
                href="#"
              >
                <Twitter className="h-5 w-5 text-slate-400 hover:text-white transition" />
              </a>
              <a
                href="https://github.com/SudiptaPaul-31/PitchNest"
                target="_blank"
              >
                <Github className="h-5 w-5 text-slate-400 hover:text-white transition" />
              </a>
              <a href="https://t.me/pitchnest_od" target="_blank" >
                <Send className="h-5 w-5 text-slate-400 hover:text-white transition" />
              </a>
            </div>

            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <span className="text-slate-400 text-center">
                Made with ❤️ for entrepreneurs worldwide
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
