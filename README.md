# 🍞 Expo Toastee

A modern, elegant toast notification library for React Native Expo applications with Material You and Neobrutalist themes.

## Features

- ✨ **Beautiful, animated toast notifications** with smooth enter/exit animations
- 🎨 **Multiple toast types** (success, error, info, warning)
- 🎭 **Two stunning themes:**
  - **Material You**: Modern Android 15 inspired pill-shaped toasts
  - **Neobrutalist**: Bold, vibrant design with sharp shadows
- 📏 **6 responsive sizes** (xs, sm, md, lg, xl, 2xl) with theme-specific configurations
- 🎨 **Complete style customization** - override any style property
- ⚡ **Fast and lightweight** - built with performance in mind
- 🔧 **Full TypeScript support** with comprehensive type definitions
- 📱 **Cross-platform** - works perfectly on iOS, Android, and Web
- 🎯 **Flexible usage** - works in React components AND standalone utility functions
- 🔀 **Smart positioning** (top/bottom) with safe area handling
- ⏱️ **Configurable duration** with auto-dismiss and manual control
- 👆 **Interactive** - tap to dismiss, smooth animations
- ⚙️ **Dual configuration** - via props or global settings
- 🛠️ **Developer friendly** - built with Bun for faster development

## Installation

```bash
npm install expo-toastee
# or
yarn add expo-toastee
# or
bun add expo-toastee
```

## Quick Start

### 1. Add ToastContainer to your root layout

Add the `ToastContainer` component to your app's root layout (usually `App.tsx` or your main layout file):

```tsx
import React from 'react';
import { View } from 'react-native';
import { ToastContainer } from 'expo-toastee';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* Your app content */}
      
      {/* Add ToastContainer at the root level */}
      <ToastContainer />
    </View>
  );
}
```

#### Configure via Props

You can also configure the toast behavior directly through ToastContainer props:

```tsx
<ToastContainer 
  theme="neobrutalist"
  size="lg"
  defaultDuration={4000}
  defaultPosition="bottom"
  customStyles={{
    container: { borderRadius: 20 },
    text: { fontSize: 16 }
  }}
/>
```

### 2. Use toast functions anywhere

```tsx
import { toast } from 'expo-toastee';

// In a React component
const MyComponent = () => {
  const handleSuccess = () => {
    toast.success('Operation completed successfully!');
  };

  return (
    <TouchableOpacity onPress={handleSuccess}>
      <Text>Show Success Toast</Text>
    </TouchableOpacity>
  );
};

// In a utility function (non-React)
export const showToast = (msg: string) => {
  toast.success(msg, { duration: 5000 });
};

// In an async function
const saveData = async () => {
  try {
    await api.saveData();
    toast.success('Data saved successfully!');
  } catch (error) {
    toast.error('Failed to save data');
  }
};
```

## API Reference

### Toast Functions

#### `toast.success(message, options?)`
Shows a success toast with a green background.

#### `toast.error(message, options?)`
Shows an error toast with a red background.

#### `toast.info(message, options?)`
Shows an info toast with a blue background.

#### `toast.warning(message, options?)`
Shows a warning toast with an orange background.

#### `toast.clear()`
Clears all currently visible toasts.

#### `toast.remove(id)`
Removes a specific toast by its ID.

### Options

```tsx
interface ToastOptions {
  duration?: number;              // Duration in milliseconds (default: 3000)
  position?: 'top' | 'bottom';    // Position on screen (default: 'top')
  animationType?: 'fade' | 'slide'; // Animation type (default: 'slide')
  theme?: 'material' | 'neobrutalist'; // Theme selection
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'; // Size selection (default: 'md')
  customStyles?: ToastCustomStyles; // Custom style overrides
}
```

### Examples

```tsx
// Basic usage
toast.success('Hello World!');

// With custom duration
toast.error('Something went wrong!', { duration: 5000 });

// Bottom positioned toast
toast.info('Check your network connection', { 
  position: 'bottom', 
  duration: 4000 
});

// No auto-dismiss (duration: 0)
toast.warning('This will stay until manually dismissed', { duration: 0 });
```

## Theming & Customization

### Built-in Themes

Expo Toastee comes with two carefully crafted themes:

#### Material You Theme (Default)
Inspired by Android 15's Material You design:
- **Pill-shaped containers** with generous rounded corners
- **Soft, tinted backgrounds** with subtle borders  
- **Dark text on light backgrounds** for better accessibility
- **Diffuse shadows** for elegant depth
- **Responsive sizing** that adapts beautifully across all sizes

#### Neobrutalist Theme
Modern take on brutalist design:
- **Bold borders** with sharp contrast
- **Vibrant colors** that pop off the screen
- **Hard drop shadows** for dramatic effect
- **Strong typography** with confident letterforms
- **Geometric precision** in every element

### Global Theme Configuration

There are two ways to configure toast defaults:

#### Method 1: Via ToastContainer Props (Recommended)

```tsx
<ToastContainer 
  theme="neobrutalist"
  defaultDuration={4000}
  defaultPosition="bottom"
/>
```

#### Method 2: Via configureToasts Function

```tsx
import { configureToasts } from 'expo-toastee';

// Set global theme
configureToasts({
  theme: 'neobrutalist',
  defaultDuration: 4000,
  defaultPosition: 'bottom',
});

// Now all toasts will use neobrutalist theme by default
toast.success('This uses neobrutalist theme!');
```

