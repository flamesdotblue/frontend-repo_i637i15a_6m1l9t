import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thank you — your message has been received. We will get back to you shortly.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="border-t border-black/10 bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in touch</h2>
            <p className="mt-3 text-neutral-600">Schedule a free consultation or send us a message. We typically respond within one business day.</p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="inline-flex items-center gap-2 text-neutral-700"><Phone className="h-4 w-4" /> (555) 012-3456</div>
              <div className="inline-flex items-center gap-2 text-neutral-700"><Mail className="h-4 w-4" /> hello@lexaccord.com</div>
              <div className="inline-flex items-center gap-2 text-neutral-700"><MapPin className="h-4 w-4" /> 123 Market Street, Suite 500 — Your City</div>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-black/10 bg-white p-4">
              <div className="aspect-[16/9] w-full rounded-md bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE1MDAxMzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
              <p className="mt-2 text-xs text-neutral-500">Our downtown office, minutes from the courthouse.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Full name</label>
                <input type="text" required className="w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none ring-0 focus:border-black/20 focus:ring-1 focus:ring-black/10" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input type="email" required className="w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none ring-0 focus:border-black/20 focus:ring-1 focus:ring-black/10" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Phone</label>
                <input type="tel" className="w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none ring-0 focus:border-black/20 focus:ring-1 focus:ring-black/10" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">How can we help?</label>
                <textarea rows={5} required className="w-full resize-none rounded-md border border-black/10 bg-white px-3 py-2 outline-none ring-0 focus:border-black/20 focus:ring-1 focus:ring-black/10" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
                Send message
              </button>
              {status && (
                <p className="text-sm text-emerald-700">{status}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
