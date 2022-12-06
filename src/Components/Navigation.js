import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";
import { Offline, Online } from "react-detect-offline";

const Navigation = () => {
  let { isAuthticated, setIsAuthticated } = useContext(AuthContext);

  return (
    <ul style={{ listStyleType: "none", display: "flex" }}>
      <li style={{ marginRight: "20px" }}>
        <Link to="/">Home</Link>
      </li>
      <li style={{ marginRight: "20px" }}>
        {isAuthticated && <Link to="/myschedule">My Schedule</Link>}
      </li>
      <li>
        {!isAuthticated && <Link to="/login">Log in</Link>}
        {isAuthticated && (
          <>
            <Link onClick={() => setIsAuthticated(false)} to="/">
              Log Out
            </Link>
            <Offline>Offline</Offline>
            <Online>Online</Online>
          </>
        )}
      </li>
    </ul>
  );
};

export default Navigation;
