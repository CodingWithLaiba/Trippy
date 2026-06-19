import Navbar from "../components/Navbar";

export default function SignUp() {
  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center mt-24 px-4 py-12">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Sign Up Form
          </h1>

          <form className="flex flex-col gap-4 p-6 md:p-8 rounded-xl">
            <input
              type="text"
              placeholder="Name"
              className="h-12 px-4 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="h-12 px-4 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="h-12 px-4 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full py-3 bg-gray-200 text-xl font-medium rounded-lg transition-all duration-300 hover:bg-[#151516] hover:text-white"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
