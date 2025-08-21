import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";

const Header = () => {
  const {productQuantity} = useContext(ProductContext);
  
  const cartItems = Object.values(productQuantity).reduce((acc,curr) => acc + curr, 0);

  return (
    <header style={{ backgroundColor: "#e3f2fd" }}>
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">eCart</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/products" className="nav-link active" aria-current="page">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/cart"} className="nav-link active">Cart{cartItems > 0 ? <span>({cartItems})</span> : null }</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
