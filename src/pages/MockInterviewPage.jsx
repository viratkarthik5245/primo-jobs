import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, MessageSquare as MessageSquareHeart, Video, HelpCircle, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const MockInterviewPage = () => {
  const calendlyLink = "YOUR_CALENDLY_LINK_HERE"; // Replace with your actual Calendly link

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">Book Your Mock Interview</h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Ace your next interview with personalized practice sessions. Our experts provide real-world scenarios and constructive feedback to boost your confidence and skills.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16"
        initial="hidden" animate="visible" variants={staggerChildren}
      >
        <motion.div variants={fadeIn}>
          <Card className="shadow-xl border-primary/30 glass-card">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <CalendarDays className="h-16 w-16 text-primary" />
              </div>
              <CardTitle className="text-3xl font-semibold text-center text-foreground">Ready to Practice?</CardTitle>
              <CardDescription className="text-center text-muted-foreground text-lg pt-2">
                Book a slot that fits your schedule. Choose from ₹29 strategy sessions or full mock interviews.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-foreground/90">
                Click the button below to open our booking calendar. Select your preferred service, date, and time.
              </p>
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-lg py-3 px-8"
                asChild
              >
                <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                  Book Now via Calendly
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                You will be redirected to Calendly to complete your booking.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div className="space-y-6" variants={fadeIn}>
          <h2 className="text-2xl font-semibold text-foreground mb-4">What to Expect:</h2>
          {[
            { icon: <Video className="h-8 w-8 text-accent"/>, title: "Realistic Scenarios", description: "Experience interviews tailored to your target roles and industries." },
            { icon: <MessageSquareHeart className="h-8 w-8 text-accent"/>, title: "Expert Feedback", description: "Receive actionable insights on your answers, body language, and overall performance." },
            { icon: <Lightbulb className="h-8 w-8 text-accent"/>, title: "Confidence Boost", description: "Practice makes perfect. Build confidence and reduce anxiety for your real interviews." },
            { icon: <HelpCircle className="h-8 w-8 text-accent"/>, title: "Q&A Session", description: "Clarify your doubts and get answers to your pressing career questions." },
          ].map(item => (
            <div key={item.title} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="flex-shrink-0 mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="text-center p-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg shadow-2xl"
        initial="hidden" animate="visible" variants={{...fadeIn, transition: {delay: 0.5}}}
      >
        <h2 className="text-3xl font-semibold mb-4">Why Mock Interviews Are Crucial</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Mock interviews simulate the pressure and format of actual job interviews, allowing you to identify weaknesses, refine your responses, and develop effective communication strategies. It's an invaluable step towards interview success.
        </p>
        <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900" asChild>
          <a href="#faq">Frequently Asked Questions</a>
        </Button>
      </motion.div>
      
      {/* Placeholder for FAQ section */}
      <motion.div 
        id="faq" 
        className="mt-16"
        initial="hidden" animate="visible" variants={{...fadeIn, transition: {delay: 0.7}}}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {/* Example FAQ item, you can add more */}
          <details className="p-4 bg-background rounded-lg shadow border border-border">
            <summary className="font-semibold cursor-pointer text-foreground">How long is a typical mock interview session?</summary>
            <p className="mt-2 text-muted-foreground">
              Strategy sessions (₹29) are typically 15-20 minutes. Full mock interview sessions range from 45 to 60 minutes, including feedback.
            </p>
          </details>
           <details className="p-4 bg-background rounded-lg shadow border border-border">
            <summary className="font-semibold cursor-pointer text-foreground">Can I request a specific interviewer or industry focus?</summary>
            <p className="mt-2 text-muted-foreground">
              Yes, while booking through Calendly, you can often specify your preferences in the notes, or choose from available interviewer specializations if offered. We try our best to match you with the most suitable expert.
            </p>
          </details>
        </div>
      </motion.div>
    </div>
  );
};

export default MockInterviewPage;