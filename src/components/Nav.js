import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SettingsDrawer from "./SettingsDrawers";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="bg-calBlue p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-grow">
          {/* <img
            className="h-8 w-auto"
            src="/images/cal-yellow.svg"
            alt="team logo"
          /> */}
        </div>
        {/* <NavLink
          to="/test"
          className="text-gray-300 hover:text-white whitespace-nowrap p-4"
        >
          Test
        </NavLink> */}
        <div className="space-x-4 ml-auto items-center">
          {location.pathname === "/" && (
            <div className="flex items-center space-x-2">
              <NavLink
                to="/play-list"
                className="text-gray-300 hover:text-white whitespace-nowrap"
              >
                PLAY LIST
              </NavLink>
              <SettingsDrawer />
            </div>
          )}
          {location.pathname === "/play-list" && (
            <div className="flex items-center space-x-2">
              <NavLink
                to="/"
                className="text-gray-300 hover:text-white whitespace-nowrap"
              >
                PLAY ENTRY
              </NavLink>
              <SettingsDrawer />
            </div>
          )}
          {location.pathname === "/customize-values" && (
            <div className="flex items-center space-x-2">
              <NavLink
                to="/"
                className="text-gray-300 hover:text-white whitespace-nowrap"
              >
                PLAY ENTRY
              </NavLink>
              <NavLink
                to="/play-list"
                className="text-gray-300 hover:text-white whitespace-nowrap"
              >
                PLAY LIST
              </NavLink>
              <SettingsDrawer />
            </div>
          )}
          {location.pathname === "/export-practices" && (
            <div className="flex items-center space-x-2">
              <NavLink
                to="/"
                className="text-gray-300 hover:text-white whitespace-nowrap"
              >
                PLAY ENTRY
              </NavLink>
              <NavLink
                to="/play-list"
                className="text-gray-300 hover:text-white whitespace-nowrap"
              >
                PLAY LIST
              </NavLink>
              <SettingsDrawer />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
