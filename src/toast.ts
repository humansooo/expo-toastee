import { toastManager } from './ToastManager';
import { ToastOptions } from './types';

/**
 * Toast utility functions that can be used anywhere in your app
 * These functions are NOT React hooks and can be called from components,
 * utility functions, services, etc.
 */

export const toast = {
  /**
   * Show a success toast
   * @param message - The message to display
   * @param options - Optional configuration
   */
  success: (message: string, options?: ToastOptions): void => {
    toastManager.success(message, options);
  },

  /**
   * Show an error toast
   * @param message - The message to display
   * @param options - Optional configuration
   */
  error: (message: string, options?: ToastOptions): void => {
    toastManager.error(message, options);
  },

  /**
   * Show an info toast
   * @param message - The message to display
   * @param options - Optional configuration
   */
  info: (message: string, options?: ToastOptions): void => {
    toastManager.info(message, options);
  },

  /**
   * Show a warning toast
   * @param message - The message to display
   * @param options - Optional configuration
   */
  warning: (message: string, options?: ToastOptions): void => {
    toastManager.warning(message, options);
  },

  /**
   * Remove a specific toast by ID
   * @param id - The toast ID to remove
   */
  remove: (id: string): void => {
    toastManager.removeToast(id);
  },

  /**
   * Clear all toasts
   */
  clear: (): void => {
    toastManager.clearAll();
  },
}; 