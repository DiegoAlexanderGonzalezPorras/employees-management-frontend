import type { ReactElement } from "react";
import signInImage from "../../assets/signInImage.png";
import "./SignInComponent.scss";
import { useNavigate } from "react-router-dom";

const SignInComponent = (): ReactElement => {
  const navigate = useNavigate();

  const onSignInButton = () => {
    navigate("/home");
  }  

  return (
    <div className="signIn">
      <img className="signInImg" src={signInImage} />

      <div className="signInInfo">
        <p className="h1 signInInfo__title">GESTOR DE EQUIPOS</p>
        <p className="h4 signInInfo__subtitle">
          Por favor ingresa a tu cuenta para continuar.
        </p>

        <div>
          <p className="h6">Usuario</p>
          <input className="form-control form-control-lg" type="text" />
        </div>

        <div>
          <p className="h6">Contraseña</p>
          <input className="form-control form-control-lg" type="password" />
        </div>

        <button
          type="button"
          className="btn btn-primary signInInfo__button"
          onClick={onSignInButton}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default SignInComponent;
