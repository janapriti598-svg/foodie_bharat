import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, {
  Path,
  G,
  Circle,
  Defs,
  LinearGradient as SvgLinearGradient,
  Stop,
  Filter,
  FeDropShadow,
  Rect,
} from 'react-native-svg';
import { ALL_STATES_AND_UTS, StateInfo, DishPreview } from '../data/localIndiaData';
import { imageSource } from '../data/foodImages';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

interface IndiaMapProps {
  onSelectState?: (state: StateInfo) => void;
}

type Map3DMode = 'isometric' | 'flyover' | 'orbit' | 'flat';
type MapTheme = 'royal-gold' | 'midnight-cyber' | 'topo-satellite' | 'tiranga-glow';

export const IndiaMap: React.FC<IndiaMapProps> = ({ onSelectState }) => {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState<StateInfo>(
    ALL_STATES_AND_UTS.find((s) => s.id === 'west-bengal') || ALL_STATES_AND_UTS[0]
  );
  const [activeRegion, setActiveRegion] = useState<string>('All');
  const [viewMode, setViewMode] = useState<Map3DMode>('isometric');
  const [mapTheme, setMapTheme] = useState<MapTheme>('royal-gold');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showFoodPins, setShowFoodPins] = useState<boolean>(true);

  const regions = ['All', 'North', 'South', 'East', 'West', 'Central', 'North-East', 'Islands'];

  const filteredStates = ALL_STATES_AND_UTS.filter(
    (s) => activeRegion === 'All' || s.region.toLowerCase() === activeRegion.toLowerCase()
  );

  const handleStateClick = (state: StateInfo) => {
    setSelectedState(state);
    if (onSelectState) {
      onSelectState(state);
    }
  };

  // 3D Perspective Transformations based on View Mode
  const get3DTransform = () => {
    switch (viewMode) {
      case 'isometric':
        return [
          { perspective: 1200 },
          { rotateX: '24deg' },
          { rotateZ: '-4deg' },
          { scale: zoomLevel },
        ];
      case 'flyover':
        return [
          { perspective: 900 },
          { rotateX: '38deg' },
          { rotateY: '8deg' },
          { scale: zoomLevel * 1.05 },
        ];
      case 'orbit':
        return [
          { perspective: 1000 },
          { rotateX: '30deg' },
          { rotateY: '-14deg' },
          { rotateZ: '3deg' },
          { scale: zoomLevel },
        ];
      case 'flat':
      default:
        return [{ scale: zoomLevel }];
    }
  };

  // Map theme colors
  const getThemeBackgroundColors = (): [string, string, string] => {
    switch (mapTheme) {
      case 'midnight-cyber':
        return ['#050811', '#0B1120', '#020617'];
      case 'topo-satellite':
        return ['#06281D', '#0B3B2B', '#041B13'];
      case 'tiranga-glow':
        return ['#2A1406', '#141E18', '#071822'];
      case 'royal-gold':
      default:
        return ['#1C1309', '#2E1F0F', '#120B04'];
    }
  };

  return (
    <View style={styles.container}>
      {/* 3D Map Header Control Deck */}
      <View style={styles.headerDeck}>
        <View style={styles.titleWrap}>
          <Text style={styles.badgeLabel}>3D REAL BHARAT MAP</Text>
          <Text style={styles.titleMain}>Explore 36 States & Food Heritage 🇮🇳</Text>
        </View>

        {/* 3D Camera Angles & Controls */}
        <View style={styles.viewControlsRow}>
          <TouchableOpacity
            style={[styles.viewModeBtn, viewMode === 'isometric' && styles.viewModeBtnActive]}
            onPress={() => setViewMode('isometric')}
          >
            <Text style={[styles.viewModeText, viewMode === 'isometric' && styles.viewModeTextActive]}>
              📐 3D Iso
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewModeBtn, viewMode === 'flyover' && styles.viewModeBtnActive]}
            onPress={() => setViewMode('flyover')}
          >
            <Text style={[styles.viewModeText, viewMode === 'flyover' && styles.viewModeTextActive]}>
              🚁 Flyover
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewModeBtn, viewMode === 'orbit' && styles.viewModeBtnActive]}
            onPress={() => setViewMode('orbit')}
          >
            <Text style={[styles.viewModeText, viewMode === 'orbit' && styles.viewModeTextActive]}>
              🛰️ Orbit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewModeBtn, viewMode === 'flat' && styles.viewModeBtnActive]}
            onPress={() => setViewMode('flat')}
          >
            <Text style={[styles.viewModeText, viewMode === 'flat' && styles.viewModeTextActive]}>
              🗺️ 2D
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Theme Switcher & Food Pin Toggle */}
      <View style={styles.themeRow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.themePillsScroll}>
          <TouchableOpacity
            style={[styles.themePill, mapTheme === 'royal-gold' && styles.themePillActive]}
            onPress={() => setMapTheme('royal-gold')}
          >
            <Text style={styles.themePillText}>🌟 Royal Gold</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.themePill, mapTheme === 'midnight-cyber' && styles.themePillActive]}
            onPress={() => setMapTheme('midnight-cyber')}
          >
            <Text style={styles.themePillText}>🌌 Midnight Cyber</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.themePill, mapTheme === 'topo-satellite' && styles.themePillActive]}
            onPress={() => setMapTheme('topo-satellite')}
          >
            <Text style={styles.themePillText}>🌿 Topo Relief</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.themePill, mapTheme === 'tiranga-glow' && styles.themePillActive]}
            onPress={() => setMapTheme('tiranga-glow')}
          >
            <Text style={styles.themePillText}>🇮🇳 Tiranga Glow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.pinTogglePill, showFoodPins && styles.pinTogglePillActive]}
            onPress={() => setShowFoodPins(!showFoodPins)}
          >
            <Text style={styles.pinToggleText}>{showFoodPins ? '🥘 Pins: ON' : '📍 Pins: OFF'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Region Selector Pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.regionPillsContainer}
      >
        {regions.map((reg) => (
          <TouchableOpacity
            key={reg}
            activeOpacity={0.8}
            onPress={() => setActiveRegion(reg)}
            style={[
              styles.regionPill,
              activeRegion === reg && styles.activeRegionPill
            ]}
          >
            <Text
              style={[
                styles.regionPillText,
                activeRegion === reg && styles.activeRegionPillText
              ]}
            >
              {reg}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 3D Map Viewport Frame */}
      <View style={styles.map3DFrame}>
        <LinearGradient
          colors={getThemeBackgroundColors()}
          style={styles.canvasGradient}
        >
          {/* Compass & Altitude HUD */}
          <View style={styles.hudOverlay}>
            <View style={styles.compassBadge}>
              <Text style={styles.compassText}>🧭 3D PERSPECTIVE: {viewMode.toUpperCase()}</Text>
            </View>
            <View style={styles.zoomControls}>
              <TouchableOpacity
                style={styles.hudZoomBtn}
                onPress={() => setZoomLevel((z) => Math.min(z + 0.2, 1.6))}
              >
                <Text style={styles.hudZoomText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.hudZoomBtn}
                onPress={() => setZoomLevel((z) => Math.max(z - 0.2, 0.8))}
              >
                <Text style={styles.hudZoomText}>−</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 3D Transformed Layer */}
          <View style={[styles.map3DTransformContainer, { transform: get3DTransform() }]}>
            {/* Base SVG Geographic India Outline with Topographic Gradients */}
            <Svg viewBox="0 0 500 580" style={styles.svgMap}>
              <Defs>
                <SvgLinearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <Stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                  <Stop offset="50%" stopColor="#D97706" stopOpacity="0.6" />
                  <Stop offset="100%" stopColor="#78350F" stopOpacity="0.9" />
                </SvgLinearGradient>
                <SvgLinearGradient id="selectedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <Stop offset="0%" stopColor="#FFD700" stopOpacity="0.95" />
                  <Stop offset="100%" stopColor="#FF8C00" stopOpacity="0.9" />
                </SvgLinearGradient>
                <SvgLinearGradient id="cyberGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <Stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
                  <Stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
                </SvgLinearGradient>
              </Defs>

              {/* 3D Extrusion Shadow Layer */}
              <Path
                d="M 170 30 Q 210 10 240 30 Q 270 50 250 80 L 290 120 Q 320 130 360 140 L 440 150 Q 480 170 470 210 L 440 230 L 430 270 L 390 270 L 350 250 L 320 280 L 330 330 L 310 390 L 260 480 L 240 540 Q 235 550 230 540 L 210 490 L 160 390 L 140 320 L 120 280 L 90 240 L 110 190 L 130 140 L 160 80 Z"
                fill="rgba(0,0,0,0.5)"
                transform="translate(14, 18)"
              />

              {/* Authentic Geographic Silhouette of India */}
              <Path
                d="M 170 30 Q 210 10 240 30 Q 270 50 250 80 L 290 120 Q 320 130 360 140 L 440 150 Q 480 170 470 210 L 440 230 L 430 270 L 390 270 L 350 250 L 320 280 L 330 330 L 310 390 L 260 480 L 240 540 Q 235 550 230 540 L 210 490 L 160 390 L 140 320 L 120 280 L 90 240 L 110 190 L 130 140 L 160 80 Z"
                fill={mapTheme === 'midnight-cyber' ? 'url(#cyberGradient)' : 'url(#goldGradient)'}
                stroke="#FDE68A"
                strokeWidth="2.5"
                strokeOpacity="0.6"
              />

              {/* Regional Geographic Grid Lines */}
              <Path
                d="M 130 140 Q 250 160 360 140 M 110 190 Q 240 220 440 230 M 90 240 Q 230 260 390 270 M 120 280 Q 240 310 330 330 M 140 320 Q 240 360 310 390 M 160 390 Q 235 430 260 480"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />

              {/* Sri Lanka Reference Outline */}
              <Path
                d="M 270 540 Q 285 555 280 575 Q 265 580 260 565 Z"
                fill="rgba(255, 255, 255, 0.2)"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1"
              />
            </Svg>

            {/* Interactive 3D Hologram Pins on Map */}
            {filteredStates.map((st) => {
              const isSelected = selectedState.id === st.id;
              const primaryDish = st.dishesDetailed?.[0] || {
                name: st.famousDishes[0],
                image: st.banner,
                veg: true
              };

              return (
                <TouchableOpacity
                  key={st.id}
                  activeOpacity={0.8}
                  onPress={() => handleStateClick(st)}
                  style={[
                    styles.pin3DWrapper,
                    {
                      left: `${st.coordinates.x}%`,
                      top: `${st.coordinates.y}%`,
                      transform: [{ scale: isSelected ? 1.3 : 1 }],
                      zIndex: isSelected ? 99 : 15,
                    }
                  ]}
                >
                  {/* Glowing Pulse Ring for Selected State */}
                  {isSelected && <View style={styles.pulseRing} />}

                  {/* Pin Dot / 3D Food Beacon */}
                  <View
                    style={[
                      styles.pinBeacon,
                      { backgroundColor: st.color },
                      isSelected && styles.pinBeaconSelected
                    ]}
                  >
                    <Text style={styles.pinBeaconIcon}>
                      {st.type === 'UT' ? '🏛️' : '🍛'}
                    </Text>
                  </View>

                  {/* 3D Floating Mini Food Image Card on Pin */}
                  {showFoodPins && (
                    <View
                      style={[
                        styles.floatingFoodCard,
                        isSelected && styles.floatingFoodCardSelected
                      ]}
                    >
                      <Image
                        source={imageSource(primaryDish.image || st.banner)}
                        style={styles.floatingDishThumb}
                      />
                      <View style={styles.floatingDishInfo}>
                        <Text style={styles.floatingDishName} numberOfLines={1}>
                          {primaryDish.name}
                        </Text>
                        <Text style={styles.floatingStateName} numberOfLines={1}>
                          {st.name.split(' ')[0]}
                        </Text>
                      </View>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </LinearGradient>
      </View>

      {/* Selected State 3D Culinary Inspector & Photo Gallery Drawer */}
      {selectedState && (
        <View style={styles.drawerContainer}>
          <LinearGradient
            colors={['#1E293B', '#0F172A']}
            style={styles.drawerGradient}
          >
            {/* Drawer Header */}
            <View style={styles.drawerHeader}>
              <View style={styles.drawerStateInfo}>
                <View style={styles.drawerBadgeRow}>
                  <View style={styles.stateTypeBadge}>
                    <Text style={styles.stateTypeBadgeText}>{selectedState.type}</Text>
                  </View>
                  <View style={styles.elevationBadge}>
                    <Text style={styles.elevationText}>⛰️ {selectedState.elevation}</Text>
                  </View>
                  <View style={styles.regionBadge}>
                    <Text style={styles.regionText}>{selectedState.region} India</Text>
                  </View>
                </View>
                <Text style={styles.drawerStateTitle}>{selectedState.name}</Text>
                <Text style={styles.drawerSub}>
                  🏛️ Capital: {selectedState.capital} • 🗣️ {selectedState.language}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.flyGuideBtn}
                onPress={() => router.push(`/state/${selectedState.id}` as any)}
              >
                <Text style={styles.flyGuideBtnText}>Full Guide →</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.drawerDesc} numberOfLines={2}>
              {selectedState.description}
            </Text>

            {/* State Signature Dishes with Real Photos */}
            <View style={styles.foodGallerySection}>
              <Text style={styles.foodGalleryTitle}>
                🍛 Signature Foods of {selectedState.name} ({selectedState.dishesDetailed?.length || selectedState.famousDishes.length})
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.foodGalleryScroll}
              >
                {selectedState.dishesDetailed?.map((dish: DishPreview) => (
                  <TouchableOpacity
                    key={dish.id}
                    activeOpacity={0.88}
                    onPress={() => router.push(`/food/${dish.id}` as any)}
                    style={styles.dishMiniCard}
                  >
                    <Image source={imageSource(dish.image)} style={styles.dishMiniImage} />
                    <LinearGradient
                      colors={['transparent', 'rgba(0,0,0,0.85)']}
                      style={styles.dishMiniGradient}
                    >
                      <View style={styles.dishMiniTopRow}>
                        <View style={[styles.vegDotSmall, { backgroundColor: dish.veg ? '#2E7D32' : '#C62828' }]} />
                        <Text style={styles.dishPriceText}>{dish.price}</Text>
                      </View>
                      <Text style={styles.dishMiniName} numberOfLines={1}>
                        {dish.name}
                      </Text>
                      <Text style={styles.dishMiniRating}>★ {dish.rating}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Quick City Stalls Row */}
            <View style={styles.citiesRow}>
              <Text style={styles.citiesLabel}>🏙️ Key Food Hubs: </Text>
              {selectedState.cities.slice(0, 3).map((city, idx) => (
                <TouchableOpacity
                  key={city.id}
                  style={styles.cityPill}
                  onPress={() => router.push(`/city/${city.id}` as any)}
                >
                  <Text style={styles.cityPillText}>{city.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </LinearGradient>
        </View>
      )}

      {/* Quick State Grid Filter */}
      <View style={styles.stateGridWrapper}>
        <Text style={styles.stateGridTitle}>
          Tap any of {filteredStates.length} Regions on Map:
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.stateChipScroll}
        >
          {filteredStates.map((st) => {
            const isSelected = selectedState.id === st.id;
            return (
              <TouchableOpacity
                key={st.id}
                activeOpacity={0.8}
                onPress={() => handleStateClick(st)}
                style={[
                  styles.stateChip,
                  isSelected && styles.stateChipSelected
                ]}
              >
                <View style={[styles.stateChipDot, { backgroundColor: st.color }]} />
                <Text
                  style={[
                    styles.stateChipText,
                    isSelected && styles.stateChipTextSelected
                  ]}
                  numberOfLines={1}
                >
                  {st.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  headerDeck: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  titleWrap: {
    marginBottom: 8,
  },
  badgeLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#E65100',
    letterSpacing: 1.5,
  },
  titleMain: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1F2937',
  },
  viewControlsRow: {
    flexDirection: 'row',
    gap: 6,
  },
  viewModeBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  viewModeBtnActive: {
    backgroundColor: '#E65100',
    borderColor: '#E65100',
  },
  viewModeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4B5563',
  },
  viewModeTextActive: {
    color: '#FFFFFF',
  },
  themeRow: {
    marginBottom: 8,
  },
  themePillsScroll: {
    paddingHorizontal: 16,
    gap: 8,
  },
  themePill: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  themePillActive: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  themePillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#374151',
  },
  pinTogglePill: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  pinTogglePillActive: {
    backgroundColor: '#ECFDF5',
    borderColor: '#10B981',
  },
  pinToggleText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#047857',
  },
  regionPillsContainer: {
    paddingHorizontal: 16,
    gap: 6,
    marginBottom: 10,
  },
  regionPill: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
    backgroundColor: '#F3F4F6',
  },
  activeRegionPill: {
    backgroundColor: '#E65100',
  },
  regionPillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
  },
  activeRegionPillText: {
    color: '#FFFFFF',
  },
  map3DFrame: {
    marginHorizontal: 16,
    height: 380,
    borderRadius: 26,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#334155',
    position: 'relative',
    backgroundColor: '#0F172A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  canvasGradient: {
    flex: 1,
    position: 'relative',
  },
  hudOverlay: {
    position: 'absolute',
    top: 12,
    left: 14,
    right: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 80,
  },
  compassBadge: {
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  compassText: {
    color: '#FDE68A',
    fontSize: 10,
    fontWeight: '800',
  },
  zoomControls: {
    flexDirection: 'row',
    gap: 6,
  },
  hudZoomBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hudZoomText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  map3DTransformContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgMap: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  pin3DWrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pulseRing: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#FFD700',
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
  },
  pinBeacon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  pinBeaconSelected: {
    borderColor: '#FFD700',
    borderWidth: 3,
  },
  pinBeaconIcon: {
    fontSize: 12,
  },
  floatingFoodCard: {
    position: 'absolute',
    bottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.92)',
    borderRadius: 10,
    padding: 3,
    paddingRight: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    minWidth: 80,
    gap: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  floatingFoodCardSelected: {
    borderColor: '#F59E0B',
    backgroundColor: '#0F172A',
  },
  floatingDishThumb: {
    width: 22,
    height: 22,
    borderRadius: 6,
  },
  floatingDishInfo: {
    flex: 1,
  },
  floatingDishName: {
    fontSize: 9,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  floatingStateName: {
    fontSize: 8,
    color: '#FDE68A',
    fontWeight: '600',
  },
  drawerContainer: {
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#334155',
  },
  drawerGradient: {
    padding: 16,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  drawerStateInfo: {
    flex: 1,
  },
  drawerBadgeRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 4,
  },
  stateTypeBadge: {
    backgroundColor: '#E65100',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  stateTypeBadgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '800',
  },
  elevationBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  elevationText: {
    color: '#E2E8F0',
    fontSize: 10,
    fontWeight: '700',
  },
  regionBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  regionText: {
    color: '#E2E8F0',
    fontSize: 10,
    fontWeight: '700',
  },
  drawerStateTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
  },
  drawerSub: {
    color: '#FDE68A',
    fontSize: 12,
    marginTop: 2,
  },
  flyGuideBtn: {
    backgroundColor: '#E65100',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 12,
  },
  flyGuideBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  drawerDesc: {
    color: '#E2E8F0',
    fontSize: 12,
    lineHeight: 17,
    marginBottom: 12,
  },
  foodGallerySection: {
    marginBottom: 10,
  },
  foodGalleryTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#FDE68A',
    marginBottom: 8,
  },
  foodGalleryScroll: {
    gap: 10,
  },
  dishMiniCard: {
    width: 120,
    height: 120,
    borderRadius: 14,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  dishMiniImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  dishMiniGradient: {
    ...StyleSheet.absoluteFillObject,
    padding: 8,
    justifyContent: 'space-between',
  },
  dishMiniTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vegDotSmall: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  dishPriceText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFF',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  dishMiniName: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  dishMiniRating: {
    color: '#FDE68A',
    fontSize: 10,
    fontWeight: '700',
  },
  citiesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
    paddingTop: 8,
  },
  citiesLabel: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '600',
  },
  cityPill: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  cityPillText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  stateGridWrapper: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  stateGridTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4B5563',
    marginBottom: 6,
  },
  stateChipScroll: {
    gap: 8,
    paddingBottom: 4,
  },
  stateChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 5,
  },
  stateChipSelected: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  stateChipDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  stateChipText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#374151',
  },
  stateChipTextSelected: {
    color: '#B45309',
    fontWeight: '800',
  },
});
