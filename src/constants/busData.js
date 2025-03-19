// const busData = [
//   {
//     routeFrom: "Delhi",
//     routeTo: "Jaipur",
//     date: "2025-03-20",
//     weekday: ["Monday", "Thursday", "Saturday"],
//     departure_time: "06:00 AM",
//     arrival_time: "11:30 AM",
//     price: 750,
//     bus_type: "AC Sleeper",
//     bus_number: "DL05B1234",
//     transport_name: "Rajdhani Travels",
//     duration: "5h 30m",
//     boarding_point: "Kashmiri Gate",
//     drop_off_point: "Sindhi Camp",
//     rating: 4.5,
//     total_seats: 37,
//     available_seats: 18,
//     driver_name: "Ramesh Kumar",
//     driver_contact: "+91 9876543210",
//     bus_condition: "Good",
//     fuel_type: "Diesel",
//     luggage_capacity: "20kg per passenger",
//     wifi_speed: "50 Mbps",
//     cancellation_policy: "Full refund if canceled 24 hours before departure",
//     ticket_booking_deadline: "2 hours before departure",
//     rest_stop_locations: ["Manesar", "Neemrana", "Shahpura"],
//     estimated_traffic_condition: "Moderate",
//     insurance_coverage: "Included",
//     discount_offers: "10% off for students and senior citizens",
//     loyalty_points: "Earn 5 points per trip",
//     customer_support_contact: "+91 1800 123 4567",
//     bus_facility: "USB Charging Ports and Personal Entertainment Screens",
//     food_availability: "Onboard Meals Available",
//     gps_tracking: "Enabled",
//     eco_friendly: "Low Emission Bus",
//     power_outlets: "Every Seat Has a Power Socket",
//     child_friendly: "Yes, Special Seats Available",
//     pet_friendly: "Not Allowed",
//     senior_citizen_assistance: "Available on Request",
//     driver_experience: "15 years of experience",
//     amenities: [
//       "WiFi",
//       "Water Bottle",
//       "Snacks",
//       "Charging Point",
//       "TV",
//       "Air Conditioning",
//       "Blankets",
//       "Pillow",
//       "Reclining Seats",
//       "Reading Light",
//       "USB Charging Port",
//       "CCTV Security",
//     ],
//     seats: [
//       { id: "B1", status: "Booked" },
//       { id: "B3", status: "Available" },
//       { id: "B5", status: "Booked" },
//       { id: "B7", status: "Available" },
//       { id: "B9", status: "Booked" },
//       { id: "B11", status: "Available" },
//       { id: "B13", status: "Booked" },
//       { id: "B15", status: "Available" },
//       { id: "B17", status: "Booked" },
//       { id: "B2", status: "Available" },
//       { id: "B4", status: "Booked" },
//       { id: "B6", status: "Available" },
//       { id: "B8", status: "Booked" },
//       { id: "B10", status: "Available" },
//       { id: "B12", status: "Booked" },
//       { id: "B14", status: "Available" },
//       { id: "B16", status: "Booked" },
//       { id: "B18", status: "Available" },
//       { id: "19", status: "Booked" },
//       { id: "A1", status: "Available" },
//       { id: "A3", status: "Booked" },
//       { id: "A5", status: "Available" },
//       { id: "A7", status: "Booked" },
//       { id: "A9", status: "Available" },
//       { id: "A11", status: "Booked" },
//       { id: "A13", status: "Available" },
//       { id: "A15", status: "Booked" },
//       { id: "A17", status: "Available" },
//       { id: "A2", status: "Booked" },
//       { id: "A4", status: "Available" },
//       { id: "A6", status: "Booked" },
//       { id: "A8", status: "Available" },
//       { id: "A10", status: "Booked" },
//       { id: "A12", status: "Available" },
//       { id: "A14", status: "Booked" },
//       { id: "A16", status: "Available" },
//       { id: "A18", status: "Booked" },
//     ],
//   },
// ]

// export default busData

