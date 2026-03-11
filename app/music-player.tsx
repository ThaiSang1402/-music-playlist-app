import { IconSymbol } from '@/components/ui/icon-symbol';
import { songsData } from '@/data/songsData';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AlbumImage from '../components/AlbumImage';

const { width } = Dimensions.get('window');
const albumSize = width * 0.75;

export default function MusicPlayerScreen() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0); // 0: off, 1: all, 2: one
  const [showLyrics, setShowLyrics] = useState(false);

  const rotateValue = new Animated.Value(0);
  const scaleValue = new Animated.Value(1);

  const currentSong = songsData[currentSongIndex];

  useEffect(() => {
    setupAudio();
    startRotation();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const startRotation = () => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      })
    ).start();
  };

  const setupAudio = async () => {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });
    } catch (error) {
      console.log('Error setting up audio:', error);
    }
  };

  const loadAndPlaySong = async (songUrl: string) => {
    try {
      setIsLoading(true);
      
      if (sound) {
        await sound.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: songUrl },
        { shouldPlay: false, isLooping: repeatMode === 2 },
        onPlaybackStatusUpdate
      );
      
      setSound(newSound);
      setIsLoading(false);
      
      await newSound.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.log('Error loading song:', error);
      setIsLoading(false);
    }
  };

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis || 0);
      setDuration(status.durationMillis || 0);
      setIsPlaying(status.isPlaying);
      
      if (status.didJustFinish && repeatMode !== 2) {
        if (repeatMode === 1) {
          handleNext();
        }
      }
    }
  };

  const handlePlayPause = async () => {
    if (!sound) {
      await loadAndPlaySong(currentSong.url);
      return;
    }

    try {
      if (isPlaying) {
        await sound.pauseAsync();
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        await sound.playAsync();
        Animated.timing(scaleValue, {
          toValue: 1.05,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    } catch (error) {
      console.log('Error play/pause:', error);
    }
  };

  const handleNext = async () => {
    let nextIndex;
    if (isShuffled) {
      nextIndex = Math.floor(Math.random() * songsData.length);
    } else {
      nextIndex = (currentSongIndex + 1) % songsData.length;
    }
    setCurrentSongIndex(nextIndex);
    await loadAndPlaySong(songsData[nextIndex].url);
  };

  const handlePrevious = async () => {
    const prevIndex = currentSongIndex === 0 ? songsData.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
    await loadAndPlaySong(songsData[prevIndex].url);
  };

  const formatTime = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (position / duration) * 100 : 0;

  const spin = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <LinearGradient
      colors={[currentSong.color[0], currentSong.color[1], '#000000']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <IconSymbol name="chevron.down" size={28} color="#fff" />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerSubtitle}>ĐANG PHÁT TỪ PLAYLIST</Text>
            <Text style={styles.headerTitle}>Nhạc Việt Hay Nhất</Text>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <IconSymbol name="ellipsis" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Album Art or Lyrics */}
        <View style={styles.albumSection}>
          {!showLyrics ? (
            <Animated.View 
              style={[
                styles.albumArtContainer,
                {
                  transform: [
                    { rotate: isPlaying ? spin : '0deg' },
                    { scale: scaleValue }
                  ]
                }
              ]}
            >
              <View style={styles.albumArtWrapper}>
                <AlbumImage
                  imageUrl={currentSong.imageUrl}
                  title={currentSong.title}
                  color={currentSong.color}
                  style={styles.albumArt}
                  size="large"
                />
                <View style={styles.albumOverlay}>
                  <View style={styles.vinylHole} />
                </View>
              </View>
            </Animated.View>
          ) : (
            <View style={styles.lyricsContainer}>
              <ScrollView 
                style={styles.lyricsScroll}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.lyricsContent}
              >
                {currentSong.lyrics.map((line, index) => (
                  <Text key={index} style={styles.lyricsLine}>
                    {line}
                  </Text>
                ))}
              </ScrollView>
            </View>
          )}
          
          {/* Toggle Lyrics Button */}
          <TouchableOpacity 
            style={styles.lyricsToggle}
            onPress={() => setShowLyrics(!showLyrics)}
          >
            <IconSymbol 
              name={showLyrics ? "music.note" : "text.quote"} 
              size={24} 
              color="rgba(255,255,255,0.8)" 
            />
          </TouchableOpacity>
        </View>

        {/* Song Info */}
        <View style={styles.songSection}>
          <View style={styles.songInfo}>
            <Text style={styles.songTitle}>{currentSong.title}</Text>
            <Text style={styles.songArtist}>{currentSong.artist}</Text>
          </View>
          <TouchableOpacity 
            onPress={() => setIsLiked(!isLiked)}
            style={styles.likeButton}
          >
            <IconSymbol 
              name={isLiked ? "heart.fill" : "heart"} 
              size={28} 
              color={isLiked ? "#1DB954" : "#fff"} 
            />
          </TouchableOpacity>
        </View>

        {/* Progress */}
        <View style={styles.progressSection}>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBar, { width: `${progressPercentage}%` }]} />
            </View>
            <View style={[styles.progressThumb, { left: `${progressPercentage}%` }]} />
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{formatTime(position)}</Text>
            <Text style={styles.timeText}>{formatTime(duration)}</Text>
          </View>
        </View>

        {/* Controls */}
        <View style={styles.controlSection}>
          <TouchableOpacity 
            onPress={() => setIsShuffled(!isShuffled)}
            style={[styles.controlButton, isShuffled && styles.activeControl]}
          >
            <IconSymbol name="shuffle" size={24} color={isShuffled ? "#1DB954" : "#B3B3B3"} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handlePrevious} style={styles.controlButton}>
            <IconSymbol name="backward.end.fill" size={32} color="#fff" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.playButton}
            onPress={handlePlayPause}
            disabled={isLoading}
          >
            {isLoading ? (
              <View style={styles.loadingDot} />
            ) : (
              <IconSymbol 
                name={isPlaying ? "pause.fill" : "play.fill"} 
                size={28} 
                color="#000" 
              />
            )}
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleNext} style={styles.controlButton}>
            <IconSymbol name="forward.end.fill" size={32} color="#fff" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => setRepeatMode((repeatMode + 1) % 3)}
            style={[styles.controlButton, repeatMode > 0 && styles.activeControl]}
          >
            <IconSymbol 
              name={repeatMode === 2 ? "repeat.1" : "repeat"} 
              size={24} 
              color={repeatMode > 0 ? "#1DB954" : "#B3B3B3"} 
            />
          </TouchableOpacity>
        </View>

        {/* Bottom Actions */}
        <View style={styles.bottomActions}>
          <TouchableOpacity style={styles.actionButton}>
            <IconSymbol name="airplayaudio" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <IconSymbol name="square.and.arrow.up" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerSubtitle: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '600',
    letterSpacing: 1,
  },
  headerTitle: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 2,
  },
  moreButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    position: 'relative',
  },
  albumArtContainer: {
    width: albumSize,
    height: albumSize,
    borderRadius: albumSize / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 20,
  },
  albumArtWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: albumSize / 2,
    overflow: 'hidden',
    position: 'relative',
  },
  albumArt: {
    width: '100%',
    height: '100%',
    borderRadius: albumSize / 2,
  },
  albumOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: albumSize / 2,
  },
  albumContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  vinylHole: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  albumText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 2,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textAlign: 'center',
  },
  albumReflection: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: albumSize / 2,
  },
  lyricsContainer: {
    width: albumSize,
    height: albumSize,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 20,
  },
  lyricsScroll: {
    flex: 1,
  },
  lyricsContent: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: albumSize - 40,
  },
  lyricsLine: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 26,
    fontWeight: '500',
  },
  lyricsToggle: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  songSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  songArtist: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  likeButton: {
    padding: 8,
  },
  progressSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  progressBarContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  progressBarBg: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  progressThumb: {
    position: 'absolute',
    top: -6,
    width: 16,
    height: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginLeft: -8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  controlSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  controlButton: {
    padding: 12,
    marginHorizontal: 8,
  },
  activeControl: {
    backgroundColor: 'rgba(29, 185, 84, 0.2)',
    borderRadius: 20,
  },
  playButton: {
    backgroundColor: '#fff',
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
  },
  loadingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  actionButton: {
    padding: 12,
  },
});