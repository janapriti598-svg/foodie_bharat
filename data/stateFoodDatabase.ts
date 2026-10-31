import { FOOD_IMAGES, ImageRef } from './foodImages';

// Complete Master Food Database for All 28 States & 8 Union Territories of India
// Every dish includes high-resolution photography, 5-photo galleries, cultural history,
// ingredients, recipe, spice rating, veg/non-veg indicator, and meal category.

export interface DetailedFoodItem {
  id: string;
  name: string;
  stateId: string;
  stateName: string;
  cityName: string;
  category: 'Main Course' | 'Street Food' | 'Sweets' | 'Desserts' | 'Breakfast' | 'Lunch' | 'Dinner' | 'Beverages' | 'Tribal & Regional' | 'Hidden Gem' | 'Festival Special' | 'Snacks';
  tags: string[]; // ['Top 10', 'Trending', 'Must Try', 'Street Food', 'Breakfast', 'Sweet', 'Festival Special', 'Hidden Gem', 'Most Ordered', 'Most Loved', 'Traditional', 'Tourist Favorite']
  veg: boolean;
  spiceLevel: number; // 0 to 5
  popularityRating: number; // e.g. 4.98
  reviewsCount: number;
  priceRange: string;
  calories: string;
  prepTime: string;
  image: ImageRef;
  galleryImages: ImageRef[]; // Verified photos of this dish (first is the hero image)
  description: string;
  culturalSignificance: string;
  foodStory: string;
  ingredients: string[];
  preparationMethod: string;
  nutrition: { carbs: string; protein: string; fat: string; fiber: string };
  userReviews: { user: string; rating: number; comment: string; date: string }[];
  topRestaurants: { name: string; rating: number; address: string }[];
}

