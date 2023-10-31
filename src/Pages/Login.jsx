import React from "react";
import logo from "../assets/Imagenes/logo.png";
import facebook from "../assets/Imagenes/facebook.png";
import google from "../assets/Imagenes/google.png";


function login() {
  return (
<body className="login">

    <div className="container pt-5 rounded-5">
      <div className="row align-items-stretch">
        <div className="col-lg-6 d-none d-lg-block " >
        <div className="position-relative h-100">
          <div className="text-white w-75">
            <p className="fs-3 fw-bold">Algun texto</p>
            <p className="fs-4 ">Lorem Ipmsum is simply</p>
            <p className="fs-6 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
          <div className="position-absolute" style={{bottom:"-110px"}} >

          <span><a className="text-decoration-none text-info mx-3 fw-bold" href="#">Terminos y condiciones</a></span>
          <span><a className="text-decoration-none text-info mx-3 fw-bold" href="#">Politica de Privacidad</a></span>
          <span><a className="text-decoration-none text-info mx-3 fw-bold" href="#">Contactanos</a></span>
          <span><a className="text-decoration-none text-info mx-3 fw-bold" href="#">Version</a></span>
          </div>
        </div>
        </div>
        <div className="col-lg-6 col-12 justify-content-lg-end justify-content-center d-flex">
          <div className="w-75 p-5 bg-white rounded-5 shadow">

         
          <div className="text-center">
            <img className="w-50" src={logo} width={100}></img>
          </div>

          {/* Inicio de Sesion */}
          <div className="container w-100  my-5">
            <div className="row">
               <div className="col-6 col-md-10 p-2">
               <button className="btn btn-login w-100 my-1">
                  <div className="row w-100 justify-content-center">
                    <div className="col-3">
                      <img src={google} width={32} alt="Logo_facebook"></img>
                    </div>
                      <div className="col-9 col-md-9 text-center d-none d-sm-block">Inicia sesion con Google</div>
                  </div>
                </button>
               </div>
               <div className="col-6 col-md-2 p-2">
                <button className="btn btn-login w-100 my-1">
                  <div className="row w-100 justify-content-center">
                    <div className="col-3 me-2 ">
                      <img src={facebook} width={32} alt="Logo_facebook"></img>
                    </div>
                  </div>
                </button>
               </div>
            </div>
          </div>

          <form action="#">
            <div className="mb-4">
              <label for="email" className="form-label fw-bold">
                Usuario
              </label>
              <input type="email" className="form-control form-control-lg fs-6" name="email" placeholder="Usuario" style={{height:"50px"}} />
            </div>
            <div className="mb-2">
              <label for="password" className="form-label fw-bold">
                Contraseña
              </label>
              <input type="password" className="form-control form-control-lg fs-6" name="password" placeholder="Contraseña" style={{height:"50px"}} />
            </div>
            <div className="mb-4 w-100">
              <span className="w-100 d-flex justify-content-end ">
                <a className="text-decoration-none" href="#">Has olvidado tu contraseña?</a>
              </span>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-inicio-sesion">
                Iniciar Sesion
              </button>
            </div>
          </form>

          </div>
        </div>
      </div>
    </div>
</body>
  );
}

export default login;

