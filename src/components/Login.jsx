import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provaider/AuthProvaider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate()
    const {signInUser, signInWithGoogle} = useContext(AuthContext);


  const handelLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
    .then(result =>{
        console.log(result.user);
        e.target.reset();
        navigate('/')
    })
    .catch(error =>{
        console.log(error.message);
    })
  };

  const handelGoogleSignIn = ()=>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user);
      navigate('/')
    })
    .catch(error =>{
      console.log(error.message);
      navigate('/register')
    })
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="p-5 pt-0">
            Are you new here? Please{" "}
            <Link to={"/register"} className="text-blue-500 font-bold">
              Register
            </Link>
          </p>

          <button onClick={handelGoogleSignIn} className="btn btn-ghost mb-5"><FaGoogle /> Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
