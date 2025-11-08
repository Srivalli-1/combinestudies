import { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? <Login /> : <Signup />}

      <div className="text-center mt-4">
        <button
          onClick={() => setShowLogin(!showLogin)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {showLogin ? "Go to Signup" : "Go to Login"}
        </button>
      </div>
    </div>
  );
}

export default App;
