import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, ImageStyle, StyleSheet, Text } from 'react-native';

interface AlbumImageProps {
  imageUrl: string;
  title: string;
  color: string[];
  style: ImageStyle;
  size?: 'small' | 'medium' | 'large';
}

export default function AlbumImage({ imageUrl, title, color, style, size = 'medium' }: AlbumImageProps) {
  const [imageError, setImageError] = useState(false);

  const getFallbackText = () => {
    return title.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
  };

  const getTextSize = () => {
    switch (size) {
      case 'small': return 12;
      case 'medium': return 16;
      case 'large': return 24;
      default: return 16;
    }
  };

  if (imageError) {
    return (
      <LinearGradient
        colors={[color[0], color[1]]}
        style={[style, styles.fallbackContainer]}
      >
        <Text style={[styles.fallbackText, { fontSize: getTextSize() }]}>
          {getFallbackText()}
        </Text>
      </LinearGradient>
    );
  }

  return (
    <Image
      source={{ uri: imageUrl }}
      style={style}
      onError={() => setImageError(true)}
    />
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});