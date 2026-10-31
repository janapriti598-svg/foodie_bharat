import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ALL_STATES_AND_UTS, ALL_FEATURED_FOODS } from '../../data/localIndiaData';
import { imageSource, ImageRef } from '../../data/foodImages';
import { MASTER_FOOD_DATABASE, getDishesByState } from '../../data/stateFoodDatabase';
import { SpiceMeter } from '../../components/SpiceMeter';
import { useFoodieStore } from '../../store/useFoodieStore';

const { width } = Dimensions.get('window');

const CATEGORY_TABS = [
  { id: 'all', label: 'All Foods', icon: '🍽️' },
  { id: 'Top 10', label: 'Top 10 Popular', icon: '🌟' },
  { id: 'Trending', label: 'Trending', icon: '🔥' },
  { id: 'Must Try', label: 'Must-Try', icon: '👑' },
  { id: 'Traditional', label: 'Traditional', icon: '🍲' },
  { id: 'Street Food', label: 'Street Food', icon: '🍢' },
  { id: 'Festival Special', label: 'Festival Specials', icon: '🎉' },
  { id: 'Breakfast', label: 'Breakfast', icon: '🥞' },
  { id: 'Lunch', label: 'Lunch', icon: '🍛' },
  { id: 'Dinner', label: 'Dinner', icon: '🌙' },
  { id: 'Sweets', label: 'Desserts & Sweets', icon: '🍮' },
  { id: 'Hidden Gem', label: 'Hidden Gems', icon: '💎' },
  { id: 'Tribal & Regional', label: 'Tribal & Regional', icon: '🌿' },
  { id: 'Most Loved', label: 'Most Loved', icon: '❤️' },
];

