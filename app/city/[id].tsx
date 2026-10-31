import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ALL_STATES_AND_UTS, ALL_FEATURED_FOODS } from '../../data/localIndiaData';
import { imageSource } from '../../data/foodImages';
import { FoodCard } from '../../components/FoodCard';

export default function CityDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  // Find city across all states
  let cityInfo: any = null;
  let parentState: any = null;

  for (const st of ALL_STATES_AND_UTS) {
    const found = st.cities.find((c) => c.id === id || c.name.toLowerCase() === (id as string).toLowerCase());
    if (found) {
      cityInfo = found;
      parentState = st;
      break;
    }
  }

  if (!cityInfo) {
    cityInfo = ALL_STATES_AND_UTS[0].cities[0];
    parentState = ALL_STATES_AND_UTS[0];
  }

  // Foods associated with this city
  const cityFoods = ALL_FEATURED_FOODS.filter(
    (f) => f.city.toLowerCase() === cityInfo.name.toLowerCase()
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Hero Header */}
        <View style={styles.heroContainer}>
          <Image source={imageSource(parentState.banner)} style={styles.heroImage} />
          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'transparent', 'rgba(0,0,0,0.95)']}
            style={styles.heroGradient}
          >
            <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
              <Text style={styles.backBtnText}>← Back</Text>
            </TouchableOpacity>

            <View style={styles.heroTitleBlock}>
              <View style={styles.stateTag}>
                <Text style={styles.stateTagText}>📍 {parentState.name}</Text>
              </View>
              <Text style={styles.cityName}>{cityInfo.name}</Text>
              <Text style={styles.citySub}>
                Specialty: {cityInfo.famousDish}
              </Text>
            </View>
          </LinearGradient>
        </View>

        {/* Local Food History Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 Local Food History</Text>
          <Text style={styles.infoDesc}>{cityInfo.description}</Text>
          <View style={styles.heritageNote}>
            <Text style={styles.heritageText}>
              Famous for its bustling food streets, century-old sweet shops, and iconic signature delicacies.
            </Text>
          </View>
        </View>

        {/* Iconic Foods in City */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            🍛 Iconic Foods in {cityInfo.name} ({cityFoods.length > 0 ? cityFoods.length : 'Featured'})
          </Text>
          {cityFoods.length > 0 ? (
            cityFoods.map((food) => (
              <FoodCard key={food.id} food={food} layout="horizontal" />
            ))
          ) : (
            <View style={styles.featuredPlaceholderCard}>
              <Text style={styles.placeholderEmoji}>✨</Text>
              <Text style={styles.placeholderTitle}>{cityInfo.famousDish}</Text>
              <Text style={styles.placeholderSub}>
                The signature gastronomic pride of {cityInfo.name}. Available at authentic street stalls and heritage eateries across the city.
              </Text>
            </View>
          )}
        </View>

        {/* Popular Food Trails */}
        <View style={styles.foodTrailCard}>
          <Text style={styles.foodTrailTitle}>🚶‍♂️ Top Food Trails & Markets</Text>
          <View style={styles.trailItem}>
            <Text style={styles.trailEmoji}>🌅</Text>
            <View>
              <Text style={styles.trailName}>Morning Tiffin & Chai Walk</Text>
              <Text style={styles.trailDesc}>Fresh fried kachoris, lassi in clay kulhads, and sweet pedas.</Text>
            </View>
          </View>
          <View style={styles.trailItem}>
            <Text style={styles.trailEmoji}>🌙</Text>
            <View>
              <Text style={styles.trailName}>Midnight Street Food Bazaar</Text>
              <Text style={styles.trailDesc}>Sizzling tandoors, spicy chaat counters, and cold falooda.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroContainer: {
    height: 260,
    position: 'relative',
    backgroundColor: '#0F172A',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  heroGradient: {
    ...StyleSheet.absoluteFillObject,
    padding: 16,
    justifyContent: 'space-between',
  },
  backBtn: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    marginTop: 10,
  },
  backBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  heroTitleBlock: {
    marginBottom: 8,
  },
  stateTag: {
    backgroundColor: '#E65100',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  stateTagText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '800',
  },
  cityName: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  citySub: {
    fontSize: 13,
    color: '#FDE68A',
    fontWeight: '700',
    marginTop: 2,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 8,
  },
  infoDesc: {
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 20,
  },
  heritageNote: {
    marginTop: 10,
    backgroundColor: '#FEF3C7',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  heritageText: {
    fontSize: 12,
    color: '#92400E',
    fontWeight: '600',
    lineHeight: 17,
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 12,
  },
  placeholderEmoji: {
    fontSize: 28,
    marginBottom: 6,
  },
  featuredPlaceholderCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  placeholderTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#E65100',
    marginBottom: 6,
  },
  placeholderSub: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 18,
  },
  foodTrailCard: {
    backgroundColor: '#F3F4F6',
    margin: 16,
    padding: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  foodTrailTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 12,
  },
  trailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  trailEmoji: {
    fontSize: 24,
  },
  trailName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
  },
  trailDesc: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
  },
});
