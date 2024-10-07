"use client";
import ProductList from "@/components/ProductList";
import React, { useEffect, useState } from "react";

export default function page() {
  const [product, setproduct] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setproduct(json));
  }, []);

  return <main>
 
    <div className="flex justify-center mt-6 line-clamp-1 space-x-4 " >   
      <ProductList />
    <ProductList />
    <ProductList />
    
    </div>
  </main>;
}
