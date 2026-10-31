const express = require('express');
const cors = require('cors');
const path = require('path');
const {
  STATES_AND_UTS,
  FEATURED_FOODS,
  FOOD_CATEGORIES,
  FESTIVAL_FOODS,
  FOOD_REELS,
  PASSPORT_BADGES,
  FOOD_JOURNEY_STOPS,
  PROMOTIONAL_OFFERS
} = require('./data/indiaFoodData');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Dish & state photos shared with the mobile app (referenced as /images/food/<name>.jpg in the data)
app.use('/images/food', express.static(path.join(__dirname, '..', 'assets', 'images', 'food')));

// Global logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// --- ROOT & HEALTH ---
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Foodie Bharat Backend API',
    version: '1.0.0',
    totalStatesAndUTs: STATES_AND_UTS.length,
    timestamp: new Date().toISOString()
  });
});

// --- STATES & UTS ENDPOINTS ---
app.get('/api/states', (req, res) => {
  const { region, search } = req.query;
  let results = [...STATES_AND_UTS];
  if (region && region !== 'All') {
    results = results.filter(s => s.region.toLowerCase() === region.toLowerCase());
  }
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.capital.toLowerCase().includes(q) ||
      s.famousDishes.some(d => d.toLowerCase().includes(q))
    );
  }
  res.json(results);
});

app.get('/api/states/:id', (req, res) => {
  const state = STATES_AND_UTS.find(s => s.id === req.params.id);
  if (!state) return res.status(404).json({ error: 'State or UT not found' });
  
  // Attach state-specific foods
  const stateFoods = FEATURED_FOODS.filter(f => f.stateId === state.id);
  res.json({ ...state, detailedFoods: stateFoods });
});

app.get('/api/states/:id/cities/:cityId', (req, res) => {
  const state = STATES_AND_UTS.find(s => s.id === req.params.id);
  if (!state) return res.status(404).json({ error: 'State not found' });
  const city = state.cities.find(c => c.id === req.params.cityId);
  if (!city) return res.status(404).json({ error: 'City not found' });

  const cityFoods = FEATURED_FOODS.filter(f => f.city.toLowerCase() === city.name.toLowerCase());
  res.json({ state: state.name, stateId: state.id, ...city, foods: cityFoods });
});

// --- FOODS ENDPOINTS ---
app.get('/api/foods', (req, res) => {
  const { category, state, search, vegOnly, maxSpice } = req.query;
  let results = [...FEATURED_FOODS];

  if (category && category !== 'all') {
    const catFormatted = category.replace('-', ' ').toLowerCase();
    results = results.filter(f => f.category.toLowerCase().includes(catFormatted) || (category === 'veg' && f.veg) || (category === 'non-veg' && !f.veg));
  }
  if (state) {
    results = results.filter(f => f.stateId === state || f.state.toLowerCase() === state.toLowerCase());
  }
  if (vegOnly === 'true') {
    results = results.filter(f => f.veg);
  }
  if (maxSpice) {
    results = results.filter(f => f.spiceLevel <= parseInt(maxSpice, 10));
  }
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(f =>
      f.name.toLowerCase().includes(q) ||
      f.state.toLowerCase().includes(q) ||
      f.city.toLowerCase().includes(q) ||
      f.ingredients.some(ing => ing.toLowerCase().includes(q))
    );
  }
  res.json(results);
});

app.get('/api/foods/categories', (req, res) => {
  res.json(FOOD_CATEGORIES);
});

app.get('/api/foods/:id', (req, res) => {
  const food = FEATURED_FOODS.find(f => f.id === req.params.id);
  if (!food) return res.status(404).json({ error: 'Food item not found' });
  
  // Similar foods from same state or category
  const similar = FEATURED_FOODS.filter(f => f.id !== food.id && (f.stateId === food.stateId || f.category === food.category));
  res.json({ ...food, similarFoods: similar });
});

// --- REELS & STORIES ---
app.get('/api/reels', (req, res) => {
  res.json(FOOD_REELS);
});

// --- FESTIVALS & OFFERS ---
app.get('/api/festivals', (req, res) => {
  res.json(FESTIVAL_FOODS);
});

app.get('/api/offers', (req, res) => {
  res.json(PROMOTIONAL_OFFERS);
});

// --- GAMIFICATION & JOURNEY ---
app.get('/api/journey/stops', (req, res) => {
  res.json(FOOD_JOURNEY_STOPS);
});

app.get('/api/passport/badges', (req, res) => {
  res.json(PASSPORT_BADGES);
});

