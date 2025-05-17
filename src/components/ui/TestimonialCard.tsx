
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarSrc?: string;
  className?: string;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  company, 
  avatarSrc,
  className 
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md flex flex-col h-full",
      className
    )}>
      <div className="mb-4">
        <svg className="h-8 w-8 text-accent mb-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-slate-600 italic">{quote}</p>
      </div>
      
      <div className="mt-auto flex items-center">
        {avatarSrc ? (
          <img 
            src={avatarSrc} 
            alt={author} 
            className="w-10 h-10 rounded-full mr-3"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-slate-200 mr-3 flex items-center justify-center">
            <span className="text-slate-500 font-medium">
              {author.charAt(0)}
            </span>
          </div>
        )}
        
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-slate-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
