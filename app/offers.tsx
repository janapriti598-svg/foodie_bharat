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
import { ALL_OFFERS, OfferDeal } from '../data/localIndiaData';
import { imageSource } from '../data/foodImages';
import { useRouter } from 'expo-router';

export default function OffersScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🎁 Special Offers & Food Passes</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroPromoBanner}>
          <Text style={styles.heroPromoBadge}>🔥 LIMITED TIME DEALS</Text>
          <Text style={styles.heroPromoTitle}>Bharat Food Festival Passes</Text>
          <Text style={styles.heroPromoSub}>
            Enjoy exclusive discounts and complimentary delicacies at 500+ heritage restaurants across India.
          </Text>
        </View>

        {ALL_OFFERS.map((offer: OfferDeal) => (
          <View key={offer.id} style={styles.offerCard}>
            <Image source={imageSource(offer.image)} style={styles.offerImage} />
            <View style={styles.offerContent}>
              <View style={styles.offerTopRow}>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{offer.discount}</Text>
                </View>
                <Text style={styles.validTillText}>Valid till: {offer.validTill}</Text>
              </View>

              <Text style={styles.offerTitle}>{offer.title}</Text>
              <Text style={styles.offerDesc}>{offer.description}</Text>

              {/* Coupon Box */}
              <View style={styles.couponContainer}>
                <View style={styles.codeWrap}>
                  <Text style={styles.codeLabel}>PROMO CODE</Text>
                  <Text style={styles.codeValue}>{offer.code}</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => alert(`Coupon ${offer.code} copied! Apply at checkout.`)}
                  style={styles.copyBtn}
                >
                  <Text style={styles.copyBtnText}>Copy Code</Text>
                </TouchableOpacity>
              </View>
            </View>
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
  heroPromoBanner: {
    backgroundColor: '#E65100',
    padding: 20,
    borderRadius: 22,
    marginBottom: 16,
  },
  heroPromoBadge: {
    color: '#FDE68A',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
  },
  heroPromoTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 6,
  },
  heroPromoSub: {
    color: '#FFCCBC',
    fontSize: 12,
    lineHeight: 18,
  },
  offerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  offerImage: {
    width: '100%',
    height: 150,
  },
  offerContent: {
    padding: 16,
  },
  offerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  discountBadge: {
    backgroundColor: '#059669',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  validTillText: {
    fontSize: 11,
    color: '#6B7280',
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 4,
  },
  offerDesc: {
    fontSize: 12,
    color: '#4B5563',
    lineHeight: 18,
    marginBottom: 12,
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFBEB',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FDE68A',
    borderStyle: 'dashed',
  },
  codeWrap: {
    paddingLeft: 4,
  },
  codeLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: '#B45309',
  },
  codeValue: {
    fontSize: 15,
    fontWeight: '900',
    color: '#92400E',
    letterSpacing: 1,
  },
  copyBtn: {
    backgroundColor: '#E65100',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  copyBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
