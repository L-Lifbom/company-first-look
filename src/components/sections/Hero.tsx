
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-gradient">
      <div className="container-custom min-h-[90vh] flex flex-col justify-center py-20 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Transforming Industries with <span className="text-gradient">Innovative Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
            We build cutting-edge products that help businesses thrive in today's digital landscape, combining technological innovation with impeccable service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-md px-8">
              Explore Products
            </Button>
            <Button size="lg" variant="outline" className="text-md px-8">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="hidden md:block absolute right-0 bottom-0 w-2/5">
          <img 
            src="/placeholder.svg" 
            alt="Product Illustration" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a 
            href="#about"
            className="animate-bounce flex flex-col items-center text-slate-500 hover:text-accent transition-colors"
          >
            <span className="text-sm mb-2">Discover More</span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
