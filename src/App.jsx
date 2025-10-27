import Header from './components/Header';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import ContactSection from './components/ContactSection';

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-600 md:flex-row">
        <p>© {new Date().getFullYear()} Lex & Accord LLP. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#practice" className="hover:text-neutral-900">Practice Areas</a>
          <a href="#about" className="hover:text-neutral-900">About</a>
          <a href="#contact" className="hover:text-neutral-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
