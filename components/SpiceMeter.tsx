import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SpiceMeterProps {
  level: number; // 0 to 5
  showLabel?: boolean;
}

export const SpiceMeter: React.FC<SpiceMeterProps> = ({ level, showLabel = true }) => {
  const getSpiceDescriptor = (lvl: number) => {
    switch (lvl) {
      case 0:
        return 'Sweet / Mild';
      case 1:
        return 'Mild Spice';
      case 2:
        return 'Medium Spice';
      case 3:
        return 'Spicy';
      case 4:
        return 'Very Spicy 🔥';
      case 5:
        return 'Fiery Ghost Chili 🌶️🔥';
      default:
        return 'Spicy';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.chilisContainer}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Text
            key={item}
            style={[
              styles.chiliText,
              { opacity: item <= level ? 1 : 0.25 }
            ]}
          >
            🌶️
          </Text>
        ))}
      </View>
      {showLabel && (
        <Text style={[styles.descriptor, level >= 4 ? styles.extraHot : styles.regular]}>
          {getSpiceDescriptor(level)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  chilisContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  chiliText: {
    fontSize: 13,
  },
  descriptor: {
    fontSize: 12,
    fontWeight: '600',
  },
  regular: {
    color: '#D97706',
  },
  extraHot: {
    color: '#DC2626',
    fontWeight: '700',
  },
});
