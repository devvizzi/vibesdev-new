import React from 'react';
import Header from '../../components/Header';

const Jobs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground mb-12">
            We're looking for talented individuals to join our growing team.
          </p>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Job Listing Example */}
            <div className="bg-card p-6 rounded-lg shadow-md text-left">
              <h2 className="text-2xl font-semibold mb-2">Frontend Developer</h2>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span>Remote</span>
                <span>•</span>
                <span>Full-time</span>
                <span>•</span>
                <span>Engineering</span>
              </div>
              <p className="mb-4">
                We're looking for a skilled Frontend Developer to join our team and help us build amazing user experiences.
              </p>
              <button className="text-primary hover:underline">View Details</button>
            </div>

            {/* Add more job listings as needed */}
            
            <div className="pt-8">
              <p className="text-muted-foreground mb-4">
                Don't see a position that matches your skills? We're always looking for talented people.
              </p>
              <a 
                href="mailto:careers@vibesdev.app" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jobs;
