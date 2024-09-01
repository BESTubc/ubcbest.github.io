import React from "react";

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <img src={props.image} className="profile-img"/>
      <p className="profile-name">{props.name}</p>
      <p>{props.position}</p>
    </div>
  );
};

export default ProfileCard;
