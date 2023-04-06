import React, { useState } from "react";
import "./App.css";
import Input from "./input/Input";
import Message from "./message/Message";

interface Messages {
  id: number;
  message: string;
}

function App() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Messages[]>([]);

  function addItem(): void {
    if (message) {
      setMessages([...messages, { id: Date.now(), message }]);
      setMessage("");
    } else {
      alert("Please Add a message");
    }
  }

  function deleteItem(id: number): void {
    setMessages(messages.filter((m) => m.id !== id));
  }

  return (
    <React.Fragment>
      <div className="App">
        <Input message={message} setMessage={setMessage} addItem={addItem} />
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message.message}
            deleteItem={deleteItem}
            id={message.id}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
