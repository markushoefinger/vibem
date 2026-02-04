import Link from 'next/link';
import { Logo } from '@/components/Logo';

export const metadata = {
  title: 'Terms of Service - VibeM',
  description: 'Terms of service for VibeM',
};

export default function Terms() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo size={36} />
            <span className="font-bold text-xl text-[var(--text-strong)]">VibeM</span>
          </Link>
          <Link href="/" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)]">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[var(--text-strong)] mb-2">Terms of Service</h1>
        <p className="text-[var(--text-muted)] mb-8">Last updated: February 4, 2026</p>
        
        <div className="prose prose-gray max-w-none space-y-8">
          <p className="text-[var(--text)]">
            These Terms of Service (&quot;Terms&quot;) govern your use of VibeM products and services, 
            operated by S&C Holding GmbH.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">1. Agreement</h2>
            <p className="text-[var(--text)]">
              By creating an account or using any VibeM product, you agree to these Terms. 
              If you do not agree, do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">2. Service Description</h2>
            <p className="text-[var(--text)]">
              VibeM is a micro-SaaS studio that builds and operates various applications including but not limited to 
              Bill.Dock, Jenda, Zero-Friction Tasks, and other products listed on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">3. Account</h2>
            
            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">3.1 Registration</h3>
            <p className="text-[var(--text)]">
              You must provide accurate information when creating an account. You are responsible for maintaining 
              the security of your account.
            </p>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">3.2 Eligibility</h3>
            <p className="text-[var(--text)]">
              You must be at least 16 years old to use our services.
            </p>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">3.3 Account Security</h3>
            <p className="text-[var(--text)]">
              You are responsible for all activity under your account. Notify us immediately of unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">4. Subscription Plans</h2>
            
            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">4.1 Free Trials</h3>
            <p className="text-[var(--text)]">
              Some products offer free trial periods with full access at no cost. No credit card required.
            </p>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">4.2 Paid Plans</h3>
            <p className="text-[var(--text)]">
              Our products offer various subscription tiers with different features. Visit each product&apos;s website 
              for current pricing and plan details.
            </p>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">4.3 Billing</h3>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>Subscriptions are billed monthly or annually</li>
              <li>Payments are processed through Apple App Store, Google Play, or our payment provider</li>
              <li>Prices include applicable VAT</li>
            </ul>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">4.4 Cancellation</h3>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>Cancel anytime in your account settings or app store</li>
              <li>Access continues until the end of the billing period</li>
              <li>No refunds for partial months</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">5. Your Content</h2>
            
            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">5.1 Ownership</h3>
            <p className="text-[var(--text)]">
              You retain ownership of all data and content you upload to our services.
            </p>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">5.2 License to Us</h3>
            <p className="text-[var(--text)]">
              You grant us a limited license to process, store, and display your content solely to provide the service.
            </p>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">5.3 Your Responsibility</h3>
            <p className="text-[var(--text)]">
              You are responsible for ensuring you have the right to upload content. Do not upload illegal, 
              fraudulent, or harmful content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">6. AI Processing</h2>
            
            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">6.1 Consent</h3>
            <p className="text-[var(--text)]">
              By using our AI-powered features, you consent to your data being processed by AI services 
              (Google AI, OpenAI, Anthropic) for the stated functionality.
            </p>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">6.2 Accuracy</h3>
            <p className="text-[var(--text)]">
              AI processing is not 100% accurate. Always verify AI-generated data before using it for official purposes.
            </p>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">6.3 No Liability</h3>
            <p className="text-[var(--text)]">
              We are not liable for errors in AI-processed data. You are responsible for reviewing and correcting 
              AI-generated information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">7. Prohibited Uses</h2>
            <p className="text-[var(--text)] mb-2">You may not:</p>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>Use the service for illegal purposes</li>
              <li>Upload fraudulent or harmful content</li>
              <li>Attempt to circumvent security measures</li>
              <li>Reverse engineer the applications</li>
              <li>Resell or redistribute the service</li>
              <li>Use automated systems to abuse the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">8. Intellectual Property</h2>
            
            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">8.1 Our Property</h3>
            <p className="text-[var(--text)]">
              VibeM and its products, including their design, features, and code, are owned by S&C Holding GmbH.
            </p>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">8.2 Trademarks</h3>
            <p className="text-[var(--text)]">
              &quot;VibeM&quot;, &quot;Bill.Dock&quot;, &quot;Jenda&quot;, &quot;Zero-Friction Tasks&quot; and associated logos are trademarks 
              of S&C Holding GmbH.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-[var(--text)] mb-2">
              Our services are provided &quot;as is&quot; without warranties of any kind. We do not guarantee:
            </p>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>Uninterrupted service</li>
              <li>Error-free operation</li>
              <li>Accuracy of AI processing</li>
              <li>Suitability for any particular purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">10. Limitation of Liability</h2>
            <p className="text-[var(--text)] mb-2">To the maximum extent permitted by law:</p>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Our total liability is limited to the amount you paid us in the 12 months before the claim</li>
              <li>We are not liable for data loss if you have not exported your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">11. Termination</h2>
            
            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">11.1 By You</h3>
            <p className="text-[var(--text)]">
              You may delete your account at any time in the respective product&apos;s settings.
            </p>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">11.2 By Us</h3>
            <p className="text-[var(--text)] mb-2">We may suspend or terminate your account for:</p>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>Violation of these Terms</li>
              <li>Fraudulent activity</li>
              <li>Non-payment</li>
              <li>Extended inactivity (12+ months)</li>
            </ul>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">11.3 Effect</h3>
            <p className="text-[var(--text)]">
              Upon termination, your data will be deleted within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">12. Changes to Terms</h2>
            <p className="text-[var(--text)]">
              We may update these Terms. Continued use after changes constitutes acceptance. 
              Material changes will be communicated via email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">13. Governing Law</h2>
            <p className="text-[var(--text)]">
              These Terms are governed by Austrian law. Disputes shall be resolved in the courts of Vienna, Austria.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">14. Contact</h2>
            <p className="text-[var(--text)]">
              S&C Holding GmbH<br />
              Halbgasse 1a, 1070 Vienna, Austria<br />
              Email: <a href="mailto:info@vibem.net" className="text-[var(--primary)] hover:underline">info@vibem.net</a><br />
              Web: <a href="https://www.vibem.net" className="text-[var(--primary)] hover:underline">www.vibem.net</a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} S&C Holding GmbH. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
