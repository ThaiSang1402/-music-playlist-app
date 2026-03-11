import { IconSymbol } from '@/components/ui/icon-symbol';
import { songsData } from '@/data/songsData';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AlbumImage from '../../components/AlbumImage';

const recentPlaylists = [
  { id: 1, title: 'Nhạc Việt Hay Nhất', color: ['#8B5CF6', '#3B82F6'] },
  { id: 2, title: 'Chill Vibes', color: ['#10B981', '#06B6D4'] },
  { id: 3, title: 'Top Hits', color: ['#EF4444', '#F97316'] },
  { id: 4, title: 'Acoustic', color: ['#F59E0B', '#EF4444'] },
];

const madeForYou = [
  { id: 1, title: 'Daily Mix 1', subtitle: 'Trí Hải, Chu Bin và nhiều hơn nữa', color: ['#8B5CF6', '#1e40af'] },
  { id: 2, title: 'Discover Weekly', subtitle: 'Khám phá nhạc mới cho bạn', color: ['#059669', '#0891b2'] },
  { id: 3, title: 'Release Radar', subtitle: 'Nhạc mới từ các nghệ sĩ bạn theo dõi', color: ['#dc2626', '#ea580c'] },
];

export default function HomeScreen() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Chào buổi sáng';
    if (hour < 18) return 'Chào buổi chiều';
    return 'Chào buổi tối';
  };

  return (
    <LinearGradient
      colors={['#1e3a8a', '#1f2937', '#000000']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
        
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>{getGreeting()}</Text>
              <Text style={styles.username}>Sang Thai</Text>
            </View>
            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.headerButton}>
                <IconSymbol name="bell" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton}>
                <IconSymbol name="clock" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton}>
                <IconSymbol name="gearshape" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Quick Access */}
          <View style={styles.quickAccess}>
            <View style={styles.quickRow}>
              {recentPlaylists.slice(0, 2).map((playlist) => (
                <TouchableOpacity key={playlist.id} style={styles.quickItem}>
                  <LinearGradient
                    colors={[playlist.color[0], playlist.color[1]]}
                    style={styles.quickItemGradient}
                  >
                    <View style={styles.quickItemIcon}>
                      <IconSymbol name="music.note" size={20} color="#fff" />
                    </View>
                    <Text style={styles.quickItemText}>{playlist.title}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.quickRow}>
              {recentPlaylists.slice(2, 4).map((playlist) => (
                <TouchableOpacity key={playlist.id} style={styles.quickItem}>
                  <LinearGradient
                    colors={[playlist.color[0], playlist.color[1]]}
                    style={styles.quickItemGradient}
                  >
                    <View style={styles.quickItemIcon}>
                      <IconSymbol name="music.note" size={20} color="#fff" />
                    </View>
                    <Text style={styles.quickItemText}>{playlist.title}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Main Actions */}
          <View style={styles.mainActions}>
            <Link href="../playlist" asChild>
              <TouchableOpacity style={styles.mainActionButton}>
                <LinearGradient
                  colors={['#1DB954', '#1ed760']}
                  style={styles.mainActionGradient}
                >
                  <IconSymbol name="list.bullet" size={28} color="#fff" />
                  <Text style={styles.mainActionText}>Xem Playlist</Text>
                  <Text style={styles.mainActionSubtext}>{songsData.length} bài hát • Nhạc Việt</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Link>

            <Link href="../music-player" asChild>
              <TouchableOpacity style={styles.mainActionButton}>
                <LinearGradient
                  colors={['#8B5CF6', '#a855f7']}
                  style={styles.mainActionGradient}
                >
                  <IconSymbol name="play.circle.fill" size={28} color="#fff" />
                  <Text style={styles.mainActionText}>Music Player</Text>
                  <Text style={styles.mainActionSubtext}>Phát nhạc ngay</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Made For You Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Được tạo cho bạn</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              {madeForYou.map((item) => (
                <TouchableOpacity key={item.id} style={styles.playlistCard}>
                  <LinearGradient
                    colors={[item.color[0], item.color[1]]}
                    style={styles.playlistCover}
                  >
                    <IconSymbol name="music.note" size={32} color="#fff" />
                  </LinearGradient>
                  <Text style={styles.playlistTitle}>{item.title}</Text>
                  <Text style={styles.playlistSubtitle}>{item.subtitle}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Recently Played */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Phát gần đây</Text>
            <View style={styles.recentlyPlayed}>
              {songsData.slice(0, 6).map((song, index) => (
                <TouchableOpacity key={song.id} style={styles.recentItem}>
                  <AlbumImage
                    imageUrl={song.imageUrl}
                    title={song.title}
                    color={song.color}
                    style={styles.recentItemCover}
                    size="small"
                  />
                  <View style={styles.recentItemInfo}>
                    <Text style={styles.recentItemTitle}>{song.title}</Text>
                    <Text style={styles.recentItemArtist}>{song.artist}</Text>
                  </View>
                  <TouchableOpacity style={styles.recentItemPlay}>
                    <IconSymbol name="play.circle.fill" size={24} color="rgba(255,255,255,0.7)" />
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.bottomSpacing} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 4,
  },
  headerActions: {
    flexDirection: 'row',
  },
  headerButton: {
    marginLeft: 16,
    padding: 8,
  },
  quickAccess: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  quickRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  quickItem: {
    flex: 1,
    marginRight: 8,
    height: 56,
    borderRadius: 4,
    overflow: 'hidden',
  },
  quickItemGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  quickItemIcon: {
    width: 32,
    height: 32,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  quickItemText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  mainActions: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  mainActionButton: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  mainActionGradient: {
    padding: 20,
    alignItems: 'center',
  },
  mainActionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  mainActionSubtext: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  horizontalScroll: {
    paddingLeft: 16,
  },
  playlistCard: {
    width: 140,
    marginRight: 16,
  },
  playlistCover: {
    width: 140,
    height: 140,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  playlistTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  playlistSubtitle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 16,
  },
  recentlyPlayed: {
    paddingHorizontal: 16,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  recentItemCover: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 12,
  },
  recentItemText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  recentItemInfo: {
    flex: 1,
  },
  recentItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 2,
  },
  recentItemArtist: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
  recentItemPlay: {
    padding: 8,
  },
  bottomSpacing: {
    height: 100,
  },
});