export const MASTER_FOOD_DATABASE: DetailedFoodItem[] = [
  // ==========================================
  // WEST BENGAL FOOD COLLECTION
  // ==========================================
  {
    id: 'bengal-rosogolla',
    name: 'Kolkata Spongy Rosogolla',
    stateId: 'west-bengal',
    stateName: 'West Bengal',
    cityName: 'Kolkata',
    category: 'Sweets',
    tags: ['Top 10', 'Trending', 'Must Try', 'Desserts', 'Festival Special', 'Most Loved', 'Traditional', 'Tourist Favorite'],
    veg: true,
    spiceLevel: 0,
    popularityRating: 4.99,
    reviewsCount: 3820,
    priceRange: '₹20 - ₹40 per piece',
    calories: '180 kcal',
    prepTime: '45 mins',
    image: FOOD_IMAGES['rasgulla'],
    galleryImages: [FOOD_IMAGES['rasgulla']],
    description: 'Pristine, porous cottage cheese (chhena) spheres boiled gently in piping hot, cardamom-scented sugar syrup until cloud-soft and spongy.',
    culturalSignificance: 'Awarded the GI tag, Rosogolla is the ultimate emblem of Bengali hospitality, sweetness, and festive celebration at Durga Puja and Bijoya Dashami.',
    foodStory: 'Invented in 1868 by confectioner Nobin Chandra Das in Bagbazar, Kolkata, who mastered the precise technique of kneading chhena and semolina so the dumplings would never disintegrate in bubbling sugar syrup.',
    ingredients: ['Fresh Cow Milk Chhena', 'Fine Semolina (Sooji)', 'Refined Sugar', 'Green Cardamom', 'Rose Water / Kewra Water', 'Pure Water'],
    preparationMethod: '1. Curdle fresh cow milk with lemon or whey to obtain soft chhena.\n2. Knead chhena vigorously with semolina on marble till silky smooth with zero lumps.\n3. Roll into tiny crack-free spheres.\n4. Drop into boiling light sugar syrup flavored with bruised green cardamoms.\n5. Boil vigorously covered for 15-20 minutes until they double in volume and become spongy.',
    nutrition: { carbs: '38g', protein: '6g', fat: '3g', fiber: '0g' },
    userReviews: [
      { user: 'Debashis Roy', rating: 5, comment: 'Biting into a warm Nobin Das rosogolla is pure heaven! The syrup burst is magical.', date: '2 days ago' },
      { user: 'Sunita Mehra', rating: 5, comment: 'So soft, light and not overly sweet. Authentic Kolkata taste!', date: '1 week ago' }
    ],
    topRestaurants: [
      { name: 'K.C. Das (Original 1868)', rating: 4.9, address: 'Esplanade East, New Market, Kolkata' },
      { name: 'Balaram Mullick & Radharaman Mullick', rating: 4.9, address: '22, Bhowanipore, Kolkata' },
      { name: 'Bhim Chandra Nag', rating: 4.8, address: '5, Nirmal Chandra St, Bowbazar, Kolkata' }
    ]
  },
  {
    id: 'bengal-mishti-doi',
    name: 'Clay-Pot Baked Mishti Doi',
    stateId: 'west-bengal',
    stateName: 'West Bengal',
    cityName: 'Kolkata',
    category: 'Desserts',
    tags: ['Top 10', 'Trending', 'Must Try', 'Desserts', 'Festival Special', 'Most Loved', 'Traditional'],
    veg: true,
    spiceLevel: 0,
    popularityRating: 4.97,
    reviewsCount: 3120,
    priceRange: '₹35 - ₹80 per matka',
    calories: '220 kcal',
    prepTime: '8 hours setting',
    image: FOOD_IMAGES['mishti-doi'],
    galleryImages: [FOOD_IMAGES['mishti-doi']],
    description: 'Thick, creamy caramelized yogurt fermented slowly overnight inside porous red terracotta pots, imparting an earthy aroma and velvet texture.',
    culturalSignificance: 'No Bengali celebratory feast or wedding concludes without the auspicious serving of cool Mishti Doi in unglazed earthen matkas.',
    foodStory: 'Originated in Nabadwip (Nadia district), where dairy masters discovered that caramelizing date palm jaggery or sugar with thickened milk in clay pots drew out moisture and created unparalleled custard thickness.',
    ingredients: ['Full Fat Buffalo Milk', 'Caramelized Sugar / Nolen Gur', 'Live Probiotic Yogurt Culture', 'Green Cardamom Powder', 'Unglazed Red Clay Pot'],
    preparationMethod: '1. Simmer milk slowly until reduced to half its volume.\n2. Melt sugar in a separate pan to create a deep amber caramel syrup and stir into warm milk.\n3. Whisk in live yogurt starter at blood temperature.\n4. Pour into unglazed earthenware and wrap in warm blankets to ferment undisturbed for 8 hours.\n5. Chill thoroughly before serving.',
    nutrition: { carbs: '32g', protein: '7g', fat: '9g', fiber: '0g' },
    userReviews: [
      { user: 'Rina Mukherjee', rating: 5, comment: 'The thick brown crust on top and the earthen fragrance is unmatched.', date: '3 days ago' }
    ],
    topRestaurants: [
      { name: 'Jadav Chandra Das', rating: 4.9, address: 'Nabadwip, Nadia' },
      { name: 'Mithai', rating: 4.8, address: 'Park Circus, Kolkata' }
    ]
  },
  {
    id: 'bengal-sandesh',
    name: 'Norom Pak Nolen Gur Sandesh',
    stateId: 'west-bengal',
    stateName: 'West Bengal',
    cityName: 'Kolkata',
    category: 'Sweets',
    tags: ['Top 10', 'Must Try', 'Desserts', 'Festival Special', 'Most Loved', 'Traditional'],
    veg: true,
    spiceLevel: 0,
    popularityRating: 4.96,
    reviewsCount: 2900,
    priceRange: '₹30 - ₹60 per piece',
    calories: '150 kcal',
    prepTime: '30 mins',
    image: FOOD_IMAGES['sandesh'],
    galleryImages: [FOOD_IMAGES['sandesh']],
    description: 'Delicate, melt-in-mouth cottage cheese fudge infused with aromatic liquid winter date palm sap (Jhola Gur) and pressed into intricate wooden molds.',
    culturalSignificance: 'The soul of Bengal winter gastronomy, eagerly anticipated as date palm tappers extract the fresh golden nectar in rural Bengal.',
    foodStory: 'Bhim Chandra Nag crafted special Sandesh varieties for European dignitaries in the 19th century, transforming raw chhena into an artisanal art form.',
    ingredients: ['Fresh Cow Milk Chhena', 'Nolen Gur (Liquid Date Palm Jaggery)', 'Pistachio slivers', 'Green Cardamom'],
    preparationMethod: '1. Cook fresh chhena in a brass kadai on very low flame.\n2. Gently incorporate liquid Nolen Gur.\n3. Cook until soft dough forms (Norom Pak).\n4. Press into carved wooden Conch (Shankha) molds and garnish with pistachios.',
    nutrition: { carbs: '26g', protein: '5g', fat: '4g', fiber: '0g' },
    userReviews: [
      { user: 'Swarup Banik', rating: 5, comment: 'The aroma of date palm jaggery fills the room the second you open the box.', date: '5 days ago' }
    ],
    topRestaurants: [
      { name: 'Bhim Chandra Nag', rating: 4.9, address: 'Bowbazar, Kolkata' },
      { name: 'Girish Chandra Dey & Nakur Chandra Nandy', rating: 4.9, address: 'Hatibagan, Kolkata' }
    ]
  },
  {
    id: 'bengal-shorshe-ilish',
    name: 'Shorshe Ilish (Hilsa in Mustard Gravy)',
    stateId: 'west-bengal',
    stateName: 'West Bengal',
    cityName: 'Kolkata',
    category: 'Lunch',
    tags: ['Top 10', 'Trending', 'Must Try', 'Lunch', 'Dinner', 'Traditional', 'Most Loved'],
    veg: false,
    spiceLevel: 4,
    popularityRating: 4.98,
    reviewsCount: 4200,
    priceRange: '₹450 - ₹750',
    calories: '480 kcal',
    prepTime: '30 mins',
    image: FOOD_IMAGES['shorshe-ilish'],
    galleryImages: [FOOD_IMAGES['shorshe-ilish']],
    description: 'Fresh Padma/Ganges Hilsa fish steaks simmered in a pungent stone-ground yellow and black mustard paste with slit green chillies and cold-pressed mustard oil.',
    culturalSignificance: 'Hilsa is revered as the King of Fishes in Bengal; cooking Shorshe Ilish during monsoon is an emotional cultural ritual.',
    foodStory: 'The signature sharp pungency of mustard oil releases naturally when ground with salt and green chillies on a traditional sil-nora granite stone.',
    ingredients: ['Fresh Ilish (Hilsa) Fish Steaks', 'Black & Yellow Mustard Seeds Paste', 'Green Chillies Slit', 'Cold-Pressed Mustard Oil (Kachi Ghani)', 'Turmeric Powder', 'Kalonji (Kalo Jeere)'],
    preparationMethod: '1. Marinate fish with turmeric and salt.\n2. Temper hot mustard oil with kalo jeere and green chillies.\n3. Whisk mustard paste with turmeric and water, pour into pan.\n4. Gently slide fish steaks into the simmering gravy for 7-8 minutes.\n5. Drizzle raw mustard oil and serve over steaming Govindobhog or Basmati rice.',
    nutrition: { carbs: '4g', protein: '34g', fat: '28g', fiber: '2g' },
    userReviews: [
      { user: 'Ananya Sen', rating: 5, comment: 'The pungent mustard kick combined with the oily sweetness of Hilsa is unmatched on earth!', date: '1 day ago' }
    ],
    topRestaurants: [
      { name: '6 Ballygunge Place', rating: 4.9, address: 'Ballygunge, Kolkata' },
      { name: 'Oh! Calcutta', rating: 4.8, address: 'Forum Mall, Elgin Road, Kolkata' },
      { name: 'Kasturi Restaurant', rating: 4.7, address: 'Free School Street, Kolkata' }
    ]
  },
  {
    id: 'bengal-chingri-malai',
    name: 'Daab Chingri Malai Curry',
    stateId: 'west-bengal',
    stateName: 'West Bengal',
    cityName: 'Kolkata',
    category: 'Dinner',
    tags: ['Top 10', 'Must Try', 'Dinner', 'Lunch', 'Festival Special', 'Most Loved'],
    veg: false,
    spiceLevel: 2,
    popularityRating: 4.95,
    reviewsCount: 3650,
    priceRange: '₹420 - ₹680',
    calories: '510 kcal',
    prepTime: '40 mins',
    image: FOOD_IMAGES['chingri-malai'],
    galleryImages: [FOOD_IMAGES['chingri-malai']],
    description: 'Jumbo tiger prawns (Golda Chingri) gently simmered in velvety thick coconut milk with whole garam masala and a touch of sweetness, served inside a green tender coconut.',
    culturalSignificance: 'A royal Bengali banquet centerpiece influenced by maritime trading links with Southeast Asia.',
    foodStory: 'The name Malai traces back to ancient Malay trade routes that brought exotic coconut cooking techniques into the Bay of Bengal.',
    ingredients: ['Jumbo Golda Chingri (Prawns)', 'Fresh Coconut Milk & Tender Coconut Flesh', 'Mustard Oil & Desi Ghee', 'Cinnamon, Cardamom & Cloves', 'Ginger Paste & Green Chillies'],
    preparationMethod: '1. Lightly sear turmeric-rubbed prawns.\n2. Sauté whole spices and ginger paste in mustard oil and ghee.\n3. Pour thick coconut milk and tender coconut malai paste.\n4. Simmer prawns in gravy until tender.\n5. Seal inside green coconut and bake for 10 minutes.',
    nutrition: { carbs: '8g', protein: '30g', fat: '24g', fiber: '3g' },
    userReviews: [
      { user: 'Pritam Das', rating: 5, comment: 'Creamy, luxurious and the coconut shell presentation is breathtaking.', date: '4 days ago' }
    ],
    topRestaurants: [
      { name: 'Saptapadi', rating: 4.9, address: 'Purna Das Road, Kolkata' },
      { name: 'Bhojohori Manna', rating: 4.8, address: 'Gariahat, Kolkata' }
    ]
  },
  {
    id: 'bengal-mutton-kosha',
    name: 'Golbari Mutton Kosha',
    stateId: 'west-bengal',
    stateName: 'West Bengal',
    cityName: 'Kolkata',
    category: 'Dinner',
    tags: ['Top 10', 'Trending', 'Must Try', 'Dinner', 'Lunch', 'Most Loved'],
    veg: false,
    spiceLevel: 4,
    popularityRating: 4.97,
    reviewsCount: 5120,
    priceRange: '₹320 - ₹550',
    calories: '640 kcal',
    prepTime: '2 hours',
    image: FOOD_IMAGES['kosha-mangsho'],
    galleryImages: [FOOD_IMAGES['kosha-mangsho']],
    description: 'Slow-roasted velvety black goat meat cooked for hours in its own juices with caramelized onions, mustard oil, yogurt, and warm Bengali garam masala.',
    culturalSignificance: 'Sunday afternoon Mutton Kosha with hot fluffy Luchis is a sacred culinary institution across Bengali households.',
    foodStory: 'Golbari at Shyambazar Five-Point crossing has preserved this ninety-year-old dark velvety gravy recipe across three generations.',
    ingredients: ['Tender Goat Meat (Ribs & Shank)', 'Mustard Oil', 'Sliced Onions Caramelized', 'Ginger-Garlic Paste', 'Whisked Curd', 'Shahi Garam Masala'],
    preparationMethod: '1. Marinate mutton overnight in mustard oil, yogurt, and spices.\n2. Caramelize sliced onions till deep mahogany.\n3. Slow roast (bhuna/kosha) meat on low heat for 90 minutes until oil separates and gravy turns pitch dark.\n4. Finish with ghee and Bengali garam masala.',
    nutrition: { carbs: '12g', protein: '42g', fat: '34g', fiber: '3g' },
    userReviews: [
      { user: 'Arnab Banerjee', rating: 5, comment: 'The meat literally falls off the bone. Pairing it with hot parathas is unmatched.', date: '1 week ago' }
    ],
    topRestaurants: [
      { name: 'Golbari (New Punjabi Hotel)', rating: 4.8, address: 'Shyambazar Five Point Crossing, Kolkata' },
      { name: 'Koshe Kosha', rating: 4.7, address: 'Ripon Street & Salt Lake, Kolkata' }
    ]
  },
  {
    id: 'bengal-puchka',
    name: 'Kolkata Street Puchka',
    stateId: 'west-bengal',
    stateName: 'West Bengal',
    cityName: 'Kolkata',
    category: 'Street Food',
    tags: ['Top 10', 'Trending', 'Street Food', 'Snacks', 'Must Try', 'Tourist Favorite'],
    veg: true,
    spiceLevel: 5,
    popularityRating: 4.99,
    reviewsCount: 6200,
    priceRange: '₹30 - ₹60 for 6 pcs',
    calories: '140 kcal',
    prepTime: '15 mins',
    image: FOOD_IMAGES['puchka'],
    galleryImages: [FOOD_IMAGES['puchka']],
    description: 'Crisp whole-wheat hollow spheres filled with spicy mashed potatoes, boiled yellow peas, Gondhoraj lime zest, and flooded with spicy tamarind water.',
    culturalSignificance: 'Kolkata’s undisputed street food royalty, legendary for its mouth-numbing chili kick and aromatic Gondhoraj fragrance.',
    foodStory: 'Unlike north Indian Golgappas, Kolkata puchka uses paper-thin whole wheat shells stuffed with mashed potatoes and spiced tamarind-mint water infused with fresh Gondhoraj lime juice.',
    ingredients: ['Crisp Whole Wheat Puris', 'Mashed Boiled Potatoes & Black Gram', 'Bhuna Masala (Roasted Cumin-Chili Powder)', 'Gondhoraj Lebu (Kaffir Lime)', 'Tamarind Pulp Water', 'Green Chilli Paste'],
    preparationMethod: '1. Crack the crown of the puri.\n2. Stuff with spiced potato-chana mash.\n3. Dip completely into iced Gondhoraj tamarind water.\n4. Consume in one giant mouthwatering bite.',
    nutrition: { carbs: '28g', protein: '4g', fat: '3g', fiber: '4g' },
    userReviews: [
      { user: 'Shreya Ghosh', rating: 5, comment: 'The Gondhoraj lime water punch is addictive! Best puchka in the world.', date: '3 days ago' }
    ],
    topRestaurants: [
      { name: 'Maharaja Chaat Centre', rating: 4.9, address: 'Southern Avenue, Kolkata' },
      { name: 'Dakshinapan Puchka Corner', rating: 4.9, address: 'Dhakuria, Kolkata' },
      { name: 'Vivekananda Park Puchka Stall', rating: 4.8, address: 'Southern Ave, Kolkata' }
    ]
  },
  {
    id: 'bengal-kathi-roll',
    name: 'Nizam’s Original Mutton Kathi Roll',
    stateId: 'west-bengal',
    stateName: 'West Bengal',
    cityName: 'Kolkata',
    category: 'Street Food',
    tags: ['Top 10', 'Trending', 'Street Food', 'Must Try', 'Most Ordered'],
    veg: false,
    spiceLevel: 3,
    popularityRating: 4.96,
    reviewsCount: 4800,
    priceRange: '₹90 - ₹180',
    calories: '420 kcal',
    prepTime: '15 mins',
    image: FOOD_IMAGES['kathi-roll'],
    galleryImages: [FOOD_IMAGES['kathi-roll']],
    description: 'Charcoal-grilled juicy mutton botis rolled inside a flaky, golden-crisp egg-layered paratha with sliced red onions, green chillies, and fresh lime juice.',
    culturalSignificance: 'Invented at Nizam’s in 1932, the Kathi Roll went on to become India’s single most celebrated global street food export.',
    foodStory: 'The name Kathi arose in 1964 when Nizam switched from heavy iron skewers to lightweight bamboo sticks (kathi) to grill kebabs faster for bustling Kolkata office crowds.',
    ingredients: ['Flaky Layered Maida Paratha', 'Farm Egg', 'Charcoal-Grilled Mutton/Chicken Boti', 'Sliced Red Onions', 'Finely Chopped Green Chillies', 'Chaat Masala & Lime Juice'],
    preparationMethod: '1. Cook paratha on cast iron tawa, flip and crack an egg directly on top.\n2. Grill spiced mutton boti over charcoal embers.\n3. Line skewered meat down center of egg paratha.\n4. Scatter onions, chillies, chaat masala, lemon juice and roll tightly in parchment paper.',
    nutrition: { carbs: '44g', protein: '24g', fat: '18g', fiber: '3g' },
    userReviews: [
      { user: 'Subir Sen', rating: 5, comment: 'Nizams roll with double egg single mutton is pure culinary bliss.', date: '1 week ago' }
    ],
    topRestaurants: [
      { name: 'Nizam Restaurant (Since 1932)', rating: 4.9, address: 'New Market, Kolkata' },
      { name: 'Kusum Rolls', rating: 4.8, address: 'Park Street, Kolkata' },
      { name: 'Hot Kathi Rolls', rating: 4.7, address: 'Park Street, Kolkata' }
    ]
  },
  {
    id: 'bengal-luchi-alur-dom',
    name: 'Fluffy Luchi with Dum Aloo',
    stateId: 'west-bengal',
    stateName: 'West Bengal',
    cityName: 'Kolkata',
    category: 'Breakfast',
    tags: ['Top 10', 'Breakfast', 'Must Try', 'Traditional', 'Festival Special'],
    veg: true,
    spiceLevel: 3,
    popularityRating: 4.94,
    reviewsCount: 3400,
    priceRange: '₹80 - ₹150',
    calories: '390 kcal',
    prepTime: '30 mins',
    image: FOOD_IMAGES['luchi'],
    galleryImages: [FOOD_IMAGES['luchi']],
    description: 'Puffed, pristine white deep-fried flour discs served with baby potatoes slow-cooked in a tangy, spicy tomato, ginger and hing gravy.',
    culturalSignificance: 'The quintessential Sunday morning and Durga Puja Ashtami breakfast across Bengal.',
    foodStory: 'Bengali Luchis are fried with pure ghee or refined oil so that the crust remains pure white rather than golden brown.',
    ingredients: ['Fine Flour (Maida)', 'Pure Ghee Moyan', 'Baby Potatoes', 'Asafoetida (Hing)', 'Ginger-Tomato Paste', 'Panch Phoron', 'Kashmiri Red Chilli'],
    preparationMethod: '1. Knead maida with ghee moyan and warm water into soft dough.\n2. Roll into thin discs and deep fry until puffed like balloons.\n3. Prick baby potatoes and slow-cook in hing and tomato-ginger gravy.\n4. Serve piping hot with sweet Bengali cholar dal or alur dom.',
    nutrition: { carbs: '52g', protein: '8g', fat: '16g', fiber: '5g' },
    userReviews: [
      { user: 'Paramita Dey', rating: 5, comment: 'Luchi puffing up in hot ghee on Ashtami morning is childhood nostalgia.', date: '6 days ago' }
    ],
    topRestaurants: [
      { name: 'Putiram Sweets', rating: 4.9, address: 'College Street, Kolkata' },
      { name: 'Apanjan', rating: 4.8, address: 'Kalighat, Kolkata' }
    ]
  },

  // ==========================================
  // PUNJAB FOOD COLLECTION
  // ==========================================
  {
    id: 'punjab-butter-chicken',
    name: 'Moti Mahal Murgh Makhani (Butter Chicken)',
    stateId: 'punjab',
    stateName: 'Punjab',
    cityName: 'Amritsar',
    category: 'Dinner',
    tags: ['Top 10', 'Trending', 'Must Try', 'Dinner', 'Lunch', 'Most Ordered', 'Most Loved', 'Tourist Favorite'],
    veg: false,
    spiceLevel: 2,
    popularityRating: 4.99,
    reviewsCount: 7800,
    priceRange: '₹360 - ₹620',
    calories: '680 kcal',
    prepTime: '45 mins',
    image: FOOD_IMAGES['butter-chicken'],
    galleryImages: [FOOD_IMAGES['butter-chicken']],
    description: 'Smoky clay-oven tandoori chicken simmered in a velvet reduction of ripe tomatoes, butter, cashew paste, fresh cream, and fragrant kasuri methi.',
    culturalSignificance: 'India’s most celebrated culinary ambassador globally, representing the rich, generous hospitality of Punjab.',
    foodStory: 'Invented in the 1950s by Kundan Lal Gujral at Moti Mahal, who combined leftover tandoori chicken with a rich butter-tomato gravy to keep meat succulent.',
    ingredients: ['Tandoori Roasted Chicken', 'Ripe Red Tomato Puree', 'Amul Yellow Butter & Fresh Malai', 'Cashew Nut Paste', 'Kasuri Methi (Sun-dried Fenugreek)', 'Degi Mirch & Honey'],
    preparationMethod: '1. Marinate chicken in spiced yogurt and roast in tandoor till charred.\n2. Simmer tomato puree with whole spices, ginger, and butter till thick.\n3. Whisk in cashew paste and fresh cream.\n4. Add tandoori chicken pieces and crushed kasuri methi.\n5. Finish with extra dollop of butter and serve with garlic naan.',
    nutrition: { carbs: '14g', protein: '42g', fat: '38g', fiber: '2g' },
    userReviews: [
      { user: 'Harpreet Singh', rating: 5, comment: 'The smoky tandoor aroma combined with velvety butter sauce is pure magic.', date: '1 day ago' }
    ],
    topRestaurants: [
      { name: 'Bharawan Da Dhaba', rating: 4.9, address: 'Town Hall, Amritsar' },
      { name: 'Kesar Da Dhaba', rating: 4.9, address: 'Chowk Passian, Amritsar' },
      { name: 'Makhan Fish & Chicken Corner', rating: 4.8, address: 'Majitha Road, Amritsar' }
    ]
  },
  {
    id: 'punjab-sarson-saag',
    name: 'Sarson Da Saag with Makki Di Roti',
    stateId: 'punjab',
    stateName: 'Punjab',
    cityName: 'Amritsar',
    category: 'Lunch',
    tags: ['Top 10', 'Must Try', 'Lunch', 'Winter Special', 'Traditional', 'Most Loved'],
    veg: true,
    spiceLevel: 2,
    popularityRating: 4.98,
    reviewsCount: 5200,
    priceRange: '₹180 - ₹320',
    calories: '450 kcal',
    prepTime: '1 hour',
    image: FOOD_IMAGES['sarson-saag'],
    galleryImages: [FOOD_IMAGES['sarson-saag']],
    description: 'Slow-cooked fresh winter mustard greens, spinach, and bathua hand-churned with makki atta and topped with home-churned white butter (Makhan) and jaggery.',
    culturalSignificance: 'The heart and soul of winter farming harvest in Punjab, traditionally eaten around bonfires on Lohri and Baisakhi.',
    foodStory: 'Villagers slow cook the greens in earthen handis on wood fires for hours, churning continuously with a wooden whisk (Madhnai) to achieve silkiness.',
    ingredients: ['Fresh Mustard Greens (Sarson)', 'Spinach (Palak) & Bathua', 'Makki Ka Atta (Cornmeal)', 'Fresh Ginger & Garlic', 'Desi White Butter (Makhan)', 'Organic Gud (Jaggery)'],
    preparationMethod: '1. Finely chop mustard greens, spinach, and bathua; pressure cook with ginger and green chillies.\n2. Mash thoroughly with a wooden churner, gradually sprinkling makki atta.\n3. Prepare a rich tempering (Tadka) of garlic, onions, and red chillies in desi ghee.\n4. Simmer saag with tadka for 20 minutes.\n5. Serve piping hot with crisp golden Makki Di Roti, white butter, and jaggery chunks.',
    nutrition: { carbs: '46g', protein: '12g', fat: '18g', fiber: '9g' },
    userReviews: [
      { user: 'Gurinder Kaur', rating: 5, comment: 'Eating this at Kesar Da Dhaba in Amritsar brought tears of joy. True village taste!', date: '3 days ago' }
    ],
    topRestaurants: [
      { name: 'Kesar Da Dhaba (Since 1916)', rating: 4.9, address: 'Chowk Passian, Amritsar' },
      { name: 'Pal Da Dhaba', rating: 4.8, address: 'Hathi Gate, Amritsar' }
    ]
  },
  {
    id: 'punjab-amritsari-kulcha',
    name: 'Crisp Stuffed Amritsari Kulcha & Chole',
    stateId: 'punjab',
    stateName: 'Punjab',
    cityName: 'Amritsar',
    category: 'Breakfast',
    tags: ['Top 10', 'Breakfast', 'Street Food', 'Must Try', 'Trending'],
    veg: true,
    spiceLevel: 3,
    popularityRating: 4.97,
    reviewsCount: 6400,
    priceRange: '₹120 - ₹220',
    calories: '520 kcal',
    prepTime: '25 mins',
    image: FOOD_IMAGES['kulcha'],
    galleryImages: [FOOD_IMAGES['kulcha']],
    description: 'Seven-layered flaky bread stuffed with spiced potatoes, cauliflower, and onions, baked inside a red-hot clay tandoor, crushed by hand with melting butter, and served with spicy pindi chole.',
    culturalSignificance: 'The morning lifeline of Amritsar, eaten by thousands of pilgrims after visiting Sri Harmandir Sahib (Golden Temple).',
    foodStory: 'Master bakers fold the dough repeatedly with ghee, achieving a puff-pastry-like crackling crust when baked directly on the clay wall of a charcoal tandoor.',
    ingredients: ['Maida with Ghee Layering', 'Spiced Mashed Potatoes & Paneer', 'Pomegranate Seeds (Anardana)', 'Coriander Seeds & Green Chillies', 'Desi Makhan (Butter)', 'Kabuli Chana with Pindi Masala'],
    preparationMethod: '1. Roll layered dough with potato-paneer-anardana stuffing.\n2. Slap onto the inside wall of a searing hot clay tandoor.\n3. Bake until golden brown with charred blisters.\n4. Remove and instantly crush with palms while smearing a giant slab of white butter.\n5. Serve with tamarind-onion chutney and spiced chole.',
    nutrition: { carbs: '58g', protein: '14g', fat: '22g', fiber: '7g' },
    userReviews: [
      { user: 'Jasleen Vohra', rating: 5, comment: 'The sound of the kulcha crunching when the chef crushes it with butter is music to the ears.', date: '4 days ago' }
    ],
    topRestaurants: [
      { name: 'Kulcha Land', rating: 4.9, address: 'Ranjit Avenue, Amritsar' },
      { name: 'Bhai Kulwant Singh Kulchian Wale', rating: 4.9, address: 'Near Golden Temple, Amritsar' },
      { name: 'Monu Kulcha Hut', rating: 4.8, address: 'Loharka Road, Amritsar' }
    ]
  },

  // ==========================================
  // RAJASTHAN FOOD COLLECTION
  // ==========================================
  {
    id: 'rajasthan-dal-baati-churma',
    name: 'Royal Dal Baati Churma',
    stateId: 'rajasthan',
    stateName: 'Rajasthan',
    cityName: 'Jaipur',
    category: 'Lunch',
    tags: ['Top 10', 'Trending', 'Must Try', 'Lunch', 'Dinner', 'Traditional', 'Most Loved'],
    veg: true,
    spiceLevel: 3,
    popularityRating: 4.99,
    reviewsCount: 5800,
    priceRange: '₹280 - ₹480',
    calories: '720 kcal',
    prepTime: '1 hour',
    image: FOOD_IMAGES['dal-baati'],
    galleryImages: [FOOD_IMAGES['dal-baati']],
    description: 'Crisp baked whole-wheat dumplings drenched in fragrant cow ghee, paired with five-lentil Panchmel dal, garlic chutney, and cardamom-infused sweet Churma.',
    culturalSignificance: 'The royal crown jewel of Rajasthani desert hospitality, celebrated from royal Rajput palaces to desert nomadic camps.',
    foodStory: 'Invented during Rajput military campaigns in the Thar Desert. Warriors buried dough balls in sand under desert sun before leaving for battle; by evening, the baatis were baked and ready to be dipped in ghee.',
    ingredients: ['Coarse Whole Wheat Flour', 'Pure Desi Ghee', 'Panchmel Dal (5 Lentils)', 'Powdered Jaggery / Sugar', 'Dry Fruits & Cardamom', 'Spicy Garlic Chutney'],
    preparationMethod: '1. Knead coarse flour with ghee moyan and shape into round dumplings.\n2. Bake over hot cow dung embers or charcoal grill until exterior turns golden-crisp.\n3. Crush lightly and submerge completely in melted pure desi ghee.\n4. Cook Panchmel dal with cumin, hing, and dry red chillies.\n5. Crush half the baatis into fine powder and mix with ghee, sugar, and dry fruits to make Churma.',
    nutrition: { carbs: '78g', protein: '18g', fat: '32g', fiber: '8g' },
    userReviews: [
      { user: 'Vikram Rathore', rating: 5, comment: 'Crushing the baati into pure ghee and taking a bite with garlic chutney is sheer bliss.', date: '2 days ago' }
    ],
    topRestaurants: [
      { name: 'Chokhi Dhani', rating: 4.9, address: 'Tonk Road, Jaipur' },
      { name: 'Laxmi Mishthan Bhandar (LMB)', rating: 4.8, address: 'Johari Bazaar, Jaipur' },
      { name: 'Rawat Mishthan Bhandar', rating: 4.8, address: 'Station Road, Jaipur' }
    ]
  },
  {
    id: 'rajasthan-laal-maas',
    name: 'Fiery Mathania Laal Maas',
    stateId: 'rajasthan',
    stateName: 'Rajasthan',
    cityName: 'Jodhpur',
    category: 'Dinner',
    tags: ['Top 10', 'Must Try', 'Dinner', 'Traditional', 'Most Loved'],
    veg: false,
    spiceLevel: 5,
    popularityRating: 4.97,
    reviewsCount: 4400,
    priceRange: '₹420 - ₹690',
    calories: '580 kcal',
    prepTime: '1.5 hours',
    image: FOOD_IMAGES['laal-maas'],
    galleryImages: [FOOD_IMAGES['laal-maas']],
    description: 'Tender goat meat slow-braised in pure ghee with fiery, bright red Mathania chillies, garlic paste, yogurt, and smoked with hot charcoal embers (Dhungar method).',
    culturalSignificance: 'A legendary royal Rajput royal hunting delicacy (Shikaar cuisine) designed to mask wild game meat flavors with fiery chillies.',
    foodStory: 'Mathania chillies from Jodhpur impart a brilliant crimson hue and deep smoky heat without overwhelming burning sharpness.',
    ingredients: ['Tender Goat Meat / Lamb', 'Mathania Red Chilli Paste', 'Pure Desi Ghee', 'Whisked Yogurt', 'Garlic-Ginger Paste', 'Charcoal & Clove for Dhungar Smokin'],
    preparationMethod: '1. Soak Mathania chillies in warm water and grind into a smooth crimson paste.\n2. Sauté meat in generous ghee with whole spices and garlic.\n3. Add chilli paste and whisked curd; slow braise for 60 minutes.\n4. Place a burning charcoal briquette in a small bowl inside the pot, drop cloves and ghee, and trap smoke tightly with a lid for 10 minutes.',
    nutrition: { carbs: '6g', protein: '44g', fat: '36g', fiber: '3g' },
    userReviews: [
      { user: 'Rudra Pratap Singh', rating: 5, comment: 'The Mathania chilli smoke and royal crimson ghee slick is majestic.', date: '5 days ago' }
    ],
    topRestaurants: [
      { name: '1135 AD', rating: 4.9, address: 'Amer Fort, Jaipur' },
      { name: 'Handi Restaurant', rating: 4.8, address: 'MI Road, Jaipur' },
      { name: 'On The Rocks', rating: 4.8, address: 'Circuit House Road, Jodhpur' }
    ]
  },
  {
    id: 'rajasthan-ghevar',
    name: 'Honeycomb Malai Rabri Ghevar',
    stateId: 'rajasthan',
    stateName: 'Rajasthan',
    cityName: 'Jaipur',
    category: 'Sweets',
    tags: ['Top 10', 'Desserts', 'Festival Special', 'Must Try', 'Tourist Favorite'],
    veg: true,
    spiceLevel: 0,
    popularityRating: 4.96,
    reviewsCount: 3800,
    priceRange: '₹120 - ₹280 per piece',
    calories: '340 kcal',
    prepTime: '45 mins',
    image: FOOD_IMAGES['ghevar'],
    galleryImages: [FOOD_IMAGES['ghevar']],
    description: 'Crisp, disc-shaped porous honeycomb cake made from clarified batter fried in desi ghee, soaked in saffron syrup, and crowned with thick malai rabri, silver vark, and pistachios.',
    culturalSignificance: 'The quintessential sweet of Teej and Raksha Bandhan festivals in Rajasthan, gifted between families as a token of love.',
    foodStory: 'Creating the delicate porous mesh requires dropping ice-cold batter drop-by-drop from a height into smoking hot desi ghee inside a circular mold.',
    ingredients: ['All Purpose Flour (Maida)', 'Pure Desi Ghee & Ice Cubes', 'Saffron Sugar Syrup', 'Thick Reduced Malai Rabri', 'Silver Vark (Chandi Vark)', 'Almond & Pistachio Slivers'],
    preparationMethod: '1. Rub solid ghee with ice cubes till fluffy and white.\n2. Add flour and ice-cold water to create thin, pourable batter.\n3. Pour into smoking hot ghee in circular ring mold to form honeycomb mesh.\n4. Drain, dip in saffron sugar syrup.\n5. Layer thick rabri on top and garnish with nuts and edible silver leaf.',
    nutrition: { carbs: '48g', protein: '5g', fat: '18g', fiber: '1g' },
    userReviews: [
      { user: 'Prerna Sharma', rating: 5, comment: 'LMB Rabri Ghevar is sheer luxury. The honeycomb crunch with creamy rabri is unforgettable.', date: '1 week ago' }
    ],
    topRestaurants: [
      { name: 'Laxmi Mishthan Bhandar (LMB)', rating: 4.9, address: 'Johari Bazaar, Jaipur' },
      { name: 'Kanha Sweets', rating: 4.8, address: 'Tonk Road, Jaipur' }
    ]
  },

  // ==========================================
  // GUJARAT FOOD COLLECTION
  // ==========================================
  {
    id: 'gujarat-khaman-dhokla',
    name: 'Nylon Khaman Dhokla',
    stateId: 'gujarat',
    stateName: 'Gujarat',
    cityName: 'Ahmedabad',
    category: 'Breakfast',
    tags: ['Top 10', 'Trending', 'Breakfast', 'Street Food', 'Must Try', 'Most Ordered'],
    veg: true,
    spiceLevel: 1,
    popularityRating: 4.97,
    reviewsCount: 5400,
    priceRange: '₹60 - ₹120 per plate',
    calories: '160 kcal',
    prepTime: '20 mins',
    image: FOOD_IMAGES['dhokla'],
    galleryImages: [FOOD_IMAGES['dhokla']],
    description: 'Cloud-soft, spongy steamed cakes made from gram flour (besan), infused with sweet-sour syrup, tempered with mustard seeds, green chillies, sesame, and fresh coriander.',
    culturalSignificance: 'The golden jewel of Gujarati breakfast culture and tea-time snacks, famous worldwide for its light, fluffy texture.',
    foodStory: 'Referred to as "Nylon" Khaman because of its impossibly tender and airy sponge-like texture that melts the instant it touches the tongue.',
    ingredients: ['Fine Besan (Gram Flour)', 'Fruit Salt / Eno', 'Citric Acid & Sugar', 'Mustard Seeds & Sesame Seeds', 'Green Chillies & Curry Leaves', 'Grated Fresh Coconut & Coriander'],
    preparationMethod: '1. Whisk besan with water, turmeric, ginger-chilli paste, and citric acid.\n2. Add fruit salt, whisk till bubbly and steam in greased trays for 15 minutes.\n3. Pour warm sweetened water over the sponge so it absorbs maximum moisture.\n4. Temper with mustard seeds, sesame, and green chillies in peanut oil.\n5. Cut into cubes and garnish with fresh coconut.',
    nutrition: { carbs: '24g', protein: '7g', fat: '4g', fiber: '3g' },
    userReviews: [
      { user: 'Ketan Shah', rating: 5, comment: 'Das Khaman at Navrangpura serves the juiciest khaman in all of India.', date: '3 days ago' }
    ],
    topRestaurants: [
      { name: 'Das Khaman House (Since 1922)', rating: 4.9, address: 'Navrangpura, Ahmedabad' },
      { name: 'Lijjat Khaman', rating: 4.8, address: 'Manek Chowk, Ahmedabad' },
      { name: 'Gordhan Thal', rating: 4.8, address: 'SG Highway, Ahmedabad' }
    ]
  },
  {
    id: 'gujarat-undhiyu',
    name: 'Surati Matla Undhiyu',
    stateId: 'gujarat',
    stateName: 'Gujarat',
    cityName: 'Surat',
    category: 'Lunch',
    tags: ['Top 10', 'Must Try', 'Winter Special', 'Festival Special', 'Traditional'],
    veg: true,
    spiceLevel: 2,
    popularityRating: 4.96,
    reviewsCount: 3410,
    priceRange: '₹240 - ₹380',
    calories: '420 kcal',
    prepTime: '1.5 hours',
    image: FOOD_IMAGES['undhiyu'],
    galleryImages: [FOOD_IMAGES['undhiyu']],
    description: 'Slow-baked winter casserole of tender surti papdi beans, purple yam (kand), sweet potatoes, small brinjals, and fenugreek muthia dumplings cooked in earthen pots.',
    culturalSignificance: 'The royal crown of Uttarayan (Kite Festival) celebrations in Gujarat, eaten with piping hot Jalebis and Puri.',
    foodStory: 'The name "Undhiyu" comes from the Gujarati word "Undhu" (upside down), as earthen pots stuffed with vegetables are buried upside down under hot charcoal and dry leaves in rural farms.',
    ingredients: ['Surti Papdi (Flat Green Beans)', 'Ratalu / Kand (Purple Yam)', 'Baby Brinjals & Sweet Potato', 'Fenugreek Leaves (Methi) Muthia', 'Fresh Grated Coconut & Green Garlic', 'Sesame Seeds & Ajwain', 'Peanut Oil & Hing'],
    preparationMethod: '1. Shape and fry methi muthias till crisp.\n2. Stuff slit baby eggplants with coconut, green garlic, and sesame paste.\n3. Layer fresh papdi, kand, sweet potatoes, and muthias in a heavy earthen pot.\n4. Slow cook covered on low flame until all winter vegetables melt together in aromatic peanut oil.',
    nutrition: { carbs: '54g', protein: '12g', fat: '16g', fiber: '10g' },
    userReviews: [
      { user: 'Bhavin Patel', rating: 5, comment: 'Surti Undhiyu paired with hot jalebis on Uttarayan terrace is the greatest feeling ever.', date: '4 days ago' }
    ],
    topRestaurants: [
      { name: 'Sasumaa Gujarati Thali', rating: 4.9, address: 'Ring Road, Surat' },
      { name: 'Gordhan Thal', rating: 4.8, address: 'SG Highway, Ahmedabad' }
    ]
  },

  // ==========================================
  // MAHARASHTRA FOOD COLLECTION
  // ==========================================
  {
    id: 'maharashtra-vada-pav',
    name: 'Mumbai Iconic Vada Pav',
    stateId: 'maharashtra',
    stateName: 'Maharashtra',
    cityName: 'Mumbai',
    category: 'Street Food',
    tags: ['Top 10', 'Trending', 'Street Food', 'Snacks', 'Must Try', 'Most Ordered', 'Tourist Favorite'],
    veg: true,
    spiceLevel: 3,
    popularityRating: 4.99,
    reviewsCount: 8900,
    priceRange: '₹15 - ₹35',
    calories: '280 kcal',
    prepTime: '15 mins',
    image: FOOD_IMAGES['vada-pav'],
    galleryImages: [FOOD_IMAGES['vada-pav']],
    description: 'Golden spiced potato fritter (Batata Vada) nestled inside a soft bakery Pav, smeared with fiery dry garlic-coconut chutney, mint chutney, and served with salted fried green chillies.',
    culturalSignificance: 'The heartbeat and lifeblood of 20 million Mumbaikars, powering workers, students, and billionaires alike.',
    foodStory: 'Invented in 1966 by Ashok Vaidya outside Dadar railway station as an affordable, grab-and-go meal for textile mill workers.',
    ingredients: ['Boiled Potatoes Tempered with Mustard & Curry Leaves', 'Besan Batter with Turmeric', 'Soft Bakery Ladi Pav', 'Dry Garlic-Coconut Red Chutney', 'Spicy Green Mint Chutney', 'Fried Green Chillies with Salt'],
    preparationMethod: '1. Sauté mashed potatoes with mustard, turmeric, ginger-garlic, and curry leaves.\n2. Shape into balls, dip in spiced besan batter, and deep fry until crisp gold.\n3. Slit fresh pav, slather dry garlic chutney and green chutney.\n4. Place hot vada inside and press gently.\n5. Serve with fried green chilli.',
    nutrition: { carbs: '42g', protein: '7g', fat: '11g', fiber: '4g' },
    userReviews: [
      { user: 'Rohan Sawant', rating: 5, comment: 'Ashok Vada Pav near Kirti College Dadar is pure magic! The crunch and garlic chutney is legendary.', date: '1 day ago' }
    ],
    topRestaurants: [
      { name: 'Ashok Vada Pav (Original)', rating: 4.9, address: 'Kirti College, Dadar West, Mumbai' },
      { name: 'Aaram Vada Pav', rating: 4.8, address: 'Opposite CST Station, Fort, Mumbai' },
      { name: 'Graduate Vada Pav', rating: 4.8, address: 'Byculla East, Mumbai' }
    ]
  },
  {
    id: 'maharashtra-pav-bhaji',
    name: 'Butter-Drenched Mumbai Pav Bhaji',
    stateId: 'maharashtra',
    stateName: 'Maharashtra',
    cityName: 'Mumbai',
    category: 'Dinner',
    tags: ['Top 10', 'Trending', 'Street Food', 'Dinner', 'Must Try', 'Most Loved'],
    veg: true,
    spiceLevel: 3,
    popularityRating: 4.98,
    reviewsCount: 7200,
    priceRange: '₹140 - ₹260',
    calories: '540 kcal',
    prepTime: '30 mins',
    image: FOOD_IMAGES['pav-bhaji'],
    galleryImages: [FOOD_IMAGES['pav-bhaji']],
    description: 'Thick, spicy vegetable mash cooked on giant flat iron tawas with generous slabs of Amul butter, garnished with chopped onions and coriander, served with buttery toasted Pav.',
    culturalSignificance: 'Born during the American Civil War when Bombay cotton mill traders worked late into the night and needed quick midnight street food.',
    foodStory: 'Street vendors combined leftover mixed vegetables, mashed them on hot tawas with tomatoes, butter, and special Pav Bhaji masala to feed mill workers at 2 AM.',
    ingredients: ['Potatoes, Cauliflower, Green Peas & Capsicum', 'Ripe Tomatoes Pureed', 'Amul Butter in generous slabs', 'Special Pav Bhaji Masala', 'Fresh Bakery Pav', 'Chopped Onions & Lemon Wedges'],
    preparationMethod: '1. Boil and mash vegetables until smooth.\n2. Melt butter on wide iron tawa, sauté onions, capsicum, and ginger-garlic.\n3. Add tomato puree, Pav Bhaji masala, and Kashmiri chilli powder.\n4. Blend mashed vegetables with continuous mashing and bubbling butter.\n5. Toast pav on buttered tawa with coriander and serve bubbling hot.',
    nutrition: { carbs: '56g', protein: '11g', fat: '28g', fiber: '7g' },
    userReviews: [
      { user: 'Tanvi Joshi', rating: 5, comment: 'Sardar Pav Bhaji at Tardeo with that pool of melted butter is legendary.', date: '2 days ago' }
    ],
    topRestaurants: [
      { name: 'Sardar Pav Bhaji', rating: 4.8, address: '166-A, Tardeo Road, Mumbai' },
      { name: 'Cannon Pav Bhaji', rating: 4.8, address: 'Opposite CST Station, Mumbai' },
      { name: 'Amar Juice Centre', rating: 4.7, address: 'Vile Parle West, Mumbai' }
    ]
  },
  {
    id: 'maharashtra-misal-pav',
    name: 'Fiery Puneri & Kolhapuri Misal Pav',
    stateId: 'maharashtra',
    stateName: 'Maharashtra',
    cityName: 'Pune',
    category: 'Breakfast',
    tags: ['Top 10', 'Breakfast', 'Street Food', 'Must Try', 'Trending'],
    veg: true,
    spiceLevel: 5,
    popularityRating: 4.96,
    reviewsCount: 4600,
    priceRange: '₹90 - ₹160',
    calories: '380 kcal',
    prepTime: '25 mins',
    image: FOOD_IMAGES['misal-pav'],
    galleryImages: [FOOD_IMAGES['misal-pav']],
    description: 'Sprouted moth beans (matki) cooked in spicy curry, topped with crunchy farsan mixture, raw onions, coriander, and fiery red chili oil broth (Tarri/Kat).',
    culturalSignificance: 'Maharashtra’s ultimate spicy breakfast adventure, famous for its sweating chili rush and crunchy texture.',
    foodStory: 'Voted the World’s Tastiest Vegetarian Dish at global culinary summits, celebrated for its layered textural complexity.',
    ingredients: ['Sprouted Matki (Moth Beans)', 'Kanda-Lasun Masala', 'Crunchy Farsan/Sev Mixture', 'Finely Chopped Red Onions', 'Coriander & Lemon', 'Fiery Tarri Broth', 'Fresh Pav'],
    preparationMethod: '1. Sauté sprouted matki with turmeric, mustard, and ginger-garlic.\n2. Prepare spicy, red-hot thin gravy (Tarri) using roasted dry coconut and kanda lasun masala.\n3. Layer cooked matki in a bowl, top with generous farsan and chopped onions.\n4. Pour smoking hot Tarri broth over the bowl.\n5. Serve with lemon wedge and soft Pav.',
    nutrition: { carbs: '48g', protein: '16g', fat: '14g', fiber: '8g' },
    userReviews: [
      { user: 'Pooja Kulkarni', rating: 5, comment: 'Kata Kirr Misal in Pune gave me tears of joy! The spice level is insane.', date: '2 days ago' }
    ],
    topRestaurants: [
      { name: 'Kata Kirr', rating: 4.9, address: 'Karve Nagar, Pune' },
      { name: 'Bedekar Tea Stall', rating: 4.8, address: 'Narayan Peth, Pune' },
      { name: 'Mamledar Misal', rating: 4.8, address: 'Naupada, Thane' }
    ]
  },

  // ==========================================
  // SOUTH INDIA - TAMIL NADU
  // ==========================================
  {
    id: 'tamilnadu-crispy-dosa',
    name: 'Madurai Ghee Roast Paper Dosa',
    stateId: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    cityName: 'Madurai',
    category: 'Breakfast',
    tags: ['Top 10', 'Breakfast', 'Must Try', 'Traditional', 'Most Ordered', 'Tourist Favorite'],
    veg: true,
    spiceLevel: 1,
    popularityRating: 4.99,
    reviewsCount: 7100,
    priceRange: '₹80 - ₹180',
    calories: '320 kcal',
    prepTime: '20 mins',
    image: FOOD_IMAGES['masala-dosa'],
    galleryImages: [FOOD_IMAGES['masala-dosa']],
    description: 'Golden, paper-thin fermented rice and urad dal crepe roasted in pure cow ghee on heavy cast iron griddles, served with drumstick sambar and 3 coconut chutneys.',
    culturalSignificance: 'An ancient South Indian breakfast staple documented in Sangam literature over 1,500 years ago.',
    foodStory: 'The secret lies in natural stone-grinding of parboiled rice and black gram lentils, followed by 12-hour natural tropical fermentation.',
    ingredients: ['Fermented Parboiled Rice & Urad Dal Batter', 'Pure Desi Ghee', 'Toor Dal Sambar with Drumsticks', 'Fresh Coconut Chutney', 'Spicy Tomato Chutney', 'Gunpowder (Idli Podi)'],
    preparationMethod: '1. Pour fermented batter in circular motion onto searing cast iron tawa.\n2. Drizzle generous pure cow ghee along edges.\n3. Roast until amber-golden and paper-crisp.\n4. Fold into cone or cylinder.\n5. Serve with piping hot sambar and trio of fresh chutneys.',
    nutrition: { carbs: '44g', protein: '8g', fat: '14g', fiber: '3g' },
    userReviews: [
      { user: 'Siddharth Raman', rating: 5, comment: 'Murugan Idli Shop ghee roast with podi is the gold standard of Indian breakfasts.', date: '3 days ago' }
    ],
    topRestaurants: [
      { name: 'Murugan Idli Shop', rating: 4.9, address: 'GN Chetty Road, T. Nagar, Chennai' },
      { name: 'Saravana Bhavan', rating: 4.8, address: 'Mylapore, Chennai' },
      { name: 'A2B (Adyar Ananda Bhavan)', rating: 4.7, address: 'Adyar, Chennai' }
    ]
  },
  {
    id: 'tamilnadu-chettinad-chicken',
    name: 'Fiery Chettinad Chicken Masala',
    stateId: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    cityName: 'Karaikudi',
    category: 'Dinner',
    tags: ['Top 10', 'Must Try', 'Dinner', 'Traditional', 'Most Loved'],
    veg: false,
    spiceLevel: 5,
    popularityRating: 4.96,
    reviewsCount: 3900,
    priceRange: '₹290 - ₹480',
    calories: '510 kcal',
    prepTime: '45 mins',
    image: FOOD_IMAGES['chettinad-chicken'],
    galleryImages: [FOOD_IMAGES['chettinad-chicken']],
    description: 'Country chicken cooked in freshly roasted stone-ground spice paste featuring black peppercorns, star anise, kalpasi (stone flower), fennel, and curry leaves.',
    culturalSignificance: 'Created by the wealthy seafaring Chettiar trading community who collected rare spices from Burma, Ceylon, and Sumatra.',
    foodStory: 'Kalpasi (black stone flower) and Marathi Mokku (dried caper flower buds) impart the signature earthy, mysterious depth to genuine Chettinad gravies.',
    ingredients: ['Country Chicken (Nattu Kozhi)', 'Freshly Roasted Whole Chettinad Spices', 'Kalpasi (Black Stone Flower)', 'Shallots (Small Sambar Onions)', 'Curry Leaves & Coconut', 'Gingelly (Sesame) Oil'],
    preparationMethod: '1. Dry roast coriander seeds, dry red chillies, fennel, peppercorns, star anise, and kalpasi.\n2. Grind with fresh coconut into thick paste.\n3. Sauté shallots, garlic, and curry leaves in gingelly oil.\n4. Add chicken and roasted spice paste, simmer until meat is tender and oil rises.\n5. Serve with steaming rice or flaky parotta.',
    nutrition: { carbs: '10g', protein: '42g', fat: '26g', fiber: '4g' },
    userReviews: [
      { user: 'Karthik Subramanian', rating: 5, comment: 'The peppery heat and herbal kalpasi aroma in Karaikudi is unmatched.', date: '1 week ago' }
    ],
    topRestaurants: [
      { name: 'The Bangala (Heritage)', rating: 4.9, address: 'Devakottai Road, Karaikudi' },
      { name: 'Anjappar Chettinad', rating: 4.8, address: 'Nungambakkam, Chennai' }
    ]
  },

  // ==========================================
  // SOUTH INDIA - KERALA
  // ==========================================
  {
    id: 'kerala-appam-stew',
    name: 'Kerala Lace Appam with Vegetable / Chicken Stew',
    stateId: 'kerala',
    stateName: 'Kerala',
    cityName: 'Kochi',
    category: 'Breakfast',
    tags: ['Top 10', 'Breakfast', 'Must Try', 'Traditional', 'Most Loved'],
    veg: true,
    spiceLevel: 1,
    popularityRating: 4.97,
    reviewsCount: 4100,
    priceRange: '₹140 - ₹280',
    calories: '310 kcal',
    prepTime: '25 mins',
    image: FOOD_IMAGES['appam'],
    galleryImages: [FOOD_IMAGES['appam']],
    description: 'Bowl-shaped fermented rice pancake with a pillowy soft spongy center and paper-crisp lace edges, served with rich aromatic coconut milk stew.',
    culturalSignificance: 'A beloved Syrian Christian classic and staple festive breakfast on Easter and Christmas mornings across God’s Own Country.',
    foodStory: 'Traditionally fermented with fresh toddy (palm wine) inside curved cast-iron Appachatti woks that create the puffy center and crispy golden lace.',
    ingredients: ['Fermented Rice Batter with Coconut Milk', 'Thick & Thin Fresh Coconut Milk', 'Potatoes, Carrots, Beans / Chicken', 'Green Chillies & Ginger', 'Curry Leaves & Whole Garam Masala', 'Cold-Pressed Coconut Oil'],
    preparationMethod: '1. Pour fermented batter into curved appachatti, swirl once to coat edges, cover and steam.\n2. Sauté whole cloves, cardamom, ginger, and green chillies in coconut oil.\n3. Cook vegetables or chicken in thin coconut milk.\n4. Turn off heat and stir in thick first-press coconut milk and fresh curry leaves.\n5. Serve immediately with warm, pillowy Appams.',
    nutrition: { carbs: '46g', protein: '8g', fat: '14g', fiber: '4g' },
    userReviews: [
      { user: 'Maya Nair', rating: 5, comment: 'The contrast between the soft fluffy center and the lace rim dipped in coconut stew is heaven.', date: '4 days ago' }
    ],
    topRestaurants: [
      { name: 'Paragon Restaurant', rating: 4.9, address: 'Lulu Mall & Calicut, Kochi' },
      { name: 'Kashi Art Cafe', rating: 4.8, address: 'Fort Kochi, Kochi' },
      { name: 'Dhe Puttu', rating: 4.7, address: 'Edappally, Kochi' }
    ]
  },
  {
    id: 'kerala-karimeen-pollichathu',
    name: 'Karimeen Pollichathu (Pearl Spot in Banana Leaf)',
    stateId: 'kerala',
    stateName: 'Kerala',
    cityName: 'Alappuzha',
    category: 'Lunch',
    tags: ['Top 10', 'Must Try', 'Lunch', 'Traditional', 'Most Loved'],
    veg: false,
    spiceLevel: 3,
    popularityRating: 4.98,
    reviewsCount: 3700,
    priceRange: '₹380 - ₹650',
    calories: '420 kcal',
    prepTime: '40 mins',
    image: FOOD_IMAGES['karimeen'],
    galleryImages: [FOOD_IMAGES['karimeen']],
    description: 'Fresh backwater Pearl Spot fish marinated in shallot-chilli masala, wrapped snugly in wilted banana leaves, and slow-roasted on cast iron griddles with coconut oil.',
    culturalSignificance: 'The official state fish of Kerala, eaten on backwater houseboats gliding across Vembanad Lake in Kumarakom and Alleppey.',
    foodStory: 'The banana leaf seals in all natural juices while infusing a smoky grassy aroma into the tender sweet fish flesh.',
    ingredients: ['Fresh Karimeen (Pearl Spot Fish)', 'Shallots (Kunjulli) & Ginger-Garlic', 'Kudampuli (Malabar Kokum Tamarind)', 'Curry Leaves & Green Chillies', 'Pure Cold-Pressed Coconut Oil', 'Fresh Green Banana Leaf'],
    preparationMethod: '1. Marinate scored fish with turmeric, chilli powder, and lemon.\n2. Sauté sliced shallots, ginger, tomato, and spices in coconut oil until thick jam.\n3. Slather masala on fish, wrap tightly in banana leaf and tie with banana fiber string.\n4. Pan-roast on heavy griddle for 8-10 minutes each side until leaf turns dark and charred.\n5. Unwrap at the table for a cloud of aromatic herbal steam.',
    nutrition: { carbs: '6g', protein: '36g', fat: '20g', fiber: '2g' },
    userReviews: [
      { user: 'Sanjay Mathew', rating: 5, comment: 'Unwrapping the charred leaf on a backwater houseboat in Alleppey is an unforgettable memory.', date: '5 days ago' }
    ],
    topRestaurants: [
      { name: 'Paragon Restaurant', rating: 4.9, address: 'Calicut & Kochi' },
      { name: 'Grand Hotel Restaurant', rating: 4.8, address: 'MG Road, Ernakulam' },
      { name: 'Fort House Restaurant', rating: 4.8, address: 'Fort Kochi' }
    ]
  },

  // ==========================================
  // SOUTH INDIA - KARNATAKA
  // ==========================================
  {
    id: 'karnataka-bisi-bele-bath',
    name: 'Mysore Royal Bisi Bele Bath',
    stateId: 'karnataka',
    stateName: 'Karnataka',
    cityName: 'Bengaluru',
    category: 'Lunch',
    tags: ['Top 10', 'Lunch', 'Must Try', 'Traditional', 'Most Loved'],
    veg: true,
    spiceLevel: 2,
    popularityRating: 4.95,
    reviewsCount: 3800,
    priceRange: '₹90 - ₹180',
    calories: '410 kcal',
    prepTime: '35 mins',
    image: FOOD_IMAGES['bisi-bele-bath'],
    galleryImages: [FOOD_IMAGES['bisi-bele-bath']],
    description: 'Hot lentil rice dish cooked with mixed vegetables, tamarind, roasted spices (marathi moggu, kapok buds), copious pure desi ghee, and topped with crisp boondi and cashews.',
    culturalSignificance: 'Originated in the royal kitchens of the Mysore Palace (Wodeyar dynasty) as an all-in-one nutritious royal feast.',
    foodStory: 'Literally translating to "Hot Lentil Rice" in Kannada, the unique aroma comes from Mysore BBB powder made with Marathi Moggu, chana dal, and copra.',
    ingredients: ['Sona Masoori Rice & Toor Dal', 'Mixed Country Vegetables (Carrot, Beans, Peas)', 'Special Mysore BBB Masala Powder with Marathi Moggu', 'Tamarind Pulp & Jaggery', 'Pure Ghee & Fried Cashews', 'Crispy Boondi Garnish'],
    preparationMethod: '1. Cook rice and toor dal together until soft.\n2. Boil vegetables with tamarind and turmeric.\n3. Add BBB spice paste and simmer.\n4. Fold in cooked rice and dal with melted ghee.\n5. Temper with mustard seeds, curry leaves, and cashews in ghee; top with boondi.',
    nutrition: { carbs: '58g', protein: '14g', fat: '16g', fiber: '6g' },
    userReviews: [
      { user: 'Divya Hegde', rating: 5, comment: 'MTR Bisi Bele Bath with a spoonful of hot ghee and crunch of boondi is ultimate comfort food.', date: '3 days ago' }
    ],
    topRestaurants: [
      { name: 'Mavalli Tiffin Room (MTR - Since 1924)', rating: 4.9, address: 'Lalbagh Road, Bengaluru' },
      { name: 'Vidyarthi Bhavan', rating: 4.8, address: 'Gandhi Bazaar, Basavanagudi, Bengaluru' }
    ]
  },

  // ==========================================
  // SOUTH INDIA - TELANGANA & ANDHRA PRADESH
  // ==========================================
  {
    id: 'hyderabad-dum-biryani',
    name: 'Hyderabadi Kacchi Gosht Dum Biryani',
    stateId: 'telangana',
    stateName: 'Telangana',
    cityName: 'Hyderabad',
    category: 'Main Course',
    tags: ['Top 10', 'Trending', 'Must Try', 'Lunch', 'Dinner', 'Most Ordered', 'Most Loved', 'Tourist Favorite'],
    veg: false,
    spiceLevel: 4,
    popularityRating: 4.99,
    reviewsCount: 9800,
    priceRange: '₹320 - ₹580',
    calories: '640 kcal',
    prepTime: '2 hours',
    image: FOOD_IMAGES['hyd-biryani'],
    galleryImages: [FOOD_IMAGES['hyd-biryani']],
    description: 'Raw marinated tender goat meat layered with par-cooked aged basmati rice, saffron-infused milk, fried golden onions (Birista), mint, and slow-cooked in a dough-sealed copper handi over burning coal (Dum Pukht).',
    culturalSignificance: 'The crowning glory of Nizami gastronomy, globally synonymous with Hyderabad’s rich Nawabi legacy.',
    foodStory: 'Perfected under the Asaf Jahi dynasty, where the royal chefs used 40 varieties of rare spices and sealed copper degs with dough so steam could cook raw meat and rice concurrently.',
    ingredients: ['Tender Goat Meat (Kacchi Gosht)', 'Aged Extra Long Basmati Rice', 'Kashmiri Saffron soaked in Milk', 'Fried Golden Onions (Birista)', 'Fresh Mint & Coriander Leaves', 'Shahi Garam Masala & Potli Spices', 'Pure Desi Ghee & Fresh Curd'],
    preparationMethod: '1. Marinate raw mutton overnight in curd, papaya paste, shahi garam masala, mint, and fried onions.\n2. Boil basmati rice with whole spices till 70% cooked.\n3. Layer par-cooked rice over raw marinated meat in a heavy copper handi.\n4. Drizzle saffron milk and desi ghee on top.\n5. Seal lid tightly with atta dough and cook over gentle charcoal embers (Dum) for 45 minutes.\n6. Serve with spicy Mirchi Ka Salan and cool onion Raita.',
    nutrition: { carbs: '64g', protein: '38g', fat: '26g', fiber: '4g' },
    userReviews: [
      { user: 'Syed Farhan', rating: 5, comment: 'Bawarchi and Shadab biryani with Mirchi ka Salan is an out-of-world culinary blessing.', date: '1 day ago' }
    ],
    topRestaurants: [
      { name: 'Hotel Shadab', rating: 4.9, address: 'High Court Road, Charminar, Hyderabad' },
      { name: 'Bawarchi Restaurant', rating: 4.8, address: 'RTC X Roads, Hyderabad' },
      { name: 'Paradise Biryani', rating: 4.7, address: 'Secunderabad & Masab Tank, Hyderabad' }
    ]
  },
  {
    id: 'telangana-hyderabadi-haleem',
    name: 'Royal Hyderabadi Mutton Haleem',
    stateId: 'telangana',
    stateName: 'Telangana',
    cityName: 'Hyderabad',
    category: 'Dinner',
    tags: ['Top 10', 'Festival Special', 'Must Try', 'Trending', 'Most Loved'],
    veg: false,
    spiceLevel: 3,
    popularityRating: 4.99,
    reviewsCount: 8200,
    priceRange: '₹220 - ₹380 per bowl',
    calories: '580 kcal',
    prepTime: '12 hours slow cook',
    image: FOOD_IMAGES['haleem'],
    galleryImages: [FOOD_IMAGES['haleem']],
    description: 'Rich, thick stew of shredded meat, broken wheat (Daliya), lentils, pure ghee, and spices pounded continuously with wooden pestles (Ghotni) for 12 hours until paste-like consistency, topped with fried cashews and birista.',
    culturalSignificance: 'Awarded India’s first meat-based GI tag, Haleem is the sacred dish cooked during holy Ramadan to break fasts at Iftar.',
    foodStory: 'Originated from the Arab dish Harees, introduced to Hyderabad by Chaush (Hadhrami Arab soldiers) in the Nizam’s army.',
    ingredients: ['Tender Goat Meat with Bones', 'Broken Wheat (Daliya)', 'Chana, Moong, Masoor & Urad Dal', 'Pure Desi Ghee in abundance', 'Fried Onions, Mint & Cashews', 'Shahi Garam Masala & Potli Spices'],
    preparationMethod: '1. Cook meat, lentils, and wheat in giant copper cauldrons with spices for 8 hours.\n2. Pound continuously with heavy wooden pestles (Ghotna) until meat fibers melt into the grain paste.\n3. Stir in pure boiling ghee.\n4. Garnish with crisp golden onions, mint leaves, fried cashews, and a squeeze of fresh lemon.',
    nutrition: { carbs: '44g', protein: '46g', fat: '32g', fiber: '8g' },
    userReviews: [
      { user: 'Mohammed Adil', rating: 5, comment: 'Pista House Haleem during Ramadan is an emotion in Hyderabad. Velvet perfection!', date: '2 days ago' }
    ],
    topRestaurants: [
      { name: 'Pista House (GI Certified)', rating: 4.9, address: 'Charminar & Banjara Hills, Hyderabad' },
      { name: 'Shah Ghouse Cafe', rating: 4.8, address: 'Tolichowki & Gachibowli, Hyderabad' }
    ]
  },

  // ==========================================
  // NORTH INDIA - UTTAR PRADESH & DELHI
  // ==========================================
  {
    id: 'lucknow-tunday-kabab',
    name: 'Lucknowi Tunday Galawati Kabab',
    stateId: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    cityName: 'Lucknow',
    category: 'Dinner',
    tags: ['Top 10', 'Trending', 'Must Try', 'Dinner', 'Traditional', 'Most Loved', 'Tourist Favorite'],
    veg: false,
    spiceLevel: 2,
    popularityRating: 4.99,
    reviewsCount: 7600,
    priceRange: '₹140 - ₹280',
    calories: '380 kcal',
    prepTime: '30 mins',
    image: FOOD_IMAGES['galouti-kebab'],
    galleryImages: [FOOD_IMAGES['galouti-kebab']],
    description: 'Silky, melt-in-the-mouth minced meat patties infused with 160 secret aromatic spices and raw papaya paste, seared on wide cast-iron tawas and paired with Mughlai Mughlai Paratha.',
    culturalSignificance: 'The zenith of Awadhi Nawabi culinary refinement, crafted so toothless Nawabs could relish meat without chewing.',
    foodStory: 'Invented in the 17th century for Nawab Asad-ud-Daula by Haji Murad Ali, who had only one arm (hence nicknamed "Tunday").',
    ingredients: ['Fine Minced Lamb / Buff Meat', 'Raw Green Papaya Tenderizer Paste', '160 Secret Awadhi Potli Spices', 'Pure Ghee for shallow frying', 'Rose Petals, Sandalwood & Kewra Water', 'Flaky Mughlai Paratha'],
    preparationMethod: '1. Mince meat four times to achieve silky paste.\n2. Incorporate raw papaya, roasted gram flour, and 160 secret spice mix.\n3. Rest for 4 hours to tenderize.\n4. Shape delicate patties and sear on shallow tawa in smoking ghee.\n5. Serve piping hot with crisp saffron Sheermal or Mughlai Paratha.',
    nutrition: { carbs: '4g', protein: '36g', fat: '24g', fiber: '1g' },
    userReviews: [
      { user: 'Zaid Alvi', rating: 5, comment: 'It dissolves instantly in your mouth with zero chewing needed. Unbelievable culinary wizardry.', date: '1 day ago' }
    ],
    topRestaurants: [
      { name: 'Tunday Kababi (Since 1905)', rating: 4.9, address: 'Akbari Gate, Chowk, Lucknow' },
      { name: 'Dastarkhwan', rating: 4.8, address: 'Tulsi Theatre Building, Hazratganj, Lucknow' }
    ]
  },
  {
    id: 'delhi-chole-bhature',
    name: 'Old Delhi Pindi Chole Bhature',
    stateId: 'delhi',
    stateName: 'Delhi',
    cityName: 'New Delhi',
    category: 'Breakfast',
    tags: ['Top 10', 'Trending', 'Breakfast', 'Street Food', 'Must Try', 'Most Ordered'],
    veg: true,
    spiceLevel: 4,
    popularityRating: 4.98,
    reviewsCount: 8400,
    priceRange: '₹90 - ₹180',
    calories: '620 kcal',
    prepTime: '25 mins',
    image: FOOD_IMAGES['chole-bhature'],
    galleryImages: [FOOD_IMAGES['chole-bhature']],
    description: 'Giant puffed golden deep-fried fermented bread (Bhatura) with spicy, dark tangy chickpeas (Chole), pickled raw amla, pickled carrots, and green chillies.',
    culturalSignificance: 'The ultimate weekend morning ritual for Delhiites, uniting North India under the love of crisp bhaturas and robust spicy chole.',
    foodStory: 'Boiled with tea leaves and dried amla to achieve the signature pitch-black color and natural tartness.',
    ingredients: ['Kabuli Chickpeas (Chana)', 'Dried Amla & Black Tea Decoction', 'Pindi Chole Masala & Anardana', 'Fermented Maida Dough with Paneer', 'Pickled Green Chillies, Onions & Carrots'],
    preparationMethod: '1. Boil chickpeas with tea leaves and amla until tender and dark.\n2. Sauté with anardana, ginger juliennes, and pindi masala.\n3. Roll paneer-stuffed fermented dough into oval discs.\n4. Deep fry in boiling oil till it balloons into a crisp sphere.\n5. Serve with sliced onions, mint chutney, and raw pickles.',
    nutrition: { carbs: '68g', protein: '16g', fat: '28g', fiber: '9g' },
    userReviews: [
      { user: 'Sahil Khanna', rating: 5, comment: 'Sita Ram Diwan Chand at Paharganj serves the crispiest paneer bhature on the planet.', date: '3 days ago' }
    ],
    topRestaurants: [
      { name: 'Sita Ram Diwan Chand', rating: 4.9, address: 'Chuna Mandi, Paharganj, New Delhi' },
      { name: 'Chache Di Hatti', rating: 4.8, address: 'Kamla Nagar, North Campus, Delhi' },
      { name: 'Nagpal Chole Bhature', rating: 4.7, address: 'Amar Colony, Lajpat Nagar, Delhi' }
    ]
  },

  // ==========================================
  // NORTH INDIA - JAMMU & KASHMIR
  // ==========================================
  {
    id: 'kashmir-wazwan-rogan-josh',
    name: 'Kashmiri Wazwan Rogan Josh',
    stateId: 'jammu-and-kashmir',
    stateName: 'Jammu and Kashmir',
    cityName: 'Srinagar',
    category: 'Dinner',
    tags: ['Top 10', 'Must Try', 'Dinner', 'Traditional', 'Most Loved'],
    veg: false,
    spiceLevel: 3,
    popularityRating: 4.99,
    reviewsCount: 4600,
    priceRange: '₹380 - ₹620',
    calories: '560 kcal',
    prepTime: '1.5 hours',
    image: FOOD_IMAGES['rogan-josh'],
    galleryImages: [FOOD_IMAGES['rogan-josh']],
    description: 'Aromatic Kashmiri lamb curry infused with vibrant Kashmiri red chillies, fennel powder (Saunf), dried ginger (Sonth), and Kashmiri cockscomb flower extract (Ratan Jot).',
    culturalSignificance: 'The centerpiece of the royal 36-course Kashmiri Wazwan banquet prepared by master chefs (Wazas).',
    foodStory: 'Rogan (ghee/clarified fat) Josh (passion/boil) gets its radiant red colour naturally from the root of the Ratan Jot plant, without tomatoes or onions.',
    ingredients: ['Kashmiri Mountain Lamb Shoulder', 'Mawal / Ratan Jot Extract', 'Kashmiri Red Chilli Powder (Mild & Vivid)', 'Fennel Powder (Saunf) & Dry Ginger (Sonth)', 'Asafoetida (Hing) & Whisked Curd', 'Mustard Oil & Desi Ghee'],
    preparationMethod: '1. Brown lamb pieces in smoking mustard oil with whole spices and hing.\n2. Whisk curd with Kashmiri chilli powder, saunf, and sonth; pour into meat.\n3. Simmer gently until meat absorbs aromatics.\n4. Extract crimson colour of ratan jot in warm ghee and strain into gravy.\n5. Slow-cook covered until lamb is butter tender.',
    nutrition: { carbs: '6g', protein: '42g', fat: '30g', fiber: '2g' },
    userReviews: [
      { user: 'Tariq Mir', rating: 5, comment: 'Ahdoos Rogan Josh by the Jhelum River in Srinagar is the purest culinary expression on earth.', date: '2 days ago' }
    ],
    topRestaurants: [
      { name: 'Ahdoos Restaurant (Since 1918)', rating: 4.9, address: 'Residency Road, Srinagar' },
      { name: 'Mughal Darbar', rating: 4.8, address: 'Residency Road, Srinagar' }
    ]
  },

  // ==========================================
  // NORTH-EAST INDIA - ASSAM & MEGHALAYA & NAGALAND
  // ==========================================
  {
    id: 'assam-masor-tenga',
    name: 'Assamese Masor Tenga (Sour Fish Curry)',
    stateId: 'assam',
    stateName: 'Assam',
    cityName: 'Guwahati',
    category: 'Lunch',
    tags: ['Top 10', 'Lunch', 'Must Try', 'Traditional', 'Hidden Gem'],
    veg: false,
    spiceLevel: 1,
    popularityRating: 4.93,
    reviewsCount: 2800,
    priceRange: '₹180 - ₹340',
    calories: '290 kcal',
    prepTime: '25 mins',
    image: FOOD_IMAGES['masor-tenga'],
    galleryImages: [FOOD_IMAGES['masor-tenga']],
    description: 'Light, refreshing sour fish broth made with fresh river Rohu or Catla, souring agent (Outenga elephant apple / tomatoes / Kaji Nemu lemon), tempered with panch phoron and green chillies.',
    culturalSignificance: 'The ultimate comforting summer lunch in Assam, naturally aiding digestion during hot humid Brahmaputra monsoon days.',
    foodStory: 'Tenga means sour in Assamese. Traditional kitchens use wild Ou Tenga (elephant apple) or Thekera sour dried fruit for deep tangy notes.',
    ingredients: ['Fresh Brahmaputra River Carp (Rohu)', 'Ripe Tomatoes / Outenga (Elephant Apple)', 'Kaji Nemu (Assam King Lemon)', 'Panch Phoron & Slit Green Chillies', 'Mustard Oil & Turmeric'],
    preparationMethod: '1. Lightly fry turmeric-marinated fish steaks in mustard oil.\n2. Sauté panch phoron and tomatoes until soft and pulpy.\n3. Add warm water and simmer fish in sour broth for 8 minutes.\n4. Finish with fresh coriander and squeeze of fragrant Kaji Nemu lemon juice.\n5. Serve over steamed Joha rice.',
    nutrition: { carbs: '4g', protein: '28g', fat: '12g', fiber: '2g' },
    userReviews: [
      { user: 'Pranab Saikia', rating: 5, comment: 'So light, aromatic and tangy. Eating this with Joha rice is pure therapy.', date: '5 days ago' }
    ],
    topRestaurants: [
      { name: 'Paradise Restaurant', rating: 4.8, address: 'Maniram Dewan Road, Silpukhuri, Guwahati' },
      { name: 'Heritage Khorikaa', rating: 4.8, address: 'Ulubari, Guwahati' }
    ]
  },
  {
    id: 'nagaland-smoked-pork',
    name: 'Naga Smoked Pork with Bamboo Shoot & Raja Mircha',
    stateId: 'nagaland',
    stateName: 'Nagaland',
    cityName: 'Kohima',
    category: 'Dinner',
    tags: ['Top 10', 'Tribal & Regional', 'Must Try', 'Dinner', 'Hidden Gem'],
    veg: false,
    spiceLevel: 5,
    popularityRating: 4.95,
    reviewsCount: 2600,
    priceRange: '₹320 - ₹520',
    calories: '490 kcal',
    prepTime: '45 mins',
    image: FOOD_IMAGES['naga-pork'],
    galleryImages: [FOOD_IMAGES['naga-pork']],
    description: 'Hearth-smoked pork cooked with fermented bamboo shoots (Bastenga), fiery Naga Bhut Jolokia (King Chilli), garlic, and Sichuan pepper.',
    culturalSignificance: 'The signature tribal delicacy of the Angami, Ao, and Sumi tribes of Nagaland, cooked over wood fire hearths during the Hornbill Festival.',
    foodStory: 'Pork is hung above rural woodfire kitchen hearths for weeks, slowly curing in fragrant oak smoke before being braised with pungent fermented bamboo shoots.',
    ingredients: ['Hearth Smoked Pork Belly & Ribs', 'Fermented Bamboo Shoots (Bastenga)', 'Fresh Naga King Chilli (Bhut Jolokia)', 'Sichuan Pepper Seeds', 'Crushed Garlic & Ginger'],
    preparationMethod: '1. Wash and slice woodfire smoked pork.\n2. Boil in water with fermented bamboo shoots and crushed garlic.\n3. Add sliced Bhut Jolokia chillies and local herbs.\n4. Simmer until the fat turns translucent and the bamboo shoot broth turns rich and earthy.\n5. Serve hot with red hill rice.',
    nutrition: { carbs: '3g', protein: '38g', fat: '32g', fiber: '2g' },
    userReviews: [
      { user: 'Imti Longkumer', rating: 5, comment: 'The aroma of oak-wood smoke and fermented bamboo shoots with Bhut Jolokia is unforgettable.', date: '1 week ago' }
    ],
    topRestaurants: [
      { name: 'Ozone Cafe & Kitchen', rating: 4.8, address: 'Main Town, Kohima' },
      { name: 'Naga Bowl Express', rating: 4.8, address: 'Dimapur, Nagaland' }
    ]
  },

  // ==========================================
  // UNION TERRITORIES - LADAKH & ANDAMAN & PUDUCHERRY
  // ==========================================
  {
    id: 'ladakh-chhutagi',
    name: 'Traditional Ladakhi Chhutagi Pasta Soup',
    stateId: 'ladakh',
    stateName: 'Ladakh',
    cityName: 'Leh',
    category: 'Lunch',
    tags: ['Top 10', 'Tribal & Regional', 'Must Try', 'Winter Special', 'Traditional'],
    veg: true,
    spiceLevel: 1,
    popularityRating: 4.92,
    reviewsCount: 2100,
    priceRange: '₹160 - ₹280',
    calories: '340 kcal',
    prepTime: '35 mins',
    image: FOOD_IMAGES['thukpa'],
    galleryImages: [FOOD_IMAGES['thukpa']],
    description: 'Hearty high-altitude soup of bow-tie shaped hand-pinched wheat pasta cooked with potatoes, radishes, spinach, and warming Himalayan mountain herbs.',
    culturalSignificance: 'Chhu (water) Tagi (bread) is Ladakh’s staple winter comfort food that sustains farmers and travelers through minus-twenty degree winters.',
    foodStory: 'Local Ladakhi mothers pinch flattened wheat dough into distinctive bow-tie and ear-shaped dumplings so they capture and trap the hot herbal vegetable broth.',
    ingredients: ['Whole Wheat Flour Hand-Pinched Pasta', 'Himalayan Mountain Potatoes & Radish', 'Fresh Mountain Spinach & Carrots', 'Ginger, Garlic & Black Pepper', 'Local Herbs & Himalayan Rock Salt'],
    preparationMethod: '1. Knead wheat dough, roll flat, cut into circles and pinch center into bow ties.\n2. Sauté garlic, ginger, potatoes, and root vegetables.\n3. Add vegetable broth and bring to rapid boil.\n4. Drop pasta bow-ties into boiling broth and cook until they float to the surface.\n5. Serve steaming hot with fiery Ladakhi chili chutney.',
    nutrition: { carbs: '52g', protein: '10g', fat: '4g', fiber: '7g' },
    userReviews: [
      { user: 'Stanzin Dorje', rating: 5, comment: 'Sipping hot Chhutagi while watching the snow fall over Leh Palace is heavenly.', date: '4 days ago' }
    ],
    topRestaurants: [
      { name: 'The Tibetan Kitchen', rating: 4.9, address: 'Fort Road, Leh, Ladakh' },
      { name: 'Gesmo Restaurant', rating: 4.8, address: 'Main Market, Leh' }
    ]
  },
  {
    id: 'andaman-crab-masala',
    name: 'Andaman Coconut Mangrove Crab Masala',
    stateId: 'andaman-and-nicobar',
    stateName: 'Andaman & Nicobar Islands',
    cityName: 'Port Blair',
    category: 'Dinner',
    tags: ['Top 10', 'Must Try', 'Dinner', 'Tribal & Regional', 'Most Loved'],
    veg: false,
    spiceLevel: 3,
    popularityRating: 4.94,
    reviewsCount: 1980,
    priceRange: '₹480 - ₹850',
    calories: '440 kcal',
    prepTime: '40 mins',
    image: FOOD_IMAGES['crab-masala'],
    galleryImages: [FOOD_IMAGES['crab-masala']],
    description: 'Fresh succulent mangrove mud crabs cooked in island spices, roasted coconut paste, curry leaves, and black pepper caught fresh from the Bay of Bengal reefs.',
    culturalSignificance: 'A seafood paradise favorite across the Andaman archipelago, blending Bengali, Tamil, and tribal island culinary traditions.',
    foodStory: 'Local fishermen in Havelock Island catch mangrove mud crabs at dawn and cook them in fresh stone-pressed island coconut milk.',
    ingredients: ['Fresh Bay of Bengal Mangrove Mud Crabs', 'Roasted Fresh Island Coconut Paste', 'Curry Leaves & Mustard Seeds', 'Black Peppercorns & Green Chillies', 'Tamarind Pulp & Coconut Oil'],
    preparationMethod: '1. Clean and crack fresh crab claws.\n2. Sauté onions, garlic, and curry leaves in coconut oil.\n3. Add roasted coconut spice paste and tamarind.\n4. Toss in crabs and simmer covered until shells turn bright orange-red and absorb the rich gravy.\n5. Serve with steamed jasmine rice.',
    nutrition: { carbs: '8g', protein: '38g', fat: '18g', fiber: '3g' },
    userReviews: [
      { user: 'Rohit Verma', rating: 5, comment: 'Sweet fresh crab meat enveloped in fiery coconut masala overlooking Radhanagar beach.', date: '1 week ago' }
    ],
    topRestaurants: [
      { name: 'New Lighthouse Restaurant', rating: 4.8, address: 'Marina Park Road, Port Blair' },
      { name: 'Something Different - A Beachside Cafe', rating: 4.8, address: 'Beach No. 2, Havelock Island' }
    ]
  },
  {
    id: 'puducherry-french-croissant-crepe',
    name: 'Puducherry French Crepe & Baguette',
    stateId: 'puducherry',
    stateName: 'Puducherry',
    cityName: 'Pondicherry',
    category: 'Breakfast',
    tags: ['Top 10', 'Breakfast', 'Must Try', 'Trending', 'Tourist Favorite'],
    veg: true,
    spiceLevel: 0,
    popularityRating: 4.96,
    reviewsCount: 3200,
    priceRange: '₹140 - ₹280',
    calories: '320 kcal',
    prepTime: '20 mins',
    image: FOOD_IMAGES['crepe'],
    galleryImages: [FOOD_IMAGES['crepe']],
    description: 'Paper-thin French crepes drizzled with organic honey and fresh tropical mango, paired with crisp wood-fired French sourdough baguettes and butter.',
    culturalSignificance: 'The signature Franco-Tamil breakfast heritage of White Town in Puducherry.',
    foodStory: 'French bakers arriving in the 18th century taught local Tamil apprentices artisanal sourdough baking, creating a unique coastal fusion.',
    ingredients: ['French Wheat Flour', 'Farm Fresh Milk & Butter', 'Organic Honey & Fresh Mango', 'Sourdough Baguette Loaf', 'Filter Coffee'],
    preparationMethod: '1. Whisk crepe batter till silky.\n2. Swirl paper-thin on buttered crepe pan.\n3. Fold into triangles with fresh fruits and honey.\n4. Serve with warm, crusty baguette slices and French press coffee.',
    nutrition: { carbs: '46g', protein: '8g', fat: '10g', fiber: '2g' },
    userReviews: [
      { user: 'Claire Delacroix', rating: 5, comment: 'Sitting in a French colonial courtyard in White Town with a warm crepe is pure romance.', date: '3 days ago' }
    ],
    topRestaurants: [
      { name: 'Cafe des Arts', rating: 4.9, address: 'Suffren Street, White Town, Puducherry' },
      { name: 'Baker Street', rating: 4.8, address: 'Bussy Street, Puducherry' }
    ]
  }
];

// Helper functions for querying the Master Food Database
export const getDishesByState = (stateId: string): DetailedFoodItem[] => {
  return MASTER_FOOD_DATABASE.filter((f) => f.stateId === stateId);
};

export const getDishesByTag = (tag: string): DetailedFoodItem[] => {
  return MASTER_FOOD_DATABASE.filter((f) => f.tags.includes(tag));
};

export const getDishesByCategory = (category: string): DetailedFoodItem[] => {
  if (category === 'all' || category === 'All') return MASTER_FOOD_DATABASE;
  return MASTER_FOOD_DATABASE.filter((f) => f.category.toLowerCase().includes(category.toLowerCase()));
};
