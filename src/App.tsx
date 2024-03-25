import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Map from "./pages/Map";
import { AdminContextType } from "./utils/types";

export const AdminContext = createContext<AdminContextType | null>(null);
function App() {
  return (
    <div className="flex flex-col relative w-full max-h-[100dvh]">
      <Routes>
        <Route path="/:postion?" element={<Map />} />
      </Routes>
      <ToastContainer position="bottom-left" closeOnClick autoClose={2500} />
    </div>
  );
}

export default App;
