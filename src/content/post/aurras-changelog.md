---
title: "Aurras Changelog & Release Notes"
description: "Track the evolution of Aurras with detailed release notes, new features, bug fixes, and improvements in each version."
publishDate: "2025-06-11T00:00:00Z"
seriesId: "aurras-project"
orderInSeries: 2
tags: ["aurras", "changelog", "releases", "updates", "project"]
draft: false
---

# Release History

Stay up to date with the latest Aurras releases, new features, and improvements.

## Version 1.1.1 (Current) - June 2025

### 🎵 New Features
- **Real-time synced lyrics** with automatic synchronization
- **Smart playlists** with advanced criteria filtering
- **Audio effects** including equalizer, reverb, and chorus
- **10 new themes** including Galaxy, Cyberpunk, and Ocean
- **Plugin system** for community extensions

### 🔧 Improvements
- Enhanced performance with 50% faster library scanning
- Improved memory usage for large music libraries
- Better audio format support including DSD and MQA
- Refined user interface with smoother animations
- Enhanced search with fuzzy matching and filters

### 🐛 Bug Fixes
- Fixed audio crackling on certain Linux distributions
- Resolved playlist synchronization issues
- Fixed theme switching not applying to all UI elements
- Corrected metadata detection for various file formats
- Fixed high CPU usage during visualization rendering

### 🔄 Breaking Changes
- Configuration file format updated (automatic migration provided)
- Some command-line arguments renamed for consistency
- Plugin API updated (existing plugins need updates)

## Version 1.0.0 - May 2025

### 🎉 Initial Release
- Core music playback functionality
- Terminal user interface with basic themes
- Playlist management and organization
- Local music library support
- Basic search and filtering
- Cross-platform support (Linux, macOS, Windows)

### 📦 Installation Methods
- PyPI package distribution
- Direct binary downloads
- Source installation support

### 🎨 Interface Features
- Clean, intuitive terminal interface
- Real-time spectrum visualizer
- Progress bars and status indicators
- Keyboard shortcut system

## Upcoming Features (Roadmap)

### Version 1.2.0 (Planned - July 2025)
- **Cloud streaming integration** (Spotify, Apple Music)
- **Voice control** with wake word detection
- **Collaborative playlists** for shared music sessions
- **Mobile companion app** for remote control
- **AI-powered recommendations** based on listening habits

### Version 1.3.0 (Planned - August 2025)
- **Spatial audio support** with head tracking
- **DJ mode** with crossfading and beat matching
- **Live streaming** capabilities
- **Advanced analytics** and listening insights
- **Community features** for music discovery

### Long-term Vision
- **VR/AR integration** for immersive music experiences
- **Machine learning** for personalized audio enhancement
- **Ecosystem expansion** with hardware partnerships
- **Professional audio tools** for content creators

## Migration Guides

### Upgrading from 1.0.x to 1.1.x

**Configuration Migration:**
```bash
# Automatic migration
aurras config migrate

# Manual backup (recommended)
cp ~/.config/aurras/config.toml ~/.config/aurras/config.toml.backup
```

**Plugin Updates:**
```bash
# Update all plugins
aurras plugin update-all

# List outdated plugins
aurras plugin list --outdated
```

### Breaking Changes Timeline

- **June 2025**: Configuration format update
- **July 2025**: Plugin API v2.0
- **August 2025**: Command structure optimization

## Download & Installation

### Latest Stable (1.1.1)
```bash
# Via pip
pip install aurras==1.1.1

# Direct download
curl -L https://github.com/vedant-asati03/Aurras/releases/download/v1.1.1/aurras -o aurras
chmod +x aurras
```

### Development Version
```bash
# For testing latest features
pip install --pre aurras

# From source
git clone https://github.com/vedant-asati03/Aurras.git
cd Aurras
python setup_dev_env.py
```

## Community Contributions

Special thanks to our contributors in this release:
- Bug reports and feature requests from the community
- Translation improvements
- Documentation enhancements
- Plugin development

## Support & Feedback

### Reporting Issues
- [GitHub Issues](https://github.com/vedant-asati03/Aurras/issues) for bugs and feature requests
- [Discussions](https://github.com/vedant-asati03/Aurras/discussions) for general questions
- [Discord Community](https://discord.gg/QDJqZneMVB) for real-time support

### Release Notifications
- **GitHub**: Watch the repository for release notifications
- **Social**: Follow [@aurras_player](https://twitter.com/aurras_player) for updates
- **RSS**: Subscribe to our [release feed](/rss.xml)

---

**Want to contribute to the next release?** Check out our [Contributing Guide](/posts/aurras-contributing) and [open issues](https://github.com/vedant-asati03/Aurras/issues) to get started!
