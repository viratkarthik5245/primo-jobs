import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarDays, User, Tag, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Wipro Interview Questions & Answers for Freshers 2025",
    excerpt: "Preparing for your Wipro interview? We've compiled the most frequently asked questions along with expert tips on how to answer them effectively. Nail your Wipro placement with our comprehensive guide.",
    category: "Interview Prep",
    author: "PrimoJobs Team",
    date: "2025-05-28",
    imageAlt: "Wipro office building for interview preparation article",
    tags: ["Wipro", "Interview Questions", "Freshers", "Placement Prep"]
  },
  {
    id: 2,
    title: "Ultimate Resume Tips for 2025: Get Noticed by Recruiters",
    excerpt: "Your resume is your first impression. Learn how to craft a compelling, ATS-friendly resume that highlights your skills and achievements. Includes free templates and examples.",
    category: "Resume Building",
    author: "Career Experts",
    date: "2025-05-25",
    imageAlt: "Modern resume design for resume tips article",
    tags: ["Resume Writing", "Job Application", "Career Advice", "Templates"]
  },
  {
    id: 3,
    title: "3 Steps to Crack the Cognizant Aptitude Test",
    excerpt: "The Cognizant aptitude test can be challenging. This guide breaks down the test structure and provides proven strategies and practice questions to help you ace it.",
    category: "Assessment Prep",
    author: "PrimoJobs Team",
    date: "2025-05-20",
    imageAlt: "Student studying for Cognizant aptitude test",
    tags: ["Cognizant", "Aptitude Test", "Exam Strategy", "Freshers"]
  },
  {
    id: 4,
    title: "Networking for Job Seekers: A Beginner's Guide",
    excerpt: "Unlock the power of networking in your job search. Learn practical tips on how to build connections, leverage LinkedIn, and make a lasting impression both online and offline.",
    category: "Career Development",
    author: "Guest Author: Priya M.",
    date: "2025-05-15",
    imageAlt: "People networking at a career event",
    tags: ["Networking", "Job Search", "LinkedIn", "Professional Development"]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const BlogPage = () => {
  // Placeholder for search and filter state
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = blogPosts.filter(post => 
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'All' || post.category === selectedCategory)
  );

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">PrimoJobs Blog & Resources</h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Stay updated with the latest career advice, interview tips, resume strategies, and free resources to help you succeed in your job search.
        </p>
      </motion.div>

      {/* Search and Filter Bar */}
      <motion.div 
        className="mb-10 p-6 bg-background shadow-lg rounded-lg border border-border"
        initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: 0.2 } }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="h-12 px-3 rounded-md border border-input bg-background text-base ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
      </motion.div>

      {/* Blog Posts Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: 0.4, staggerChildren: 0.1 } }}
      >
        {filteredPosts.length > 0 ? filteredPosts.map((post, index) => (
          <motion.div key={post.id} variants={fadeIn}>
            <Card className="h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-muted flex items-center justify-center">
                 {/* Placeholder for image - In real app, use <img  alt={post.imageAlt} src="https://images.unsplash.com/photo-1621165031056-2fb2961935d1" /> */}
                 <img  alt={post.imageAlt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary hover:underline">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
                <div className="flex items-center text-xs text-muted-foreground space-x-3 pt-1">
                  <span className="flex items-center"><CalendarDays className="h-3 w-3 mr-1" /> {new Date(post.date).toLocaleDateString()}</span>
                  <span className="flex items-center"><User className="h-3 w-3 mr-1" /> {post.author}</span>
                  <span className="flex items-center"><Tag className="h-3 w-3 mr-1" /> {post.category}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="link" className="text-primary p-0 h-auto font-semibold" asChild>
                  <Link to={`/blog/${post.id}`}>Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )) : (
          <p className="col-span-full text-center text-lg text-muted-foreground py-10">
            No articles found matching your criteria.
          </p>
        )}
      </motion.div>

      {/* Call to Action for Email Capture (Placeholder) */}
      <motion.div 
        className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg shadow-2xl text-center"
        initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: 0.6 } }}
      >
        <h2 className="text-3xl font-semibold mb-3">Get Our Exclusive Career Guide!</h2>
        <p className="text-slate-200 mb-6 max-w-md mx-auto">
          Subscribe to our newsletter and receive a free PDF guide: "The Ultimate Job Search Checklist".
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="h-12 text-base text-foreground" />
          <Button type="submit" size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">Subscribe & Get PDF</Button>
        </form>
      </motion.div>
    </div>
  );
};

export default BlogPage;