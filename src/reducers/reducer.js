import {
  filterByPrice,
  filterByBusType,
  filterByBusCompany,
  filterByAmenities,
  filterBySearch,
} from "../utils/filterFunctions"
import { debounce } from "lodash"

const INITIAL_MIN_VALUE = 500
const INITIAL_MAX_VALUE = 2000

const debouncedFilterByPrice = debounce((data, minPrice, maxPrice) => {
  return filterByPrice(data, minPrice, maxPrice)
}, 300) // Adjust debounce delay as needed

export const initialState = {
  originalData: null, // Keep original data safe
  filteredData: null, // This changes when filters apply
  userTravelData: null,
  search: {
    routeFrom: "",
    routeTo: "",
    date: "",
  },
  priceRange: {
    minPrice: INITIAL_MIN_VALUE,
    maxPrice: INITIAL_MAX_VALUE,
  },
  busTypeList: [],
  busCompanyList: [],
  amenitiesList: [],
}

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORIGINAL_DATA":
      return {
        ...state,
        originalData: action.payload,
        filteredData: action.payload,
      }

    case "SET_USER_TRAVEL_DATA":
      return {
        ...state,
        userTravelData: {
          ...state.userTravelData,
          ...action.payload,
        },
      }

    case "SET_SEARCH":
      return {
        ...state,
        search: {
          ...state.search,
          ...action.payload,
        },
      }

    case "SET_PRICE_RANGE":
      return {
        ...state,
        priceRange: action.payload,
      }

    case "SET_BUS_TYPE_LIST":
      return {
        ...state,
        busTypeList: state.busTypeList.includes(action.payload)
          ? state.busTypeList.filter((busType) => busType !== action.payload)
          : [...state.busTypeList, action.payload],
      }

    case "SET_BUS_COMPANY_LIST":
      return {
        ...state,
        busCompanyList: state.busCompanyList.includes(action.payload)
          ? state.busCompanyList.filter(
              (busCompany) => busCompany !== action.payload
            )
          : [...state.busCompanyList, action.payload],
      }

    case "SET_AMENITIES_LIST":
      return {
        ...state,
        amenitiesList: state.amenitiesList.includes(action.payload)
          ? state.amenitiesList.filter((amenity) => amenity !== action.payload)
          : [...state.amenitiesList, action.payload],
      }

    case "APPLY_FILTER": {
      let updatedData = state.originalData
      updatedData = filterBySearch(updatedData, state.search)
      // updatedData = filterByPrice(
      //   updatedData,
      //   state.priceRange.minPrice,
      //   state.priceRange.maxPrice
      // )
      updatedData = filterByBusType(updatedData, state.busTypeList)
      updatedData = filterByBusCompany(updatedData, state.busCompanyList)
      updatedData = filterByAmenities(updatedData, state.amenitiesList)
      // console.log(updatedData)
      // Apply debounced filter for price
      // debouncedFilterByPrice(
      //   updatedData,
      //   state.priceRange.minPrice,
      //   state.priceRange.maxPrice
      // ).then((filteredData) => {
      //   return { ...state, filteredData } // Update state after debounce
      // })

      // return { ...state } // Keep state unchanged while debounce runs

      return { ...state, filteredData: updatedData }
    }

    case "RESET":
      return {
        ...state,
        search: {
          routeFrom: "",
          routeTo: "",
          date: "",
        },
        priceRange: {
          minPrice: INITIAL_MIN_VALUE,
          maxPrice: INITIAL_MAX_VALUE,
        },
        busTypeList: [],
        busCompanyList: [],
        amenitiesList: [],
        filteredData: state.originalData,
      }

    default:
      return state
  }
}
