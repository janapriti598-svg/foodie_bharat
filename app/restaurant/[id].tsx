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
import { FOOD_IMAGES } from '../../data/foodImages';

export default function RestaurantDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroBanner}>
          <Image
            source={FOOD_IMAGES['restaurant-interior']}
            style={styles.heroImage}
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'transparent', 'rgba(0,0,0,0.95)']}
            style={styles.heroGradient}
          >
            <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
              <Text style={styles.backBtnText}>← Back</Text>
            </TouchableOpacity>

            <View style={styles.titleWrap}>
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>★ 4.9 (Legendary Eatery)</Text>
              </View>
              <Text style={styles.resTitle}>Heritage Eatery & Kitchen</Text>
              <Text style={styles.resAddress}>📍 Heritage Street, City Center</Text>
            </View>
          </LinearGradient>
        </View>

        {/* Info Highlights */}
        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>🕒 Operating Hours & Timings</Text>
          <Text style={styles.infoCardText}>Daily: 11:00 AM – 11:30 PM</Text>
          <Text style={styles.infoCardText}>Average Cost: ₹400 for two</Text>
        </View>

        {/* Signature Dishes */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionHeading}>👑 Famous Signature Dishes</Text>
          <View style={styles.dishItem}>
            <View>
              <Text style={styles.dishName}>Special Dum Biryani</Text>
              <Text style={styles.dishPrice}>₹320 • Slow cooked on charcoal</Text>
            </View>
            <TouchableOpacity style={styles.orderBtn}>
              <Text style={styles.orderBtnText}>Order / Navigate</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dishItem}>
            <View>
              <Text style={styles.dishName}>Melt-in-mouth Kebabs</Text>
              <Text style={styles.dishPrice}>₹240 • 160 aromatic spices</Text>
            </View>
            <TouchableOpacity style={styles.orderBtn}>
              <Text style={styles.orderBtnText}>Order / Navigate</Text>
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
  scrollContent: {
    paddingBottom: 40,
  },
  heroBanner: {
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
    borderRadius: 12,
    marginTop: 10,
  },
  backBtnText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '700',
  },
  titleWrap: {
    marginBottom: 8,
  },
  ratingBadge: {
    backgroundColor: '#059669',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  ratingText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
  },
  resTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFF',
  },
  resAddress: {
    fontSize: 12,
    color: '#CBD5E1',
    marginTop: 2,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  infoCardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 6,
  },
  infoCardText: {
    fontSize: 13,
    color: '#4B5563',
    marginBottom: 4,
  },
  menuSection: {
    paddingHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 12,
  },
  dishItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  dishName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1F2937',
  },
  dishPrice: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  orderBtn: {
    backgroundColor: '#E65100',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  orderBtnText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
  },
});
