import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView
} from 'react-native';
import { ALL_STATES_AND_UTS } from '../data/localIndiaData';
import { imageSource } from '../data/foodImages';
import { useRouter } from 'expo-router';

export const StoryBar: React.FC = () => {
  const router = useRouter();
  const [activeStory, setActiveStory] = useState<any | null>(null);

  const stories = ALL_STATES_AND_UTS.slice(0, 10).map((st) => ({
    id: st.id,
    name: st.name.split(' ')[0],
    fullName: st.name,
    image: st.banner,
    dish: st.famousDishes[0],
    description: st.description,
    culture: st.culture
  }));

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {stories.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.storyItem}
            activeOpacity={0.8}
            onPress={() => setActiveStory(item)}
          >
            <View style={styles.gradientRing}>
              <Image source={imageSource(item.image)} style={styles.avatar} />
            </View>
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Story Viewer Modal */}
      <Modal
        visible={!!activeStory}
        animationType="fade"
        transparent={false}
        onRequestClose={() => setActiveStory(null)}
      >
        {activeStory && (
          <SafeAreaView style={styles.modalContainer}>
            <Image source={imageSource(activeStory.image)} style={styles.modalBgImage} />
            <View style={styles.modalOverlay}>
              {/* Progress Bar Header */}
              <View style={styles.storyProgressRow}>
                <View style={styles.storyProgressBar} />
              </View>

              <View style={styles.storyHeader}>
                <View style={styles.storyHeaderLeft}>
                  <Image source={imageSource(activeStory.image)} style={styles.storyHeaderThumb} />
                  <View>
                    <Text style={styles.storyHeaderTitle}>{activeStory.fullName}</Text>
                    <Text style={styles.storyHeaderSub}>Culinary Highlights</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => setActiveStory(null)}
                  style={styles.closeBtn}
                >
                  <Text style={styles.closeBtnText}>✕</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.storyContent}>
                <View style={styles.storyBadge}>
                  <Text style={styles.storyBadgeText}>✨ Iconic Dish</Text>
                </View>
                <Text style={styles.storyDishTitle}>{activeStory.dish}</Text>
                <Text style={styles.storyDishDesc}>{activeStory.description}</Text>
                <Text style={styles.storyCultureText}>{activeStory.culture}</Text>

                <TouchableOpacity
                  style={styles.exploreStateBtn}
                  onPress={() => {
                    const id = activeStory.id;
                    setActiveStory(null);
                    router.push(`/state/${id}` as any);
                  }}
                >
                  <Text style={styles.exploreStateBtnText}>
                    Explore {activeStory.fullName} →
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 6,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 14,
  },
  storyItem: {
    alignItems: 'center',
    width: 68,
  },
  gradientRing: {
    width: 66,
    height: 66,
    borderRadius: 33,
    padding: 3,
    backgroundColor: '#E65100',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  name: {
    fontSize: 11,
    fontWeight: '600',
    color: '#374151',
    marginTop: 4,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  modalBgImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 50,
  },
  storyProgressRow: {
    width: '100%',
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
    marginBottom: 12,
  },
  storyProgressBar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F59E0B',
    borderRadius: 2,
  },
  storyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storyHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  storyHeaderThumb: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#F59E0B',
  },
  storyHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  storyHeaderSub: {
    color: '#D1D5DB',
    fontSize: 12,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  storyContent: {
    backgroundColor: 'rgba(20, 20, 25, 0.85)',
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  storyBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#F59E0B',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  storyBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  storyDishTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },
  storyDishDesc: {
    color: '#E5E7EB',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  storyCultureText: {
    color: '#9CA3AF',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  exploreStateBtn: {
    backgroundColor: '#E65100',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  exploreStateBtnText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
