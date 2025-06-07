import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Briefcase, MapPin, Search, Filter, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// Enhanced job listings with applyLink and placeholder details
const jobListings = [
  { 
    id: 1, 
    title: 'Software Engineer', 
    company: 'Tech Solutions Inc.', 
    location: 'Bengaluru, India', 
    type: 'Full-time', 
    tags: ['Trending', 'Java', 'Python'], 
    postedDate: '2 days ago', 
    batchYear: '2024', 
    experienceLevel: 'Fresher',
    applyLink: 'https://example.com/apply/techsolutions-se',
    description: 'Join our dynamic team of software engineers to build cutting-edge applications. You will be responsible for designing, developing, and maintaining software solutions.',
    hiringPattern: [
      { stage: 'Online Assessment', details: 'Coding test (2 questions) + MCQs on CS fundamentals.' },
      { stage: 'Technical Interview 1', details: 'Focus on Data Structures & Algorithms, Problem Solving.' },
      { stage: 'Technical Interview 2', details: 'System Design concepts, Project discussions.' },
      { stage: 'HR Interview', details: 'Behavioral questions, Cultural fit.' }
    ],
    previousQuestions: [
      { type: 'Coding', question: 'Find the duplicate number in an array of N+1 integers.' },
      { type: 'System Design', question: 'Design a URL shortening service like TinyURL.' },
      { type: 'CS Fundamentals', question: 'Explain the difference between TCP and UDP.'}
    ]
  },
  { 
    id: 2, 
    title: 'Data Analyst', 
    company: 'Analytics Co.', 
    location: 'Remote', 
    type: 'Contract', 
    tags: ['Remote', 'SQL', 'Tableau'], 
    postedDate: '5 days ago', 
    batchYear: '2023', 
    experienceLevel: 'Experienced',
    applyLink: 'https://example.com/apply/analytics-da',
    description: 'We are looking for a skilled Data Analyst to interpret data, analyze results using statistical techniques and provide ongoing reports.',
    hiringPattern: [
      { stage: 'Resume Screening', details: 'Based on experience and skills.' },
      { stage: 'Technical Assessment', details: 'SQL queries and case study.' },
      { stage: 'Managerial Interview', details: 'Problem-solving and project experience.' }
    ],
    previousQuestions: [
      { type: 'SQL', question: 'Write a query to find the second highest salary.' },
      { type: 'Case Study', question: 'Analyze sales data to identify trends for a retail company.'}
    ]
  },
  { 
    id: 3, 
    title: 'Product Manager', 
    company: 'Innovate Ltd.', 
    location: 'Hyderabad, India', 
    type: 'Full-time', 
    tags: ['Hot', 'Management', 'Agile'], 
    postedDate: '1 week ago', 
    batchYear: '2022', 
    experienceLevel: 'Experienced',
    applyLink: 'https://example.com/apply/innovate-pm',
    description: 'Lead the ideation, technical development, and launch of innovative products. Define product strategy and roadmap.',
    hiringPattern: [
      { stage: 'Application Review', details: 'Portfolio and experience check.' },
      { stage: 'Product Sense Interview', details: 'Case studies on product design and strategy.' },
      { stage: 'Leadership Interview', details: 'Behavioral and situational questions.' }
    ],
    previousQuestions: [
      { type: 'Product Design', question: 'How would you improve Instagram Reels?' },
      { type: 'Strategy', question: 'Develop a go-to-market strategy for a new SaaS product.'}
    ]
  },
  { 
    id: 4, 
    title: 'Frontend Developer Intern', 
    company: 'Web Wizards', 
    location: 'Pune, India', 
    type: 'Internship', 
    tags: ['React', 'JavaScript'], 
    postedDate: '3 days ago', 
    batchYear: '2025', 
    experienceLevel: 'Internship',
    applyLink: 'https://example.com/apply/webwizards-intern',
    description: 'Exciting internship opportunity for aspiring frontend developers. Work on real-world projects and learn from experienced mentors.',
    hiringPattern: [
      { stage: 'Online Coding Challenge', details: 'Basic JavaScript and React questions.' },
      { stage: 'Technical Interview', details: 'Discussion on projects and frontend concepts.' }
    ],
    previousQuestions: [
      { type: 'JavaScript', question: 'Explain event delegation in JavaScript.' },
      { type: 'React', question: 'What are React Hooks? Give an example.'}
    ]
  },
  { 
    id: 5, 
    title: 'Qualcomm Associate Engineer (Connectivity)', 
    company: 'Qualcomm', 
    location: 'Multiple Locations, India', 
    type: 'Full-time', 
    tags: ['2025 Batch', 'C++', 'Embedded'], 
    postedDate: 'Just Now', 
    batchYear: '2025', 
    experienceLevel: 'Fresher',
    applyLink: 'https://careers.qualcomm.com/careers/job/446700670232?source=APPLICANT_SOURCE-6-104',
    description: 'Qualcomm is hiring for their 2025 batch! This role involves working on connectivity technologies. Strong C/C++ and problem-solving skills required.',
    hiringPattern: [
      { stage: 'Online Test', details: 'Aptitude, Technical MCQs (C, C++, OS, Networks), 2 Coding Questions.' },
      { stage: 'Technical Interview 1', details: 'Focus on C/C++, Data Structures, Algorithms, OS, Computer Networks.' },
      { stage: 'Technical Interview 2 (Optional)', details: 'Deeper dive into technical concepts and projects.' },
      { stage: 'HR Interview', details: 'Behavioral questions and cultural fit.' }
    ],
    previousQuestions: [
      { type: 'Coding', question: 'Reverse a linked list.' },
      { type: 'C++', question: 'Explain virtual functions and polymorphism.' },
      { type: 'OS', question: 'What is a deadlock? How can it be prevented?' }
    ]
  },
  { 
    id: 6, 
    title: 'Software Engineer', 
    company: 'ANZ', 
    location: 'Bangalore', 
    type: 'Full-time', 
    tags: [], 
    postedDate: 'Just Now', 
    batchYear: '2022 / 2023 / 2024 / 2025 Graduates', 
    experienceLevel: 'Fresher',
    applyLink: 'https://careers.anz.com/job/Bengaluru-Software-Engineer/1210214001/',
    description: 'ANZ is hiring for the role of Software Engineer.',
    hiringPattern: [],
    previousQuestions: []
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const experienceLevels = [
  { value: '', label: 'All Experience Levels' },
  { value: 'Fresher', label: 'Fresher' },
  { value: 'Internship', label: 'Internship' },
  { value: 'Experienced', label: 'Experienced' },
];

// Function to get job by ID (simulating data fetching)
export const getJobById = (id) => {
  const jobId = parseInt(id, 10);
  return jobListings.find(job => job.id === jobId);
};


const JobsPage = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filters, setFilters] = React.useState({ company: '', role: '', batchYear: '', experienceLevel: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };
  
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const applyFilters = () => {
    // This function can be used for more complex filter logic if needed,
    // but current filtering is real-time.
    console.log("Applying filters:", filters);
  };

  const filteredJobs = jobListings.filter(job => {
    const searchTermMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const companyFilterMatch = filters.company ? job.company.toLowerCase().includes(filters.company.toLowerCase()) : true;
    const roleFilterMatch = filters.role ? job.title.toLowerCase().includes(filters.role.toLowerCase()) : true;
    const batchYearFilterMatch = filters.batchYear ? job.batchYear === filters.batchYear : true;
    const experienceLevelFilterMatch = filters.experienceLevel ? job.experienceLevel === filters.experienceLevel : true;

    return searchTermMatch && companyFilterMatch && roleFilterMatch && batchYearFilterMatch && experienceLevelFilterMatch;
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Find Your Next Opportunity</h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Browse through hundreds of daily updated job listings. Use filters to narrow down your search and find the perfect match.
        </p>
      </motion.div>

      <motion.div 
        className="mb-10 p-6 bg-background shadow-lg rounded-lg border border-border"
        initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: 0.2, duration: 0.5 } }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div className="relative md:col-span-2 lg:col-span-1">
            <Input
              type="text"
              placeholder="Search by keyword..."
              value={searchTerm}
              onChange={handleSearchTermChange}
              className="pl-10 h-12 text-base"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          
          <Input 
            type="text" 
            name="company"
            placeholder="Company" 
            value={filters.company}
            onChange={handleInputChange}
            className="h-12 text-base" 
          />
          <Input 
            type="text" 
            name="role"
            placeholder="Role (e.g., SDE)" 
            value={filters.role}
            onChange={handleInputChange}
            className="h-12 text-base" 
          />
          <Input 
            type="text" 
            name="batchYear"
            placeholder="Batch Year (e.g., 2024)" 
            value={filters.batchYear}
            onChange={handleInputChange}
            className="h-12 text-base" 
          />
          <Select onValueChange={(value) => handleSelectChange('experienceLevel', value)} defaultValue="">
            <SelectTrigger className="h-12 text-base" placeholder="Experience Level">
              {filters.experienceLevel ? experienceLevels.find(el => el.value === filters.experienceLevel)?.label : "Experience Level"}
            </SelectTrigger>
            <SelectContent>
              {experienceLevels.map(level => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end mt-4">
          <Button onClick={applyFilters} className="bg-primary hover:bg-primary/90">
            <Filter className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: 0.4, duration: 0.5 } }}
      >
        {filteredJobs.length > 0 ? filteredJobs.map((job, index) => (
          <motion.div key={job.id} custom={index} initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: index * 0.1 + 0.4, duration: 0.5 } }}>
            <Card className="h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 bg-card text-card-foreground">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-primary">{job.title}</CardTitle>
                  {job.tags.includes('Trending') && <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">Trending</span>}
                  {job.tags.includes('Hot') && <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium">Hot</span>}
                </div>
                <CardDescription className="text-md text-foreground/80">{job.company}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <MapPin className="h-4 w-4 mr-2" /> {job.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Briefcase className="h-4 w-4 mr-2" /> {job.type}
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4 mr-2" /> Batch: {job.batchYear}
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Award className="h-4 w-4 mr-2" /> {job.experienceLevel}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center border-t pt-4">
                <span className="text-xs text-muted-foreground">Posted: {job.postedDate}</span>
                <Button variant="default" size="sm" asChild className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                  <Link to={`/jobs/${job.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )) : (
          <p className="col-span-full text-center text-lg text-muted-foreground py-10">No jobs found matching your criteria. Try adjusting your search or filters.</p>
        )}
      </motion.div>
      
      {filteredJobs.length > 0 && (
        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="mr-2">Previous</Button>
          <Button variant="outline">Next</Button>
        </div>
      )}
    </div>
  );
};

export default JobsPage;
