import { IconSymbol } from '@/components/ui/icon-symbol';
import { songsData } from '@/data/songsData';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AlbumImage from '../components/AlbumImage';

export default function PlaylistScreen() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const playPreview = async (songIndex: number) => {
    try {
      if (sound) {
        await sound.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: songsData[songIndex].url },
        { shouldPlay: true, isLooping: false }
      );
      
      setSound(newSound);
      setCurrentSongIndex(songIndex);
      setIsPlaying(true);

      setTimeout(async () => {
        try {
          await newSound.pauseAsync();
          setIsPlaying(false);
        } catch (error) {
          console.log('Error stopping preview:', error);
        }
      }, 10000);

    } catch (error) {
      console.log('Error playing preview:', error);
    }
  };

  const toggleMiniPlayer = async () => {
    if (!sound) return;

    try {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Error toggling mini player:', error);
    }
  };

  return (
    <LinearGradient
      colors={['#1e3a8a', '#1f2937', '#000000']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <IconSymbol name="arrow.left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Nhạc Việt Hay Nhất</Text>
          <TouchableOpacity>
            <IconSymbol name="magnifyingglass" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Playlist Header */}
          <View style={styles.playlistHeader}>
            <LinearGradient
              colors={['#8B5CF6', '#3B82F6']}
              style={styles.playlistCover}
            >
              <Text style={styles.playlistCoverText}>NHẠC VIỆT</Text>
            </LinearGradient>
            
            <View style={styles.playlistInfo}>
              <Text style={styles.playlistTitle}>Nhạc Việt Hay Nhất</Text>
              <Text style={styles.playlistDescription}>
                Những bài hát Việt Nam hay nhất mọi thời đại
              </Text>
              <View style={styles.playlistStats}>
                <Text style={styles.statsText}>Made for you • {songsData.length} bài hát</Text>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionSection}>
            <TouchableOpacity 
              onPress={() => setIsLiked(!isLiked)}
              style={styles.likeButton}
            >
              <IconSymbol 
                name={isLiked ? "heart.fill" : "heart"} 
                size={32} 
                color={isLiked ? "#1DB954" : "#fff"} 
              />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.downloadButton}>
              <IconSymbol name="arrow.down.circle" size={32} color="#fff" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.moreButton}>
              <IconSymbol name="ellipsis" size={32} color="#fff" />
            </TouchableOpacity>
            
            <View style={styles.spacer} />
            
            <TouchableOpacity 
              style={styles.shuffleButton}
              onPress={() => playPreview(0)}
            >
              <IconSymbol name="shuffle" size={24} color="#000" />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.playAllButton}
              onPress={() => router.push('/music-player')}
            >
              <IconSymbol name="play.fill" size={28} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Songs List */}
          <View style={styles.songsList}>
            {songsData.map((song, index) => (
              <TouchableOpacity
                key={song.id}
                style={[
                  styles.songItem,
                  currentSongIndex === index && isPlaying && styles.playingSongItem
                ]}
                onPress={() => router.push('/music-player')}
              >
                <View style={styles.songNumber}>
                  {currentSongIndex === index && isPlaying ? (
                    <View style={styles.playingIndicator}>
                      <View style={[styles.bar, styles.bar1]} />
                      <View style={[styles.bar, styles.bar2]} />
                      <View style={[styles.bar, styles.bar3]} />
                      <View style={[styles.bar, styles.bar4]} />
                    </View>
                  ) : (
                    <Text style={styles.numberText}>{index + 1}</Text>
                  )}
                </View>
                
                <View style={styles.songImageContainer}>
                  <AlbumImage
                    imageUrl={song.imageUrl}
                    title={song.title}
                    color={song.color}
                    style={styles.songImage}
                    size="small"
                  />
                </View>
                
                <View style={styles.songInfo}>
                  <Text style={[
                    styles.songTitle,
                    currentSongIndex === index && isPlaying && styles.playingSongTitle
                  ]}>
                    {song.title}
                  </Text>
                  <Text style={styles.songArtist}>{song.artist}</Text>
                </View>
                
                <Text style={styles.playsCount}>{song.plays}</Text>
                
                <TouchableOpacity 
                  onPress={() => playPreview(index)}
                  style={styles.songPlayButton}
                >
                  <IconSymbol 
                    name={currentSongIndex === index && isPlaying ? "pause.circle.fill" : "play.circle.fill"} 
                    size={24} 
                    color={currentSongIndex === index && isPlaying ? "#1DB954" : "rgba(255,255,255,0.7)"} 
                  />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.songMoreButton}>
                  <IconSymbol name="ellipsis" size={20} color="rgba(255,255,255,0.7)" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.bottomSpacing} />
        </ScrollView>

        {/* Mini Player */}
        {sound && (
          <View style={styles.miniPlayer}>
            <LinearGradient
              colors={['rgba(30,30,30,0.95)', 'rgba(0,0,0,0.95)']}
              style={styles.miniPlayerGradient}
            >
              <View style={styles.miniPlayerContent}>
                <View style={styles.miniSongInfo}>
                  <AlbumImage
                    imageUrl={songsData[currentSongIndex].imageUrl}
                    title={songsData[currentSongIndex].title}
                    color={songsData[currentSongIndex].color}
                    style={styles.miniAlbumArt}
                    size="small"
                  />
                  <View style={styles.miniTextInfo}>
                    <Text style={styles.miniSongTitle}>{songsData[currentSongIndex].title}</Text>
                    <Text style={styles.miniSongArtist}>{songsData[currentSongIndex].artist}</Text>
                  </View>
                </View>
                
                <View style={styles.miniControls}>
                  <TouchableOpacity style={styles.miniHeartButton}>
                    <IconSymbol name="heart" size={20} color="rgba(255,255,255,0.7)" />
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    onPress={toggleMiniPlayer}
                    style={styles.miniPlayButton}
                  >
                    <IconSymbol 
                      name={isPlaying ? "pause.fill" : "play.fill"} 
                      size={24} 
                      color="#fff" 
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </View>
        )}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  playlistHeader: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  playlistCover: {
    width: 160,
    height: 160,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
  },
  playlistCoverText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 2,
  },
  playlistInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'flex-end',
  },
  playlistTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  playlistDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 12,
    lineHeight: 20,
  },
  playlistStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  actionSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  likeButton: {
    marginRight: 24,
  },
  downloadButton: {
    marginRight: 24,
  },
  moreButton: {
    marginRight: 24,
  },
  spacer: {
    flex: 1,
  },
  shuffleButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  playAllButton: {
    backgroundColor: '#1DB954',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1DB954',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  songsList: {
    paddingHorizontal: 16,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  playingSongItem: {
    backgroundColor: 'rgba(29, 185, 84, 0.1)',
  },
  songNumber: {
    width: 24,
    alignItems: 'center',
    marginRight: 16,
  },
  numberText: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  playingIndicator: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 16,
  },
  bar: {
    width: 2,
    backgroundColor: '#1DB954',
    marginHorizontal: 1,
    borderRadius: 1,
  },
  bar1: { height: 8 },
  bar2: { height: 12 },
  bar3: { height: 6 },
  bar4: { height: 14 },
  songImageContainer: {
    marginRight: 12,
  },
  songImage: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  songImageText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 2,
  },
  playingSongTitle: {
    color: '#1DB954',
  },
  songArtist: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
  playsCount: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    marginRight: 16,
  },
  songPlayButton: {
    marginRight: 12,
  },
  songMoreButton: {
    padding: 8,
  },
  bottomSpacing: {
    height: 100,
  },
  miniPlayer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
  },
  miniPlayerGradient: {
    flex: 1,
    justifyContent: 'center',
  },
  miniPlayerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  miniSongInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniAlbumArt: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  miniAlbumText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  miniTextInfo: {
    flex: 1,
  },
  miniSongTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 2,
  },
  miniSongArtist: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
  miniControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniHeartButton: {
    marginRight: 16,
  },
  miniPlayButton: {
    padding: 8,
  },
});