import React from "react";

const ProfileCard = (props) => {
  return (
    <div className="profile-card" class={props.class}>
      <img src={props.image} className="profile-img" alt={props.name} />
      <p style={{color: props.color, fontSize: "1rem"}}>{props.name}</p>
      <p>{props.position}</p>
    </div>
  );
};

export default ProfileCard;
