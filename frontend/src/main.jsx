//TODO Libraries
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//TODO Pages
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
