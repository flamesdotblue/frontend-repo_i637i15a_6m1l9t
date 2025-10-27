import { Scale, Gavel, Shield } from 'lucide-react';

const AREAS = [
  {
    icon: Scale,
    title: 'Business & Contracts',
    desc: 'Entity formation, contract drafting, negotiations, and ongoing counsel for growing companies.',
  },
  {
    icon: Gavel,
    title: 'Civil Litigation',
    desc: 'Strategic representation in disputes, from pre‑litigation through trial and resolution.',
  },
  {
    icon: Shield,
    title: 'Family & Estate',
    desc: 'Wills, trusts, custody matters, and long‑term planning with care and discretion.',
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice" className="border-t border-black/10 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Practice Areas</h2>
          <p className="mt-3 text-neutral-600">
            Comprehensive counsel tailored to your goals. We combine deep expertise with a practical, business‑minded approach.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
              <div className="mt-4 text-sm font-medium text-neutral-900 opacity-0 transition group-hover:opacity-100">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
