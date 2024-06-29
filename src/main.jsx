import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Global/Navbar.jsx";
import { ContextProvider } from "./Context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
  <main className="relative flex flex-col min-h-screen">
    <div className="flex-grow flex-1">
      <Navbar/>
      <App />
    </div>
  </main>
  </ContextProvider>
);