### Per-Toast Configuration

Override theme, size, and other options for individual toasts:

```tsx
// Use neobrutalist theme with large size
toast.success('Bold message!', { 
  theme: 'neobrutalist', 
  size: 'lg' 
});

// Small error toast
toast.error('Gentle error', { 
  theme: 'material', 
  size: 'sm' 
});

// Extra large info toast
toast.info('Important announcement!', { 
  size: '2xl',
  duration: 6000 
});
```

### Custom Styles

Completely customize the appearance:

```tsx
toast.success('Custom styled!', {
  customStyles: {
    container: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: '#FF6B6B',
    },
    successContainer: {
      backgroundColor: '#FF6B6B',
    },
    successText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 18,
    },
  },
});
```

### Global Custom Styles

Set default custom styles for all toasts:

```tsx
configureToasts({
  customStyles: {
    container: {
      borderRadius: 20,
    },
    text: {
      fontSize: 16,
      fontFamily: 'MyCustomFont',
    },
  },
});
```

## Size System

Expo Toastee includes 6 responsive sizes to fit different use cases:

| Size | Width | Max Width | Font Size | Use Case |
|------|-------|-----------|-----------|----------|
| xs   | 120px | 180px     | 12px      | Compact notifications |
| sm   | 160px | 240px     | 14px      | Small alerts |
| **md** | **200px** | **300px** | **16px** | **Default size** |
| lg   | 250px | 400px     | 18px      | Important messages |
| xl   | 320px | 500px     | 20px      | Prominent notifications |
| 2xl  | 400px | 600px     | 22px      | Major announcements |

```tsx
// Different sizes
toast.success('Compact', { size: 'xs' });
toast.info('Default size'); // md is default
toast.error('Large error', { size: 'lg' });
toast.warning('Major alert!', { size: '2xl' });
```

## TypeScript Support

Expo Toastee is written in TypeScript and provides full type definitions:

```tsx
import { 
  toast, 
  ToastOptions, 
  ToastType, 
  ToastTheme,
  ToastCustomStyles,
  configureToasts 
} from 'expo-toastee';

const showCustomToast = (message: string, type: ToastType, options?: ToastOptions) => {
  switch (type) {
    case 'success':
      toast.success(message, options);
      break;
    case 'error':
      toast.error(message, options);
      break;
    // ... etc
  }
};

// Type-safe theme configuration
const themeConfig: ToastGlobalConfig = {
  theme: 'neobrutalist',
  defaultDuration: 5000,
  customStyles: {
    container: { borderRadius: 20 },
    text: { fontWeight: 'bold' },
  },
};

configureToasts(themeConfig);
```

## ToastContainer Props

The `ToastContainer` component accepts all the same options as the global configuration:

```tsx
interface ToastContainerProps {
  theme?: 'material' | 'neobrutalist';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  defaultDuration?: number;
  defaultPosition?: 'top' | 'bottom';
  defaultAnimationType?: 'fade' | 'slide';
  customStyles?: ToastCustomStyles;
}

// Example usage
<ToastContainer 
  theme="neobrutalist"
  size="lg"
  defaultDuration={5000}
  defaultPosition="bottom"
  customStyles={{
    container: { borderRadius: 12 },
    text: { fontWeight: 'bold' }
  }}
/>
```

## Advanced Usage

### Custom Toast Manager

For advanced use cases, you can access the underlying toast manager:

```tsx
import { toastManager } from 'expo-toastee';

// Subscribe to toast updates
const unsubscribe = toastManager.subscribe((toasts) => {
  console.log('Current toasts:', toasts);
});

// Don't forget to unsubscribe
unsubscribe();
```

## Performance

Expo Toastee is built with performance in mind:

- **Minimal bundle size** - Only includes what you use
- **Optimized animations** - Uses native driver for 60fps animations
- **Memory efficient** - Automatic cleanup of timers and subscriptions
- **Fast development** - Built with Bun for lightning-fast builds
- **Cross-platform shadows** - Custom shadow implementation for consistent look

## Compatibility

| Platform | Support | Notes |
|----------|---------|-------|
| iOS | ✅ Full | Native shadows, smooth animations |
| Android | ✅ Full | Custom shadow implementation |
| Web | ✅ Full | Responsive design, touch/mouse support |

**Requirements:**
- React Native 0.64+
- Expo SDK 47+
- React 17+

## Roadmap

- [ ] Icon support for toast types
- [ ] Sound notifications (optional)
- [ ] Gesture dismissal (swipe to dismiss)
- [ ] Queue management for multiple toasts
- [ ] Custom animation presets
- [ ] Theme builder/generator
- [ ] Accessibility improvements (screen reader support)

## Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📝 **Documentation**: Full API reference and examples
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-username/expo-toastee/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/your-username/expo-toastee/discussions)
- 📧 **Email**: support@expo-toastee.dev

---

**Made with ❤️ for the React Native Expo community**

If you find this package helpful, please consider:
- ⭐ **Starring the repository**
- 🐛 **Reporting bugs** 
- 💡 **Suggesting features**
- 📖 **Improving documentation**
- 🤝 **Contributing code** 