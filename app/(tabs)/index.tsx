import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Header } from '../../components/Header';
import { StoryBar } from '../../components/StoryBar';
import { IndiaMap } from '../../components/IndiaMap';
import { FoodCard } from '../../components/FoodCard';
import { FestivalBanner } from '../../components/FestivalBanner';
import {
  ALL_FEATURED_FOODS,
  ALL_CATEGORIES,
  ALL_FESTIVALS,
  ALL_OFFERS,
} from '../../data/localIndiaData';
import { useFoodieStore } from '../../store/useFoodieStore';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const {
    selectedCategory,
    setSelectedCategory,
    vegOnlyFilter,
    searchQuery,
    t
  } = useFoodieStore();

  // Filter foods by category, veg toggle, and search
  const filteredFoods = ALL_FEATURED_FOODS.filter((food) => {
    if (vegOnlyFilter && !food.veg) return false;
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'veg' && !food.veg) return false;
      if (selectedCategory === 'non-veg' && food.veg) return false;
      const catKey = selectedCategory.replace('-', ' ');
      if (!food.category.toLowerCase().includes(catKey)) return false;
    }
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      const matchName = food.name.toLowerCase().includes(q);
      const matchState = food.state.toLowerCase().includes(q);
      const matchCity = food.city.toLowerCase().includes(q);
      const matchIng = food.ingredients.some((i) => i.toLowerCase().includes(q));
      if (!matchName && !matchState && !matchCity && !matchIng) return false;
    }
    return true;
  });

  const streetFoods = filteredFoods.filter((f) => f.category === 'Street Food');

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Instagram-style Stories Bar */}
        <StoryBar />

        {/* 3D / 2.5D Interactive India Map */}
        <IndiaMap />

        {/* Quick Food Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>🍽️ Food Categories</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {ALL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                activeOpacity={0.8}
                onPress={() => setSelectedCategory(cat.id)}
                style={[
                  styles.categoryCard,
                  isSelected && styles.categoryCardSelected
                ]}
              >
                <Text style={styles.categoryIcon}>{cat.icon}</Text>
                <Text
                  style={[
                    styles.categoryText,
                    isSelected && styles.categoryTextSelected
                  ]}
                >
                  {cat.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Festival Showcase Banner */}
        {ALL_FESTIVALS.length > 0 && (
          <View style={styles.festivalSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>✨ {t('festivalSpecials')}</Text>
              <TouchableOpacity onPress={() => router.push('/festivals' as any)}>
                <Text style={styles.viewAllText}>{t('viewAll')} →</Text>
              </TouchableOpacity>
            </View>
            <FestivalBanner festival={ALL_FESTIVALS[0]} />
          </View>
        )}

        {/* Trending Delicacies */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>🔥 {t('trendingDishes')}</Text>
          <TouchableOpacity onPress={() => router.push('/explore')}>
            <Text style={styles.viewAllText}>{t('viewAll')} ({filteredFoods.length}) →</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.foodCardsScroll}
        >
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} layout="vertical" />
          ))}
        </ScrollView>

        {/* Special Offer Promotional Card */}
        {ALL_OFFERS.length > 0 && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => router.push('/offers' as any)}
            style={styles.offerCard}
          >
            <View style={styles.offerTag}>
              <Text style={styles.offerTagText}>🎉 {ALL_OFFERS[0].discount}</Text>
            </View>
            <Text style={styles.offerTitle}>{ALL_OFFERS[0].title}</Text>
            <Text style={styles.offerDesc}>{ALL_OFFERS[0].description}</Text>
            <View style={styles.couponRow}>
              <Text style={styles.couponCode}>Use Code: {ALL_OFFERS[0].code}</Text>
              <Text style={styles.claimText}>Claim Deal →</Text>
            </View>
          </TouchableOpacity>
        )}

        {/* Street Food Gems */}
        {streetFoods.length > 0 && (
          <View style={styles.streetFoodSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>🍢 {t('streetFoodGems')}</Text>
            </View>
            <View style={styles.verticalList}>
              {streetFoods.slice(0, 3).map((food) => (
                <FoodCard key={food.id} food={food} layout="horizontal" />
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
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 18,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1F2937',
  },
  viewAllText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#E65100',
  },
  categoryScroll: {
    paddingHorizontal: 16,
    gap: 10,
    paddingBottom: 4,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 6,
  },
  categoryCardSelected: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  categoryIcon: {
    fontSize: 16,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4B5563',
  },
  categoryTextSelected: {
    color: '#B45309',
  },
  festivalSection: {
    marginTop: 6,
  },
  foodCardsScroll: {
    paddingHorizontal: 16,
    paddingBottom: 4,
  },
  offerCard: {
    marginHorizontal: 16,
    marginTop: 18,
    backgroundColor: '#FFFBEB',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#FDE68A',
    borderStyle: 'dashed',
  },
  offerTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#E65100',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 6,
  },
  offerTagText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '800',
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#92400E',
    marginBottom: 4,
  },
  offerDesc: {
    fontSize: 12,
    color: '#B45309',
    lineHeight: 18,
    marginBottom: 10,
  },
  couponRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  couponCode: {
    fontSize: 12,
    fontWeight: '800',
    color: '#D97706',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  claimText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#E65100',
  },
  streetFoodSection: {
    marginTop: 6,
  },
  verticalList: {
    paddingHorizontal: 16,
  },
});
