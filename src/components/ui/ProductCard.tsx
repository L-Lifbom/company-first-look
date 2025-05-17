
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

const ProductCard = ({ title, description, imageSrc, className }: ProductCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow",
      className
    )}>
      <div className="aspect-video bg-slate-100 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <Button variant="outline" className="w-full">Learn More</Button>
      </div>
    </div>
  );
};

export default ProductCard;
