'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('hero');

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Notification Banner */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎉</span>
              <span className="text-sm text-slate-300">
                {t('notification')}
              </span>
            </div>
            <button className="text-slate-400 hover:text-white">×</button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-blue-400 drop-shadow-lg" style={{textShadow: '0 0 20px rgba(96, 165, 250, 0.5)'}}>HDT AI,</span>
                  <span className="block text-white">{t('title').replace('HDT AI, ', '')}</span>
                </h1>
                
                <Link
                  href="/get-started"
                  className="inline-block bg-blue-400 hover:bg-blue-500 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-400/25 hover:shadow-blue-400/40 hover:scale-105"
                >
                  {t('getStarted')}
                </Link>
              </div>

              <div className="space-y-4">
                <p className="text-xl text-slate-300">
                  {t('subtitle')}
                </p>

                {/* Workflow Steps */}
                <div className="space-y-4 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t('workflow.ticket.title')}</div>
                      <div className="text-slate-400 text-sm">{t('workflow.ticket.description')}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t('workflow.plan.title')}</div>
                      <div className="text-slate-400 text-sm">{t('workflow.plan.description')}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t('workflow.test.title')}</div>
                      <div className="text-slate-400 text-sm">{t('workflow.test.description')}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t('workflow.pr.title')}</div>
                      <div className="text-slate-400 text-sm">{t('workflow.pr.description')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Demo/Screenshot */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 shadow-2xl">
                {/* Mock Interface with Tabs */}
                <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                  {/* Window Controls */}
                  <div className="bg-gray-100 px-4 py-3 border-b flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tabs */}
                  <div className="flex bg-gray-50 border-b">
                    <div className="flex items-center space-x-2 px-4 py-2 bg-white border-r border-gray-200 shadow-sm">
                      <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.523 2.521h-2.521V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.523v-2.521h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">slack</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 border-r border-gray-200">
                      <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">L</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600">Linear</span>
                    </div>
                  </div>

                  {/* Channel Header */}
                  <div className="px-4 py-2 bg-gray-50 border-b flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-700 font-medium"># frontend</span>
                      <span className="text-gray-500 text-sm">Frontend discussions, UI updates & implementation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">40</span>
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      <span className="text-gray-500 text-sm">Canvas</span>
                    </div>
                  </div>
                  
                  {/* Chat Content */}
                  <div className="p-4 space-y-4 h-64 bg-white text-slate-900">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        S
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">Silas <span className="text-slate-500 font-normal">2:50 PM</span></div>
                        <div className="text-sm">@HDT AI can you make the knowledge fields always editable?</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        H
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">HDT AI <span className="text-slate-500 font-normal">2:50 PM</span></div>
                        <div className="text-sm">@Silas of course! Creating a session and making the changes. See <span className="text-blue-600 underline cursor-pointer">here</span>.</div>
                        <div className="mt-1 flex items-center space-x-1">
                          <span className="text-sm">😊</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="border-t p-4 bg-white">
                    <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2 border">
                      <span className="text-gray-400 text-sm">Message</span>
                      <div className="flex-1"></div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        <button className="text-blue-500 font-bold">→</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-slate-300">
              {t('socialProof')}{' '}
              <Link href="/customers" className="text-blue-400 hover:text-blue-300 underline">
                {t('socialProofLink')}
              </Link>
            </p>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {/* Mock company logos - you can replace with actual logos */}
            <div className="flex items-center justify-center">
              <div className="text-slate-400 font-bold text-lg">Linktree</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-slate-400 font-bold text-lg">MongoDB</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-slate-400 font-bold text-lg">OpenSea</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-slate-400 font-bold text-lg">Microsoft</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-slate-400 font-bold text-lg">Ramp</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-slate-400 font-bold text-lg">Nubank</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-slate-400 font-bold text-lg">BILT</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-slate-400 font-bold text-lg">EightSleep</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('useCases.title')}
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              {t('useCases.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Code Migration + Refactors */}
            <div className="bg-slate-900 rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">{t('useCases.migration.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {t('useCases.migration.item1')}
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {t('useCases.migration.item2')}
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {t('useCases.migration.item3')}
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 h-48 flex items-center justify-center">
                <div className="text-slate-500 text-center">
                  <div className="text-4xl mb-2">🔄</div>
                  <div>Migration & Refactoring</div>
                </div>
              </div>
            </div>

            {/* Data Engineering + Analysis */}
            <div className="bg-slate-900 rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">{t('useCases.dataEngineering.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {t('useCases.dataEngineering.item1')}
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {t('useCases.dataEngineering.item2')}
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {t('useCases.dataEngineering.item3')}
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 h-48 flex items-center justify-center">
                <div className="text-slate-500 text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div>Data Engineering</div>
                </div>
              </div>
            </div>

            {/* Bugs + Backlog Work */}
            <div className="bg-slate-900 rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">Bugs + Backlog Work</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Ticket resolution
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    CI/CD
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    First-draft PR creation for backlog tasks
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 h-48 flex items-center justify-center">
                <div className="text-slate-500 text-center">
                  <div className="text-4xl mb-2">🐛</div>
                  <div>Bug Fixes & Backlog</div>
                </div>
              </div>
            </div>

            {/* Application Development */}
            <div className="bg-slate-900 rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">Application Development</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Frontend bugs and edge cases
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Unit and E2E testing
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Building SaaS integrations
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 h-48 flex items-center justify-center">
                <div className="text-slate-500 text-center">
                  <div className="text-4xl mb-2">💻</div>
                  <div>App Development</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Use Cases */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-3">Bug & Issue Triage</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Automated on-call response</li>
                <li>• Ticket resolution</li>
                <li>• CI/CD autotriage</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-3">Performance & Optimization</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Technical debt</li>
                <li>• Performance optimization</li>
                <li>• Code quality improvements</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-3">And Many Others</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Scraping</li>
                <li>• New repo onboarding</li>
                <li>• Maintaining documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
