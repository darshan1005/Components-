import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Avatar } from "../Avatar/Avatar";
import './Navbar.css'

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

  const handleLogout = () => {
    setShowProfilePopup(false);
    onLogout();
  };

  const handleLogin = () => {
    setShowProfilePopup(true);
    onLogin();
  };

  return (
    <nav>
      <div className="navbar-brand">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="navbar-nav">
        {navLinks.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="search....."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="navbar-profile">
        {loggedIn ? (
          <div>
            <button onClick={() => setShowProfilePopup(!showProfilePopup)}>
              <FaUser /> Login
            </button>
            {showProfilePopup && (
              <div className="profile-popup">
                <div className="avatar">
                  <Avatar
                    src={"https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?rs=1&pid=ImgDetMain"}
                    alt={"Avatar"}
                    size={30}
                  />
                </div>
                <div className="profile-options">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            )}
          </div>
        ) : null 
        }
        {!loggedIn && <button onClick={handleLogin}>Login</button>}
      </div>
    </nav>
  );
};
