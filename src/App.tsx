import { Suspense, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";
import Map from "./pages/Map";
import { AdminContextType } from "./utils/types";
import Loading from "./pages/Loading";

export const AdminContext = createContext<AdminContextType | null>(null);
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col relative w-full max-h-[100dvh]">
        <Routes>
          <Route path="/:postion?" element={<Map />} />
        </Routes>
        <ToastContainer position="bottom-left" closeOnClick autoClose={2500} />
      </div>
    </Suspense>
  );
}

export default App;
