import Link from 'next/link';
import { Logo } from '@/components/Logo';

export const metadata = {
  title: 'Glimpy — Privacy Policy',
  description: 'Privacy policy for the Glimpy iPhone app. Glimpy collects no data at all.',
};

export default function GlimpyPrivacy() {
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
        <h1 className="text-3xl font-bold text-[var(--text-strong)] mb-2">Glimpy — Privacy Policy</h1>
        <p className="text-[var(--text-muted)] mb-8">Last updated: July 28, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <p className="text-[var(--text)] text-lg">
              <strong className="text-[var(--text-strong)]">Glimpy collects no data.</strong> It has no
              accounts, no sign-up, no analytics, no advertising and no tracking of any kind. It sends
              nothing about your child anywhere, because it has no way to: the app contains no networking
              code at all. Everything it remembers stays on the device it is installed on.
            </p>
            <p className="text-[var(--text)]">
              That is the whole policy. The sections below only spell it out.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">1. Who is responsible</h2>
            <p className="text-[var(--text)]">
              Spacer GIF, a division of S&amp;C Holding GmbH<br />
              Halbgasse 1a, 1070 Vienna, Austria<br />
              VAT ID: ATU70341613<br />
              Email:{' '}
              <a href="mailto:hello@spacer-gif.com" className="text-[var(--primary)] hover:underline">
                hello@spacer-gif.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">
              2. What Glimpy stores, and where
            </h2>
            <p className="text-[var(--text)]">
              Glimpy keeps the following on the device itself, so that the app still works the way you left
              it the next time it is opened:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[var(--text)] mt-4">
              <li>the child profiles you create — a name you choose, a colour and an animal badge;</li>
              <li>each child&apos;s current level and chosen kind of problem;</li>
              <li>
                practice statistics per child — how many problems were answered and how many correctly, when
                practice sessions started and ended, counts by level and by times table, the score of each
                round, and the list of problems answered wrongly;
              </li>
              <li>how many problems have been answered in total, to apply the free-play limit;</li>
              <li>your sound and vibration settings, and whether a purchase has unlocked the app.</li>
            </ul>
            <p className="text-[var(--text)] mt-4">
              None of it is transmitted, uploaded, backed up to us, or readable by us. We have no server that
              could receive it. If you use iCloud device backup, that copy is governed by Apple&apos;s terms,
              not ours. Deleting the app deletes all of it.
            </p>
            <p className="text-[var(--text)]">
              The name you give a profile is entirely your choice — a first name, a nickname or just
              &quot;Child 1&quot;. It is shown only on that device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">
              3. What Glimpy does not do
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-[var(--text)]">
              <li>No user accounts, no login, no email address required.</li>
              <li>No analytics or usage measurement of any kind, first-party or third-party.</li>
              <li>No advertising, no ad networks, no behavioural or contextual advertising.</li>
              <li>No third-party SDKs, no social network integration, no chat.</li>
              <li>No location, contacts, photos, camera, microphone or health data.</li>
              <li>No push notifications. Glimpy never asks a child to come back.</li>
              <li>No profiling, and no automated decision-making within the meaning of Art. 22 GDPR.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">4. Purchases</h2>
            <p className="text-[var(--text)]">
              Glimpy can be tried free for the first 100 problems. After that it is unlocked by a one-time
              purchase; further child profiles are separate one-time purchases. There is no subscription.
            </p>
            <p className="text-[var(--text)]">
              Purchases are handled entirely by Apple through the App Store. Apple is the seller and processes
              the payment. We never see a name, an address, or any payment detail — no card number reaches us,
              and none could. Apple tells the app only whether a purchase exists, so that it can unlock. What
              Apple itself collects when you buy is covered by{' '}
              <a
                href="https://www.apple.com/legal/privacy/"
                className="text-[var(--primary)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple&apos;s Privacy Policy
              </a>
              .
            </p>
            <p className="text-[var(--text)]">
              As the developer we can see App Store sales reports from Apple. These are aggregated and
              anonymous — numbers of downloads and purchases by country and day. They identify nobody.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">5. Children</h2>
            <p className="text-[var(--text)]">
              Glimpy is made for children of roughly five to nine. This is the reason it is built the way it
              is: an app used by a child should not be gathering anything about that child. Because we collect
              no personal data whatsoever, there is nothing to consent to under Art. 8 GDPR and nothing that
              could fall under COPPA.
            </p>
            <p className="text-[var(--text)]">
              The practice statistics are for the parent who bought the app, on their own device. They are not
              a report we receive, and there is no way for us to obtain them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">6. Your rights</h2>
            <p className="text-[var(--text)]">
              Under the GDPR you have the right to information, correction, erasure, restriction, objection and
              data portability. In Glimpy&apos;s case these rights have no object: we hold no personal data
              about you or your child, so there is nothing for us to disclose, correct, or delete. Everything
              the app has stored is under your own control on your device and is removed by deleting the app.
            </p>
            <p className="text-[var(--text)]">
              If you write to us at{' '}
              <a href="mailto:hello@spacer-gif.com" className="text-[var(--primary)] hover:underline">
                hello@spacer-gif.com
              </a>
              , we hold that correspondence for as long as needed to answer you. You can ask us to delete it at
              any time. You also have the right to complain to a supervisory authority — in Austria, the
              Datenschutzbehörde (dsb.gv.at).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">7. Changes</h2>
            <p className="text-[var(--text)]">
              If a future version of Glimpy ever changes what it stores or introduces any network feature, this
              page will be updated before that version is released, and the date at the top will change. We
              have no intention of adding data collection to this app.
            </p>
          </section>

          <section>
            <p className="text-[var(--text-muted)] text-sm">
              See also the{' '}
              <Link href="/glimpy/terms" className="text-[var(--primary)] hover:underline">
                Glimpy Terms of Use
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
