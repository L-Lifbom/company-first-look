
import React from 'react';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Wonlik</h2>
          <Separator className="w-24 h-1 bg-accent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-slate-600 mb-4">
              Founded in 2024, our company was born out of a passion for creating innovative solutions that address real-world challenges. What began as a small team with big dreams has evolved into a dynamic organization at the forefront of our industry.
            </p>
            <p className="text-slate-600 mb-6">
              Our journey has been defined by our commitment to excellence, customer satisfaction, and technological advancement. We believe in pushing boundaries and redefining what's possible.
            </p>
            
            {/* <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">Mission</h4>
                <p className="text-slate-600">
                  To connect people with corporations.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">Vision</h4>
                <p className="text-slate-600">
                  To become the global leader in our industry, recognized for excellence and innovation.
                </p>
              </div>
            </div> */}
          </div>
          
          {/* <div className="relative bg-slate-100 rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-4xl font-bold text-accent mb-2">0</span>
                <span className="text-slate-600">Satisfied Clients</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-4xl font-bold text-accent mb-2">2</span>
                <span className="text-slate-600">Team Members</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-4xl font-bold text-accent mb-2">1</span>
                <span className="text-slate-600">Years Experience</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-4xl font-bold text-accent mb-2">0</span>
                <span className="text-slate-600">Industry Awards</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
