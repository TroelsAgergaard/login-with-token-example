import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Loginform from "./Components/Loginform";
import MySchedule from "./Components/MySchedule";
import { AuthContextProvider } from "./Context/Authcontext";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/login" element={<Loginform />} />
          <Route path="/myschedule" element={<MySchedule />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
