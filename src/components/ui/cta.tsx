import { ArrowRight, CheckCircle } from "lucide-react";
import React from "react";
import { Button } from "./button";

export default function Cta() {
  return (
    <main>
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
    </main>
  );
}
