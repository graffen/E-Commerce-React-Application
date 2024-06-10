import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h1>JUST DO IT</h1>
        <p> Unleash your potential with our latest Nike gear.</p>
        <Link to="/products">
          <button className="shop-button">Shop</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
