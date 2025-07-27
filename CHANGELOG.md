# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.2] - 2024-01-XX

### 🎨 Added
- **Material You Theme** - Modern Android 15 inspired design with pill-shaped toasts
- **Neobrutalist Theme** - Bold, vibrant design with sharp shadows and high contrast
- **6 Responsive Sizes** - xs, sm, md, lg, xl, 2xl with theme-specific configurations
- **Dual Configuration** - Configure via props or global settings
- **Cross-platform Shadows** - Custom implementation for consistent appearance
- **GitHub Actions CI/CD** - Automated testing, building, and publishing
- **Automated Releases** - GitHub releases created automatically on npm publish

### 🔧 Changed
- **Complete TypeScript rewrite** with comprehensive type definitions
- **Enhanced API** for better developer experience
- **Improved documentation** with comprehensive examples
- **Better error handling** and memory management
- **Optimized animations** using native drivers for 60fps performance

### 🚀 Breaking Changes
- Complete API redesign (migration guide in README)
- New theme system replaces old styling approach
- Enhanced size system with responsive configurations
- Renamed package from `toastee` to `expo-toastee`

### 📦 Technical
- Bun integration for faster development and builds
- Smart toast management with proper queue handling
- Memory optimization with automatic cleanup
- Cross-platform shadow implementation
- Enhanced TypeScript support

## [1.0.0] - 2024-01-XX (Legacy)

### Added
- Basic toast functionality
- Simple theming support
- TypeScript definitions

---

## Release Notes Template

When creating new releases, use this template:

```markdown
## [X.X.X] - YYYY-MM-DD

### 🎨 Added
- New features

### 🔧 Changed  
- Modified features

### 🐛 Fixed
- Bug fixes

### 🚀 Breaking Changes
- Breaking changes

### 📦 Technical
- Internal improvements
``` 