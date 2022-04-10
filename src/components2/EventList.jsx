import React from "react";
import "./EventList.css";

export default function EventList({ events, handleEvents }) {
  return (
    <div className="EventList">
      {events.map((event) => (
        <div key={event.id}>
          <li>
            {event.title} || priority: {event.priority}
          </li>
          <button
            onClick={() => {
              handleEvents(event.id);
            }}
            id="delete-button"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
