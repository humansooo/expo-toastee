import { ToastGlobalConfig, ToastTheme, ToastSize, ToastAnimationType, ToastPosition } from './types';

class ToastConfigManager {
  private config: ToastGlobalConfig = {
    theme: 'material',
    size: 'md',
    defaultDuration: 3000,
    defaultPosition: 'top',
    defaultAnimationType: 'slide',
  };

  // Set global configuration
  setConfig(newConfig: Partial<ToastGlobalConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  // Get current configuration
  getConfig(): ToastGlobalConfig {
    return { ...this.config };
  }

  // Get specific config values
  getTheme(): ToastTheme {
    return this.config.theme || 'material';
  }

  getDefaultDuration(): number {
    return this.config.defaultDuration || 3000;
  }

  getDefaultPosition(): ToastPosition {
    return this.config.defaultPosition || 'top';
  }

  getDefaultAnimationType(): ToastAnimationType{
    return this.config.defaultAnimationType || 'slide';
  }

  getCustomStyles() {
    return this.config.customStyles || {};
  }

  getSize(): ToastSize {
    return this.config.size || 'md';
  }
}

// Create singleton instance
export const toastConfig = new ToastConfigManager();

// Convenience function for users
export const configureToasts = (config: Partial<ToastGlobalConfig>) => {
  toastConfig.setConfig(config);
}; 