import Link from 'next/link';
import { Logo } from '@/components/Logo';

export const metadata = {
  title: 'Privacy Policy - VibeM',
  description: 'Privacy policy for VibeM',
};

export default function Privacy() {
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
        <h1 className="text-3xl font-bold text-[var(--text-strong)] mb-2">Privacy Policy</h1>
        <p className="text-[var(--text-muted)] mb-8">Last updated: February 4, 2026</p>
        
        <div className="prose prose-gray max-w-none space-y-8">
          <p className="text-[var(--text)]">
            S&C Holding GmbH (&quot;we&quot;, &quot;us&quot;, &quot;VibeM&quot;) operates the VibeM website (www.vibem.net) and related applications. 
            This Privacy Policy explains how we collect, use, and protect your personal data.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">1. Data Controller</h2>
            <p className="text-[var(--text)]">
              S&C Holding GmbH<br />
              Halbgasse 1a, 1070 Vienna, Austria<br />
              Email: <a href="mailto:info@vibem.net" className="text-[var(--primary)] hover:underline">info@vibem.net</a><br />
              VAT ID: ATU70341613<br />
              Managing Director: Mag. Markus Höfinger
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">2. Data We Collect</h2>
            
            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">2.1 Account Data</h3>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>Email address</li>
              <li>Name (optional)</li>
              <li>Authentication data</li>
            </ul>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">2.2 Usage Data</h3>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>Device information</li>
              <li>Browser type</li>
              <li>IP address</li>
              <li>Pages visited</li>
              <li>Feature usage patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">3. How We Use Your Data</h2>
            
            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">3.1 Service Delivery</h3>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>Providing our applications and services</li>
              <li>Processing your requests</li>
              <li>Sending transactional emails</li>
            </ul>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">3.2 Service Improvement</h3>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>Analyzing aggregated usage patterns</li>
              <li>Improving our products</li>
              <li>Developing new features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">4. AI Processing</h2>
            <p className="text-[var(--text)] mb-4">
              Some of our applications use AI services to process your data. We use providers such as Google AI (Gemini), 
              OpenAI, and Anthropic (Claude). These services process your data solely to provide the requested functionality.
            </p>
            <p className="text-[var(--text)]">
              <strong>Important:</strong> By using our AI-powered features, you consent to your data being processed by 
              AI services for the stated purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">5. Data Sharing</h2>
            
            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">5.1 We Never Share</h3>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>Individual personal data without consent</li>
              <li>Personal financial information</li>
              <li>Identifiable user details with third parties</li>
            </ul>

            <h3 className="text-lg font-medium text-[var(--text-strong)] mt-4 mb-2">5.2 Service Providers</h3>
            <p className="text-[var(--text)]">
              We use third-party services for hosting, analytics, and email delivery. We have Data Processing Agreements 
              (DPAs) in place with our service providers where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">6. Data Security</h2>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>All data is encrypted in transit (TLS/SSL)</li>
              <li>Data is stored on secure servers within the European Union</li>
              <li>Regular security audits and access controls</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">7. Data Retention</h2>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>Active accounts: Data retained while account is active</li>
              <li>Deleted accounts: Data deleted within 30 days</li>
              <li>Aggregated analytics: May be retained indefinitely (anonymized)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">8. Your Rights (GDPR)</h2>
            <p className="text-[var(--text)] mb-4">Under the General Data Protection Regulation, you have the right to:</p>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li><strong>Access:</strong> Request a copy of your data</li>
              <li><strong>Rectification:</strong> Correct inaccurate data</li>
              <li><strong>Erasure:</strong> Delete your account and data</li>
              <li><strong>Portability:</strong> Export your data</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
              <li><strong>Objection:</strong> Object to certain processing</li>
              <li><strong>Withdraw consent:</strong> At any time</li>
            </ul>
            <p className="text-[var(--text)] mt-4">
              To exercise these rights, contact us at{' '}
              <a href="mailto:info@vibem.net" className="text-[var(--primary)] hover:underline">info@vibem.net</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">9. Cookies</h2>
            <p className="text-[var(--text)]">
              We use cookies for authentication (required), analytics (optional), and preferences (optional). 
              You can manage cookie preferences in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">10. Changes to This Policy</h2>
            <p className="text-[var(--text)]">
              We may update this Privacy Policy. Significant changes will be communicated via email or website notification.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">11. Contact</h2>
            <p className="text-[var(--text)]">
              For privacy-related inquiries:<br />
              S&C Holding GmbH<br />
              Halbgasse 1a, 1070 Vienna, Austria<br />
              Email: <a href="mailto:info@vibem.net" className="text-[var(--primary)] hover:underline">info@vibem.net</a>
            </p>
            <p className="text-[var(--text)] mt-4">
              You may also lodge a complaint with the Austrian Data Protection Authority:<br />
              Österreichische Datenschutzbehörde<br />
              Barichgasse 40-42, 1030 Vienna<br />
              <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">www.dsb.gv.at</a>
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
