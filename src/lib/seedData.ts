export const SEED_ADMINS = [
  {
    name: "The Travel Projekt Admin",
    email: "admin@thetravelprojekt.com",
    // bcrypt hash of "admin123"
    passwordHash: "$2a$10$8K1p/a0dL1LXMIgoEDFrw.u6eH1.R1l.yD5y1a/mX4B30gZ1vYw2S",
    role: "admin",
  },
];

export const SEED_DESTINATIONS = [
  {
    name: "Kashmir",
    slug: "kashmir",
    country: "India",
    region: "Northern Himalayas",
    tagline: "The valley that doesn't look real.",
    description: "Nestled between the snow-capped Peaks of Pir Panjal and Zanskar range, Kashmir offers pristine alpine lakes, vibrant Shikara rides on Dal Lake, pine-carpeted valleys of Pahalgam, and the thrilling gondola rides of Gulmarg.",
    heroImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTime: "March — October",
    idealDuration: "6 — 8 Days",
    startingPrice: 28500,
    budgetRange: "₹25K — ₹60K",
    travelStyles: ["Nature", "Adventure", "Couples", "Photography"],
    highlights: ["Shikara Ride on Dal Lake", "Gulmarg Cable Car Gondola", "Pahalgam Betaab Valley", "Sonamarg Glaciers", "Heritage Houseboat Stay"],
    coordinates: { lat: 34.0837, lng: 74.7973 },
    featured: true,
    published: true,
  },
  {
    name: "Rajasthan",
    slug: "rajasthan",
    country: "India",
    region: "Western Desert",
    tagline: "Colours of the desert and royal whispers.",
    description: "Step into the land of kings with majestic hill forts, golden sand dunes in Jaisalmer, romantic lakeside palaces of Udaipur, and the vibrant indigo lanes of Jodhpur.",
    heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTime: "October — March",
    idealDuration: "7 — 10 Days",
    startingPrice: 32000,
    budgetRange: "₹30K — ₹85K",
    travelStyles: ["Culture", "Luxury", "Food", "Photography"],
    highlights: ["Sunset at Lake Pichola", "Thar Desert Glamping", "Amber Fort Heritage Tour", "Jodhpur Blue City Walk", "Royal Thali Feast"],
    coordinates: { lat: 26.9124, lng: 75.7873 },
    featured: true,
    published: true,
  },
  {
    name: "Kerala",
    slug: "kerala",
    country: "India",
    region: "Southern Coast",
    tagline: "God's own country in emerald greens.",
    description: "Drift along tranquil palm-fringed backwaters on private Kettuvallam houseboats, wander misty tea plantations in Munnar, and listen to the waves in Varkala.",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTime: "September — March",
    idealDuration: "5 — 7 Days",
    startingPrice: 24000,
    budgetRange: "₹22K — ₹55K",
    travelStyles: ["Nature", "Wellness", "Relaxation", "Couples"],
    highlights: ["Alleppey Houseboat Cruise", "Munnar Tea Estate Walk", "Varkala Cliff Sunset", "Periyar Wildlife Sanctuary", "Ayurvedic Spa"],
    coordinates: { lat: 9.9312, lng: 76.2673 },
    featured: true,
    published: true,
  },
  {
    name: "Bali",
    slug: "bali",
    country: "Indonesia",
    region: "Southeast Asia",
    tagline: "Island state of mind and sacred temples.",
    description: "An intoxicating blend of lush terraced rice paddies in Ubud, spiritual water temples, sunset surf sessions in Uluwatu, and serene tropical villa stays.",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTime: "April — October",
    idealDuration: "6 — 9 Days",
    startingPrice: 48000,
    budgetRange: "₹45K — ₹1.2L",
    travelStyles: ["Backpacking", "Couples", "Wellness", "Beach"],
    highlights: ["Tegallalang Rice Terraces", "Mount Batur Sunrise Trek", "Uluwatu Cliff Kecak Fire Dance", "Nusa Penida Island Hopping"],
    coordinates: { lat: -8.4095, lng: 115.1889 },
    featured: true,
    published: true,
  },
  {
    name: "Japan",
    slug: "japan",
    country: "Japan",
    region: "East Asia",
    tagline: "A different world where tradition meets neon future.",
    description: "Walk under cherry blossoms in Kyoto, taste world-class ramen down Tokyo alleyways, view majestic Mount Fuji across Lake Kawaguchiko, and ride the bullet train.",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTime: "March — May & Oct — Nov",
    idealDuration: "8 — 12 Days",
    startingPrice: 125000,
    budgetRange: "₹1.1L — ₹2.8L",
    travelStyles: ["Culture", "Food", "Luxury", "Photography"],
    highlights: ["Kyoto Fushimi Inari Shrine", "Tokyo Shinjuku Neon Night Walk", "Mount Fuji Onsen Stay", "Bullet Train Shinkansen Ride"],
    coordinates: { lat: 35.6762, lng: 139.6503 },
    featured: true,
    published: true,
  },
  {
    name: "Himachal Pradesh",
    slug: "himachal-pradesh",
    country: "India",
    region: "Western Himalayas",
    tagline: "Pinewood scented breezes and valley trails.",
    description: "From hipster cafe vibes in Old Manali to spiritual calmness in Dharamshala and rugged mountain high passes in Spiti Valley.",
    heroImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTime: "March — June & Oct — Dec",
    idealDuration: "6 — 9 Days",
    startingPrice: 22000,
    budgetRange: "₹20K — ₹50K",
    travelStyles: ["Adventure", "Backpacking", "Nature"],
    highlights: ["Solang Valley Paragliding", "McLeod Ganj Monastery Walk", "Kasol Parvati River Trail", "Sethan Igloo Camping"],
    coordinates: { lat: 32.2432, lng: 77.1892 },
    featured: false,
    published: true,
  },
  {
    name: "Meghalaya",
    slug: "meghalaya",
    country: "India",
    region: "North East India",
    tagline: "Abode of clouds and bio-engineered living root bridges.",
    description: "Trek through misty rainforests, swim in crystal glass rivers at Dawki, and marvel at centuries-old living root bridges created by the Khasi tribe.",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTime: "October — April",
    idealDuration: "6 — 8 Days",
    startingPrice: 26000,
    budgetRange: "₹25K — ₹55K",
    travelStyles: ["Nature", "Adventure", "Backpacking"],
    highlights: ["Cherrapunji Double Decker Root Bridge", "Dawki Transparent Umngot River", "Nohkalikai Waterfall", "Mawsynram Cave Trail"],
    coordinates: { lat: 25.5788, lng: 91.8933 },
    featured: false,
    published: true,
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    country: "Vietnam",
    region: "Southeast Asia",
    tagline: "Lantern-lit ancient towns and limestone karsts.",
    description: "Cruise past emerald waters and thousands of towering limestone islands in Ha Long Bay, sip egg coffee in Hanoi, and walk under silk lanterns in Hoi An.",
    heroImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTime: "November — April",
    idealDuration: "7 — 10 Days",
    startingPrice: 42000,
    budgetRange: "₹40K — ₹90K",
    travelStyles: ["Food", "Culture", "Backpacking", "Couples"],
    highlights: ["Ha Long Bay Overnight Luxury Cruise", "Hoi An Ancient Town Lanterns", "Hanoi Old Quarter Pho Tour", "Bana Hills Golden Bridge"],
    coordinates: { lat: 21.0285, lng: 105.8542 },
    featured: true,
    published: true,
  }
];

