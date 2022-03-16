import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <div className="home navbarLi">
          <i class="fi fi-rr-home "></i>
          <li>Home</li>
          <i class="fi fi-rr-sign-out sign-out"></i>
        </div>
        <div className="culture navbarLi">
          <i class="fi fi-rr-globe"></i>
          <li>Culture</li>
        </div>
        <div className="rooms navbarLi">
          <i class="fi fi-br-user"></i>
          <li>Rooms</li>
        </div>
        <div className="playlist navbarLi">
          <i class="fi fi-br-list-check"></i>
          <li>Playlist</li>
        </div>
      </ul>
      <div>
        <h2 className="heading">Recommended Rooms</h2>
        <ul>
          <div className=" cwh common">
            <img
              src="/cwh.jpg"
              height={30}
              width={30}
              alt="codewithharry"
              className="navbarImage"
            />
            <li>CodeWithHarry</li>
            <button className="btn">Join</button>
          </div>
          <div className=" cp common">
            <img
              src="/cp.jpg"
              height={30}
              width={30}
              alt="Clever Programmer"
              className="navbarImage"
            />
            <li>Clever Programmer</li>
            <button className="btn">Join</button>
          </div>
          <div className=" wds common">
            <img
              src="/wds.jpg"
              height={30}
              width={30}
              alt="WebDevSimplified"
              className="navbarImage"
            />
            <li>WebDevSimplified</li>
            <button className="btn">Join</button>
          </div>
          <div className=" fl common">
            <img
              src="/fl.jpg"
              height={30}
              width={30}
              alt="Finlight"
              className="navbarImage"
            />
            <li>Finlight</li>
            <button className="btn">Join</button>
          </div>
          <div className=" fl common">
            <img
              src="/fl.jpg"
              height={30}
              width={30}
              alt="Finlight"
              className="navbarImage"
            />
            <li>Finlight</li>
            <button className="btn">Join</button>
          </div>
          <div className=" fl common">
            <img
              src="/fl.jpg"
              height={30}
              width={30}
              alt="Finlight"
              className="navbarImage"
            />
            <li>Finlight</li>
            <button className="btn">Join</button>
          </div>
          <div className=" fl common">
            <img
              src="/fl.jpg"
              height={30}
              width={30}
              alt="Finlight"
              className="navbarImage"
            />
            <li>Finlight</li>
            <button className="btn">Join</button>
          </div>
          <div className=" fl common">
            <img
              src="/fl.jpg"
              height={30}
              width={30}
              alt="Finlight"
              className="navbarImage"
            />
            <li>Finlight</li>
            <button className="btn">Join</button>
          </div>
        </ul>
        <a href="/" className="link">
          See More
        </a>
      </div>

      <div>
        <h2 className="heading">Recommended Creators</h2>
        <ul>
          <div className=" fl common">
            <img
              src="/fl.jpg"
              height={30}
              width={30}
              alt="Finlight"
              className="navbarImage"
            />
            <li>Finlight</li>
            <button className="btn">Rooms</button>
          </div>
          <div className=" fl1 common">
            <img
              src="/fl.jpg"
              height={30}
              width={30}
              alt="Finlight"
              className="navbarImage"
            />
            <li>Finlight</li>
          </div>
          <div className=" fl common">
            <img
              src="/fl.jpg"
              height={30}
              width={30}
              alt="Finlight"
              className="navbarImage"
            />
            <li>Finlight</li>
            <button className="btn">Rooms</button>
          </div>
          <div className=" fl common">
            <img
              src="/fl.jpg"
              height={30}
              width={30}
              alt="Finlight"
              className="navbarImage"
            />
            <li>Finlight</li>
            <button className="btn">Rooms</button>
          </div>
          <div className=" fl1 common">
            <img
              src="/fl.jpg"
              height={30}
              width={30}
              alt="Finlight"
              className="navbarImage"
            />
            <li>Finlight</li>
          </div>
          <div className=" fl common">
            <img
              src="/fl.jpg"
              height={30}
              width={30}
              alt="Finlight"
              className="navbarImage"
            />
            <li>Finlight</li>
            <button className="btn">Rooms</button>
          </div>
          <a href="/" className="link1">
            See More
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
