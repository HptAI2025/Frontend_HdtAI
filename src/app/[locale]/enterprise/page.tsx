import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function EnterprisePage() {
  const t = useTranslations('enterprise');

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              {t('hero.title')}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-400 mb-4">8x</div>
                <div className="text-xl text-slate-300">{t('hero.efficiency')}</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-400 mb-4">20x</div>
                <div className="text-xl text-slate-300">{t('hero.savings')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-blue-400">{t('overview.title')}</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  {t('overview.description1')}
                </p>
                <p>
                  {t('overview.description2')}
                </p>
              </div>
            </div>
            <div className="bg-slate-900 rounded-lg p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏦</div>
                  <div className="text-xl font-semibold">VietinBank ETL Migration</div>
                  <div className="text-slate-400 mt-2">6M+ lines of code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">{t('problem.title')}</h2>
            <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
              <p>
                VietinBank was born into the tradition of centralized ETL FinServ architectures. To date, the monolith architecture had worked well for VietinBank — it enabled the developer autonomy and flexibility that carried them through their hypergrowth phases. After 8 years, however, VietinBank's sheer volume of customer growth, as well as geographic and product expansion beyond their original banking business, led to an entangled, behemoth ETL with countless cross-dependencies and no clear path to continuing to scale.
              </p>
              <p>
                For VietinBank engineers, business critical data transformations started taking increasingly long to run, with chains of dependencies as deep as 70 and insufficient formal agreements on who was responsible for maintaining what. As the company continued to grow, it became clear that the ETL would be a primary bottleneck to scale.
              </p>
              
              <div className="bg-slate-800 border-l-4 border-blue-400 p-6 rounded-r-lg my-8">
                <p className="text-xl italic">
                  VietinBank concluded that there was an urgent need to split up their monolithic ETL repository, amassing over 6 million lines of code, into smaller, more flexible sub-modules.
                </p>
              </div>

              <p>
                VietinBank's code migration was filled with the monotonous, repetitive work that engineers dread. Moving each data class implementation from one architecture to another while tracing imports correctly, performing multiple delicate refactoring steps, and accounting for any number of edge cases was highly tedious, even to do just once or twice. At VietinBank's scale, however, the total migration scope involved more than 1,000 engineers moving ~100,000 data class implementations over an expected timeline of 18 months.
              </p>
              <p>
                In a world where engineering resources are scarce, such large-scale migrations and modernizations become massively expensive, time-consuming projects that distract from any engineering team's core mission: building better products for customers. Unfortunately, this is the reality for many of the world's largest organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Decision Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">The Decision: an army of HDT AIs to tackle subtasks in parallel</h2>
            <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
              <p>
                At project outset in 2023, VietinBank had no choice but to rely on their engineers to perform code changes manually. Migrating one data class was a highly discretionary task, with multiple variations, edge cases, and ad hoc decision-making — far too complex to be scriptable, but high-volume enough to be a significant manual effort.
              </p>
              <p>
                Within weeks of HDT AI's launch, VietinBank identified a clear opportunity to accelerate their refactor at a fraction of the engineering hours. Migration or large refactoring tasks are often fantastic projects for HDT AI: after investing a small, fixed cost to teach HDT AI how to approach sub-tasks, HDT AI can go and complete the migration autonomously. A human is kept in the loop just to manage the project and approve HDT AI's changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">The Solution: Custom ETL Migration HDT AI</h2>
            <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
              <p>
                A task of this magnitude, with the vast number of variations that it had, was a ripe opportunity for fine-tuning. The VietinBank team helped to collect examples of previous migrations their engineers had done manually, some of which were fed to HDT AI for fine-tuning. The rest were used to create a benchmark evaluation set.
              </p>
              <p>
                Against this evaluation set, we observed a <span className="text-blue-400 font-semibold">doubling of HDT AI's task completion scores after fine-tuning, as well as a 4x improvement in task speed. Roughly 40 minutes per sub-task dropped to 10</span>, which made the whole migration start to look much cheaper and less time-consuming, allowing the company to devote more energy to new business and new value creation instead.
              </p>
              <p>
                HDT AI contributed to its own speed improvements by building itself classical tools and scripts it would later use on the most common, mechanical components of the migration. For instance, detecting the country extension of a data class (either 'vn', 'sg', or 'th') based on its file path was a few-step process for each sub-task. HDT AI's script automatically turned this into a single step executable — improvements from which added up immensely across all tens of thousands of sub-tasks.
              </p>
              <p>
                There is also a compounding advantage on HDT AI's learning. In the first weeks, it was common to see outstanding errors to fix, or small things HDT AI wasn't sure how to solve. But as HDT AI saw more examples and gained familiarity with the task, it started to avoid rabbit holes more often and find faster solutions to previously-seen errors and edge cases. Much like a human engineer, we observed obvious speed and reliability improvements with every day HDT AI worked on the migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-blue-400">Results</h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto">
              Delivering an 8-12x faster migration, lifting a burden from every engineer, and slashing migration costs by 20x.
            </p>
          </div>

          {/* Testimonial */}
          <div className="bg-slate-800 rounded-lg p-8 mb-16 max-w-4xl mx-auto">
            <blockquote className="text-xl italic text-slate-300 mb-6">
              "HDT AI provided an easy way to reduce the number of engineering hours for the migration, in a way that was more stable and less prone to human error. Rather than engineers having to work across several files and complete an entire migration task 100%, they could just review HDT AI's changes, make minor adjustments, then merge their PR"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                N
              </div>
              <div>
                <div className="font-semibold text-white">Nguyen Van Duc</div>
                <div className="text-slate-400">Senior Product Manager, VietinBank</div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800 rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-4">8-12x</div>
              <div className="text-xl font-semibold text-white mb-4">efficiency gains</div>
              <p className="text-slate-300">
                This is calculated by comparing the typical engineering hours required to complete a data class migration task against the total engineering hours spent prompting and reviewing HDT AI's work on the same task.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-4">20x</div>
              <div className="text-xl font-semibold text-white mb-4">cost savings</div>
              <p className="text-slate-300">
                This is calculated by comparing the cost of running HDT AI versus the hourly cost of an engineer completing that task. The significant savings are heavily driven by speed of task execution and cost effectiveness of HDT AI relative to human engineering time.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-slate-300 mb-8">
              Fewer dreaded migration tasks for VietinBank engineers
            </p>
            <Link
              href="/get-started"
              className="bg-blue-400 hover:bg-blue-500 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-blue-400/25 hover:shadow-2xl"
            >
              <span>Start your enterprise migration</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Enterprise Features */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-blue-400">Enterprise Features</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              HDT AI Enterprise provides the security, scalability, and control that large organizations need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-slate-300">
                SOC 2 Type II compliance, data encryption, and private cloud deployment options.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Infrastructure</h3>
              <p className="text-slate-300">
                Handle thousands of concurrent tasks with auto-scaling infrastructure.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-white mb-3">Team Management</h3>
              <p className="text-slate-300">
                Advanced user management, role-based access control, and audit logs.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Integration</h3>
              <p className="text-slate-300">
                Integrate with your existing tools and workflows seamlessly.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Analytics & Reporting</h3>
              <p className="text-slate-300">
                Detailed insights into productivity gains and cost savings.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Priority Support</h3>
              <p className="text-slate-300">
                24/7 dedicated support with guaranteed response times.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}