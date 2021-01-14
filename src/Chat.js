import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
  SettingsInputAntenna,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
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
      <div class="chat__body">
        <p className="chat__message">
          <span class="chat__name">Isabel</span>
          Message
          <span class="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message">
          <span class="chat__name">Isabel</span>
          Message
          <span class="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__reciever">
          <span class="chat__name">Chris</span>
          Message
          <span class="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div class="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            // value={input}
            //onChange={(e) => SettingsInputAntenna(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button //onClick={sendMessage}
            type="submit"
          >
            Send a message
          </button>
        </form>

        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
