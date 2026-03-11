import { IconSymbol } from '@/components/ui/icon-symbol';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailScreen() {
  const params = useLocalSearchParams();
  const message = params.message || 'Hello from Home!';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FF6B6B" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <IconSymbol name="arrow.left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <IconSymbol name="doc.text.fill" size={64} color="#FF6B6B" />
          </View>
          
          <Text style={styles.title}>Màn hình Chi tiết</Text>
          
          <View style={styles.messageContainer}>
            <Text style={styles.messageLabel}>Thông điệp từ Home:</Text>
            <View style={styles.messageBubble}>
              <IconSymbol name="quote.bubble.fill" size={20} color="#FF6B6B" />
              <Text style={styles.messageText}>{message}</Text>
            </View>
          </View>

          <View style={styles.infoBox}>
            <IconSymbol name="info.circle.fill" size={20} color="#4A90E2" />
            <Text style={styles.infoText}>
              Đây là màn hình chi tiết. Bạn đã điều hướng thành công từ màn hình chính!
            </Text>
          </View>

          <TouchableOpacity
            style={styles.backButtonLarge}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <IconSymbol name="arrow.left.circle.fill" size={24} color="#fff" />
            <Text style={styles.backButtonText}>QUAY LẠI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFE5E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
  },
  messageContainer: {
    width: '100%',
    marginBottom: 24,
  },
  messageLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  messageBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
    gap: 12,
  },
  messageText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#E8F4FF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    gap: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  backButtonLarge: {
    backgroundColor: '#FF6B6B',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
