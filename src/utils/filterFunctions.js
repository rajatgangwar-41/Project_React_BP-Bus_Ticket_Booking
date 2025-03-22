// Filter by Search
export const filterBySearch = (data, search) => {
  return search.routeFrom === "" && search.routeTo === "" && search.date === ""
    ? data
    : data.filter(
        (bus) =>
          (search.routeFrom === "" ||
            bus.routeFrom
              .toLowerCase()
              .includes(search.routeFrom.toLowerCase())) &&
          (search.routeTo === "" ||
            bus.routeTo.toLowerCase().includes(search.routeTo.toLowerCase())) &&
          (search.date === "" || bus.date === search.date)
      )
}

// Filter by Price
export const filterByPrice = (data, priceRange) => {
  return data.filter(
    (bus) =>
      bus.price >= priceRange.minPrice && bus.price <= priceRange.maxPrice
  )
}

// Filter by Bus Type
export const filterByBusType = (data, busTypeList) => {
  return busTypeList.length === 0
    ? data
    : data.filter((bus) => busTypeList.includes(bus.busType))
}

// Filter by Bus Company
export const filterByBusCompany = (data, busCompanyList) => {
  return busCompanyList.length === 0
    ? data
    : data.filter((bus) => busCompanyList.includes(bus.busCompany))
}

// Filter by Amenities
export const filterByAmenities = (data, amenitiesList) => {
  return amenitiesList.length === 0
    ? data
    : data.filter((bus) =>
        amenitiesList.every((amenity) => bus.amenities.includes(amenity))
      )
}
