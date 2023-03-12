import React, { useState } from "react";
import { login } from "../api/api";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "../components/SuccessPopup";
import FailurePopup from "./FailurePopup";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    login(email, password)
      .then((res) => {
        setLoginStatus("Success");
        setTimeout(() => {
          navigate("/");
        }, 3000);
        window.localStorage.setItem("Login", res);
        console.log(res);
      })
      .catch((error) => {
        setLoginStatus("Failure");
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome back!</h2>

        {loginStatus === "Success" && <SuccessPopup Message="Login Succes" />}
        {loginStatus === "Failure" && <FailurePopup Message="Login failure" />}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-gray-200 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full bg-gray-200 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            type="submit"
            disabled={isLoading}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
