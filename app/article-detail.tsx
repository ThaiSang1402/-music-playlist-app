import { IconSymbol } from '@/components/ui/icon-symbol';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ArticleDetailScreen() {
  const params = useLocalSearchParams();
  const { title, author, date, category, image, readTime } = params;

  const getCategoryColor = (cat: string) => {
    const colors: { [key: string]: string } = {
      'Du lịch': '#FF6B6B',
      'Công nghệ': '#4ECDC4',
      'Sức khỏe': '#95E1D3',
      'Ẩm thực': '#FFD93D',
      'Thời trang': '#F38181',
    };
    return colors[cat as string] || '#999';
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <View style={styles.headerBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <IconSymbol name="chevron.left" size={28} color="#fff" />
        </TouchableOpacity>
        
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.actionButton}>
            <IconSymbol name="heart" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <IconSymbol name="square.and.arrow.up" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        <View style={styles.heroContainer}>
          <Image
            source={{ uri: image as string }}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay} />
        </View>
        
        <View style={styles.contentContainer}>
          <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(category as string) }]}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>

          <Text style={styles.title}>{title}</Text>

          <View style={styles.metaContainer}>
            <View style={styles.authorInfo}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{(author as string).charAt(0)}</Text>
              </View>
              <View>
                <Text style={styles.authorName}>{author}</Text>
                <Text style={styles.dateText}>{date}</Text>
              </View>
            </View>
            
            <View style={styles.readTimeContainer}>
              <IconSymbol name="clock.fill" size={18} color="#666" />
              <Text style={styles.readTimeText}>{readTime}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>📖 Nội dung bài viết</Text>
          
          <Text style={styles.paragraph}>
            Đây là một bài viết mẫu với nội dung chi tiết và hấp dẫn. Trong thời đại công nghệ số phát triển như vũ bão, việc cập nhật thông tin và kiến thức mới trở nên quan trọng hơn bao giờ hết.
          </Text>

          <Text style={styles.paragraph}>
            Chúng ta đang sống trong một thế giới đầy biến động, nơi mà mỗi ngày đều có những điều mới mẻ và thú vị xảy ra. Từ những phát minh khoa học đột phá đến những xu hướng văn hóa mới, tất cả đều góp phần tạo nên bức tranh đa dạng và phong phú của cuộc sống hiện đại.
          </Text>

          <View style={styles.highlightBox}>
            <IconSymbol name="lightbulb.fill" size={24} color="#FFD93D" />
            <Text style={styles.highlightText}>
              Học hỏi không bao giờ là quá muộn. Mỗi người chúng ta đều có thể phát triển bản thân thông qua việc tiếp thu kiến thức mới mỗi ngày.
            </Text>
          </View>

          <Text style={styles.paragraph}>
            Trong bối cảnh toàn cầu hóa, khả năng thích nghi và học hỏi nhanh chóng trở thành một trong những kỹ năng quan trọng nhất. Những người biết cách tận dụng cơ hội học tập sẽ có lợi thế lớn trong sự nghiệp và cuộc sống.
          </Text>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <IconSymbol name="eye.fill" size={20} color="#4ECDC4" />
              <Text style={styles.statNumber}>1.2K</Text>
              <Text style={styles.statLabel}>Lượt xem</Text>
            </View>
            <View style={styles.statBox}>
              <IconSymbol name="heart.fill" size={20} color="#FF6B6B" />
              <Text style={styles.statNumber}>328</Text>
              <Text style={styles.statLabel}>Yêu thích</Text>
            </View>
            <View style={styles.statBox}>
              <IconSymbol name="bubble.left.fill" size={20} color="#95E1D3" />
              <Text style={styles.statNumber}>45</Text>
              <Text style={styles.statLabel}>Bình luận</Text>
            </View>
          </View>

          <View style={styles.tagsContainer}>
            <Text style={styles.tagsTitle}>🏷️ Tags:</Text>
            <View style={styles.tagsRow}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>#TinTức</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>#ThịTrường</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>#CậpNhật</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  heroContainer: {
    height: 400,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  contentContainer: {
    padding: 24,
    backgroundColor: '#fff',
    marginTop: -40,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    marginBottom: 16,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    lineHeight: 42,
    marginBottom: 24,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4ECDC4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  authorName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  dateText: {
    fontSize: 14,
    color: '#999',
    marginTop: 2,
  },
  readTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
  },
  readTimeText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  divider: {
    height: 2,
    backgroundColor: '#f0f0f0',
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 30,
    color: '#333',
    marginBottom: 20,
  },
  highlightBox: {
    flexDirection: 'row',
    backgroundColor: '#FFF9E6',
    padding: 20,
    borderRadius: 16,
    marginVertical: 24,
    gap: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#FFD93D',
  },
  highlightText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 26,
    color: '#666',
    fontStyle: 'italic',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f8f9fa',
    padding: 24,
    borderRadius: 20,
    marginVertical: 28,
  },
  statBox: {
    alignItems: 'center',
    gap: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  statLabel: {
    fontSize: 13,
    color: '#666',
  },
  tagsContainer: {
    marginTop: 24,
    marginBottom: 32,
  },
  tagsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
  },
  tagText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
});
