import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar getUsers={getUsers} />
      <div className="user-card-grid">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          users.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
};

export default App;
