import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getJobById } from '@/pages/JobsPage'; // Assuming getJobById is exported from JobsPage or a utility file
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, MapPin, Calendar, Award, ExternalLink, FileText, ListChecks, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const JobDetailPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = getJobById(jobId);

  if (!job) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <FileText className="mx-auto h-16 w-16 text-destructive mb-4" />
          <h1 className="text-3xl font-bold text-destructive mb-4">Job Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the job you are looking for does not exist or may have been removed.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/jobs">Back to Jobs</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-8 group">
          <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Listings
        </Button>

        <Card className="shadow-xl border-border overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-sky-500 to-indigo-600 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                    <CardTitle className="text-3xl sm:text-4xl font-bold text-white mb-1">{job.title}</CardTitle>
                    <CardDescription className="text-lg text-sky-100 flex items-center">
                        <Briefcase className="h-5 w-5 mr-2" /> {job.company}
                    </CardDescription>
                </div>
                <Button 
                    asChild 
                    size="lg" 
                    className="mt-4 sm:mt-0 bg-white text-primary hover:bg-slate-100 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                        Apply Now <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                </Button>
            </div>
          </CardHeader>

          <CardContent className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">Job Description</h2>
                <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
                  {job.description || 'No description provided.'}
                </p>
              </div>

              {job.hiringPattern && job.hiringPattern.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                    <ListChecks className="h-6 w-6 mr-2 text-indigo-500" /> Hiring Pattern
                  </h2>
                  <ul className="space-y-3 list-inside">
                    {job.hiringPattern.map((step, index) => (
                      <motion.li 
                        key={index} 
                        className="p-4 border border-border rounded-lg bg-muted/50 shadow-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <p className="font-semibold text-foreground">{index + 1}. {step.stage}</p>
                        <p className="text-sm text-muted-foreground ml-4">{step.details}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {job.previousQuestions && job.previousQuestions.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-teal-500" /> Previous Question Insights
                  </h2>
                  <div className="space-y-3">
                    {job.previousQuestions.map((q, index) => (
                      <motion.div 
                        key={index} 
                        className="p-4 border border-border rounded-lg bg-muted/50 shadow-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (job.hiringPattern?.length || 0 + index) * 0.1 }}
                      >
                        <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-medium mb-1 inline-block">{q.type}</span>
                        <p className="text-foreground/90">{q.question}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-6 md:border-l md:pl-8 border-border/50">
              <h3 className="text-xl font-semibold text-primary border-b pb-2">Job Overview</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-foreground">
                  <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <span className="font-medium">Location:</span> {job.location}
                  </div>
                </div>
                <div className="flex items-center text-foreground">
                  <Briefcase className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <span className="font-medium">Job Type:</span> {job.type}
                  </div>
                </div>
                <div className="flex items-center text-foreground">
                  <Calendar className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <span className="font-medium">Batch Year:</span> {job.batchYear}
                  </div>
                </div>
                <div className="flex items-center text-foreground">
                  <Award className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <span className="font-medium">Experience:</span> {job.experienceLevel}
                  </div>
                </div>
                <div className="flex items-center text-foreground">
                  <Calendar className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <span className="font-medium">Posted:</span> {job.postedDate}
                  </div>
                </div>
              </div>

              {job.tags && job.tags.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-primary border-b pb-2 mt-6 mb-3">Skills & Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </CardContent>

          <CardFooter className="p-6 sm:p-8 bg-muted/30 border-t">
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
                <p className="text-sm text-muted-foreground">
                    Found your dream job? Don't wait, apply today!
                </p>
                <Button 
                    asChild 
                    size="lg" 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                        Apply Now <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default JobDetailPage;