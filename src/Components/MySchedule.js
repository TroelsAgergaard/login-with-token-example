import { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { Link } from "react-router-dom";

const MySchedule = () => {
  let { isAuthticated } = useContext(AuthContext);
  return (
    <div class="flex flex-col text-center">
      {isAuthticated && <h1 className="text-4xl">My Schedule</h1>}
      {!isAuthticated && (
        <>
          <h3 className="text-1xl">
            You need to be logged in to see your schedule!
          </h3>
          <Link className="mt-5 underline" to="/">
            Take me to login
          </Link>
        </>
      )}
    </div>
  );
};

export default MySchedule;
