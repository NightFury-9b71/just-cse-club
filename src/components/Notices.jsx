import React, { useState } from "react";
import "./Notices.css";

const Notices = ({ notices }) => {
  const [expandedNotice, setExpandedNotice] = useState(null); // Track which notice is expanded

  const handleNoticeClick = (notice) => {
    // Toggle the expanded notice on click
    setExpandedNotice((prev) => (prev === notice.id ? null : notice.id));
  };

  return (
    <div>
      <h2>Notices</h2>
      {notices.length === 0 ? (
        <p>No notices available.</p>
      ) : (
        <div className="notice-container">
          {notices.map((notice, index) => (
            <div
              key={notice.id}
              className={`notice-item ${index % 2 === 0 ? "gray" : "white"} ${
                expandedNotice === notice.id ? "expanded" : ""
              }`}
              onClick={() => handleNoticeClick(notice)}
            >
              <h5>{notice.title}</h5>
              <p className="description">
                {expandedNotice === notice.id
                  ? notice.description // Show full description when expanded
                  : notice.description.length > 100
                  ? notice.description.slice(0, 100) + "..." // Truncate with ellipsis
                  : notice.description}
              </p>

              {expandedNotice === notice.id && (
                <div className="notice-details">
                  <p>
                    <strong>Time:</strong> {notice.time}
                  </p>
                  <p>
                    <strong>Venue:</strong> {notice.venue}
                  </p>
                  <p>
                    <strong>Created At:</strong> {new Date(notice.created_at).toLocaleString()}
                  </p>
                  <p>
                    <strong>Updated At:</strong> {new Date(notice.updated_at).toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notices;
