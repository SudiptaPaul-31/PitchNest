import React from 'react'
import { Card, CardContent } from '@/components/ui/card';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface ServiceProps {
    features: Array<Feature>;
}

const Service = ({features}:ServiceProps) => {
  return (
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                      Everything You Need to
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          {" "}
                          Succeed
                      </span>
                  </h2>
                  <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                      Powerful tools and features designed to accelerate connections and
                      streamline the investment process.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                      <Card
                          key={index}
                          className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                      >
                          <CardContent className="p-8 text-center">
                              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                  <div className="text-blue-600">{feature.icon}</div>
                              </div>
                              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                  {feature.title}
                              </h3>
                              <p className="text-slate-600 leading-relaxed">
                                  {feature.description}
                              </p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

  )
}

export default Service