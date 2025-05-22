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
            <h3 className="text-2xl font-bold mb-4">Shaping Tomorrow's Technology</h3>
            <p className="text-slate-600 mb-4">
              At Wonlik, we're driven by a singular vision: to make technology more human. Founded in 2024, we're a passionate team crafting digital solutions that break down barriers and forge meaningful connections across the global digital landscape.
            </p>
            <p className="text-slate-600 mb-6">
              We believe the future of technology isn't just about innovation—it's about accessibility and human connection. By combining cutting-edge technical solutions with intuitive design, we're building tools that don't just solve problems, but transform how people interact with technology and each other.
            </p>
            <p className="text-slate-600 mb-6">
              Our commitment goes beyond creating products; we're building bridges in the digital world. Whether it's making technology more accessible, fostering global collaboration, or simplifying complex systems, every project we undertake is guided by our belief in technology's power to bring people together.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
              <span className="text-4xl font-bold text-accent mb-2">2</span>
              <span className="text-slate-600">Team Members</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
              <span className="text-4xl font-bold text-accent mb-2">∞</span>
              <span className="text-slate-600">Possibilities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
