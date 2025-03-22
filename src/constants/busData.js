export const amenitiesList = [
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

const generateBusData = () => {
  const cities = [
    ["Delhi", "Jaipur"],
    ["Delhi", "Mumbai"],
    ["Delhi", "Varanasi"],
    ["Delhi", "Prayagraj"],
    ["Delhi", "Ahemdabad"],
    ["Mumbai", "Goa"],
    ["Mumbai", "Nagpur"],
    ["Mumbai", "Pune"],
    ["Bangalore", "Hyderabad"],
    ["Chennai", "Coimbatore"],
    ["Kolkata", "Bhubaneswar"],
    ["Ahmedabad", "Surat"],
    ["Lucknow", "Kanpur"],
    ["Prayagraj", "Kanpur"],
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

  const busDescriptions = [
    "A comfortable and spacious bus with modern interiors and smooth suspension.",
    "Experience a relaxing journey with ergonomic seats and ample legroom.",
    "A budget-friendly option with essential amenities for a pleasant trip.",
    "Premium luxury bus with extra comfort, charging ports, and onboard snacks.",
    "Eco-friendly electric bus with zero emissions and silent operation.",
    "Well-maintained bus with punctual service and professional drivers.",
    "A fast and efficient bus with minimal stopovers for a quick journey.",
    "A family-friendly bus with entertainment options and clean interiors.",
    "A sleeper-style bus converted into a seated coach for extra comfort.",
    "A well-ventilated non-AC bus perfect for short and medium distances.",
    "A high-speed express bus with priority boarding and fewer stops.",
    "A deluxe bus with soft reclining seats and LED mood lighting.",
    "A modern bus equipped with WiFi, CCTV, and real-time GPS tracking.",
    "A safe and secure bus with an experienced driver and night travel assistance.",
    "A budget express bus with affordable pricing and reliable service.",
    "Spacious luggage compartments and comfortable seats for long journeys.",
    "A pet-friendly bus with dedicated seating and easy boarding facilities.",
    "A smooth-riding electric bus with noise-free travel experience.",
    "A business-class bus with premium seating and laptop charging ports.",
    "A high-tech bus with app-based ticketing and contactless payments.",
    "A tourist-friendly bus with guided announcements and scenic stops.",
    "An overnight travel bus with comfortable push-back seats and blankets.",
    "A low-cost alternative to trains with rapid city connectivity.",
    "A semi-luxury bus offering both affordability and comfort.",
    "A fuel-efficient bus with optimized routes for a hassle-free journey.",
    "A perfectly air-ventilated coach for summer travel and humid conditions.",
    "A reliable intercity transport with multiple boarding points.",
    "An ultra-modern design bus with automatic door operations.",
    "A state-of-the-art bus with cushioned seats and extra aisle space.",
    "An electric vehicle with sustainable travel features and solar panels.",
    "A student-friendly bus with special discounts and flexible timings.",
    "A business commuter's ideal choice with fast internet and workspace.",
    "A festival-special bus with extra legroom and cultural decor.",
    "A senior-citizen-friendly bus with assisted boarding and priority seating.",
    "A VIP-class coach with premium upholstery and personal entertainment.",
    "A ladies-special bus with extra safety features and secure compartments.",
    "A 24/7 emergency travel bus available for urgent bookings.",
    "A sports team-friendly bus with spacious interiors and gear storage.",
    "A rugged, off-road-friendly bus for hilly and adventurous routes.",
    "A fully equipped long-distance bus with rest stops and clean washrooms.",
    "An airline-style bus with reclining seats and footrests for extra comfort.",
    "A fast-track express service with minimum halts and priority exits.",
    "A military-grade bus with reinforced body and high safety standards.",
    "A flexible ticket bus with same-day cancellations and easy refunds.",
    "A corporate-exclusive bus for office commutes and business trips.",
    "A scenic-route bus designed for travelers who love nature.",
    "A wheelchair-accessible bus with special assistance and space.",
    "A family-exclusive bus with child-friendly seating and extra storage.",
    "A double-decker bus with panoramic windows and rooftop seating.",
    "An award-winning bus service known for customer satisfaction and comfort.",
  ]

  const boardingPoints = [
    "Main Bus Stand",
    "City Center Terminal",
    "Railway Station Exit Gate",
    "Airport Shuttle Stop",
    "Metro Station Gate No. 3",
    "Downtown Bus Depot",
    "Mall Parking Lot A",
    "University Main Gate",
    "Tech Park Entrance",
    "Hospital Bus Stop",
  ]

  const dropPoints = [
    "Central Market",
    "Bus Terminal West",
    "Highway Toll Plaza",
    "University Back Gate",
    "Metro Station Gate No. 1",
    "Corporate Tower Exit",
    "Mall Entrance B",
    "Suburban Bus Stand",
    "Residential Complex Gate",
    "Industrial Area Main Stop",
  ]

  const generateRandomDate = () => {
    const startDate = new Date(2025, 2, 20) // March 20, 2025
    const endDate = new Date(2025, 3, 30) // April 30, 2025
    const randomTime =
      startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())

    const randomDate = new Date(randomTime)

    // Format YYYY-MM-DD
    const year = randomDate.getFullYear()
    const month = String(randomDate.getMonth() + 1).padStart(2, "0") // Months are 0-based
    const day = String(randomDate.getDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
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
        id: Math.floor(1000 + Math.random() * 9000),
        routeFrom: from,
        routeTo: to,
        description: busDescriptions[index % busDescriptions.length],
        date: generateRandomDate(),
        weekDay: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          .sort(() => Math.random() - 0.5)
          .slice(0, 3),
        departureTime: generateRandomTime(),
        arrivalTime: generateRandomTime(),
        price: Math.floor(Math.random() * 16) * 100 + 500, // Random price between 500 - 1000
        busType: busTypes[Math.floor(Math.random() * busTypes.length)],
        busNumber: `DL${String(index + 1).padStart(2, "0")}B${1000 + index}`,
        busCompany:
          transportNames[Math.floor(Math.random() * transportNames.length)],
        duration: `${Math.floor(Math.random() * 5) + 4}h ${
          Math.random() > 0.5 ? "30m" : "0m"
        }`,
        boardingPoints: boardingPoints,
        dropOffPoints: dropPoints,
        rating: (Math.random() * 2 + 3).toFixed(1),
        totalSeats: 37,
        availableSeats: Math.floor(Math.random() * 30),
        driverName: `Driver ${index + 1}`,
        driverContact: `+91 98${Math.floor(
          10000000 + Math.random() * 90000000
        )}`,
        busCondition: "Good",
        fuelType: "Diesel",
        luggageCapacity: `${Math.floor(Math.random() * 10) + 15} kg/passenger`,
        wifiSpeed: `${Math.floor(Math.random() * 50) + 20} Mbps`,
        cancellationPolicy: "Full refund if canceled 24 hours before departure",
        ticketBookingDeadline: "2 hours before departure",
        restStopLocations:
          restStops[Math.floor(Math.random() * restStops.length)],
        estimatedTrafficCondition: ["Light", "Moderate", "Heavy"][
          Math.floor(Math.random() * 3)
        ],
        insuranceCoverage: Math.random() > 0.5 ? "Yes" : "No",
        discountOffers: [
          "10% off for students",
          "5% off for senior citizens",
          "Flat ₹50 off",
        ].sort(() => Math.random() - 0.5)[0],
        loyaltyPoints: `Earn ${Math.floor(Math.random() * 10) + 5} points`,
        customerSupportContact: Array.from(
          { length: 2 },
          () =>
            `+91 1800 ${Math.floor(100 + Math.random() * 900)} ${Math.floor(
              100 + Math.random() * 900
            )}`
        ),
        busFacility: [
          "USB Charging Ports",
          "Personal Entertainment Screens",
          "Extra Legroom",
        ].sort(() => Math.random() - 0.5)[0],
        foodAvailability:
          Math.random() > 0.5 ? "Onboard Meals Available" : "Snacks Only",
        gpsTracking: "Enabled",
        ecoFriendly:
          Math.random() > 0.5 ? "Low Emission Bus" : "Standard Emission",
        powerOutlets:
          Math.random() > 0.5
            ? "Every Seat Has a Power Socket"
            : "Limited Charging Ports",
        childFriendly:
          Math.random() > 0.5
            ? "Yes, Special Seats Available"
            : "Limited Child Seats",
        petFriendly: Math.random() > 0.5 ? "Allowed" : "Not Allowed",
        seniorCitizen:
          Math.random() > 0.5 ? "Available on Request" : "Not Available",
        driverExperience: `${Math.floor(Math.random() * 10) + 5} years`,
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
