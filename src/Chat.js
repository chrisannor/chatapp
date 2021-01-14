import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div class="chat__header">
        <Avatar />
        <div class="chat__headerInfo">
          <h3>Contact Name</h3>
          <p>Last seen at...</p>
        </div>
        <div class="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Chat;
