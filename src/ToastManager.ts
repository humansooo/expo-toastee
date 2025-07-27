import { ToastConfig, ToastOptions, ToastType } from './types';
import { toastConfig } from './ToastConfig';

type ToastListener = (toasts: ToastConfig[]) => void;

class ToastManager {
  private toasts: ToastConfig[] = [];
  private listeners: ToastListener[] = [];
  private idCounter = 0;

  // Subscribe to toast updates
  subscribe(listener: ToastListener): () => void {
    this.listeners.push(listener);
    // Return unsubscribe function
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  // Notify all listeners
  private notify(): void {
    console.log('ToastManager: Notifying listeners with toasts:', this.toasts.length);
    // Create a new array reference to ensure React detects the change
    this.listeners.forEach(listener => listener([...this.toasts]));
  }

  // Add a new toast
  private addToast(type: ToastType, message: string, options: ToastOptions = {}): void {
    const globalConfig = toastConfig.getConfig();
    
    const toast: ToastConfig = {
      id: `toast-${++this.idCounter}`,
      type,
      message,
      timestamp: Date.now(),
      duration: options.duration ?? globalConfig.defaultDuration ?? 3000,
      position: options.position ?? globalConfig.defaultPosition ?? 'top',
      animationType: options.animationType ?? globalConfig.defaultAnimationType ?? 'slide',
      theme: options.theme ?? globalConfig.theme ?? 'material',
      size: options.size ?? globalConfig.size ?? 'md',
      customStyles: options.customStyles ?? globalConfig.customStyles,
    };

    console.log('ToastManager: Adding toast', toast.id, toast.message);
    this.toasts.push(toast);
    this.notify();

    // Note: Auto-removal is now handled by the ToastItem component
    // to ensure proper exit animations
  }

  // Remove a toast by ID
  removeToast(id: string): void {
    console.log('ToastManager: Removing toast', id);
    const index = this.toasts.findIndex(toast => toast.id === id);
    if (index > -1) {
      this.toasts.splice(index, 1);
      console.log('ToastManager: Toast removed, remaining:', this.toasts.length);
      this.notify();
    } else {
      console.log('ToastManager: Toast not found for removal:', id);
    }
  }

  // Clear all toasts
  clearAll(): void {
    this.toasts = [];
    this.notify();
  }

  // Public methods for different toast types
  success(message: string, options?: ToastOptions): void {
    this.addToast('success', message, options);
  }

  error(message: string, options?: ToastOptions): void {
    this.addToast('error', message, options);
  }

  info(message: string, options?: ToastOptions): void {
    this.addToast('info', message, options);
  }

  warning(message: string, options?: ToastOptions): void {
    this.addToast('warning', message, options);
  }
}

// Create singleton instance
export const toastManager = new ToastManager(); 