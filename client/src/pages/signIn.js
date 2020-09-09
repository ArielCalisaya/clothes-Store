import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {signin} from '../redux/actions/userAction'
import { useDispatch, useSelector } from "react-redux";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if(userInfo) {
      props.history.push("/ropa")
    }
    return () => {
      //
    }
  }, [userInfo])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h3>Crear Cuenta</h3>
          </li>
          <li>{loading && <div>loading...</div> }</li>
          <li>{error && <div>{error}</div>}</li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label for="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="submit-button">
              Entrar
            </button>
          </li>
          <li>Nuevo por Aqui?</li>
          <li>
            <Link to="/register" className="buttonForm">
              Crear Cuenta
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SignIn;
