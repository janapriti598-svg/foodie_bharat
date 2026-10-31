import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FoodItem } from '../data/localIndiaData';
import { imageSource } from '../data/foodImages';
import { useFoodieStore } from '../store/useFoodieStore';
import { SpiceMeter } from './SpiceMeter';
import { useRouter } from 'expo-router';

interface FoodCardProps {
  food: FoodItem;
  layout?: 'horizontal' | 'vertical';
}

export const FoodCard: React.FC<FoodCardProps> = ({ food, layout = 'vertical' }) => {
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFoodieStore();
  const favorite = isFavorite(food.id);

  const isHorizontal = layout === 'horizontal';

  return (
    <TouchableOpacity
      activeOpacity={0.88}
      onPress={() => router.push(`/food/${food.id}` as any)}
      style={[styles.card, isHorizontal ? styles.cardHorizontal : styles.cardVertical]}
    >
      {/* Food Image Container */}
      <View style={isHorizontal ? styles.imageContainerHorizontal : styles.imageContainerVertical}>
        <Image source={imageSource(food.image)} style={styles.image} />
        <LinearGradient
          colors={['rgba(0,0,0,0.4)', 'transparent', 'rgba(0,0,0,0.6)']}
          style={styles.gradient}
        />

        {/* Top Badges */}
        <View style={styles.topBadgesRow}>
          <View style={[styles.vegBadge, { borderColor: food.veg ? '#2E7D32' : '#C62828' }]}>
            <View
              style={[
                styles.vegDot,
                { backgroundColor: food.veg ? '#2E7D32' : '#C62828' }
              ]}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => toggleFavorite(food.id)}
            style={styles.heartBtn}
          >
            <Text style={styles.heartIcon}>{favorite ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Image Info */}
        <View style={styles.imageBottomInfo}>
          <Text style={styles.caloriesTag}>⚡ {food.calories}</Text>
          <Text style={styles.prepTimeTag}>⏱️ {food.prepTime}</Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <View style={styles.ratingRow}>
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>★ {food.rating}</Text>
          </View>
          <Text style={styles.reviewsText}>({food.reviewsCount})</Text>
          <View style={styles.priceBadge}>
            <Text style={styles.priceText}>{food.priceRange}</Text>
          </View>
        </View>

        <Text style={styles.title} numberOfLines={1}>
          {food.name}
        </Text>

        <Text style={styles.originText} numberOfLines={1}>
          📍 {food.city}, {food.state}
        </Text>

        <View style={styles.spiceRow}>
          <SpiceMeter level={food.spiceLevel} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  cardVertical: {
    width: 230,
    marginRight: 14,
    marginBottom: 6,
  },
  cardHorizontal: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 14,
    height: 140,
  },
  imageContainerVertical: {
    width: '100%',
    height: 150,
    position: 'relative',
  },
  imageContainerHorizontal: {
    width: 140,
    height: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  topBadgesRow: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vegBadge: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vegDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  heartBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    fontSize: 16,
  },
  imageBottomInfo: {
    position: 'absolute',
    bottom: 8,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  caloriesTag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  prepTimeTag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  content: {
    padding: 12,
    flex: 1,
    justifyContent: 'space-between',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  ratingBadge: {
    backgroundColor: '#059669',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  reviewsText: {
    fontSize: 11,
    color: '#6B7280',
  },
  priceBadge: {
    marginLeft: 'auto',
  },
  priceText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#E65100',
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 2,
  },
  originText: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 6,
  },
  spiceRow: {
    marginTop: 2,
  },
});
