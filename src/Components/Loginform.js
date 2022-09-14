import { useState, createRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";

const Loginform = () => {
  let { setIsAuthticated } = useContext(AuthContext);
  let navigate = useNavigate();
  let username = createRef();
  let password = createRef();

  const [loginError, setLoginError] = useState(undefined);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${username.current.value}&password=${password.current.value}`,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setLoginError(true);
          throw new Error("unauthorized");
        }
      })
      .then((data) => {
        console.log(data);
        setIsAuthticated(data.token);
        //refactor this navigate...
        navigate("/myschedule");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {loginError && <div>Unauthorized user!</div>}
      <form>
        <input ref={username} type="text" />
        <input ref={password} type="password" />
        <button onClick={(e) => handleLogin(e)}>LOG IN</button>
      </form>
    </>
  );
};

export default Loginform;