export default function StateDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { isStateSaved, toggleSaveState, isFavorite, toggleFavorite } = useFoodieStore();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);

  const stateData = ALL_STATES_AND_UTS.find((s) => s.id === id) || ALL_STATES_AND_UTS[0];
  const saved = isStateSaved(stateData.id);

  // Master database foods for this state
  const stateMasterDishes = useMemo(() => {
    return getDishesByState(stateData.id);
  }, [stateData.id]);

  // Fallback / legacy local data foods for this state
  const stateLocalDishes = useMemo(() => {
    return ALL_FEATURED_FOODS.filter(
      (f) => f.stateId === stateData.id || f.state.toLowerCase() === stateData.name.toLowerCase()
    );
  }, [stateData.id, stateData.name]);

  // Filtered dishes based on active tab
  const filteredMasterDishes = useMemo(() => {
    if (activeTab === 'all') return stateMasterDishes;
    return stateMasterDishes.filter((dish) => {
      if (dish.tags && dish.tags.includes(activeTab)) return true;
      if (dish.category.toLowerCase().includes(activeTab.toLowerCase())) return true;
      return false;
    });
  }, [stateMasterDishes, activeTab]);

  // Gallery images collection from state dishes
  const stateGalleryImages = useMemo(() => {
    const images: { url: ImageRef; caption: string; dishId?: string }[] = [
      { url: stateData.banner, caption: `${stateData.name} Culinary Landscape` }
    ];
    stateMasterDishes.forEach((d) => {
      if (d.galleryImages && d.galleryImages.length > 0) {
        d.galleryImages.forEach((img) => {
          images.push({ url: img, caption: d.name, dishId: d.id });
        });
      } else if (d.image) {
        images.push({ url: d.image, caption: d.name, dishId: d.id });
      }
    });
    return images.slice(0, 10);
  }, [stateData, stateMasterDishes]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* State Hero Banner */}
        <View style={styles.heroContainer}>
          <Image source={imageSource(stateData.banner)} style={styles.heroImage} />
          <LinearGradient
            colors={['rgba(0,0,0,0.65)', 'transparent', 'rgba(15,23,42,0.98)']}
            style={styles.heroGradient}
          >
            {/* Top Navigation */}
            <View style={styles.topNavRow}>
              <TouchableOpacity onPress={() => router.back()} style={styles.backBtn} activeOpacity={0.8}>
                <Text style={styles.backBtnText}>← Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => toggleSaveState(stateData.id)}
                style={styles.saveBtn}
                activeOpacity={0.8}
              >
                <Text style={styles.saveBtnText}>{saved ? '❤️ State Saved' : '🤍 Save State'}</Text>
              </TouchableOpacity>
            </View>

            {/* State Title Block */}
            <View style={styles.stateTitleBlock}>
              <View style={styles.badgeRow}>
                <View style={styles.typeBadge}>
                  <Text style={styles.typeBadgeText}>{stateData.type.toUpperCase()}</Text>
                </View>
                <View style={styles.regionBadge}>
                  <Text style={styles.regionBadgeText}>{stateData.region} INDIA</Text>
                </View>
                <View style={styles.dishCountBadge}>
                  <Text style={styles.dishCountText}>🍛 {stateData.famousDishes.length}+ Specialties</Text>
                </View>
              </View>
              <Text style={styles.stateTitle}>{stateData.name}</Text>
              <Text style={styles.stateSubTitle}>
                🏛️ Capital: <Text style={styles.boldWhite}>{stateData.capital}</Text> • 🗣️ Language: <Text style={styles.boldWhite}>{stateData.language}</Text>
              </Text>
            </View>
          </LinearGradient>
        </View>

        {/* Quick Highlights Counters */}
        <View style={styles.highlightsBar}>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightEmoji}>🏙️</Text>
            <Text style={styles.highlightVal}>{stateData.cities.length} Cities</Text>
            <Text style={styles.highlightLbl}>Culinary Hubs</Text>
          </View>
          <View style={styles.highlightDivider} />
          <View style={styles.highlightItem}>
            <Text style={styles.highlightEmoji}>🍢</Text>
            <Text style={styles.highlightVal}>{stateData.streetFoods.length} Hubs</Text>
            <Text style={styles.highlightLbl}>Street Food</Text>
          </View>
          <View style={styles.highlightDivider} />
          <View style={styles.highlightItem}>
            <Text style={styles.highlightEmoji}>📜</Text>
            <Text style={styles.highlightVal}>{stateData.elevation || '100% Authentic'}</Text>
            <Text style={styles.highlightLbl}>Heritage</Text>
          </View>
        </View>

        {/* State Multi-Photo Gallery Carousel */}
        {stateGalleryImages.length > 0 && (
          <View style={styles.gallerySection}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>📸 State Food Photography Gallery</Text>
              <Text style={styles.galleryCountText}>{stateGalleryImages.length} High-Res Photos</Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.galleryScroll}
            >
              {stateGalleryImages.map((img, idx) => (
                <TouchableOpacity
                  key={idx}
                  activeOpacity={0.9}
                  onPress={() => {
                    setSelectedGalleryIdx(idx);
                    if (img.dishId) {
                      router.push(`/food/${img.dishId}` as any);
                    }
                  }}
                  style={[
                    styles.galleryCard,
                    selectedGalleryIdx === idx && styles.galleryCardActive
                  ]}
                >
                  <Image source={imageSource(img.url)} style={styles.galleryImage} />
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.85)']}
                    style={styles.galleryGradient}
                  >
                    <Text style={styles.galleryCaption} numberOfLines={1}>
                      {img.caption}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Culinary Heritage & Cultural Significance */}
        <View style={styles.sectionCard}>
          <Text style={styles.cardHeaderTitle}>📖 Culinary Heritage & Culture</Text>
          <Text style={styles.descText}>{stateData.description}</Text>
          <View style={styles.divider} />
          <Text style={styles.cultureText}>&ldquo;{stateData.culture}&rdquo;</Text>
        </View>

        {/* Food Cities in State */}
        <View style={styles.citiesSection}>
          <Text style={styles.sectionTitle}>🏙️ Iconic Food Cities in {stateData.name}</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cityScroll}
          >
            {stateData.cities.map((city) => (
              <TouchableOpacity
                key={city.id}
                activeOpacity={0.85}
                onPress={() => router.push(`/city/${city.id}` as any)}
                style={styles.cityCard}
              >
                <Text style={styles.cityCardName}>{city.name}</Text>
                <View style={styles.cityDishPill}>
                  <Text style={styles.cityDishText}>🍛 {city.famousDish}</Text>
                </View>
                <Text style={styles.cityCardDesc} numberOfLines={2}>
                  {city.description}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Signature Dishes Tags Grid */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>✨ Signature State Delicacies ({stateData.famousDishes.length})</Text>
        </View>
        <View style={styles.dishesTagsGrid}>
          {stateData.famousDishes.map((dish, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              onPress={() => {
                const match = stateMasterDishes.find((m) => m.name.toLowerCase().includes(dish.toLowerCase()));
                if (match) {
                  router.push(`/food/${match.id}` as any);
                }
              }}
              style={styles.dishTagItem}
            >
              <Text style={styles.dishTagItemText}>✨ {dish}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Category Filters Tabs */}
        <View style={styles.categoryTabsSection}>
          <Text style={styles.sectionTitle}>📂 Explore by Food Category</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabsScroll}
          >
            {CATEGORY_TABS.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <TouchableOpacity
                  key={tab.id}
                  activeOpacity={0.8}
                  onPress={() => setActiveTab(tab.id)}
                  style={[styles.categoryTabBtn, active && styles.categoryTabBtnActive]}
                >
                  <Text style={styles.tabIcon}>{tab.icon}</Text>
                  <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>
                    {tab.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Master Detailed Food Cards for State */}
        {filteredMasterDishes.length > 0 ? (
          <View style={styles.detailedFoodsSection}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>
                🍲 {CATEGORY_TABS.find((t) => t.id === activeTab)?.label || 'Dishes'} ({filteredMasterDishes.length})
              </Text>
            </View>

            {filteredMasterDishes.map((dish) => {
              const favorited = isFavorite(dish.id);
              return (
                <TouchableOpacity
                  key={dish.id}
                  activeOpacity={0.92}
                  onPress={() => router.push(`/food/${dish.id}` as any)}
                  style={styles.masterFoodCard}
                >
                  {/* Card Image Banner */}
                  <View style={styles.cardImageWrapper}>
                    <Image source={imageSource(dish.image)} style={styles.cardCoverImage} />
                    <LinearGradient
                      colors={['rgba(0,0,0,0.5)', 'transparent', 'rgba(0,0,0,0.85)']}
                      style={styles.cardImageOverlay}
                    >
                      <View style={styles.cardTopBadgeRow}>
                        <View style={[styles.vegBadge, { borderColor: dish.veg ? '#2E7D32' : '#C62828' }]}>
                          <View
                            style={[
                              styles.vegDot,
                              { backgroundColor: dish.veg ? '#2E7D32' : '#C62828' }
                            ]}
                          />
                        </View>
                        <View style={styles.categoryPill}>
                          <Text style={styles.categoryPillText}>{dish.category}</Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => toggleFavorite(dish.id)}
                          style={styles.favIconBtn}
                          activeOpacity={0.8}
                        >
                          <Text style={styles.favIconText}>{favorited ? '❤️' : '🤍'}</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={styles.cardBottomInfo}>
                        <Text style={styles.cardDishName}>{dish.name}</Text>
                        <Text style={styles.cardDishOrigin}>
                          📍 {dish.cityName}, {dish.stateName}
                        </Text>
                      </View>
                    </LinearGradient>
                  </View>

                  {/* Multi-Photo Thumbnail Strip */}
                  {dish.galleryImages && dish.galleryImages.length > 1 && (
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={styles.cardThumbnailsRow}
                    >
                      {dish.galleryImages.map((thumb, idx) => (
                        <Image key={idx} source={imageSource(thumb)} style={styles.cardThumb} />
                      ))}
                    </ScrollView>
                  )}

                  {/* Card Body Info */}
                  <View style={styles.cardBody}>
                    <Text style={styles.cardDesc} numberOfLines={2}>
                      {dish.description}
                    </Text>

                    {/* Cultural Significance Snippet */}
                    <View style={styles.culturalSnippetBox}>
                      <Text style={styles.culturalSnippetTitle}>📜 Cultural Significance</Text>
                      <Text style={styles.culturalSnippetText} numberOfLines={2}>
                        {dish.culturalSignificance}
                      </Text>
                    </View>

                    {/* Quick Stats Bar */}
                    <View style={styles.cardStatsRow}>
                      <View style={styles.cardStatItem}>
                        <Text style={styles.cardStatEmoji}>⭐</Text>
                        <Text style={styles.cardStatVal}>{dish.popularityRating}</Text>
                        <Text style={styles.cardStatSub}>({dish.reviewsCount})</Text>
                      </View>
                      <View style={styles.cardStatDivider} />
                      <View style={styles.cardStatItem}>
                        <Text style={styles.cardStatEmoji}>⏱️</Text>
                        <Text style={styles.cardStatVal}>{dish.prepTime}</Text>
                      </View>
                      <View style={styles.cardStatDivider} />
                      <View style={styles.cardStatItem}>
                        <Text style={styles.cardStatEmoji}>🔥</Text>
                        <Text style={styles.cardStatVal}>{dish.calories}</Text>
                      </View>
                    </View>

                    {/* Spice Meter */}
                    <View style={styles.spiceRow}>
                      <Text style={styles.spiceRowLabel}>Spice Level:</Text>
                      <SpiceMeter level={dish.spiceLevel} />
                    </View>

                    {/* Key Ingredients Chips */}
                    <View style={styles.ingredientsChipsRow}>
                      {dish.ingredients.slice(0, 4).map((ing, idx) => (
                        <View key={idx} style={styles.ingredientTag}>
                          <Text style={styles.ingredientTagText}>• {ing}</Text>
                        </View>
                      ))}
                      {dish.ingredients.length > 4 && (
                        <View style={styles.moreIngredientsTag}>
                          <Text style={styles.moreIngredientsText}>+{dish.ingredients.length - 4} more</Text>
                        </View>
                      )}
                    </View>

                    {/* User Review Quote */}
                    {dish.userReviews && dish.userReviews.length > 0 && (
                      <View style={styles.reviewQuoteBox}>
                        <Text style={styles.reviewQuoteUser}>💬 {dish.userReviews[0].user}:</Text>
                        <Text style={styles.reviewQuoteComment}>&ldquo;{dish.userReviews[0].comment}&rdquo;</Text>
                      </View>
                    )}

                    {/* View Recipe & Details Action Button */}
                    <TouchableOpacity
                      activeOpacity={0.85}
                      onPress={() => router.push(`/food/${dish.id}` as any)}
                      style={styles.viewRecipeBtn}
                    >
                      <Text style={styles.viewRecipeBtnText}>View Full Recipe & Authentic Eateries →</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : stateLocalDishes.length > 0 ? (
          <View style={styles.detailedFoodsSection}>
            <Text style={styles.sectionTitle}>🔍 Culinary Specialties</Text>
            {stateLocalDishes.map((food) => (
              <TouchableOpacity
                key={food.id}
                activeOpacity={0.9}
                onPress={() => router.push(`/food/${food.id}` as any)}
                style={styles.localDishCard}
              >
                <Image source={imageSource(food.image)} style={styles.localDishImage} />
                <View style={styles.localDishInfo}>
                  <Text style={styles.localDishName}>{food.name}</Text>
                  <Text style={styles.localDishCity}>📍 {food.city}</Text>
                  <Text style={styles.localDishDesc} numberOfLines={2}>
                    {food.description}
                  </Text>
                  <View style={styles.localDishFooter}>
                    <Text style={styles.localDishRating}>★ {food.rating}</Text>
                    <Text style={styles.localDishPrice}>{food.priceRange}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}

        {/* Famous Street Food Joints of State */}
        <View style={styles.streetFoodCard}>
          <Text style={styles.streetFoodTitle}>🍢 Famous Street Food Joints & Bazaars</Text>
          <View style={styles.streetFoodList}>
            {stateData.streetFoods.map((sf, idx) => (
              <View key={idx} style={styles.streetFoodItem}>
                <Text style={styles.streetFoodBullet}>🔥</Text>
                <Text style={styles.streetFoodText}>{sf}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recommended Restaurants Section */}
        {stateMasterDishes.length > 0 && stateMasterDishes[0].topRestaurants && (
          <View style={styles.restaurantsSection}>
            <Text style={styles.sectionTitle}>⭐ Top Authentic Eateries in {stateData.name}</Text>
            <View style={styles.restaurantsGrid}>
              {stateMasterDishes.flatMap((d) => d.topRestaurants).slice(0, 4).map((resto, idx) => (
                <View key={idx} style={styles.restaurantCard}>
                  <View style={styles.restoHeader}>
                    <Text style={styles.restoName}>{resto.name}</Text>
                    <View style={styles.restoRatingBadge}>
                      <Text style={styles.restoRatingText}>★ {resto.rating}</Text>
                    </View>
                  </View>
                  <Text style={styles.restoAddress}>📍 {resto.address}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  scrollContent: {
    paddingBottom: 60,
  },
  heroContainer: {
    height: 380,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroGradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    padding: 20,
  },
  topNavRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  backBtn: {
    backgroundColor: 'rgba(15,23,42,0.75)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  backBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
  saveBtn: {
    backgroundColor: 'rgba(230,81,0,0.85)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  saveBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
  stateTitleBlock: {
    marginBottom: 10,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  typeBadge: {
    backgroundColor: '#E65100',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  typeBadgeText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  regionBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  regionBadgeText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
  },
  dishCountBadge: {
    backgroundColor: 'rgba(16,185,129,0.3)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#10B981',
  },
  dishCountText: {
    color: '#6EE7B7',
    fontSize: 11,
    fontWeight: '700',
  },
  stateTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFF',
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    marginBottom: 4,
  },
  stateSubTitle: {
    fontSize: 14,
    color: '#CBD5E1',
  },
  boldWhite: {
    color: '#FFF',
    fontWeight: '700',
  },
  highlightsBar: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    marginHorizontal: 16,
    marginTop: -20,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
    elevation: 4,
  },
  highlightItem: {
    alignItems: 'center',
  },
  highlightEmoji: {
    fontSize: 20,
    marginBottom: 2,
  },
  highlightVal: {
    fontSize: 14,
    fontWeight: '800',
    color: '#F8FAFC',
  },
  highlightLbl: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 2,
  },
  highlightDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#334155',
  },
  gallerySection: {
    marginTop: 24,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#F8FAFC',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  galleryCountText: {
    fontSize: 12,
    color: '#F59E0B',
    fontWeight: '700',
  },
  galleryScroll: {
    paddingLeft: 16,
    paddingRight: 8,
    gap: 12,
  },
  galleryCard: {
    width: 220,
    height: 140,
    borderRadius: 14,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 2,
    borderColor: '#334155',
  },
  galleryCardActive: {
    borderColor: '#F59E0B',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  galleryGradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 10,
  },
  galleryCaption: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
  sectionCard: {
    backgroundColor: '#1E293B',
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardHeaderTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#F59E0B',
    marginBottom: 10,
  },
  descText: {
    fontSize: 14,
    color: '#CBD5E1',
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: '#334155',
    marginVertical: 12,
  },
  cultureText: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#94A3B8',
    lineHeight: 20,
  },
  citiesSection: {
    marginTop: 24,
  },
  cityScroll: {
    paddingLeft: 16,
    paddingRight: 8,
    gap: 12,
  },
  cityCard: {
    backgroundColor: '#1E293B',
    width: 200,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cityCardName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#F8FAFC',
    marginBottom: 6,
  },
  cityDishPill: {
    backgroundColor: 'rgba(230,81,0,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(230,81,0,0.4)',
  },
  cityDishText: {
    color: '#FB923C',
    fontSize: 11,
    fontWeight: '700',
  },
  cityCardDesc: {
    fontSize: 12,
    color: '#94A3B8',
    lineHeight: 16,
  },
  sectionHeader: {
    marginTop: 24,
  },
  dishesTagsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 8,
  },
  dishTagItem: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  dishTagItemText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#F1F5F9',
  },
  categoryTabsSection: {
    marginTop: 24,
  },
  tabsScroll: {
    paddingLeft: 16,
    paddingRight: 8,
    gap: 8,
  },
  categoryTabBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#334155',
    gap: 6,
  },
  categoryTabBtnActive: {
    backgroundColor: '#E65100',
    borderColor: '#F59E0B',
  },
  tabIcon: {
    fontSize: 14,
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#94A3B8',
  },
  tabLabelActive: {
    color: '#FFF',
  },
  detailedFoodsSection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  masterFoodCard: {
    backgroundColor: '#1E293B',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#334155',
    elevation: 4,
  },
  cardImageWrapper: {
    height: 220,
    position: 'relative',
  },
  cardCoverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardImageOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    padding: 14,
  },
  cardTopBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vegBadge: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  vegDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  categoryPill: {
    backgroundColor: 'rgba(15,23,42,0.85)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  categoryPillText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
  },
  favIconBtn: {
    backgroundColor: 'rgba(15,23,42,0.85)',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  favIconText: {
    fontSize: 15,
  },
  cardBottomInfo: {
    marginBottom: 2,
  },
  cardDishName: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFF',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  cardDishOrigin: {
    fontSize: 12,
    color: '#FCD34D',
    fontWeight: '600',
    marginTop: 2,
  },
  cardThumbnailsRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
    backgroundColor: '#0F172A',
  },
  cardThumb: {
    width: 60,
    height: 45,
    borderRadius: 8,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardBody: {
    padding: 16,
  },
  cardDesc: {
    fontSize: 14,
    color: '#CBD5E1',
    lineHeight: 20,
    marginBottom: 12,
  },
  culturalSnippetBox: {
    backgroundColor: 'rgba(245,158,11,0.1)',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#F59E0B',
  },
  culturalSnippetTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#F59E0B',
    marginBottom: 2,
  },
  culturalSnippetText: {
    fontSize: 12,
    color: '#CBD5E1',
    lineHeight: 16,
  },
  cardStatsRow: {
    flexDirection: 'row',
    backgroundColor: '#0F172A',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardStatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  cardStatEmoji: {
    fontSize: 14,
  },
  cardStatVal: {
    fontSize: 13,
    fontWeight: '800',
    color: '#F8FAFC',
  },
  cardStatSub: {
    fontSize: 11,
    color: '#94A3B8',
  },
  cardStatDivider: {
    width: 1,
    height: 18,
    backgroundColor: '#334155',
  },
  spiceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  spiceRowLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#94A3B8',
  },
  ingredientsChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 12,
  },
  ingredientTag: {
    backgroundColor: '#334155',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  ingredientTagText: {
    fontSize: 11,
    color: '#E2E8F0',
    fontWeight: '600',
  },
  moreIngredientsTag: {
    backgroundColor: 'rgba(230,81,0,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  moreIngredientsText: {
    fontSize: 11,
    color: '#FB923C',
    fontWeight: '700',
  },
  reviewQuoteBox: {
    backgroundColor: '#0F172A',
    padding: 10,
    borderRadius: 10,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#334155',
  },
  reviewQuoteUser: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6EE7B7',
    marginBottom: 2,
  },
  reviewQuoteComment: {
    fontSize: 12,
    color: '#94A3B8',
    fontStyle: 'italic',
  },
  viewRecipeBtn: {
    backgroundColor: '#E65100',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  viewRecipeBtnText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '800',
  },
  localDishCard: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
    gap: 12,
  },
  localDishImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  localDishInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  localDishName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#F8FAFC',
  },
  localDishCity: {
    fontSize: 12,
    color: '#F59E0B',
    fontWeight: '600',
  },
  localDishDesc: {
    fontSize: 12,
    color: '#94A3B8',
    lineHeight: 16,
  },
  localDishFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  localDishRating: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '700',
  },
  localDishPrice: {
    fontSize: 12,
    color: '#CBD5E1',
    fontWeight: '600',
  },
  streetFoodCard: {
    backgroundColor: '#1E293B',
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#334155',
  },
  streetFoodTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FB923C',
    marginBottom: 12,
  },
  streetFoodList: {
    gap: 10,
  },
  streetFoodItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  streetFoodBullet: {
    fontSize: 14,
  },
  streetFoodText: {
    flex: 1,
    fontSize: 13,
    color: '#CBD5E1',
    lineHeight: 18,
  },
  restaurantsSection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  restaurantsGrid: {
    gap: 10,
  },
  restaurantCard: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#334155',
  },
  restoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  restoName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#F8FAFC',
    flex: 1,
  },
  restoRatingBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  restoRatingText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '800',
  },
  restoAddress: {
    fontSize: 12,
    color: '#94A3B8',
  },
});
