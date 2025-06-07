import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Briefcase, Users, Star, MessageSquare as MessageSquareText, FileText, Award, Search, Send } from 'lucide-react';

const HomePage = () => {
  const services = [
    { title: 'Daily Job Updates', description: 'Fresh job listings everyday, curated for you.', icon: <Briefcase className="h-8 w-8 text-primary" />, link: '/jobs' },
    { title: 'Assessment Prep', description: 'Practice tests and materials for company assessments.', icon: <FileText className="h-8 w-8 text-primary" />, link: '/services#assessment-prep' },
    { title: 'Interview Coaching', description: 'Mock interviews and expert feedback to ace your interviews.', icon: <MessageSquareText className="h-8 w-8 text-primary" />, link: '/mock-interview' },
    { title: 'Resume Building', description: 'Craft a standout resume that gets noticed by recruiters.', icon: <Award className="h-8 w-8 text-primary" />, link: '/services#resume-help' },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <motion.section 
        className="relative pt-20 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-slate-900 via-blue-900 to-sky-700 text-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall-3.png')]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tight mb-6"
            variants={fadeIn}
          >
            Land Your <span className="text-cyan-400">Dream Job</span> with PrimoJobs
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10"
            variants={fadeIn}
          >
            Your ultimate partner in navigating the job market. Get daily updates, expert guidance, and the resources you need to succeed.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn}
          >
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/jobs">
                <Search className="mr-2 h-5 w-5" /> Find Jobs Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground" variants={fadeIn}>
          How We Help You Succeed
        </motion.h2>
        <motion.p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto" variants={fadeIn}>
          PrimoJobs offers a comprehensive suite of services designed to give you a competitive edge in your job search.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 glass-card border-primary/20">
                <CardHeader className="items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-3">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4">{service.description}</CardDescription>
                  <Button variant="link" className="text-primary font-semibold p-0 h-auto" asChild>
                    <Link to={service.link}>Learn More &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why PrimoJobs Section */}
      <motion.section 
        className="bg-muted py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground" variants={fadeIn}>
            Why Choose <span className="text-primary">PrimoJobs?</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div variants={fadeIn}>
              <div className="p-4 bg-primary/10 inline-block rounded-full mb-4"><Briefcase className="h-10 w-10 text-primary" /></div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Daily Curated Jobs</h3>
              <p className="text-muted-foreground">Access the latest job openings tailored to your profile, updated daily.</p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="p-4 bg-primary/10 inline-block rounded-full mb-4"><Users className="h-10 w-10 text-primary" /></div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Career Guidance</h3>
              <p className="text-muted-foreground">Benefit from mock interviews, resume reviews, and exam preparation tips.</p>
            </motion.div>
            <motion.div variants={fadeIn}>
               <div className="p-4 bg-primary/10 inline-block rounded-full mb-4"><Star className="h-10 w-10 text-primary" /></div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Community Support</h3>
              <p className="text-muted-foreground">Join our active Telegram & WhatsApp channels for real-time support and networking.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Hiring Alert Section */}
      <motion.section 
        className="container mx-auto px-4 sm:px-6 lg:px-8 my-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="bg-white p-8 rounded-xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Hiring Alert: ANZ is Hiring!</h2>
          <p className="text-lg text-muted-foreground mb-2">
            ANZ is hiring for the role of Software Engineer
          </p>
          <p className="text-md text-muted-foreground mb-2">
            <strong>Location:</strong> Bangalore
          </p>
          <p className="text-md text-muted-foreground mb-4">
            <strong>Eligible Batch:</strong> 2022 / 2023 / 2024 / 2025 Graduates
          </p>
          <p className="text-md text-muted-foreground mb-4">
            <strong>Role:</strong> Software Engineer
          </p>
          <Button variant="outline" className="mt-4" asChild>
            <a href="https://careers.anz.com/job/Bengaluru-Software-Engineer/1210214001/" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </motion.section>
      {/* Testimonial Snippet (Placeholder) */}
      <motion.section 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 md:p-12 rounded-xl shadow-2xl text-white text-center">
          <Star className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Hear From Our Success Stories</h3>
          <blockquote className="text-lg italic mb-6 max-w-2xl mx-auto">
            "Thanks to PrimoJobs, I landed my dream role at a top MNC! The mock interviews were incredibly helpful."
          </blockquote>
          <p className="font-semibold">- Priya S., Software Engineer</p>
          <Button variant="outline" className="mt-8 border-white text-white hover:bg-white hover:text-cyan-600" asChild>
            <Link to="/success-stories">Read More Success Stories</Link>
          </Button>
        </div>
      </motion.section>

      {/* Join Community Section */}
      <motion.section 
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Join Our Growing Community</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Connect with fellow job seekers, get instant updates, and share your journey.
        </p>
   <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white shadow-lg" asChild>
    <a href="https://whatsapp.com/channel/0029VayCVbU7j6g4jtGu3F1Y" target="_blank" rel="noopener noreferrer">
      <MessageSquareText className="mr-2 h-5 w-5" /> Join WhatsApp
