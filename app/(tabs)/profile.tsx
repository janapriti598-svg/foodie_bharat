import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import { useFoodieStore } from '../../store/useFoodieStore';
import { ALL_FEATURED_FOODS, ALL_STATES_AND_UTS } from '../../data/localIndiaData';
import { imageSource } from '../../data/foodImages';
import { FoodCard } from '../../components/FoodCard';
import { SUPPORTED_LANGUAGES } from '../../constants/i18n';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  const {
    user,
    favorites,
    savedStates,
    language,
    setLanguage,
    isDarkMode,
    toggleDarkMode,
    t
  } = useFoodieStore();

  const [activeTab, setActiveTab] = useState<'saved' | 'states' | 'settings'>('saved');

  // Filter saved foods
  const savedFoodList = ALL_FEATURED_FOODS.filter((f) => favorites.includes(f.id));
  const savedStateList = ALL_STATES_AND_UTS.filter((s) => savedStates.includes(s.id));

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* User Hero Header */}
        <View style={styles.userHeader}>
          <Image source={imageSource(user.avatar)} style={styles.avatar} />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userHandle}>{user.handle}</Text>
          <View style={styles.titleBadge}>
            <Text style={styles.titleBadgeText}>{user.explorerTitle}</Text>
          </View>

          {/* Stats Bar */}
          <View style={styles.statsBar}>
            <View style={styles.statItem}>
              <Text style={styles.statVal}>{favorites.length}</Text>
              <Text style={styles.statLbl}>Saved Foods</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statVal}>{savedStates.length}</Text>
              <Text style={styles.statLbl}>States Saved</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statVal}>{user.xp}</Text>
              <Text style={styles.statLbl}>Food XP</Text>
            </View>
          </View>
        </View>

        {/* Tab Navigation */}
        <View style={styles.tabNavRow}>
          <TouchableOpacity
            style={[styles.tabNavBtn, activeTab === 'saved' && styles.tabNavBtnActive]}
            onPress={() => setActiveTab('saved')}
          >
            <Text
              style={[
                styles.tabNavText,
                activeTab === 'saved' && styles.tabNavTextActive
              ]}
            >
              ❤️ Saved Foods ({savedFoodList.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabNavBtn, activeTab === 'states' && styles.tabNavBtnActive]}
            onPress={() => setActiveTab('states')}
          >
            <Text
              style={[
                styles.tabNavText,
                activeTab === 'states' && styles.tabNavTextActive
              ]}
            >
              📍 States ({savedStateList.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabNavBtn, activeTab === 'settings' && styles.tabNavBtnActive]}
            onPress={() => setActiveTab('settings')}
          >
            <Text
              style={[
                styles.tabNavText,
                activeTab === 'settings' && styles.tabNavTextActive
              ]}
            >
              ⚙️ Settings
            </Text>
          </TouchableOpacity>
        </View>

        {/* TAB 1: SAVED FOODS */}
        {activeTab === 'saved' && (
          <View style={styles.tabContent}>
            {savedFoodList.length === 0 ? (
              <View style={styles.emptyState}>
                <Text style={styles.emptyEmoji}>🍽️</Text>
                <Text style={styles.emptyTitle}>No saved foods yet</Text>
                <Text style={styles.emptySubtitle}>
                  Tap the heart icon on any dish to save it here for quick access!
                </Text>
              </View>
            ) : (
              savedFoodList.map((food) => (
                <FoodCard key={food.id} food={food} layout="horizontal" />
              ))
            )}
          </View>
        )}

        {/* TAB 2: SAVED STATES */}
        {activeTab === 'states' && (
          <View style={styles.tabContent}>
            {savedStateList.map((state) => (
              <TouchableOpacity
                key={state.id}
                activeOpacity={0.85}
                onPress={() => router.push(`/state/${state.id}` as any)}
                style={styles.stateListItem}
              >
                <Image source={imageSource(state.banner)} style={styles.stateListThumb} />
                <View style={styles.stateListInfo}>
                  <Text style={styles.stateListName}>{state.name}</Text>
                  <Text style={styles.stateListSub}>
                    🏛️ {state.capital} • {state.famousDishes.length} Famous Dishes
                  </Text>
                </View>
                <Text style={styles.arrowIcon}>→</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* TAB 3: SETTINGS & ADMIN DASHBOARD */}
        {activeTab === 'settings' && (
          <View style={styles.tabContent}>
            {/* Language Switcher Setting */}
            <View style={styles.settingsSection}>
              <Text style={styles.settingsSectionTitle}>🌐 Language Preference</Text>
              <View style={styles.langGrid}>
                {SUPPORTED_LANGUAGES.map((lang) => {
                  const isSelected = lang.code === language;
                  return (
                    <TouchableOpacity
                      key={lang.code}
                      activeOpacity={0.7}
                      onPress={() => setLanguage(lang.code)}
                      style={[
                        styles.langPill,
                        isSelected && styles.langPillSelected
                      ]}
                    >
                      <Text style={styles.langFlag}>{lang.flag}</Text>
                      <Text
                        style={[
                          styles.langName,
                          isSelected && styles.langNameSelected
                        ]}
                      >
                        {lang.nativeName}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Dark Mode Toggle */}
            <View style={styles.settingRow}>
              <View>
                <Text style={styles.settingLabel}>🌙 Dark Obsidian Mode</Text>
                <Text style={styles.settingSub}>Switch between light & midnight theme</Text>
              </View>
              <Switch
                value={isDarkMode}
                onValueChange={toggleDarkMode}
                trackColor={{ false: '#D1D5DB', true: '#E65100' }}
              />
            </View>

            {/* Admin Analytics Portal Link */}
            <TouchableOpacity
              activeOpacity={0.88}
              onPress={() => router.push('/admin' as any)}
              style={styles.adminPortalBtn}
            >
              <View style={styles.adminPortalIconWrap}>
                <Text style={styles.adminPortalEmoji}>📊</Text>
              </View>
              <View style={styles.adminPortalInfo}>
                <Text style={styles.adminPortalTitle}>Admin & Analytics Dashboard</Text>
                <Text style={styles.adminPortalSub}>
                  View real-time user metrics, trending states, and culinary queries
                </Text>
              </View>
              <Text style={styles.adminPortalArrow}>→</Text>
            </TouchableOpacity>

            {/* App Version Info */}
            <View style={styles.versionInfo}>
              <Text style={styles.versionText}>Foodie Bharat v1.0.0 (Expo SDK 54)</Text>
              <Text style={styles.copyrightText}>
                Crafted with ❤️ for Indian Food Lovers across the World 🇮🇳
              </Text>
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
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  userHeader: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#F59E0B',
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1F2937',
  },
  userHandle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  titleBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  titleBadgeText: {
    color: '#B45309',
    fontSize: 11,
    fontWeight: '700',
  },
  statsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 18,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  statItem: {
    alignItems: 'center',
  },
  statVal: {
    fontSize: 18,
    fontWeight: '800',
    color: '#E65100',
  },
  statLbl: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#E5E7EB',
  },
  tabNavRow: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tabNavBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabNavBtnActive: {
    borderBottomColor: '#E65100',
  },
  tabNavText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6B7280',
  },
  tabNavTextActive: {
    color: '#E65100',
  },
  tabContent: {
    padding: 16,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1F2937',
  },
  emptySubtitle: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
    paddingHorizontal: 30,
  },
  stateListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  stateListThumb: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 12,
  },
  stateListInfo: {
    flex: 1,
  },
  stateListName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1F2937',
  },
  stateListSub: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
  },
  arrowIcon: {
    fontSize: 16,
    color: '#9CA3AF',
    fontWeight: 'bold',
  },
  settingsSection: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  settingsSectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 12,
  },
  langGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  langPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    gap: 6,
  },
  langPillSelected: {
    backgroundColor: '#FEF3C7',
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  langFlag: {
    fontSize: 14,
  },
  langName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4B5563',
  },
  langNameSelected: {
    color: '#B45309',
    fontWeight: '800',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  settingLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
  },
  settingSub: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
  },
  adminPortalBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F172A',
    padding: 16,
    borderRadius: 18,
    marginBottom: 14,
    gap: 12,
  },
  adminPortalIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adminPortalEmoji: {
    fontSize: 18,
  },
  adminPortalInfo: {
    flex: 1,
  },
  adminPortalTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  adminPortalSub: {
    color: '#94A3B8',
    fontSize: 11,
    marginTop: 2,
  },
  adminPortalArrow: {
    color: '#F59E0B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  versionInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  versionText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9CA3AF',
  },
  copyrightText: {
    fontSize: 10,
    color: '#9CA3AF',
    marginTop: 4,
    textAlign: 'center',
  },
});
