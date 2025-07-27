import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { toastManager } from './ToastManager';
import { ToastConfig, ToastGlobalConfig, ToastTheme } from './types';
import { getThemeStyles, themes } from './themes';
import { toastConfig } from './ToastConfig';
import { getSizeConfig } from './sizes';

const { width: screenWidth } = Dimensions.get('window');

interface ToastConfigWithTheme extends ToastConfig {
  theme: ToastTheme;
}

interface ToastItemProps {
  toast: ToastConfigWithTheme;
  onRemove: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove }) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(toast.position === 'top' ? -100 : 100));
  const [isExiting, setIsExiting] = useState(false);

  const handleRemove = () => {
    console.log('ToastItem: handleRemove called for toast:', toast.id, 'isExiting:', isExiting);
    if (isExiting) return; // Prevent multiple exit animations
    setIsExiting(true);
    
    // Exit animation before removing
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: toast.position === 'top' ? -100 : 100,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      console.log('ToastItem: Animation complete, calling onRemove for:', toast.id);
      onRemove(toast.id);
    });
  };

  useEffect(() => {
    // Entrance animation
    switch (toast.animationType) {
      case 'bounce':
        Animated.parallel([
          Animated.spring(slideAnim, {
            toValue: 0,
            bounciness: 12,
            speed: 10,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
        break;
      case 'spring':
        Animated.parallel([
          Animated.spring(slideAnim, {
            toValue: 0,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
        break;
      case 'fade':
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
        break;
      case 'slide':
      default:
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
        break;
    }

    // Auto-dismiss timer
    if (toast.duration && toast.duration > 0) {
      console.log('ToastItem: Setting auto-dismiss timer for toast:', toast.id, 'duration:', toast.duration);
      const timer = setTimeout(() => {
        console.log('ToastItem: Auto-dismiss timer fired for toast:', toast.id);
        handleRemove();
      }, toast.duration);

      return () => {
        console.log('ToastItem: Clearing timer for toast:', toast.id);
        clearTimeout(timer);
      };
    }
  }, [toast.duration]);

 

  const getToastStyle = () => {
    const themeStyles = getThemeStyles(toast.theme);
    const customStyles = toast.customStyles || {};
    const sizeConfig = getSizeConfig(toast.size, toast.theme);
    
    let baseStyle = [
      themeStyles.container,
      {
        width: sizeConfig.width,
        maxWidth: sizeConfig.maxWidth,
        borderRadius: sizeConfig.borderRadius,
        borderWidth: sizeConfig.borderWidth,
      }
    ];
    let typeStyle = [];

    switch (toast.type) {
      case 'success':
        typeStyle = [themeStyles.successContainer, customStyles.successContainer];
        break;
      case 'error':
        typeStyle = [themeStyles.errorContainer, customStyles.errorContainer];
        break;
      case 'warning':
        typeStyle = [themeStyles.warningContainer, customStyles.warningContainer];
        break;
      case 'info':
      default:
        typeStyle = [themeStyles.infoContainer, customStyles.infoContainer];
        break;
    }

    return [baseStyle, typeStyle, customStyles.container];
  };

  const getTextStyle = () => {
    const themeStyles = getThemeStyles(toast.theme);
    const customStyles = toast.customStyles || {};
    const sizeConfig = getSizeConfig(toast.size, toast.theme);
    
    let baseStyle = [
      themeStyles.text,
      {
        fontSize: sizeConfig.fontSize,
      }
    ];
    let typeStyle = [];

    switch (toast.type) {
      case 'success':
        typeStyle = [themeStyles.successText, customStyles.successText];
        break;
      case 'error':
        typeStyle = [themeStyles.errorText, customStyles.errorText];
        break;
      case 'warning':
        typeStyle = [themeStyles.warningText, customStyles.warningText];
        break;
      case 'info':
      default:
        typeStyle = [themeStyles.infoText, customStyles.infoText];
        break;
    }

    return [baseStyle, typeStyle, customStyles.text];
  };

  const handlePress = () => {
    handleRemove();
  };

  const themeStyles = getThemeStyles(toast.theme);
  const sizeConfig = getSizeConfig(toast.size, toast.theme);
  const isNeoBrutalist = toast.theme === 'neobrutalist';
  
  if (isNeoBrutalist) {
    // Special rendering for neobrutalist theme with proper box shadow
    const shadowOffset = Math.max(4, (sizeConfig.borderWidth || 0) + 2);
    
    return (
      <Animated.View
        style={[
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
            marginVertical: 6,
            marginHorizontal: 16,
            alignSelf: 'center',
          },
        ]}
      >
        {/* Shadow layer */}
        <View
          style={[
            {
              position: 'absolute',
              top: shadowOffset,
              left: shadowOffset,
              right: -shadowOffset,
              bottom: -shadowOffset,
              backgroundColor: '#000000',
              borderRadius: sizeConfig.borderRadius,
            },
          ]}
        />
        {/* Main toast content */}
        <View style={getToastStyle()}>
          <TouchableOpacity 
            onPress={handlePress} 
            style={{
              paddingHorizontal: sizeConfig.paddingHorizontal,
              paddingVertical: sizeConfig.paddingVertical,
            }}
          >
            <Text style={getTextStyle()}>{toast.message}</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
  
  return (
    <Animated.View
      style={[
        getToastStyle(),
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
          alignSelf: 'center',
        },
      ]}
    >
      <TouchableOpacity 
        onPress={handlePress} 
        style={{
          paddingHorizontal: sizeConfig.paddingHorizontal,
          paddingVertical: sizeConfig.paddingVertical,
        }}
      >
        <Text style={getTextStyle()}>{toast.message}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

interface ToastContainerProps extends Partial<ToastGlobalConfig> {
  // Additional props specific to the container
}

export const ToastContainer: React.FC<ToastContainerProps> = (props) => {
  const [toasts, setToasts] = useState<ToastConfig[]>([]);

  // Apply props configuration on mount and when props change
  useEffect(() => {
    if (Object.keys(props).length > 0) {
      toastConfig.setConfig(props);
    }
  }, [props]);

  useEffect(() => {
    const unsubscribe = toastManager.subscribe((newToasts) => {
      console.log('ToastContainer: Received toasts update:', newToasts.length);
      setToasts(newToasts);
    });
    return unsubscribe;
  }, []);

  const handleRemoveToast = (id: string) => {
    console.log('ToastContainer: Requesting removal of toast:', id);
    toastManager.removeToast(id);
  };

  const topToasts = toasts.filter(toast => toast.position === 'top');
  const bottomToasts = toasts.filter(toast => toast.position === 'bottom');

  return (
    <>
      {/* Top toasts */}
      {topToasts.length > 0 && (
        <SafeAreaView style={styles.topContainer}>
          <View style={styles.toastList}>
            {topToasts.map(toast => (
              <ToastItem
                key={toast.id}
                toast={{...toast, theme: toast.theme || 'material'}}
                onRemove={handleRemoveToast}
              />
            ))}
          </View>
        </SafeAreaView>
      )}

      {/* Bottom toasts */}
      {bottomToasts.length > 0 && (
        <SafeAreaView style={styles.bottomContainer}>
          <View style={styles.toastList}>
            {bottomToasts.map(toast => (
              <ToastItem
                key={toast.id}
                toast={{...toast, theme: toast.theme || 'material'}}
                onRemove={handleRemoveToast}
              />
            ))}
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    pointerEvents: 'box-none',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    pointerEvents: 'box-none',
  },
  toastList: {
    paddingVertical: 8,
  },
}); 