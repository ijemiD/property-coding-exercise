import React, { useContext } from "react";
import PropertyDetail from "../components/PropertyDetail";
import PropertyList from "../components/PropertyList";
import PropertyContext from "../store/PropertyContext";
import Skeleton from "@material-ui/lab/Skeleton";
import PropertyForm from "./PropertyForm";

export default function MainContent() {
  const {
    properties,
    isPropertyLoading,
    selectedProperty,
    setSelectedProperty,
  } = useContext(PropertyContext);

  return (
    <div className="mx-10 h-full">
      {isPropertyLoading ? (
        <Skeleton animation="wave" height={7} style={{ width: "100%" }} />
      ) : (
        <div className="mt-5">
          <div className="grid grid-cols-2 font-muli gap-3 text-primary justify-between h-full">
            <PropertyList
              properties={properties}
              onPropertySelected={(selectedProperty) => {
                setSelectedProperty(selectedProperty);
              }}
            />
            <div className="flex">
              {selectedProperty ? (
                <div className="border-black border py-3 border-purple-200 border-t-8 rounded">
                  <PropertyDetail selectedProperty={selectedProperty} />
                  <PropertyForm {...selectedProperty} />
                </div>
              ) : (
                <div className="h-full text-center w-full border p-5 border-purple-200 border-t-8 items-center rounded">
                  Click on any of the property to view more details
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
