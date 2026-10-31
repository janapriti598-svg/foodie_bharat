import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function AdminScreen() {
  const router = useRouter();

  const metrics = {
    totalUsers: '142,580',
    totalStates: '36',
    totalFoods: '5,120',
    totalReelsWatched: '2.45M',
    activeJourneys: '42,300',
    totalReviews: '89,430'
  };

  const topStates = [
    { name: 'West Bengal', visitors: '34,200', rating: 4.9, share: 88 },
    { name: 'Punjab', visitors: '31,800', rating: 4.88, share: 82 },
    { name: 'Telangana', visitors: '29,400', rating: 4.92, share: 78 },
    { name: 'Maharashtra', visitors: '28,900', rating: 4.85, share: 75 },
    { name: 'Rajasthan', visitors: '27,100', rating: 4.9, share: 72 },
  ];

  const categories = [
    { name: 'Street Food', percent: 38, color: '#E65100' },
    { name: 'Main Course', percent: 26, color: '#2563EB' },
    { name: 'Traditional Sweets', percent: 18, color: '#10B981' },
    { name: 'Regional Cuisine', percent: 12, color: '#8B5CF6' },
    { name: 'Tea & Chai Culture', percent: 6, color: '#F59E0B' },
  ];

  const userGrowth = [
    { month: 'Jan', height: 40, val: '65k' },
    { month: 'Feb', height: 55, val: '82k' },
    { month: 'Mar', height: 70, val: '104k' },
    { month: 'Apr', height: 85, val: '125k' },
    { month: 'May', height: 100, val: '142k' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>📊 Admin Analytics Portal</Text>
          <Text style={styles.headerSub}>Real-Time Bharat Culinary Telemetry</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Core Metrics Grid */}
        <View style={styles.metricsGrid}>
          <View style={styles.metricCard}>
            <Text style={styles.metricIcon}>👥</Text>
            <Text style={styles.metricVal}>{metrics.totalUsers}</Text>
            <Text style={styles.metricLbl}>Active Food Explorers</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricIcon}>🍛</Text>
            <Text style={styles.metricVal}>{metrics.totalFoods}</Text>
            <Text style={styles.metricLbl}>Registered Dishes</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricIcon}>🇮🇳</Text>
            <Text style={styles.metricVal}>{metrics.totalStates} / 36</Text>
            <Text style={styles.metricLbl}>States & UTs Covered</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricIcon}>🎬</Text>
            <Text style={styles.metricVal}>{metrics.totalReelsWatched}</Text>
            <Text style={styles.metricLbl}>Reel Views</Text>
          </View>
        </View>

        {/* User Growth Bar Chart */}
        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>📈 Monthly Explorer Growth (2026)</Text>
          <View style={styles.barChartRow}>
            {userGrowth.map((g, i) => (
              <View key={i} style={styles.barCol}>
                <Text style={styles.barValText}>{g.val}</Text>
                <View style={[styles.barPillar, { height: g.height }]} />
                <Text style={styles.barMonthText}>{g.month}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Popular Categories Distribution */}
        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>🍽️ Food Category Share</Text>
          {categories.map((cat, idx) => (
            <View key={idx} style={styles.catRow}>
              <View style={styles.catLabelRow}>
                <Text style={styles.catName}>{cat.name}</Text>
                <Text style={styles.catPercent}>{cat.percent}%</Text>
              </View>
              <View style={styles.catTrack}>
                <View
                  style={[
                    styles.catFill,
                    { width: `${cat.percent}%`, backgroundColor: cat.color }
                  ]}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Top Performing States */}
        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>🏆 Top Visited Food Regions</Text>
          {topStates.map((st, i) => (
            <View key={i} style={styles.topStateRow}>
              <View style={styles.rankBadge}>
                <Text style={styles.rankText}>#{i + 1}</Text>
              </View>
              <View style={styles.stateInfoCol}>
                <Text style={styles.topStateName}>{st.name}</Text>
                <Text style={styles.topStateVisitors}>{st.visitors} Explorers</Text>
              </View>
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>★ {st.rating}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Content Management Quick Tools */}
        <View style={styles.toolsCard}>
          <Text style={styles.chartTitle}>⚡ Quick Admin Actions</Text>
          <View style={styles.toolsGrid}>
            <TouchableOpacity
              style={styles.toolBtn}
              onPress={() => alert('New Dish Creator Form ready!')}
            >
              <Text style={styles.toolBtnText}>+ Add New Dish</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.toolBtn}
              onPress={() => alert('New Food Festival Creator ready!')}
            >
              <Text style={styles.toolBtnText}>+ Create Festival</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.toolBtn}
              onPress={() => alert('Syncing local caches with backend database!')}
            >
              <Text style={styles.toolBtnText}>🔄 Refresh Cache</Text>
            </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    gap: 12,
  },
  backBtn: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  backBtnText: {
    color: '#374151',
    fontSize: 13,
    fontWeight: '700',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#1E293B',
  },
  headerSub: {
    fontSize: 11,
    color: '#6B7280',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  metricCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  metricIcon: {
    fontSize: 22,
    marginBottom: 6,
  },
  metricVal: {
    fontSize: 20,
    fontWeight: '900',
    color: '#E65100',
    marginBottom: 2,
  },
  metricLbl: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  chartTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 14,
  },
  barChartRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 140,
    paddingTop: 20,
  },
  barCol: {
    alignItems: 'center',
    width: 44,
  },
  barValText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#6B7280',
    marginBottom: 4,
  },
  barPillar: {
    width: 24,
    backgroundColor: '#E65100',
    borderRadius: 6,
  },
  barMonthText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4B5563',
    marginTop: 6,
  },
  catRow: {
    marginBottom: 12,
  },
  catLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  catName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#374151',
  },
  catPercent: {
    fontSize: 12,
    fontWeight: '800',
    color: '#6B7280',
  },
  catTrack: {
    height: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    overflow: 'hidden',
  },
  catFill: {
    height: '100%',
    borderRadius: 4,
  },
  topStateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  rankBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  rankText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#B45309',
  },
  stateInfoCol: {
    flex: 1,
  },
  topStateName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1F2937',
  },
  topStateVisitors: {
    fontSize: 11,
    color: '#6B7280',
  },
  ratingBadge: {
    backgroundColor: '#059669',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  toolsCard: {
    backgroundColor: '#FFFBEB',
    padding: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  toolsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  toolBtn: {
    backgroundColor: '#E65100',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  toolBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
