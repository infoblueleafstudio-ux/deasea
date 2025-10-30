export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Versea</h3>
            <p className="text-neutral-400 leading-relaxed max-w-md">
              Design × Code × Emotion<br />
              世界観をデザインで可視化する。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Menu</h4>
            <nav className="space-y-2">
              {[
                { label: 'Services', id: 'services' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'About', id: 'about' },
                { label: 'Process', id: 'process' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {currentYear} Versea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
