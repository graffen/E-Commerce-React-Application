// Products.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';


const Products = ({ searchQuery }) => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setProductsData(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    setFilteredProducts(
      productsData.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, productsData]);

  return (
    <div className="products">
      {filteredProducts.map(product => (
        <ProductCard key={product.pid} product={product} />
      ))}
    </div>
  );
};

export default Products;




