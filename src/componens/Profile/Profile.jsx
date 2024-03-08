import React from "react";

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
            alt="User avatar"
          />
          <p>Jacques Gluke</p>
          <p>@jgluke</p>
          <p>Ocho Rios, Jamaica</p>
        </div>
      
        <ul>
          <li>
            <span>Followers</span>
            <span>5603</span>
          </li>
          <li>
            <span>Views</span>
            <span>4827</span>
          </li>
          <li>
            <span>Likes</span>
            <span>1308</span>
          </li>
        </ul>
      </div>
    );
  };
  export default Profile;


