import { busData } from "../constants"

const useFilter = (search) => {
  const filteredData =
    search.routeFrom === "" && search.routeTo === "" && search.date === ""
      ? busData
      : busData.filter(
          (bus) =>
            (search.routeFrom === "" ||
              bus.routeFrom
                .toLowerCase()
                .includes(search.routeFrom.toLowerCase())) &&
            (search.routeTo === "" ||
              bus.routeTo
                .toLowerCase()
                .includes(search.routeTo.toLowerCase())) &&
            (search.date === "" || bus.date.includes(search.date))
        )

  return filteredData
}

export default useFilter
