import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Countdown from './components/Countdown';
import NewsletterForm from './components/NewsletterForm';
import Aurora from './components/Aurora';
import Header from './components/Header';
import { Button } from './components/ui/button';

function App() {
  // Set target date to 14 days from now for demo purposes
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-hidden bg-white p-4 sm:p-6 md:p-8">
      {/* Header Component */}
      <div className="relative z-50 mb-6">
        <Header />
      </div>
      
      {/* Black Rounded Rectangle Container */}
      <div className="relative w-full h-full max-w-[1850px] mx-auto bg-black rounded-2xl overflow-hidden flex flex-col shadow-2xl">
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-16 sm:py-24">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />

        {/* Main Content */}
        <main 
          className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 z-10 w-full max-w-6xl mx-auto text-center mt-20 sm:mt-0"
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