
import React from 'react';
import { Separator } from '@/components/ui/separator';
import TestimonialCard from '@/components/ui/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This company transformed the way we do business. Their products have increased our productivity by over 40%.",
      author: "Jane Smith",
      role: "CEO",
      company: "Tech Innovations"
    },
    {
      quote: "The customer support team is exceptional. They've been with us every step of the way, ensuring we get the most out of our investment.",
      author: "John Davis",
      role: "CTO",
      company: "Global Solutions"
    },
    {
      quote: "We've tried many similar products, but nothing compares to the quality and performance we've experienced with this company.",
      author: "Emily Johnson",
      role: "Operations Director",
      company: "Nexus Corp"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <Separator className="w-24 h-1 bg-accent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
