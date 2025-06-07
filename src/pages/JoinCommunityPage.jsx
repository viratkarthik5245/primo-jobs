import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, MessageCircle, Users, Sparkles, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const JoinCommunityPage = () => {
 const telegramLink = "https://t.me/+Zo5445Vw6hIxYmQ1";
 const whatsappLink = "https://whatsapp.com/channel/0029VayCVbU7j6g4jtGu3F1Y";


  const communityBenefits = [
    { icon: <Sparkles className="h-8 w-8 text-primary" />, title: "Exclusive Job Alerts", description: "Get notified about the latest job openings before anyone else." },
    { icon: <Users className="h-8 w-8 text-primary" />, title: "Peer Support & Networking", description: "Connect with fellow job seekers, share experiences, and build your network." },
    { icon: <HelpCircle className="h-8 w-8 text-primary" />, title: "Expert Q&A Sessions", description: "Participate in live Q&A sessions with career coaches and industry experts." },
    { icon: <MessageCircle className="h-8 w-8 text-primary" />, title: "Resource Sharing", description: "Access shared resources, tips, and study materials from the community." },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">Join the PrimoJobs Community</h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Become a part of our vibrant community on Telegram and WhatsApp. Get real-time job updates, expert advice, peer support, and exclusive content to supercharge your job search.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        initial="hidden" animate="visible" variants={staggerChildren}
      >
        

        <motion.div variants={fadeIn}>
          <Card className="shadow-xl border-primary/30 h-full glass-card">
            <CardHeader className="items-center text-center">
              <MessageCircle className="h-16 w-16 text-green-500 mb-3" />
              <CardTitle className="text-3xl font-semibold text-foreground">WhatsApp Group</CardTitle>
              <CardDescription className="text-muted-foreground pt-1">
                Interactive discussions, peer support, and direct engagement.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-foreground/90">
                Our WhatsApp group is the place for active discussions, asking questions, sharing successes, and connecting with peers and mentors.
              </p>
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white text-lg py-3 px-8"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Join WhatsApp Group
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Why Join Our Community?</h2>
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={staggerChildren}
        >
          {communityBenefits.map((benefit, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full text-center shadow-md hover:shadow-lg transition-shadow duration-300 p-6 bg-muted/30">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="mt-16 text-center p-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg shadow-2xl"
        initial="hidden" animate="visible" variants={{...fadeIn, transition: {delay: 0.5}}}
      >
        <h2 className="text-3xl font-semibold mb-4">Your Success is Our Priority</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          At PrimoJobs, we believe in the power of community. By joining us, you're not just getting access to resources; you're becoming part of a supportive network dedicated to helping each other succeed.
        </p>
        <p className="text-sm text-slate-400">
          (Please note: Community guidelines apply. Be respectful and supportive.)
        </p>
      </motion.div>
    </div>
  );
};

export default JoinCommunityPage;