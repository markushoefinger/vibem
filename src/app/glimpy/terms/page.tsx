import Link from 'next/link';
import { Logo } from '@/components/Logo';

export const metadata = {
  title: 'Glimpy — Terms of Use',
  description: 'Terms of use for the Glimpy iPhone app.',
};

export default function GlimpyTerms() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo size={36} />
            <span className="font-bold text-xl text-[var(--text-strong)]">SpacerGIF</span>
          </Link>
          <Link href="/" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)]">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[var(--text-strong)] mb-2">Glimpy — Terms of Use</h1>
        <p className="text-[var(--text-muted)] mb-8">Last updated: July 28, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <p className="text-[var(--text)]">
              These terms govern your use of the Glimpy iPhone app, published by Spacer GIF, a division of
              S&amp;C Holding GmbH, Halbgasse 1a, 1070 Vienna, Austria. They apply in addition to Apple&apos;s{' '}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                className="text-[var(--primary)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Licensed Application End User License Agreement
              </a>
              , which applies to every app bought through the App Store. Where the two differ on a point
              Apple&apos;s agreement governs, Apple&apos;s agreement prevails.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">1. What Glimpy is</h2>
            <p className="text-[var(--text)]">
              Glimpy poses arithmetic problems and checks the answers a child types in. It is a practice aid
              for children of roughly five to nine, in the spirit of the handheld arithmetic trainers of the
              1970s and 80s.
            </p>
            <p className="text-[var(--text)]">
              It is not a curriculum, a tutor, a diagnostic instrument or an assessment. The levels are
              graded by the numbers they use and are mapped to school years only as a rough guide; curricula
              differ between countries and schools. Nothing Glimpy displays should be treated as an
              evaluation of a child&apos;s ability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">2. Licence</h2>
            <p className="text-[var(--text)]">
              You get a personal, non-exclusive, non-transferable right to use Glimpy on the Apple devices you
              own or control, for private, non-commercial purposes, in line with the App Store terms and
              Apple&apos;s Family Sharing rules. You may not copy, sell, rent, sub-license, reverse-engineer
              or modify the app, except where the law expressly permits it regardless of agreement.
            </p>
            <p className="text-[var(--text)]">
              Using Glimpy in a school, a practice or any other professional or commercial setting requires our
              prior written agreement. Write to us — we are not difficult about it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">
              3. Free use and purchases
            </h2>
            <p className="text-[var(--text)]">
              The first 100 problems are free. After that the app must be unlocked to continue. Unlocking is a
              one-time purchase; each additional child profile is a further, separate one-time purchase, up to
              six children in total.
            </p>
            <p className="text-[var(--text)]">
              <strong className="text-[var(--text-strong)]">There is no subscription.</strong> Nothing renews,
              nothing is charged again, and nothing expires. The prices shown in the app come from the App
              Store in your own currency; the price you see before confirming is the price you pay.
            </p>
            <p className="text-[var(--text)]">
              All purchases are made from Apple through the App Store. Apple is the seller and handles the
              payment; we are not party to that transaction and receive no payment data. Purchases are tied to
              the Apple Account that made them and can be restored on another device with &quot;Restore
              Purchases&quot;. They are shared with the Family Sharing group of that Apple Account.
            </p>
            <p className="text-[var(--text)]">
              A purchase must be made or authorised by an adult — the holder of the Apple Account, or a parent
              or guardian through Ask to Buy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">4. Refunds</h2>
            <p className="text-[var(--text)]">
              Because Apple is the seller, refunds are requested from Apple, not from us, at{' '}
              <a
                href="https://reportaproblem.apple.com"
                className="text-[var(--primary)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                reportaproblem.apple.com
              </a>
              . We cannot issue a refund ourselves and have no influence over Apple&apos;s decision. Your
              statutory consumer rights, including any right of withdrawal you have under EU law, remain
              unaffected and are exercised through Apple as the seller.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">5. Your data</h2>
            <p className="text-[var(--text)]">
              Glimpy collects nothing and sends nothing. Everything it stores — profiles, progress, practice
              statistics — stays on your device and is deleted with the app. Deleting the app therefore also
              deletes the practice history; a purchase is unaffected and can be restored. See the{' '}
              <Link href="/glimpy/privacy" className="text-[var(--primary)] hover:underline">
                Privacy Policy
              </Link>{' '}
              for the detail.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">
              6. Availability and changes
            </h2>
            <p className="text-[var(--text)]">
              We may change, add to or remove features in future versions, and Glimpy may require a current
              version of iOS. We do not promise that the app will be offered indefinitely. If it is ever
              withdrawn from sale, versions already purchased keep working on the devices they are installed
              on for as long as the operating system supports them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">7. Liability</h2>
            <p className="text-[var(--text)]">
              Glimpy is provided with the care you would expect of a product sold for money, but no software is
              free of faults and we do not warrant that it will be uninterrupted or error-free.
            </p>
            <p className="text-[var(--text)]">
              We are liable without limit for damage caused intentionally or by gross negligence, for injury to
              life, body or health, and wherever mandatory law imposes liability regardless of fault. For
              slight negligence we are liable only for breach of an obligation essential to the purpose of the
              contract, and then only for the damage typically foreseeable for a product of this kind and
              price. Nothing in these terms limits rights that consumers have by law and that cannot be
              limited by agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">
              8. Governing law and jurisdiction
            </h2>
            <p className="text-[var(--text)]">
              Austrian law applies, excluding its conflict-of-law rules and the UN Convention on Contracts for
              the International Sale of Goods. If you are a consumer resident in the EU, this choice does not
              deprive you of the protection of the mandatory law of your own country, and you may bring
              proceedings in the courts there. For customers who are not consumers, the place of jurisdiction
              is Vienna, Austria.
            </p>
            <p className="text-[var(--text)]">
              The European Commission provides an online dispute resolution platform at{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                className="text-[var(--primary)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ec.europa.eu/consumers/odr
              </a>
              . We are not obliged, and not willing, to take part in dispute resolution proceedings before a
              consumer arbitration board.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">9. Contact</h2>
            <p className="text-[var(--text)]">
              Spacer GIF, a division of S&amp;C Holding GmbH<br />
              Halbgasse 1a, 1070 Vienna, Austria<br />
              Managing Director: Mag. Markus Höfinger<br />
              VAT ID: ATU70341613<br />
              Email:{' '}
              <a href="mailto:hello@spacer-gif.com" className="text-[var(--primary)] hover:underline">
                hello@spacer-gif.com
              </a>
            </p>
          </section>

          <section>
            <p className="text-[var(--text-muted)] text-sm">
              See also the{' '}
              <Link href="/glimpy/privacy" className="text-[var(--primary)] hover:underline">
                Glimpy Privacy Policy
              </Link>{' '}
              and our{' '}
              <Link href="/legal/imprint" className="text-[var(--primary)] hover:underline">
                Imprint
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
