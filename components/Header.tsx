import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import Glyph from './Glyph';
import MegaMenu from './MegaMenu';

const Header = () => {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  useEffect(() => {
    if (isNavHovered) {
      document.body.classList.add('page-blur');
    } else {
      document.body.classList.remove('page-blur');
    }
    
    return () => {
      document.body.classList.remove('page-blur');
    };
  }, [isNavHovered]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlatformHovered, setIsPlatformHovered] = useState(false);

  const handlePlatformMouseEnter = () => {
    setIsPlatformHovered(true);
    setIsMenuOpen(true);
  };

  const handlePlatformMouseLeave = () => {
    setIsPlatformHovered(false);
  };

  const handleMenuMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMenuMouseLeave = () => {
    setIsMenuOpen(false);
    setIsPlatformHovered(false);
  };

  const handleHeaderMouseLeave = () => {
    if (!isMenuOpen) {
      setIsPlatformHovered(false);
    }
  };

  return (
    <div 
      className="w-full flex flex-col items-center px-4 pointer-events-none"
      onMouseLeave={handleHeaderMouseLeave}
    >
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto w-[calc(100%-24px)] max-w-5xl bg-white/95 backdrop-blur-md text-black h-14 px-4 flex items-center justify-between relative z-20"
        style={{
          borderRadius: '12px',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 600,
          border: '1px solid rgba(0,0,0,0.03)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
          margin: '0 12px'
        }}
      >
        {/* Logo Section */}
        <div className="relative">
          <div className="flex items-center h-full transition-transform duration-200 hover:scale-105 relative">
            <a href="/" className="relative">
              <img 
                src="/icons/Logo%20VibesDev.png" 
                alt="VibesDev Logo" 
                className="h-8 w-auto"
              />
            </a>
            <Glyph 
              logoPng="/icons/Logo%20VibesDev.png"
              logoSvg="/icons/Logo%20VibesDev.svg"
              brandmarkSvg="/icons/Logo%20VibesDev.svg"
              brandKitUrl="/brand-kit.zip"
              brandPageUrl="/brand"
              onMenuOpenChange={(open) => {
                setIsContextMenuOpen(open);
                if (open) {
                  setIsMenuOpen(false); // Chiudi megamenu quando si apre context menu
                }
              }}
            />
          </div>
        </div>
        
        {/* Navigation - Centered (Hidden on mobile for space) */}
        <nav 
          className={`hidden md:flex items-center gap-6 text-sm h-full transition-opacity duration-200 ${
            isContextMenuOpen ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'
          }`}
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => setIsNavHovered(false)}
        >
          <div 
            className="h-full flex items-center relative group"
            onMouseEnter={handlePlatformMouseEnter}
            onMouseLeave={handlePlatformMouseLeave}
          >
            <a 
              href="#" 
              className={`flex items-center gap-1.5 px-4 py-2 rounded-[8px] transition-all duration-200 text-gray-800 hover:text-gray-900 hover:bg-[#F0F0EE] text-sm ${
                (isMenuOpen && isPlatformHovered) ? 'bg-[#F3F4F6]' : ''
              }`}
              style={{ fontWeight: 'var(--font-weight, 600)' }}
              onMouseEnter={(e) => e.currentTarget.style.setProperty('--font-weight', '700')}
              onMouseLeave={(e) => e.currentTarget.style.setProperty('--font-weight', '600')}
            >
              Platform 
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${(isMenuOpen && isPlatformHovered) ? 'rotate-180' : ''}`} />
            </a>
            {/* Invisible bridge to prevent menu closing when moving cursor from nav to menu */}
            <div className="absolute top-full left-0 w-full h-6 bg-transparent" />
          </div>
          
          <a 
            href="#" 
            className="text-gray-800 hover:text-gray-900 transition-colors px-4 py-2 rounded-[8px] hover:bg-[#F0F0EE] text-sm"
            style={{ fontWeight: 'var(--font-weight, 600)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.setProperty('--font-weight', '700');
              // Close the mega menu when hovering other navigation items
              if (isMenuOpen) {
                setIsMenuOpen(false);
                setIsPlatformHovered(false);
              }
            }}
            onMouseLeave={(e) => e.currentTarget.style.setProperty('--font-weight', '600')}
          >Features</a>
          <a 
            href="#" 
            className="text-gray-800 hover:text-gray-900 transition-colors px-4 py-2 rounded-[8px] hover:bg-[#F0F0EE] text-sm"
            style={{ fontWeight: 'var(--font-weight, 600)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.setProperty('--font-weight', '700');
              // Close the mega menu when hovering other navigation items
              if (isMenuOpen) {
                setIsMenuOpen(false);
                setIsPlatformHovered(false);
              }
            }}
            onMouseLeave={(e) => e.currentTarget.style.setProperty('--font-weight', '600')}
          >Resources</a>
          <a 
            href="#" 
            className="text-gray-800 hover:text-gray-900 transition-colors px-4 py-2 rounded-[8px] hover:bg-[#F0F0EE] text-sm"
            style={{ fontWeight: 'var(--font-weight, 600)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.setProperty('--font-weight', '700');
              // Close the mega menu when hovering other navigation items
              if (isMenuOpen) {
                setIsMenuOpen(false);
                setIsPlatformHovered(false);
              }
            }}
            onMouseLeave={(e) => e.currentTarget.style.setProperty('--font-weight', '600')}
          >Pricing</a>
          <a 
            href="#" 
            className="text-gray-800 hover:text-gray-900 transition-colors px-4 py-2 rounded-[8px] hover:bg-[#F0F0EE] text-sm"
            style={{ fontWeight: 'var(--font-weight, 600)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.setProperty('--font-weight', '700');
              // Close the mega menu when hovering other navigation items
              if (isMenuOpen) {
                setIsMenuOpen(false);
                setIsPlatformHovered(false);
              }
            }}
            onMouseLeave={(e) => e.currentTarget.style.setProperty('--font-weight', '600')}
          >Jobs</a>
        </nav>

        {/* CTA / Right Actions */}
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="text-sm hidden sm:block text-gray-600 hover:text-black transition-colors"
            style={{ fontWeight: 'var(--font-weight, 600)' }}
            onMouseEnter={(e) => e.currentTarget.style.setProperty('--font-weight', '700')}
            onMouseLeave={(e) => e.currentTarget.style.setProperty('--font-weight', '600')}
          >
            Log in
          </a>
          <Button 
            size="sm" 
            className="rounded-full bg-black text-white hover:bg-gray-800 px-6 h-9 shadow-md border border-white/10"
            style={{ fontVariationSettings: '"wght" 800' }}
          >
            Get Access
          </Button>
        </div>
      </motion.header>

      {/* Mega Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <MegaMenu 
            onMouseEnter={handleMenuMouseEnter} 
            onMouseLeave={handleMenuMouseLeave} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
