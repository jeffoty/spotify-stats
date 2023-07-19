import { useEffect, useState } from "react";
import Login from "../components/Login";
import Profile from "../components/Profile";
import { getAccessToken } from "../services";

const Home = () => {

  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(getAccessToken)
  }, [])
  
  if (token) {
    return (<Profile/>)
  } else {
    return (<Login/>)
  }

 
};

export default Home;
