import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";

function App() {
  return (
    <div className="bg-gray-300 flex justify-center items-center h-screen">
      <div className="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        
        <Header />

        <div className="container flex">
          <Balance />
        </div>
      </div>
    </div>
  );
}

export default App;
