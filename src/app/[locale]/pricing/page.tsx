import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckIcon } from 'lucide-react';

export default function PricingPage() {
  const t = useTranslations('pricing');

  const plans = [
    {
      name: 'Core',
      price: 'Pay as you go, starting at $20',
      description: 'Includes:',
      buttonText: 'Get started',
      buttonLink: '/get-started',
      buttonStyle: 'border border-slate-600 text-slate-300 hover:bg-slate-800',
      features: {
        capabilities: [
          'Autonomous task completion',
          'HDT AI IDE',
          'Ask HDT AI',
          'HDT AI Wiki',
          'Learns over time'
        ],
        usage: [
          'Unlimited users',
          'Share and collaborate',
          'Up to 10 concurrent HDT AI sessions',
          'No monthly commitment, pay-as-you-go plan',
          'Auto-reload settings for on-demand consumption'
        ]
      }
    },
    {
      name: 'Team',
      price: '$500/month',
      description: 'Everything in Core, plus:',
      buttonText: 'Get started',
      buttonLink: '/get-started',
      buttonStyle: 'border border-slate-600 text-slate-300 hover:bg-slate-800',
      features: {
        capabilities: [
          'HDT AI API',
          'Access to early feature releases and research previews'
        ],
        usage: [
          'Unlimited concurrent sessions',
          '250 ACUs included monthly'
        ],
        support: [
          'Dedicated Slack Connect channel for support',
          'Optional onboarding call with the HDT AI team'
        ]
      }
    },
    {
      name: 'Enterprise',
      price: 'Custom pricing',
      description: 'Everything in Team, plus:',
      buttonText: 'Contact us',
      buttonLink: '/contact',
      buttonStyle: 'bg-blue-400 text-slate-900 hover:bg-blue-500',
      features: {
        capabilities: [
          'Access to HDT AI Enterprise',
          'Access to Custom HDT AIs'
        ],
        security: [
          'Deploy in your virtual private cloud (VPC)',
          'SAML/OIDC SSO',
          'Centralized enterprise admin controls',
          'Teamspace isolation'
        ],
        support: [
          'Dedicated account team',
          'Custom terms',
          'Centralized billing and usage analytics across multiple HDT AI organizations'
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              Choose a <span className="text-blue-400">plan</span>
              <br />
              that's right for you
            </h1>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-slate-800 rounded-lg p-8 border ${
                  plan.name === 'Enterprise' 
                    ? 'border-blue-400 relative' 
                    : 'border-slate-700'
                }`}
              >
                {plan.name === 'Enterprise' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xl text-slate-300 mb-6">{plan.price}</p>
                  <Link
                    href={plan.buttonLink}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-block text-center ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>

                {/* Plan Features */}
                <div className="space-y-6">
                  <p className="text-slate-400 font-medium">{plan.description}</p>

                  {/* Key Capabilities */}
                  {plan.features.capabilities && (
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key capabilities:</h4>
                      <ul className="space-y-2">
                        {plan.features.capabilities.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Usage */}
                  {plan.features.usage && (
                    <div>
                      <h4 className="text-white font-semibold mb-3">Usage:</h4>
                      <ul className="space-y-2">
                        {plan.features.usage.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">
                              {feature}
                              {feature.includes('250 ACUs') && (
                                <div className="text-sm text-slate-400 mt-1">
                                  HDT AI's unit of work is an Agent Compute Unit, or ACU. It's a normalized measure of the resources used by HDT AI.
                                </div>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Security */}
                  {plan.features.security && (
                    <div>
                      <h4 className="text-white font-semibold mb-3">Security:</h4>
                      <ul className="space-y-2">
                        {plan.features.security.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Account Support */}
                  {plan.features.support && (
                    <div>
                      <h4 className="text-white font-semibold mb-3">Account Support:</h4>
                      <ul className="space-y-2">
                        {plan.features.support.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-blue-400">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What is an Agent Compute Unit (ACU)?</h3>
              <p className="text-slate-300">
                An ACU is HDT AI's unit of work - a normalized measure of the computational resources used by HDT AI to complete tasks. Different tasks may require different amounts of ACUs depending on their complexity and duration.
              </p>
            </div>

            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Can I upgrade or downgrade my plan?</h3>
              <p className="text-slate-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle. For Enterprise customers, please contact your account team for plan changes.
              </p>
            </div>

            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial available?</h3>
              <p className="text-slate-300">
                Yes, new users get free credits to try HDT AI. You can start with the Core plan and explore HDT AI's capabilities before committing to a paid plan.
              </p>
            </div>

            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What kind of support do you offer?</h3>
              <p className="text-slate-300">
                Support varies by plan. Core users have access to documentation and community support. Team users get dedicated Slack support and optional onboarding. Enterprise users receive dedicated account teams and priority support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Ready to get started?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of developers who are already using HDT AI to accelerate their development workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="bg-blue-400 hover:bg-blue-500 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-400/25 hover:shadow-2xl"
            >
              Start free trial
            </Link>
            <Link
              href="/contact"
              className="border border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}