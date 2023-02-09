import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="left">
          <div className="wrapper">
            <div className="about">
              <h1>Shoe Store</h1>
              <h2>Shoe Store Shopify Theme</h2>
  
            </div>
            
          </div>
        </div>
        <div className="right">
          <img src="/assets/shoe.jpg" alt="shoe" />
        </div>
      </div>
    </div>
  );
};

export default Home;
