import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="group inline-flex items-center gap-2">
          <div className="rounded-md bg-black p-2 text-white transition-colors group-hover:bg-neutral-800">
            <span className="text-sm font-semibold">LA</span>
          </div>
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">Lex & Accord</p>
            <p className="text-xs text-neutral-500">Attorneys at Law</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#practice" className="text-sm text-neutral-700 transition-colors hover:text-black">Practice Areas</a>
          <a href="#about" className="text-sm text-neutral-700 transition-colors hover:text-black">About</a>
          <a href="#contact" className="text-sm text-neutral-700 transition-colors hover:text-black">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
          <Phone className="h-4 w-4" />
          Free Consultation
        </a>
      </div>
    </header>
  );
}
