import { Link, useNavigate } from 'react-router-dom';

const Header = ({ setSearchQuery }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (window.location.pathname !== '/products') {
      navigate('/products');
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/icons/Logo.png" alt="Logo" />
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>
      <div className="icons">
        <Link to="/"><img src="/assets/icons/home-icon.png" alt="Home" /></Link>
        <Link to="/products"><img src="/assets/icons/products-icon.png" alt="Products" /></Link>
        <Link to="/Login"><img src="/assets/icons/account-icon.png" alt="Account" /></Link>
        <Link to="/wishlist"><img src="/assets/icons/wishlist-icon.png" alt="Wishlist" /></Link>
        <Link to="/cart"><img src="/assets/icons/cart-icon.png" alt="Cart" /></Link>
      </div>
    </header>
  );
};

export default Header;
