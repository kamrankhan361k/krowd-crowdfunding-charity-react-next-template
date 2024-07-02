import React from "react";

const ContactMap = () => {
  return (
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14612.97540392891!2d90.497437!3d23.70298445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1593633952456!5m2!1sen!2sbd"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden={false}
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default ContactMap;