export const SEED_JOURNEYS = [
  {
    title: "7 Days Kashmir: Paradise Unfolded",
    slug: "7-days-kashmir-paradise-unfolded",
    destinationSlug: "kashmir",
    destinationName: "Kashmir",
    durationDays: 7,
    price: 34999,
    currency: "INR",
    heroImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    summary: "From private houseboat sunsets on Dal Lake to riding the world's second-highest cable car in Gulmarg, experience the best of Kashmir valley.",
    travelStyles: ["Nature", "Adventure", "Couples"],
    maxGroupSize: 10,
    nextDates: ["15 Oct 2026", "02 Nov 2026", "20 Dec 2026"],
    featured: true,
    published: true,
    inclusions: [
      "Luxury Houseboat stay on Dal Lake (1 Night)",
      "Boutique hotel stays in Srinagar, Gulmarg & Pahalgam (5 Nights)",
      "Daily breakfast & dinner included",
      "Private transfers in Sedan / SUV",
      "Gulmarg Gondola Phase 1 Ticket",
      "Shikara ride on Dal Lake at sunset"
    ],
    exclusions: [
      "Flight / Train fare to Srinagar",
      "Pahalgam local union cab for Aru Valley",
      "Personal expenses & tipping"
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: "Srinagar Arrival & Heritage Houseboat Sunset",
        location: "Srinagar / Dal Lake",
        description: "Arrive at Srinagar Airport where your private driver welcomes you. Transfer to a hand-carved cedarwood houseboat on Dal Lake. Enjoy afternoon Kahwa tea followed by a 1-hour sunset Shikara ride.",
        activities: ["Airport pick up", "Check-in to Luxury Houseboat", "Sunset Shikara Ride", "Welcome Kashmiri Dinner"],
        meals: "Dinner included",
        stay: "Royal Houseboat, Dal Lake",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80"
      },
      {
        dayNumber: 2,
        title: "Ascend to Gulmarg: Alpine Meadows & Gondola Ride",
        location: "Gulmarg",
        description: "Drive through pine-scented winding mountain roads to Gulmarg (2,650m). Board the famous Gulmarg Gondola ride climbing to Apharwat Peak for breathtaking views of snow peaks.",
        activities: ["Scenic drive to Gulmarg", "Gondola Cable Car Ride Phase 1 & 2", "Snow activities / Alpine meadow walk"],
        meals: "Breakfast & Dinner",
        stay: "Pine View Resort, Gulmarg",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80"
      },
      {
        dayNumber: 3,
        title: "Pahalgam: The Valley of Shepherds",
        location: "Pahalgam",
        description: "Journey through saffron fields of Pampore and pine forests along the Lidder River to Pahalgam. Relax by the roaring mountain stream.",
        activities: ["Pampore Saffron farm visit", "Lidder River riverside walk", "Evening leisure in Pahalgam market"],
        meals: "Breakfast & Dinner",
        stay: "Lidder River Lodge, Pahalgam",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
      },
      {
        dayNumber: 4,
        title: "Aru Valley, Betaab Valley & Chandanwari",
        location: "Pahalgam Valleys",
        description: "Explore the legendary Betaab Valley named after the Bollywood hit, followed by meadow hikes in Aru Valley and scenic viewpoints.",
        activities: ["Betaab Valley excursion", "Aru Meadow Nature Hike", "Pony ride options"],
        meals: "Breakfast & Dinner",
        stay: "Lidder River Lodge, Pahalgam"
      },
      {
        dayNumber: 5,
        title: "Sonamarg: Golden Meadows & Thajiwas Glacier",
        location: "Sonamarg",
        description: "Head to Sonamarg, gateway to Ladakh. Take a pony or trek to Thajiwas Glacier where snow remains almost all year.",
        activities: ["Sonamarg valley view", "Thajiwas Glacier trek / pony ride", "Kashmiri street tea"],
        meals: "Breakfast & Dinner",
        stay: "Grand Sonamarg Hotel"
      },
      {
        dayNumber: 6,
        title: "Srinagar Mughal Gardens & Old City Food Trail",
        location: "Srinagar Old City",
        description: "Return to Srinagar. Visit Nishat Bagh, Shalimar Bagh, and Jamia Masjid. Indulge in an authentic Wazwan multi-course dinner.",
        activities: ["Mughal Garden stroll", "Old City heritage walk", "Kashmiri Wazwan dinner experience"],
        meals: "Breakfast & Traditional Wazwan Dinner",
        stay: "Boutique Heritage Hotel, Srinagar"
      },
      {
        dayNumber: 7,
        title: "Souvenir Shopping & Farewell",
        location: "Srinagar Airport",
        description: "Pick up hand-woven Pashmina shawls, dried fruits, and saffron before heading to Srinagar airport with unforgettable memories.",
        activities: ["Morning souvenir shopping", "Airport departure drop"],
        meals: "Breakfast included"
      }
    ]
  },
  {
    title: "8 Days Royal Rajasthan: Palaces & Thar Dunes",
    slug: "8-days-royal-rajasthan-palaces-dunes",
    destinationSlug: "rajasthan",
    destinationName: "Rajasthan",
    durationDays: 8,
    price: 39500,
    currency: "INR",
    heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    summary: "Experience Pink City Jaipur, romantic Udaipur lakes, and an unforgettable night glamping under desert stars in Jaisalmer.",
    travelStyles: ["Culture", "Luxury", "Food"],
    maxGroupSize: 12,
    nextDates: ["10 Nov 2026", "05 Dec 2026", "18 Jan 2027"],
    featured: true,
    published: true,
    inclusions: [
      "Palace & heritage hotel stays (7 Nights)",
      "Desert Glamping Camp in Sam Dunes with Folk Dance & BBQ",
      "Private air-conditioned SUV with experienced driver",
      "Guided fort tours in Jaipur, Jodhpur & Jaisalmer",
      "Private boat cruise on Lake Pichola, Udaipur"
    ],
    exclusions: ["Monument entrance tickets", "Flight to Jaipur / drop from Udaipur"],
    itinerary: [
      {
        dayNumber: 1,
        title: "Jaipur Arrival & Hawa Mahal Evening Walk",
        location: "Jaipur",
        description: "Arrive in Jaipur Pink City. Explore Hawa Mahal facade and sample local Ghewar sweets at Johri Bazaar.",
        activities: ["Check-in heritage Haveli", "Pink city bazaar walk", "Sunset at Nahargarh Fort"],
        meals: "Dinner included",
        stay: "Shahpura House Haveli, Jaipur"
      },
      {
        dayNumber: 2,
        title: "Amber Fort & City Palace",
        location: "Jaipur",
        description: "Explore the hilltop Amber Fort, Sheesh Mahal mirror palace, and the royal observatories of Jantar Mantar.",
        activities: ["Amber Fort tour", "City Palace museum visit", "Block printing workshop"],
        meals: "Breakfast & Dinner",
        stay: "Shahpura House Haveli, Jaipur"
      },
      {
        dayNumber: 3,
        title: "Jodhpur Blue City & Mehrangarh Fort",
        location: "Jodhpur",
        description: "Drive to Jodhpur. Gaze down from Mehrangarh Fort onto thousands of indigo blue houses.",
        activities: ["Mehrangarh Fort walk", "Blue City photo trail", "Jaswant Thada sunset"],
        meals: "Breakfast & Dinner",
        stay: "RAAS Jodhpur Heritage Hotel"
      },
      {
        dayNumber: 4,
        title: "Journey to Jaisalmer Golden City",
        location: "Jaisalmer",
        description: "Cross desert roads to the living fort city of Jaisalmer built entirely from yellow sandstone.",
        activities: ["Jaisalmer Fort living ramparts tour", "Patwon Ki Haveli inspection"],
        meals: "Breakfast & Dinner",
        stay: "Fort Heritage Resort"
      },
      {
        dayNumber: 5,
        title: "Thar Desert Sunset & Glamping Night",
        location: "Sam Sand Dunes",
        description: "Camel ride across the golden waves of Sam Sand Dunes, Kalbeliya folk dance performance around bonfire, and stargazing.",
        activities: ["Camel safari", "4x4 Dune Bashing", "Desert cultural show & BBQ dinner"],
        meals: "Breakfast & Desert Feast Dinner",
        stay: "Luxury Desert Glamping Camp"
      },
      {
        dayNumber: 6,
        title: "Drive to Lake City Udaipur",
        location: "Udaipur",
        description: "Scenic drive through Aravalli hills with a stop at Ranakpur Marble Jain Temple.",
        activities: ["Ranakpur temple visit", "Check-in lakeside hotel"],
        meals: "Breakfast & Dinner",
        stay: "Lake Pichola Hotel, Udaipur"
      },
      {
        dayNumber: 7,
        title: "Udaipur Palace & Romantic Lake Cruise",
        location: "Udaipur",
        description: "Explore City Palace complex and take a sunset boat ride past Taj Lake Palace to Jagmandir Island.",
        activities: ["Udaipur City Palace tour", "Lake Pichola sunset boat cruise", "Rooftop candlelight dinner"],
        meals: "Breakfast & Dinner",
        stay: "Lake Pichola Hotel, Udaipur"
      },
      {
        dayNumber: 8,
        title: "Farewell Rajasthan",
        location: "Udaipur Airport",
        description: "Transfer to Udaipur airport for your onward journey.",
        activities: ["Airport drop"],
        meals: "Breakfast included"
      }
    ]
  },
  {
    title: "6 Days Bali: Tropics & Island Magic",
    slug: "6-days-bali-tropics-island-magic",
    destinationSlug: "bali",
    destinationName: "Bali",
    durationDays: 6,
    price: 52000,
    currency: "INR",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    summary: "Ubud jungle pool villas, Nusa Penida Kelingking beach, Kecak fire dances, and sunset beach clubs in Seminyak.",
    travelStyles: ["Backpacking", "Couples", "Wellness"],
    maxGroupSize: 8,
    nextDates: ["12 Nov 2026", "10 Dec 2026", "14 Jan 2027"],
    featured: true,
    published: true,
    inclusions: [
      "Private Pool Villa in Ubud (3 Nights)",
      "Beachfront Hotel in Seminyak (2 Nights)",
      "Speedboat transfer & day tour to Nusa Penida",
      "Mount Batur sunrise jeep safari",
      "Daily breakfast & airport transfers"
    ],
    exclusions: ["Flight tickets to Denpasar Bali", "Indonesia Visa on Arrival fee ($35)"],
    itinerary: [
      {
        dayNumber: 1,
        title: "Denpasar Arrival & Ubud Jungle Villa Check-in",
        location: "Ubud",
        description: "Arrive at Ngurah Rai International Airport. Private transfer to your jungle villa in Ubud.",
        activities: ["Airport pick up", "Villa check-in", "Balinese flower massage"],
        meals: "Dinner included",
        stay: "Ubud Private Pool Villa"
      },
      {
        dayNumber: 2,
        title: "Rice Terraces, Jungle Swing & Monkey Forest",
        location: "Ubud",
        description: "Stroll through Tegallalang Rice Terraces, take the famous Bali swing over lush canopy, and meet sacred monkeys.",
        activities: ["Tegallalang Rice Terrace walk", "Bali Jungle Swing", "Sacred Monkey Forest"],
        meals: "Breakfast included",
        stay: "Ubud Private Pool Villa"
      },
      {
        dayNumber: 3,
        title: "Mount Batur Sunrise Jeep & Holy Water Temple",
        location: "Kintamani",
        description: "Early morning 4x4 Jeep ride up Mount Batur volcano crater for sunrise over volcanic clouds, followed by Tirta Empul water purification ritual.",
        activities: ["Mount Batur Sunrise Jeep", "Natural Hot Spring bath", "Tirta Empul Holy Temple"],
        meals: "Breakfast included",
        stay: "Ubud Private Pool Villa"
      },
      {
        dayNumber: 4,
        title: "Nusa Penida Island Day Tour",
        location: "Nusa Penida",
        description: "Fast boat to Nusa Penida island. Visit T-Rex shaped Kelingking Beach, Broken Beach, and Angel's Billabong.",
        activities: ["Fast boat cruise", "Kelingking Beach viewpoint", "Angel's Billabong swim"],
        meals: "Breakfast & Lunch included",
        stay: "Seminyak Beach Resort"
      },
      {
        dayNumber: 5,
        title: "Uluwatu Cliff Kecak Dance & Beach Club Sunset",
        location: "Seminyak & Uluwatu",
        description: "Visit Uluwatu cliffside temple, watch dramatic Kecak fire dance at sunset, and head to Potato Head Beach Club.",
        activities: ["Uluwatu Temple visit", "Sunset Kecak Fire Dance", "Seminyak Beach Club dinner"],
        meals: "Breakfast included",
        stay: "Seminyak Beach Resort"
      },
      {
        dayNumber: 6,
        title: "Souvenir Shopping & Farewell Bali",
        location: "Denpasar Airport",
        description: "Pick up Balinese coffee and handicrafts before airport drop.",
        activities: ["Souvenir shopping", "Airport drop"],
        meals: "Breakfast included"
      }
    ]
  }
];

