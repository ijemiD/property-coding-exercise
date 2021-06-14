import React from "react";
import * as fieldUtils from "../helpers/fieldsUtil";

export default function PropertyDetail({ selectedProperty }) {
  return (
    selectedProperty && (
      <div className="h-6/12 w-full font-muli">
        <div className="flex flex-col px-7">
          <div className="flex text-xl">
            <b>PROPERTY DETAILS</b>
          </div>
          <div className="grid grid-cols-2 border-b w-auto">
            <div className="container">
              <p>
                {selectedProperty.address1},{selectedProperty.address2}
              </p>
              <p>
                {selectedProperty.city}, {selectedProperty.state},{" "}
                {selectedProperty.zip}{" "}
                {selectedProperty.zip4 ? `-${selectedProperty.zip4}` : ""}
              </p>
            </div>
            <div
              className="container justify-center"
              style={{ textAlign: "right" }}
            >
              <h1>
                <b>List Price</b> -{" "}
                {isNaN(+selectedProperty.financial?.listPrice)
                  ? "Price unavailable"
                  : fieldUtils.formatCurrency(
                      selectedProperty.financial?.listPrice
                    )}
              </h1>

              <p>
                <b>Monthly Rent</b> -{" "}
                {isNaN(+selectedProperty.financial?.monthlyRent)
                  ? "Amount Unavailable"
                  : fieldUtils.formatCurrency(
                      selectedProperty.financial?.monthlyRent
                    )}
              </p>
            </div>
          </div>
          <div className="flex justify-center align-middle border-b pb-0">
            <div className="flex justify-center items-center p-0">
              {selectedProperty.mainImageUrl ? (
                <img
                  className="transform scale-75 p-0"
                  src={selectedProperty.mainImageUrl}
                  alt={selectedProperty.address1}
                />
              ) : (
                <b className="py-3">Picture unavailable</b>
              )}
            </div>
          </div>
          <div className="flex my-1 pb-1 border-b">
            <p>
              <b>DESCRIPTION</b> -{" "}
              {!selectedProperty.description
                ? "Not Available"
                : selectedProperty.description}
            </p>
          </div>
          <div className="flex my-1 pb-1 border-b">
            <p>
              <b>YEAR BUILT</b> -{" "}
              {!selectedProperty.yearBuilt
                ? "Not Available"
                : selectedProperty.yearBuilt}
            </p>
          </div>
        </div>
      </div>
    )
  );
}
