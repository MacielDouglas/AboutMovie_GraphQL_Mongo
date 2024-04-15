import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="p-3 mb-6 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-poppins my-7 text-slate-400">
        Login
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
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
      <div className="flex gap-3 mt-8 text-slate-400">
        <p>Ainda não tem uma conta?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
      {/* {error && <p className="text-red-500 mt-5">{error}</p>} */}
    </div>
  );
}
