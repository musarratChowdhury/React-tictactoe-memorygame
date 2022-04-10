import React, { useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm({ addEvent, handleClose }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title: title,
      priority: priority,
      id: Math.floor(Math.random() * 10000),
    };
    addEvent(newEvent);
  };
  return (
    <div className="new-event-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>Event Name : </span>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
          />
        </label>
        <label>
          <span>Event Priority : </span>
          <input
            onChange={(e) => setPriority(e.target.value)}
            type="text"
            value={priority}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
