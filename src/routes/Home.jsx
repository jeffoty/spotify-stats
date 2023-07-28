import { useEffect, useState } from "react";
import Login from "../components/Login";
import Profile from "../components/Profile";
import { getAccessToken } from "../services";

const Home = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Assuming getAccessToken is an asynchronous function
    const fetchToken = async () => {
      const accessToken = await getAccessToken();
      setToken(accessToken);
    };
    fetchToken();
  }, []);

  if (token) {
    // window.location.reload();
    return <Profile />;
  } else {
    return <Login />;
  }
};

export default Home;
