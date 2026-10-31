import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useFoodieStore } from '../store/useFoodieStore';
import { SUPPORTED_LANGUAGES, LanguageMeta } from '../constants/i18n';
import { useRouter } from 'expo-router';

export const Header: React.FC = () => {
  const router = useRouter();
  const {
    language,
    setLanguage,
    searchQuery,
    setSearchQuery,
    vegOnlyFilter,
    setVegOnlyFilter,
    t
  } = useFoodieStore();

  const [langModalVisible, setLangModalVisible] = useState(false);

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  return (
    <View style={styles.headerContainer}>
      {/* Top Brand Row */}
      <View style={styles.topRow}>
        <View style={styles.brandContainer}>
          <Text style={styles.brandFlag}>🇮🇳</Text>
          <View>
            <Text style={styles.brandTitle}>{t('appTitle')}</Text>
            <Text style={styles.brandSubtitle}>{t('tagline')}</Text>
          </View>
        </View>

        <View style={styles.actionsRight}>
          {/* AI Guide Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push('/ai-guide' as any)}
            style={styles.aiButton}
          >
            <Text style={styles.aiButtonText}>🤖 Rasoi AI</Text>
          </TouchableOpacity>

          {/* Language Selector Trigger */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setLangModalVisible(true)}
            style={styles.langButton}
          >
            <Text style={styles.langButtonText}>
              {currentLang.flag} {currentLang.code.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search & Filter Bar */}
      <View style={styles.searchBarRow}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder={t('searchPlaceholder')}
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearSearch}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Veg Only Toggle */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setVegOnlyFilter(!vegOnlyFilter)}
          style={[styles.vegToggle, vegOnlyFilter && styles.vegToggleActive]}
        >
          <View
            style={[
              styles.vegDot,
              { backgroundColor: vegOnlyFilter ? '#2E7D32' : '#9CA3AF' }
            ]}
          />
          <Text
            style={[
              styles.vegToggleText,
              vegOnlyFilter && styles.vegToggleTextActive
            ]}
          >
            Veg
          </Text>
        </TouchableOpacity>
      </View>

      {/* Language Selection Modal */}
      <Modal
        visible={langModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setLangModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <SafeAreaView style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Choose Language / भाषा चुनें</Text>
              <TouchableOpacity onPress={() => setLangModalVisible(false)}>
                <Text style={styles.modalCloseText}>✕</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={SUPPORTED_LANGUAGES}
              keyExtractor={(item) => item.code}
              renderItem={({ item }: { item: LanguageMeta }) => {
                const isSelected = item.code === language;
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      setLanguage(item.code);
                      setLangModalVisible(false);
                    }}
                    style={[
                      styles.langOption,
                      isSelected && styles.langOptionSelected
                    ]}
                  >
                    <Text style={styles.langOptionFlag}>{item.flag}</Text>
                    <View style={styles.langOptionTextWrap}>
                      <Text style={styles.langOptionName}>{item.name}</Text>
                      <Text style={styles.langOptionNative}>{item.nativeName}</Text>
                    </View>
                    {isSelected && <Text style={styles.checkIcon}>✓</Text>}
                  </TouchableOpacity>
                );
              }}
            />
          </SafeAreaView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandFlag: {
    fontSize: 26,
  },
  brandTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#E65100',
    letterSpacing: -0.5,
  },
  brandSubtitle: {
    fontSize: 10,
    fontWeight: '600',
    color: '#6B7280',
  },
  actionsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  aiButton: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  aiButtonText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#B45309',
  },
  langButton: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  langButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#374151',
  },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 42,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: '#1F2937',
  },
  clearSearch: {
    fontSize: 14,
    color: '#9CA3AF',
    padding: 4,
  },
  vegToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 4,
  },
  vegToggleActive: {
    backgroundColor: '#ECFDF5',
    borderColor: '#10B981',
  },
  vegDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  vegToggleText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  vegToggleTextActive: {
    color: '#047857',
    fontWeight: '700',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1F2937',
  },
  modalCloseText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#9CA3AF',
    padding: 4,
  },
  langOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: '#F9FAFB',
  },
  langOptionSelected: {
    backgroundColor: '#FEF3C7',
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  langOptionFlag: {
    fontSize: 22,
    marginRight: 12,
  },
  langOptionTextWrap: {
    flex: 1,
  },
  langOptionName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
  },
  langOptionNative: {
    fontSize: 12,
    color: '#6B7280',
  },
  checkIcon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D97706',
  },
});
