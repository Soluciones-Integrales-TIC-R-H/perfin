import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 mx-auto">
          <form class="row g-3">
            <div className="bg-primary rounded-top " style={{ minHeight: "80px" }}>
              <span className="title fs-1">Login</span>
              <br />
              Inicia sesión para continuar 
            </div>
            <div class="col-md-12 input-group-lg">
              <label for="inputEmail" class="form-label">
                Usuario
              </label>
              <input type="email" class="form-control " id="inputEmail" />
            </div>
            <div class="col-md-12 input-group-lg">
              <label for="inputPassword" class="form-label">
                Clave
              </label>
              <input type="password" class="form-control" id="inputPassword" />
            </div>
            
            <div class="col-8">
              <button type="submit" class="w-100 btn btn-purple mt-2">
                Ingresar
              </button>
              <button type="submit" class="w-100 btn btn-purple mt-2">
                Olvide mi clave
              </button>
              <Link  to="create" class="w-100 btn btn-purple mt-2">
                Crear cuenta
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
