import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PassportBadge } from '../../components/PassportBadge';
import { useFoodieStore } from '../../store/useFoodieStore';
import { JourneyStop } from '../../data/localIndiaData';

export default function JourneyScreen() {
  const {
    user,
    badges,
    journeyStops,
    unlockJourneyStop,
    t
  } = useFoodieStore();

  const unlockedCount = journeyStops.filter((s) => s.unlocked).length;
  const progressPercent = Math.round((unlockedCount / journeyStops.length) * 100);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Screen Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🧭 {t('foodPassport')}</Text>
        <Text style={styles.headerSubtitle}>
          Kashmir to Kanyakumari Culinary Expedition
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Passport Profile Card */}
        <View style={styles.passportCard}>
          <LinearGradient
            colors={['#1E293B', '#0F172A']}
            style={styles.passportCardGradient}
          >
            <View style={styles.passportTopRow}>
              <View style={styles.passportLogoBadge}>
                <Text style={styles.passportEmblem}>🏛️</Text>
              </View>
              <View style={styles.xpBadge}>
                <Text style={styles.xpText}>⚡ {user.xp} XP</Text>
              </View>
            </View>

            <Text style={styles.passportTitle}>REPUBLIC OF INDIA</Text>
            <Text style={styles.passportSub}>Official Bharat Food Passport</Text>

            <View style={styles.passportUserRow}>
              <View>
                <Text style={styles.labelTitle}>EXPLORER</Text>
                <Text style={styles.userNameText}>{user.name}</Text>
                <Text style={styles.userTitleText}>{user.explorerTitle}</Text>
              </View>
              <View style={styles.levelBox}>
                <Text style={styles.levelLabel}>RANK</Text>
                <Text style={styles.levelValue}>{user.level}</Text>
              </View>
            </View>

            {/* Progress Bar */}
            <View style={styles.progressBarWrapper}>
              <View style={styles.progressLabelRow}>
                <Text style={styles.progressLabel}>Expedition Progress</Text>
                <Text style={styles.progressPercentText}>
                  {unlockedCount} / {journeyStops.length} Stops ({progressPercent}%)
                </Text>
              </View>
              <View style={styles.progressBarTrack}>
                <View
                  style={[
                    styles.progressBarFill,
                    { width: `${progressPercent}%` }
                  ]}
                />
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Passport Badges Carousel */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>🏅 Passport Achievement Badges</Text>
          <Text style={styles.badgeCountText}>
            {badges.filter((b) => b.unlocked).length} / {badges.length} Unlocked
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.badgesScroll}
        >
          {badges.map((badge) => (
            <PassportBadge key={badge.id} badge={badge} />
          ))}
        </ScrollView>

        {/* Kashmir to Kanyakumari Trail Timeline */}
        <View style={styles.timelineSection}>
          <Text style={styles.sectionTitle}>🗺️ Kashmir to Kanyakumari Route</Text>
          <Text style={styles.timelineSubtitle}>
            Follow the ancient culinary spice highway from Himalayan peaks to Indian Ocean
          </Text>

          <View style={styles.timelineContainer}>
            {journeyStops.map((stop: JourneyStop, index: number) => {
              const isLast = index === journeyStops.length - 1;
              return (
                <View key={stop.id} style={styles.stopRow}>
                  {/* Left Timeline Indicator */}
                  <View style={styles.timelineIndicatorCol}>
                    <View
                      style={[
                        styles.indicatorDot,
                        stop.unlocked ? styles.indicatorUnlocked : styles.indicatorLocked
                      ]}
                    >
                      <Text style={styles.indicatorIcon}>
                        {stop.unlocked ? '✓' : index + 1}
                      </Text>
                    </View>
                    {!isLast && (
                      <View
                        style={[
                          styles.timelineLine,
                          stop.unlocked && styles.timelineLineActive
                        ]}
                      />
                    )}
                  </View>

                  {/* Right Content Card */}
                  <View
                    style={[
                      styles.stopCard,
                      stop.unlocked ? styles.stopCardUnlocked : styles.stopCardLocked
                    ]}
                  >
                    <View style={styles.stopCardHeader}>
                      <View style={styles.stopTitleCol}>
                        <Text style={styles.stopIcon}>{stop.icon}</Text>
                        <View>
                          <Text style={styles.stopTitle}>{stop.title}</Text>
                          <Text style={styles.stopLoc}>
                            📍 {stop.city}, {stop.state} ({stop.elevation})
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.specialtyBox}>
                      <Text style={styles.specialtyLabel}>Must Taste:</Text>
                      <Text style={styles.specialtyText}>{stop.specialty}</Text>
                    </View>

                    <Text style={styles.factText}>💡 {stop.fact}</Text>

                    <View style={styles.stopCardFooter}>
                      <View style={styles.rewardPill}>
                        <Text style={styles.rewardText}>🏆 Badge: {stop.badgeReward}</Text>
                      </View>
                      {!stop.unlocked && (
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => unlockJourneyStop(stop.id)}
                          style={styles.unlockBtn}
                        >
                          <Text style={styles.unlockBtnText}>Unlock (+250 XP)</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              );
            })}
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
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
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
  },
  scrollContent: {
    paddingBottom: 40,
  },
  passportCard: {
    margin: 16,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  passportCardGradient: {
    padding: 20,
  },
  passportTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  passportLogoBadge: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  passportEmblem: {
    fontSize: 20,
  },
  xpBadge: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
  },
  xpText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  passportTitle: {
    color: '#F59E0B',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
  },
  passportSub: {
    color: '#94A3B8',
    fontSize: 11,
    marginBottom: 16,
  },
  passportUserRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  labelTitle: {
    color: '#64748B',
    fontSize: 10,
    fontWeight: '700',
  },
  userNameText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  userTitleText: {
    color: '#CBD5E1',
    fontSize: 12,
    marginTop: 2,
  },
  levelBox: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  levelLabel: {
    color: '#FDE68A',
    fontSize: 9,
    fontWeight: '800',
  },
  levelValue: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  progressBarWrapper: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.15)',
    paddingTop: 12,
  },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    color: '#94A3B8',
    fontSize: 11,
  },
  progressPercentText: {
    color: '#F59E0B',
    fontSize: 11,
    fontWeight: '700',
  },
  progressBarTrack: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#F59E0B',
    borderRadius: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1F2937',
  },
  badgeCountText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
  },
  badgesScroll: {
    paddingHorizontal: 16,
    paddingBottom: 6,
  },
  timelineSection: {
    paddingHorizontal: 16,
    marginTop: 18,
  },
  timelineSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 16,
  },
  timelineContainer: {
    paddingLeft: 4,
  },
  stopRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timelineIndicatorCol: {
    alignItems: 'center',
    width: 32,
    marginRight: 10,
  },
  indicatorDot: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  indicatorUnlocked: {
    backgroundColor: '#059669',
  },
  indicatorLocked: {
    backgroundColor: '#9CA3AF',
  },
  indicatorIcon: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 4,
  },
  timelineLineActive: {
    backgroundColor: '#059669',
  },
  stopCard: {
    flex: 1,
    padding: 14,
    borderRadius: 18,
    borderWidth: 1,
  },
  stopCardUnlocked: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  stopCardLocked: {
    backgroundColor: '#F3F4F6',
    borderColor: '#E5E7EB',
    opacity: 0.85,
  },
  stopCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stopTitleCol: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  stopIcon: {
    fontSize: 22,
  },
  stopTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1F2937',
  },
  stopLoc: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 1,
  },
  specialtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 6,
    marginBottom: 8,
  },
  specialtyLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#B45309',
  },
  specialtyText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#92400E',
    flex: 1,
  },
  factText: {
    fontSize: 12,
    color: '#4B5563',
    lineHeight: 17,
    marginBottom: 10,
  },
  stopCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rewardPill: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  rewardText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#374151',
  },
  unlockBtn: {
    backgroundColor: '#E65100',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  unlockBtnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
});
