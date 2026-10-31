import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Share,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ALL_FEATURED_FOODS } from '../../data/localIndiaData';
import { imageSource } from '../../data/foodImages';
import { MASTER_FOOD_DATABASE } from '../../data/stateFoodDatabase';
import { SpiceMeter } from '../../components/SpiceMeter';
import { useFoodieStore } from '../../store/useFoodieStore';

const { width } = Dimensions.get('window');

const PHOTO_LABELS = [
  '🌟 Hero Banner',
  '👨‍🍳 Preparation',
  '🍽️ Fresh Serving',
  '🏛️ Restaurant Presentation',
  '📜 Traditional Heritage'
];

export default function FoodDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { isFavorite, toggleFavorite } = useFoodieStore();
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(0);

  // Look up dish in Master Database first, fallback to Local Featured Foods
  const masterItem = MASTER_FOOD_DATABASE.find((f) => f.id === id);
  const localItem = ALL_FEATURED_FOODS.find((f) => f.id === id) || ALL_FEATURED_FOODS[0];

  const dish = masterItem || {
    id: localItem.id,
    name: localItem.name,
    stateId: localItem.stateId,
    stateName: localItem.state,
    cityName: localItem.city,
    category: localItem.category as any,
    tags: ['Must Try', 'Traditional'],
    veg: localItem.veg,
    spiceLevel: localItem.spiceLevel,
    popularityRating: localItem.rating,
    reviewsCount: localItem.reviewsCount,
    priceRange: localItem.priceRange,
    calories: localItem.calories,
    prepTime: localItem.prepTime,
    image: localItem.image,
    galleryImages: [localItem.image],
    description: localItem.description,
    culturalSignificance: localItem.history,
    foodStory: localItem.history,
    ingredients: localItem.ingredients,
    preparationMethod: localItem.preparation,
    nutrition: localItem.nutrition,
    userReviews: [
      { user: 'Foodie Explorer', rating: 5, comment: 'Phenomenal authentic flavor, a must try in India!', date: 'Recently' }
    ],
    topRestaurants: localItem.topRestaurants
  };

  const favorite = isFavorite(dish.id);
  const gallery = dish.galleryImages && dish.galleryImages.length > 0 ? dish.galleryImages : [dish.image];
  const activeImage = gallery[selectedPhotoIdx] || dish.image;

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Discover the authentic taste of ${dish.name} from ${dish.cityName}, ${dish.stateName} on Foodie Bharat!`,
      });
    } catch (e) {
      console.log('Error sharing:', e);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Visual Hero Header */}
        <View style={styles.heroContainer}>
          <Image source={imageSource(activeImage)} style={styles.heroImage} />
          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'transparent', 'rgba(15,23,42,0.98)']}
            style={styles.heroGradient}
          >
            {/* Top Navigation Row */}
            <View style={styles.topNavRow}>
              <TouchableOpacity onPress={() => router.back()} style={styles.backBtn} activeOpacity={0.8}>
                <Text style={styles.backBtnText}>← Back</Text>
              </TouchableOpacity>
              <View style={styles.topActionBtns}>
                <TouchableOpacity onPress={handleShare} style={styles.actionCircleBtn} activeOpacity={0.8}>
                  <Text style={styles.actionBtnIcon}>↗️</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => toggleFavorite(dish.id)}
                  style={styles.actionCircleBtn}
                  activeOpacity={0.8}
                >
                  <Text style={styles.actionBtnIcon}>{favorite ? '❤️' : '🤍'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Bottom Info on Hero */}
            <View style={styles.titleInfoBlock}>
              <View style={styles.badgeRow}>
                <View style={[styles.vegBadge, { borderColor: dish.veg ? '#2E7D32' : '#C62828' }]}>
                  <View
                    style={[
                      styles.vegDot,
                      { backgroundColor: dish.veg ? '#2E7D32' : '#C62828' }
                    ]}
                  />
                </View>
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryBadgeText}>{dish.category}</Text>
                </View>
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>★ {dish.popularityRating} ({dish.reviewsCount} reviews)</Text>
                </View>
              </View>

              <Text style={styles.foodTitle}>{dish.name}</Text>
              <TouchableOpacity
                onPress={() => router.push(`/state/${dish.stateId}` as any)}
                activeOpacity={0.8}
                style={styles.originTouchRow}
              >
                <Text style={styles.originSubtitle}>
                  📍 Origin: <Text style={styles.originCityHighlight}>{dish.cityName}</Text>, {dish.stateName} →
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        {/* Multi-Photo Gallery Thumbnail Switcher */}
        {gallery.length > 1 && (
          <View style={styles.galleryStripWrapper}>
            <View style={styles.galleryHeaderRow}>
              <Text style={styles.galleryStripTitle}>📸 Photo Gallery ({gallery.length} Angles)</Text>
              <Text style={styles.galleryCurrentLabel}>
                {PHOTO_LABELS[selectedPhotoIdx] || `Photo ${selectedPhotoIdx + 1}`}
              </Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.galleryThumbnailsRow}
            >
              {gallery.map((imgUri, index) => {
                const isSelected = selectedPhotoIdx === index;
                return (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.85}
                    onPress={() => setSelectedPhotoIdx(index)}
                    style={[
                      styles.thumbnailBtn,
                      isSelected && styles.thumbnailBtnActive
                    ]}
                  >
                    <Image source={imageSource(imgUri)} style={styles.thumbnailImg} />
                    <View style={styles.thumbLabelOverlay}>
                      <Text style={styles.thumbLabelText} numberOfLines={1}>
                        {PHOTO_LABELS[index]?.split(' ')[1] || `#${index + 1}`}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        )}

        {/* Quick Highlights Bar */}
        <View style={styles.highlightsBar}>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightEmoji}>💰</Text>
            <Text style={styles.highlightVal}>{dish.priceRange}</Text>
            <Text style={styles.highlightLbl}>Average Cost</Text>
          </View>
          <View style={styles.highlightDivider} />
          <View style={styles.highlightItem}>
            <Text style={styles.highlightEmoji}>⚡</Text>
            <Text style={styles.highlightVal}>{dish.calories}</Text>
            <Text style={styles.highlightLbl}>Energy Value</Text>
          </View>
          <View style={styles.highlightDivider} />
          <View style={styles.highlightItem}>
            <Text style={styles.highlightEmoji}>⏱️</Text>
            <Text style={styles.highlightVal}>{dish.prepTime}</Text>
            <Text style={styles.highlightLbl}>Cook Time</Text>
          </View>
        </View>

        {/* Spice Level Meter Section */}
        <View style={styles.spiceLevelCard}>
          <View style={styles.spiceHeaderRow}>
            <Text style={styles.cardHeaderTitle}>🌶️ Spice Meter Profile</Text>
            <Text style={styles.spiceLevelScore}>{dish.spiceLevel} / 5 Intensity</Text>
          </View>
          <SpiceMeter level={dish.spiceLevel} />
          <Text style={styles.spiceDesc}>
            {dish.spiceLevel === 0 && 'Mild, sweet and gentle — zero burning heat.'}
            {dish.spiceLevel === 1 && 'Subtle aromatic spices with delicate warming notes.'}
            {dish.spiceLevel === 2 && 'Pleasant balanced mild chili warmth.'}
            {dish.spiceLevel === 3 && 'Zesty Indian spice blend with noticeable warming punch.'}
            {dish.spiceLevel === 4 && 'Spicy and fiery — authentic regional chili level!'}
            {dish.spiceLevel === 5 && 'Extra fiery and explosive heat! Have cold lassi or sweet doi ready!'}
          </Text>
        </View>

        {/* Dish Overview & Description */}
        <View style={styles.contentCard}>
          <Text style={styles.cardHeaderTitle}>🍽️ Dish Overview</Text>
          <Text style={styles.bodyText}>{dish.description}</Text>
        </View>

        {/* Cultural Significance & Heritage */}
        <View style={styles.historyCard}>
          <Text style={styles.historyTitle}>📜 Cultural Significance & Heritage</Text>
          <Text style={styles.historyText}>{dish.culturalSignificance}</Text>
        </View>

        {/* Food Origin Story & Legend */}
        {dish.foodStory && (
          <View style={styles.storyCard}>
            <Text style={styles.storyTitle}>✨ Food Story & Origin Legend</Text>
            <Text style={styles.storyText}>{dish.foodStory}</Text>
          </View>
        )}

        {/* Key Ingredients Section */}
        <View style={styles.contentCard}>
          <Text style={styles.cardHeaderTitle}>
            🥗 Key Ingredients ({dish.ingredients.length})
          </Text>
          <View style={styles.ingredientsGrid}>
            {dish.ingredients.map((ing, idx) => (
              <View key={idx} style={styles.ingredientChip}>
                <Text style={styles.ingredientDot}>•</Text>
                <Text style={styles.ingredientText}>{ing}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Step-by-Step Traditional Preparation Recipe */}
        <View style={styles.contentCard}>
          <Text style={styles.cardHeaderTitle}>👨‍🍳 Authentic Step-by-Step Preparation</Text>
          <Text style={styles.recipeSteps}>{dish.preparationMethod}</Text>
        </View>

        {/* Nutritional Facts Grid */}
        <View style={styles.contentCard}>
          <Text style={styles.cardHeaderTitle}>🌱 Nutritional Information</Text>
          <View style={styles.nutritionRow}>
            <View style={styles.nutritionBox}>
              <Text style={styles.nutritionVal}>{dish.nutrition.carbs}</Text>
              <Text style={styles.nutritionLbl}>Carbohydrates</Text>
            </View>
            <View style={styles.nutritionBox}>
              <Text style={styles.nutritionVal}>{dish.nutrition.protein}</Text>
              <Text style={styles.nutritionLbl}>Protein</Text>
            </View>
            <View style={styles.nutritionBox}>
              <Text style={styles.nutritionVal}>{dish.nutrition.fat}</Text>
              <Text style={styles.nutritionLbl}>Fats</Text>
            </View>
            <View style={styles.nutritionBox}>
              <Text style={styles.nutritionVal}>{dish.nutrition.fiber}</Text>
              <Text style={styles.nutritionLbl}>Dietary Fiber</Text>
            </View>
          </View>
        </View>

        {/* User Reviews & Testimonials */}
        {dish.userReviews && dish.userReviews.length > 0 && (
          <View style={styles.reviewsCard}>
            <Text style={styles.cardHeaderTitle}>💬 Foodie Community Reviews</Text>
            {dish.userReviews.map((rev, idx) => (
              <View key={idx} style={styles.userReviewItem}>
                <View style={styles.reviewHeaderRow}>
                  <Text style={styles.reviewAuthor}>{rev.user}</Text>
                  <View style={styles.reviewRatingPill}>
                    <Text style={styles.reviewRatingPillText}>★ {rev.rating}.0</Text>
                  </View>
                </View>
                <Text style={styles.reviewComment}>&ldquo;{rev.comment}&rdquo;</Text>
                <Text style={styles.reviewDate}>{rev.date}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Authentic Eateries & Top Restaurants */}
        <View style={styles.restaurantsCard}>
          <Text style={styles.cardHeaderTitle}>🏛️ Where to Taste the Best {dish.name}</Text>
          {dish.topRestaurants.map((resto, idx) => (
            <TouchableOpacity
              key={idx}
              activeOpacity={0.85}
              style={styles.restoItem}
            >
              <View style={styles.restoHeader}>
                <Text style={styles.restoName}>{resto.name}</Text>
                <View style={styles.restoRatingBadge}>
                  <Text style={styles.restoRatingText}>★ {resto.rating}</Text>
                </View>
              </View>
              <Text style={styles.restoAddress}>📍 {resto.address}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* AI Guide Ask Assistant Action Card */}
        <TouchableOpacity
          activeOpacity={0.88}
          onPress={() => router.push('/ai-guide' as any)}
          style={styles.aiHelpCard}
        >
          <LinearGradient
            colors={['#E65100', '#D97706']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.aiHelpGradient}
          >
            <Text style={styles.aiHelpEmoji}>🤖</Text>
            <View style={styles.aiHelpContent}>
              <Text style={styles.aiHelpTitle}>Have questions about {dish.name}?</Text>
              <Text style={styles.aiHelpSub}>
                Ask Rasoi Mitra AI for secret cooking tips, spice substitutes, or wine pairings!
              </Text>
            </View>
            <Text style={styles.aiHelpArrow}>→</Text>
          </LinearGradient>
        </TouchableOpacity>
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
  topActionBtns: {
    flexDirection: 'row',
    gap: 8,
  },
  actionCircleBtn: {
    backgroundColor: 'rgba(15,23,42,0.75)',
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  actionBtnIcon: {
    fontSize: 16,
  },
  titleInfoBlock: {
    marginBottom: 4,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  vegBadge: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  vegDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  categoryBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  categoryBadgeText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
  },
  ratingBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '800',
  },
  foodTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FFF',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    marginBottom: 4,
  },
  originTouchRow: {
    alignSelf: 'flex-start',
  },
  originSubtitle: {
    fontSize: 13,
    color: '#CBD5E1',
    fontWeight: '600',
  },
  originCityHighlight: {
    color: '#FCD34D',
    fontWeight: '800',
  },
  galleryStripWrapper: {
    backgroundColor: '#1E293B',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  galleryHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  galleryStripTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#F8FAFC',
  },
  galleryCurrentLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#F59E0B',
  },
  galleryThumbnailsRow: {
    paddingHorizontal: 16,
    gap: 10,
  },
  thumbnailBtn: {
    width: 80,
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#334155',
    position: 'relative',
  },
  thumbnailBtnActive: {
    borderColor: '#F59E0B',
  },
  thumbnailImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  thumbLabelOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 2,
    alignItems: 'center',
  },
  thumbLabelText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '700',
  },
  highlightsBar: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  highlightItem: {
    alignItems: 'center',
  },
  highlightEmoji: {
    fontSize: 20,
    marginBottom: 2,
  },
  highlightVal: {
    fontSize: 13,
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
  spiceLevelCard: {
    backgroundColor: '#1E293B',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  spiceHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  spiceLevelScore: {
    fontSize: 12,
    fontWeight: '800',
    color: '#FB923C',
  },
  spiceDesc: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 10,
    fontStyle: 'italic',
  },
  contentCard: {
    backgroundColor: '#1E293B',
    marginHorizontal: 16,
    marginTop: 16,
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
  bodyText: {
    fontSize: 14,
    color: '#CBD5E1',
    lineHeight: 22,
  },
  historyCard: {
    backgroundColor: 'rgba(230,81,0,0.1)',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: 'rgba(230,81,0,0.3)',
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FB923C',
    marginBottom: 10,
  },
  historyText: {
    fontSize: 14,
    color: '#E2E8F0',
    lineHeight: 22,
  },
  storyCard: {
    backgroundColor: 'rgba(59,130,246,0.1)',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: 'rgba(59,130,246,0.3)',
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#60A5FA',
    marginBottom: 10,
  },
  storyText: {
    fontSize: 14,
    color: '#E2E8F0',
    lineHeight: 22,
  },
  ingredientsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  ingredientChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F172A',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  ingredientDot: {
    color: '#F59E0B',
    fontWeight: '900',
    marginRight: 6,
  },
  ingredientText: {
    fontSize: 13,
    color: '#E2E8F0',
    fontWeight: '600',
  },
  recipeSteps: {
    fontSize: 14,
    color: '#CBD5E1',
    lineHeight: 24,
  },
  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  nutritionBox: {
    flex: 1,
    backgroundColor: '#0F172A',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  nutritionVal: {
    fontSize: 14,
    fontWeight: '800',
    color: '#10B981',
    marginBottom: 2,
  },
  nutritionLbl: {
    fontSize: 10,
    color: '#94A3B8',
    textAlign: 'center',
  },
  reviewsCard: {
    backgroundColor: '#1E293B',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#334155',
  },
  userReviewItem: {
    backgroundColor: '#0F172A',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },
  reviewHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  reviewAuthor: {
    fontSize: 13,
    fontWeight: '800',
    color: '#F8FAFC',
  },
  reviewRatingPill: {
    backgroundColor: 'rgba(16,185,129,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#10B981',
  },
  reviewRatingPillText: {
    color: '#6EE7B7',
    fontSize: 11,
    fontWeight: '800',
  },
  reviewComment: {
    fontSize: 13,
    color: '#CBD5E1',
    fontStyle: 'italic',
    lineHeight: 18,
    marginBottom: 4,
  },
  reviewDate: {
    fontSize: 10,
    color: '#64748B',
  },
  restaurantsCard: {
    backgroundColor: '#1E293B',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#334155',
  },
  restoItem: {
    backgroundColor: '#0F172A',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
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
    fontSize: 14,
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
    fontSize: 11,
    fontWeight: '800',
  },
  restoAddress: {
    fontSize: 12,
    color: '#94A3B8',
  },
  aiHelpCard: {
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },
  aiHelpGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  aiHelpEmoji: {
    fontSize: 28,
  },
  aiHelpContent: {
    flex: 1,
  },
  aiHelpTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 2,
  },
  aiHelpSub: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 15,
  },
  aiHelpArrow: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: '900',
  },
});
