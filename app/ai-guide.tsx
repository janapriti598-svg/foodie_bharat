import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  suggestedDishes?: string[];
  tip?: string;
}

export default function AIGuideScreen() {
  const router = useRouter();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Namaskar! I am your AI Bharat Rasoi Mitra 🤖🍛. I can guide you through authentic dishes across all 28 States and 8 Union Territories of India, suggest hidden street food gems, explain historical recipes, and find perfect food pairings.',
      suggestedDishes: ['Kolkata Mutton Biryani', 'Hyderabadi Dum Biryani', 'Amritsari Stuffed Kulcha', 'Mysore Butter Masala Dosa'],
      tip: 'Try tapping any quick question below or ask me about any Indian city or taste preference!'
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);

  const quickPrompts = [
    'Best food in Kolkata 🐅',
    'Royal foods in Rajasthan 👑',
    'Fiery spicy food in India 🔥',
    'Authentic South Indian tiffin 🥞',
    'Top Punjabi dhaba delicacies 🧈',
    'Best sweets in Odisha & Bengal 🍨'
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query.trim()
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setLoading(true);

    // AI Culinary Engine Logic
    setTimeout(() => {
      const q = query.toLowerCase();
      let reply = '';
      let dishes: string[] = [];
      let culinaryTip = '';

      if (q.includes('kolkata') || q.includes('bengal') || q.includes('sweet') || q.includes('mishti')) {
        reply = 'Namaskar! West Bengal is India’s sweet and culinary paradise. You must savor the iconic Kolkata Mutton Biryani (with its melt-in-mouth spiced potato and saffron aroma), pair it with Shorshe Ilish (fresh Hilsa in pungent mustard gravy), and finish with warm spongy Rosogolla or baked Mishti Doi!';
        dishes = ['Kolkata Mutton Biryani', 'Rosogolla', 'Mishti Doi', 'Shorshe Ilish'];
        culinaryTip = 'Pro Tip: Ask for a glass of Gondhoraj Ghol or pair Sunday morning luchi with sweet Cholar Dal!';
      } else if (q.includes('rajasthan') || q.includes('jaipur') || q.includes('royal')) {
        reply = 'Khamma Ghani! Rajasthan’s royal kitchens invented bold desert flavours. Try the authentic Dal Baati Churma soaked in aromatic desi ghee, the fiery warrior curry Laal Maas prepared with Mathania chillies, and crisp Pyaaz Kachori!';
        dishes = ['Rajasthani Dal Baati Churma', 'Laal Maas', 'Ghewar', 'Pyaaz Kachori'];
        culinaryTip = 'Pro Tip: Pair fiery Laal Maas with sweet Ghewar topped with thick Rabdi!';
      } else if (q.includes('spicy') || q.includes('fiery') || q.includes('hot') || q.includes('mirchi')) {
        reply = 'Seeking a fiery spice adrenaline kick? India’s ultimate spice legends are: Nagaland’s Bhut Jolokia Smoked Pork with Axone, Andhra Pradesh’s fiery Guntur Chilli Chicken, and Maharashtra’s fiery Kolhapuri Tambda Rassa!';
        dishes = ['Guntur Chilli Chicken', 'Kolhapuri Tambda Rassa', 'Smoked Pork with Axone'];
        culinaryTip = 'Pro Tip: Keep a bowl of cool Cucumber Raita or sweet Rasmalai nearby!';
      } else if (q.includes('south') || q.includes('dosa') || q.includes('tiffin') || q.includes('chennai') || q.includes('bangalore')) {
        reply = 'Vanakkam & Namaskara! South India serves the world’s most comforting breakfast. Treat yourself to a crisp Mysore Butter Masala Dosa smeared with fiery red garlic chutney, soft steaming Mallige Idlis with 4 chutneys, and piping hot brass-tumbler Filter Kaapi!';
        dishes = ['Mysore Butter Masala Dosa', 'Ven Pongal', 'Chettinad Chicken', 'Filter Kaapi'];
        culinaryTip = 'Pro Tip: Enjoy your dosa fresh and sizzling hot off the cast-iron tawa with fresh coconut chutney!';
      } else if (q.includes('punjab') || q.includes('delhi') || q.includes('dhaba') || q.includes('butter chicken')) {
        reply = 'Balle Balle! Punjab and Delhi serve generous comfort food. Nothing beats authentic Amritsari Kulcha with melting white butter and pindi chole, accompanied by rich Dal Makhani and a tall clay kulhad of sweet Malai Lassi!';
        dishes = ['Amritsari Stuffed Kulcha & Chole', 'Butter Chicken', 'Dal Makhani', 'Makki Di Roti'];
        culinaryTip = 'Pro Tip: Ask for extra homemade white butter (safed makhan) on your hot tandoori kulcha!';
      } else {
        reply = `Greetings from Bharat Rasoi AI! India has over 36 distinct culinary cultures across its 28 states and 8 union territories. From the saffron-infused Wazwans of Kashmir to the coconut curries of Kerala, each region has centuries of storytelling through spices. Tell me your preferred taste (spicy, sweet, vegetarian, royal, street food) or a specific city!`;
        dishes = ['Kolkata Mutton Biryani', 'Hyderabadi Dum Biryani', 'Amritsari Stuffed Kulcha', 'Mysore Butter Masala Dosa'];
        culinaryTip = 'Ask me: "What is the history of Hyderabadi Biryani?" or "Top 5 foods in Kerala!"';
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply,
        suggestedDishes: dishes,
        tip: culinaryTip
      };

      setMessages((prev) => [...prev, aiMsg]);
      setLoading(false);
    }, 700);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.closeBtn}>
          <Text style={styles.closeBtnText}>✕ Close</Text>
        </TouchableOpacity>
        <View style={styles.headerTitleWrap}>
          <Text style={styles.headerTitle}>🤖 Bharat Rasoi AI</Text>
          <Text style={styles.headerSub}>Your Personal Indian Food Sommelier</Text>
        </View>
      </View>

      {/* Messages Scroll View */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.messagesScroll}
      >
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageBubble,
              msg.sender === 'user' ? styles.userBubble : styles.aiBubble
            ]}
          >
            {msg.sender === 'ai' && (
              <View style={styles.aiSenderBadge}>
                <Text style={styles.aiSenderBadgeText}>🤖 Rasoi AI</Text>
              </View>
            )}
            <Text
              style={[
                styles.messageText,
                msg.sender === 'user' ? styles.userMessageText : styles.aiMessageText
              ]}
            >
              {msg.text}
            </Text>

            {/* Suggested Dishes Buttons */}
            {msg.suggestedDishes && msg.suggestedDishes.length > 0 && (
              <View style={styles.dishesWrap}>
                <Text style={styles.dishHeaderTitle}>✨ Recommended Delicacies:</Text>
                <View style={styles.dishesPillsRow}>
                  {msg.suggestedDishes.map((dish, i) => (
                    <TouchableOpacity
                      key={i}
                      activeOpacity={0.8}
                      onPress={() => router.push(`/food/${dish.toLowerCase().replace(/\s+/g, '-')}` as any)}
                      style={styles.dishPill}
                    >
                      <Text style={styles.dishPillText}>🍛 {dish}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {/* Pro Tip Box */}
            {msg.tip && (
              <View style={styles.tipBox}>
                <Text style={styles.tipText}>💡 {msg.tip}</Text>
              </View>
            )}
          </View>
        ))}

        {loading && (
          <View style={[styles.messageBubble, styles.aiBubble, styles.loadingBubble]}>
            <ActivityIndicator size="small" color="#E65100" />
            <Text style={styles.loadingText}>Simmering flavors of India...</Text>
          </View>
        )}
      </ScrollView>

      {/* Quick Prompt Chips */}
      <View style={styles.quickPromptsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.promptsScroll}>
          {quickPrompts.map((prompt, idx) => (
            <TouchableOpacity
              key={idx}
              activeOpacity={0.8}
              onPress={() => handleSend(prompt)}
              style={styles.promptChip}
            >
              <Text style={styles.promptChipText}>{prompt}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Input Bar */}
      <View style={styles.inputBar}>
        <TextInput
          style={styles.textInput}
          placeholder="Ask about any dish, state, spice, recipe..."
          placeholderTextColor="#9CA3AF"
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={() => handleSend()}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleSend()}
          style={styles.sendBtn}
        >
          <Text style={styles.sendBtnText}>➤</Text>
        </TouchableOpacity>
      </View>
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
  closeBtn: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 12,
  },
  closeBtnText: {
    color: '#374151',
    fontSize: 12,
    fontWeight: '700',
  },
  headerTitleWrap: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#E65100',
  },
  headerSub: {
    fontSize: 11,
    color: '#6B7280',
  },
  messagesScroll: {
    padding: 16,
    paddingBottom: 20,
  },
  messageBubble: {
    padding: 14,
    borderRadius: 18,
    marginBottom: 12,
    maxWidth: '88%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#E65100',
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  aiSenderBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 6,
  },
  aiSenderBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#B45309',
  },
  messageText: {
    fontSize: 14,
    lineHeight: 21,
  },
  userMessageText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  aiMessageText: {
    color: '#1F2937',
  },
  dishesWrap: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 8,
  },
  dishHeaderTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#E65100',
    marginBottom: 6,
  },
  dishesPillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  dishPill: {
    backgroundColor: '#FFF7ED',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FED7AA',
  },
  dishPillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#C2410C',
  },
  tipBox: {
    marginTop: 10,
    backgroundColor: '#ECFDF5',
    padding: 8,
    borderRadius: 10,
  },
  tipText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#047857',
  },
  loadingBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  loadingText: {
    fontSize: 12,
    color: '#6B7280',
    fontStyle: 'italic',
  },
  quickPromptsContainer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingVertical: 8,
  },
  promptsScroll: {
    paddingHorizontal: 16,
    gap: 8,
  },
  promptChip: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  promptChipText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    gap: 8,
  },
  textInput: {
    flex: 1,
    height: 44,
    backgroundColor: '#F3F4F6',
    borderRadius: 14,
    paddingHorizontal: 14,
    fontSize: 13,
    color: '#1F2937',
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E65100',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
