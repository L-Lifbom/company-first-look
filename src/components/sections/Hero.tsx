
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-gradient">
      <div className="container-custom min-h-[90vh] flex flex-col justify-center py-20 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
           <span className="text-gradient">Wonlik</span><br/>Toad Creations AB
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
            Create new technical and innovative digital products that simplify everyday life for individuals, businesses, and investors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <Button size="lg" className="text-md px-8">
              <a href="#products">Products</a>
            </Button> */}
            {/* <Button size="lg" variant="outline" className="text-md px-8">
              <a href="#about">Learn More</a>
            </Button> */}
          </div>
        </div>
        
        <div className="hidden md:block absolute right-0 bottom-0 w-2/5">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D0BAQHmBOo6iZ_swA/company-logo_200_200/company-logo_200_200/0/1715188326218?e=1753315200&v=beta&t=lVHza-IL_yzxp4GM4Cwksy9P0gkLc5FpKN6EiYQFWgU" 
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
