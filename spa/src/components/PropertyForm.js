import React, { useState, useEffect } from "react";
import * as fieldUtils from "../helpers/fieldsUtil";
import * as appSettings from "../constants/appSettings";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem } from "@material-ui/core";

export default function PropertyForm(props) {
  const [formProperty, setFormProperty] = useState({
    listPrice: 0.0,
    monthlyRent: 0.0,
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    zip4: "",
    county: "",
    country: "",
    district: "",
    builtYear: 0,
  });

  useEffect(() => {
    setFormProperty((prevState) => ({
      ...props,
    }));
  }, [props]);

  // console.log(formProperty);

  const handleChange = (ev) => {
    setFormProperty((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { description, mainImageUrl, ...mainFields } = formProperty;

    console.log(mainFields);
  };

  return (
    <div className="w-full font-muli px-7">
      <div className="flex flex-col mt-3">
        <div className="grid grid-cols-2 items-center text-xl">
          <b>EDIT INFORMATION</b>
        </div>
        <div className="flex flex-col pt-4 justify w-full">
          <form
            noValidate
            autoComplete="off"
            className="flex flex-col align-middle"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2">
              <TextField
                name="address1"
                required
                className="mt-2"
                value={formProperty.address1 || ""}
                label="Address Line 1"
                onChange={handleChange}
              />
              <TextField
                name="address2"
                className="mt-2"
                value={formProperty.address2 || ""}
                label="Address Line 2"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4">
              <TextField
                name="city"
                required
                className="mt-2"
                value={formProperty.city}
                label="City"
                onChange={handleChange}
              />
              <Select
                value={formProperty.state || ""}
                onChange={handleChange}
                className="mt-2"
                displayEmpty
                required
                label="State"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {fieldUtils.usStates.map((state) => (
                  <MenuItem key={state.abbreviation} value={state.abbreviation}>
                    {`${state.abbreviation} - ${state.name}`}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                name="zip"
                required
                className="mt-2"
                value={formProperty.zip}
                label="Zip Code"
                onChange={handleChange}
              />
              <TextField
                name="zip4"
                className="mt-2"
                value={formProperty.zip4 || ""}
                label="Zip + 4"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-3">
              <TextField
                name="county"
                required
                className="mt-2"
                value={formProperty.county || ""}
                label="County"
                onChange={handleChange}
              />
              <TextField
                name="district"
                required
                className="mt-2"
                value={formProperty.district || ""}
                label="District"
                onChange={handleChange}
              />
              <TextField
                name="country"
                required
                className="mt-2"
                value={formProperty.country}
                label="Country"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2">
              <TextField
                name="listPrice"
                className="mt-2"
                value={formProperty.listPrice || 0.0}
                label={`List Price (${appSettings.APP_CURRENCY})`}
                onChange={handleChange}
              />
              <TextField
                name="monthlyRent"
                className="mt-2"
                value={formProperty.monthlyRent || 0.0}
                label={`Monthly Rent (${appSettings.APP_CURRENCY})`}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <TextField
                name="yearBuilt"
                className="mt-2"
                value={formProperty.yearBuilt || 0}
                label="Year Built"
                onChange={handleChange}
              />
              <div className="align-middle h-full">
                <button className="bg-purple-500 text-white h-10 w-3/12 rounded align-middle">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
