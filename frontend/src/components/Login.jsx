import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import AuthContext from "./AuthContext";

const Login = () => {
  // const authContext = useContext(AuthContext);
  const [form, setForm] = useState({
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });

  if (sessionStorage.getItem("accessToken")) {
    return <Navigate to="/home" />;
  }

  const validate = (name, value) => {
    let errorMessage = "";
    switch (name) {
      case "email":
        if (value.length === 0) {
          errorMessage = "Email should not be empty";
        } else {
          errorMessage = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? ""
            : "Email is not a valid one";
        }
        break;
      case "password":
        if (value.length === 0) {
          errorMessage = "Password should not be empty";
        } else if (value.length < 6) {
          errorMessage = "Password should be longer than 6 characters";
        } else if (value.length > 12) {
          errorMessage = "Password should be not longer than 12 characters";
        }
        break;
      default:
        break;
    }
    return errorMessage;
  };

  const handleChange = (e) => {
    const error = validate(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: {
        value: e.target.value,
        error,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      data: { accessToken },
    } = await axios.post("http://localhost:5000/auth/login", {
      user: {
        email: form.email.value,
        password: form.password.value,
      },
    });
    console.log(accessToken);
    sessionStorage.setItem("accessToken", accessToken);
  };

  return (
    <div className="p-5 flex flex-col space-y-4 items-center">
      <h1 className="text-5xl text-center font-semi-bold first-letter:text-6xl tracking-widest">
        Login
      </h1>
      <h1 className="text-3xl text-center font-semi-bold tracking-wider">
        to less{" "}
        <span className="text-4xl font-mono tracking-wider">Expenses</span>
      </h1>
      <div className="w-full text-center">
        <span>
          New?{" "}
          <Link to="/signup" className="underline text-indigo-400">
            Sign up
          </Link>
        </span>
      </div>
      <form className="tracking-wide bg-slate w-50 p-6 space-y-10">
        <fieldset>
          <label
            htmlFor="email"
            className="block text-lg font-light leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              value={form.email.value}
              type="text"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="foo@gmail.com"
              onChange={handleChange}
            />
          </div>
          <span className="text-red-500 text-xs p-3">{form.email.error}</span>
        </fieldset>
        <fieldset>
          <label
            htmlFor="email"
            className="block text-lg font-light leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              value={form.password.value}
              type="password"
              name="password"
              id="password"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="******"
              onChange={handleChange}
            />
          </div>
          <span className="text-red-500 text-xs p-3">
            {form.password.error}
          </span>
        </fieldset>
        <div className="flex items-center justify-center">
          <button
            disabled={
              form.email.error.length > 0 || form.password.error.length > 0
            }
            className="w-35 disabled:opacity-60 rounded-md bg-indigo-600 ring-1 px-7 py-2 text-white text-md tracking-widest"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
