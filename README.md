# 🇮🇳 Foodie Bharat – India's Premier Culinary Discovery & Cultural Experience Platform

[![Expo SDK 54](https://img.shields.io/badge/Expo-SDK%2054-orange.svg)](https://docs.expo.dev/)
[![React Native 0.81](https://img.shields.io/badge/React%20Native-0.81-blue.svg)](https://reactnative.dev/)
[![React 19](https://img.shields.io/badge/React-19.1-cyan.svg)](https://react.dev/)
[![Express.js](https://img.shields.io/badge/Backend-Express.js-green.svg)](https://expressjs.com/)

**Foodie Bharat** is India’s ultimate food exploration, cultural discovery, and culinary tourism platform. Built using **React Native with Expo SDK 54** on the frontend and **Node.js & Express** on the backend, Foodie Bharat combines the visual scale of Google Earth, the cultural depth of Incredible India, the discovery of Zomato/Swiggy, and the dynamism of Instagram Reels.

---

## 🌟 Key Features

### 1. 🗺️ 3D / 2.5D Interactive India Map
- Zoomable, pannable, animated vector map with glowing state pins.
- Regional filtering (North, South, East, West, Central, North-East, Islands).
- Tap any state to trigger camera flight transitions and launch in-depth culinary guides.

### 2. 🏛️ Complete 36 States & Union Territories Coverage
- Comprehensive coverage of all **28 States** and **8 Union Territories**.
- State profiles with Capitals, Languages, Cultural origins, Traditional dishes, Street foods, and Top restaurants.

### 3. 🏙️ City Explorer
- Deep dives into iconic culinary cities: *Kolkata, Amritsar, Lucknow, Mumbai, Jaipur, Hyderabad, Puri, Darjeeling, Varanasi, Madurai, Shillong, and more*.
- City food history, local street food trails, and iconic joints.

### 4. 🍛 Food Database & Dish Details
- Detailed dish profiles with Spice Meter, Veg/Non-Veg indicators, Calories, Prep time, and Price range.
- Cultural origin stories, full ingredient lists, authentic recipes, and nutritional facts.

### 5. 🎬 Instagram-Style Food Reels
- Vertical full-screen short food video feed.
- Interactive likes, comments drawer, sharing, creator follow toggles, audio tracks, and tagged restaurant links.

### 6. 🧭 Kashmir to Kanyakumari Food Trail & Bharat Food Passport
- 8-stage interactive culinary journey from Himalayan snows to the southern oceans.
- Unlockable food milestones, XP points, and gamified passport badges (*Bengal Sweet Connoisseur, Awadhi Nawab, Street Food Maha-Samrat, etc.*).

### 7. 🤖 Bharat Rasoi AI Guide
- Conversational culinary assistant for instant regional cuisine recommendations, flavor profile pairings, and secret recipes.

### 8. 🌐 8-Language Multi-Language Support
- Instant real-time language switching: **English, Hindi (हिन्दी), Bengali (বাংলা), Tamil (தமிழ்), Telugu (తెలుగు), Marathi (मराठी), Gujarati (ગુજરાતી), and Punjabi (ਪੰਜਾਬੀ)**.

### 9. 🎁 Festivals & Promotional Offers
- Special festive feasts (*Durga Puja, Diwali, Eid, Pongal & Onam, Holi*).
- Discount coupons, BOGO passes, and State Food Festival specials.

### 10. 📊 Admin Analytics Dashboard
- Real-time telemetry, explorer growth charts, category shares, top-performing states, and content management tools.

---

## 🏗️ Architecture & Tech Stack

### Frontend (Mobile App)
- **Framework**: Expo SDK 54 (React Native 0.81, React 19.1)
- **Navigation**: Expo Router (File-based navigation)
- **State Management**: Zustand (with offline persistence)
- **Data Fetching**: TanStack React Query + Axios
- **Animations & UI**: React Native Reanimated, Expo Linear Gradient, React Native SVG
- **Styling**: Indian Saffron & Royal Palette Design System

### Backend (REST API Server)
- **Runtime**: Node.js
- **Server**: Express.js with CORS and JSON middleware
- **Data Engine**: Embedded JSON database for all 36 States/UTs, 5000+ dish mappings, and reels
- **Authentication**: JWT auth & profile state

---

## 🚀 Quick Start Guide

### 1. Mobile App (Expo SDK 54)
```bash
# In the foodie-app directory
npm install

# Start the Expo development server
npx expo start

# Run on Web, iOS, or Android:
# Press 'w' for Web
# Press 'a' for Android
# Press 'i' for iOS
```

### 2. Backend Server
```bash
# In the backend directory
cd backend
npm install
npm start
# Server runs at http://localhost:5000
```

---

## 📡 Backend API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Health check & data registry stats |
| `GET` | `/api/states` | List all 36 States & UTs with region & query filtering |
| `GET` | `/api/states/:id` | Get state profile, culture, and associated dishes |
| `GET` | `/api/states/:id/cities/:cityId` | Get city food history and iconic eateries |
| `GET` | `/api/foods` | Filter foods by category, veg only, spice level |
| `GET` | `/api/foods/:id` | Detailed dish recipe, history, nutrition, and restaurants |
| `GET` | `/api/reels` | Food reels video feed with comments and creator metadata |
| `GET` | `/api/festivals` | Indian festive food menus and traditions |
| `GET` | `/api/offers` | Promotional discount coupons and festival passes |
| `GET` | `/api/journey/stops` | Kashmir to Kanyakumari milestone stops |
| `GET` | `/api/passport/badges` | Bharat Food Passport gamification badges |
| `POST` | `/api/ai/recommend` | Bharat Rasoi AI conversational assistant |
| `GET` | `/api/admin/analytics` | Admin dashboard telemetry and charts |

---

## 📱 Folder Structure

```
foodie-app/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx      # Bottom tab navigation (5 tabs)
│   │   ├── index.tsx        # Home Screen with 3D Map & Spotlights
│   │   ├── explore.tsx      # States & Cities Visual Explorer
│   │   ├── reels.tsx        # Food Reels vertical feed
│   │   ├── journey.tsx      # Food Journey & Passport
│   │   └── profile.tsx      # User Profile, Settings & Saved Foods
│   ├── state/[id].tsx       # State Profile Deep-dive
│   ├── city/[id].tsx        # City Explorer Page
│   ├── food/[id].tsx        # Food Details, Recipe & History
│   ├── ai-guide.tsx         # Bharat Rasoi AI Assistant
│   ├── festivals.tsx        # Festival Feasts Showcase
│   ├── offers.tsx           # Special Promotional Offers
│   ├── restaurant/[id].tsx  # Restaurant profile
│   ├── admin.tsx            # Admin Analytics Dashboard
│   └── _layout.tsx          # Root Stack & Theme Provider
├── backend/
│   ├── data/
│   │   └── indiaFoodData.js # 36 States/UTs, dishes, reels & festivals dataset
│   ├── package.json
│   └── server.js            # Express REST API server
├── components/
│   ├── IndiaMap.tsx         # 2.5D/3D Interactive Map
│   ├── FoodCard.tsx         # Glassmorphic Food Card with Spice Meter
│   ├── Header.tsx           # Header with language modal & AI button
│   ├── ReelPlayer.tsx       # Reels viewer with likes & comments drawer
│   ├── StoryBar.tsx         # Instagram-style Food Stories
│   ├── FestivalBanner.tsx   # Festive Food Banner
│   ├── PassportBadge.tsx    # Glowing Gamification Badge
│   └── SpiceMeter.tsx       # Animated Chili Spice Indicator
├── constants/
│   ├── Colors.ts            # Indian Saffron Palette tokens
│   └── i18n.ts              # 8 Indian languages translations
├── data/
│   └── localIndiaData.ts    # Complete Offline Dataset in TypeScript
├── store/
│   └── useFoodieStore.ts    # Zustand Global State
└── package.json
```
