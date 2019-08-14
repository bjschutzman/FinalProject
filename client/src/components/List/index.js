import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function ListItem({ children }) {
  return <div className="list-group-item">{children}</div>;
}
