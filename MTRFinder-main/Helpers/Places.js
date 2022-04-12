const places_nearby = {
  kennedytown: {
    A: [
      "Caritas Mok Cheung Sui Kun Community Centre",
      "Our Lady of the Rosary Church",
      "Smithfield Municipal Services Building, Academic Terrace",
      "Smithfield Garden",
      "Tresend Garden",
      "University Heights",
      "Mai Wah Court",
      "St. Charles School",
      "Bus Stops",
    ],
    B: [
      "Skyla",
      "Kennedy Town Centre",
      "Belcher Bay Park",
      "Grace and Joy Integrated Family Services Centre",
      "Kennedy Town Community Complex",
      "Lok Kwan Social Service",
      "Belcher's Hill",
      "Harbour View Garden",
      "Hee Wong Terrace",
      "Imperial Kennedy",
      "La Maison Du Nord",
      "Lexington Hill",
      "New Fortune House",
      "Tai Pak Terrace",
      "The Kennedy on Belcher's",
      "Ying Ga Garden",
    ],
    C: [
      "Concord Hotel",
      "HKSKH St. Luke's Settlement",
      "Kennedy Town Jockey Club Clinic",
      "Cadogan",
      "Cayman Rise",
      "Centenary Mansion",
      "Ka On Building",
      "Kwun Lung Lau",
      "Luen Bong Apartment",
      "Manhattan Heights",
      "Mount Davis 33",
      "Sai Wan Estate",
      "Smithfield Court",
      "Smithfield Terrace",
      "The Hudson",
      "The Merton",
      "Island Waldorf School",
      "SKH Lui Ming Choi Memorial Primary School",
      "Bus Stops",
    ],
  },
};

const useNearbyPlaces = (station, exit) => {
  return places_nearby[station][exit];
};

export default useNearbyPlaces;
