import React from "react";
import { Outlet } from "react-router-dom";
import Siderbar from "../components/Siderbar";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";

const PrivateLayout = () => {
  return (
    <>
      <div className="container-fluidd">
        <div className="row ">
          <div
            className="col-md-3 bg-secondary"
            style={{ minHeight: "100vh"}}
          >
            <Siderbar />
          </div>
          <div className="col-md-9 border">
            <header className="m-0 border-primary w-100">
              <Navbar />
            </header>
            <main>
              <Outlet />
            </main>
            <footer
              className="border-primary w-100 "
              style={{
                position: "fixed",
                bottom: 0,
              }}
            >
              <FooterComponent />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;
