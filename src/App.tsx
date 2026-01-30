import { useEffect, useState } from 'react';
import { Skyline } from './components/Skyline';
import { Terminal } from 'lucide-react';

const portfolioCompanies = [
  { name: 'helloHQ', year: '2016', desc: 'All-in-one agency management software', stage: 'GROWTH', sector: 'B2B SaaS' },
  { name: 'Clawdbot', year: '2024', desc: 'AI-powered personal assistant framework', stage: 'SEED', sector: 'AI/ML' },
  { name: 'BIDEQU', year: '2020', desc: 'Digital equity management platform', stage: 'SERIES A', sector: 'Fintech' },
];

export default function App() {
  const [displayText, setDisplayText] = useState('');
  const [showImprint, setShowImprint] = useState(false);
  const fullText = '> COURTMASTER VENTURES';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628] text-[#00ff9f] font-mono relative overflow-hidden">
      {/* Scanline effect */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-10">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-[#00ff9f] to-transparent animate-scan" />
      </div>

      {/* Grid background */}
      <div className="fixed inset-0 opacity-5">
        <div 
          className="h-full w-full" 
          style={{
            backgroundImage: 'linear-gradient(#00ff9f 1px, transparent 1px), linear-gradient(90deg, #00ff9f 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-[#1e3a5f] bg-[#0d1b2a]/90 backdrop-blur sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5" />
              <span className="text-sm font-bold">crtm.vc</span>
            </div>
            <nav className="flex gap-6 text-sm">
              <a href="#portfolio" className="hover:text-[#00d4ff] transition-colors">PORTFOLIO</a>
              <a href="#thesis" className="hover:text-[#00d4ff] transition-colors">THESIS</a>
              <a href="#contact" className="hover:text-[#00d4ff] transition-colors">CONTACT</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 font-bold">
              {displayText}
              <span className="animate-pulse">_</span>
            </h1>
            <p className="text-xl text-[#5a7fa6] max-w-2xl">
              [ BUILDING THE FUTURE, ONE BLOCK AT A TIME ]
            </p>
          </div>

          {/* Skyline */}
          <Skyline />

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <div className="border border-[#1e3a5f] bg-[#0d1b2a]/50 p-6 backdrop-blur hover:border-[#00ff9f]/50 transition-colors">
              <div className="text-3xl font-bold mb-2 text-[#00d4ff]">0x03</div>
              <div className="text-[#5a7fa6] text-sm">PORTFOLIO COMPANIES</div>
            </div>
            <div className="border border-[#1e3a5f] bg-[#0d1b2a]/50 p-6 backdrop-blur hover:border-[#00ff9f]/50 transition-colors">
              <div className="text-3xl font-bold mb-2 text-[#00d4ff]">PRIVATE</div>
              <div className="text-[#5a7fa6] text-sm">ASSETS UNDER MANAGEMENT</div>
            </div>
            <div className="border border-[#1e3a5f] bg-[#0d1b2a]/50 p-6 backdrop-blur hover:border-[#00ff9f]/50 transition-colors">
              <div className="text-3xl font-bold mb-2 text-[#00d4ff]">0b0011</div>
              <div className="text-[#5a7fa6] text-sm">SECTORS COVERED</div>
            </div>
          </div>
        </section>

        {/* Thesis Section */}
        <section id="thesis" className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-[#5a7fa6]">{'>'}</span> INVESTMENT THESIS
          </h2>
          <div className="border border-[#1e3a5f] bg-[#0d1b2a]/50 p-8 backdrop-blur">
            <pre className="text-sm leading-relaxed text-[#5a7fa6] whitespace-pre-wrap font-mono">
{`// Core Focus Areas
const THESIS = {
  sectors: [
    'Enterprise SaaS',
    'Developer Tools',
    'AI/ML Infrastructure',
    'Fintech'
  ],
  stage: 'Seed to Series A',
  approach: 'Hands-on technical partnership',
  geography: 'DACH + Europe'
};

// We invest in builders who think in systems,
// code in production, and ship relentlessly.`}
            </pre>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-[#5a7fa6]">{'>'}</span> PORTFOLIO
          </h2>
          <div className="grid gap-4">
            {portfolioCompanies.map((company, i) => (
              <div 
                key={i}
                className="border border-[#1e3a5f] bg-[#0d1b2a]/50 p-6 backdrop-blur hover:border-[#00ff9f]/50 transition-all hover:translate-x-2 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xl font-bold">{company.name}</span>
                  <span className="text-[#5a7fa6] text-sm">{company.year}</span>
                </div>
                <p className="text-[#5a7fa6] mb-3">{company.desc}</p>
                <div className="flex gap-3">
                  <span className="text-xs px-2 py-1 border border-[#00ff9f]/30 text-[#00ff9f]">{company.stage}</span>
                  <span className="text-xs px-2 py-1 border border-[#5a7fa6]/30 text-[#5a7fa6]">{company.sector}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-[#5a7fa6]">{'>'}</span> GET IN TOUCH
          </h2>
          <div className="border border-[#1e3a5f] bg-[#0d1b2a]/50 p-8 backdrop-blur">
            <p className="text-[#5a7fa6] mb-6">Building something ambitious? Let's talk.</p>
            <div className="space-y-3">
              <div className="flex gap-4">
                <span className="text-[#5a7fa6] w-20">EMAIL:</span>
                <a href="mailto:hello@crtm.vc" className="hover:text-[#00d4ff] transition-colors">hello@crtm.vc</a>
              </div>
              <div className="flex gap-4">
                <span className="text-[#5a7fa6] w-20">LINKEDIN:</span>
                <a href="https://linkedin.com/in/helgehofmeister" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d4ff] transition-colors">@helgehofmeister</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#1e3a5f] bg-[#0d1b2a]/90 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#5a7fa6]">
            <div className="flex items-center gap-4">
              <span>© 2025 Courtmaster Ventures GmbH</span>
              <button 
                onClick={() => setShowImprint(true)}
                className="hover:text-[#00d4ff] transition-colors underline underline-offset-2"
              >
                Impressum
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span>STATUS:</span>
              <span className="text-[#00ff9f] flex items-center gap-1">
                <span className="w-2 h-2 bg-[#00ff9f] rounded-full animate-pulse" />
                ONLINE
              </span>
            </div>
          </div>
        </footer>

        {/* Impressum Modal */}
        {showImprint && (
          <div 
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShowImprint(false)}
          >
            <div 
              className="border border-[#1e3a5f] bg-[#0d1b2a] p-8 max-w-lg mx-4 max-h-[80vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">{'>'} IMPRESSUM</h3>
                <button 
                  onClick={() => setShowImprint(false)}
                  className="text-[#5a7fa6] hover:text-[#00ff9f] transition-colors text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              <div className="space-y-4 text-sm text-[#5a7fa6]">
                <div>
                  <div className="text-[#00ff9f] mb-1">Angaben gemäß § 5 TMG</div>
                  <p>courtmaster ventures GmbH</p>
                  <p>Hochallee 23</p>
                  <p>20149 Hamburg</p>
                </div>
                <div>
                  <div className="text-[#00ff9f] mb-1">Vertreten durch</div>
                  <p>Geschäftsführer: Dr. Helge Hofmeister</p>
                </div>
                <div>
                  <div className="text-[#00ff9f] mb-1">Kontakt</div>
                  <p>E-Mail: hello@crtm.vc</p>
                </div>
                <div>
                  <div className="text-[#00ff9f] mb-1">Registereintrag</div>
                  <p>Eintragung im Handelsregister</p>
                  <p>Registergericht: Amtsgericht Hamburg</p>
                  <p>Registernummer: HRB 142666</p>
                </div>
                <div className="pt-4 border-t border-[#1e3a5f] text-xs">
                  <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
                  <p>Dr. Helge Hofmeister, Hochallee 23, 20149 Hamburg</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
