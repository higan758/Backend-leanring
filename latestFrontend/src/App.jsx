// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import SelectPaymentType from "./pages/SelectPaymentType.jsx";
import Khalti from "./pages/khalti.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ProductList from "./pages/product.jsx";
import Favourites from "./pages/favourites.jsx";
import Home from "./pages/Home.jsx";

import MainLayout from "./components/MainLayout.jsx";
import AuthLayout from "./components/AuthLayout.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
                // In App.jsx, modify the MainLayout Route section:
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="payment" element={<SelectPaymentType />} />
            <Route path="khalti" element={<Khalti />} />
            <Route path="success" element={<PaymentSuccess />} />
            <Route path="products" element={<ProductList />} /> {/* Changed from "product" to "products" */}
            <Route path="product/:productCode" element={<Product />} /> {/* Add this line for individual products */}
            <Route path="favourites" element={<Favourites />} />
          </Route>

          {/* Auth Layout for login/register pages */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
