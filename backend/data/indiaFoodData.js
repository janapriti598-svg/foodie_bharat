// Comprehensive Indian Culinary Dataset: All 28 States & 8 Union Territories
// Includes dishes with images, ratings, elevation, cities, cultural trivia, coordinates, festivals, reels, restaurants, and passport badges

const STATES_AND_UTS = [
  // --- NORTH INDIA ---
  {
    id: "jammu-and-kashmir",
    name: "Jammu and Kashmir",
    type: "UT",
    region: "North",
    capital: "Srinagar (Summer) / Jammu (Winter)",
    language: "Kashmiri, Dogri, Urdu",
    banner: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=900&auto=format&fit=crop&q=80",
    description: "Paradise on Earth with royal culinary heritage featuring the grand 36-course Wazwan, aromatic Rogan Josh, and fragrant Kahwa brewed with saffron from Pampore.",
    culture: "Kashmiri cuisine is deeply influenced by Central Asian, Persian, and Afghan flavors. Cooking involves slow simmering with dry ginger (sonth), fennel (saunf), and royal Kashmiri chillies.",
    famousDishes: ["Rogan Josh", "Dum Aloo Kashmiri", "Gushtaba", "Kahwa Tea", "Modur Pulao", "Tabak Maaz", "Kashmiri Saag"],
    streetFoods: ["Kaladi Kulcha", "Tujji Kebabs", "Nadroo Monje", "Sheermal"],
    dishesDetailed: [
      {
        id: "rogan-josh",
        name: "Rogan Josh",
        image: "/images/food/rogan-josh.jpg",
        category: "Main Course",
        veg: false,
        spiceLevel: 3,
        rating: 4.95,
        description: "Tender lamb braised in aromatic gravy of Kashmiri red chillies, fennel, and ratan jot root.",
        price: "₹450"
      },
      {
        id: "kashmiri-dum-aloo",
        name: "Kashmiri Dum Aloo",
        image: "/images/food/dum-aloo.jpg",
        category: "Main Course",
        veg: true,
        spiceLevel: 3,
        rating: 4.88,
        description: "Baby potatoes deep-fried and slow-cooked in a rich yogurt and fennel-infused red gravy.",
        price: "₹280"
      },
      {
        id: "kahwa-tea",
        name: "Saffron Kahwa",
        image: "/images/food/kahwa.jpg",
        category: "Drinks",
        veg: true,
        spiceLevel: 0,
        rating: 4.92,
        description: "Green tea brewed with Pampore saffron strands, green cardamom, cinnamon, and crushed almonds.",
        price: "₹140"
      }
    ],
    cities: [
      { id: "srinagar", name: "Srinagar", famousDish: "Wazwan Feast", description: "Lakeside food stalls and royal Wazwan master chefs (Wazas)." },
      { id: "jammu", name: "Jammu", famousDish: "Kaladi Kulcha", description: "Famous for traditional ripened Himalayan cheese treats." }
    ],
    coordinates: { x: 34, y: 14 },
    color: "#E06D53",
    elevation: "1,585 m"
  },
  {
    id: "punjab",
    name: "Punjab",
    type: "State",
    region: "North",
    capital: "Chandigarh",
    language: "Punjabi",
    banner: "/images/food/punjab.jpg",
    description: "Land of five rivers and golden wheat fields. Celebrated for rich Makki di Roti, Sarson da Saag, Butter Chicken, and frothy tall glasses of Lassi.",
    culture: "Punjabi cuisine is vibrant, hearty, and full of generous dollops of homemade white butter (Makhan) and slow-cooked tandoori marinades.",
    famousDishes: ["Butter Chicken", "Sarson Da Saag & Makki Di Roti", "Dal Makhani", "Amritsari Kulcha", "Paneer Tikka", "Chole Bhature"],
    streetFoods: ["Amritsari Fish Fry", "Chole Kulche", "Gol Gappe", "Sweet Lassi in Matka"],
    dishesDetailed: [
      {
        id: "amritsari-kulcha",
        name: "Amritsari Stuffed Kulcha",
        image: "/images/food/kulcha.jpg",
        category: "Street Food",
        veg: true,
        spiceLevel: 3,
        rating: 4.95,
        description: "Multi-layered tandoor bread stuffed with spicy potato and pomegranate seeds, topped with white butter.",
        price: "₹160"
      },
      {
        id: "butter-chicken-punjab",
        name: "Original Punjabi Butter Chicken",
        image: "/images/food/butter-chicken.jpg",
        category: "Main Course",
        veg: false,
        spiceLevel: 2,
        rating: 4.93,
        description: "Tandoori roasted chicken submerged in a silky tomato, cashew, butter, and dried fenugreek gravy.",
        price: "₹420"
      }
    ],
    cities: [
      { id: "amritsar", name: "Amritsar", famousDish: "Amritsari Kulcha & Lassi", description: "Culinary capital around the Golden Temple with legendary centuries-old dhabas." }
    ],
    coordinates: { x: 30, y: 23 },
    color: "#F59E0B",
    elevation: "234 m"
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    type: "State",
    region: "East",
    capital: "Kolkata",
    language: "Bengali",
    banner: "https://images.unsplash.com/photo-1558431382-27e303142255?w=900&auto=format&fit=crop&q=80",
    description: "The Sweet & Cultural Capital of India! Rosogolla, Shorshe Ilish, Kolkata Biryani with potato, and crispy Kathi Rolls.",
    culture: "Bengalis treat food as an art form. The panch phoron spice mix, mustard oil pungency, freshwater fish reverence, and world-class confectionary are unmatched.",
    famousDishes: ["Shorshe Ilish (Hilsa in Mustard)", "Kolkata Biryani", "Kosha Mangsho", "Rosogolla", "Mishti Doi", "Chingri Malai Curry"],
    streetFoods: ["Kolkata Kathi Roll", "Phuchka with Gondhoraj lime", "Mughlai Paratha", "Telebhaja", "Ghugni Chaat"],
    dishesDetailed: [
      {
        id: "kolkata-biryani",
        name: "Kolkata Mutton Biryani",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80",
        category: "Main Course",
        veg: false,
        spiceLevel: 2,
        rating: 4.98,
        description: "Fragrant basmati rice infused with saffron, mace, kewra water, tender mutton, and the iconic golden potato.",
        price: "₹380"
      },
      {
        id: "shorshe-ilish",
        name: "Shorshe Ilish (Hilsa in Mustard)",
        image: "/images/food/shorshe-ilish.jpg",
        category: "Regional Cuisine",
        veg: false,
        spiceLevel: 4,
        rating: 4.96,
        description: "Fresh queen Hilsa fish steamed in a pungent paste of yellow and black mustard, green chillies, and mustard oil.",
        price: "₹550"
      },
      {
        id: "bengal-rosogolla",
        name: "Kolkata Spongy Rosogolla",
        image: "/images/food/rasgulla.jpg",
        category: "Sweets",
        veg: true,
        spiceLevel: 0,
        rating: 4.95,
        description: "Pristine cottage cheese balls simmered in light sugar syrup until light, spongy, and dripping with nectar.",
        price: "₹120"
      }
    ],
    cities: [
      { id: "kolkata", name: "Kolkata", famousDish: "Kolkata Biryani & Rosogolla", description: "The City of Joy where every street corner is a gastronomic celebration." }
    ],
    coordinates: { x: 67, y: 46 },
    color: "#2563EB",
    elevation: "9 m"
  }
];

