import React from 'react'

interface Step {
    number: string;
    title: string;
    description: string;
  }

interface ProcessProps {
    steps: Array<Step>;
}

const Process = ({ steps }: ProcessProps) => {
  return (
      <section
          id="how-it-works"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50"
      >
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                      Simple
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                          {" "}
                          Three-Step{" "}
                      </span>
                      Process
                  </h2>
                  <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                      Get started in minutes and begin building meaningful connections
                      that drive growth.
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
                          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                              {step.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                              {step.description}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Process