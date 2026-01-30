import { useEffect, useState } from 'react';
import { Skyline } from './components/Skyline';
import { Terminal, ChevronDown, ExternalLink } from 'lucide-react';

const portfolioCompanies = [
  { 
    name: 'myneva', 
    year: '2017', 
    desc: 'Leading European software provider for social care and healthcare',
    detail: '100,000+ users across 6 European countries. Built through anchor investment and 8 add-on acquisitions to become the #1 platform in DACH and Benelux.',
    sector: 'Healthcare',
    url: 'https://myneva.eu'
  },
  { 
    name: 'EvidentIQ', 
    year: '2019', 
    desc: 'End-to-end eClinical solutions for life sciences',
    detail: '3,500+ clinical studies, 25M patients across 83 countries. Trusted by 15 of the top 20 pharma companies worldwide.',
    sector: 'Life Science',
    url: 'https://evidentiq.com'
  },
  { 
    name: 'JustRelate', 
    year: '2020', 
    desc: 'All-in-one customer experience platform for CRM and CMS',
    detail: '100,000+ active users, 250+ enterprise customers. Integrated etracker for analytics capabilities.',
    sector: 'B2B SaaS',
    url: 'https://justrelate.com'
  },
  { 
    name: 'eSight Energy', 
    year: '2021', 
    desc: 'Enterprise energy data management and sustainability',
    detail: '33,000 users managing 260,000 buildings in 60 countries. Monitoring $5B+ in energy spend.',
    sector: 'Energy Tech',
    url: 'https://esightenergy.com'
  },
  { 
    name: 'everii', 
    year: '2022', 
    desc: 'Leading CRM/ERP platform for agencies and professional services',
    detail: '10,000+ CRM customers. #1 in DACH for agencies and consultancies with 80%+ recurring revenue.',
    sector: 'B2B SaaS',
    url: 'https://hellohq.io'
  },
  { 
    name: 'Nextron Systems', 
    year: '2022', 
    desc: 'Advanced threat detection and forensic analysis',
    detail: 'Industry-leading detection rates for APTs, malware, and compromise assessment. German-engineered security.',
    sector: 'Cybersecurity',
    url: 'https://nextron-systems.com'
  },
  { 
    name: 'TinyMDM', 
    year: '2025', 
    desc: 'Simplified Android mobile device management',
    detail: 'Intuitive MDM solution with kiosk mode, app management, and security compliance for enterprise fleets.',
    sector: 'Enterprise Tech',
    url: 'https://tinymdm.net'
  },
  { 
    name: 'Insurgo', 
    year: '2025', 
    desc: 'Cloud-based insurance broker management platform',
    detail: 'AI-powered document processing, customer portals, and automated workflows for modern insurance brokers.',
    sector: 'Insurtech',
    url: 'https://insurgo.de'
  },
  { 
    name: 'Crisalix', 
    year: '2025', 
    desc: '3D simulation software for aesthetic medicine',
    detail: 'World-leading 3D visualization for cosmetic surgery planning. Used by surgeons globally.',
    sector: 'Healthcare',
    url: 'https://crisalix.com'
  },
  { 
    name: 'REALVIEW', 
    year: '2024', 
    desc: 'Digital defect management for construction',
    detail: 'Swiss-based software for construction managers. Automated documentation, real-time status tracking, and streamlined contractor communication.',
    sector: 'Construction Tech',
    url: 'https://realview.ch'
  },
  { 
    name: 'Local Brand X', 
    year: '2023', 
    desc: 'Platform for decentralized marketing',
    detail: 'Enabling brands to collaborate with 50+ distribution partners. Centralized asset management with local customization for franchisees and retailers.',
    sector: 'Marketing Tech',
    url: 'https://local-brand-x.com'
  },
  { 
    name: 'Cuseum', 
    year: '2023', 
    desc: 'Visitor and member engagement for cultural institutions',
    detail: 'Digital membership, mobile engagement, and AR solutions for museums and cultural organizations worldwide.',
    sector: 'Culture Tech',
    url: 'https://cuseum.com'
  },
  { 
    name: 'MegaCAD', 
    year: '2024', 
    desc: 'CAD software for mechanical engineering and metal construction',
    detail: '35 years of industry expertise. Full value chain coverage from customer inquiry to assembly. Includes Bausoft acquisition for building technology.',
    sector: 'Construction Tech',
    url: 'https://megacad.de'
  },
];

export default function App() {
  const [displayText, setDisplayText] = useState('');
  const [showImprint, setShowImprint] = useState(false);
  const [expandedCompany, setExpandedCompany] = useState<number | null>(null);
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
              <div className="text-3xl font-bold mb-2 text-[#00d4ff]">0x0D</div>
              <div className="text-[#5a7fa6] text-sm">PORTFOLIO COMPANIES</div>
            </div>
            <div className="border border-[#1e3a5f] bg-[#0d1b2a]/50 p-6 backdrop-blur hover:border-[#00ff9f]/50 transition-colors">
              <div className="text-3xl font-bold mb-2 text-[#00d4ff]">0x0A</div>
              <div className="text-[#5a7fa6] text-sm">YEARS ACTIVE</div>
            </div>
            <div className="border border-[#1e3a5f] bg-[#0d1b2a]/50 p-6 backdrop-blur hover:border-[#00ff9f]/50 transition-colors">
              <div className="text-3xl font-bold mb-2 text-[#00d4ff]">0x05</div>
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
    'Vertical B2B Software',
    'Healthcare & Life Science',
    'Energy & Sustainability',
    'Cybersecurity',
    'Professional Services Tech'
  ],
  stage: 'Growth Equity & Buyout',
  approach: 'Buy-and-build platform strategy',
  geography: 'DACH + Europe'
};

// We partner with market leaders in vertical software,
// building category-defining platforms through operational
// excellence and strategic add-on acquisitions.`}
            </pre>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="text-[#5a7fa6]">{'>'}</span> PORTFOLIO
          </h2>
          <p className="text-[#5a7fa6] text-sm mb-8 font-mono">{'// via BID Equity GmbH'}</p>
          <div className="grid gap-3">
            {portfolioCompanies.map((company, i) => (
              <div 
                key={i}
                className={`border bg-[#0d1b2a]/50 backdrop-blur transition-all cursor-pointer ${
                  expandedCompany === i ? 'border-[#00ff9f]' : 'border-[#1e3a5f] hover:border-[#00ff9f]/50'
                }`}
                onClick={() => setExpandedCompany(expandedCompany === i ? null : i)}
              >
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold">{company.name}</span>
                      <span className="text-xs px-2 py-1 border border-[#5a7fa6]/30 text-[#5a7fa6]">{company.sector}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[#5a7fa6] text-sm">{company.year}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-[#5a7fa6] transition-transform ${
                          expandedCompany === i ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>
                  <p className="text-[#5a7fa6] text-sm mt-2">{company.desc}</p>
                </div>
                
                {expandedCompany === i && (
                  <div className="px-5 pb-5 border-t border-[#1e3a5f] pt-4">
                    <p className="text-[#5a7fa6] text-sm mb-4">{company.detail}</p>
                    {company.url && (
                      <a 
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00ff9f] transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {company.url.replace('https://', '')}
                      </a>
                    )}
                  </div>
                )}
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
              <span>© 2026 Courtmaster Ventures GmbH</span>
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
