---
title: "Installing Aurras"
description: "Get Aurras up and running on your system in just a few minutes. Aurras supports Linux, macOS, and Windows with multiple installation methods."
publishDate: "2025-06-09T00:00:00Z"
seriesId: "aurras-docs"
orderInSeries: 1
tags: ["aurras", "installation", "setup", "docs"]
draft: false
---

# Prerequisites

**Python 3.12 or newer**: Aurras is built on Python 3.12+ and requires this version for proper functionality. You can download the latest version of Python from the [official Python website](https://www.python.org/).

## System Requirements
- **Python**: 3.12 or newer (required)
- **OS**: Linux, macOS, or Windows 10+
- **RAM**: 512 MB available memory (1GB recommended for large libraries)
- **Storage**: 50 MB free disk space
- **Audio**: Any audio output device

# Installation Methods

## Recommended: Python Package Index (pip)

This is the most universal method and is recommended for all users:

### Windows
No additional dependencies required. Aurras comes bundled with all necessary MPV components.

```bash
pip install aurras
```

### Linux & macOS
Install MPV first, then Aurras:

```bash
# Install MPV (choose your platform)
# Ubuntu/Debian
sudo apt update && sudo apt install mpv

# Arch Linux
sudo pacman -S mpv

# Fedora/RHEL
sudo dnf install mpv

# macOS (via Homebrew)
brew install mpv

# Install Aurras
pip install aurras
```

## Alternative Installation Methods

### Arch User Repository (AUR) - Arch Linux Only
```bash
yay -S aurras
```

### Homebrew - macOS Only
```bash
brew install aurras
```

### Chocolatey - Windows Only
```bash
choco install aurras
```

## Development Installation

For contributors and developers:

```bash
# Clone the repository
git clone https://github.com/vedant-asati03/Aurras.git
cd Aurras

# Setup the development environment
python setup_dev_env.py

# Launch in development mode
aurras --help
```

For comprehensive guidelines on contributing to Aurras, please refer to our [Contributing Guide](https://github.com/vedant-asati03/Aurras/blob/main/CONTRIBUTING.md).

> **Technical Note**: Aurras requires `libmpv` (MPV's shared library) for audio playback. Installing the `mpv` package provides both the executable and the required `libmpv` library that Aurras uses through python-mpv bindings.

# Post-Installation Setup

## 1. First Run
After installation, run Aurras for the first time:

```bash
aurras
```

On first launch, Aurras will:
- Create configuration directories
- Scan for audio devices
- Set up default settings
- Create a sample configuration file

## 2. Configuration Directory
Aurras stores its configuration in:
- **Linux/macOS**: `~/.config/aurras/`
- **Windows**: `%APPDATA%\Aurras\`

## 3. Audio System Setup

### Linux (ALSA/PulseAudio)
```bash
# Check audio devices
aurras --list-devices

# If you have issues, install additional audio libraries
sudo apt install libasound2-plugins pulseaudio-utils  # Ubuntu/Debian
sudo dnf install alsa-plugins-pulseaudio              # Fedora
```

### macOS (CoreAudio)
No additional setup required. Aurras automatically detects available audio devices.

### Windows (WASAPI)
Ensure your audio drivers are up to date. Aurras works with any Windows-compatible audio device.

# Verification

Test your installation:

```bash
# Check version
aurras --version

# List available audio devices
aurras --list-devices

# Run with a test file (if you have audio files)
aurras /path/to/music/file.mp3

# Check help for all commands
aurras --help
```

# Troubleshooting Installation

## Common Issues

### "Command not found" error
- **Cause**: Aurras not in system PATH
- **Solution**: Add the installation directory to your PATH environment variable

### Audio device errors on Linux
- **Cause**: Missing audio libraries or permissions
- **Solution**: 
  ```bash
  # Add user to audio group
  sudo usermod -a -G audio $USER
  
  # Install missing libraries
  sudo apt install libasound2-dev pulseaudio
  ```

### Permission denied on macOS
- **Cause**: macOS security restrictions
- **Solution**: 
  ```bash
  # Remove quarantine attribute
  xattr -d com.apple.quarantine /usr/local/bin/aurras
  ```

### Windows antivirus blocking
- **Cause**: False positive detection
- **Solution**: Add Aurras to your antivirus whitelist

## Getting Help

If you encounter issues:

1. **Check the logs**: `aurras --log-level debug`
2. **Visit our troubleshooting guide**: [Troubleshooting](/series/aurras-docs)
3. **Ask for help**: 
   - [GitHub Issues](https://github.com/vedant-asati03/Aurras/issues)
   - [Discord Community](https://discord.gg/QDJqZneMVB)

# Next Steps

Now that Aurras is installed, you're ready to:

1. **[Quick Start Guide](/posts/aurras-quick-start)** - Get playing music in 2 minutes
2. **[Basic Usage](/posts/aurras-basic-usage)** - Learn the essential commands and controls
3. **[Troubleshooting Guide](/posts/aurras-troubleshooting)** - Solve common issues and optimize your experience

---

**Installation complete!** 🎵 Ready to experience music in your terminal like never before.
