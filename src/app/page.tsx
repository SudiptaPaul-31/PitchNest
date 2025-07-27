"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import {
  ArrowRight,
  Users,
  Building2,
  CheckCircle,
  Zap,
  PlayCircle,
  Star,
  Twitter,
  Github,
  Send,
} from "lucide-react";
import { Testimonial } from "@/components/ui/testimonial";
import Features from "@/components/Features";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-gray-900 dark:to-black transition-colors duration-500">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 transition-colors">
              <Zap className="h-4 w-4 mr-1" />
              Connecting Innovation with Investment
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Where
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                {" "}
                Startups{" "}
              </span>
              Meet
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent dark:from-orange-400 dark:via-red-400 dark:to-pink-400">
                {" "}
                Investors
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join the premier platform connecting innovative startups with
              strategic investors. Streamline your fundraising journey with
              AI-powered matching, integrated communication, and comprehensive
              deal management tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4 group dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-slate-300 hover:bg-slate-50 group dark:border-slate-600 dark:hover:bg-slate-800"
              >
                <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {animatedStats.startups.toLocaleString()}+
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                Active Startups
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {animatedStats.investors.toLocaleString()}+
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                Verified Investors
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                ${animatedStats.funding.toLocaleString()}M+
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                Funding Raised
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                {animatedStats.matches.toLocaleString()}+
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                Successful Matches
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Simple
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent dark:from-orange-400 dark:to-red-400">
                {" "}
                Three-Step{" "}
              </span>
              Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Get started in minutes and begin building meaningful connections
              that drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform dark:from-blue-500 dark:to-indigo-500">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 transform translate-x-8 dark:from-blue-800 dark:to-indigo-800" />
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <Testimonial />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block">Fundraising Journey?</span>
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-10 max-w-2xl mx-auto">
            Join thousands of successful startups and investors who are already
            using PitchNest to build the future of innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 group dark:bg-slate-800 dark:text-blue-300 dark:hover:bg-slate-700"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 dark:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-blue-300"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="flex items-center justify-center mt-8 space-x-6 text-blue-100 dark:text-blue-200">
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
      <Footer />
    </div>
  );
}
