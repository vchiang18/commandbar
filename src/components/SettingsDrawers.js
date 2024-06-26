import React from "react";
import { useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { usePractices } from "../context/PracticeContext";

const SettingsDrawer = () => {
  const navigate = useNavigate();
  const { clearPractices } = usePractices();

  const handleSettings = () => {
    navigate("/customize-values");
  };

  const handleExport = () => {
    navigate("/export-practices");
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn bg-calBlue text-white drawer-button border-none"
        >
          <Bars3Icon className="h-6 w-6" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li>
            <a onClick={handleSettings} href="general-settings">
              Settings
            </a>
          </li>
          <li>
            <a onClick={clearPractices} href="clear-practices">
              Clear Practices
            </a>
          </li>
          <li>
            <a onClick={handleExport} href="export-practices">
              Export Practices
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsDrawer;
