'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('enterprise'), href: '/enterprise' },
    { name: t('pricing'), href: '/pricing' },
    { name: t('customers'), href: '/customers' },
  ];

  const secondaryNavigation = [
    { name: t('about'), href: '/about-us' },
    { name: t('careers'), href: '/careers' },
    { name: t('blog'), href: '/blog' },
    { name: t('contact'), href: '/contact' },
    { name: t('docs'), href: '/docs' },
  ];

  const handleLanguageChange = (newLocale: 'vi' | 'en') => {
    router.replace(pathname, { locale: newLocale });
    setIsLangOpen(false);
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/hdt-logo.svg"
                alt="HDT AI Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-white">HDT AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-slate-800 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}

            {/* Secondary Navigation */}
            {secondaryNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-400 hover:text-slate-300 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{locale === 'vi' ? 'VI' : 'EN'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-slate-800 rounded-md shadow-lg ring-1 ring-slate-700 ring-opacity-50">
                  <div className="py-1">
                    <button
                      onClick={() => handleLanguageChange('vi')}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        locale === 'vi' ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      Tiếng Việt
                    </button>
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        locale === 'en' ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      English
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/login"
              className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-slate-800 ml-2 whitespace-nowrap"
            >
              {t('login')}
            </Link>
            <Link
              href="/get-started"
              className="bg-blue-400 hover:bg-blue-500 text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors ml-2 whitespace-nowrap"
            >
              {t('getStarted')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-800">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Secondary Navigation in Mobile */}
              <div className="border-t border-slate-800 pt-2 mt-2">
                {secondaryNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-slate-300 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-slate-800 pt-4">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-slate-300 text-sm font-medium">Language</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleLanguageChange('vi')}
                      className={`px-2 py-1 text-xs rounded ${
                        locale === 'vi' ? 'bg-blue-400 text-slate-900' : 'text-slate-300'
                      }`}
                    >
                      VI
                    </button>
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`px-2 py-1 text-xs rounded ${
                        locale === 'en' ? 'bg-blue-400 text-slate-900' : 'text-slate-300'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
                <Link
                  href="/login"
                  className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('login')}
                </Link>
                <Link
                  href="/get-started"
                  className="bg-blue-400 hover:bg-blue-500 text-slate-900 block px-3 py-2 rounded-md text-base font-medium mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('getStarted')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}