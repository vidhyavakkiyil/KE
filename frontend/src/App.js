import data from "./data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="https://reactjs.org">KE</a>
        </header>
        <main>List product</main>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt=""></img>
              </a>
              <div className="product_text">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>$</strong>
                  {product.price}
                </p>

                <button>ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
