import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Jobs', path: '/jobs' },
  ];

  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/d30d0ab1-4930-41cd-942a-8cb0e922fca2/e16644810434a42e7c4fc01622ce502f.png";

  const activeLinkClass = "text-primary font-semibold border-b-2 border-primary";
  const inactiveLinkClass = "text-foreground/80 hover:text-primary transition-colors";

  return (
    <nav className="bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoUrl} alt="PrimoJobs Logo" className="h-10 w-auto sm:h-12" />
            <span className="text-2xl font-bold text-primary hidden sm:block">PrimoJobs</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
              >
                {link.title}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Button size="sm" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white" asChild>
               <Link to="/jobs">Find Jobs</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-muted hover:text-primary'}`
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-border/50 px-5 space-y-3">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white" asChild>
                <Link to="/jobs" onClick={() => setMobileMenuOpen(false)}>Find Jobs</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;