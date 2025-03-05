export default function Home() {
  return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <div className="relative mt-2">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span className="absolute left-3 top-3 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3.5l4 4m0 0l-4 4m4-4H3.5" />
                </svg>
              </span>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <div className="relative mt-2">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span className="absolute left-3 top-3 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2l1.5 4.5M14 2l1.5 4.5m0 0l4 1.5M14 6l-2 8H9l-2-8M14 6l1.5 4.5m0 0l4 1.5" />
                </svg>
              </span>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}
