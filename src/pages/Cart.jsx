import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductContext from "../contexts/ProductContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartProducts, setCartProducts, productQuantity, setProductQuantity } = useContext(ProductContext);

  //console.log(productQuantity);

  const items = [0];

  for(let key in productQuantity){
    items.push(productQuantity[key]);
  }

  const totolItems = items.reduce((acc, curr) => acc + curr);
  const deliveryCharges = 40;

  const totalAmount = cartProducts.reduce((acc, curr) => {
    const quantity = productQuantity[curr._id];
    return acc + (curr.price * quantity);
  }, 0)

  const handleDeleteProduct = (id) => {
    setProductQuantity((prev) => {
        const updated = {...prev};
        delete updated[id];
        return updated;
    });
    const updatedCartProducts = cartProducts.filter((product) => product._id != id);
    setCartProducts(updatedCartProducts);
  }

  const increaseQuantity = (id) => {
    setProductQuantity((prev) => ({
        ...prev,
        [id]: (prev[id] + 1)
    }))
  }

  const decreaseQuantity = (id) => {
    setProductQuantity((prev) => ({
        ...prev,
        [id]: (prev[id] - 1)
    }))

    if(productQuantity[id] === 1){
        handleDeleteProduct(id);
        setProductQuantity((prev) => {
            const updated = {...prev};
            delete updated[id];
            return updated;
        })
    }
  }

  return (
    <>
      <Header />

      {cartProducts.length === 0 ? (
        <div style={{height: "676px"}} className="d-flex justify-content-center align-items-center flex-column"> 
            <div >
            <p>Empty Cart. Add Products to Buy!</p>
           </div>
            <Link to={"/products"} className="btn btn-primary">View Products</Link>
        </div>
        ) : (

        <main className="container">
        <section>
            <h2 className="mt-2">Payment Details:</h2>
            <div className="card w-50 mt-3">
                <div className="card-body">
                    <p>Total Number of Items: {totolItems}</p>
                    <p>Discount: ₹0</p>
                    <p>Delivery Charges: ₹{deliveryCharges}</p>
                    <hr />
                    
                    <p>Amount Payable: ₹{totalAmount + deliveryCharges}</p>
                </div>
            </div>
        </section>

        <hr />

        <section className="pb-3">
            { cartProducts.length > 0 &&
             <>
               <h2>Cart Products:</h2>
               <div className="row row-cols-1 row-cols-md-4 g-4">
                    {cartProducts.map((product) => (
                        <div key={product._id} className="col">
                            <div className="card h-100 p-1">
                                <img src={product.image} className="card-img-top h-75" alt="image" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p>₹{product.price}</p>
                                    {product.inStock && <p className="m-1">In Stock</p>}
                                        <div className="d-flex justify-content-between mb-2">
                                            <div className=""><p className="pb-0 mb-0 pt-2">Quantity: {productQuantity[product._id]}</p></div>
                                            <div className="d-flex me-5">
                                            <button onClick={() => increaseQuantity(product._id)} className="btn btn-light me-3">+</button>
                                            <button onClick={() => decreaseQuantity(product._id)} className="btn btn-light ms-2">-</button>
                                            </div>
                                        </div>
                                        <button onClick={() => handleDeleteProduct(product._id)}
                                            className="btn btn-danger">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-trash"
                                            viewBox="0 0 16 16"
                                            >
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                            </svg> Delete
                                        </button>
                                </div>
                            </div>
                        </div>
                    ))}
               </div>
            </>}
        </section>
        
      </main>
      )}
      <Footer />
    </>
  );
};

export default Cart;
