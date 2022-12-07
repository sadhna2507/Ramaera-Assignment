import React from "react";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="nav_list">
          <li>
            <img src="profile.svg" className="icon"></img>
            <p>Profile</p>
          </li>
          <li>
            <img src="Combined-Shape.svg" className="icon"></img>
            <p>Project</p>
            <img src="Vector.svg" className="arrow_icon"></img>
          </li>
          <li>
            <img src="diagram.svg" className="icon"></img>
            <p>Finance</p>
            <img src="Vector.svg" className="arrow_icon"></img>
          </li>
          <li>
            <img src="support.svg" className="icon"></img>
            <p>Support</p>
            <img src="Vector.svg" ></img>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
