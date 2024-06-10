import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/index.scss'; // Импортируем стили

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.pid}`}>
        <img 
          src={`${process.env.PUBLIC_URL}${product.images[0]}`} 
          alt={product.title} 
          className="product-image" // Добавляем класс стиля для изображения
        />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    pid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default ProductCard;
