---
title: "Installing Aurras"
description: "Step-by-step guide to install Aurras terminal music player on Linux, macOS, and Windows"
publishDate: "2025-06-09T00:00:00Z"
seriesId: "aurras-docs"
orderInSeries: 1
tags: ["aurras", "installation", "setup", "docs"]
draft: false
---

# Installing Aurras

Get Aurras up and running on your system in just a few minutes. Aurras supports Linux, macOS, and Windows with multiple installation methods.

## System Requirements

### Minimum Requirements
- **OS**: Linux (Ubuntu 18.04+), macOS (10.14+), or Windows 10+
- **RAM**: 512 MB available memory
- **Storage**: 50 MB free disk space
- **Audio**: Any audio output device

### Recommended Requirements
- **RAM**: 1 GB available memory (for large music libraries)
- **Storage**: 100 MB free disk space
- **Audio**: High-quality audio interface for best experience

## Installation Methods

### Option 1: Download Pre-built Binaries (Recommended)

The easiest way to install Aurras is using our pre-compiled binaries:

#### Linux
```bash
# Download the latest release
curl -LO https://github.com/vedant-asati03/Aurras/releases/latest/download/aurras-linux-x64.tar.gz

# Extract the archive
tar -xzf aurras-linux-x64.tar.gz

# Move to system PATH
sudo mv aurras /usr/local/bin/

# Make executable
sudo chmod +x /usr/local/bin/aurras

# Verify installation
aurras --version
```

#### macOS
```bash
# Using Homebrew (recommended)
brew tap vedant-asati03/aurras
brew install aurras

# Or download manually
curl -LO https://github.com/vedant-asati03/Aurras/releases/latest/download/aurras-macos-x64.tar.gz
tar -xzf aurras-macos-x64.tar.gz
sudo mv aurras /usr/local/bin/
aurras --version
```

#### Windows
1. Download `aurras-windows-x64.zip` from the [releases page](https://github.com/vedant-asati03/Aurras/releases/latest)
2. Extract the zip file to a folder (e.g., `C:\Program Files\Aurras\`)
3. Add the folder to your system PATH
4. Open Command Prompt or PowerShell and run `aurras --version`

### Option 2: Package Managers

#### Arch Linux (AUR)
```bash
# Using yay
yay -S aurras

# Using paru
paru -S aurras
```

#### Ubuntu/Debian
```bash
# Add our repository
curl -fsSL https://apt.aurras.dev/gpg | sudo apt-key add -
echo "deb https://apt.aurras.dev/ubuntu $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/aurras.list

# Install
sudo apt update
sudo apt install aurras
```

#### Fedora/CentOS/RHEL
```bash
# Add repository
sudo dnf config-manager --add-repo https://rpm.aurras.dev/fedora/aurras.repo

# Install
sudo dnf install aurras
```

### Option 3: Build from Source

For the latest features or custom builds:

#### Prerequisites
- **Rust**: 1.70.0 or later
- **Git**: Any recent version
- **System libraries**: 
  - Linux: `libasound2-dev`, `pkg-config`
  - macOS: Xcode Command Line Tools
  - Windows: Visual Studio Build Tools

#### Build Steps
```bash
# Clone the repository
git clone https://github.com/vedant-asati03/Aurras.git
cd Aurras

# Build release version
cargo build --release

# Install to system PATH
cargo install --path .

# Verify installation
aurras --version
```

## Post-Installation Setup

### 1. First Run
After installation, run Aurras for the first time:

```bash
aurras
```

On first launch, Aurras will:
- Create configuration directories
- Scan for audio devices
- Set up default settings
- Create a sample configuration file

### 2. Configuration Directory
Aurras stores its configuration in:
- **Linux/macOS**: `~/.config/aurras/`
- **Windows**: `%APPDATA%\Aurras\`

### 3. Audio System Setup

#### Linux (ALSA/PulseAudio)
```bash
# Check audio devices
aurras --list-devices

# If you have issues, install additional audio libraries
sudo apt install libasound2-plugins pulseaudio-utils  # Ubuntu/Debian
sudo dnf install alsa-plugins-pulseaudio              # Fedora
```

#### macOS (CoreAudio)
No additional setup required. Aurras automatically detects available audio devices.

#### Windows (WASAPI)
Ensure your audio drivers are up to date. Aurras works with any Windows-compatible audio device.

## Verification

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

## Troubleshooting Installation

### Common Issues

#### "Command not found" error
- **Cause**: Aurras not in system PATH
- **Solution**: Add the installation directory to your PATH environment variable

#### Audio device errors on Linux
- **Cause**: Missing audio libraries or permissions
- **Solution**: 
  ```bash
  # Add user to audio group
  sudo usermod -a -G audio $USER
  
  # Install missing libraries
  sudo apt install libasound2-dev pulseaudio
  ```

#### Permission denied on macOS
- **Cause**: macOS security restrictions
- **Solution**: 
  ```bash
  # Remove quarantine attribute
  xattr -d com.apple.quarantine /usr/local/bin/aurras
  ```

#### Windows antivirus blocking
- **Cause**: False positive detection
- **Solution**: Add Aurras to your antivirus whitelist

### Getting Help

If you encounter issues:

1. **Check the logs**: `aurras --log-level debug`
2. **Visit our troubleshooting guide**: [Troubleshooting](/series/aurras-docs)
3. **Ask for help**: 
   - [GitHub Issues](https://github.com/vedant-asati03/Aurras/issues)
   - [Discord Community](https://discord.gg/QDJqZneMVB)

## Next Steps

Now that Aurras is installed, you're ready to:

1. **[Quick Start Guide](/posts/aurras-quick-start)** - Get playing music in 2 minutes
2. **[Basic Usage](/posts/aurras-basic-usage)** - Learn the essential commands and controls
3. **[Configuration](/posts/aurras-configuration)** - Customize Aurras to your preferences

---

**Installation complete!** 🎵 Ready to experience music in your terminal like never before.