// Featured Culinary Delicacies
const FEATURED_FOODS = [
  {
    id: "kolkata-biryani",
    name: "Kolkata Mutton Biryani",
    state: "West Bengal",
    stateId: "west-bengal",
    city: "Kolkata",
    category: "Main Course",
    veg: false,
    spiceLevel: 2,
    rating: 4.98,
    reviewsCount: 1420,
    priceRange: "₹250 - ₹450",
    calories: "580 kcal",
    prepTime: "2 hours",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=900&auto=format&fit=crop&q=80",
    description: "A royal Awadhi legacy brought to Bengal by exiled Nawab Wajid Ali Shah. Characterized by tender meat, fragrant long-grain Basmati rice infused with saffron, mace, kewra water, and the iconic melt-in-mouth golden potato and boiled egg.",
    history: "In 1856, when Nawab Wajid Ali Shah was exiled from Lucknow to Metiabruz in Kolkata, his royal bawarchis adapted their beloved biryani by adding potatoes.",
    ingredients: ["Long Grain Basmati Rice", "Tender Mutton", "Golden Spiced Potato", "Boiled Egg", "Saffron in Warm Milk", "Kewra Water & Meetha Attar", "Ghee"],
    preparation: "1. Marinate mutton in yogurt, ginger-garlic paste, and fried onions.\n2. Parboil soaked basmati rice with whole spices.\n3. Fry large potatoes till golden and simmer in spiced broth.\n4. Layer mutton, potatoes, fragrant rice, saffron milk, and kewra attar.\n5. Seal with dough and slow cook on Dum for 45 minutes.",
    nutrition: { carbs: "65g", protein: "32g", fat: "22g", fiber: "4g" },
    topRestaurants: [
      { name: "Arsalan (Park Circus)", rating: 4.8, address: "136, Marina Towers, Park Circus, Kolkata" },
      { name: "Royal Indian Hotel", rating: 4.7, address: "147, Rabindra Sarani, Chitpur, Kolkata" }
    ]
  }
];

