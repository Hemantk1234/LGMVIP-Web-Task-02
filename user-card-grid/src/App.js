import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import { RingLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const data = await response.json();
        setUsers(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div>
      <Navbar getUsers={getUsers} />
      <div className="user-card-grid">
        {loading ? (
          <div className="loader-container">
            <div
              className="loader"
              style={{
                display: "block",
                margin: "0 auto",
              }}
            >
              <RingLoader color={"#4a5c6c"} loading={loading} size={80} />
            </div>
          </div>
        ) : (
          users.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
};

export default App;
