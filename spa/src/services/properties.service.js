import { REST_API_URI, SAMPLE_API_URI } from "../constants/backEnd";

export async function getProperties() {
  const result = {
    properties: [],
    errors: [],
  };
  try {
    const res = await fetch(SAMPLE_API_URI)
        .then((response) => response.json())
        .map(prop => {
         const result = getById(prop.id);
          return {
            ...prop,
            fromApi: result.property || {},
          };
        });
 //   result.properties = ;
    res.properties.map((property) => ({
      id: property.id,
      address1: property.address.address1,
      address2: property.address.address2,
      builtYear: property.physical?.yearBuilt || 0,
      city: property.address.city,
      state: property.address.state,
      zip: property.address.zip,
      zip4: property.address.zip4,
      county: property.address.county,
      district: property.address.district,
      country: property.address.country,
      listPrice: property.financial?.listPrice || 0,
      monthlyRent: property.financial?.monthlyRent || 0,
      description: property.description,
      mainImageUrl: property.mainImageUrl,
      fromApi: property.fromApi
    }))
  } catch (e) {
    result.errors.push(`An error occurred while loading properties - ${e}`);
  }
  return result;
}

export async function getAll() {
  const result = {
    errors: [],
    properties: [],
  };
  try {
    const response = await fetch(REST_API_URI);
    const res = await response.json();
    result.properties = res;
  } catch (e) {
    result.errors.push(e);
  }
  return result;
}

export async function getById(id) {
  const result = {
    errors: [],
    property: {},
  };
  try {
    const response = await fetch(`${REST_API_URI}${id}`);
    const res = await response.json();
    result.property = res;
  } catch (e) {
    result.errors.push(e);
  }
  return result;
}

export async function updateProperty({ id, ...property }) {
  const result = {
    errors: [],
    data: "",
  };
  try {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: property,
    };
    const response = await fetch(`${REST_API_URI}${property.id}`, options);
    const res = await response.json();
    result.data = res;
  } catch (e) {
    result.errors.push(e);
  }
}

export async function createProperty(property) {
  const result = {
    errors: [],
    data: "",
  };
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        propertyId: property.id,
        builtYear: property.yearBuilt,
        listPrice: property.listPrice,
        monthlyRent: property.monthlyRent,
        address1: property.address1,
        address2: property.address2,
        city: property.city,
        state: property.state,
        zip: property.zip,
        zip4: property.zip4,
        county: property.county,
        district: property.district,
        country: property.country,
      },
    };
    const response = await fetch(REST_API_URI, options);
    const res = await response.json();
    result.data = res;
  } catch (e) {
    result.errors.push(e);
  }
}