const FOOD_CATEGORIES = [
  { id: "all", name: "All Foods", icon: "✨", color: "#F59E0B" },
  { id: "main-course", name: "Main Course", icon: "🍛", color: "#EF4444" },
  { id: "regional-cuisine", name: "Regional Cuisine", icon: "🍜", color: "#8B5CF6" },
  { id: "street-food", name: "Street Food", icon: "🍢", color: "#F97316" }
];

const FESTIVAL_FOODS = [
  {
    id: "durga-puja",
    name: "Durga Puja Bhog & Feasts",
    festival: "Durga Puja",
    season: "Autumn (Sept-Oct)",
    banner: "/images/food/durga-puja.jpg",
    description: "The grand 5-day celebration of Ma Durga with divine Khichuri Bhog, Labra, Luchi with Cholar Dal, and Mishti Doi.",
    keyDishes: ["Khichuri & Beguni", "Cholar Dal with Coconut", "Kosha Mangsho", "Rosogolla & Sandesh"],
    states: ["West Bengal", "Tripura", "Assam", "Odisha"]
  }
];

const FOOD_REELS = [
  {
    id: "reel-1",
    creator: {
      name: "Chef Ranveer Brar Fans",
      handle: "@ranveer_flavors",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&auto=format&fit=crop&q=80",
      verified: true
    },
    title: "Secret to 100-Layer Amritsari Kulcha in Clay Tandoor 🔥",
    dishName: "Amritsari Kulcha",
    state: "Punjab",
    city: "Amritsar",
    likes: "128.4K",
    comments: "2,420",
    shares: "18.2K",
    audioTrack: "Original Culinary Audio - Punjabi Dhaba Beats",
    videoThumbnail: "/images/food/kulcha.jpg",
    description: "Watch how master chefs laminate the dough with desi ghee and roast it in the searing heat of a charcoal tandoor! 🤤🧈"
  }
];

const PASSPORT_BADGES = [
  {
    id: "badge-bengal",
    name: "Bengal Sweet Connoisseur",
    icon: "🍨",
    color: "#2563EB",
    state: "West Bengal",
    requiredDishes: 5,
    description: "Explore the sweet legacy of Rosogolla, Mishti Doi, and Shorshe Ilish.",
    unlocked: true,
    earnedDate: "2026-03-12"
  }
];

const FOOD_JOURNEY_STOPS = [
  {
    id: "stop-1",
    title: "Stop 1: Saffron Valley of Kashmir",
    state: "Jammu and Kashmir",
    city: "Srinagar",
    icon: "🏔️",
    elevation: "1,585m",
    unlocked: true,
    specialty: "Wazwan Feast & Saffron Kahwa",
    fact: "Kashmir produces the world's most prized Mongra saffron, cultivated in Pampore.",
    badgeReward: "Himalayan Explorer"
  }
];

const PROMOTIONAL_OFFERS = [
  {
    id: "offer-1",
    title: "50% OFF Royal Awadhi Food Festival",
    code: "AWADH50",
    discount: "50% OFF",
    validTill: "31st Oct 2026",
    tag: "Festival Special",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    description: "Enjoy flat 50% discount on all Royal Lucknowi Biryanis and Galouti Kebabs."
  }
];

module.exports = {
  STATES_AND_UTS,
  FEATURED_FOODS,
  FOOD_CATEGORIES,
  FESTIVAL_FOODS,
  FOOD_REELS,
  PASSPORT_BADGES,
  FOOD_JOURNEY_STOPS,
  PROMOTIONAL_OFFERS
};
