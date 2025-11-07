import { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? <Login /> : <Signup />}
      <button
        onClick={() => setShowLogin(!showLogin)}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        {showLogin ? "Go to Signup" : "Go to Login"}
      </button>
    </div>
  );
}

export default App;