export const SEED_EXPERIENCES = [
  {
    title: "Shikara Sunset Tea Ride on Dal Lake",
    location: "Srinagar, Kashmir",
    category: "Couples",
    description: "Glissade through floating lotus gardens and water markets as the sun dips behind snow peaks.",
    duration: "2 Hours",
    startingPrice: 1500,
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
    featured: true,
    published: true,
  },
  {
    title: "Thar Desert Stargazing & Glamping",
    location: "Jaisalmer, Rajasthan",
    category: "Adventure",
    description: "Spend a magical night in luxury tents with Manganiyar folk musicians playing around a desert bonfire.",
    duration: "Overnight",
    startingPrice: 6500,
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
    featured: true,
    published: true,
  },
  {
    title: "Alleppey Backwater Houseboat Dinner Cruise",
    location: "Alleppey, Kerala",
    category: "Relaxation",
    description: "Savor fresh Karimeen fish curry and coconut water while floating past lush paddy fields.",
    duration: "1 Day / 1 Night",
    startingPrice: 8000,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    featured: true,
    published: true,
  },
  {
    title: "Mount Batur Volcano Sunrise 4x4 Safari",
    location: "Kintamani, Bali",
    category: "Adventure",
    description: "Ascend active volcanic black lava fields in an open top 4x4 Jeep to watch dawn break over Mount Agung.",
    duration: "6 Hours",
    startingPrice: 4500,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    featured: true,
    published: true,
  },
  {
    title: "Tokyo Shinjuku Ramen & Izakaya Food Trail",
    location: "Tokyo, Japan",
    category: "Food",
    description: "Dodge down narrow Omoide Yokocho alleyways to sample charcoal yakitori and rich tonkotsu ramen broth.",
    duration: "3.5 Hours",
    startingPrice: 7500,
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    featured: true,
    published: true,
  },
  {
    title: "Cherrapunji Living Root Bridge Trek",
    location: "Sohra, Meghalaya",
    category: "Nature",
    description: "Descend 3,000 steps through lush jungle to cross ancient double-decker root bridges entwined over turquoise river pools.",
    duration: "Full Day",
    startingPrice: 3200,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    featured: true,
    published: true,
  }
];

