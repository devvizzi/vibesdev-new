import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  LayoutList, 
  BarChart2, 
  CreditCard, 
  ShoppingBag, 
  Mail, 
  PlayCircle, 
  ArrowRightLeft, 
  DollarSign, 
  Gift 
} from 'lucide-react';

interface MegaMenuProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const FeatureCard = ({ title, description, icon: Icon, colorClass, delay }: any) => (
  <motion.li 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="block h-full"
  >
    <a 
      href="#" 
      className="group block h-full p-2 rounded-xl hover:bg-gray-50 transition-all focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-black/5 outline-none"
    >
      <div className={`h-32 rounded-lg ${colorClass} mb-4 flex items-center justify-center relative overflow-hidden`}>
        {/* Abstract UI representation */}
        <div className="absolute inset-4 bg-white/40 rounded border border-white/20 shadow-sm transform group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 flex items-center justify-center">
          <Icon className="w-8 h-8 opacity-70" aria-hidden="true" />
        </div>
      </div>
      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 leading-snug">{description}</p>
    </a>
  </motion.li>
);

const ListItem = ({ icon: Icon, title, description }: any) => (
  <li>
    <a 
      href="#" 
      className="flex items-start gap-3 group p-2 -ml-2 rounded-lg hover:bg-gray-100/50 transition-colors focus:outline-none focus:bg-gray-100/50 focus:ring-2 focus:ring-black/5"
    >
      <div className="mt-1 text-gray-400 group-hover:text-black group-focus:text-black transition-colors">
        <Icon className="w-5 h-5" aria-hidden="true" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-black group-focus:text-black">{title}</h4>
        {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
      </div>
    </a>
  </li>
);

const MegaMenu: React.FC<MegaMenuProps> = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 right-0 mt-4 w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20 pointer-events-auto"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="region"
      aria-label="Platform Features Navigation"
    >
      <div className="flex flex-col md:flex-row p-2">
        {/* Main Features Grid */}
        <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-100">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4" role="list">
            <FeatureCard 
              title="Discover" 
              description="Find, vet, and connect with the right creators for your brand, at scale."
              icon={Search}
              colorClass="bg-pink-100 text-pink-600"
              delay={0.05}
            />
            <FeatureCard 
              title="Manage" 
              description="Keep every collaboration organized from start to finish."
              icon={LayoutList}
              colorClass="bg-purple-100 text-purple-600"
              delay={0.1}
            />
            <FeatureCard 
              title="Track" 
              description="Auto-track influencer campaign metrics & content. From reach, to clicks, to sales."
              icon={BarChart2}
              colorClass="bg-stone-100 text-stone-600"
              delay={0.15}
            />
            <FeatureCard 
              title="Pay" 
              description="Send fast, secure payments to creators worldwide."
              icon={CreditCard}
              colorClass="bg-orange-100 text-orange-600"
              delay={0.2}
            />
          </ul>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-72 bg-gray-50/50 p-8 flex flex-col justify-center">
          
          {/* Integrations */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4" id="integrations-heading">Integrations</h3>
            <ul className="space-y-2" aria-labelledby="integrations-heading">
              <ListItem 
                icon={ShoppingBag} 
                title="Shopify" 
                description="Send promo codes, links, and free products in seconds."
              />
              <ListItem 
                icon={Mail} 
                title="Email" 
                description="Reach more creators and keep comms in one place."
              />
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4" id="more-heading">More</h3>
            <ul className="space-y-1" aria-labelledby="more-heading">
              <ListItem icon={PlayCircle} title="Product tour" />
              <ListItem icon={ArrowRightLeft} title="Switch to Modash" />
              <ListItem icon={DollarSign} title="Influencer affiliates" />
              <ListItem icon={Gift} title="Influencer gifting" />
            </ul>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;