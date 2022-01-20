import React from "react";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <div className="login__content">
        <img
          className="login__logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <a className="login__btn" href={loginUrl}>
          LOGIN TO SPOTIFY
        </a>
      </div>
    </div>
  );
}

export default Login;
