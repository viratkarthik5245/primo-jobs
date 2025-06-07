import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Award, MessageSquare as MessageSquareText, FileText, TrendingUp, DollarSign, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  { 
    id: 'mock-interviews',
    title: 'Mock Interviews (₹29 Strategy Session)', 
    price: '₹29 / ₹49',
    description: 'Practice real interview scenarios with experts. Get personalized feedback to improve your performance. Book a quick strategy session or a full mock interview.',
    features: ['One-on-one sessions', 'Industry-specific questions', 'Constructive feedback', 'Confidence building'],
    icon: <MessageSquareText className="h-10 w-10 text-primary" />,
    ctaLink: '/mock-interview',
    ctaText: 'Book a Session'
  },
  { 
    id: 'resume-review',
    title: 'Resume Review & Building', 
    price: '₹99 - ₹149',
    description: 'Get your resume reviewed by professionals or build a new one from scratch. Ensure your resume stands out to recruiters.',
    features: ['ATS-friendly formatting', 'Keyword optimization', 'Content enhancement', 'Cover letter assistance'],
    icon: <Award className="h-10 w-10 text-primary" />,
    ctaLink: '/resume-upload',
    ctaText: 'Upload Resume'
  },
  { 
    id: 'exam-help',
    title: 'Exam Help Slot Booking', 
    price: '₹199 - ₹499',
    description: 'Stuck on aptitude tests or coding challenges? Book a dedicated slot with our experts for guidance and problem-solving.',
    features: ['Aptitude test strategies', 'Coding problem assistance', 'Subject matter experts', 'Limited slots for focused help'],
    icon: <FileText className="h-10 w-10 text-primary" />,
    ctaLink: '/services#exam-help-booking',
    ctaText: 'Book Exam Help'
  },
  { 
    id: 'career-coaching',
    title: 'Career Coaching & Strategy', 
    price: 'Custom Pricing',
    description: 'Personalized coaching to navigate career transitions, skill development, and long-term career planning.',
    features: ['Goal setting', 'Skill gap analysis', 'Networking strategies', 'Personal branding'],
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    ctaLink: '/contact',
    ctaText: 'Inquire Now'
  },
  { 
    id: 'premium-resources',
    title: 'Monthly Membership', 
    price: 'Coming Soon',
    description: 'Unlock exclusive access to all premium PDFs, recorded sessions, and priority support with our monthly membership.',
    features: ['Full PDF library access', 'Exclusive workshop recordings', 'Early access to new job listings', 'Priority community support'],
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    ctaLink: '#',
    ctaText: 'Notify Me'
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServicesPage = () => {
  // This is a placeholder for Stripe integration.
  // In a real app, this would involve calling Stripe's API.
  const handlePayment = (service) => {
    alert(`Proceeding to payment for ${service.title} (Price: ${service.price}). \nThis is a placeholder. Payment integration (e.g., Stripe/Razorpay) would be implemented here.`);
    // For Stripe Client-Only Checkout, you'd redirect to Stripe or use Stripe.js
    // For example:
    // const stripe = await loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');
    // stripe.redirectToCheckout({ lineItems: [{ price: 'YOUR_PRICE_ID', quantity: 1 }], mode: 'payment', successUrl: '', cancelUrl: '' });
  };


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">Our Services</h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          PrimoJobs offers a range of specialized services to help you excel at every stage of your job search. From crafting the perfect resume to acing interviews, we've got you covered.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={service.id} 
            custom={index} 
            initial="hidden" 
            animate="visible" 
            variants={{ ...fadeIn, transition: { delay: index * 0.1, duration: 0.5 } }}
          >
            <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/20 glass-card">
              <CardHeader className="items-center text-center pb-4">
                <div className="p-3 rounded-full bg-primary/10 mb-3 inline-block">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-xl font-bold text-accent">{service.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white" 
                  size="lg"
                  onClick={() => service.ctaText.includes('Book') || service.ctaText.includes('Upload') ? (service.ctaLink.startsWith('/') ? null : handlePayment(service)) : null}
                  asChild={service.ctaLink.startsWith('/')}
                >
                  {service.ctaLink.startsWith('/') ? 
                    <Link to={service.ctaLink}>{service.ctaText}</Link> : 
                    <>{service.ctaText}</>
                  }
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 text-center p-8 bg-muted rounded-lg"
        initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: services.length * 0.1, duration: 0.5 } }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Not Sure Where to Start?</h2>
        <p className="text-muted-foreground mb-6">
          Our team is here to guide you. Reach out for a free consultation to discuss your career goals and how we can help you achieve them.
        </p>
        <Button size="lg" asChild>
          <Link to="/contact">Get a Free Consultation</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default ServicesPage;