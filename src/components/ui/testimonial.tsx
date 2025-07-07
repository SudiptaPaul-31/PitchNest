import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonial() {
  return (
    <main>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted by
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent dark:text-white">
                {" "}
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-white">
              Join thousands of successful entrepreneurs and investors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-white mb-6 italic">
                  &quot;PitchNest connected us with the perfect investor who
                  understood our vision. The platform made the entire process
                  seamless and efficient.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      John Doe
                    </div>
                    <div className="text-slate-500 dark:text-slate-300">
                      CEO, TechStart Inc.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-white mb-6 italic">
                  &quot;As an investor, I&apos;ve found exceptional startups
                  through PitchNest. The quality of deals and founders on the
                  platform is outstanding.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      Sarah Miller
                    </div>
                    <div className="text-slate-500 dark:text-slate-300">
                      Partner, Apex Ventures
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-white mb-6 italic">
                  &quot;The integrated communication tools and deal analytics
                  helped us close our Series A in record time. Highly
                  recommended!&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MK
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      Mike Kim
                    </div>
                    <div className="text-slate-500 dark:text-slate-300">
                      Founder, GrowthLab
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
