import { CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80rem_40rem_at_50%_-10%,rgba(0,0,0,0.08),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Trusted Counsel, Proven Results
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Strategic legal advocacy for life’s pivotal moments
          </h1>
          <p className="mt-4 max-w-xl text-neutral-600">
            From complex litigation to everyday agreements, our team provides clear guidance and relentless representation so you can move forward with confidence.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-md bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800">Book a Free Consultation</a>
            <a href="#practice" className="rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50">Explore Practice Areas</a>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-neutral-600">
            {[
              'Clear, plain‑English communication',
              'Transparent fees and flexible billing',
              'Client-first strategy and advocacy',
            ].map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-neutral-50 to-neutral-200 shadow-sm">
            <div className="absolute inset-0 grid place-items-center">
              <div className="mx-auto max-w-xs text-center">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-black text-white grid place-items-center text-2xl font-bold">LA</div>
                <p className="text-lg font-semibold">Lex & Accord</p>
                <p className="text-sm text-neutral-600">Your trusted legal partners</p>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
