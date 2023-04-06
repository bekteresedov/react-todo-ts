import React from "react";
import "./Message.css";
interface props {
  message: string;
  id: number;
  deleteItem: (index: number) => void;
}

const Message: React.FC<props> = ({ message, id, deleteItem }) => {
  return (
    <React.Fragment>
      <div className="message">
        <span>{message}</span>
        <button onClick={() => deleteItem(id)}>X</button>
      </div>
    </React.Fragment>
  );
};

export default Message;
