import Header from "./components/Header";
import Footer from "./components/Footer"
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header/>
      <main className="">
        <section className="d-flex justify-content-center align-items-center  text-white bg-primary" style={{height: "338px"}}>
          <div className="text-center container">
            <h1 className="display-4">Products Listing</h1>
            <Link to={"/products"} className="btn btn-light mt-3">View Products</Link>
          </div>
        </section>
        <section className="d-flex justify-content-center align-items-center " style={{height: "338px", backgroundColor: "#c1e0f7ff" }}>
          <div className="text-center container">
            <h1 className="display-4">Cart Items</h1>
            <Link to={"/cart"} className="btn btn-primary mt-3">View Cart</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};
export default App;

