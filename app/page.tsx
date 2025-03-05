export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-md shadow-md">
        <h1 className="text-3xl font-bold">Login</h1>
        <form className="flex flex-col gap-4 mt-5">
          <input type="text" placeholder="Email" className="border-2 border-gray-300 rounded-md p-2" />
          <input type="password" placeholder="Password" className="border-2 border-gray-300 rounded-md p-2" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md
           hover:bg-blue-600 transition-colors cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
