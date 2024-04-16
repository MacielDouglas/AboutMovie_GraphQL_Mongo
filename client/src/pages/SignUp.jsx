import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NEW_USER } from "../graphql/mutation/user.mutation";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [newUser, { loading, error }] = useMutation(NEW_USER);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newUser({
        variables: user,
      });
      setUser("");
      navigate("/login");
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="p-3 mb-6 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-poppins my-7 text-slate-400">
        Sign Up!
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          type="submit"
          className="w-full uppercase bg-gradient-to-t from-teal-600 to-button_one text-white py-2 px-4 rounded-md hover:bg-gradient-to-t hover:from-button_one hover:to-teal-600"
        >
          {loading ? "Sending..." : "register"}
        </button>
      </form>
      <div className="flex gap-3 mt-5 text-slate-400">
        <p>Already have an account? </p>
        <Link to={"/login"}>
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
