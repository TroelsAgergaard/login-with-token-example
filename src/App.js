import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Loginform from "./Components/Loginform";
import MySchedule from "./Components/MySchedule";
import { AuthContextProvider } from "./Context/Authcontext";
import cat from "./Assets/Cat03.jpeg";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Navigation />
        <img src={cat} />
        <Routes>
          <Route path="/login" element={<Loginform />} />
          <Route path="/myschedule" element={<MySchedule />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
