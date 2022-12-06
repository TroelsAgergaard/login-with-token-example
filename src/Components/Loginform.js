import { useState, createRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";

const Loginform = () => {
  let { setIsAuthticated } = useContext(AuthContext);
  let navigate = useNavigate();
  let username = createRef();
  let password = createRef();

  const [loginError, setLoginError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    setLoading(true);
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
          throw new Error("unauthorized");
        }
      })
      .then((data) => {
        setIsAuthticated(data.token);
        navigate("/myschedule");
      })
      .catch((error) => {
        setLoginError(true);
        setLoading(false);
      });
  };
  return (
    <>
      {loginError && <div className="mb-4">Unauthorized user!</div>}
      <form className="w-80 rounded border p-10 bg-gray-100">
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          id="username"
          placeholder="Enter username"
          ref={username}
          type="text"
        />
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mt-2 mb-5"
          ref={password}
          type="password"
          placeholder="Password"
        />
        {/* <span className="">Recover password</span> */}
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={(e) => handleLogin(e)}
        >
          {loading ? <span>Loading...</span> : <span>Sign In</span>}
        </button>
      </form>
    </>
  );
};

export default Loginform;
