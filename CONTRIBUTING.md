# Contributing to Expo Toastee

Thank you for your interest in contributing to Expo Toastee! We welcome contributions from the community.

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/expo-toastee.git
   cd expo-toastee
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development**
   ```bash
   bun start
   ```

## Project Structure

```
expo-toastee/
├── src/
│   ├── types.ts          # TypeScript type definitions
│   ├── themes.ts         # Material You and Neobrutalist themes
│   ├── sizes.ts          # Size configurations
│   ├── ToastManager.ts   # Core toast management logic
│   ├── ToastContainer.tsx # Main toast rendering component
│   ├── ToastConfig.ts    # Global configuration management
│   ├── toast.ts          # Public toast API functions
│   └── index.ts          # Main exports
├── App.tsx               # Demo application
├── README.md
├── LICENSE
└── package.json
```

## Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow existing naming conventions
- Add JSDoc comments for public APIs
- Use Prettier for code formatting

### Themes
- Material You theme should follow Android 15 design principles
- Neobrutalist theme should maintain bold, high-contrast design
- Ensure themes work across all sizes

### Testing
- Test on iOS, Android, and Web
- Verify animations are smooth (60fps)
- Check accessibility features
- Test with different screen sizes

## Submitting Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the coding guidelines
   - Add tests if applicable
   - Update documentation

3. **Build and test**
   ```bash
   bun run build
   ```

4. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Types of Contributions

- 🐛 **Bug fixes**
- ✨ **New features**
- 📖 **Documentation improvements**
- 🎨 **Theme enhancements**
- ⚡ **Performance optimizations**
- ♿ **Accessibility improvements**

## Questions?

Feel free to open an issue for any questions or concerns! 