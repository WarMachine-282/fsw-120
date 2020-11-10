import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ text, Icon, active }) => {
  return (
    <div className={`sidebarOption ${active && "SidebarOption--active"}`}>
      <Icon />
      <h2 className="hide-non-active">{text}</h2>
    </div>
  );
};

export default SidebarOption;
