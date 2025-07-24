import { BrowserRouter, Routes, Route } from "react-router-dom"
import SelectPaymentType from "./pages/SelectPaymentType"
import Khalti from "./pages/khalti.jsx"
import PaymentSuccess from "./pages/PaymentSuccess"
import Login from "./components/Login"
import { Provider } from "react-redux"
import store from "./store/store"
import ProductList from "./pages/product.jsx"
import Register from "./components/Register.jsx"
import Favourites from "./pages/favourites.jsx"
import Home from "./pages/Home.jsx"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/payment" element={<SelectPaymentType />} />
          <Route path="/khalti" element={<Khalti />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App