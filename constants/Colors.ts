/**
 * Foodie Bharat Color System
 * Vibrant, premium Indian culinary palette: Saffron, Cardamom, Turmeric, Royal Gold, Terracotta, and Midnight Navy.
 */

export const Colors = {
  light: {
    primary: '#E65100', // Royal Saffron Deep
    primaryLight: '#FF9800',
    primaryDark: '#BF360C',
    secondary: '#00897B', // Cardamom Green
    accent: '#D81B60', // Gulab Jamun Magenta
    gold: '#FFB300', // Haldi Gold
    background: '#FFFDF9', // Warm Basmati White
    surface: '#FFFFFF',
    surfaceSubtle: '#F9F6F0',
    border: '#E8E1D5',
    text: '#1E1E1E',
    textSecondary: '#666666',
    textMuted: '#9E9E9E',
    tint: '#E65100',
    tabIconDefault: '#8D7B68',
    tabIconSelected: '#E65100',
    vegGreen: '#2E7D32',
    nonVegRed: '#C62828',
    cardShadow: 'rgba(0,0,0,0.08)',
    overlay: 'rgba(0,0,0,0.4)',
    glassBackground: 'rgba(255, 255, 255, 0.85)',
  },
  dark: {
    primary: '#FF8A65', // Glowing Terracotta Saffron
    primaryLight: '#FFA726',
    primaryDark: '#E65100',
    secondary: '#26A69A', // Vibrant Cardamom Green
    accent: '#F06292',
    gold: '#FFD54F',
    background: '#0F1216', // Midnight Obsidian
    surface: '#1A1F26',
    surfaceSubtle: '#242B35',
    border: '#2E3846',
    text: '#F5F5F7',
    textSecondary: '#A1AAB7',
    textMuted: '#6B7280',
    tint: '#FF8A65',
    tabIconDefault: '#6B7280',
    tabIconSelected: '#FF8A65',
    vegGreen: '#4CAF50',
    nonVegRed: '#EF5350',
    cardShadow: 'rgba(0,0,0,0.4)',
    overlay: 'rgba(0,0,0,0.7)',
    glassBackground: 'rgba(26, 31, 38, 0.85)',
  },
};

export type ThemeColors = typeof Colors.light;
