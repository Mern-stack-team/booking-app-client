import React from "react";
import { login } from "../auth/auth.service";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await login(email as string, password as string);
      console.log("ogin successful");
      toast.success("Login successful");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } catch (error) {
      console.log("Login failed", error);
    }
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>MernStack</b>Team
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form
              action="../../index3.html"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="input-group mb-3">
                <input
                  //type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8"></div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <ToastContainer />
            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Sign in using
                Google+
              </a>
            </div>

            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">
                Register a new membership
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
