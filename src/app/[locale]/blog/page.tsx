'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data - In real app, this would come from API
const mockArticles = [
  {
    id: 1,
    title: 'Tương lai của AI trong Doanh nghiệp Việt Nam',
    slug: 'tuong-lai-ai-doanh-nghiep-viet-nam',
    excerpt: 'Khám phá cách AI đang thay đổi cảnh quan kinh doanh tại Việt Nam và những cơ hội mà nó mang lại.',
    thumbnail: '/api/placeholder/400/250',
    author: 'Nguyễn Văn A',
    publishDate: '2024-01-15',
    category: 'AI Trends',
    tags: ['AI', 'Doanh nghiệp', 'Việt Nam'],
    readTime: '5 phút đọc'
  },
  {
    id: 2,
    title: 'Chatbot AI: Cách Tối ưu Hóa Dịch vụ Khách hàng',
    slug: 'chatbot-ai-toi-uu-dich-vu-khach-hang',
    excerpt: 'Hướng dẫn chi tiết cách triển khai chatbot AI để cải thiện trải nghiệm khách hàng và tăng hiệu quả kinh doanh.',
    thumbnail: '/api/placeholder/400/250',
    author: 'Trần Thị B',
    publishDate: '2024-01-10',
    category: 'Chatbot',
    tags: ['Chatbot', 'Khách hàng', 'Tự động hóa'],
    readTime: '7 phút đọc'
  },
  {
    id: 3,
    title: 'Machine Learning trong Phân tích Dữ liệu Kinh doanh',
    slug: 'machine-learning-phan-tich-du-lieu',
    excerpt: 'Tìm hiểu cách sử dụng Machine Learning để phân tích dữ liệu và đưa ra quyết định kinh doanh thông minh.',
    thumbnail: '/api/placeholder/400/250',
    author: 'Lê Văn C',
    publishDate: '2024-01-05',
    category: 'Machine Learning',
    tags: ['ML', 'Dữ liệu', 'Phân tích'],
    readTime: '8 phút đọc'
  },
  {
    id: 4,
    title: 'Tự động hóa Quy trình với AI: Case Study Thực tế',
    slug: 'tu-dong-hoa-quy-trinh-ai-case-study',
    excerpt: 'Nghiên cứu trường hợp thực tế về việc áp dụng AI để tự động hóa quy trình trong doanh nghiệp.',
    thumbnail: '/api/placeholder/400/250',
    author: 'Phạm Thị D',
    publishDate: '2024-01-01',
    category: 'Automation',
    tags: ['Tự động hóa', 'Case Study', 'Quy trình'],
    readTime: '6 phút đọc'
  }
];

const categories = ['Tất cả', 'AI Trends', 'Chatbot', 'Machine Learning', 'Automation'];

export default function BlogPage() {
  const t = useTranslations('Blog');
  const [articles, setArticles] = useState(mockArticles);
  const [filteredArticles, setFilteredArticles] = useState(mockArticles);
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Filter articles based on category and search
  useEffect(() => {
    let filtered = articles;

    if (selectedCategory !== 'Tất cả') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredArticles(filtered);
  }, [selectedCategory, searchQuery, articles]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

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
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder={t('search.placeholder')}
                value={searchQuery}
                onChange={handleSearch}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link href={`/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                        {article.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            {article.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{article.author}</p>
                          <p className="text-xs text-gray-500">{article.publishDate}</p>
                        </div>
                      </div>
                      
                      <Link 
                        href={`/blog/${article.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        {t('readMore')}
                      </Link>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mt-4">
                      {article.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">{t('noResults.title')}</h3>
              <p className="mt-1 text-sm text-gray-500">{t('noResults.description')}</p>
            </div>
          )}

          {/* Load More Button */}
          {filteredArticles.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                {t('loadMore')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('newsletter.subtitle')}
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              {t('newsletter.subscribe')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}