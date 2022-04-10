import React, { useState } from "react";
import EventList from "./components2/EventList";
import Modal from "./components2/Modal";
import NewEventForm from "./components2/NewEventForm";
import Title2 from "./components2/Title2";

export default function App2() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "ramadan days", priority: "@", id: 0 },
    { title: "Eid day", priority: "@@", id: 1 },
    { title: "Sadia's Birthday", priority: "@@@", id: 2 },
  ]);
  const handleEvents = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id;
      });
    });
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };
  return (
    <div className="App">
      <Title2 title="My new EventList" subtitle="All my new Events" />
      {!showEvents && (
        <button
          onClick={() => {
            setShowEvents(true);
          }}
        >
          Show Events
        </button>
      )}
      {showEvents && (
        <button
          onClick={() => {
            setShowEvents(false);
          }}
        >
          Hide Events
        </button>
      )}
      {showEvents && <EventList events={events} handleEvents={handleEvents} />}
      {showModal && (
        <Modal>
          <NewEventForm addEvent={addEvent} handleClose={handleClose} />
        </Modal>
      )}
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show NewEvent Form
      </button>
    </div>
  );
}
