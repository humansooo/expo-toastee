import { ToastSize, ToastTheme } from './types';

export interface SizeConfig {
  width: number;
  maxWidth: number;
  fontSize: number;
  paddingHorizontal: number;
  paddingVertical: number;
  borderRadius: number;
  borderWidth?: number;
}

export const MaterialSizeConfigs: Record<ToastSize, SizeConfig> = {
  xs: {
    width: 120,
    maxWidth: 180,
    fontSize: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14, // More rounded for Material You pill shape
  },
  sm: {
    width: 160,
    maxWidth: 240,
    fontSize: 12,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 16, // More rounded
  },
  md: {
    width: 200,
    maxWidth: 300,
    fontSize: 14,
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 18, // More rounded for pill-like appearance
  },
  lg: {
    width: 250,
    maxWidth: 400,
    fontSize: 16,
    paddingHorizontal: 26,
    paddingVertical: 16,
    borderRadius: 20, // More rounded
  },
  xl: {
    width: 320,
    maxWidth: 500,
    fontSize: 18,
    paddingHorizontal: 30,
    paddingVertical: 18,
    borderRadius: 22, // More rounded
  },
  '2xl': {
    width: 400,
    maxWidth: 600,
    fontSize: 20,
    paddingHorizontal: 34,
    paddingVertical: 20,
    borderRadius: 24, // More rounded
  },
};

export const NeobrutalistSizeConfigs: Record<ToastSize, SizeConfig> = {
  xs: {
    width: 120,
    maxWidth: 180,
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 2,
  },
  sm: {
    width: 160,
    maxWidth: 240,
    fontSize: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 2,
  },
  md: {
    width: 200,
    maxWidth: 300,
    fontSize: 14,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 3,
  },
  lg: {
    width: 250,
    maxWidth: 400,
    fontSize: 16,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 3,
  },
  xl: {
    width: 320,
    maxWidth: 500,
    fontSize: 18,
    paddingHorizontal: 26,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 4,
  },
  '2xl': {
    width: 400,
    maxWidth: 600,
    fontSize: 20,
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 18,
    borderWidth: 4,
  },
};

export const getSizeConfig = (size: ToastSize = 'xs', theme: ToastTheme = 'material'): SizeConfig => {
  return theme === 'material' ? MaterialSizeConfigs[size] : NeobrutalistSizeConfigs[size];
}; 