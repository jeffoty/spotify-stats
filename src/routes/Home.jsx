import { useEffect, useState } from "react";
import Login from "../components/Login";
import Profile from "../components/Profile";

const Home = () => {

  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("Access token")))
  }, [])
    
  return (
    <div>
      {token ? <Profile/> : <Login/>}
    </div>
  );
};

export default Home;
