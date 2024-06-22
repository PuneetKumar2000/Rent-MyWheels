import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("E-mail already registered! Please Login to proceed.");
          navigate("/login");
        } else {
          alert("Registered successfully! Please Login to proceed.");
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-700">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="mb-4 text-2xl text-primary">Register</h2>
        <form onSubmit={handleSubmit} className="text-start">
          <div className="mb-4">
            <label
              htmlFor="exampleInputname"
              className="block text-lg font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              id="exampleInputname"
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="exampleInputEmail1"
              className="block text-lg font-semibold"
            >
              Email Id
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              id="exampleInputEmail1"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="exampleInputPassword1"
              className="block text-lg font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              id="exampleInputPassword1"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-4">Already have an account?</p>
        <Link to="/login" className="btn-secondary py-2 px-4 mt-2 rounded-md">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
