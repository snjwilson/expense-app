import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const signup = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target.form);
    const response = await axios.post("http://localhost:5000/auth/signup", {
      user: {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
      },
    });
    console.log(response);
  };

  return (
    <div className="container mx-auto p-10">
      <div className="p-5 flex flex-col items-center space-y-4">
        <h1 className="text-5xl tracking-widest font-light text-center">
          Sign Up
        </h1>
        <form className="w-50 tracking-wide bg-slate p-6 space-y-10">
          <fieldset>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="block w-full rounded-md border-0 py-2.5 pl-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="John"
              />
            </div>
          </fieldset>
          <fieldset>
            <label
              htmlFor="Last Name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="block w-full rounded-md border-0 py-2.5 pl-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Doe"
              />
            </div>
          </fieldset>
          <fieldset>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-2.5 pl-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="foo@gmail.com"
              />
            </div>
          </fieldset>
          <fieldset>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md border-0 py-2.5 pl-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="******"
              />
            </div>
          </fieldset>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              onClick={signup}
              className="w-35 rounded-md bg-indigo-600 ring-1 px-7 py-2 text-white text-md tracking-widest"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="underline text-indigo-400">
          <Link to="/login">Click here to go to back to login page</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
