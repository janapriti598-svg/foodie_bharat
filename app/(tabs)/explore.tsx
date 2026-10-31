import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ALL_STATES_AND_UTS, StateInfo } from '../../data/localIndiaData';
import { imageSource } from '../../data/foodImages';
import { useFoodieStore } from '../../store/useFoodieStore';
import { useRouter } from 'expo-router';

export default function ExploreScreen() {
  const router = useRouter();
  const { t } = useFoodieStore();
  const [activeRegion, setActiveRegion] = useState('All');
  const [searchFilter, setSearchFilter] = useState('');

  const regions = ['All', 'North', 'South', 'East', 'West', 'Central', 'North-East', 'Islands'];

  const filteredStates = ALL_STATES_AND_UTS.filter((state) => {
    if (activeRegion !== 'All' && state.region.toLowerCase() !== activeRegion.toLowerCase()) {
      return false;
    }
    if (searchFilter.trim().length > 0) {
      const q = searchFilter.toLowerCase();
      const matchName = state.name.toLowerCase().includes(q);
      const matchCapital = state.capital.toLowerCase().includes(q);
      const matchDish = state.famousDishes.some((d) => d.toLowerCase().includes(q));
      const matchCity = state.cities.some((c) => c.name.toLowerCase().includes(q));
      if (!matchName && !matchCapital && !matchDish && !matchCity) return false;
    }
    return true;
  });

  // Collect all cities for City Explorer
  const allCities = ALL_STATES_AND_UTS.flatMap((st) =>
    st.cities.map((ct) => ({
      ...ct,
      stateName: st.name,
      stateId: st.id,
      stateColor: st.color,
      stateBanner: st.banner
    }))
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🇮🇳 {t('stateExplorer')}</Text>
        <Text style={styles.headerSubtitle}>
          All 28 States & 8 Union Territories of India
        </Text>

        {/* Local Search Input */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search state, city, capital, or food..."
            placeholderTextColor="#9CA3AF"
            value={searchFilter}
            onChangeText={setSearchFilter}
          />
          {searchFilter.length > 0 && (
            <TouchableOpacity onPress={() => setSearchFilter('')}>
              <Text style={styles.clearBtn}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Region Filter Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.regionTabs}
        >
          {regions.map((reg) => (
            <TouchableOpacity
              key={reg}
              activeOpacity={0.8}
              onPress={() => setActiveRegion(reg)}
              style={[
                styles.regionTab,
                activeRegion === reg && styles.regionTabActive
              ]}
            >
              <Text
                style={[
                  styles.regionTabText,
                  activeRegion === reg && styles.regionTabTextActive
                ]}
              >
                {reg}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* City Explorer Spotlight */}
        <View style={styles.citiesSection}>
          <Text style={styles.sectionHeading}>🏙️ Famous Food Cities</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cityCardsScroll}
          >
            {allCities.slice(0, 10).map((city) => (
              <TouchableOpacity
                key={`${city.stateId}-${city.id}`}
                activeOpacity={0.85}
                onPress={() => router.push(`/city/${city.id}` as any)}
                style={styles.cityCard}
              >
                <Image source={imageSource(city.stateBanner)} style={styles.cityImage} />
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.85)']}
                  style={styles.cityGradient}
                >
                  <Text style={styles.cityName}>{city.name}</Text>
                  <Text style={styles.cityState}>{city.stateName}</Text>
                  <View style={styles.cityDishPill}>
                    <Text style={styles.cityDishText}>🍛 {city.famousDish}</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* States & UTs Grid List */}
        <View style={styles.statesSection}>
          <Text style={styles.sectionHeading}>
            {activeRegion} India ({filteredStates.length} Regions)
          </Text>

          {filteredStates.map((state: StateInfo) => (
            <TouchableOpacity
              key={state.id}
              activeOpacity={0.9}
              onPress={() => router.push(`/state/${state.id}` as any)}
              style={styles.stateCard}
            >
              <Image source={imageSource(state.banner)} style={styles.stateImage} />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.95)']}
                style={styles.stateGradient}
              >
                {/* State Tag & Region */}
                <View style={styles.stateTopRow}>
                  <View style={styles.statePill}>
                    <Text style={styles.statePillText}>{state.type}</Text>
                  </View>
                  <View style={styles.stateRegionPill}>
                    <Text style={styles.stateRegionPillText}>{state.region}</Text>
                  </View>
                </View>

                {/* State Title & Info */}
                <Text style={styles.stateName}>{state.name}</Text>
                <Text style={styles.stateInfo}>
                  🏛️ {state.capital} • 🗣️ {state.language}
                </Text>
                <Text style={styles.stateCulture} numberOfLines={2}>
                  {state.culture}
                </Text>

                {/* Famous Dishes preview */}
                <View style={styles.stateDishesRow}>
                  {state.famousDishes.slice(0, 3).map((dish, i) => (
                    <View key={i} style={styles.dishTag}>
                      <Text style={styles.dishTagText}>✨ {dish}</Text>
                    </View>
                  ))}
                </View>

                {/* Footer Action */}
                <View style={styles.stateCardFooter}>
                  <Text style={styles.citiesCount}>
                    🏙️ {state.cities.length} Key Cities
                  </Text>
                  <Text style={styles.viewGuideText}>View Food Guide →</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
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
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#E65100',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 40,
    marginBottom: 10,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: '#1F2937',
  },
  clearBtn: {
    fontSize: 14,
    color: '#9CA3AF',
    padding: 4,
  },
  regionTabs: {
    gap: 8,
    paddingBottom: 4,
  },
  regionTab: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
  },
  regionTabActive: {
    backgroundColor: '#E65100',
  },
  regionTabText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4B5563',
  },
  regionTabTextActive: {
    color: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  citiesSection: {
    marginTop: 14,
    paddingLeft: 16,
  },
  sectionHeading: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 10,
  },
  cityCardsScroll: {
    gap: 12,
    paddingRight: 16,
  },
  cityCard: {
    width: 150,
    height: 180,
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#1E293B',
  },
  cityImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  cityGradient: {
    ...StyleSheet.absoluteFillObject,
    padding: 10,
    justifyContent: 'flex-end',
  },
  cityName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  cityState: {
    fontSize: 11,
    color: '#D1D5DB',
    marginBottom: 6,
  },
  cityDishPill: {
    backgroundColor: 'rgba(230, 81, 0, 0.85)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
  },
  cityDishText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  statesSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  stateCard: {
    height: 230,
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 16,
    position: 'relative',
    backgroundColor: '#0F172A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  stateImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  stateGradient: {
    ...StyleSheet.absoluteFillObject,
    padding: 16,
    justifyContent: 'space-between',
  },
  stateTopRow: {
    flexDirection: 'row',
    gap: 6,
  },
  statePill: {
    backgroundColor: '#E65100',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  statePillText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },
  stateRegionPill: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  stateRegionPillText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  stateName: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  stateInfo: {
    fontSize: 12,
    color: '#FDE68A',
    fontWeight: '600',
    marginTop: 2,
  },
  stateCulture: {
    fontSize: 12,
    color: '#E5E7EB',
    lineHeight: 17,
  },
  stateDishesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  dishTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dishTagText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  stateCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    paddingTop: 8,
  },
  citiesCount: {
    fontSize: 12,
    color: '#CBD5E1',
    fontWeight: '600',
  },
  viewGuideText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#F59E0B',
  },
});
