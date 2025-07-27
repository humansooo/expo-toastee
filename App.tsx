import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ToastContainer, toast, configureToasts } from './src';

// Example utility function (non-React component usage)
export const showToast = (msg: string) => toast.success(msg, { duration: 5000 });

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<'material' | 'neobrutalist'>('material');

  const switchTheme = (theme: 'material' | 'neobrutalist') => {
    setCurrentTheme(theme);
    // The theme will be applied via ToastContainer props
    toast.info(`Switched to ${theme} theme!`, { duration: 2000 });
  };

  const handleSuccessToast = () => {
    toast.success('Success! Operation completed successfully.', { duration: 3000 });
  };

  const handleErrorToast = () => {
    toast.error('Error! Something went wrong.', { duration: 4000 });
  };

  const handleInfoToast = () => {
    toast.info('Info: This is an informational message.', { duration: 2000 });
  };

  const handleWarningToast = () => {
    toast.warning('Warning! Please check your input.', { duration: 3500 });
  };

  const handleBottomToast = () => {
    toast.success('This toast appears at the bottom!', { 
      position: 'bottom', 
      duration: 3000 
    });
  };

  const handleCustomStyleToast = () => {
    toast.success('Custom styled toast!', {
      duration: 4000,
      theme: 'neobrutalist',
      size: 'sm',
    });
  };

  const handleSizeToast = (size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl') => {
    toast.info(`Size: ${size.toUpperCase()}`, { 
      size, 
      duration: 3000 
    });
  };

  const handleThemeSpecificToast = () => {
    toast.info('Theme-specific toast!', {
      theme: currentTheme === 'material' ? 'neobrutalist' : 'material',
      duration: 3000,
    });
  };

  const handleLongDurationToast = () => {
    showToast('This is using the utility function with 5 second duration!');
  };

  const handleClearAll = () => {
    toast.clear();
  };

  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:'#f5f5f5'
    }}> 
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* ToastContainer with theme configuration via props */}
      <ToastContainer 
        theme={currentTheme}
        // size="sm"
        customStyles={{
          text: {
            fontWeight: 'bold'
          }
        }}
        defaultAnimationType='bounce'
        defaultDuration={3000}
        defaultPosition="top"
      />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>🍞 Expo Toastee Demo</Text>
        <Text style={styles.subtitle}>Modern Toast Notifications for React Native Expo</Text>
        
        {/* Theme Switcher */}
        <View style={styles.themeContainer}>
          <Text style={styles.themeTitle}>Current Theme: {currentTheme}</Text>
          <View style={styles.themeButtons}>
            <TouchableOpacity 
              style={[styles.themeButton, currentTheme === 'material' && styles.activeTheme]} 
              onPress={() => switchTheme('material')}
            >
              <Text style={styles.themeButtonText}>Material</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.themeButton, currentTheme === 'neobrutalist' && styles.activeTheme]} 
              onPress={() => switchTheme('neobrutalist')}
            >
              <Text style={styles.themeButtonText}>Neobrutalist</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.successButton]} onPress={handleSuccessToast}>
            <Text style={styles.buttonText}>Show Success Toast</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.errorButton]} onPress={handleErrorToast}>
            <Text style={styles.buttonText}>Show Error Toast</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.infoButton]} onPress={handleInfoToast}>
            <Text style={styles.buttonText}>Show Info Toast</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.warningButton]} onPress={handleWarningToast}>
            <Text style={styles.buttonText}>Show Warning Toast</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.bottomButton]} onPress={handleBottomToast}>
            <Text style={styles.buttonText}>Bottom Position Toast</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.customButton]} onPress={handleCustomStyleToast}>
            <Text style={styles.buttonText}>Custom Styled Toast</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.themeSpecificButton]} onPress={handleThemeSpecificToast}>
            <Text style={styles.buttonText}>Opposite Theme Toast</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.utilButton]} onPress={handleLongDurationToast}>
            <Text style={styles.buttonText}>Utility Function Toast</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClearAll}>
            <Text style={styles.buttonText}>Clear All Toasts</Text>
          </TouchableOpacity>
        </View>

        {/* Size Demo Section */}
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeTitle}>Toast Sizes</Text>
          <View style={styles.sizeGrid}>
            {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => (
              <TouchableOpacity 
                key={size}
                style={[styles.sizeButton]} 
                onPress={() => handleSizeToast(size)}
              >
                <Text style={styles.sizeButtonText}>{size.toUpperCase()}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>New Features:</Text>
          <Text style={styles.infoText}>
            • Material & Neobrutalist themes{'\n'}
            • 6 responsive sizes (xs to 2xl){'\n'}
            • Custom style overrides{'\n'}
            • Global theme configuration{'\n'}
            • Per-toast theme selection{'\n'}
            • Full TypeScript support
          </Text>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
     paddingTop: 100,
    alignItems: 'center',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  themeContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
  themeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  themeButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  themeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeTheme: {
    backgroundColor: '#007AFF',
    borderColor: '#0056CC',
  },
  themeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  successButton: {
    backgroundColor: '#4CAF50',
  },
  errorButton: {
    backgroundColor: '#F44336',
  },
  infoButton: {
    backgroundColor: '#2196F3',
  },
  warningButton: {
    backgroundColor: '#FF9800',
  },
  bottomButton: {
    backgroundColor: '#9C27B0',
  },
  customButton: {
    backgroundColor: '#FF6B6B',
  },
  themeSpecificButton: {
    backgroundColor: '#00BCD4',
  },
  utilButton: {
    backgroundColor: '#607D8B',
  },
  clearButton: {
    backgroundColor: '#795548',
  },
  sizeContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
  sizeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  sizeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  sizeButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
    minWidth: 45,
  },
  sizeButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  infoBox: {
    marginTop: 40,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
    width: '100%',
    maxWidth: 300,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
