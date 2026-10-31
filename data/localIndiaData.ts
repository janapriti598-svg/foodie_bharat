import { FOOD_IMAGES, ImageRef } from './foodImages';

export interface DishPreview {
  id: string;
  name: string;
  image: ImageRef;
  category: string;
  veg: boolean;
  spiceLevel: number;
  rating: number;
  description: string;
  price: string;
}

export interface CityInfo {
  id: string;
  name: string;
  famousDish: string;
  description: string;
  image?: ImageRef;
  rating?: number;
}

export interface StateInfo {
  id: string;
  name: string;
  type: 'State' | 'UT';
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'North-East' | 'Islands';
  capital: string;
  language: string;
  banner: ImageRef;
  description: string;
  culture: string;
  famousDishes: string[];
  streetFoods: string[];
  dishesDetailed: DishPreview[];
  cities: CityInfo[];
  coordinates: { x: number; y: number }; // Percentage on SVG Map
  mapSvgPath?: string; // Path or polygon coordinates
  color: string;
  elevation: string;
}

export interface FoodItem {
  id: string;
  name: string;
  state: string;
  stateId: string;
  city: string;
  category: string;
  veg: boolean;
  spiceLevel: number; // 0 to 5
  rating: number;
  reviewsCount: number;
  priceRange: string;
  calories: string;
  prepTime: string;
  image: ImageRef;
  description: string;
  history: string;
  ingredients: string[];
  preparation: string;
  nutrition: { carbs: string; protein: string; fat: string; fiber: string };
  topRestaurants: { name: string; rating: number; address: string }[];
}

export interface FoodCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface FestivalFood {
  id: string;
  name: string;
  festival: string;
  season: string;
  banner: ImageRef;
  description: string;
  keyDishes: string[];
  states: string[];
}

export interface FoodReel {
  id: string;
  creator: {
    name: string;
    handle: string;
    avatar: ImageRef;
    verified: boolean;
  };
  title: string;
  dishName: string;
  state: string;
  city: string;
  likes: string;
  comments: string;
  shares: string;
  audioTrack: string;
  videoThumbnail: ImageRef;
  description: string;
}

export interface PassportBadge {
  id: string;
  name: string;
  icon: string;
  color: string;
  state: string;
  requiredDishes: number;
  description: string;
  unlocked: boolean;
  earnedDate?: string;
  progress?: string;
}

export interface JourneyStop {
  id: string;
  title: string;
  state: string;
  city: string;
  icon: string;
  elevation: string;
  unlocked: boolean;
  specialty: string;
  fact: string;
  badgeReward: string;
}

export interface OfferDeal {
  id: string;
  title: string;
  code: string;
  discount: string;
  validTill: string;
  tag: string;
  image: ImageRef;
  description: string;
}

