import { useState, type ReactElement } from "react";
import signInImage from "../../assets/signInImage.png";
import "./SignInComponent.scss";
import { useNavigate } from "react-router-dom";
import type { AppDispatch } from "../../services/store";
import { useDispatch } from "react-redux";
import { createUserActions } from "../../services/store/user/user.reducer";
import type { IUser } from "../../services/store/user/user.entity";
import { RolEnum } from "../../enums/rolEnum";
import { PathEnum } from "../../enums/PathEnum";

const SignInComponent = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const onSignInButton = () => {
    const userState: IUser = {
      username: user,
      rol: RolEnum.UnSignIn
    }

    userState.rol = userState.username === 'diegoGonzalez' ? RolEnum.Admin : RolEnum.User;

    dispatch(createUserActions.setUser(userState))
    navigate(PathEnum.Home);
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
          <input onChange={(event) => setUser(event.target.value)} className="form-control form-control-lg" type="text" />
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
