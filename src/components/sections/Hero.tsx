import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-gradient min-h-screen flex flex-col justify-between relative">
      <div className="container-custom flex flex-col justify-center flex-grow py-12 md:py-20 relative">
        <div className="max-w-3xl mt-[-5vh]">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-gradient">Wonlik</span><br />Toad Creations AB
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

        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-2/5">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D0BAQHmBOo6iZ_swA/company-logo_200_200/company-logo_200_200/0/1715188326218?e=1753315200&v=beta&t=lVHza-IL_yzxp4GM4Cwksy9P0gkLc5FpKN6EiYQFWgU"
            alt="Product Illustration"
            className="w-full h-auto rounded-2xl shadow-sm"
          />
        </div>
      </div>

      <div className="container-custom flex justify-center pb-8">
        <a
          href="#about"
          className="animate-bounce flex flex-col items-center text-slate-500 hover:text-accent transition-colors"
        >
          <span className="text-sm mb-2">Discover More</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
