import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={user.avatar} alt={user.first_name} />
      </div>
      <div className="card-content">
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
