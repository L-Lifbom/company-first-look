
import React from 'react';
import { Separator } from '@/components/ui/separator';
import ProductCard from '@/components/ui/ProductCard';

const Products = () => {
  const products = [
    {
      title: "Product One",
      description: "Our flagship product designed to streamline operations and boost productivity.",
      imageSrc: "/placeholder.svg"
    },
    {
      title: "Product Two",
      description: "An innovative solution that transforms how businesses handle data management.",
      imageSrc: "/placeholder.svg"
    },
    {
      title: "Product Three",
      description: "Revolutionary technology that puts you ahead of the competition.",
      imageSrc: "/placeholder.svg"
    },
    {
      title: "Product Four",
      description: "The ultimate tool for maximizing efficiency and minimizing costs.",
      imageSrc: "/placeholder.svg"
    }
  ];

  return (
    <section id="products" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <Separator className="w-24 h-1 bg-accent mx-auto" />
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Discover our range of innovative products designed to help your business thrive in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
