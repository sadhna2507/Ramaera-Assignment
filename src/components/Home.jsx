import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* <Header/> */}
      <div className="home">

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>About</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Link to="/aboutGaramMasala">
                  <td className="img_flex_div">
                    <img src="garammasala.jpg" className="table_img"></img>
                    <p>Garam Masala</p>
                  </td>
                </Link>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  laboriosam necessitatibus.
                </td>
                <td className="status_div">
                  <p>Active</p>
                </td>
              </tr>
              <tr>
                <td className="img_flex_div">
                  <img src="hotels.jpg" className="table_img"></img>
                  <p>Hotels</p>
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  laboriosam necessitatibus.
                </td>
                <td className="status_div">
                  <p>Active</p>
                </td>
              </tr>
              <tr>
                <td className="img_flex_div">
                  <img src="tech.jpg" className="table_img"></img>
                  <p>Technology</p>
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  laboriosam necessitatibus.
                </td>
                <td className="status_div">
                  <p>Upcoming</p>
                </td>
              </tr>
              <tr>
                <td className="img_flex_div">
                  <img src="fcmg.png"></img>
                  <p>Fcmg</p>
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  laboriosam necessitatibus.
                </td>
                <td className="status_div">
                  <p>Upcoming</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
