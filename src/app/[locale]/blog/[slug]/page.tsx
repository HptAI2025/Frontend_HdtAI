'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock article data - In real app, this would come from API
const mockArticle = {
  id: 1,
  title: 'Tương lai của AI trong Doanh nghiệp Việt Nam',
  slug: 'tuong-lai-ai-doanh-nghiep-viet-nam',
  content: `
    <h2>Giới thiệu</h2>
    <p>Trí tuệ nhân tạo (AI) đang trở thành một yếu tố quan trọng trong việc chuyển đổi số của các doanh nghiệp Việt Nam. Từ những ứng dụng đơn giản như chatbot đến các hệ thống phân tích dữ liệu phức tạp, AI đang mở ra những cơ hội mới cho sự phát triển và tối ưu hóa hoạt động kinh doanh.</p>
    
    <h2>Tình hình hiện tại</h2>
    <p>Theo khảo sát gần đây, hơn 60% doanh nghiệp Việt Nam đã bắt đầu áp dụng các giải pháp AI trong hoạt động của mình. Các lĩnh vực phổ biến nhất bao gồm:</p>
    <ul>
      <li>Dịch vụ khách hàng với chatbot AI</li>
      <li>Phân tích dữ liệu và dự báo</li>
      <li>Tự động hóa quy trình</li>
      <li>Marketing và bán hàng thông minh</li>
    </ul>
    
    <h2>Thách thức và cơ hội</h2>
    <p>Mặc dù có nhiều tiềm năng, việc triển khai AI vẫn gặp phải một số thách thức:</p>
    <blockquote>
      "Thiếu nhân lực chuyên môn và chi phí đầu tư ban đầu cao là hai rào cản lớn nhất mà các doanh nghiệp Việt Nam phải đối mặt khi áp dụng AI."
    </blockquote>
    
    <h2>Xu hướng tương lai</h2>
    <p>Trong 5 năm tới, chúng ta có thể kỳ vọng thấy:</p>
    <ol>
      <li>AI trở nên phổ biến hơn trong các doanh nghiệp vừa và nhỏ</li>
      <li>Sự phát triển của các giải pháp AI "made in Vietnam"</li>
      <li>Tích hợp sâu hơn giữa AI và IoT</li>
      <li>Ứng dụng AI trong giáo dục và y tế</li>
    </ol>
    
    <h2>Kết luận</h2>
    <p>AI không chỉ là xu hướng mà đã trở thành một phần không thể thiếu trong chiến lược phát triển của doanh nghiệp hiện đại. Việc đầu tư và áp dụng AI một cách thông minh sẽ giúp các doanh nghiệp Việt Nam nâng cao năng lực cạnh tranh và phát triển bền vững trong tương lai.</p>
  `,
  author: 'Nguyễn Văn A',
  publishDate: '2024-01-15',
  category: 'AI Trends',
  tags: ['AI', 'Doanh nghiệp', 'Việt Nam'],
  readTime: '5 phút đọc',
  seoTitle: 'Tương lai của AI trong Doanh nghiệp Việt Nam - HDT AI',
  seoDescription: 'Khám phá cách AI đang thay đổi cảnh quan kinh doanh tại Việt Nam và những cơ hội mà nó mang lại cho các doanh nghiệp.'
};

const relatedArticles = [
  {
    id: 2,
    title: 'Chatbot AI: Cách Tối ưu Hóa Dịch vụ Khách hàng',
    slug: 'chatbot-ai-toi-uu-dich-vu-khach-hang',
    category: 'Chatbot',
    readTime: '7 phút đọc'
  },
  {
    id: 3,
    title: 'Machine Learning trong Phân tích Dữ liệu Kinh doanh',
    slug: 'machine-learning-phan-tich-du-lieu',
    category: 'Machine Learning',
    readTime: '8 phút đọc'
  }
];

export default function BlogPostPage() {
  const t = useTranslations('BlogPost');
  const params = useParams();
  const [article, setArticle] = useState(mockArticle);
  const [loading, setLoading] = useState(false);
  const [tableOfContents, setTableOfContents] = useState<Array<{id: string, title: string, level: number}>>([]);

  // Generate table of contents from article content
  useEffect(() => {
    if (article.content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(article.content, 'text/html');
      const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      const toc = Array.from(headings).map((heading, index) => ({
        id: `heading-${index}`,
        title: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      }));
      
      setTableOfContents(toc);
    }
  }, [article.content]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add IDs to headings in content for navigation
  const processContent = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach((heading, index) => {
      heading.id = `heading-${index}`;
    });
    
    return doc.body.innerHTML;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              ← {t('backToBlog')}
            </Link>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
              {article.category}
            </span>
            <span className="text-gray-500 text-sm">{article.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">
                  {article.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{article.author}</p>
                <p className="text-sm text-gray-500">{article.publishDate}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('tableOfContents')}</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToHeading(item.id)}
                    className={`block text-left text-sm text-gray-600 hover:text-blue-600 transition-colors ${
                      item.level === 2 ? 'pl-0' : `pl-${(item.level - 2) * 4}`
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-lg"
              dangerouslySetInnerHTML={{ __html: processContent(article.content) }}
            />

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('shareArticle')}</h3>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  <span>Twitter</span>
                </button>
                
                <button className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </button>
                
                <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('relatedArticles')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <Link href={`/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {t('readMore')} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}