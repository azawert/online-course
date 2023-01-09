import React from "react";
import { ISideBarProps } from "./Sidebar.props";

const Sidebar = ({ ...props }: ISideBarProps): JSX.Element => {
  return <div {...props}>SideBar</div>;
};

export default Sidebar;
