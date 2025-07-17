import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectPaymentType from "./pages/SelectPaymentType";
import Khalti from "./pages/khalti";
import PaymentSuccess from "./pages/PaymentSuccess";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/" element={<SelectPaymentType />} />
          <Route path="/khalti" element={<Khalti />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
