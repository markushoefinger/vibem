import Link from 'next/link';
import { Logo } from '@/components/Logo';

export const metadata = {
  title: 'Glimpy — Math Trainer for Children',
  description:
    'Glimpy poses arithmetic problems and your child types in the answer. A practice trainer for ages 5 to 9, in the spirit of the handheld arithmetic trainers of the 1970s and 80s.',
};

const faqs = [
  {
    q: 'What ages is it for?',
    a: 'Roughly five to nine — from the first sums within ten, through carrying and borrowing, to the times tables. A child who can recognise the digits can start; nothing in the app has to be read.',
  },
  {
    q: 'What does it cost?',
    a: 'The first 100 problems are free. After that, unlocking is a one-time purchase. Each additional child profile is a further one-time purchase, up to six children. There is no subscription — nothing renews and nothing expires.',
  },
  {
    q: 'I bought it and moved to a new phone.',
    a: 'Open Settings inside the app, tap Pro, and choose Restore Purchases. The purchase belongs to the Apple Account that made it and is shared with that account’s Family Sharing group. Practice statistics are stored on the device only and do not move with a purchase.',
  },
  {
    q: 'Can I stop my child leaving the app?',
    a: 'Yes, with a feature iOS already has: Guided Access. Turn it on under Settings › Accessibility › Guided Access, then triple-click the side button while Glimpy is open. The Home gesture, app switching and notifications are locked until you unlock it again.',
  },
  {
    q: 'What data does it collect?',
    a: 'None. Glimpy has no accounts, no analytics, no advertising and no networking code at all. Names, progress and statistics stay on the device and are deleted with the app.',
  },
  {
    q: 'Something is wrong, or I have an idea.',
    a: 'Write to hello@spacer-gif.com. A real person reads it.',
  },
];

export default function GlimpyPage() {
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

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[var(--text-strong)] mb-2">Glimpy</h1>
        <p className="text-lg text-[var(--text-muted)] mb-8">The calculator that asks.</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <p className="text-[var(--text)] text-lg">
              Glimpy poses arithmetic problems. Your child types in the answer. That is the whole idea, and it
              is the opposite of a calculator — it comes from the handheld arithmetic trainers of the 1970s and
              80s: a small device with real keys, one job, and no way to wander off it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">What it does</h2>
            <ul className="list-disc pl-6 space-y-2 text-[var(--text)]">
              <li>
                <strong className="text-[var(--text-strong)]">Five levels.</strong> Level 1 stays under ten and
                stops at 5 × 5. Level 5 runs to 99 and to the full times tables. The 1×1 key drills a single
                table for a whole round.
              </li>
              <li>
                <strong className="text-[var(--text-strong)]">Statistics per child.</strong> How much they have
                practised and on how many days, how they do by level and by times table, and the score of each
                round.
              </li>
              <li>
                <strong className="text-[var(--text-strong)]">Practise the misses again.</strong> Glimpy keeps
                the actual problems a child got wrong. One tap starts a round made of nothing else, and a
                problem drops off the list the moment it is answered correctly.
              </li>
              <li>
                <strong className="text-[var(--text-strong)]">Quiet by design.</strong> No streaks, no coins,
                no characters to collect, no notifications, nothing that unlocks by playing longer.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-6">Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-lg font-medium text-[var(--text-strong)] mb-2">{faq.q}</h3>
                  <p className="text-[var(--text)]">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-strong)] mb-4">Support</h2>
            <p className="text-[var(--text)]">
              Email{' '}
              <a href="mailto:hello@spacer-gif.com" className="text-[var(--primary)] hover:underline">
                hello@spacer-gif.com
              </a>
              . Please say which iPhone and which iOS version you are on — it usually saves a round trip.
            </p>
            <p className="text-[var(--text)]">
              Glimpy is made by Spacer GIF, a division of S&amp;C Holding GmbH, Halbgasse 1a, 1070 Vienna,
              Austria.
            </p>
          </section>

          <section>
            <p className="text-[var(--text-muted)] text-sm">
              <Link href="/glimpy/privacy" className="text-[var(--primary)] hover:underline">
                Privacy Policy
              </Link>
              {' · '}
              <Link href="/glimpy/terms" className="text-[var(--primary)] hover:underline">
                Terms of Use
              </Link>
              {' · '}
              <Link href="/legal/imprint" className="text-[var(--primary)] hover:underline">
                Imprint
              </Link>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
