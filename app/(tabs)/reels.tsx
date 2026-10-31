import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { ReelPlayer } from '../../components/ReelPlayer';
import { ALL_REELS } from '../../data/localIndiaData';
import { useRouter } from 'expo-router';

const { height } = Dimensions.get('window');

export default function ReelsScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'trending' | 'following'>('trending');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Floating Header Bar */}
      <View style={styles.floatingHeader}>
        <View style={styles.headerTabs}>
          <TouchableOpacity onPress={() => setActiveTab('following')}>
            <Text
              style={[
                styles.headerTabText,
                activeTab === 'following' && styles.headerTabTextActive
              ]}
            >
              Following
            </Text>
          </TouchableOpacity>
          <Text style={styles.divider}>|</Text>
          <TouchableOpacity onPress={() => setActiveTab('trending')}>
            <Text
              style={[
                styles.headerTabText,
                activeTab === 'trending' && styles.headerTabTextActive
              ]}
            >
              Trending 🇮🇳
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.cameraIconBtn}
          onPress={() => alert('Food Reel Creator Studio: Ready to upload your food video!')}
        >
          <Text style={styles.cameraIcon}>📹</Text>
        </TouchableOpacity>
      </View>

      {/* Vertical Reels Feed */}
      <FlatList
        data={ALL_REELS}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height - 140}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={({ item }) => <ReelPlayer reel={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  floatingHeader: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    zIndex: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTabText: {
    color: '#9CA3AF',
    fontSize: 16,
    fontWeight: '700',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  headerTabTextActive: {
    color: '#FFFFFF',
    fontWeight: '900',
    borderBottomWidth: 2,
    borderBottomColor: '#E65100',
    paddingBottom: 2,
  },
  divider: {
    color: '#6B7280',
    fontSize: 14,
  },
  cameraIconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    fontSize: 18,
  },
});
