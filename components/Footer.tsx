import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700">
      <div className="max-w-6xl mx-auto py-6 px-4 flex justify-center items-center">
        <p className="text-white text-lg text-center">
          &copy; {new Date().getFullYear()} DevConnect. All rights reserved.
          <br />
          Connecting developers and communities, one project at a time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
