import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Docs' });
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function DocsPage() {
  const t = useTranslations('Docs');

  const docCategories = [
    {
      id: 'getting-started',
      title: t('categories.gettingStarted.title'),
      description: t('categories.gettingStarted.description'),
      icon: '🚀',
      docs: [
        { title: t('categories.gettingStarted.docs.quickStart'), href: '/docs/quick-start' },
        { title: t('categories.gettingStarted.docs.installation'), href: '/docs/installation' },
        { title: t('categories.gettingStarted.docs.firstProject'), href: '/docs/first-project' }
      ]
    },
    {
      id: 'api-reference',
      title: t('categories.apiReference.title'),
      description: t('categories.apiReference.description'),
      icon: '📚',
      docs: [
        { title: t('categories.apiReference.docs.authentication'), href: '/docs/authentication' },
        { title: t('categories.apiReference.docs.endpoints'), href: '/docs/endpoints' },
        { title: t('categories.apiReference.docs.examples'), href: '/docs/examples' }
      ]
    },
    {
      id: 'ai-solutions',
      title: t('categories.aiSolutions.title'),
      description: t('categories.aiSolutions.description'),
      icon: '🤖',
      docs: [
        { title: t('categories.aiSolutions.docs.chatbot'), href: '/docs/chatbot' },
        { title: t('categories.aiSolutions.docs.automation'), href: '/docs/automation' },
        { title: t('categories.aiSolutions.docs.analytics'), href: '/docs/analytics' }
      ]
    },
    {
      id: 'tutorials',
      title: t('categories.tutorials.title'),
      description: t('categories.tutorials.description'),
      icon: '📖',
      docs: [
        { title: t('categories.tutorials.docs.buildChatbot'), href: '/docs/build-chatbot' },
        { title: t('categories.tutorials.docs.dataAnalysis'), href: '/docs/data-analysis' },
        { title: t('categories.tutorials.docs.deployment'), href: '/docs/deployment' }
      ]
    },
    {
      id: 'integrations',
      title: t('categories.integrations.title'),
      description: t('categories.integrations.description'),
      icon: '🔗',
      docs: [
        { title: t('categories.integrations.docs.webhooks'), href: '/docs/webhooks' },
        { title: t('categories.integrations.docs.thirdParty'), href: '/docs/third-party' },
        { title: t('categories.integrations.docs.sdks'), href: '/docs/sdks' }
      ]
    },
    {
      id: 'support',
      title: t('categories.support.title'),
      description: t('categories.support.description'),
      icon: '💬',
      docs: [
        { title: t('categories.support.docs.faq'), href: '/docs/faq' },
        { title: t('categories.support.docs.troubleshooting'), href: '/docs/troubleshooting' },
        { title: t('categories.support.docs.contact'), href: '/docs/contact-support' }
      ]
    }
  ];

  const popularDocs = [
    { title: t('popular.quickStart'), href: '/docs/quick-start', category: t('categories.gettingStarted.title') },
    { title: t('popular.chatbotGuide'), href: '/docs/build-chatbot', category: t('categories.tutorials.title') },
    { title: t('popular.apiAuth'), href: '/docs/authentication', category: t('categories.apiReference.title') },
    { title: t('popular.deployment'), href: '/docs/deployment', category: t('categories.tutorials.title') }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              {t('hero.subtitle')}
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder={t('hero.searchPlaceholder')}
                  className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('popular.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('popular.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDocs.map((doc, index) => (
              <Link
                key={index}
                href={doc.href}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {doc.category}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {doc.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('categories.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('categories.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="space-y-2">
                  {category.docs.map((doc, index) => (
                    <Link
                      key={index}
                      href={doc.href}
                      className="block text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                    >
                      → {doc.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('quickLinks.getStarted.title')}</h3>
              <p className="text-gray-600 mb-4">{t('quickLinks.getStarted.description')}</p>
              <Link href="/docs/quick-start" className="text-blue-600 hover:text-blue-800 font-medium">
                {t('quickLinks.getStarted.link')} →
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('quickLinks.community.title')}</h3>
              <p className="text-gray-600 mb-4">{t('quickLinks.community.description')}</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                {t('quickLinks.community.link')} →
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('quickLinks.support.title')}</h3>
              <p className="text-gray-600 mb-4">{t('quickLinks.support.description')}</p>
              <Link href="/docs/contact-support" className="text-blue-600 hover:text-blue-800 font-medium">
                {t('quickLinks.support.link')} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              {t('cta.getStarted')}
            </Link>
            <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              {t('cta.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}