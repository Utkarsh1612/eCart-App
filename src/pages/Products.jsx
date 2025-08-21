import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useFetch from "../customHooks/useFetch";
import ProductContext from "../contexts/ProductContext";

const Products = () => {
  
  const { data, loading, error } = useFetch(
    "https://e-cart-backend-orpin.vercel.app/products",
    []
  );

  const { cartProducts, setCartProducts, setProductQuantity } = useContext(ProductContext);

  const handleAddToCart = (product) => {
    const isExists = cartProducts.find(
      (cartProduct) => cartProduct._id === product._id
    );

    if (!isExists) {
      setCartProducts((prev) => [...prev, product]);
    }

    setProductQuantity((prev) => ({
      ...prev,
      [product._id]: (prev[product._id] || 0) + 1,
    }));
  };

  return (
    <>
      {loading ? <div style={{height: "500px"}} className="d-flex justify-content-center align-items-center"><p>Loading...</p></div> : (<>
        <Header/>
      <main className="bg-primary" >
        {error && <p>{error}</p>}
        <section className="">
            <div className="py-5 container h-100" >
                {data && data.length > 0 && (
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {data.map((product) => (
                            <div className="col" key={product._id}>
                                <div className="card h-100">
                                    <img src={product.image} className="card-img-top h-100" alt="image" />
                                    <div className="card-footer">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p>₹{product.price}</p>
                                        {product.inStock && <p>In Stock</p>}
                                        <button onClick={() => handleAddToCart(product)} 
                                        className="btn btn-primary">
                                        Add to cart
                                        </button>
                                    </div> 
                                </div>
                            </div>
                        ))}
                    </div>
                  )}
            </div>
        </section>
      </main>
      <Footer/>
      </>)}
      
    </>
  );
};

export default Products;