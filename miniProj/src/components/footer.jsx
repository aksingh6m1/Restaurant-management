import React from "react";

function footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">
            © 2025 Tuntun Kumar Project-1 Inc. All rights reserved.
          </p>
          <p className="flex justify-center md:justify-end items-center mt-2 md:mt-0">
            <span className="ml-2">tk506089@gmail.com</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default footer;
