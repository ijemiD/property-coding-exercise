import React from "react";

function Header() {
  return (
    <div>
      <header className="h-16 my-1.2 bg-white border-b border-gray-primary">
        <div className="container mx-auto h-full">
          <div className="flex items-center h-full">
            <div className="flex text-center items-center cursor-pointer">
              <h2 className="flex-shrink-1 justify-center">
                <img
                  src="/images/rs.png"
                  className="transform scale-50"
                  alt="Roofstock"
                />
              </h2>
            </div>
            <div className="flex items-center">
              <h1>PROPERTIES</h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
