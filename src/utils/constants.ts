import { BrandConfig } from '@/types';

// Brand Configuration
export const BRAND_CONFIG: BrandConfig = {
  name: 'Tuba Öztürk Demir',
  title: 'Medikal Estetik Uzmanı',
  phone: '+90 552 799 20 92',
  instagram: '@drtubaozturkdemir',
  website: 'drtubaozturkdemir.com',
  facebook: 'Tuba Öztürk Demir',
  primaryColor: '#FF8C42', // Orange
  secondaryColor: '#FFFFFF', // White
};

// Canvas Configuration
export const CANVAS_CONFIG = {
  width: 1080,
  height: 1920,
  fps: 30,
};

// Lower Third Config
export const LOWER_THIRD_CONFIG = {
  height: 200,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  borderColor: '#FF8C42',
  borderWidth: 3,
  cornerRadius: 20,
  padding: 20,
  animationDuration: 500, // ms
};

// Subtitle Config
export const SUBTITLE_CONFIG = {
  fontSize: 36,
  fontFamily: 'Arial, sans-serif',
  color: '#FFFFFF',
  highlightColor: '#FF8C42',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: 15,
  borderRadius: 10,
  lineHeight: 1.4,
};

// Emphasis Image Config
export const EMPHASIS_IMAGE_CONFIG = {
  displayDuration: 3000, // 3 seconds in ms
  fadeInDuration: 300, // ms
  fadeOutDuration: 300, // ms
  maxWidth: 600,
  maxHeight: 600,
  position: 'center', // 'center', 'top-left', 'top-right', 'bottom-left', 'bottom-right'
};

// Storage Keys
export const STORAGE_KEYS = {
  PROJECTS: 'tuba_reels_projects',
  VIDEOS: 'tuba_reels_videos',
  IMAGES: 'tuba_reels_images',
};

// Common Medical Aesthetics Keywords
export const MEDICAL_KEYWORDS = {
  botox: ['botoks', 'botox', 'anti-aging', 'kırışıklık', 'hayat çizgisi'],
  filler: ['dolgu', 'filler', 'hyaluronic', 'hyalüronik asit'],
  skincare: ['cilt bakımı', 'dermatologi', 'yüz', 'temizleme'],
  procedure: ['prosedür', 'işlem', 'tedavi', 'aplikasyon'],
  safety: ['güvenli', 'steril', 'sertifikası', 'medikal'],
};