const generateBusData = () => {
  const cities = [
    ["Delhi", "Jaipur"],
    ["Mumbai", "Pune"],
    ["Bangalore", "Hyderabad"],
    ["Chennai", "Coimbatore"],
    ["Kolkata", "Bhubaneswar"],
    ["Ahmedabad", "Surat"],
    ["Lucknow", "Kanpur"],
    ["Indore", "Bhopal"],
    ["Hyderabad", "Vijayawada"],
    ["Patna", "Ranchi"],
    ["Delhi", "Chandigarh"],
    ["Mumbai", "Nashik"],
    ["Bangalore", "Mysore"],
    ["Chennai", "Madurai"],
    ["Kolkata", "Durgapur"],
    ["Ahmedabad", "Rajkot"],
    ["Jaipur", "Udaipur"],
    ["Pune", "Nagpur"],
    ["Surat", "Vadodara"],
    ["Bhopal", "Gwalior"],
  ]

  const busTypes = [
    "Deluxe Bus",
    "Express Bus",
    "Volvo Luxury",
    "Electric Bus",
    "Mini Bus",
  ]
  const transportNames = [
    "Rajdhani Travels",
    "Sharma Bus Service",
    "VRL Travels",
    "Orange Tours & Travels",
    "SRS Travels",
    "Parveen Travels",
  ]

  const restStops = [
    ["Manesar", "Neemrana", "Shahpura"],
    ["Lonavala", "Khandala"],
    ["Tumkur", "Chitradurga"],
    ["Vellore", "Krishnagiri"],
    ["Kharagpur", "Baleshwar"],
    ["Anand", "Vadodara"],
  ]

  const amenitiesList = [
    "WiFi",
    "Water Bottle",
    "Charging Point",
    "TV",
    "Blankets",
    "Pillow",
    "Reading Light",
    "USB Charging Port",
    "CCTV Security",
    "Air Conditioning",
    "Reclining Seats",
    "Snacks",
  ]

  const generateRandomSeats = () => {
    const seatOrder = [
      "B1",
      "B3",
      "B5",
      "B7",
      "B9",
      "B11",
      "B13",
      "B15",
      "B17",
      "B2",
      "B4",
      "B6",
      "B8",
      "B10",
      "B12",
      "B14",
      "B16",
      "B18",
      "19",
      "A1",
      "A3",
      "A5",
      "A7",
      "A9",
      "A11",
      "A13",
      "A15",
      "A17",
      "A2",
      "A4",
      "A6",
      "A8",
      "A10",
      "A12",
      "A14",
      "A16",
      "A18",
    ]

    return seatOrder.map((seat) => ({
      id: seat,
      status: Math.random() > 0.5 ? "Booked" : "Available",
    }))
  }

  const generateRandomDate = () => {
    const startDate = new Date(2025, 2, 20) // March 20, 2025
    const endDate = new Date(2025, 3, 30) // April 30, 2025
    const randomTime =
      startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
    return new Date(randomTime).toISOString().split("T")[0]
  }

  const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 12) + 1
    const minutes = Math.random() > 0.5 ? "00" : "30"
    const period = Math.random() > 0.5 ? "AM" : "PM"
    return `${hours}:${minutes} ${period}`
  }

  const generateBuses = () => {
    return Array.from({ length: 50 }, (_, index) => {
      const [from, to] = cities[Math.floor(Math.random() * cities.length)]
      return {
        routeFrom: from,
        routeTo: to,
        date: generateRandomDate(),
        weekday: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          .sort(() => Math.random() - 0.5)
          .slice(0, 3),
        departure_time: generateRandomTime(),
        arrival_time: generateRandomTime(),
        price: Math.floor(Math.random() * 16) * 100 + 500, // Random price between 500 - 1000
        bus_type: busTypes[Math.floor(Math.random() * busTypes.length)],
        bus_number: `DL${String(index + 1).padStart(2, "0")}B${1000 + index}`,
        transport_name:
          transportNames[Math.floor(Math.random() * transportNames.length)],
        duration: `${Math.floor(Math.random() * 5) + 4}h ${
          Math.random() > 0.5 ? "30m" : "0m"
        }`,
        boarding_point: "Main Bus Stand",
        drop_off_point: "City Center",
        rating: (Math.random() * 2 + 3).toFixed(1),
        total_seats: 37,
        available_seats: Math.floor(Math.random() * 30),
        driver_name: `Driver ${index + 1}`,
        driver_contact: `+91 98${Math.floor(
          10000000 + Math.random() * 90000000
        )}`,
        bus_condition: "Good",
        fuel_type: "Diesel",
        luggage_capacity: `${
          Math.floor(Math.random() * 10) + 15
        }kg per passenger`,
        wifi_speed: `${Math.floor(Math.random() * 50) + 20} Mbps`,
        cancellation_policy:
          "Full refund if canceled 24 hours before departure",
        ticket_booking_deadline: "2 hours before departure",
        rest_stop_locations:
          restStops[Math.floor(Math.random() * restStops.length)],
        estimated_traffic_condition: ["Light", "Moderate", "Heavy"][
          Math.floor(Math.random() * 3)
        ],
        insurance_coverage: "Included",
        discount_offers: [
          "10% off for students",
          "5% off for senior citizens",
          "Flat ₹50 off",
        ].sort(() => Math.random() - 0.5)[0],
        loyalty_points: `Earn ${
          Math.floor(Math.random() * 10) + 5
        } points per trip`,
        customer_support_contact: `+91 1800 ${Math.floor(
          100 + Math.random() * 900
        )} ${Math.floor(100 + Math.random() * 900)}`,
        bus_facility: [
          "USB Charging Ports",
          "Personal Entertainment Screens",
          "Extra Legroom",
        ].sort(() => Math.random() - 0.5)[0],
        food_availability:
          Math.random() > 0.5 ? "Onboard Meals Available" : "Snacks Only",
        gps_tracking: "Enabled",
        eco_friendly:
          Math.random() > 0.5 ? "Low Emission Bus" : "Standard Emission",
        power_outlets:
          Math.random() > 0.5
            ? "Every Seat Has a Power Socket"
            : "Limited Charging Ports",
        child_friendly:
          Math.random() > 0.5
            ? "Yes, Special Seats Available"
            : "Limited Child Seats",
        pet_friendly: Math.random() > 0.5 ? "Allowed" : "Not Allowed",
        senior_citizen_assistance:
          Math.random() > 0.5 ? "Available on Request" : "Not Available",
        driver_experience: `${
          Math.floor(Math.random() * 10) + 5
        } years of experience`,
        amenities: amenitiesList
          .sort(() => Math.random() - 0.5)
          .slice(0, Math.floor(Math.random() * 2) + 6),
        seats: generateRandomSeats(),
      }
    })
  }

  return generateBuses()
}

const busData = generateBusData()

export default busData
