import React from "react";
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";

import "./css/bootstrap.min.css"
import "./css/template1.css"
//import "./css/bulma.min.css"

import AuthLayout from "./layouts/AuthLayout";
import PrivateLayout from "./layouts/PrivateLayout"

import Dashboard from "./pages/admin/Dashboard"

import CreateAccount from "./pages/public/PageCreateAccount"
import Login from "./pages/public/PageLogin";


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<AuthLayout />} >
        <Route path="" element={<Login />} />
        <Route path="create" element={<CreateAccount />} />
      </Route>
      <Route path="/admin" element={<PrivateLayout />} >
        <Route path="" element={<Dashboard />} />
        <Route path="ingresos" element={<PrivateLayout />} />
        <Route path="gastos" element={<PrivateLayout />} />
      </Route>

      {/* <Route path='*' element={<Error404 />}/> */}
      </Routes>
    </Router>

  );
}

export default App;