// --- AI FOOD GUIDE ENDPOINT ---
app.post('/api/ai/recommend', (req, res) => {
  const { prompt, preferences } = req.body;
  const userText = (prompt || '').toLowerCase();

  let responseMessage = "";
  let suggestedDishes = [];
  let tip = "";

  if (userText.includes('kolkata') || userText.includes('bengal') || userText.includes('sweet') || userText.includes('mishti')) {
    responseMessage = "Namaskar! West Bengal is a gastronomic wonderland. You must indulge in the iconic Kolkata Mutton Biryani (featuring the legendary melt-in-mouth potato and saffron infusion), pair it with Shorshe Ilish (Hilsa fish in fiery mustard gravy), and end with warm spongy Rosogolla or baked Mishti Doi!";
    suggestedDishes = ["Kolkata Mutton Biryani", "Rosogolla", "Mishti Doi", "Shorshe Ilish"];
    tip = "Pro Tip: Sip sweet Gondhoraj Ghol or pair your afternoon luchi with fragrant Cholar Dal.";
  } else if (userText.includes('rajasthan') || userText.includes('jaipur') || userText.includes('royal')) {
    responseMessage = "Khamma Ghani! Rajasthan's royal cuisine offers bold desert flavors. Try the authentic Dal Baati Churma soaked in rich desi ghee, the fiery warrior curry Laal Maas prepared with Mathania chilies, and crisp Pyaaz Kachori!";
    suggestedDishes = ["Rajasthani Dal Baati Churma", "Laal Maas", "Ghewar", "Pyaaz Kachori"];
    tip = "Pro Tip: Beat the desert heat with chilled spiced Chaas flavored with roasted cumin.";
  } else if (userText.includes('spicy') || userText.includes('mirchi') || userText.includes('hot')) {
    responseMessage = "Looking for an adrenaline spice kick? Explore Nagaland's Bhut Jolokia Pork with Axone, Andhra Pradesh's fiery Guntur Chilli Prawns, or Kolhapur's legendary red Tambda Rassa!";
    suggestedDishes = ["Guntur Chilli Chicken", "Kolhapuri Tambda Rassa", "Smoked Pork with Axone"];
    tip = "Pro Tip: Keep a bowl of cool Cucumber Raita or sweet Rasmalai nearby!";
  } else if (userText.includes('south') || userText.includes('dosa') || userText.includes('breakfast') || userText.includes('chennai') || userText.includes('bangalore')) {
    responseMessage = "Vanakkam & Namaskara! South India serves the world's finest breakfast. Treat yourself to a crisp Mysore Butter Masala Dosa smeared with red garlic chutney, soft steaming Mallige Idlis with 4 chutneys, and piping hot brass-tumbler Filter Kaapi!";
    suggestedDishes = ["Mysore Butter Masala Dosa", "Ven Pongal", "Chettinad Chicken", "Filter Kaapi"];
    tip = "Pro Tip: Enjoy your dosa fresh and hot off the cast-iron tawa with fresh coconut chutney.";
  } else if (userText.includes('punjab') || userText.includes('delhi') || userText.includes('butter chicken') || userText.includes('dhaba')) {
    responseMessage = "Balle Balle! Punjab and Delhi serve hearty comfort food. Nothing beats authentic Amritsari Kulcha with melting white butter and pindi chole, accompanied by rich Dal Makhani and a tall clay kulhad of sweet Malai Lassi!";
    suggestedDishes = ["Amritsari Stuffed Kulcha & Chole", "Butter Chicken", "Dal Makhani", "Makki Di Roti"];
    tip = "Pro Tip: Ask for extra homemade white butter (safed makhan) on your hot tandoori kulcha!";
  } else {
    responseMessage = `Greetings from Bharat Rasoi AI! India has over 36 distinct culinary cultures across its 28 states and 8 union territories. From the saffron-infused Wazwans of Kashmir to the coconut curries of Kerala, each region has centuries of storytelling through spices. Tell me your preferred taste (spicy, sweet, vegetarian, royal, street food) or a specific city to curate your personalized journey!`;
    suggestedDishes = ["Kolkata Mutton Biryani", "Hyderabadi Dum Biryani", "Amritsari Stuffed Kulcha", "Mysore Masala Dosa"];
    tip = "Try asking: 'What are the must-try street foods in Mumbai?' or 'Best vegetarian sweets in Odisha?'";
  }

  res.json({
    reply: responseMessage,
    suggestedDishes,
    culinaryTip: tip,
    timestamp: new Date().toISOString()
  });
});

// --- ADMIN & ANALYTICS ---
app.get('/api/admin/analytics', (req, res) => {
  res.json({
    metrics: {
      totalUsers: 142580,
      totalStatesCovered: 36,
      totalDishesInRegistry: 5120,
      totalReviews: 89430,
      totalReelsWatched: 2450190,
      activeFoodJourneys: 42300
    },
    topStates: [
      { name: "West Bengal", visitors: 34200, rating: 4.9 },
      { name: "Punjab", visitors: 31800, rating: 4.88 },
      { name: "Telangana", visitors: 29400, rating: 4.92 },
      { name: "Maharashtra", visitors: 28900, rating: 4.85 },
      { name: "Rajasthan", visitors: 27100, rating: 4.9 }
    ],
    popularCategories: [
      { name: "Street Food", share: 38 },
      { name: "Main Course", share: 26 },
      { name: "Traditional Sweets", share: 18 },
      { name: "Regional Cuisine", share: 12 },
      { name: "Tea & Drinks", share: 6 }
    ],
    userGrowth: [
      { month: "Jan", users: 65000 },
      { month: "Feb", users: 82000 },
      { month: "Mar", users: 104000 },
      { month: "Apr", users: 125000 },
      { month: "May", users: 142580 }
    ]
  });
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`🇮🇳 Foodie Bharat API server running at http://localhost:${PORT}`);
});
