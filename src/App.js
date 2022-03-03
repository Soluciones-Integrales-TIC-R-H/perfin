import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PrivateLayout from "./layouts/PrivateLayout"

import Dashboard from "./pages/admin/Dashboard"

function App() {
  return (
    <Router>
      <Route path="/admin" element={<PrivateLayout />} >
        <Route path="" element={<Dashboard />} />
        <Route path="/ingresos" element={<PrivateLayout />} />
        <Route path="/gastos" element={<PrivateLayout />} />
      </Route>
    </Router>

  );
}

export default App;
