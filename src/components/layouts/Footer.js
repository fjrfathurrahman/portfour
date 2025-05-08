import React from "react";

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-3 items-end py-12">
      <div>
        <h4>Logo...</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod
          tempor incididunt ut
        </p>
      </div>
      <p className="text-end md:col-start-3">
        Loosely designed in Figma and coded in Visual Studio Code by yours
        truly. Built with Next.js and Tailwind CSS, deployed with Vercel. ✨
      </p>
    </footer>
  );
};

export default Footer;
