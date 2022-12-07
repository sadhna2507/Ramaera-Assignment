import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      {/* <Header/> */}
      <div
        className="flex_about"
        style={{ display: "flex", flexDirection: "row" }}>
        {/* <Navbar/> */}
        <div className="masala_about">
        <div className="content">
          <h1 className="head_content">Garam Masala</h1>
          {/* <div className="about_content"> */}
          <div className="about_content">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis dolorem, inventore maiores rerum magni repudiandae eaque ullam sit possimus nisi ipsam expedita architecto exercitationem enim culpa excepturi? Quae debitis ipsum magnam, unde officia facilis adipisci enim sunt quas dolor perferendis atque dicta inventore facere exercitationem, ipsam maxime asperiores? Quae!eaque ullam sit possimus nisi ipsam expedita architecto exercitationem enim culpa excepturi? Quae debitis ipsum magnam, unde officia facilis adipisci enim sunt quas dolor perferendis atque officia facilis adipisci enim sunt quas dolor perferendis atque dicta inventore facere exercitationem, ipsam maxime asperiores? Quae!eaque ullam sit possimus nisi ipsam expedita architecto exercitationem enim culpa excepturi? Quae debitis ipsum magnam, unde officia facilis adipisci enim sunt quas dolor perferendis atque.officia facilis adipisci enim sunt quas dolor perferendis atque dicta inventore facere exercitationem, ipsam maxime asperiore.
          </div>
          <div className="gm_img">
            <img src="garammasala.jpg"></img>
            <div className="interest_div">500+ users are interested</div>
          </div>

        </div>

        <div className="total_bid">
        <div className="price">
          <p>Total ₹1.5cr------------------------------Now ₹80 lac</p>
          <button></button>
        </div>
          <div className="bid">
            <button>Price Bid</button>
          </div>
        </div>
        </div>
        
        
      </div>
     
    </div>
  );
}

export default About;
