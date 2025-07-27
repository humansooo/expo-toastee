import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ToastType = 'success' | 'error' | 'info' | 'warning';
export type ToastPosition = 'top' | 'bottom';
export type ToastTheme = 'material' | 'neobrutalist';
export type ToastSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ToastAnimationType = 'fade' | 'slide' | 'spring' | 'bounce';

export interface ToastOptions {
  duration?: number;
  position?: ToastPosition;
  animationType?: ToastAnimationType;
  theme?: ToastTheme;
  size?: ToastSize;
  customStyles?: ToastCustomStyles;
}

export interface ToastConfig extends ToastOptions {
  id: string;
  type: ToastType;
  message: string;
  timestamp: number;
}

export interface ToastState {
  toasts: ToastConfig[];
}

// Style customization interfaces
export interface ToastCustomStyles {
  container?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
  successContainer?: StyleProp<ViewStyle>;
  errorContainer?: StyleProp<ViewStyle>;
  infoContainer?: StyleProp<ViewStyle>;
  warningContainer?: StyleProp<ViewStyle>;
  successText?: StyleProp<TextStyle>;
  errorText?: StyleProp<TextStyle>;
  infoText?: StyleProp<TextStyle>;
  warningText?: StyleProp<TextStyle>;
}

export interface ToastGlobalConfig {
  theme?: ToastTheme;
  size?: ToastSize;
  customStyles?: ToastCustomStyles;
  defaultDuration?: number;
  defaultPosition?: ToastPosition;
  defaultAnimationType?: ToastAnimationType;
} 