import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Main Layout for all regular pages */}
          <Route path="/" element={<MainLayout />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;