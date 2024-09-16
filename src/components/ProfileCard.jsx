import React from "react";

const ProfileCard = (props) => {
  return (
    <div className="profile-card" class={props.class}>
      <img src={props.image} className="profile-img" height={props.size} width={props.size} />
      <p style={{color: props.color, fontSize: "24px"}}>{props.name}</p>
      <p>{props.position}</p>
    </div>
  );
};

export default ProfileCard;
