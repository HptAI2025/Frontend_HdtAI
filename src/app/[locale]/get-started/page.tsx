'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';

export default function GetStartedPage() {
  const t = useTranslations('GetStarted');
  const [isLoading, setIsLoading] = useState(false);

  const handleGithubSignup = async () => {
    setIsLoading(true);
    // Simulate GitHub OAuth
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    // Simulate Google OAuth
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const steps = [
    {
      number: '1',
      title: t('steps.ticket.title'),
      description: t('steps.ticket.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '2',
      title: t('steps.plan.title'),
      description: t('steps.plan.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: '3',
      title: t('steps.test.title'),
      description: t('steps.test.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: '4',
      title: t('steps.pr.title'),
      description: t('steps.pr.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-1M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">HDT AI</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link href="/enterprise" className="text-gray-600 hover:text-gray-900 font-medium">
                {t('nav.enterprise')}
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium">
                {t('nav.pricing')}
              </Link>
              <Link href="/customers" className="text-gray-600 hover:text-gray-900 font-medium">
                {t('nav.customers')}
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium">
                {t('nav.blog')}
              </Link>
              <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                {t('nav.login')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center">
            <span className="text-lg mr-2">🎉</span>
            <span className="font-semibold">{t('promo.title')}</span>
            <button className="ml-4 text-white/80 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('hero.subtitle')}
            </p>

            {/* Sign Up Options */}
            <div className="space-y-4 mb-8">
              <button
                onClick={handleGithubSignup}
                disabled={isLoading}
                className="w-full flex items-center justify-center px-6 py-4 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors font-semibold disabled:opacity-50"
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )}
                {t('githubSignup')}
              </button>

              <button
                onClick={handleGoogleSignup}
                disabled={isLoading}
                className="w-full flex items-center justify-center px-6 py-4 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors font-semibold disabled:opacity-50"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {t('googleSignup')}
              </button>
            </div>

            <p className="text-sm text-gray-500 text-center">
              {t('alreadyHaveAccount')}{' '}
              <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                {t('signIn')}
              </Link>
            </p>
          </div>

          {/* Right Side - Process Steps */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('process.title')}
            </h2>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-blue-600">
                        {step.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Integration Icons */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center mb-4">{t('integrations.title')}</p>
              <div className="flex justify-center space-x-6">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-700">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="hover:text-gray-700">
              {t('footer.terms')}
            </Link>
            <Link href="/contact" className="hover:text-gray-700">
              {t('footer.support')}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}