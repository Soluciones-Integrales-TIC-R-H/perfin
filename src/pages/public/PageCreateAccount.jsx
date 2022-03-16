import React from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mx-auto">
          <form class="row g-3">
            <div className="bg-primary rounded-top " style={{ minHeight: "80px" }}>
              <span className="title fs-1">Nueva cuenta</span>
              <br />
              ¿Ya estas registrado? <Link to="/">login</Link> 
            </div>
            <div class="col-md-6">
              <label for="inputName" class="form-label">
                Nombres
              </label>
              <input type="text" class="form-control" id="inputName" />
            </div>
            <div class="col-md-6">
              <label for="inputSurname" class="form-label">
                Apellidos
              </label>
              <input type="text" class="form-control" id="inputSurname" />
            </div>
            <div class="col-md-6">
              <label for="inputEmail" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword" />
            </div>
            
            <div class="col-12">
              <button type="submit" class="btn btn-purple">
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
