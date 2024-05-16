import React from "react";

const Map = () => {
  return (
    <div className="w-full h-96">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29900.68949456084!2d2.136686006222125!3d41.39476877345121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f72d87b151%3A0x95b49636b8c9a5d7!2sBarcelona!5e0!3m2!1sen!2ses!4v1624274237697!5m2!1sen!2ses"
        allowFullScreen
        title="map"
      ></iframe>
    </div>
  );
};

export default Map;
