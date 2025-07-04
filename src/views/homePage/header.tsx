"use client";
import React from 'react'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Zap,
  PlayCircle,
} from "lucide-react";

type AnimatedStats = {
  startups: number;
  investors: number;
  funding: number;
  matches: number;
};

interface HeaderProps {
  isVisible: boolean;
  animatedStats: AnimatedStats;
}
const Header = ({ isVisible, animatedStats }:HeaderProps) => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                  <Zap className="h-4 w-4 mr-1" />
                  Connecting Innovation with Investment
                </Badge>
    
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                  Where
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Startups{" "}
                  </span>
                  Meet
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    {" "}
                    Investors
                  </span>
                </h1>
    
                <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Join the premier platform connecting innovative startups with
                  strategic investors. Streamline your fundraising journey with
                  AI-powered matching, integrated communication, and comprehensive
                  deal management tools.
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
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} >
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
  )
}

export default Header