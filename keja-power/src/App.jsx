import { useState, useEffect } from "react";
function App() {
  const [tokenBalance, setTokenBalance] = useState(0);
  const [lightsOn, setLightsOn] = useState(false);
  const [fridgeOn, setFridgeOn] = useState(false);

  // Fetch token balance from backend (Real-time updates)
  useEffect(() => {
    const fetchTokenBalance = async () => {
      try {
        const response = await fetch("http://localhost:3001/tokens");
        const data = await response.json();
        setTokenBalance(data.units);
      } catch (error) {
        console.error("Error fetching token balance:", error);
      }
    };

    fetchTokenBalance();
    const interval = setInterval(fetchTokenBalance, 3000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-400 h-screen p-6">
      {/* House Name */}
      <h1 className="text-3xl font-bold text-white mb-6">🏠 Kips House</h1>

      {/* Status Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
        {/* Fridge */}
        <div className="p-4 bg-white rounded-xl shadow-md text-center">
          <h1 className="text-xl font-semibold mb-2">Fridge</h1>
          <div
            className={`w-16 h-16 mx-auto rounded-full ${
              fridgeOn ? "bg-green-500" : "bg-gray-300"
            }`}
          ></div>
          <button
            onClick={() => setFridgeOn(!fridgeOn)}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            {fridgeOn ? "Turn Off" : "Turn On"}
          </button>
        </div>

        {/* Lights */}
        <div className="p-4 bg-white rounded-xl shadow-md text-center">
          <h1 className="text-xl font-semibold mb-2">Lights</h1>
          <div
            className={`w-16 h-16 mx-auto rounded-full ${
              lightsOn ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></div>
          <button
            onClick={() => setLightsOn(!lightsOn)}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            {lightsOn ? "Turn Off" : "Turn On"}
          </button>
        </div>

        {/* Token Loader */}
        <div className="p-4 bg-white rounded-xl shadow-md text-center">
          <h1 className="text-xl font-semibold mb-2">Token Loader</h1>
          <div className="text-2xl font-bold text-gray-700">{tokenBalance} Units</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
