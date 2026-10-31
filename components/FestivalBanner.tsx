import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FestivalFood } from '../data/localIndiaData';
import { imageSource } from '../data/foodImages';
import { useRouter } from 'expo-router';

interface FestivalBannerProps {
  festival: FestivalFood;
}

export const FestivalBanner: React.FC<FestivalBannerProps> = ({ festival }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.92}
      onPress={() => router.push('/festivals' as any)}
      style={styles.container}
    >
      <Image source={imageSource(festival.banner)} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.9)']}
        style={styles.gradient}
      >
        <View style={styles.tag}>
          <Text style={styles.tagText}>✨ {festival.season}</Text>
        </View>
        <Text style={styles.title}>{festival.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {festival.description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.dishesText}>
            🍛 {festival.keyDishes.slice(0, 3).join(' • ')}
          </Text>
          <View style={styles.exploreBtn}>
            <Text style={styles.exploreBtnText}>Explore Feasts →</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginVertical: 10,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 16,
  },
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: '#F59E0B',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 6,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#E5E7EB',
    lineHeight: 18,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dishesText: {
    fontSize: 12,
    color: '#FDE68A',
    fontWeight: '600',
    flex: 1,
  },
  exploreBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  exploreBtnText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
