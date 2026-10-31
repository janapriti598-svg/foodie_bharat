import { create } from 'zustand';
import { ALL_BADGES, ALL_JOURNEY_STOPS, PassportBadge, JourneyStop } from '../data/localIndiaData';
import { FOOD_IMAGES, ImageRef } from '../data/foodImages';
import { LanguageCode, TRANSLATIONS } from '../constants/i18n';

interface UserProfile {
  name: string;
  handle: string;
  avatar: ImageRef;
  city: string;
  favoriteState: string;
  xp: number;
  level: string;
  explorerTitle: string;
}

interface FoodieState {
  language: LanguageCode;
  isDarkMode: boolean;
  user: UserProfile;
  favorites: string[]; // food ids
  savedStates: string[]; // state ids
  savedCities: string[]; // city ids
  likedReels: string[]; // reel ids
  badges: PassportBadge[];
  journeyStops: JourneyStop[];
  selectedRegion: string;
  selectedCategory: string;
  vegOnlyFilter: boolean;
  searchQuery: string;

  // Actions
  setLanguage: (lang: LanguageCode) => void;
  toggleDarkMode: () => void;
  toggleFavorite: (foodId: string) => void;
  isFavorite: (foodId: string) => boolean;
  toggleSaveState: (stateId: string) => void;
  isStateSaved: (stateId: string) => boolean;
  toggleLikeReel: (reelId: string) => void;
  isReelLiked: (reelId: string) => boolean;
  unlockJourneyStop: (stopId: string) => void;
  addXP: (amount: number) => void;
  setSelectedRegion: (region: string) => void;
  setSelectedCategory: (category: string) => void;
  setVegOnlyFilter: (val: boolean) => void;
  setSearchQuery: (query: string) => void;
  t: (key: string) => string;
}

export const useFoodieStore = create<FoodieState>((set, get) => ({
  language: 'en',
  isDarkMode: false,
  user: {
    name: 'Aarav Sharma',
    handle: '@aarav_foodie',
    avatar: FOOD_IMAGES['avatar-man-3'],
    city: 'Kolkata / Delhi',
    favoriteState: 'West Bengal',
    xp: 2850,
    level: 'Master Connoisseur',
    explorerTitle: 'Bharat Food Trail Blazer 🏆'
  },
  favorites: ['kolkata-biryani', 'amritsari-kulcha', 'masala-dosa', 'chhena-poda'],
  savedStates: ['west-bengal', 'punjab', 'rajasthan', 'kerala'],
  savedCities: ['kolkata', 'amritsar', 'jaipur', 'mumbai'],
  likedReels: ['reel-1', 'reel-2'],
  badges: ALL_BADGES,
  journeyStops: ALL_JOURNEY_STOPS,
  selectedRegion: 'All',
  selectedCategory: 'all',
  vegOnlyFilter: false,
  searchQuery: '',

  setLanguage: (lang) => set({ language: lang }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  
  toggleFavorite: (foodId) =>
    set((state) => {
      const exists = state.favorites.includes(foodId);
      const newFavs = exists
        ? state.favorites.filter((id) => id !== foodId)
        : [...state.favorites, foodId];
      return { favorites: newFavs };
    }),

  isFavorite: (foodId) => get().favorites.includes(foodId),

  toggleSaveState: (stateId) =>
    set((state) => {
      const exists = state.savedStates.includes(stateId);
      const newStates = exists
        ? state.savedStates.filter((id) => id !== stateId)
        : [...state.savedStates, stateId];
      return { savedStates: newStates };
    }),

  isStateSaved: (stateId) => get().savedStates.includes(stateId),

  toggleLikeReel: (reelId) =>
    set((state) => {
      const exists = state.likedReels.includes(reelId);
      const newLikes = exists
        ? state.likedReels.filter((id) => id !== reelId)
        : [...state.likedReels, reelId];
      return { likedReels: newLikes };
    }),

  isReelLiked: (reelId) => get().likedReels.includes(reelId),

  unlockJourneyStop: (stopId) =>
    set((state) => {
      const updatedStops = state.journeyStops.map((stop) =>
        stop.id === stopId ? { ...stop, unlocked: true } : stop
      );
      return {
        journeyStops: updatedStops,
        user: { ...state.user, xp: state.user.xp + 250 }
      };
    }),

  addXP: (amount) =>
    set((state) => ({
      user: { ...state.user, xp: state.user.xp + amount }
    })),

  setSelectedRegion: (region) => set({ selectedRegion: region }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setVegOnlyFilter: (val) => set({ vegOnlyFilter: val }),
  setSearchQuery: (query) => set({ searchQuery: query }),

  t: (key) => {
    const lang = get().language;
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || key;
  }
}));
