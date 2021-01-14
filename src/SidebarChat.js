import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div class="sidebarChat__info">
        <h2>Contact Name</h2>
        <p>Last message sent</p>
      </div>
    </div>
  );
}

export default SidebarChat;
