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
              <p>
                KicksUp is an interactive online console that lets you
                create beautiful and personalized shoe designs.
              </p>
            </div>
            <div className="links">
              <Link className="link" to="/contact">
                Learn More
              </Link>
              <Link className="link" to="/store">
                Exlore Store
              </Link>
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
