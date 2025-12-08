import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles, ChevronDown } from 'lucide-react';
import Countdown from './components/Countdown';
import NewsletterForm from './components/NewsletterForm';
import Aurora from './components/Aurora';
import MegaMenu from './components/MegaMenu';
import { Button } from './components/ui/button';

function App() {
  // Set target date to 14 days from now for demo purposes
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handlers to manage menu state with a slight delay if needed, 
  // but for now direct state manipulation for simplicity
  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);

  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-hidden bg-white p-4 sm:p-6 md:p-8">
      
      {/* Black Rounded Rectangle Container */}
      <div className="relative w-full h-full max-w-[1850px] mx-auto bg-black rounded-2xl overflow-hidden flex flex-col shadow-2xl">
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-16 sm:py-24">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />

        {/* Floating Pill Header & Mega Menu Container */}
        {/* Changed positioning to absolute to stay within the rounded container */}
        <div 
          className="absolute top-6 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none"
          onMouseLeave={handleMouseLeave}
        >
          <motion.header 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-auto w-full max-w-5xl bg-white/95 backdrop-blur-md text-black h-14 px-4 flex items-center justify-between shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-white/50 ring-1 ring-black/5 relative z-20"
            style={{ borderRadius: '12px' }}
          >
            {/* Logo Section */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="bg-black text-white p-1 rounded-md transition-transform group-hover:scale-105">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">VibesDev</span>
            </div>
            
            {/* Navigation - Centered (Hidden on mobile for space) */}
            <nav className="hidden md:flex items-center gap-6 font-medium text-sm text-gray-600 h-full">
              <div 
                className="h-full flex items-center relative group"
                onMouseEnter={handleMouseEnter}
              >
                <a 
                  href="#" 
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-[0px] transition-all duration-200 ${
                    isMenuOpen 
                      ? 'bg-gray-100 text-black font-semibold' 
                      : 'hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  Platform 
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
                </a>
                {/* Invisible bridge to prevent menu closing when moving cursor from nav to menu */}
                <div className="absolute top-full left-0 w-full h-6 bg-transparent" />
              </div>
              
              <a href="#" className="hover:text-black transition-colors px-4 py-2 rounded-[20px] hover:bg-gray-50">Features</a>
              <a href="#" className="hover:text-black transition-colors px-4 py-2 rounded-[20px] hover:bg-gray-50">Resources</a>
              <a href="#" className="hover:text-black transition-colors px-4 py-2 rounded-[20px] hover:bg-gray-50">Pricing</a>
            </nav>

            {/* CTA / Right Actions */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-medium hidden sm:block text-gray-600 hover:text-black transition-colors">Log in</a>
              <Button size="sm" className="rounded-full bg-black text-white hover:bg-gray-800 px-6 h-9 font-medium shadow-md border border-white/10">
                Get Access
              </Button>
            </div>
          </motion.header>

          {/* Mega Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <MegaMenu 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
              />
            )}
          </AnimatePresence>
        </div>

        {/* Main Content */}
        <main 
          className={`flex-1 flex flex-col items-center justify-center p-4 sm:p-8 z-10 w-full max-w-6xl mx-auto text-center mt-20 sm:mt-0 transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'blur-md opacity-30 scale-95 pointer-events-none' : 'blur-0 opacity-100 scale-100'
          }`}
        >
          <div className="space-y-6 sm:space-y-10 w-full flex flex-col items-center">
            
            {/* Badge - Consistent Rounded Border Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium backdrop-blur-sm shadow-xl"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 text-black shadow-sm">
                <Sparkles className="w-3 h-3 fill-current" />
              </span>
              <span className="tracking-wide text-gray-200">Coming Soon</span>
            </motion.div>

            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 sm:space-y-6 max-w-5xl"
            >
              <h1 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] drop-shadow-xl" style={{ fontFamily: '"Link Sans ExtraBold", sans-serif' }}>
                Vibecode Something<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Build with Soul.</span>
              </h1>
              <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light px-4">
                Describe what you want to build and watch it come to life
              </p>
            </motion.div>

            {/* Newsletter Form & Timer Container */}
            <div className="w-full max-w-md space-y-6 sm:space-y-8">
              {/* Timer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Countdown targetDate={targetDate} />
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <NewsletterForm />
              </motion.div>
            </div>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}

export default App;