export const SEED_ARTICLES = [
  {
    title: "7 Days in Kashmir: The Complete Itinerary That Doesn't Rush You",
    slug: "7-days-in-kashmir-complete-itinerary",
    category: "Travel Guides",
    author: {
      name: "Aarav Sharma",
      role: "Lead Travel Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    readTime: "6 min read",
    publishedAt: "August 10, 2026",
    coverImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Forget packed tour buses. Here is how to experience Kashmir slowly—houseboat mornings, hidden pine trails, and authentic Wazwan feasts.",
    content: `
Kashmir is not just a place on a map; it is a sensory shift. The moment your plane descends into Srinagar valley surrounded by the towering snow peaks of Pir Panjal, you realise why Mughal Emperor Jehangir declared: *"If there is a paradise on earth, it is this, it is this, it is this."*

### Why Slow Travel Matters in Kashmir

Most commercial travel packages try to squeeze 5 places into 4 days. You spend half your vacation inside cars on mountain bends. At **The Travel Projekt**, we believe in breathing space. Wake up early on your houseboat to watch the lotus flowers open on Dal Lake. Spend two full days in Pahalgam doing nothing more stressful than watching the Lidder river rush past your tea cup.

### Day 1 & 2: Houseboat Living & Old City Walks
Skip the generic hotel on night one. Stay on a wooden houseboat crafted from fragrant cedarwood. Sunset Shikara rides are famous, but early morning 6:00 AM vegetable market rides are where real local life happens.

### Day 3 & 4: The High Alpine Meadows of Gulmarg
Take the Gondola cable car to Phase 2 (Apharwat Peak at 4,390m). Even in late spring, snow patches linger. Hike down through pine forests and grab hot Kashmiri Kahwa tea spiked with saffron and crushed almonds.
    `,
    relatedDestinationSlugs: ["kashmir"],
    featured: true,
    published: true,
  },
  {
    title: "How to Plan a Rajasthan Trip Without Getting Fort Fatigue",
    slug: "how-to-plan-rajasthan-trip-without-fort-fatigue",
    category: "Stories",
    author: {
      name: "Rhea Kapoor",
      role: "Culture Specialist",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    },
    readTime: "8 min read",
    publishedAt: "July 28, 2026",
    coverImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    excerpt: "After visiting 5 forts in 3 days, everything starts blending together. Here is our secret guide to mixing desert glamping, lake sunsets, and blue city walks.",
    content: `
Rajasthan has over 100 historical forts and palaces. If you attempt to visit all of them in one single vacation, you will return with "Fort Fatigue"—where every sandstone wall starts looking identical.

### Balance History With Experiential Moments
Instead of visiting three monuments a day, pick ONE marquee fort per city. In Jaipur, Amber Fort is unmissable. In Jodhpur, Mehrangarh Fort reigns supreme. Spend the rest of your afternoons sipping sunset cocktails overlooking Lake Pichola in Udaipur or stargazing atop Thar Desert dunes.
    `,
    relatedDestinationSlugs: ["rajasthan"],
    featured: true,
    published: true,
  }
];

export const SEED_ENQUIRIES = [
  {
    name: "Kabir Malhotra",
    email: "kabir@example.com",
    phone: "+91 98765 43210",
    destination: "Kashmir",
    travelDates: "October 2026",
    travellers: 2,
    budget: "₹50,000 - ₹80,000",
    travelStyle: ["Nature", "Couples"],
    message: "Planning a anniversary trip for 6 days. Looking for luxury houseboat + boutique stays.",
    status: "NEW",
    createdAt: new Date("2026-08-11T10:00:00Z"),
  },
  {
    name: "Ananya Deshmukh",
    email: "ananya@example.com",
    phone: "+91 91234 56789",
    destination: "Bali",
    travelDates: "December 2026",
    travellers: 4,
    budget: "₹1,50,000 - ₹2,00,000",
    travelStyle: ["Wellness", "Relaxation"],
    message: "Friends trip. Need private pool villa in Ubud + Nusa Penida day trip.",
    status: "CONTACTED",
    createdAt: new Date("2026-08-09T14:30:00Z"),
  }
];
