import React from "react";

const ProfileCard = (props) => {
  return (
    <div className="profile-card" class={props.class}>
      <img src={props.image} className="profile-img"/>
      <p style={{color: props.color}}>{props.name}</p>
      <p>{props.position}</p>
    </div>
  );
};

export default ProfileCard;
