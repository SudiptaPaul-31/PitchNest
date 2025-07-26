"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  MessageCircle,
  Shield,
  TrendingUp,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Features() {
  const features: Feature[] = [
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

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              {" "}
              Succeed
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Powerful tools and features designed to accelerate connections and
            streamline the investment process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-8 text-center text-slate-700 dark:text-slate-200">
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform dark:from-blue-900 dark:to-indigo-900">
                  <div className="text-blue-600 dark:text-blue-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}