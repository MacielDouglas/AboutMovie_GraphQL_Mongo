import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 mb-6 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-poppins my-7 text-slate-400">
        Sign Up!
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="User"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button
          //   disabled={loading}
          className="w-full uppercase bg-gradient-to-t from-teal-600 to-button_one text-white py-2 px-4 rounded-md hover:bg-gradient-to-t hover:from-button_one hover:to-teal-600"
        >
          {/* {loading ? "Enviando..." : "Entrar"} */}login
        </button>
      </form>
      <div className="flex gap-3 mt-5 text-slate-400">
        <p>Já tem uma conta?</p>
        <Link to={"/login"}>
          <span className="text-blue-500">Login</span>
        </Link>
      </div>
      {/* {error && <p className="text-red-500 mt-5">{error}</p>} */}
    </div>
  );
}
