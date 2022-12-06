import { Routes, Route } from "react-router-dom";
import Loginform from "./Components/Loginform";
import MySchedule from "./Components/MySchedule";
import { AuthContextProvider } from "./Context/Authcontext";

function App() {
  return (
    <AuthContextProvider>
      <div className="flex flex-col items-center justify-center h-screen">
        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/myschedule" element={<MySchedule />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
