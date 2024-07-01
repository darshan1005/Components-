import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Avatar } from "../Avatar/Avatar";
import './Navbar.css';

export interface NavbarProps {
  navLinks: {
    label: string;
    url: string;
  }[];
  loggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

export const NavBar: React.FC<NavbarProps> = ({
  navLinks,
  loggedIn,
  onLogin,
  onLogout,
}) => {
  const [searchText, setSearchText] = useState("");
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [menu, showMenu] = useState(false);

  const navBarRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const handleOutsideClick = (event: MouseEvent) => {
      if (navBarRef.current && !navBarRef.current.contains(event.target as Node)){
        showMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [])

  const handleLogout = () => {
    setShowProfilePopup(false);
    onLogout();
  };

  const handleLogin = () => {
    onLogin();
    setShowProfilePopup(true);
  };

  const toggleMenu = () => {
    showMenu(!menu);
  }

  return (
    <nav ref={navBarRef}>
      <div className="navbar-brand">
        <img src="" alt="" style={{ display: "none" }} />
        <p className="logo">Logo</p>
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="menu-button" onClick={toggleMenu}>
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <ul className={`navbar-nav ${menu ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.url}>
            <a style={{ textDecoration: "none", color: "black" }} href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className={`navbar-search ${menu ? 'active' : ''}`}>
        <input
        className="search-bar-inner"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className={`navbar-profile ${menu ? 'active' : ''}`}>
        {!loggedIn ? (
          <button onClick={handleLogin}>
            <FaUser /> Login
          </button>
        ) : (
          <div>
            {showProfilePopup ? (<button onClick={() => setShowProfilePopup(!showProfilePopup)}>
              <FaUser /> Profile
            </button>) : (
              <div className="profile-popup">
                <Avatar
                  src="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?rs=1&pid=ImgDetMain"
                  alt="Avatar"
                  size={40}
                />
                <div className="profile-options">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
