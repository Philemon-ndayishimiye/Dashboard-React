import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { ConsumerProvider } from "./context/ConsumerContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConsumerProvider>
      <ProductProvider>
        <UserProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </UserProvider>
      </ProductProvider>
    </ConsumerProvider>
  </StrictMode>
);
