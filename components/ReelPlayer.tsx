import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FoodReel } from '../data/localIndiaData';
import { imageSource } from '../data/foodImages';
import { useFoodieStore } from '../store/useFoodieStore';
import { useRouter } from 'expo-router';

const { height, width } = Dimensions.get('window');

interface ReelPlayerProps {
  reel: FoodReel;
}

export const ReelPlayer: React.FC<ReelPlayerProps> = ({ reel }) => {
  const router = useRouter();
  const { isReelLiked, toggleLikeReel } = useFoodieStore();
  const liked = isReelLiked(reel.id);

  const [following, setFollowing] = useState(false);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [commentList, setCommentList] = useState([
    { id: '1', user: 'Chef Sanjeev Fans', text: 'That crispy tandoor layering is pure art! 🔥' },
    { id: '2', user: 'Priya Mukherjee', text: 'Bengal and Punjab food heritage are unmatched ❤️' },
    { id: '3', user: 'Rahul Verma', text: 'Adding this to my bucket list immediately! 😋' },
  ]);
  const [newComment, setNewComment] = useState('');
  const [bookmarked, setBookmarked] = useState(false);

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setCommentList([
      ...commentList,
      { id: Date.now().toString(), user: 'You (@aarav_foodie)', text: newComment.trim() }
    ]);
    setNewComment('');
  };

  return (
    <View style={styles.reelContainer}>
      {/* Background Visual */}
      <Image source={imageSource(reel.videoThumbnail)} style={styles.backgroundImage} />
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent', 'rgba(0,0,0,0.85)']}
        style={styles.gradientOverlay}
      />

      {/* Right Side Social Action Buttons */}
      <View style={styles.rightActionsColumn}>
        {/* Like Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => toggleLikeReel(reel.id)}
          style={styles.actionBtn}
        >
          <Text style={styles.actionIcon}>{liked ? '❤️' : '🤍'}</Text>
          <Text style={styles.actionLabel}>{liked ? 'Liked' : reel.likes}</Text>
        </TouchableOpacity>

        {/* Comments Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setCommentsVisible(true)}
          style={styles.actionBtn}
        >
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionLabel}>{commentList.length}</Text>
        </TouchableOpacity>

        {/* Bookmark Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setBookmarked(!bookmarked)}
          style={styles.actionBtn}
        >
          <Text style={styles.actionIcon}>{bookmarked ? '🔖' : '📑'}</Text>
          <Text style={styles.actionLabel}>{bookmarked ? 'Saved' : 'Save'}</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity activeOpacity={0.7} style={styles.actionBtn}>
          <Text style={styles.actionIcon}>↗️</Text>
          <Text style={styles.actionLabel}>{reel.shares}</Text>
        </TouchableOpacity>

        {/* Rotating Music Disc */}
        <View style={styles.musicDisc}>
          <Text style={styles.musicDiscIcon}>🎵</Text>
        </View>
      </View>

      {/* Bottom Creator & Description Info */}
      <View style={styles.bottomInfoContainer}>
        {/* Creator Profile Row */}
        <View style={styles.creatorRow}>
          <Image source={imageSource(reel.creator.avatar)} style={styles.creatorAvatar} />
          <View>
            <View style={styles.creatorNameRow}>
              <Text style={styles.creatorName}>{reel.creator.name}</Text>
              {reel.creator.verified && <Text style={styles.verifiedIcon}>✓</Text>}
            </View>
            <Text style={styles.creatorHandle}>{reel.creator.handle}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setFollowing(!following)}
            style={[styles.followBtn, following && styles.followBtnActive]}
          >
            <Text style={[styles.followBtnText, following && styles.followBtnTextActive]}>
              {following ? 'Following' : '+ Follow'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Reel Title & Description */}
        <Text style={styles.reelTitle}>{reel.title}</Text>
        <Text style={styles.reelDescription} numberOfLines={2}>
          {reel.description}
        </Text>

        {/* Tagged Dish & State Badge */}
        <View style={styles.taggedRow}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.dishTagPill}
            onPress={() => router.push(`/food/${reel.dishName.toLowerCase().replace(/\s+/g, '-')}` as any)}
          >
            <Text style={styles.dishTagText}>🍛 {reel.dishName}</Text>
          </TouchableOpacity>
          <View style={styles.locationPill}>
            <Text style={styles.locationText}>📍 {reel.city}, {reel.state}</Text>
          </View>
        </View>

        {/* Audio Track */}
        <View style={styles.audioTrackRow}>
          <Text style={styles.audioIcon}>🎵</Text>
          <Text style={styles.audioText} numberOfLines={1}>
            {reel.audioTrack}
          </Text>
        </View>
      </View>

      {/* Comments Drawer Modal */}
      <Modal
        visible={commentsVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setCommentsVisible(false)}
      >
        <View style={styles.commentBackdrop}>
          <SafeAreaView style={styles.commentSheet}>
            <View style={styles.commentHeader}>
              <Text style={styles.commentTitle}>Comments ({commentList.length})</Text>
              <TouchableOpacity onPress={() => setCommentsVisible(false)}>
                <Text style={styles.closeComment}>✕</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={commentList}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.commentItem}>
                  <Text style={styles.commentUser}>{item.user}</Text>
                  <Text style={styles.commentBody}>{item.text}</Text>
                </View>
              )}
            />

            <View style={styles.inputRow}>
              <TextInput
                style={styles.commentInput}
                placeholder="Add a delicious comment..."
                placeholderTextColor="#9CA3AF"
                value={newComment}
                onChangeText={setNewComment}
              />
              <TouchableOpacity
                onPress={handleAddComment}
                style={styles.sendCommentBtn}
              >
                <Text style={styles.sendCommentText}>Post</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  reelContainer: {
    width: width,
    height: height - 140,
    backgroundColor: '#000',
    position: 'relative',
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  rightActionsColumn: {
    position: 'absolute',
    right: 14,
    bottom: 90,
    alignItems: 'center',
    gap: 16,
    zIndex: 20,
  },
  actionBtn: {
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 26,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  actionLabel: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 2,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  musicDisc: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#1E293B',
    borderWidth: 2,
    borderColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  musicDiscIcon: {
    fontSize: 16,
  },
  bottomInfoContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    width: '82%',
  },
  creatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  creatorAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  creatorNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  creatorName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  verifiedIcon: {
    backgroundColor: '#0284C7',
    color: '#FFF',
    fontSize: 9,
    fontWeight: 'bold',
    paddingHorizontal: 3,
    borderRadius: 6,
  },
  creatorHandle: {
    color: '#D1D5DB',
    fontSize: 11,
  },
  followBtn: {
    backgroundColor: '#E65100',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 6,
  },
  followBtnActive: {
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  followBtnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  followBtnTextActive: {
    color: '#E5E7EB',
  },
  reelTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 4,
  },
  reelDescription: {
    color: '#E5E7EB',
    fontSize: 12,
    lineHeight: 17,
    marginBottom: 8,
  },
  taggedRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  dishTagPill: {
    backgroundColor: 'rgba(230, 81, 0, 0.85)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  dishTagText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  locationPill: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  locationText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  audioTrackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  audioIcon: {
    fontSize: 12,
  },
  audioText: {
    color: '#FDE68A',
    fontSize: 11,
    fontWeight: '600',
  },
  commentBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  commentSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    maxHeight: '65%',
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  commentTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1F2937',
  },
  closeComment: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9CA3AF',
  },
  commentItem: {
    marginBottom: 12,
    backgroundColor: '#F9FAFB',
    padding: 10,
    borderRadius: 10,
  },
  commentUser: {
    fontSize: 12,
    fontWeight: '700',
    color: '#E65100',
    marginBottom: 2,
  },
  commentBody: {
    fontSize: 13,
    color: '#374151',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 40,
    fontSize: 13,
  },
  sendCommentBtn: {
    backgroundColor: '#E65100',
    paddingHorizontal: 14,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendCommentText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
