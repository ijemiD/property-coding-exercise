import React, { useContext } from "react";
import PropertyContext from "../store/PropertyContext";
import Alert from "@material-ui/lab/Alert";
function Header() {
  const { errors, setErrors } = useContext(PropertyContext);

  setTimeout(() => setErrors([]), 5000);
  return (
    <header className="h-21 bg-white border-b border-gray text-primary w-full">
      <div className="flex mx-auto h-full w-full">
        <div className="flex justify-start justify-between items-center h-full mx-9 font-muli my-5">
          <div className="flex items-center cursor-pointer">
            <h2 className="justify-center">
              <img src="/images/rs.png" className="w-6/12" alt="Roofstock" />
            </h2>
          </div>
          <div className="flex items-center uppercase">
            <h1 className="font-semibold">Coding Exercise - Properties</h1>
          </div>
          <div className="flex pl-10 justify-right">
            <div className="justify-right" style={{ textAlign: "right" }}>
              {errors.map((error) => (
                <Alert key="error" severity="error">{error}</Alert>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
