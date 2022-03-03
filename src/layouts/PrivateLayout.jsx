import React from "react";
import { Outlet } from "react-router-dom";
import Siderbar from "../components/Siderbar";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";

const PrivateLayout = () => {
  return (
    <>
      <div className="content">
        <div className="row">
          <div className="col-md-3">
            <Siderbar />
            </div>
          <div className="col-md-9">
            <header>
              <Navbar />
            </header>
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>

      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export default PrivateLayout;
