import { useEffect, useState } from "react";
import { getProperties } from "../services/properties.service";

export default function usePropertyHook() {
  const [isPropertyLoading, setIsPropertyLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [errors, setErrors] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  useEffect(() => {
    async function loadData() {
      setIsPropertyLoading(true);
      var result = await getProperties();
      if (result) {
        setErrors(result.errors);
        setProperties(result.properties);
        setIsPropertyLoading(false);
        // setTimeout(() => setErrors([]), 5000);
      }
      console.log(result);
    }
    loadData();
  }, []);

  return {
    properties,
    errors,
    setErrors,
    isPropertyLoading,
    selectedProperty,
    setSelectedProperty,
  };
}