// Complete 28 States & 8 UTs Dataset with Detailed Food Items & Real Images
export const ALL_STATES_AND_UTS: StateInfo[] = [
  // --- NORTH INDIA ---
  {
    id: 'jammu-and-kashmir',
    name: 'Jammu and Kashmir',
    type: 'UT',
    region: 'North',
    capital: 'Srinagar / Jammu',
    language: 'Kashmiri, Dogri, Urdu',
    banner: FOOD_IMAGES['jammu-and-kashmir'],
    description: 'Paradise on Earth with royal culinary heritage featuring the grand 36-course Wazwan, aromatic Rogan Josh, and fragrant saffron Kahwa.',
    culture: 'Kashmiri cuisine is deeply influenced by Persian and Central Asian flavors, cooked with dried ginger (sonth), fennel (saunf), and royal Kashmiri chilies.',
    famousDishes: ['Rogan Josh', 'Dum Aloo Kashmiri', 'Gushtaba', 'Kahwa Tea', 'Modur Pulao', 'Tabak Maaz', 'Kashmiri Saag'],
    streetFoods: ['Kaladi Kulcha', 'Tujji Kebabs', 'Nadroo Monje', 'Sheermal'],
    dishesDetailed: [
      {
        id: 'rogan-josh',
        name: 'Rogan Josh',
        image: FOOD_IMAGES['rogan-josh'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 3,
        rating: 4.95,
        description: 'Tender lamb braised in aromatic gravy of Kashmiri red chillies, fennel, and ratan jot root.',
        price: '₹450'
      },
      {
        id: 'kashmiri-dum-aloo',
        name: 'Kashmiri Dum Aloo',
        image: FOOD_IMAGES['dum-aloo'],
        category: 'Main Course',
        veg: true,
        spiceLevel: 3,
        rating: 4.88,
        description: 'Baby potatoes deep-fried and slow-cooked in a rich yogurt and fennel-infused red gravy.',
        price: '₹280'
      },
      {
        id: 'kahwa-tea',
        name: 'Saffron Kahwa',
        image: FOOD_IMAGES['kahwa'],
        category: 'Drinks',
        veg: true,
        spiceLevel: 0,
        rating: 4.92,
        description: 'Green tea brewed with Pampore saffron strands, green cardamom, cinnamon, and crushed almonds.',
        price: '₹140'
      },
      {
        id: 'kaladi-kulcha',
        name: 'Jammu Kaladi Kulcha',
        image: FOOD_IMAGES['kaladi-kulcha'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 3,
        rating: 4.85,
        description: 'Traditional mature Himalayan cheese pan-fried until crisp outside and molten inside, stuffed in kulchas.',
        price: '₹120'
      }
    ],
    cities: [
      { id: 'srinagar', name: 'Srinagar', famousDish: 'Wazwan Feast', description: 'Lakeside food stalls and royal Wazwan master chefs (Wazas).' },
      { id: 'jammu', name: 'Jammu', famousDish: 'Kaladi Kulcha', description: 'Famous for ripened mountain cheese treats.' },
      { id: 'anantnag', name: 'Anantnag', famousDish: 'Kashmiri Dum Pukht', description: 'Rich valley flavours and traditional saffron tea.' }
    ],
    coordinates: { x: 34, y: 14 },
    color: '#E06D53',
    elevation: '1,585 m'
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    type: 'UT',
    region: 'North',
    capital: 'Leh',
    language: 'Ladakhi, Tibetan',
    banner: FOOD_IMAGES['ladakh'],
    description: 'High-altitude Himalayan gastronomy featuring heartwarming Thukpa, steamed Momos, Tsampa, and rich Butter Tea (Gur Gur Chai).',
    culture: 'Tibetan-Himalayan traditions emphasizing hearty barley, yak cheese (Chhurpi), and wholesome herbal broths.',
    famousDishes: ['Thukpa', 'Tingmo', 'Chhurpi Soup', 'Skyu', 'Butter Tea (Gur Gur)', 'Khambir Bread'],
    streetFoods: ['Ladakhi Momos', 'Mokthuk', 'Paba', 'Apricot Jam Toast'],
    dishesDetailed: [
      {
        id: 'thukpa-ladakh',
        name: 'Ladakhi Thukpa',
        image: FOOD_IMAGES['thukpa'],
        category: 'Regional Cuisine',
        veg: false,
        spiceLevel: 2,
        rating: 4.9,
        description: 'Warm, comforting Himalayan noodle soup with mountain herbs, shredded meat, and fresh broth.',
        price: '₹220'
      },
      {
        id: 'steamed-momos-ladakh',
        name: 'Steamed Yak Cheese Momos',
        image: FOOD_IMAGES['momos'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 3,
        rating: 4.94,
        description: 'Thin flour dumplings stuffed with chhurpi cheese and Himalayan herbs with spicy chilli dip.',
        price: '₹180'
      },
      {
        id: 'butter-tea-ladakh',
        name: 'Gur Gur Butter Tea',
        image: FOOD_IMAGES['butter-tea'],
        category: 'Drinks',
        veg: true,
        spiceLevel: 0,
        rating: 4.75,
        description: 'Traditional tea churned with yak butter and rock salt in a wooden cylindrical churner.',
        price: '₹80'
      }
    ],
    cities: [
      { id: 'leh', name: 'Leh', famousDish: 'Skyu & Tingmo', description: 'Old town cafes and traditional Ladakhi bakeries.' },
      { id: 'kargil', name: 'Kargil', famousDish: 'Apricot Stew', description: 'Sweet dried apricots and hearty barley soups.' }
    ],
    coordinates: { x: 44, y: 11 },
    color: '#D97706',
    elevation: '3,500 m'
  },
  {
    id: 'punjab',
    name: 'Punjab',
    type: 'State',
    region: 'North',
    capital: 'Chandigarh',
    language: 'Punjabi',
    banner: FOOD_IMAGES['punjab'],
    description: 'Land of five rivers and golden fields. Celebrated for rich Makki di Roti, Sarson da Saag, Butter Chicken, and frothy tall glasses of Lassi.',
    culture: 'Hearty, generous meals with fresh homemade white butter (Makhan) and slow tandoori marinades.',
    famousDishes: ['Butter Chicken', 'Sarson Da Saag & Makki Di Roti', 'Dal Makhani', 'Amritsari Kulcha', 'Paneer Tikka', 'Chole Bhature'],
    streetFoods: ['Amritsari Fish Fry', 'Chole Kulche', 'Gol Gappe', 'Sweet Lassi in Matka'],
    dishesDetailed: [
      {
        id: 'amritsari-kulcha',
        name: 'Amritsari Stuffed Kulcha',
        image: FOOD_IMAGES['kulcha'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 3,
        rating: 4.95,
        description: 'Multi-layered tandoor bread stuffed with spicy potato and pomegranate seeds, topped with white butter.',
        price: '₹160'
      },
      {
        id: 'butter-chicken-punjab',
        name: 'Original Punjabi Butter Chicken',
        image: FOOD_IMAGES['butter-chicken'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 2,
        rating: 4.93,
        description: 'Tandoori roasted chicken submerged in a silky tomato, cashew, butter, and dried fenugreek gravy.',
        price: '₹420'
      },
      {
        id: 'sarson-saag-makki-roti',
        name: 'Sarson Ka Saag & Makki Roti',
        image: FOOD_IMAGES['sarson-saag'],
        category: 'Regional Cuisine',
        veg: true,
        spiceLevel: 2,
        rating: 4.91,
        description: 'Slow-simmered mustard greens with cornmeal flatbreads, jaggery, and dollops of fresh churned makhan.',
        price: '₹290'
      },
      {
        id: 'punjabi-sweet-lassi',
        name: 'Amritsari Malai Lassi',
        image: FOOD_IMAGES['lassi'],
        category: 'Drinks',
        veg: true,
        spiceLevel: 0,
        rating: 4.89,
        description: 'Thick, creamy yogurt lassi served in an earthen clay kulhad crowned with a thick layer of clotted cream.',
        price: '₹90'
      }
    ],
    cities: [
      { id: 'amritsar', name: 'Amritsar', famousDish: 'Amritsari Kulcha & Lassi', description: 'Culinary capital around the Golden Temple with legendary centuries-old dhabas.' },
      { id: 'ludhiana', name: 'Ludhiana', famousDish: 'Tandoori Chicken', description: 'Modern and traditional dhabas serving rich creamy gravies.' }
    ],
    coordinates: { x: 30, y: 23 },
    color: '#F59E0B',
    elevation: '234 m'
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    type: 'State',
    region: 'North',
    capital: 'Shimla / Dharamshala',
    language: 'Hindi, Pahari',
    banner: FOOD_IMAGES['himachal-pradesh'],
    description: 'Pahari culinary wonderland known for the ceremonial feast "Dhaam", Siddu, Madra, and crisp apples.',
    culture: 'Pahari cuisine uses locally grown lentils, wild greens, yogurt gravies, and aromatic spices cooked without onion and garlic in sacred feasts.',
    famousDishes: ['Himachali Dhaam', 'Siddu', 'Chana Madra', 'Babru', 'Kullu Trout Fish', 'Tudkiya Bhath'],
    streetFoods: ['Siddu with Ghee', 'Pahari Momos', 'Apple Jalebi', 'Chana Chaat'],
    dishesDetailed: [
      {
        id: 'himachali-siddu',
        name: 'Himachali Siddu with Ghee',
        image: FOOD_IMAGES['siddu'],
        category: 'Regional Cuisine',
        veg: true,
        spiceLevel: 2,
        rating: 4.88,
        description: 'Steamed fermented wheat bun stuffed with poppy seeds, walnuts, and spices, drenched in desi ghee.',
        price: '₹150'
      },
      {
        id: 'chana-madra',
        name: 'Chana Madra',
        image: FOOD_IMAGES['chana-madra'],
        category: 'Main Course',
        veg: true,
        spiceLevel: 2,
        rating: 4.82,
        description: 'Chickpeas cooked slowly in a rich spiced yogurt gravy with cardamom, cloves, and dry fruits.',
        price: '₹220'
      }
    ],
    cities: [
      { id: 'shimla', name: 'Shimla', famousDish: 'Siddu with Dal', description: 'Mall Road wooden bakeries and traditional Pahari eateries.' },
      { id: 'manali', name: 'Manali', famousDish: 'Fresh Trout Fish', description: 'Riverside trout delicacies and Tibetan cafes.' }
    ],
    coordinates: { x: 36, y: 21 },
    color: '#10B981',
    elevation: '2,205 m'
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    type: 'State',
    region: 'North',
    capital: 'Dehradun',
    language: 'Garhwali, Kumaoni, Hindi',
    banner: FOOD_IMAGES['uttarakhand'],
    description: 'Abode of the Gods offering nutritious organic mountain food: Kafuli, Phaanu, Chainsoo, and Bal Mithai.',
    culture: 'Nutritious mountain grains like mandua (finger millet), gahat (horse gram), and hemp seed chutney.',
    famousDishes: ['Kafuli', 'Phaanu', 'Chainsoo', 'Bal Mithai', 'Bhang Ki Chutney', 'Singori'],
    streetFoods: ['Gahat Paratha', 'Kumaoni Raita', 'Singori', 'Pahari Pakode'],
    dishesDetailed: [
      {
        id: 'kaapa-uttarakhand',
        name: 'Garhwali Kaapa with Rice',
        image: FOOD_IMAGES['kaapa'],
        category: 'Regional Cuisine',
        veg: true,
        spiceLevel: 2,
        rating: 4.85,
        description: 'Velvety green curry of mustard greens and spinach thickened with rice paste, served over steamed rice.',
        price: '₹190'
      },
      {
        id: 'bal-mithai-almora',
        name: 'Almora Bal Mithai',
        image: FOOD_IMAGES['bal-mithai'],
        category: 'Sweets',
        veg: true,
        spiceLevel: 0,
        rating: 4.93,
        description: 'Brown roasted milk fudge coated with tiny white sugar balls, a signature Kumaon delight.',
        price: '₹220'
      }
    ],
    cities: [
      { id: 'dehradun', name: 'Dehradun', famousDish: 'Bakery Rusk & Momos', description: 'Colonial bakeries, basmati rice, and mountain cafes.' },
      { id: 'almora', name: 'Almora', famousDish: 'Bal Mithai & Singori', description: 'Famed sweet shops selling roasted milk sweets wrapped in oak leaves.' }
    ],
    coordinates: { x: 40, y: 26 },
    color: '#059669',
    elevation: '1,425 m'
  },
  {
    id: 'haryana',
    name: 'Haryana',
    type: 'State',
    region: 'North',
    capital: 'Chandigarh',
    language: 'Haryanvi, Hindi',
    banner: FOOD_IMAGES['haryana'],
    description: 'The land of rotis, fresh desi ghee, Bajra Khichdi, Kachri ki Sabzi, and wholesome dairy.',
    culture: 'Agricultural simplicity, pure unadulterated dairy, fresh buttermilk (chaas), and hearty rustic breads.',
    famousDishes: ['Bajra Khichdi', 'Kachri Ki Sabzi', 'Hara Dhania Cholia', 'Singri Ki Sabzi', 'Alsi Ki Pinni'],
    streetFoods: ['Ghewar', 'Kachori with Aloo Sabzi', 'Malpua', 'Chaas'],
    dishesDetailed: [
      {
        id: 'bajra-khichdi-haryana',
        name: 'Desi Ghee Bajra Khichdi',
        image: FOOD_IMAGES['khichdi'],
        category: 'Healthy',
        veg: true,
        spiceLevel: 1,
        rating: 4.8,
        description: 'Cracked pearl millet slow-cooked with yellow moong dal, served with warm jaggery and ghee.',
        price: '₹180'
      }
    ],
    cities: [
      { id: 'gurugram', name: 'Gurugram', famousDish: 'Cyber City Food Hubs', description: 'Global gastronomy blends with traditional dhabas.' },
      { id: 'kurukshetra', name: 'Kurukshetra', famousDish: 'Bajra Roti & Ghee', description: 'Sacred land with pure vegetarian satvik delicacies.' }
    ],
    coordinates: { x: 33, y: 29 },
    color: '#E11D48',
    elevation: '220 m'
  },
  {
    id: 'delhi',
    name: 'Delhi',
    type: 'UT',
    region: 'North',
    capital: 'New Delhi',
    language: 'Hindi, English, Punjabi, Urdu',
    banner: FOOD_IMAGES['delhi'],
    description: 'The culinary capital of India! From Chandni Chowk street food to Mughal feasts and modern dining.',
    culture: 'Centuries of Mughal, British, and Punjabi influences created the world-famous street food scene and kebabs.',
    famousDishes: ['Butter Chicken', 'Chole Bhature', 'Nihari', 'Daulat Ki Chaat', 'Dahi Bhalla', 'Paranthe'],
    streetFoods: ['Aloo Tikki Chaat', 'Gol Gappe', 'Kathi Rolls', 'Kulfi Falooda', 'Ram Laddu'],
    dishesDetailed: [
      {
        id: 'delhi-chole-bhature',
        name: 'Delhi Chole Bhature',
        image: FOOD_IMAGES['chole-bhature'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 4,
        rating: 4.96,
        description: 'Fluffy paneer-stuffed deep-fried bhaturas served with dark spicy pindi chole and pickled chillies.',
        price: '₹150'
      },
      {
        id: 'delhi-nihari',
        name: 'Old Delhi Nihari',
        image: FOOD_IMAGES['nihari'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 4,
        rating: 4.92,
        description: 'Slow-cooked overnight mutton stew with bone marrow, ginger juliennes, and khamiri roti.',
        price: '₹380'
      },
      {
        id: 'daulat-ki-chaat',
        name: 'Winter Daulat Ki Chaat',
        image: FOOD_IMAGES['daulat-ki-chaat'],
        category: 'Desserts',
        veg: true,
        spiceLevel: 0,
        rating: 4.88,
        description: 'Whisper-light milk froth churned under morning winter mist, sprinkled with saffron and pistachio.',
        price: '₹100'
      }
    ],
    cities: [
      { id: 'old-delhi', name: 'Old Delhi (Chandni Chowk)', famousDish: 'Paranthe & Nihari', description: '300-year-old food lanes with unmatched street flavours.' },
      { id: 'south-delhi', name: 'South Delhi', famousDish: 'Modern fusion dining', description: 'Trendy cafes and gourmet culinary ateliers.' }
    ],
    coordinates: { x: 35, y: 31 },
    color: '#DC2626',
    elevation: '216 m'
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    type: 'State',
    region: 'North',
    capital: 'Lucknow',
    language: 'Hindi, Urdu, Bhojpuri, Awadhi',
    banner: FOOD_IMAGES['uttar-pradesh'],
    description: 'The throne of Nawabi cuisine. Galouti Kebabs that melt on your tongue, Dum Biryani, Banarasi Paan, and Malaiyo.',
    culture: 'Awadhi "Dum Pukht" slow steam cooking alongside Varanasi and Mathura sweet traditions.',
    famousDishes: ['Galouti Kebab', 'Lucknowi Dum Biryani', 'Kakori Kebab', 'Banarasi Tamatar Chaat', 'Malaiyo'],
    streetFoods: ['Banarasi Paan', 'Kachori Jalebi', 'Basket Chaat', 'Makhan Malai', 'Petha of Agra'],
    dishesDetailed: [
      {
        id: 'galouti-kebab',
        name: 'Lucknowi Galouti Kebab',
        image: FOOD_IMAGES['galouti-kebab'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 3,
        rating: 4.97,
        description: 'Silky melt-in-mouth minced meat kebabs infused with 160 royal herbs, served with Mughlai paratha.',
        price: '₹340'
      },
      {
        id: 'banarasi-tamatar-chaat',
        name: 'Banarasi Tamatar Chaat',
        image: FOOD_IMAGES['chaat'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 4,
        rating: 4.91,
        description: 'Mashed tomatoes simmered with potatoes, cashews, hing, and sugar syrup, served in clay kulhads.',
        price: '₹80'
      }
    ],
    cities: [
      { id: 'lucknow', name: 'Lucknow', famousDish: 'Galouti Kebab & Biryani', description: 'City of Nawabs where royal chefs invented melt-in-mouth kebabs.' },
      { id: 'varanasi', name: 'Varanasi', famousDish: 'Tamatar Chaat & Banarasi Paan', description: 'Ghats filled with sweet Malaiyo and crisp morning kachoris.' },
      { id: 'agra', name: 'Agra', famousDish: 'Petha & Bedai', description: 'The iconic translucent ash gourd sweet.' }
    ],
    coordinates: { x: 44, y: 34 },
    color: '#B45309',
    elevation: '123 m'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    type: 'State',
    region: 'North',
    capital: 'Jaipur',
    language: 'Rajasthani, Marwari, Hindi',
    banner: FOOD_IMAGES['rajasthan'],
    description: 'Royal land of majestic forts, Dal Baati Churma, spicy Laal Maas, Ghewar, and fiery Ker Sangri.',
    culture: 'Desert climate inspired dishes enriched with pure ghee, red Mathania chillies, and buttermilk.',
    famousDishes: ['Dal Baati Churma', 'Laal Maas', 'Gatte Ki Sabzi', 'Ker Sangri', 'Pyaaz Kachori', 'Ghewar'],
    streetFoods: ['Mirchi Vada', 'Bikaneri Bhujia', 'Pyaaz Kachori', 'Shahi Samosa', 'Rabdi Ghewar'],
    dishesDetailed: [
      {
        id: 'dal-baati-churma',
        name: 'Rajasthani Dal Baati Churma',
        image: FOOD_IMAGES['dal-baati'],
        category: 'Regional Cuisine',
        veg: true,
        spiceLevel: 3,
        rating: 4.95,
        description: 'Hard wheat dumplings baked over charcoal, bathed in ghee, served with panchmel dal and sweet churma.',
        price: '₹360'
      },
      {
        id: 'laal-maas-rajasthan',
        name: 'Royal Rajputana Laal Maas',
        image: FOOD_IMAGES['laal-maas'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 5,
        rating: 4.93,
        description: 'Fiery royal mutton curry cooked with Mathania red chillies and smoked with glowing charcoal (Dhungar).',
        price: '₹480'
      },
      {
        id: 'rabdi-ghewar',
        name: 'Jaipuri Rabdi Ghewar',
        image: FOOD_IMAGES['ghevar'],
        category: 'Sweets',
        veg: true,
        spiceLevel: 0,
        rating: 4.96,
        description: 'Honeycomb-textured crisp sweet disc soaked in saffron syrup and topped with rich condensed milk rabdi.',
        price: '₹220'
      }
    ],
    cities: [
      { id: 'jaipur', name: 'Jaipur', famousDish: 'Pyaaz Kachori & Ghewar', description: 'The Pink City’s historic markets filled with sweet shops.' },
      { id: 'jodhpur', name: 'Jodhpur', famousDish: 'Mirchi Vada & Mawa Kachori', description: 'Blue city street stalls serving spicy crunchy delights.' },
      { id: 'udaipur', name: 'Udaipur', famousDish: 'Dal Baati by the Lake', description: 'Lakeside dining offering authentic royal Mewari feasts.' }
    ],
    coordinates: { x: 26, y: 37 },
    color: '#EA580C',
    elevation: '431 m'
  },

  // --- EAST INDIA ---
  {
    id: 'west-bengal',
    name: 'West Bengal',
    type: 'State',
    region: 'East',
    capital: 'Kolkata',
    language: 'Bengali',
    banner: FOOD_IMAGES['west-bengal'],
    description: 'The Sweet & Cultural Capital of India! Rosogolla, Shorshe Ilish, Kolkata Biryani with potato, and crispy Kathi Rolls.',
    culture: 'Bengalis treat food as an art form. Panch phoron spices, mustard oil pungency, and world-class confectionary.',
    famousDishes: ['Shorshe Ilish (Hilsa)', 'Kolkata Biryani', 'Kosha Mangsho', 'Rosogolla', 'Mishti Doi', 'Chingri Malai Curry'],
    streetFoods: ['Kolkata Kathi Roll', 'Phuchka with Gondhoraj lime', 'Mughlai Paratha', 'Telebhaja', 'Ghugni Chaat'],
    dishesDetailed: [
      {
        id: 'kolkata-biryani',
        name: 'Kolkata Mutton Biryani',
        image: FOOD_IMAGES['kolkata-biryani'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 2,
        rating: 4.98,
        description: 'Fragrant basmati rice infused with saffron, mace, kewra water, tender mutton, and the iconic golden potato.',
        price: '₹380'
      },
      {
        id: 'shorshe-ilish',
        name: 'Shorshe Ilish (Hilsa in Mustard)',
        image: FOOD_IMAGES['shorshe-ilish'],
        category: 'Regional Cuisine',
        veg: false,
        spiceLevel: 4,
        rating: 4.96,
        description: 'Fresh queen Hilsa fish steamed in a pungent paste of yellow and black mustard, green chillies, and mustard oil.',
        price: '₹550'
      },
      {
        id: 'bengal-rosogolla',
        name: 'Kolkata Spongy Rosogolla',
        image: FOOD_IMAGES['rasgulla'],
        category: 'Sweets',
        veg: true,
        spiceLevel: 0,
        rating: 4.95,
        description: 'Pristine cottage cheese balls simmered in light sugar syrup until light, spongy, and dripping with nectar.',
        price: '₹120'
      },
      {
        id: 'kolkata-kathi-roll',
        name: 'Original Nizam Kathi Roll',
        image: FOOD_IMAGES['kathi-roll'],
        category: 'Street Food',
        veg: false,
        spiceLevel: 3,
        rating: 4.94,
        description: 'Paratha layered with egg, wrapped around skewered spiced kebabs, raw onions, and green lime juice.',
        price: '₹140'
      }
    ],
    cities: [
      { id: 'kolkata', name: 'Kolkata', famousDish: 'Kolkata Biryani & Rosogolla', description: 'The City of Joy where every street corner is a gastronomic celebration.' },
      { id: 'darjeeling', name: 'Darjeeling', famousDish: 'Darjeeling Tea & Momos', description: 'Misty tea hills with Tibetan thukpa and artisanal hill bakeries.' },
      { id: 'siliguri', name: 'Siliguri', famousDish: 'Pork Momos & Chhang', description: 'Gateway to North East culinary fusion.' },
      { id: 'durgapur', name: 'Durgapur', famousDish: 'Langcha & Kosha Mangsho', description: 'Highway stops with authentic Bengali sweets.' }
    ],
    coordinates: { x: 67, y: 46 },
    color: '#2563EB',
    elevation: '9 m'
  },
  {
    id: 'bihar',
    name: 'Bihar',
    type: 'State',
    region: 'East',
    capital: 'Patna',
    language: 'Hindi, Bhojpuri, Maithili',
    banner: FOOD_IMAGES['bihar'],
    description: 'Home of the iconic charcoal-roasted Litti Chokha, Champaran Ahuna Mutton cooked in clay pots, and divine Thekua.',
    culture: 'Sattu (roasted gram) superfood, mustard oil aroma, and earthen pots for slow-braised meats.',
    famousDishes: ['Litti Chokha', 'Champaran Handi Mutton', 'Sattu Paratha', 'Thekua', 'Khaja of Silao', 'Dal Pitha'],
    streetFoods: ['Litti Chokha on charcoal', 'Sattu Drink', 'Tilkut', 'Patna Gupchup'],
    dishesDetailed: [
      {
        id: 'litti-chokha-bihar',
        name: 'Charcoal Roasted Litti Chokha',
        image: FOOD_IMAGES['litti-chokha'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 3,
        rating: 4.93,
        description: 'Wheat balls stuffed with spiced sattu, roasted over cow dung coals and dipped in ghee with smoked brinjal mash.',
        price: '₹140'
      },
      {
        id: 'champaran-mutton',
        name: 'Champaran Handi Ahuna Mutton',
        image: FOOD_IMAGES['champaran-mutton'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 4,
        rating: 4.97,
        description: 'Mutton marinated with whole garlic pods, mustard oil, and sealed in earthen handis slow-cooked on charcoal.',
        price: '₹460'
      }
    ],
    cities: [
      { id: 'patna', name: 'Patna', famousDish: 'Litti Chokha & Sattu', description: 'Maurya heritage and iconic Ganga ghat food hubs.' },
      { id: 'gaya', name: 'Gaya', famousDish: 'Tilkut & Anarsa', description: 'Famous pilgrimage city renowned for winter sesame sweets.' }
    ],
    coordinates: { x: 58, y: 38 },
    color: '#D97706',
    elevation: '53 m'
  },
  {
    id: 'odisha',
    name: 'Odisha',
    type: 'State',
    region: 'East',
    capital: 'Bhubaneswar',
    language: 'Odia',
    banner: FOOD_IMAGES['odisha'],
    description: "The land of Lord Jagannath's 56 Mahaprasad items, caramelized baked Chhena Poda, and coastal crab curries.",
    culture: 'Historical birthplace of Chhena-based sweets. Mild, healthy, rich in mustard and panch phutan.',
    famousDishes: ['Chhena Poda', 'Pakhala Bhata', 'Dalma', 'Puri Mahaprasad', 'Crab Kalia', 'Rasabali'],
    streetFoods: ['Cuttack Dahibara Aloodum', 'Chhena Jhili', 'Gupchup', 'Bara Ghugni'],
    dishesDetailed: [
      {
        id: 'chhena-poda',
        name: 'Odisha Chhena Poda',
        image: FOOD_IMAGES['chhena-poda'],
        category: 'Sweets',
        veg: true,
        spiceLevel: 0,
        rating: 4.96,
        description: 'India’s original baked cheesecake wrapped in sal leaves and baked until the crust deeply caramelizes.',
        price: '₹180'
      },
      {
        id: 'cuttack-dahibara',
        name: 'Cuttack Dahibara Aloodum',
        image: FOOD_IMAGES['dahibara'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 3,
        rating: 4.92,
        description: 'Soft lentil vadas soaked in tempered buttermilk, topped with spicy aloodum and yellow peas ghugni.',
        price: '₹70'
      }
    ],
    cities: [
      { id: 'puri', name: 'Puri', famousDish: 'Temple Mahaprasad & Khaja', description: 'Ancient temple kitchen cooking in stacked earthen pots.' },
      { id: 'bhubaneswar', name: 'Bhubaneswar', famousDish: 'Chhena Poda & Pakhala', description: 'Temple city offering exquisite coastal delicacies.' }
    ],
    coordinates: { x: 62, y: 54 },
    color: '#7C3AED',
    elevation: '45 m'
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    type: 'State',
    region: 'East',
    capital: 'Ranchi',
    language: 'Hindi, Santhali, Mundari',
    banner: FOOD_IMAGES['jharkhand'],
    description: 'Tribal forest culinary treasures: Dhuska, Rugra mushrooms, Bamboo shoot curries, and Mahua refreshments.',
    culture: 'Indigenous cooking using wild forest herbs, natural sal leaf steaming, and roasted rice flours.',
    famousDishes: ['Dhuska with Ghugni', 'Rugra Curry', 'Bamboo Shoot Curry', 'Chilka Roti', 'Arsa Roti'],
    streetFoods: ['Dhuska & Chana', 'Barra', 'Tilkut', 'Ranchi Chaat'],
    dishesDetailed: [
      {
        id: 'dhuska-jharkhand',
        name: 'Ranchi Special Dhuska with Ghugni',
        image: FOOD_IMAGES['dhuska'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 3,
        rating: 4.86,
        description: 'Deep-fried golden rice and chana dal batter cakes served with spicy black chickpea curry.',
        price: '₹80'
      }
    ],
    cities: [
      { id: 'ranchi', name: 'Ranchi', famousDish: 'Dhuska & Rugra', description: 'Waterfalls, tribal markets, and sizzling breakfast Dhuska.' }
    ],
    coordinates: { x: 58, y: 45 },
    color: '#0D9488',
    elevation: '651 m'
  },

  // --- WEST INDIA ---
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    type: 'State',
    region: 'West',
    capital: 'Mumbai',
    language: 'Marathi',
    banner: FOOD_IMAGES['maharashtra'],
    description: "From Mumbai's high-speed Vada Pav and Pav Bhaji to Kolhapuri Tambda-Pandhra Rassa and Malvani seafood.",
    culture: 'Diverse culinary regions: coastal Konkan coconut gravies, fiery Kolhapur spice pastes, and Saoji masalas.',
    famousDishes: ['Vada Pav', 'Pav Bhaji', 'Misal Pav', 'Puran Poli', 'Kolhapuri Mutton Rassa', 'Bombil Fry', 'Modak'],
    streetFoods: ['Mumbai Vada Pav', 'Bhel Puri at Chowpatty', 'Pani Puri', 'Sev Puri', 'Bun Maska & Irani Chai'],
    dishesDetailed: [
      {
        id: 'vada-pav',
        name: 'Mumbai Spiced Vada Pav',
        image: FOOD_IMAGES['vada-pav'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 4,
        rating: 4.96,
        description: 'Spiced potato fritter in golden gram flour batter, tucked in soft pav with dry red garlic and green chutneys.',
        price: '₹30'
      },
      {
        id: 'kolhapuri-tambda-rassa',
        name: 'Kolhapuri Tambda Rassa',
        image: FOOD_IMAGES['kolhapuri-mutton'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 5,
        rating: 4.92,
        description: 'Fiery red royal mutton broth cooked with traditional Kolhapuri Lavangi masala and roasted coconut.',
        price: '₹380'
      },
      {
        id: 'ukadiche-modak',
        name: 'Ukadiche Modak',
        image: FOOD_IMAGES['modak'],
        category: 'Sweets',
        veg: true,
        spiceLevel: 0,
        rating: 4.97,
        description: 'Steamed rice flour dumplings filled with freshly grated coconut, jaggery, and nutmeg, drizzled with pure ghee.',
        price: '₹160'
      }
    ],
    cities: [
      { id: 'mumbai', name: 'Mumbai', famousDish: 'Vada Pav & Pav Bhaji', description: "India's greatest 24/7 food melting pot." },
      { id: 'pune', name: 'Pune', famousDish: 'Puneri Misal & Bakarwadi', description: 'Chitale Bandhu delicacies and spicy misal.' },
      { id: 'kolhapur', name: 'Kolhapur', famousDish: 'Tambda & Pandhra Rassa', description: 'World-famous fiery red and soothing white royal mutton broths.' }
    ],
    coordinates: { x: 32, y: 56 },
    color: '#BE185D',
    elevation: '14 m'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    type: 'State',
    region: 'West',
    capital: 'Gandhinagar',
    language: 'Gujarati',
    banner: FOOD_IMAGES['gujarat'],
    description: 'The land of sweet-savory balance! Grand Gujarati Thali, Dhokla, winter special Undhiyu, and Sunday morning Fafda-Jalebi.',
    culture: 'Mastery of vegetarian cooking with subtle sweetness, hing tempering, and crunchy Farsan snacks.',
    famousDishes: ['Undhiyu', 'Khaman Dhokla', 'Gujarati Thali', 'Thepla', 'Khandvi', 'Handvo', 'Shrikhand'],
    streetFoods: ['Fafda Jalebi', 'Dabeli', 'Locho from Surat', 'Khakhra'],
    dishesDetailed: [
      {
        id: 'khaman-dhokla',
        name: 'Surati Nylon Khaman Dhokla',
        image: FOOD_IMAGES['dhokla'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 1,
        rating: 4.9,
        description: 'Steamed fluffy gram flour cakes tempered with mustard seeds, green chillies, curry leaves, and coriander.',
        price: '₹90'
      },
      {
        id: 'undhiyu-gujarat',
        name: 'Surati Undhiyu',
        image: FOOD_IMAGES['undhiyu'],
        category: 'Regional Cuisine',
        veg: true,
        spiceLevel: 2,
        rating: 4.94,
        description: 'Winter casserole of surti papdi, purple yam, baby eggplants, and fenugreek muthias cooked upside down in earthen pots.',
        price: '₹260'
      }
    ],
    cities: [
      { id: 'ahmedabad', name: 'Ahmedabad', famousDish: 'Manek Chowk Midnight Food', description: 'Jewellery market by day, bustling street food paradise by night.' },
      { id: 'surat', name: 'Surat', famousDish: 'Surati Undhiyu & Locho', description: 'Food capital of Gujarat famously hailed as "Surat nu Jaman".' }
    ],
    coordinates: { x: 23, y: 48 },
    color: '#F97316',
    elevation: '81 m'
  },
  {
    id: 'goa',
    name: 'Goa',
    type: 'State',
    region: 'West',
    capital: 'Panaji',
    language: 'Konkani, Portuguese, English',
    banner: FOOD_IMAGES['goa'],
    description: 'Tropical coastal paradise blending Portuguese flair with Konkan coconut curries: Fish Curry Rice, Pork Vindaloo, Bebinca, and Feni.',
    culture: 'Toddy vinegar, dried Kokum, Peri-Peri chilis, coconut milk, and fresh catches from the Arabian Sea.',
    famousDishes: ['Goan Fish Curry Rice', 'Pork Vindaloo', 'Prawn Balchão', 'Chicken Xacuti', 'Bebinca', 'Sorpotel'],
    streetFoods: ['Goan Chorizo Pav', 'Ros Omelette', 'Cutlet Bread', 'Fish Cutlets'],
    dishesDetailed: [
      {
        id: 'goan-fish-curry',
        name: 'Goan Kingfish Curry Rice',
        image: FOOD_IMAGES['goan-fish-curry'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 3,
        rating: 4.96,
        description: 'Fresh kingfish simmered in a coconut, Kashmiri chilli, and tangy dried kokum gravy served with steaming rice.',
        price: '₹390'
      },
      {
        id: 'bebinca-goa',
        name: 'Goan 7-Layer Bebinca',
        image: FOOD_IMAGES['bebinca'],
        category: 'Desserts',
        veg: false,
        spiceLevel: 0,
        rating: 4.92,
        description: 'Traditional Indo-Portuguese baked pudding with 7 delicate layers of coconut milk, egg yolks, and nutmeg.',
        price: '₹220'
      }
    ],
    cities: [
      { id: 'panaji', name: 'Panaji', famousDish: 'Fish Thali & Bebinca', description: 'Latin quarter cafes and riverfront seafood taverns.' },
      { id: 'margao', name: 'Margao', famousDish: 'Chorizo & Pork Sorpotel', description: 'South Goa’s spice market and historic restaurants.' }
    ],
    coordinates: { x: 28, y: 68 },
    color: '#06B6D4',
    elevation: '7 m'
  },

  // --- SOUTH INDIA ---
  {
    id: 'kerala',
    name: 'Kerala',
    type: 'State',
    region: 'South',
    capital: 'Thiruvananthapuram',
    language: 'Malayalam',
    banner: FOOD_IMAGES['kerala'],
    description: "God's Own Country! Grand 26-dish Onam Sadya served on banana leaves, Appam with stew, Malabar Biryani, and Karimeen Pollichathu.",
    culture: 'Spice capital with freshly grated coconut, coconut oil, shallots, curry leaves, and green pepper.',
    famousDishes: ['Onam Sadya', 'Appam with Ishtu', 'Malabar Dum Biryani', 'Karimeen Pollichathu', 'Kerala Beef Fry', 'Puttu & Kadala'],
    streetFoods: ['Banana Chips (Nendran)', 'Pazham Pori', 'Thattu Dosa', 'Sulaimani Tea'],
    dishesDetailed: [
      {
        id: 'onam-sadya',
        name: 'Grand Onam Sadya Feast',
        image: FOOD_IMAGES['sadya'],
        category: 'Regional Cuisine',
        veg: true,
        spiceLevel: 2,
        rating: 4.99,
        description: 'Grand 26-course pure vegetarian banquet served on fresh banana leaves with Avial, Olan, and Payasam.',
        price: '₹450'
      },
      {
        id: 'karimeen-pollichathu',
        name: 'Karimeen Pollichathu',
        image: FOOD_IMAGES['karimeen'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 4,
        rating: 4.95,
        description: 'Pearl spot fish marinated in fiery shallot and coconut masala, wrapped in banana leaves and pan-roasted.',
        price: '₹480'
      },
      {
        id: 'appam-ishtu',
        name: 'Lacy Appam with Coconut Stew',
        image: FOOD_IMAGES['appam'],
        category: 'Regional Cuisine',
        veg: true,
        spiceLevel: 1,
        rating: 4.91,
        description: 'Crisp-edged bowl-shaped rice hoppers with a soft fluffy center, served with fragrant coconut milk stew.',
        price: '₹180'
      }
    ],
    cities: [
      { id: 'kochi', name: 'Kochi', famousDish: 'Fort Kochi Seafood', description: 'Spice godowns, Portuguese bakeries, and fresh sea catch.' },
      { id: 'kozhikode', name: 'Kozhikode', famousDish: 'Kozhikodan Biryani & Halwa', description: 'The culinary crown of Malabar with beach food stalls.' }
    ],
    coordinates: { x: 35, y: 84 },
    color: '#047857',
    elevation: '10 m'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    type: 'State',
    region: 'South',
    capital: 'Chennai',
    language: 'Tamil',
    banner: FOOD_IMAGES['tamil-nadu'],
    description: 'Crispy Dosa, steaming Idlis, fiery Chettinad Pepper Chicken, aromatic Filter Coffee, and temple Pongal.',
    culture: 'Ancient culinary culture with complex Chettinad spice roasts, temple prasadam, and filter coffee.',
    famousDishes: ['Masala Dosa', 'Chettinad Chicken', 'Ven Pongal', 'Idli Sambhar', 'Madurai Kari Dosa', 'Jigarthanda'],
    streetFoods: ['Marina Beach Sundal', 'Kothu Parotta', 'Filter Coffee', 'Kuzhi Paniyaram'],
    dishesDetailed: [
      {
        id: 'chettinad-chicken',
        name: 'Fiery Chettinad Pepper Chicken',
        image: FOOD_IMAGES['chettinad-chicken'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 5,
        rating: 4.96,
        description: 'Country chicken roasted in hand-ground 18-spice Chettinad masala with fresh black peppercorns and star anise.',
        price: '₹360'
      },
      {
        id: 'filter-kaapi-chennai',
        name: 'Mylapore Brass Filter Coffee',
        image: FOOD_IMAGES['filter-coffee'],
        category: 'Drinks',
        veg: true,
        spiceLevel: 0,
        rating: 4.98,
        description: 'Dark-roast chicory coffee decoction frothered with hot thick milk in a traditional South Indian brass dabarah.',
        price: '₹60'
      },
      {
        id: 'madurai-jigarthanda',
        name: 'Madurai Royal Jigarthanda',
        image: FOOD_IMAGES['jigarthanda'],
        category: 'Desserts',
        veg: true,
        spiceLevel: 0,
        rating: 4.93,
        description: 'Cooling drink made with almond gum (badam pisin), nannari root syrup, condensed milk, and basundi ice cream.',
        price: '₹120'
      }
    ],
    cities: [
      { id: 'chennai', name: 'Chennai', famousDish: 'Filter Coffee & Dosa', description: 'Iconic coffee bars, Mylapore tiffin houses, and Marina Beach.' },
      { id: 'madurai', name: 'Madurai', famousDish: 'Jigarthanda & Kari Dosa', description: 'Temple city that never sleeps with night food bazaars.' }
    ],
    coordinates: { x: 42, y: 80 },
    color: '#B91C1C',
    elevation: '6 m'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    type: 'State',
    region: 'South',
    capital: 'Bengaluru',
    language: 'Kannada',
    banner: FOOD_IMAGES['karnataka'],
    description: 'Benne Dosa from Davanagere, fragrant Bisi Bele Bath, Mangalorean Ghee Roast, Mysore Pak, and Coorg Pandi Curry.',
    culture: 'Regional diversity across Mangalore coastal seafood, Coorg pork, and Bangalore Darshini breakfast joints.',
    famousDishes: ['Mysore Pak', 'Bisi Bele Bath', 'Mangalore Ghee Roast', 'Davanagere Benne Dosa', 'Coorg Pandi Curry', 'Neer Dosa'],
    streetFoods: ['Davanagere Benne Dosa', 'Mangalore Buns', 'Churumuri', 'Filter Coffee'],
    dishesDetailed: [
      {
        id: 'masala-dosa',
        name: 'Mysore Butter Masala Dosa',
        image: FOOD_IMAGES['masala-dosa'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 2,
        rating: 4.97,
        description: 'Crisp golden crepe smeared with fiery red garlic chutney, filled with spiced potato palya and roasted in butter.',
        price: '₹140'
      },
      {
        id: 'mangalore-ghee-roast',
        name: 'Mangalore Chicken Ghee Roast',
        image: FOOD_IMAGES['ghee-roast'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 4,
        rating: 4.96,
        description: 'Succulent chicken roasted in pure desi ghee with Byadgi chillies, coriander seeds, and tangy tamarind paste.',
        price: '₹390'
      },
      {
        id: 'mysore-pak',
        name: 'Royal Palace Mysore Pak',
        image: FOOD_IMAGES['mysore-pak'],
        category: 'Sweets',
        veg: true,
        spiceLevel: 0,
        rating: 4.94,
        description: 'Melt-in-mouth royal sweet made with roasted gram flour, sugar syrup, and cascading streams of pure ghee.',
        price: '₹190'
      }
    ],
    cities: [
      { id: 'bengaluru', name: 'Bengaluru', famousDish: 'CTR Butter Dosa & Filter Coffee', description: 'Heritage tiffin spots alongside modern craft breweries.' },
      { id: 'mysuru', name: 'Mysuru', famousDish: 'Original Mysore Pak', description: 'Royal sweet invention from the Mysore Palace.' }
    ],
    coordinates: { x: 36, y: 72 },
    color: '#D97706',
    elevation: '920 m'
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    type: 'State',
    region: 'South',
    capital: 'Amaravati',
    language: 'Telugu',
    banner: FOOD_IMAGES['andhra-pradesh'],
    description: 'The spice powerhouse of India! Fiery Guntur chillies, tangy Gongura Mutton, Royyala Iguru, and Putharekulu paper sweets.',
    culture: 'Famously spicy, leveraging tangy Gongura leaves, roasted red chillies, and steaming hot rice with ghee.',
    famousDishes: ['Gongura Mutton', 'Andhra Royyala Curry', 'Guntur Chilli Chicken', 'Pesarattu', 'Pootharekulu', 'Avakaya Pickle'],
    streetFoods: ['Mirchi Bajji', 'Punugulu', 'Uggani Bajji', 'Pesarattu Upma'],
    dishesDetailed: [
      {
        id: 'nalli-bokkala-pulusu-andhra',
        name: 'Andhra Nalli Bokkala Pulusu',
        image: FOOD_IMAGES['nalli-bokkala'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 5,
        rating: 4.95,
        description: 'Mutton marrow bones slow-simmered in a fiery, tangy tamarind gravy with Guntur chillies and aromatic spices.',
        price: '₹420'
      },
      {
        id: 'pootharekulu-sweet',
        name: 'Atreyapuram Pootharekulu',
        image: FOOD_IMAGES['pootharekulu'],
        category: 'Sweets',
        veg: true,
        spiceLevel: 0,
        rating: 4.91,
        description: 'Paper-thin edible wafer made of rice starch, folded with powdered jaggery, ghee, and crushed dry fruits.',
        price: '₹160'
      }
    ],
    cities: [
      { id: 'vijayawada', name: 'Vijayawada', famousDish: 'Punugulu & Gongura', description: 'Spicy riverfront street stalls and iconic Andhra thalis.' },
      { id: 'visakhapatnam', name: 'Visakhapatnam', famousDish: 'Coastal Seafood', description: 'Bay of Bengal fresh fish delicacies.' }
    ],
    coordinates: { x: 48, y: 68 },
    color: '#DC2626',
    elevation: '11 m'
  },
  {
    id: 'telangana',
    name: 'Telangana',
    type: 'State',
    region: 'South',
    capital: 'Hyderabad',
    language: 'Telugu, Urdu',
    banner: FOOD_IMAGES['telangana'],
    description: 'The land of the iconic Hyderabadi Dum Biryani, slow-cooked Ramadan Haleem, Double Ka Meetha, and spicy Golichina Mamsam.',
    culture: 'Nizami royal sophistication (saffron, dry fruits, slow dum) and rustic, fiery Telugu spice traditions.',
    famousDishes: ['Hyderabadi Dum Biryani', 'Hyderabadi Haleem', 'Mirchi Ka Salan', 'Double Ka Meetha', 'Pathar Ka Gosht', 'Sarva Pindi'],
    streetFoods: ['Irani Chai with Osmania Biscuits', 'Charminar Kebabs', 'Dosa at Govind Ki Bandi'],
    dishesDetailed: [
      {
        id: 'hyderabadi-biryani',
        name: 'Hyderabadi Dum Biryani',
        image: FOOD_IMAGES['hyd-biryani'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 4,
        rating: 4.99,
        description: 'Raw marinated meat layered with 70% cooked basmati rice, slow-cooked in a sealed dough handi over glowing embers.',
        price: '₹410'
      },
      {
        id: 'hyderabadi-haleem',
        name: 'Ramadan Hyderabadi Haleem',
        image: FOOD_IMAGES['haleem'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 3,
        rating: 4.96,
        description: 'GI-tagged royal stew of meat, pounded wheat, and lentils slow-cooked for 12 hours with pure ghee and spices.',
        price: '₹280'
      },
      {
        id: 'irani-chai-osmania',
        name: 'Irani Chai & Osmania Biscuits',
        image: FOOD_IMAGES['irani-chai'],
        category: 'Drinks',
        veg: true,
        spiceLevel: 0,
        rating: 4.92,
        description: 'Sweet creamy condensed milk tea brewed in copper samovars, paired with sweet-salty butter Osmania biscuits.',
        price: '₹50'
      }
    ],
    cities: [
      { id: 'hyderabad', name: 'Hyderabad', famousDish: 'Hyderabadi Biryani & Haleem', description: 'UNESCO Creative City of Gastronomy with legendary Biryani masterhouses.' }
    ],
    coordinates: { x: 46, y: 58 },
    color: '#9333EA',
    elevation: '542 m'
  },

  // --- CENTRAL INDIA ---
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    type: 'State',
    region: 'Central',
    capital: 'Bhopal',
    language: 'Hindi, Malvi',
    banner: FOOD_IMAGES['madhya-pradesh'],
    description: "The heart of India! Indore's world-famous Sarafa Night Bazaar, Poha-Jalebi with Jeeravan, Bhutte Ka Kees, and Dal Bafla.",
    culture: 'Malwa sweet-savory street food with signature Jeeravan masala and royal Bhopali meat stews.',
    famousDishes: ['Indori Poha-Jalebi', 'Dal Bafla', 'Bhutte Ka Kees', 'Bhopali Gosht Korma', 'Mawa Bati', 'Sev Tamatar'],
    streetFoods: ['Indore Sarafa Bazar Sweets', 'Garadu', 'Sabudana Khichdi', 'Joshi Dahi Vada'],
    dishesDetailed: [
      {
        id: 'indori-poha-jalebi',
        name: 'Indori Poha & Crisp Jalebi',
        image: FOOD_IMAGES['poha-jalebi'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 2,
        rating: 4.94,
        description: 'Steamed flattened rice sprinkled with secret Jeeravan masala, Ratlami sev, and paired with piping hot saffron jalebis.',
        price: '₹70'
      },
      {
        id: 'malwa-dal-bafla',
        name: 'Malwa Dal Bafla',
        image: FOOD_IMAGES['dal-bafla'],
        category: 'Main Course',
        veg: true,
        spiceLevel: 2,
        rating: 4.89,
        description: 'Wheat dumplings boiled then baked till crisp, dunked in ghee and served with tangy tuar dal.',
        price: '₹150'
      }
    ],
    cities: [
      { id: 'indore', name: 'Indore', famousDish: 'Sarafa Night Bazaar & Poha', description: 'India’s cleanest city and midnight street food capital.' },
      { id: 'bhopal', name: 'Bhopal', famousDish: 'Bhopali Gosht & Poha', description: 'Lakeside royal Nawabi meat stews.' }
    ],
    coordinates: { x: 42, y: 44 },
    color: '#F59E0B',
    elevation: '527 m'
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    type: 'State',
    region: 'Central',
    capital: 'Raipur',
    language: 'Chhattisgarhi, Hindi',
    banner: FOOD_IMAGES['chhattisgarh'],
    description: 'The "Rice Bowl of India". Steamed Chila, Farra, red ant chutney (Chaprah), and sweet Dehrori.',
    culture: 'Tribal Bastar heritage with rice as the heart of every meal and organic forest produce.',
    famousDishes: ['Farra', 'Chila with Tomato Chutney', 'Muthia', 'Bafauri', 'Dehrori', 'Bore Baasi'],
    streetFoods: ['Gulgula', 'Aamat', 'Farra Chutney'],
    dishesDetailed: [
      {
        id: 'chhattisgarh-angakar-roti',
        name: 'Angakar Roti with Tomato Chutney',
        image: FOOD_IMAGES['angakar-roti'],
        category: 'Healthy',
        veg: true,
        spiceLevel: 2,
        rating: 4.85,
        description: 'Thick rice-flour flatbread roasted over open coals ("angaar"), served with rustic tomato chutney.',
        price: '₹90'
      }
    ],
    cities: [
      { id: 'raipur', name: 'Raipur', famousDish: 'Farra & Chila', description: 'Bustling capital celebrating traditional Chhattisgarhi tiffin.' }
    ],
    coordinates: { x: 50, y: 50 },
    color: '#14B8A6',
    elevation: '298 m'
  },

  // --- NORTH-EAST INDIA ---
  {
    id: 'assam',
    name: 'Assam',
    type: 'State',
    region: 'North-East',
    capital: 'Dispur',
    language: 'Assamese, Bodo',
    banner: FOOD_IMAGES['assam'],
    description: 'Lush tea gardens, Kaji Nemu lemon aromatics, Masor Tenga sour fish broth, and festive Pitha.',
    culture: 'Unhurried cooking emphasizing natural herbs, fermented bamboo shoot, Khar alkali, and zero heavy spices.',
    famousDishes: ['Masor Tenga', 'Khaar', 'Duck Meat with Ash Gourd', 'Pork with Bamboo Shoot', 'Pitha & Laru'],
    streetFoods: ['Pork Momos', 'Ghila Pitha', 'Kaji Nemu Tea'],
    dishesDetailed: [
      {
        id: 'masor-tenga-assam',
        name: 'Assamese Masor Tenga (Sour Fish)',
        image: FOOD_IMAGES['masor-tenga'],
        category: 'Regional Cuisine',
        veg: false,
        spiceLevel: 2,
        rating: 4.93,
        description: 'Light, tangy freshwater fish broth flavored with tomatoes, elephant apple (Ou Tenga), and fresh green chillies.',
        price: '₹310'
      },
      {
        id: 'assam-orthodox-tea',
        name: 'Royal Assam Orthodox Tea',
        image: FOOD_IMAGES['assam-tea'],
        category: 'Drinks',
        veg: true,
        spiceLevel: 0,
        rating: 4.97,
        description: 'Single-estate malty orthodox black tea harvested from the lush Brahmaputra river valleys.',
        price: '₹80'
      }
    ],
    cities: [
      { id: 'guwahati', name: 'Guwahati', famousDish: 'Masor Tenga & Duck Curry', description: 'Brahmaputra riverside food trails and tea lounges.' }
    ],
    coordinates: { x: 80, y: 35 },
    color: '#16A34A',
    elevation: '55 m'
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    type: 'State',
    region: 'North-East',
    capital: 'Shillong',
    language: 'Khasi, Garo, English',
    banner: FOOD_IMAGES['meghalaya'],
    description: 'Abode of Clouds! Jadoh rice cooked in meat broth, Dohneiiong black sesame pork, and Shillong cafe treats.',
    culture: 'Khasi, Garo, and Jaintia traditions with black sesame seeds, fermented soybeans, and smoked meats.',
    famousDishes: ['Jadoh', 'Dohneiiong', 'Tungrymbai', 'Pukhlein', 'Kyat Rice Beer'],
    streetFoods: ['Shillong Momos', 'Pork Skewers', 'Alu Muri'],
    dishesDetailed: [
      {
        id: 'jadoh-meghalaya',
        name: 'Khasi Jadoh',
        image: FOOD_IMAGES['jadoh'],
        category: 'Regional Cuisine',
        veg: false,
        spiceLevel: 2,
        rating: 4.9,
        description: 'Short grain hill rice cooked with meat broth, ginger, onions, and black pepper.',
        price: '₹240'
      }
    ],
    cities: [
      { id: 'shillong', name: 'Shillong', famousDish: 'Jadoh & Dohneiiong', description: 'Rock music cafes and Police Bazar street food.' }
    ],
    coordinates: { x: 78, y: 38 },
    color: '#0284C7',
    elevation: '1,525 m'
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    type: 'State',
    region: 'North-East',
    capital: 'Gangtok',
    language: 'Nepali, Bhutia, Lepcha',
    banner: FOOD_IMAGES['sikkim'],
    description: 'Organic state of Kanchenjunga! Steamy Momos, Thukpa, Gundruk soup, Phagshapa, and organic Dalle Khursani chili.',
    culture: '100% organic agriculture, high-altitude yak cheese, nettle soups, and Himalayan fusion.',
    famousDishes: ['Steamed Momos with Dalle Paste', 'Thukpa', 'Gundruk Soup', 'Phagshapa', 'Sel Roti'],
    streetFoods: ['Laphing', 'Dalle Khursani Momos', 'Sha Phaley'],
    dishesDetailed: [
      {
        id: 'sikkim-momos',
        name: 'Sikkimese Organic Momos with Dalle Chilli',
        image: FOOD_IMAGES['momos'],
        category: 'Street Food',
        veg: false,
        spiceLevel: 5,
        rating: 4.98,
        description: 'Steamed thin-wrapper dumplings served with fiery round red Dalle Khursani paste and clear bone broth.',
        price: '₹180'
      }
    ],
    cities: [
      { id: 'gangtok', name: 'Gangtok', famousDish: 'Sha Phaley & Momos', description: 'MG Marg pedestrian boulevard filled with cafes.' }
    ],
    coordinates: { x: 72, y: 30 },
    color: '#8B5CF6',
    elevation: '1,650 m'
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    type: 'State',
    region: 'North-East',
    capital: 'Kohima',
    language: 'Nagamese, English, Ao',
    banner: FOOD_IMAGES['nagaland'],
    description: 'Smoked pork with Axone (fermented soya), Raja Mircha (Bhut Jolokia), and bamboo steamed fish.',
    culture: 'Smoked over kitchen hearths for months, flavoured with fiery Ghost Peppers and fermented bamboo shoots.',
    famousDishes: ['Smoked Pork with Axone', 'Bhut Jolokia Pork', 'Fish in Bamboo Tube', 'Galho Khichdi'],
    streetFoods: ['Smoked pork sausages', 'Raja Mircha Chutney', 'Sticky Rice Cakes'],
    dishesDetailed: [
      {
        id: 'naga-smoked-pork-axone',
        name: 'Naga Smoked Pork with Axone',
        image: FOOD_IMAGES['naga-pork'],
        category: 'Regional Cuisine',
        veg: false,
        spiceLevel: 5,
        rating: 4.94,
        description: 'Hearth-smoked pork braised with fermented soybean cake (Axone), wild bamboo shoots, and fiery Bhut Jolokia chillies.',
        price: '₹420'
      }
    ],
    cities: [
      { id: 'kohima', name: 'Kohima', famousDish: 'Hornbill Festival Feasts', description: 'Hornbill festival gastronomy and night bazaar.' }
    ],
    coordinates: { x: 88, y: 36 },
    color: '#E11D48',
    elevation: '1,444 m'
  },
  {
    id: 'manipur',
    name: 'Manipur',
    type: 'State',
    region: 'North-East',
    capital: 'Imphal',
    language: 'Meiteilon (Manipuri)',
    banner: FOOD_IMAGES['manipur'],
    description: 'Kangshoi vegetable stew, Singju spicy herb salad, Eromba, and aromatic Black Rice Kheer (Chak-hao).',
    culture: 'Fragrant with indigenous herbs, oil-free healthy broths, and GI-tagged Black Rice.',
    famousDishes: ['Eromba', 'Kangshoi Stew', 'Singju Salad', 'Chak-hao Kheer (Black Rice)', 'Nga Thongba'],
    streetFoods: ['Singju at Ima Market', 'Bora Pakoras', 'Kabab sticks'],
    dishesDetailed: [
      {
        id: 'chak-hao-kheer',
        name: 'Chak-hao (Black Rice) Kheer',
        image: FOOD_IMAGES['chak-hao'],
        category: 'Desserts',
        veg: true,
        spiceLevel: 0,
        rating: 4.95,
        description: 'Royal purple dessert made with GI-tagged Manipuri black rice, simmered in milk, cardamom, and bay leaves.',
        price: '₹160'
      }
    ],
    cities: [
      { id: 'imphal', name: 'Imphal', famousDish: 'Singju & Chak-hao Kheer', description: 'All-women run Ima Keithel market selling rare organic herbs.' }
    ],
    coordinates: { x: 87, y: 42 },
    color: '#F43F5E',
    elevation: '786 m'
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    type: 'State',
    region: 'North-East',
    capital: 'Aizawl',
    language: 'Mizo, English',
    banner: FOOD_IMAGES['mizoram'],
    description: 'Bai boiled seasonal greens, Vawksa Rep smoked pork, and fragrant Mizo hillside rice.',
    culture: 'Herbal, low oil cooking where bamboo shoots and mountain greens take center stage.',
    famousDishes: ['Bai', 'Vawksa Rep', 'Koat Pitha', 'Misa Mach Poora', 'Sawhchiar'],
    streetFoods: ['Koat Pitha', 'Bamboo shoot fritters'],
    dishesDetailed: [
      {
        id: 'mizo-bai',
        name: 'Mizo Bai Herbal Stew',
        image: FOOD_IMAGES['mizo-bai'],
        category: 'Healthy',
        veg: true,
        spiceLevel: 1,
        rating: 4.83,
        description: 'Wholesome oil-free stew of seasonal vegetables, bamboo shoots, and local herbs.',
        price: '₹170'
      }
    ],
    cities: [
      { id: 'aizawl', name: 'Aizawl', famousDish: 'Bai & Vawksa Rep', description: 'Hillside cafes and traditional Mizo homestays.' }
    ],
    coordinates: { x: 85, y: 48 },
    color: '#059669',
    elevation: '1,132 m'
  },
  {
    id: 'tripura',
    name: 'Tripura',
    type: 'State',
    region: 'North-East',
    capital: 'Agartala',
    language: 'Bengali, Kokborok',
    banner: FOOD_IMAGES['tripura'],
    description: 'Mui Borok with Berma, Kosoi Bwtwi, Mosdeng Serma tangy chutney, and Queen Pineapples.',
    culture: 'Tribal Tripuri and Bengali cuisines cooked with fermented Berma for rich umami flavor.',
    famousDishes: ['Mui Borok', 'Mosdeng Serma', 'Kosoi Bwtwi', 'Wahan Mosdeng', 'Gudok'],
    streetFoods: ['Peda of Matabari', 'Muya Awandru'],
    dishesDetailed: [
      {
        id: 'tripura-mosdeng',
        name: 'Mosdeng Serma Chutney',
        image: FOOD_IMAGES['mosdeng'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 4,
        rating: 4.86,
        description: 'Spicy, tangy tomato and roasted red chilli relish made with fermented fish and coriander.',
        price: '₹70'
      }
    ],
    cities: [
      { id: 'agartala', name: 'Agartala', famousDish: 'Mui Borok & Matabari Peda', description: 'Royal palaces and vibrant local food joints.' }
    ],
    coordinates: { x: 79, y: 47 },
    color: '#F59E0B',
    elevation: '12 m'
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    type: 'State',
    region: 'North-East',
    capital: 'Itanagar',
    language: 'Nyishi, Monpa, Hindi',
    banner: FOOD_IMAGES['arunachal-pradesh'],
    description: 'Thukpa, Zan, Lukter smoked meat with bird eye chillies, and Bamboo Shoot delicacies.',
    culture: 'Hollow green bamboo wood-fire cooking, fermented bamboo shoots, and wild Sichuan pepper.',
    famousDishes: ['Thukpa & Zan', 'Lukter', 'Pika Pila', 'Chura Sabzi', 'Apong Rice Brew'],
    streetFoods: ['Bamboo shoot skewers', 'Monpa Butter Tea'],
    dishesDetailed: [
      {
        id: 'arunachal-zan-churpi',
        name: 'Monpa Zan with Chicken Churpi',
        image: FOOD_IMAGES['zan'],
        category: 'Regional Cuisine',
        veg: false,
        spiceLevel: 3,
        rating: 4.91,
        description: 'Hearty millet-flour mash (Zan) served with a warming chicken and fermented churpi cheese broth.',
        price: '₹290'
      }
    ],
    cities: [
      { id: 'tawang', name: 'Tawang', famousDish: 'Monpa Thukpa & Butter Tea', description: 'Monastery town with soothing Himalayan hot soups.' }
    ],
    coordinates: { x: 86, y: 26 },
    color: '#10B981',
    elevation: '3,048 m'
  },

  // --- UNION TERRITORIES (REMAINING) ---
  {
    id: 'andaman-and-nicobar',
    name: 'Andaman and Nicobar Islands',
    type: 'UT',
    region: 'Islands',
    capital: 'Port Blair',
    language: 'Bengali, Hindi, Tamil, English',
    banner: FOOD_IMAGES['andaman'],
    description: 'Tropical island seafood feast: King Prawn curries, Grilled Lobster, Fish Tikka, and Coconut tender desserts.',
    culture: 'Cosmopolitan coastal fusion combining Bengali fish techniques, Tamil spices, and fresh island seafood.',
    famousDishes: ['Andaman Fish Curry', 'Grilled Red Snapper', 'Coconut Prawn Curry', 'Tandoori Crab'],
    streetFoods: ['Banana Flower Cutlets', 'Fish Pakoda'],
    dishesDetailed: [
      {
        id: 'andaman-prawn-curry',
        name: 'Andaman Coconut King Prawn Curry',
        image: FOOD_IMAGES['prawn-malai-curry'],
        category: 'Main Course',
        veg: false,
        spiceLevel: 3,
        rating: 4.94,
        description: 'Jumbo island prawns simmered with fresh coconut cream, curry leaves, and mustard seeds.',
        price: '₹520'
      }
    ],
    cities: [
      { id: 'port-blair', name: 'Port Blair', famousDish: 'Grilled Island Snapper', description: 'Seaside shacks and Aberdeen Bazaar seafood restaurants.' }
    ],
    coordinates: { x: 82, y: 82 },
    color: '#0891B2',
    elevation: '16 m'
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    type: 'UT',
    region: 'North',
    capital: 'Chandigarh',
    language: 'Punjabi, Hindi, English',
    banner: FOOD_IMAGES['chandigarh'],
    description: 'The City Beautiful! Sector 17 street eats, Chole Bhature, Tandoori Soya Chaap, and vibrant Dhabas.',
    culture: 'Modern city with deep Punjabi gastronomic roots, open-air cafes, and late-night dhabas.',
    famousDishes: ['Sector 8 Chole Bhature', 'Paneer Tikka Roll', 'Butter Chicken', 'Matka Kulfi'],
    streetFoods: ['Golgappe with 5 flavours', 'Nutri Kulcha', 'Soya Malai Chaap'],
    dishesDetailed: [
      {
        id: 'chandigarh-chaap',
        name: 'Sector 35 Tandoori Malai Chaap',
        image: FOOD_IMAGES['soya-chaap'],
        category: 'Street Food',
        veg: true,
        spiceLevel: 2,
        rating: 4.89,
        description: 'Soya chaap marinated in thick cashew paste, cream, and cardamoms, roasted in charcoal tandoors.',
        price: '₹210'
      }
    ],
    cities: [
      { id: 'chandigarh-city', name: 'Chandigarh', famousDish: 'Chole Bhature & Soya Chaap', description: 'Organized sectors lined with vibrant food courts and dhabas.' }
    ],
    coordinates: { x: 33, y: 25 },
    color: '#6366F1',
    elevation: '321 m'
  },
  {
    id: 'dadra-nagar-haveli-daman-diu',
    name: 'Dadra & Nagar Haveli and Daman & Diu',
    type: 'UT',
    region: 'West',
    capital: 'Daman',
    language: 'Gujarati, Hindi, Portuguese',
    banner: FOOD_IMAGES['goa'],
    description: 'Portuguese coastal fusion, spicy Crab Masala, Chicken Bullet, Ubadiyu, and fresh toddy.',
    culture: 'Coexistence of Gujarati vegetarian traditions with Portuguese colonial seafood recipes.',
    famousDishes: ['Daman Prawn Balchao', 'Ubadiyu', 'Fish Koliwada', 'Crab Masala'],
    streetFoods: ['Diu Fish Cutlets', 'Puri Shak', 'Dabeli'],
    dishesDetailed: [
      {
        id: 'daman-prawn-balchao',
        name: 'Daman Prawn Balchão',
        image: FOOD_IMAGES['balchao'],
        category: 'Regional Cuisine',
        veg: false,
        spiceLevel: 4,
        rating: 4.9,
        description: 'Tangy and fiery pickled prawn curry cooked in palm vinegar and red chili paste.',
        price: '₹370'
      }
    ],
    cities: [
      { id: 'daman', name: 'Daman', famousDish: 'Portuguese Fish Fry', description: 'Seaside promenade shacks serving fresh fish.' }
    ],
    coordinates: { x: 25, y: 54 },
    color: '#EC4899',
    elevation: '5 m'
  },
  {
    id: 'lakshadweep',
    name: 'Lakshadweep',
    type: 'UT',
    region: 'Islands',
    capital: 'Kavaratti',
    language: 'Jassari, Malayalam',
    banner: FOOD_IMAGES['lakshadweep'],
    description: 'Pristine coral archipelago: Spicy Tuna Curries, Mus Kavaab fish skewers, and coconut bread.',
    culture: 'Revolves around skipjack tuna, coconut palm jaggery, Malabar spices, and delicate rice pancakes.',
    famousDishes: ['Mus Kavaab', 'Tuna Curry (Maas)', 'Rayereha', 'Sannath'],
    streetFoods: ['Tuna Pakoda', 'Coconut Halwa'],
    dishesDetailed: [
      {
        id: 'mus-kavaab-lakshadweep',
        name: 'Kavaratti Mus Kavaab',
        image: FOOD_IMAGES['fish-kebab'],
        category: 'Street Food',
        veg: false,
        spiceLevel: 3,
        rating: 4.88,
        description: 'Boneless skipjack tuna skewers marinated with grated coconut, turmeric, cardamom, and coriander leaves.',
        price: '₹260'
      }
    ],
    cities: [
      { id: 'kavaratti', name: 'Kavaratti', famousDish: 'Mus Kavaab & Tuna', description: 'Lagoon-side cafes serving fresh oceanic fish skewers.' }
    ],
    coordinates: { x: 22, y: 82 },
    color: '#0284C7',
    elevation: '2 m'
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    type: 'UT',
    region: 'South',
    capital: 'Pondicherry',
    language: 'Tamil, French, English',
    banner: FOOD_IMAGES['puducherry'],
    description: 'The French Riviera of the East! Freshly baked Butter Croissants, Ratatouille, Creole Prawn Curry, and Tamil tiffin.',
    culture: 'Seamless blend of Franco-Tamil "Creole" cuisine, wood-fired sourdough pizzas, and organic Auroville cafes.',
    famousDishes: ['Creole Prawn Curry', 'Franco-Tamil Bouillabaisse', 'Artisanal Croissants', 'Mutton Sambar Rice'],
    streetFoods: ['French Crepes', 'Mushroom Bajji', 'Filter Coffee'],
    dishesDetailed: [
      {
        id: 'creole-prawn-puducherry',
        name: 'Franco-Tamil Creole Prawn Curry',
        image: FOOD_IMAGES['creole-prawn-curry'],
        category: 'Regional Cuisine',
        veg: false,
        spiceLevel: 2,
        rating: 4.93,
        description: 'Prawns cooked in mild coconut cream, saffron, shallots, and French tarragon with traditional Tamil spices.',
        price: '₹420'
      }
    ],
    cities: [
      { id: 'pondicherry', name: 'White Town (French Quarter)', famousDish: 'French Bakery & Creole Curry', description: 'Pastel yellow colonial streets lined with French bistros.' }
    ],
    coordinates: { x: 47, y: 78 },
    color: '#EC4899',
    elevation: '3 m'
  }
];

export const ALL_FEATURED_FOODS: FoodItem[] = [
  {
    id: 'kolkata-biryani',
    name: 'Kolkata Mutton Biryani',
    state: 'West Bengal',
    stateId: 'west-bengal',
    city: 'Kolkata',
    category: 'Main Course',
    veg: false,
    spiceLevel: 2,
    rating: 4.98,
    reviewsCount: 1420,
    priceRange: '₹250 - ₹450',
    calories: '580 kcal',
    prepTime: '2 hours',
    image: FOOD_IMAGES['kolkata-biryani'],
    description: 'A royal Awadhi legacy brought to Bengal by exiled Nawab Wajid Ali Shah. Characterized by tender meat, fragrant Basmati rice infused with saffron, mace, kewra water, and the iconic melt-in-mouth golden potato and boiled egg.',
    history: 'In 1856, when Nawab Wajid Ali Shah was exiled to Metiabruz in Kolkata, royal chefs innovated by adding whole spiced potatoes to absorb the rich meat juices, creating a timeless masterpiece.',
    ingredients: ['Long Grain Basmati Rice', 'Tender Mutton', 'Golden Spiced Potato', 'Boiled Egg', 'Saffron in Warm Milk', 'Kewra Water & Meetha Attar', 'Pure Ghee', 'Mace, Nutmeg, Shahi Jeera'],
    preparation: '1. Marinate mutton in yogurt, ginger-garlic paste, and fried onions.\n2. Parboil soaked basmati rice with whole spices.\n3. Fry large potatoes until golden and simmer in spiced broth.\n4. Layer mutton, potatoes, fragrant rice, saffron milk, and kewra attar.\n5. Seal with dough and slow cook on Dum for 45 minutes.',
    nutrition: { carbs: '65g', protein: '32g', fat: '22g', fiber: '4g' },
    topRestaurants: [
      { name: 'Arsalan (Park Circus)', rating: 4.8, address: '136, Marina Towers, Park Circus, Kolkata' },
      { name: 'Royal Indian Hotel', rating: 4.7, address: '147, Rabindra Sarani, Chitpur, Kolkata' },
      { name: 'Aminia', rating: 4.6, address: '6A, SN Banerjee Rd, New Market, Kolkata' }
    ]
  },
  {
    id: 'hyderabadi-biryani',
    name: 'Hyderabadi Dum Biryani',
    state: 'Telangana',
    stateId: 'telangana',
    city: 'Hyderabad',
    category: 'Main Course',
    veg: false,
    spiceLevel: 4,
    rating: 4.99,
    reviewsCount: 2310,
    priceRange: '₹280 - ₹500',
    calories: '620 kcal',
    prepTime: '2.5 hours',
    image: FOOD_IMAGES['hyd-biryani'],
    description: 'The crown jewel of Nizami cuisine. Made using the Kachchi method where raw marinated meat is layered with fragrant rice and slow-cooked in a sealed Handi.',
    history: 'Created in the royal kitchens of the Asaf Jahi Nizams, blending Persian culinary techniques with fiery southern spices.',
    ingredients: ['Tender Lamb/Goat', 'Aged Basmati Rice', 'Fried Onions (Biryan)', 'Mint & Coriander', 'Cardamom, Cloves, Cinnamon', 'Pure Desi Ghee', 'Saffron Milk'],
    preparation: '1. Marinate raw meat overnight with yogurt, raw papaya paste, red chilli, and garam masala.\n2. Layer raw marinated meat at the bottom of a heavy copper Deg.\n3. Add 70% cooked aromatic basmati rice on top with fresh mint and saffron.\n4. Seal the rim with wheat dough and slow-cook on dum with coals on top.',
    nutrition: { carbs: '60g', protein: '36g', fat: '25g', fiber: '3g' },
    topRestaurants: [
      { name: 'Bawarchi', rating: 4.8, address: 'RTC X Roads, Chikkadpally, Hyderabad' },
      { name: 'Shadab', rating: 4.8, address: 'High Court Rd, Madina, Hyderabad' }
    ]
  },
  {
    id: 'amritsari-kulcha',
    name: 'Amritsari Stuffed Kulcha & Chole',
    state: 'Punjab',
    stateId: 'punjab',
    city: 'Amritsar',
    category: 'Street Food',
    veg: true,
    spiceLevel: 3,
    rating: 4.95,
    reviewsCount: 1890,
    priceRange: '₹100 - ₹200',
    calories: '450 kcal',
    prepTime: '40 mins',
    image: FOOD_IMAGES['kulcha'],
    description: 'Crispy, multi-layered tandoor-baked bread stuffed with spiced mashed potatoes, onions, and pomegranate seeds (anardana), served with rich tangy chole and dollops of white butter.',
    history: 'Born in the alleyways of Amritsar near the Golden Temple, where masters perfected the seven-layer lamination of dough with desi ghee.',
    ingredients: ['Refined Flour', 'Boiled Potatoes & Paneer', 'Pomegranate Seeds (Anardana)', 'Green Chillies & Ginger', 'Fresh White Butter', 'Spiced Kabuli Chickpeas', 'Tamarind Chutney'],
    preparation: '1. Knead soft dough and laminate with ghee in multiple folds.\n2. Stuff with spiced potato, onion, and crushed anardana.\n3. Slap onto the blazing walls of an earthen tandoor.\n4. Crush with bare palms while piping hot and top with melting white butter.',
    nutrition: { carbs: '54g', protein: '14g', fat: '18g', fiber: '6g' },
    topRestaurants: [
      { name: 'Bhai Kulwant Singh Kulchian Wale', rating: 4.9, address: 'Golden Temple Heritage Street, Amritsar' },
      { name: 'All India Famous Amritsari Kulcha', rating: 4.8, address: 'Maqbool Road, Amritsar' }
    ]
  },
  {
    id: 'dal-baati-churma',
    name: 'Rajasthani Dal Baati Churma',
    state: 'Rajasthan',
    stateId: 'rajasthan',
    city: 'Jaipur',
    category: 'Regional Cuisine',
    veg: true,
    spiceLevel: 3,
    rating: 4.95,
    reviewsCount: 1650,
    priceRange: '₹200 - ₹450',
    calories: '680 kcal',
    prepTime: '1 hour',
    image: FOOD_IMAGES['dal-baati'],
    description: 'The complete culinary soul of Rajasthan. Hard wheat dough balls baked over charcoal, dipped in pure ghee, served with spicy 5-lentil Panchmel dal and sweet powdered Churma.',
    history: 'Invented during the warrior days of Mewar. Soldiers buried dough balls under desert sand before battles; by midday, scorching sand baked them to perfection.',
    ingredients: ['Coarse Wheat Flour', 'Pure Desi Ghee', 'Panchmel Dal (5 Lentils)', 'Jaggery & Cardamom', 'Hing & Cumin', 'Mathania Red Chillies', 'Garlic Chutney'],
    preparation: '1. Knead stiff wheat dough balls with ghee and ajwain.\n2. Bake slowly in an earthen oven until cracked and golden.\n3. Crush lightly and submerge completely in hot melted desi ghee.\n4. Serve with spicy Panchmel dal and sweet crushed Churma.',
    nutrition: { carbs: '72g', protein: '18g', fat: '28g', fiber: '8g' },
    topRestaurants: [
      { name: 'Chokhi Dhani', rating: 4.8, address: '12 Miles, Tonk Road, Jaipur' },
      { name: 'LMB (Laxmi Misthan Bhandar)', rating: 4.7, address: 'Johari Bazar, Jaipur' }
    ]
  },
  {
    id: 'chhena-poda',
    name: 'Odisha Chhena Poda',
    state: 'Odisha',
    stateId: 'odisha',
    city: 'Puri',
    category: 'Sweets',
    veg: true,
    spiceLevel: 0,
    rating: 4.96,
    reviewsCount: 1120,
    priceRange: '₹120 - ₹250',
    calories: '320 kcal',
    prepTime: '3 hours',
    image: FOOD_IMAGES['chhena-poda'],
    description: 'India\'s original baked cheesecake. Fresh handmade cottage cheese (chhena) kneaded with sugar, cardamom, and cashew nuts, wrapped in Sal leaves and baked until the crust deeply caramelizes.',
    history: 'Originated in Nayagarh, Odisha when a local confectioner accidentally left sweetened cottage cheese in a dying charcoal oven overnight.',
    ingredients: ['Fresh Cow Milk Chhena', 'Semolina (Sooji)', 'Sugar / Jaggery', 'Cardamom Powder', 'Cashews & Raisins', 'Pure Ghee', 'Sal Leaves'],
    preparation: '1. Knead fresh soft chhena with sugar until sugar dissolves completely.\n2. Mix in roasted cashews, raisins, and green cardamom.\n3. Line a baking tin with fresh Sal leaves brushed with ghee.\n4. Bake slowly until the crust caramelizes into a deep dark brown hue.',
    nutrition: { carbs: '38g', protein: '12g', fat: '11g', fiber: '1g' },
    topRestaurants: [
      { name: 'Nayagarh Sweet Hubs', rating: 4.9, address: 'Nayagarh Town Center, Odisha' },
      { name: 'Pahala Sweets', rating: 4.8, address: 'NH16, Bhubaneswar-Cuttack Highway' }
    ]
  },
  {
    id: 'vada-pav',
    name: 'Mumbai Spiced Vada Pav',
    state: 'Maharashtra',
    stateId: 'maharashtra',
    city: 'Mumbai',
    category: 'Street Food',
    veg: true,
    spiceLevel: 4,
    rating: 4.96,
    reviewsCount: 3400,
    priceRange: '₹15 - ₹35',
    calories: '290 kcal',
    prepTime: '20 mins',
    image: FOOD_IMAGES['vada-pav'],
    description: 'The heartbeat of Mumbai! A spiced mashed potato fritter (batata vada) encased in golden gram-flour batter, tucked inside a fluffy Pav bread with spicy garlic-coconut dry chutney, green chutney, and fried chillies.',
    history: 'Invented in 1966 by Ashok Vaidya outside Dadar railway station to offer energizing fuel for mill workers rushing across the city.',
    ingredients: ['Potatoes', 'Gram Flour (Besan)', 'Mustard Seeds & Curry Leaves', 'Turmeric & Hing', 'Dry Garlic Chutney', 'Green Mint-Chilli Chutney', 'Fresh Pav Buns'],
    preparation: '1. Sauté mashed potatoes with mustard seeds, turmeric, ginger, garlic, and green chillies.\n2. Shape into balls, dip into besan batter, and deep fry until golden.\n3. Slit fresh pav, smear with green chutney and dry red garlic chutney.\n4. Stuff the hot batata vada inside and serve with a salted fried green chili.',
    nutrition: { carbs: '42g', protein: '6g', fat: '12g', fiber: '3g' },
    topRestaurants: [
      { name: 'Ashok Vada Pav', rating: 4.9, address: 'Kirti College Lane, Dadar West, Mumbai' },
      { name: 'Aaram Vada Pav', rating: 4.8, address: 'Opposite CSMT Station, Fort, Mumbai' }
    ]
  },
  {
    id: 'masala-dosa',
    name: 'Mysore Butter Masala Dosa',
    state: 'Karnataka',
    stateId: 'karnataka',
    city: 'Mysuru',
    category: 'Street Food',
    veg: true,
    spiceLevel: 2,
    rating: 4.97,
    reviewsCount: 2800,
    priceRange: '₹80 - ₹160',
    calories: '380 kcal',
    prepTime: '25 mins',
    image: FOOD_IMAGES['masala-dosa'],
    description: 'Crispy golden-red fermented rice crepe with a spongy interior, smeared with spicy red garlic chutney, filled with potato palya and roasted in generous butter.',
    history: 'Perfected in the royal kitchens and heritage tiffin joints of Mysore and Bangalore.',
    ingredients: ['Fermented Dosa Batter', 'Spiced Potato Palya', 'Red Garlic Chana Dal Chutney', 'Pure Desi Butter (Benne)', 'Fresh Coconut Chutney', 'Vegetable Sambar'],
    preparation: '1. Pour fermented batter onto a piping hot cast iron Tawa.\n2. Swirl thin and douse with melted butter.\n3. Slather fiery red chutney over the surface.\n4. Place potato mash in center, fold into a crisp cylinder, and serve with chutneys.',
    nutrition: { carbs: '48g', protein: '8g', fat: '16g', fiber: '4g' },
    topRestaurants: [
      { name: 'Mylari Hotel', rating: 4.9, address: 'Nazarbad, Mysuru' },
      { name: 'CTR (Central Tiffin Room)', rating: 4.9, address: 'Margosa Rd, Malleshwaram, Bengaluru' }
    ]
  },
  {
    id: 'rogan-josh',
    name: 'Kashmiri Wazwan Rogan Josh',
    state: 'Jammu and Kashmir',
    stateId: 'jammu-and-kashmir',
    city: 'Srinagar',
    category: 'Regional Cuisine',
    veg: false,
    spiceLevel: 3,
    rating: 4.95,
    reviewsCount: 1450,
    priceRange: '₹350 - ₹650',
    calories: '520 kcal',
    prepTime: '2 hours',
    image: FOOD_IMAGES['rogan-josh'],
    description: 'The crown jewel of Kashmiri cuisine. Succulent pieces of lamb braised in a gravy made with browned shallots (Pran), yogurt, fennel (saunf), dry ginger (sonth), and the intense crimson hue of Kashmiri chilies and Ratan Jot.',
    history: 'Introduced to Kashmir by Mughals and perfected by Kashmiri Pandits and Muslim master wazas into an art form without using onions or garlic in traditional versions.',
    ingredients: ['Mutton Chops and Shank', 'Kashmiri Mirch Powder', 'Fennel Powder (Saunf)', 'Dry Ginger Powder (Sonth)', 'Hing', 'Ratan Jot or Saffron', 'Mustard Oil'],
    preparation: '1. Sear lamb pieces in smoking mustard oil until sealed.\n2. Whisk yogurt with Kashmiri chilli paste, sonth, and saunf.\n3. Simmer lamb gently on low heat with the spiced yogurt base until fork-tender.\n4. Infuse with ratan jot oil extract for royal ruby brilliance.',
    nutrition: { carbs: '8g', protein: '42g', fat: '26g', fiber: '2g' },
    topRestaurants: [
      { name: 'Ahdoos', rating: 4.9, address: 'Residency Road, Srinagar' },
      { name: 'Mughal Darbar', rating: 4.7, address: 'Sherwani Road, Srinagar' }
    ]
  }
];

export const ALL_CATEGORIES: FoodCategory[] = [
  { id: 'all', name: 'All Foods', icon: '✨', color: '#F59E0B' },
  { id: 'main-course', name: 'Main Course', icon: '🍛', color: '#EF4444' },
  { id: 'regional-cuisine', name: 'Regional Cuisine', icon: '🍜', color: '#8B5CF6' },
  { id: 'street-food', name: 'Street Food', icon: '🍢', color: '#F97316' },
  { id: 'fast-food', name: 'Fast Food', icon: '🍔', color: '#EC4899' },
  { id: 'desserts', name: 'Desserts', icon: '🍰', color: '#06B6D4' },
  { id: 'sweets', name: 'Traditional Sweets', icon: '🍨', color: '#10B981' },
  { id: 'drinks', name: 'Tea & Drinks', icon: '☕', color: '#84CC16' },
  { id: 'veg', name: 'Pure Vegetarian', icon: '🌱', color: '#22C55E' },
  { id: 'non-veg', name: 'Non-Vegetarian', icon: '🍗', color: '#E11D48' },
  { id: 'spicy', name: 'Spicy Treats', icon: '🔥', color: '#DC2626' },
  { id: 'healthy', name: 'Healthy & Ayurvedic', icon: '🥗', color: '#14B8A6' }
];

export const ALL_FESTIVALS: FestivalFood[] = [
  {
    id: 'durga-puja',
    name: 'Durga Puja Bhog & Feasts',
    festival: 'Durga Puja',
    season: 'Autumn (Sept-Oct)',
    banner: FOOD_IMAGES['durga-puja'],
    description: 'The grand 5-day celebration of Ma Durga with divine Khichuri Bhog, Labra, Luchi with Cholar Dal, Mishti Doi, and late-night street food pandal hopping.',
    keyDishes: ['Khichuri & Beguni', 'Cholar Dal with Coconut', 'Kosha Mangsho', 'Rosogolla & Sandesh', 'Mughlai Paratha'],
    states: ['West Bengal', 'Tripura', 'Assam', 'Odisha']
  },
  {
    id: 'diwali',
    name: 'Diwali Sweet Radiance',
    festival: 'Diwali (Deepavali)',
    season: 'Autumn (Oct-Nov)',
    banner: FOOD_IMAGES['diwali'],
    description: 'Festival of Lights celebrated across all Indian states with gift boxes of Kaju Katli, Besan Ladoo, Murukku, Gujiya, and lavish family banquets.',
    keyDishes: ['Kaju Katli', 'Besan Ladoo', 'Gujiya / Karanji', 'Murukku & Chakli', 'Gulab Jamun'],
    states: ['All India', 'Uttar Pradesh', 'Maharashtra', 'Gujarat', 'Tamil Nadu']
  },
  {
    id: 'eid',
    name: 'Eid-ul-Fitr Royal Delights',
    festival: 'Eid-ul-Fitr & Eid-ul-Adha',
    season: 'Spring / Summer',
    banner: FOOD_IMAGES['biryani'],
    description: 'A feast of celebration marking the end of Ramadan with sweet creamy Sheer Khurma, Dum Biryani, Galouti Kebabs, and Nihari.',
    keyDishes: ['Sheer Khurma', 'Mutton Dum Biryani', 'Shahi Tukda', 'Nihari with Khamiri Roti', 'Galouti Kebab'],
    states: ['Telangana', 'Delhi', 'Uttar Pradesh', 'Jammu and Kashmir', 'Kerala']
  },
  {
    id: 'pongal-onam',
    name: 'Harvest Fest: Pongal & Onam',
    festival: 'Pongal & Onam',
    season: 'Jan & Aug-Sept',
    banner: FOOD_IMAGES['pongal'],
    description: 'Harvest celebrations honoring Mother Nature. Sweet Sakkarai Pongal overflowing from clay pots, and the legendary 26-course Onam Sadya feast.',
    keyDishes: ['Sakkarai Pongal', 'Ven Pongal', 'Avial', 'Palada Payasam', 'Olan & Kalan'],
    states: ['Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Karnataka']
  }
];

export const ALL_REELS: FoodReel[] = [
  {
    id: 'reel-1',
    creator: {
      name: 'Chef Ranveer Brar Fans',
      handle: '@ranveer_flavors',
      avatar: FOOD_IMAGES['avatar-chef'],
      verified: true
    },
    title: 'Secret to 100-Layer Amritsari Kulcha in Clay Tandoor 🔥',
    dishName: 'Amritsari Kulcha',
    state: 'Punjab',
    city: 'Amritsar',
    likes: '128.4K',
    comments: '2,420',
    shares: '18.2K',
    audioTrack: 'Original Culinary Audio - Punjabi Dhaba Beats',
    videoThumbnail: FOOD_IMAGES['kulcha'],
    description: 'Watch how master chefs laminate the dough with desi ghee and roast it in the searing heat of a charcoal tandoor! Notice that golden crunch! 🤤🧈'
  },
  {
    id: 'reel-2',
    creator: {
      name: 'Kolkata Food Safari',
      handle: '@kolkata_bhog',
      avatar: FOOD_IMAGES['avatar-woman-2'],
      verified: true
    },
    title: 'Why Kolkata Biryani Potato is the Greatest Invention Ever 🥔✨',
    dishName: 'Kolkata Mutton Biryani',
    state: 'West Bengal',
    city: 'Kolkata',
    likes: '214.9K',
    comments: '4,890',
    shares: '45.1K',
    audioTrack: 'Flute & Sitar - City of Joy Vibes',
    videoThumbnail: FOOD_IMAGES['kolkata-biryani'],
    description: 'Slow-cooked on dum for 2 hours with saffron and meetha attar. That potato absorbs all the juices! Who is a Kolkata Biryani fan? Drop a ❤️!'
  },
  {
    id: 'reel-3',
    creator: {
      name: 'Mumbai Street Bites',
      handle: '@streetfood_mumbai',
      avatar: FOOD_IMAGES['avatar-man-2'],
      verified: false
    },
    title: 'Extreme Speed: Making 500 Vada Pavs in 10 Minutes! ⚡🍔',
    dishName: 'Mumbai Vada Pav',
    state: 'Maharashtra',
    city: 'Mumbai',
    likes: '340.2K',
    comments: '6,100',
    shares: '88.7K',
    audioTrack: 'Mumbai Dhol Tasha High Energy Remix',
    videoThumbnail: FOOD_IMAGES['vada-pav'],
    description: 'Dadar station legendary speed! The garlic chutney shower is hypnotic. Can you eat 3 in a row with fried green chilies? 🔥'
  },
  {
    id: 'reel-4',
    creator: {
      name: 'Nizami Rasoi Diaries',
      handle: '@hyderabad_feasts',
      avatar: FOOD_IMAGES['avatar-man-1'],
      verified: true
    },
    title: 'Breaking the Sealed Earthen Handi of Hyderabadi Dum Biryani 👑',
    dishName: 'Hyderabadi Dum Biryani',
    state: 'Telangana',
    city: 'Hyderabad',
    likes: '480.6K',
    comments: '9,340',
    shares: '92.3K',
    audioTrack: 'Royal Shehnai & Sufi Soul',
    videoThumbnail: FOOD_IMAGES['hyd-biryani'],
    description: 'The aroma of saffron, cardamom, and caramelized onions bursts open when that dough seal breaks! Irresistible feast for the senses!'
  },
  {
    id: 'reel-5',
    creator: {
      name: 'South Indian Tiffin Master',
      handle: '@dosa_craft',
      avatar: FOOD_IMAGES['avatar-woman-1'],
      verified: true
    },
    title: 'The Ultimate Mysore Butter Dosa Swirl Technique 🥞✨',
    dishName: 'Mysore Butter Masala Dosa',
    state: 'Karnataka',
    city: 'Mysuru',
    likes: '198.5K',
    comments: '3,110',
    shares: '32.4K',
    audioTrack: 'Morning Carnatic Fusion - Veena & Beatbox',
    videoThumbnail: FOOD_IMAGES['masala-dosa'],
    description: 'Crispy on the outside, fluffy inside with that fiery red garlic chutney smear and a golden river of desi butter! Breakfast goals! ☕'
  }
];

export const ALL_BADGES: PassportBadge[] = [
  {
    id: 'badge-bengal',
    name: 'Bengal Sweet Connoisseur',
    icon: '🍨',
    color: '#2563EB',
    state: 'West Bengal',
    requiredDishes: 5,
    description: 'Explore the sweet legacy of Rosogolla, Mishti Doi, and Shorshe Ilish.',
    unlocked: true,
    earnedDate: '2026-03-12'
  },
  {
    id: 'badge-punjab',
    name: 'Punjab Dhaba Legend',
    icon: '🧈',
    color: '#F59E0B',
    state: 'Punjab',
    requiredDishes: 5,
    description: 'Master the hearty soul of Makki di Roti, Butter Chicken, and Kulcha.',
    unlocked: true,
    earnedDate: '2026-04-05'
  },
  {
    id: 'badge-rajasthan',
    name: 'Royal Rajputana Palate',
    icon: '👑',
    color: '#EA580C',
    state: 'Rajasthan',
    requiredDishes: 5,
    description: 'Conquer the fiery Laal Maas and royal Dal Baati Churma.',
    unlocked: true,
    earnedDate: '2026-05-19'
  },
  {
    id: 'badge-street-food',
    name: 'Street Food Maha-Samrat',
    icon: '🍢',
    color: '#BE185D',
    state: 'All India',
    requiredDishes: 15,
    description: 'Tasted street food in 10+ iconic cities across India.',
    unlocked: true,
    earnedDate: '2026-06-22'
  },
  {
    id: 'badge-south',
    name: 'Dakshin Tiffin Master',
    icon: '☕',
    color: '#059669',
    state: 'South India',
    requiredDishes: 10,
    description: 'Mastered the art of Crispy Dosas, Idlis, and Chettinad spices.',
    unlocked: false,
    progress: '7/10 Dishes'
  },
  {
    id: 'badge-spice',
    name: 'Bhut Jolokia Spice Champion',
    icon: '🔥',
    color: '#DC2626',
    state: 'North-East',
    requiredDishes: 5,
    description: 'Braved the fiery chillies of Nagaland, Andhra, and Kolhapur.',
    unlocked: false,
    progress: '3/5 Dishes'
  },
  {
    id: 'badge-bharat-legend',
    name: 'Bharat Food Legend',
    icon: '🇮🇳',
    color: '#9333EA',
    state: 'All India',
    requiredDishes: 50,
    description: 'The ultimate milestone: Explored cuisines from all 28 States & 8 UTs.',
    unlocked: false,
    progress: '24/36 States'
  }
];

export const ALL_JOURNEY_STOPS: JourneyStop[] = [
  {
    id: 'stop-1',
    title: 'Stop 1: Saffron Valley of Kashmir',
    state: 'Jammu and Kashmir',
    city: 'Srinagar',
    icon: '🏔️',
    elevation: '1,585m',
    unlocked: true,
    specialty: 'Wazwan Feast & Saffron Kahwa',
    fact: 'Kashmir produces the world\'s most prized Mongra saffron, cultivated in the clay plateaus of Pampore since the 5th century BC.',
    badgeReward: 'Himalayan Explorer'
  },
  {
    id: 'stop-2',
    title: 'Stop 2: Golden Hearth of Punjab',
    state: 'Punjab',
    city: 'Amritsar',
    icon: '🌾',
    elevation: '234m',
    unlocked: true,
    specialty: 'Amritsari Kulcha & White Butter',
    fact: 'The Golden Temple Langar kitchen serves over 100,000 free wholesome vegetarian meals every single day with deep love and equality.',
    badgeReward: 'Amritsari Swaad'
  },
  {
    id: 'stop-3',
    title: 'Stop 3: Nawabi Spices of Awadh',
    state: 'Uttar Pradesh',
    city: 'Lucknow',
    icon: '🕌',
    elevation: '123m',
    unlocked: true,
    specialty: 'Galouti Kebab & Dum Biryani',
    fact: 'Galouti kebabs were invented for an aging Nawab with 160 secret spices so soft that no teeth were required to savor it.',
    badgeReward: 'Awadhi Nawab'
  },
  {
    id: 'stop-4',
    title: 'Stop 4: Sweet Confluence of Bengal',
    state: 'West Bengal',
    city: 'Kolkata',
    icon: '🐅',
    elevation: '9m',
    unlocked: true,
    specialty: 'Kolkata Biryani & Rosogolla',
    fact: 'Nobin Chandra Das invented the spongy Rosogolla in 1868 by boiling chhena balls in hot sugar syrup.',
    badgeReward: 'Bengal Sweet Master'
  },
  {
    id: 'stop-5',
    title: 'Stop 5: Royal Nizam Table of Deccan',
    state: 'Telangana',
    city: 'Hyderabad',
    icon: '💎',
    elevation: '542m',
    unlocked: true,
    specialty: 'Kachchi Dum Biryani & Haleem',
    fact: 'Hyderabadi Haleem has a GI tag and is slow-cooked for 12 hours with pounded wheat, meat, and pure ghee.',
    badgeReward: 'Nizami Shaan'
  },
  {
    id: 'stop-6',
    title: 'Stop 6: Fragrant Tiffin & Filter Kaapi',
    state: 'Karnataka',
    city: 'Bengaluru & Mysuru',
    icon: '☕',
    elevation: '920m',
    unlocked: false,
    specialty: 'Mysore Butter Dosa & Mysore Pak',
    fact: 'Mysore Pak was created by palace chef Kakasura Madappa for Maharaja Krishnaraja Wadiyar using gram flour, ghee, and sugar.',
    badgeReward: 'Darshini Master'
  },
  {
    id: 'stop-7',
    title: 'Stop 7: Chettinad Pepper & Banana Leaf',
    state: 'Tamil Nadu',
    city: 'Madurai & Chettinad',
    icon: '🛕',
    elevation: '101m',
    unlocked: false,
    specialty: 'Chettinad Pepper Chicken & Jigarthanda',
    fact: 'Chettiar seafaring merchants brought back spices from Burma, Ceylon, and Southeast Asia to craft one of the world\'s most aromatic cuisines.',
    badgeReward: 'Chettinad Connoisseur'
  },
  {
    id: 'stop-8',
    title: 'Stop 8: Land\'s End & Ocean Feast',
    state: 'Tamil Nadu',
    city: 'Kanyakumari',
    icon: '🌊',
    elevation: '0m',
    unlocked: false,
    specialty: 'Three-Sea Fish Curry & Pazha Bajji',
    fact: 'Kanyakumari marks the sacred confluence of three great water bodies: Arabian Sea, Indian Ocean, and Bay of Bengal.',
    badgeReward: 'Bharat Mahayatri'
  }
];

export const ALL_OFFERS: OfferDeal[] = [
  {
    id: 'offer-1',
    title: '50% OFF Royal Awadhi Food Festival',
    code: 'AWADH50',
    discount: '50% OFF',
    validTill: '31st Oct 2026',
    tag: 'Festival Special',
    image: FOOD_IMAGES['biryani'],
    description: 'Enjoy flat 50% discount on all Royal Lucknowi Biryanis and Galouti Kebabs at partner heritage restaurants.'
  },
  {
    id: 'offer-2',
    title: 'Buy 1 Get 1 Free: Sweet Bengal Festival',
    code: 'BENGALBOGO',
    discount: 'BOGO FREE',
    validTill: '15th Nov 2026',
    tag: 'Trending Deal',
    image: FOOD_IMAGES['rasgulla'],
    description: 'Order 1kg authentic Kolkata Rosogolla or Baked Mishti Doi and get another box absolutely free!'
  },
  {
    id: 'offer-3',
    title: 'Free Filter Kaapi with Every Mysore Dosa',
    code: 'KAAPIFREE',
    discount: 'FREE DRINK',
    validTill: '30th Nov 2026',
    tag: 'Breakfast Delight',
    image: FOOD_IMAGES['masala-dosa'],
    description: 'Relish a complimentary frothy brass-tumbler Filter Coffee with any signature Benne Dosa.'
  }
];
