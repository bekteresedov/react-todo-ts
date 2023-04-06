import React from "react";
import "./Input.css";

interface props {
  message: string;
  setMessage: (v: string) => void;
  addItem: () => void;
}

const Input: React.FC<props> = ({ setMessage, addItem, message }) => {
  return (
    <React.Fragment>
      <div>
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          value={message}
          placeholder="add todo.."
        />
        <button onClick={() => addItem()}>Add</button>
      </div>
    </React.Fragment>
  );
};

export default Input;
