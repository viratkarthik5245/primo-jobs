import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter } from 'lucide-react'; // Assuming you might want Twitter or other relevant socials

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/d30d0ab1-4930-41cd-942a-8cb0e922fca2/e16644810434a42e7c4fc01622ce502f.png";

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logoUrl} alt="PrimoJobs Logo" className="h-10 mr-2" />
              <span className="text-xl font-bold text-white">PrimoJobs</span>
            </Link>
            <p className="text-sm text-slate-400">
              Your primary destination for finding the latest job opportunities. We connect talent with great companies.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-4">Navigate</p>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/jobs" className="hover:text-primary transition-colors">Find Jobs</Link></li>
              {/* Add other relevant links if any, e.g., About Us, Contact (if kept) */}
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li> 
            </ul>
          </div>
          
          <div>
            <p className="font-semibold text-white mb-4">Connect With Us</p>
            <p className="text-sm text-slate-400 mb-3">
              Follow us on social media for the latest updates and job alerts.
            </p>
            <div className="flex space-x-4">
               <a href="YOUR_LINKEDIN_PROFILE_URL" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={22} /></a>
               <a href="YOUR_INSTAGRAM_PROFILE_URL" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors"><Instagram size={22} /></a>
               <a href="YOUR_TWITTER_PROFILE_URL" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={22} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} PrimoJobs. All rights reserved. Helping you find your next career move.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link> | 
            <Link to="/terms-of-service" className="hover:text-primary transition-colors ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;