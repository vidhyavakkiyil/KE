import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import PrductDetails from "./PrductDetails/PrductDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="https://reactjs.org">SHIRTS</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:productid" element={<PrductDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
