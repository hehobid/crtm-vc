import { useEffect, useState } from 'react';

interface Building {
  height: number;
  width: number;
  windows: boolean[];
  delay: number;
}

export function Skyline() {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Generate random buildings
    const newBuildings: Building[] = [];
    const count = 40;
    
    for (let i = 0; i < count; i++) {
      const height = Math.random() * 150 + 50;
      const width = Math.random() * 20 + 15;
      const windowCount = Math.floor(height / 15) * 2;
      const windows = Array(windowCount).fill(false).map(() => Math.random() > 0.4);
      
      newBuildings.push({
        height,
        width,
        windows,
        delay: i * 30,
      });
    }
    
    setBuildings(newBuildings);
    
    // Trigger mount animation
    setTimeout(() => setMounted(true), 100);
  }, []);

  // Flickering windows effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBuildings(prev => prev.map(building => ({
        ...building,
        windows: building.windows.map(w => 
          Math.random() > 0.95 ? !w : w
        ),
      })));
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[2px]">
        {buildings.map((building, i) => (
          <div
            key={i}
            className="relative transition-all duration-1000 ease-out"
            style={{
              width: `${building.width}px`,
              height: mounted ? `${building.height}px` : '0px',
              transitionDelay: `${building.delay}ms`,
              background: 'linear-gradient(180deg, #1e3a5f 0%, #0d1b2a 100%)',
              borderTop: '2px solid #00ff9f',
              borderLeft: '1px solid #1e3a5f',
              borderRight: '1px solid #1e3a5f',
            }}
          >
            {/* Windows grid */}
            <div className="absolute inset-1 grid grid-cols-2 gap-1 p-1">
              {building.windows.map((lit, j) => (
                <div
                  key={j}
                  className={`w-full h-2 transition-colors duration-300 ${
                    lit ? 'bg-[#00ff9f]/60' : 'bg-[#0a1628]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Ground line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00ff9f]/50" />
    </div>
  );
}
