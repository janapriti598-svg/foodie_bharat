import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PassportBadge as PassportBadgeType } from '../data/localIndiaData';

interface PassportBadgeProps {
  badge: PassportBadgeType;
  onPress?: () => void;
}

export const PassportBadge: React.FC<PassportBadgeProps> = ({ badge, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.card,
        badge.unlocked ? styles.cardUnlocked : styles.cardLocked
      ]}
    >
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: badge.unlocked ? badge.color : '#4B5563' }
        ]}
      >
        <Text style={styles.icon}>{badge.icon}</Text>
        {badge.unlocked && <View style={styles.glowDot} />}
      </View>
      <Text style={styles.badgeName} numberOfLines={1}>
        {badge.name}
      </Text>
      <Text style={styles.badgeState}>{badge.state}</Text>
      
      {badge.unlocked ? (
        <View style={styles.unlockedTag}>
          <Text style={styles.unlockedText}>✓ Unlocked</Text>
        </View>
      ) : (
        <View style={styles.lockedTag}>
          <Text style={styles.lockedText}>🔒 {badge.progress || 'Locked'}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 140,
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1.5,
  },
  cardUnlocked: {
    backgroundColor: '#FFFFFF',
    borderColor: '#F59E0B',
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  cardLocked: {
    backgroundColor: '#F3F4F6',
    borderColor: '#E5E7EB',
    opacity: 0.75,
  },
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  icon: {
    fontSize: 26,
  },
  glowDot: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#10B981',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  badgeName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 2,
  },
  badgeState: {
    fontSize: 11,
    color: '#6B7280',
    marginBottom: 8,
  },
  unlockedTag: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  unlockedText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#059669',
  },
  lockedTag: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  lockedText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#6B7280',
  },
});
