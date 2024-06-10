import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.find(p => p.pid === productId);
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={`${process.env.PUBLIC_URL}${product.images[0]}`} alt={product.title} />
      </div>
      <div className="product-detail-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className="product-detail-price">${product.price}</p>
        <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
