// import p1 from "./images/p1.jpg";
import data from "./data";

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
            <a className="brand" href="index.html">Shoppiz</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <main>
           <div className="row center">
               {
                   data.products.map(products => (

            <div key="product._id" className="card">
            <a href={`/product/${products._id}`}>
                <img className="medium" src={products.image} alt={products.name}/>
            </a>
            <div className="card-body">
                <a href={`/product/${products._id}`}>
                    <h1>{products.name}</h1>
                    </a>
            </div>
            <div className="rating">
                <span><i className="fa fa-star"></i> </span>
                <span><i className="fa fa-star"></i> </span>
                <span><i className="fa fa-star"></i> </span>
                <span><i className="fa fa-star"></i> </span>
                <span><i className="fa fa-star"></i> </span>
               
            </div>
            <div className="price">${products.price}</div>
        </div>

                   ))
               }
            

           </div>
        </main>
        <footer className="row center">
            All right reserved
        </footer>
    </div>
  );
}

export default App;
