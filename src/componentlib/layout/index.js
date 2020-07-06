import React from "react";
import "./styles.scss";
import { TextStyle32 } from "../index";

export const Layout = () => {
  return (
    <div className="layout-container">
      <div className="sidebar-container">
        <TextStyle32>SideBar</TextStyle32>
      </div>
      <div className="column-container">
        <div className="navbar-container">
          <TextStyle32>NavBar</TextStyle32>
        </div>
        <div className="details-container">
          <TextStyle32>Content</TextStyle32>
        </div>
      </div>
    </div>
  );
};
