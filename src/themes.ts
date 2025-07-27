import { StyleSheet } from 'react-native';
import { ToastTheme } from './types';

export const materialTheme = StyleSheet.create({
  // Container styles
  container: {
    marginVertical: 6,
    marginHorizontal: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  content: {
    // Padding is now handled by size config
  },
  text: {
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 14,
    letterSpacing: 0.2,
  },
  
  // Success styles
  successContainer: {
    backgroundColor: '#E8F5E8',
    borderColor: 'rgba(76, 175, 80, 0.2)',
  },
  successText: {
    color: '#2E7D2E',
  },
  
  // Error styles
  errorContainer: {
    backgroundColor: '#FFEBEE',
    borderColor: 'rgba(244, 67, 54, 0.2)',
  },
  errorText: {
    color: '#C62828',
  },
  
  // Info styles
  infoContainer: {
    backgroundColor: '#E3F2FD',
    borderColor: 'rgba(33, 150, 243, 0.2)',
  },
  infoText: {
    color: '#1565C0',
  },
  
  // Warning styles
  warningContainer: {
    backgroundColor: '#FFF3E0',
    borderColor: 'rgba(255, 152, 0, 0.2)',
  },
  warningText: {
    color: '#E65100',
  },
});

export const neobrutalistTheme = StyleSheet.create({
  // Container styles
  container: {
    borderColor: '#000000',
    // Size properties are handled by size config
  },
  content: {
    // Padding is now handled by size config
  },
  text: {
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 14,
  },
  
  // Success styles
  successContainer: {
    backgroundColor: '#22C55E', // Green similar to the image style
    borderColor: '#000000',
    shadowColor: '#000000',
  },
  successText: {
    color: '#000000',
  },
  
  // Error styles
  errorContainer: {
    backgroundColor: '#EF4444', // Red similar to the image style
    borderColor: '#000000',
    shadowColor: '#000000',
  },
  errorText: {
    color: '#FFFFFF',
  },
  
  // Info styles
  infoContainer: {
    backgroundColor: '#D8B4FE', // Light purple exactly like your image
    borderColor: '#000000',
    shadowColor: '#000000',
  },
  infoText: {
    color: '#000000',
  },
  
  // Warning styles
  warningContainer: {
    backgroundColor: '#FACC15', // Yellow similar to the image style
    borderColor: '#000000',
    shadowColor: '#000000',
  },
  warningText: {
    color: '#000000',
  },
});

export const themes = {
  material: materialTheme,
  neobrutalist: neobrutalistTheme,
};

// Keep backward compatibility
export const brutalistTheme = neobrutalistTheme; 

export const getThemeStyles = (theme: ToastTheme) => {
    const themeKey = theme || 'material';
    // console.log('ToastContainer: themeKey', themeKey);
    return themes[themeKey];
};