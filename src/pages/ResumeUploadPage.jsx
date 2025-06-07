import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { UploadCloud, FileText, AlertTriangle, CheckCircle, MessageSquarePlus, Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
// For a real implementation, you might use react-dropzone
// import { useDropzone } from 'react-dropzone';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ResumeUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const { toast } = useToast();

  // Placeholder for react-dropzone functionality
  // const onDrop = useCallback(acceptedFiles => {
  //   if (acceptedFiles && acceptedFiles.length > 0) {
  //     const file = acceptedFiles[0];
  //     if (file.size > 5 * 1024 * 1024) { // 5MB limit
  //       setUploadError('File size exceeds 5MB limit.');
  //       setSelectedFile(null);
  //       return;
  //     }
  //     if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
  //       setUploadError('Invalid file type. Please upload PDF or DOC/DOCX.');
  //       setSelectedFile(null);
  //       return;
  //     }
  //     setSelectedFile(file);
  //     setUploadError('');
  //     setUploadSuccess(false);
  //   }
  // }, []);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
  //   onDrop, 
  //   accept: 'application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  //   maxSize: 5 * 1024 * 1024,
  //   multiple: false
  // });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setUploadError('File size exceeds 5MB limit.');
        toast({ title: "Upload Error", description: "File size exceeds 5MB limit.", variant: "destructive" });
        setSelectedFile(null);
        return;
      }
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        setUploadError('Invalid file type. Please upload PDF or DOC/DOCX.');
        toast({ title: "Upload Error", description: "Invalid file type. Please upload PDF or DOC/DOCX.", variant: "destructive" });
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
      setUploadError('');
      setUploadSuccess(false);
    }
  };
  
  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadError('Please select a file to upload.');
      toast({ title: "Upload Error", description: "Please select a file to upload.", variant: "destructive" });
      return;
    }
    setUploading(true);
    setUploadError('');
    setUploadSuccess(false);

    // Simulate upload
    // In a real app, this would be an API call to a backend or cloud storage (e.g., Supabase Storage)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate success/failure
    const isSuccess = Math.random() > 0.2; // 80% success rate for demo
    if (isSuccess) {
      setUploadSuccess(true);
      toast({ title: "Upload Successful!", description: `${selectedFile.name} has been uploaded. We'll analyze it and get back to you soon.` });
      setSelectedFile(null); // Clear selection after successful upload
    } else {
      setUploadError('Upload failed. Please try again.');
      toast({ title: "Upload Failed", description: "An error occurred during upload. Please try again.", variant: "destructive" });
    }
    setUploading(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">Upload Your Resume</h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Get your resume analyzed by our experts or use our AI-powered tools for instant feedback. Upload your resume in PDF or DOC/DOCX format (max 5MB).
        </p>
      </motion.div>

      <motion.div 
        className="max-w-2xl mx-auto"
        initial="hidden" animate="visible" variants={{...fadeIn, transition: {delay: 0.2}}}
      >
        <Card className="shadow-xl border-primary/30 glass-card">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center text-foreground">Submit Your Resume for Review</CardTitle>
            <CardDescription className="text-center text-muted-foreground pt-1">
              Our team will provide personalized feedback and suggestions to improve your resume.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for react-dropzone UI */}
            {/* <div {...getRootProps()} className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${isDragActive ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}>
              <input {...getInputProps()} />
              <UploadCloud className="h-12 w-12 text-primary mx-auto mb-4" />
              {isDragActive ? (
                <p className="text-primary">Drop the file here ...</p>
              ) : (
                <p className="text-muted-foreground">Drag 'n' drop your resume here, or click to select file</p>
              )}
              <p className="text-xs text-muted-foreground mt-2">PDF, DOC, DOCX (MAX. 5MB)</p>
            </div> */}
            
            {/* Fallback file input if react-dropzone is not used or as a simpler alternative */}
            <div className="p-6 border-2 border-dashed rounded-lg text-center border-border hover:border-primary/50 transition-colors">
              <label htmlFor="resume-upload-input" className="cursor-pointer">
                <UploadCloud className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="text-foreground font-medium">Click to select your resume</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX (MAX. 5MB)</p>
              </label>
              <input 
                id="resume-upload-input" 
                type="file" 
                className="hidden" 
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
              />
            </div>


            {selectedFile && !uploadSuccess && (
              <div className="mt-4 p-3 bg-muted rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm text-foreground">{selectedFile.name}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedFile(null)}>Clear</Button>
              </div>
            )}

            {uploadError && (
              <div className="mt-4 p-3 bg-destructive/10 text-destructive rounded-md flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <span className="text-sm">{uploadError}</span>
              </div>
            )}

            {uploadSuccess && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="text-sm">Resume uploaded successfully! We'll be in touch.</span>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <Button 
              onClick={handleUpload} 
              disabled={uploading || !selectedFile} 
              className="w-full md:w-auto text-lg py-3 px-8 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
              size="lg"
            >
              {uploading ? 'Uploading...' : 'Upload and Get Feedback'}
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              By uploading, you agree to our terms of service regarding data handling.
            </p>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Placeholder for Chatbot / AI Analysis */}
      <motion.div 
        className="mt-16 text-center p-8 bg-muted rounded-lg"
        initial="hidden" animate="visible" variants={{...fadeIn, transition: {delay: 0.4}}}
      >
        <Sparkles className="h-10 w-10 text-accent mx-auto mb-3" />
        <h2 className="text-2xl font-semibold mb-3 text-foreground">AI-Powered Resume Analysis (Coming Soon!)</h2>
        <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
          Get instant, automated feedback on your resume's formatting, keywords, and effectiveness. Our AI chatbot will guide you through improvements.
        </p>
        <Button variant="outline" disabled>
          <MessageSquarePlus className="mr-2 h-5 w-5" /> Try AI Analysis (Soon)
        </Button>
      </motion.div>
    </div>
  );
};

export default ResumeUploadPage;