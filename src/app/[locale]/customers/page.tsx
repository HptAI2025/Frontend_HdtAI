'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState } from 'react';

export default function CustomersPage() {
  const t = useTranslations('customers');
  const [activeFilter, setActiveFilter] = useState('All');

  const caseStudies = [
    {
      id: 'vietinbank',
      category: 'Enterprise',
      company: 'VietinBank',
      title: 'HDT AI helps VietinBank engineers overcome complex banking system challenges and accelerate development',
      image: '/api/placeholder/400/250',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'fpt',
      category: 'Enterprise', 
      company: 'FPT Software',
      title: 'How HDT AI Became FPT\'s #1 Contributor with 2,000+ Merged PRs',
      image: '/api/placeholder/400/250',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'vingroup',
      category: 'Enterprise',
      company: 'VinGroup',
      title: 'HDT AI fixes tens of thousands of hours of technical debt, letting engineers focus on innovation',
      image: '/api/placeholder/400/250', 
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'tiki',
      category: 'Teams',
      company: 'Tiki',
      title: 'Tiki expands e-commerce platform coverage and ships new features with HDT AI',
      image: '/api/placeholder/400/250',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'shopee',
      category: 'Teams',
      company: 'Shopee Vietnam',
      title: 'How Shopee refactors millions of lines of code to improve engineering efficiency with HDT AI',
      image: '/api/placeholder/400/250',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'zalo',
      category: 'Teams',
      company: 'Zalo',
      title: 'Scaling Social Platform Development with HDT AI',
      image: '/api/placeholder/400/250',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const filteredCaseStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <p className="text-slate-400 text-lg mb-4">Industry leaders choose to</p>
                <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                  Build with <span className="text-blue-400">HDT AI</span>
                </h1>
                
                <blockquote className="text-xl text-slate-300 mb-8 leading-relaxed">
                  "HDT AI has been a game changer for VietinBank. We've seen an 8x engineering efficiency gain using HDT AI for migrations and refactors on projects with millions of lines of code. With HDT AI we can move even faster, delivering outcomes in months instead of years, which is critical for us given VietinBank's rapid growth."
                </blockquote>
                
                <Link
                  href="/customers/vietinbank"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </div>

            {/* Right Column - Customer Photo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Mock customer photo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                      V
                    </div>
                    <div className="text-white font-semibold">Vũ Minh Đức, CTO</div>
                    <div className="text-slate-400">VietinBank</div>
                  </div>
                  
                  {/* VietinBank logo placeholder */}
                  <div className="absolute top-4 left-4 bg-white rounded px-3 py-1">
                    <span className="text-slate-900 font-bold text-sm">VietinBank</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div className="flex space-x-1 mb-4 sm:mb-0">
              {['All', 'Enterprise', 'Teams'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-white text-slate-900'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <div className="flex space-x-2">
              <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/customers/${study.id}`}
                className="group block bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-750 transition-all duration-300 hover:scale-105"
              >
                {/* Case Study Image */}
                <div className={`aspect-video bg-gradient-to-br ${study.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">
                        {study.company.charAt(0)}
                      </div>
                      <div className="text-white font-semibold">{study.company}</div>
                    </div>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {study.company}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      study.category === 'Enterprise' 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-green-500/20 text-green-400'
                    }`}>
                      {study.category}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {study.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">Trusted by industry leaders</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From startups to Fortune 500 companies, HDT AI is helping teams ship faster and build better software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-4">500+</div>
              <div className="text-xl text-white font-semibold mb-2">Companies</div>
              <div className="text-slate-400">Using HDT AI in production</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-4">10M+</div>
              <div className="text-xl text-white font-semibold mb-2">Lines of Code</div>
              <div className="text-slate-400">Generated and reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-4">85%</div>
              <div className="text-xl text-white font-semibold mb-2">Time Saved</div>
              <div className="text-slate-400">On repetitive tasks</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Ready to join them?</h2>
          <p className="text-xl text-slate-300 mb-8">
            See how HDT AI can transform your development workflow and help your team ship faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="bg-blue-400 hover:bg-blue-500 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-400/25 hover:shadow-2xl"
            >
              Get started today
            </Link>
            <Link
              href="/enterprise"
              className="border border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}