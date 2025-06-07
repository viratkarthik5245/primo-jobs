import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MessageCircle as MessageCircleQuote, UserCircle, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer at TechCorp',
    story: "PrimoJobs was a game-changer! The daily job updates were spot-on, and the mock interview sessions gave me the confidence I needed. I landed my dream job within a month of using their services. Highly recommended!",
    imageAlt: "Priya Sharma, a happy PrimoJobs user",
    rating: 5,
    linkedin: "https://linkedin.com/in/priyasharma-example" // Replace with actual or placeholder links
  },
  {
    name: 'Rajesh Kumar',
    role: 'Data Analyst at FinSolutions',
    story: "The resume review service was incredible. They helped me highlight my skills effectively, and I started getting more interview calls. The assessment prep materials were also very useful. Thank you PrimoJobs!",
    imageAlt: "Rajesh Kumar, a satisfied PrimoJobs client",
    rating: 5,
    linkedin: "https://linkedin.com/in/rajeshkumar-example"
  },
  {
    name: 'Ananya Singh',
    role: 'Marketing Intern at AdGlobal',
    story: "As a fresher, I was overwhelmed by the job search process. PrimoJobs' resources and community support were invaluable. I found a great internship through their platform. The ₹29 strategy session was worth every penny!",
    imageAlt: "Ananya Singh, who found an internship via PrimoJobs",
    rating: 4,
    linkedin: "https://linkedin.com/in/ananyasingh-example"
  },
  {
    name: 'Vikram Patel',
    role: 'Project Lead at BuildIt Construction',
    story: "I was looking for a mid-career switch. PrimoJobs not only had relevant listings but their career coaching helped me strategize my move effectively. The quality of guidance is top-notch.",
    imageAlt: "Vikram Patel, who made a successful career switch",
    rating: 5,
    linkedin: "https://linkedin.com/in/vikrampatel-example"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const SuccessStoriesPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">Success Stories</h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Hear from job seekers who transformed their careers with PrimoJobs. Real stories, real results. Get inspired and see how we can help you achieve your goals.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="h-full flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-primary/20 glass-card">
              <CardHeader>
                <div className="flex items-center mb-3">
                  <div className="p-1 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mr-3">
                    {/* Using a placeholder image until <img-replace> is processed */}
                    {/* For now, a generic icon. Later, this would be <img-replace> */}
                    <UserCircle className="h-12 w-12 text-white" /> 
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm text-primary">{testimonial.role}</CardDescription>
                  </div>
                </div>
                <div className="flex">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <blockquote className="relative text-foreground/90 italic">
                  <MessageCircleQuote className="absolute -top-2 -left-3 h-8 w-8 text-primary/30 transform rotate-12" />
                  <p className="pl-4">{testimonial.story}</p>
                </blockquote>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="text-primary p-0 h-auto">
                  <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Linkedin className="h-4 w-4 mr-1" /> View Profile
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-16 text-center p-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg shadow-2xl"
        initial="hidden" animate="visible" variants={{...fadeIn, transition: {delay: 0.5}}}
      >
        <h2 className="text-3xl font-semibold mb-4">Ready to Write Your Own Success Story?</h2>
        <p className="text-slate-200 mb-6 max-w-xl mx-auto">
          Join thousands of successful job seekers. Explore our services and take the next step in your career journey.
        </p>
        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-cyan-600" asChild>
          <a href="/services">Explore Our Services</a>
        </Button>
      </motion.div>
    </div>
  );
};

export default SuccessStoriesPage;