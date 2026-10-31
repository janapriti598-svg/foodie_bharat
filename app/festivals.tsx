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
import { ALL_FESTIVALS, FestivalFood } from '../data/localIndiaData';
import { imageSource } from '../data/foodImages';
import { useRouter } from 'expo-router';

export default function FestivalsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>✨ Indian Festive Food Feasts</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.introCard}>
          <Text style={styles.introEmoji}>🪔</Text>
          <Text style={styles.introTitle}>Celebrations of Flavors Across India</Text>
          <Text style={styles.introDesc}>
            In India, every festival is defined by sacred recipes, communal feasts, and joyous sweet exchanges passed down through generations.
          </Text>
        </View>

        {ALL_FESTIVALS.map((fest: FestivalFood) => (
          <View key={fest.id} style={styles.festCard}>
            <Image source={imageSource(fest.banner)} style={styles.festBanner} />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.95)']}
              style={styles.festGradient}
            >
              <View style={styles.seasonTag}>
                <Text style={styles.seasonText}>🗓️ {fest.season}</Text>
              </View>
              <Text style={styles.festName}>{fest.name}</Text>
              <Text style={styles.festDesc}>{fest.description}</Text>

              {/* Key Dishes */}
              <View style={styles.dishesBox}>
                <Text style={styles.dishesTitle}>🍛 Signature Festive Delicacies:</Text>
                <View style={styles.dishesRow}>
                  {fest.keyDishes.map((dish: string, i: number) => (
                    <View key={i} style={styles.dishBadge}>
                      <Text style={styles.dishBadgeText}>✨ {dish}</Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* Celebrating States */}
              <View style={styles.statesRow}>
                <Text style={styles.statesLabel}>Celebrated primarily in: </Text>
                <Text style={styles.statesValue}>{fest.states.join(', ')}</Text>
              </View>
            </LinearGradient>
          </View>
        ))}
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
  },
  backBtn: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 12,
  },
  backBtnText: {
    color: '#374151',
    fontSize: 13,
    fontWeight: '700',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#E65100',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  introCard: {
    backgroundColor: '#FEF3C7',
    padding: 18,
    borderRadius: 20,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  introEmoji: {
    fontSize: 32,
    marginBottom: 6,
  },
  introTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#92400E',
    marginBottom: 6,
    textAlign: 'center',
  },
  introDesc: {
    fontSize: 12,
    color: '#B45309',
    textAlign: 'center',
    lineHeight: 18,
  },
  festCard: {
    height: 340,
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 18,
    position: 'relative',
    backgroundColor: '#0F172A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  festBanner: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  festGradient: {
    ...StyleSheet.absoluteFillObject,
    padding: 18,
    justifyContent: 'flex-end',
  },
  seasonTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#F59E0B',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 6,
  },
  seasonText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '800',
  },
  festName: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 6,
  },
  festDesc: {
    color: '#E5E7EB',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  dishesBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 10,
    borderRadius: 14,
    marginBottom: 8,
  },
  dishesTitle: {
    color: '#FDE68A',
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 6,
  },
  dishesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  dishBadge: {
    backgroundColor: 'rgba(230, 81, 0, 0.85)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  dishBadgeText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
  },
  statesRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statesLabel: {
    color: '#D1D5DB',
    fontSize: 11,
    fontWeight: '600',
  },
  statesValue: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
});
