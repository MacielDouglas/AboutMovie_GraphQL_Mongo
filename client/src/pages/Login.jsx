import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

export default function Login() {
  const { signIn, isLoggedIn, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      await signIn({ variables: { email, password } });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="p-3 mb-6 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-poppins my-7 text-slate-400">
        Login
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="w-full uppercase bg-gradient-to-t from-teal-600 to-button_one text-white py-2 px-4 rounded-md hover:bg-gradient-to-t hover:from-button_one hover:to-teal-600"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Login"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-5">{error.message}</p>}
      <div className="flex gap-3 mt-8 text-slate-400">
        <p>Ainda não tem uma conta?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
    </div>
  );
}
