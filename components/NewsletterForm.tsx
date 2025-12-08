import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { subscribeToNewsletter } from '../services/mailchimp';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await subscribeToNewsletter(email);
      if (response.success) {
        setStatus('success');
        setMessage(response.message);
      } else {
        setStatus('error');
        setMessage(response.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full relative z-10">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-sm shadow-xl"
          >
            <CheckCircle2 className="w-10 h-10 text-green-400 mb-3" />
            <h3 className="text-lg font-semibold text-white">You're on the list!</h3>
            <p className="text-gray-400 text-sm mt-1">{message}</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow group">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="bg-white/5 hover:bg-white/10 text-white placeholder:text-gray-400 h-12 rounded-full px-6 border border-white/10 focus:border-white/30 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all text-base shadow-sm backdrop-blur-sm"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="h-12 rounded-full px-8 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-semibold shadow-lg shadow-pink-600/20 border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                isLoading={status === 'loading'}
              >
                Notify Me
              </Button>
            </form>

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="flex items-center justify-center text-red-400 text-sm gap-2 bg-red-950/30 border border-red-500/20 p-2 rounded-lg"
              >
                <AlertCircle className="w-4 h-4" />
                {message}
              </motion.div>
            )}
            
            <p className="text-center text-sm text-gray-500 font-medium">
              Join 2,000+ developers waiting for launch. No spam, ever.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsletterForm;