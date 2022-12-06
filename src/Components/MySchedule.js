import { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { Link } from "react-router-dom";
// import { AddToHomeScreen } from 'react-pwa-add-to-homescreen';


const MySchedule = () => {
  let { isAuthticated } = useContext(AuthContext);
  return (
    <div>
      {/* {isAuthticated && <div>myschedule<AddToHomeScreen /></div>} */}
      {!isAuthticated && <Link to="/login">Klik for at logge ind!</Link>}
    </div>
  );
};

export default MySchedule;
