import React, { useState, useEffect } from "react";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]); // State to store events data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors
  const [expandedEvent, setExpandedEvent] = useState(null); // Track which event is expanded

  useEffect(() => {
    // Fetch events data from the API
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://justcseclub.pythonanywhere.com/api/events/");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data); // Update state with fetched events
      } catch (error) {
        setError(error.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchEvents(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const handleEventClick = (event) => {
    // Toggle the expanded event on click
    setExpandedEvent((prev) => (prev === event.id ? null : event.id));
  };

  if (loading) {
    return <p>Loading events...</p>; // Show loading state
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message if there is an error
  }

  return (
    <section className="events">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {events.length === 0 ? (
          <p>No events available.</p>
        ) : (
          events.map((event) => (
            <div
              key={event.id}
              className={`event-card ${expandedEvent === event.id ? "expanded" : ""}`}
              onClick={() => handleEventClick(event)}
            >
              <h3>{event.title}</h3>
              <p>{event.date}</p>

              {expandedEvent === event.id && (
                <div className="event-details">
                  <p><strong>Description:</strong> {event.description}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Venue:</strong> {event.venue}</p>
                  <p><strong>Created At:</strong> {new Date(event.created_at).toLocaleString()}</p>
                  <p><strong>Updated At:</strong> {new Date(event.updated_at).toLocaleString()}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Events;
