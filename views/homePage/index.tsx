import React from 'react'
import Header from './header'
import Service from './service';
import Process from './process';

type AnimatedStats = {
  startups: number;
  investors: number;
  funding: number;
  matches: number;
};

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HeaderProps {
  isVisible: boolean;
  animatedStats: AnimatedStats;
  features: Array<Feature>;
  steps: Array<Step>;
}

const HomePage = ({ isVisible, animatedStats, features, steps }: HeaderProps) => {
  return (
    <div>
      {/* Hero Section */}
      <Header isVisible={isVisible} animatedStats={animatedStats} />
      {/* Features Section */}
      <Service features={features} />
      {/* How It Works Section */}
      <Process steps={steps} />
    </div>
  )
}

export default HomePage