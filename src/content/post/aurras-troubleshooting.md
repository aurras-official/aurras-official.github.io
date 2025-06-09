---
title: "Troubleshooting Guide"
description: "Solve common Aurras issues, optimize performance, and get help when things go wrong"
publishDate: "2025-06-09T00:00:00Z"
seriesId: "aurras-docs"
orderInSeries: 4
tags: ["aurras", "troubleshooting", "support", "debugging", "docs"]
draft: false
---

# Troubleshooting Guide

Having issues with Aurras? This comprehensive troubleshooting guide will help you diagnose and fix common problems.

## Quick Diagnostics

### Check System Status
```bash
# Verify Aurras installation
aurras --version

# Check audio devices
aurras --list-devices

# Test audio system
aurras --test-audio

# View configuration
aurras config show

# Check for issues
aurras --doctor
```

### Enable Debug Mode
```bash
# Run with detailed logging
aurras --log-level debug

# Save logs to file
aurras --log-file ~/aurras-debug.log

# View real-time logs
tail -f ~/.config/aurras/logs/aurras.log
```

## Installation Issues

### "Command not found" Error

**Problem**: `aurras: command not found`

**Causes & Solutions**:

1. **Not in PATH**:
   ```bash
   # Check if aurras exists
   which aurras
   
   # Add to PATH (add to ~/.bashrc or ~/.zshrc)
   export PATH="$PATH:/usr/local/bin"
   
   # Or install to standard location
   sudo mv aurras /usr/local/bin/
   ```

2. **Installation incomplete**:
   ```bash
   # Reinstall using package manager
   # Ubuntu/Debian:
   sudo apt reinstall aurras
   
   # macOS:
   brew reinstall aurras
   
   # Or download fresh binary
   curl -LO https://github.com/vedant-asati03/Aurras/releases/latest/download/aurras-linux-x64.tar.gz
   ```

### Permission Denied Errors

**Problem**: `Permission denied` when running aurras

**Solutions**:

1. **Make executable**:
   ```bash
   chmod +x /usr/local/bin/aurras
   ```

2. **macOS quarantine** (macOS only):
   ```bash
   xattr -d com.apple.quarantine /usr/local/bin/aurras
   sudo spctl --add /usr/local/bin/aurras
   ```

3. **SELinux issues** (Linux):
   ```bash
   # Check SELinux status
   sestatus
   
   # If enabled, allow aurras
   sudo setsebool -P use_execmem on
   ```

### Dependencies Missing

**Problem**: `error while loading shared libraries`

**Solutions**:

1. **Linux - Install audio libraries**:
   ```bash
   # Ubuntu/Debian
   sudo apt install libasound2-dev libpulse-dev
   
   # Fedora/CentOS
   sudo dnf install alsa-lib-devel pulseaudio-libs-devel
   
   # Arch Linux
   sudo pacman -S alsa-lib libpulse
   ```

2. **Update library cache**:
   ```bash
   sudo ldconfig
   ```

## Audio Issues

### No Audio Output

**Problem**: Aurras plays but no sound

**Diagnostic Steps**:
```bash
# 1. Check audio devices
aurras --list-devices

# 2. Test system audio
speaker-test -t wav -c 2  # Linux
afplay /System/Library/Sounds/Glass.aiff  # macOS

# 3. Check volume levels
amixer get Master  # Linux
```

**Solutions**:

1. **Wrong audio device**:
   ```bash
   # List available devices
   aurras --list-devices
   
   # Set specific device
   aurras config set audio.device "HDMI Audio"
   
   # Or use default
   aurras config set audio.device "default"
   ```

2. **Audio system conflicts**:
   ```bash
   # Linux - restart audio services
   sudo systemctl restart pulseaudio
   sudo systemctl restart alsa-state
   
   # Or kill conflicting processes
   pulseaudio --kill && pulseaudio --start
   ```

3. **Muted or low volume**:
   ```bash
   # Check Aurras volume
   aurras config get audio.volume
   
   # Set volume
   aurras config set audio.volume 80
   
   # Check system volume
   amixer set Master 80%  # Linux
   ```

### Audio Crackling/Dropouts

**Problem**: Choppy or distorted audio

**Solutions**:

1. **Increase buffer size**:
   ```bash
   aurras config set audio.buffer_size 2048
   aurras config set audio.periods 4
   ```

2. **Change audio backend**:
   ```bash
   # Try different backends
   aurras config set audio.backend alsa     # Linux
   aurras config set audio.backend pulse    # Linux
   aurras config set audio.backend jack     # Linux
   ```

3. **Reduce CPU load**:
   ```bash
   # Lower audio quality temporarily
   aurras config set audio.sample_rate 44100
   aurras config set audio.bit_depth 16
   
   # Disable visualizer
   aurras config set visualizer.enabled false
   
   # Close other audio applications
   ```

4. **System optimization**:
   ```bash
   # Linux - adjust audio scheduling
   echo '@audio - rtprio 95' | sudo tee -a /etc/security/limits.conf
   echo '@audio - memlock unlimited' | sudo tee -a /etc/security/limits.conf
   ```

### Wrong Sample Rate/Format

**Problem**: Audio sounds too fast/slow or distorted

**Solutions**:
```bash
# Check file format
aurras info /path/to/problem-file.mp3

# Force specific format
aurras config set audio.sample_rate 44100
aurras config set audio.bit_depth 16
aurras config set audio.channels 2

# Auto-detect format (default)
aurras config set audio.auto_format true
```

## Performance Issues

### High CPU Usage

**Problem**: Aurras using too much CPU

**Diagnostic**:
```bash
# Check resource usage
top -p $(pgrep aurras)
htop -p $(pgrep aurras)

# Profile Aurras
aurras --profile
```

**Solutions**:

1. **Disable expensive features**:
   ```bash
   # Disable visualizer
   aurras config set visualizer.enabled false
   
   # Reduce visualizer quality
   aurras config set visualizer.fps 30
   aurras config set visualizer.resolution 512
   
   # Disable real-time effects
   aurras config set effects.enabled false
   ```

2. **Optimize library**:
   ```bash
   # Limit library size in memory
   aurras config set library.max_tracks 10000
   
   # Disable automatic scanning
   aurras config set library.auto_scan false
   
   # Use lazy loading
   aurras config set library.lazy_load true
   ```

3. **Audio optimization**:
   ```bash
   # Lower quality for better performance
   aurras config set audio.sample_rate 44100
   aurras config set audio.bit_depth 16
   
   # Increase buffer size
   aurras config set audio.buffer_size 4096
   ```

### High Memory Usage

**Problem**: Aurras consuming too much RAM

**Solutions**:
```bash
# Limit cache size
aurras config set cache.max_size "256MB"

# Disable metadata caching for large libraries
aurras config set cache.metadata false

# Use streaming mode for network files
aurras config set playback.streaming true

# Limit concurrent file operations
aurras config set library.max_concurrent_scans 2
```

### Slow Library Scanning

**Problem**: Adding music takes too long

**Solutions**:
```bash
# Increase scan threads
aurras config set library.scan_threads 4

# Skip large files
aurras config set library.max_file_size "500MB"

# Exclude unnecessary directories
aurras config set library.exclude_paths "['.git', 'node_modules', 'Trash']"

# Use incremental scanning
aurras scan --incremental ~/Music
```

## File Format Issues

### Unsupported Format

**Problem**: "Unsupported audio format" error

**Check supported formats**:
```bash
aurras --supported-formats
```

**Solutions**:
1. **Convert files**:
   ```bash
   # Using ffmpeg
   ffmpeg -i input.m4a output.mp3
   
   # Batch convert
   for file in *.m4a; do
       ffmpeg -i "$file" "${file%.m4a}.mp3"
   done
   ```

2. **Install additional codecs**:
   ```bash
   # Ubuntu/Debian
   sudo apt install ubuntu-restricted-extras
   
   # Fedora
   sudo dnf install gstreamer1-plugins-bad-free gstreamer1-plugins-good
   
   # macOS (with Homebrew)
   brew install ffmpeg --with-all-codecs
   ```

### Corrupted Files

**Problem**: Files won't play or cause crashes

**Diagnostic**:
```bash
# Check file integrity
aurras verify /path/to/suspicious/file.mp3

# Get detailed file info
ffprobe -v error -show_format -show_streams file.mp3
```

**Solutions**:
```bash
# Attempt repair
ffmpeg -i corrupted.mp3 -c copy repaired.mp3

# Remove from library
aurras remove /path/to/corrupted/file.mp3

# Rescan library to clean up
aurras scan --cleanup
```

## Network & Streaming Issues

### Network Timeouts

**Problem**: Network streams fail or timeout

**Solutions**:
```bash
# Increase timeout values
aurras config set network.timeout 30
aurras config set network.retry_attempts 3

# Use different user agent
aurras config set network.user_agent "Aurras/2.1.0"

# Configure proxy if needed
aurras config set network.proxy "http://proxy.example.com:8080"
```

### SSL/Certificate Issues

**Problem**: HTTPS streams fail

**Solutions**:
```bash
# Update certificates
sudo apt update && sudo apt install ca-certificates  # Linux
brew install ca-certificates                         # macOS

# Disable SSL verification (not recommended)
aurras config set network.verify_ssl false

# Use alternative stream URLs
```

## Configuration Issues

### Settings Not Saving

**Problem**: Configuration changes don't persist

**Check permissions**:
```bash
# Check config directory permissions
ls -la ~/.config/aurras/

# Fix permissions
chmod 755 ~/.config/aurras/
chmod 644 ~/.config/aurras/config.toml
```

**Reset configuration**:
```bash
# Backup current config
cp ~/.config/aurras/config.toml ~/.config/aurras/config.toml.backup

# Reset to defaults
aurras config reset

# Or delete and recreate
rm -rf ~/.config/aurras/
aurras  # Will recreate default config
```

### Config File Corrupted

**Problem**: Invalid TOML syntax or corrupted config

**Solutions**:
```bash
# Validate config syntax
aurras config validate

# Show syntax errors
aurras config check

# Reset specific section
aurras config reset audio
aurras config reset interface

# Complete reset
aurras config reset --all
```

## Getting Help

### Built-in Help
```bash
# Command-line help
aurras --help
aurras config --help
aurras scan --help

# In-app help
# Press ? while Aurras is running
```

### Debug Information
```bash
# Generate debug report
aurras --debug-report > aurras-debug.txt

# System information
aurras --system-info

# Configuration dump
aurras config dump
```

### Community Support

1. **GitHub Issues**: [Report bugs and feature requests](https://github.com/vedant-asati03/Aurras/issues)
2. **Discord Community**: [Join our Discord](https://discord.gg/QDJqZneMVB)
3. **Documentation**: [Complete docs](/series/aurras-docs)

### Reporting Bugs

When reporting issues, include:

1. **System information**:
   ```bash
   aurras --system-info
   ```

2. **Debug logs**:
   ```bash
   aurras --log-level debug --log-file debug.log
   # Reproduce the issue, then attach debug.log
   ```

3. **Configuration**:
   ```bash
   aurras config dump > config-dump.txt
   ```

4. **Steps to reproduce** the issue
5. **Expected vs actual behavior**

## Emergency Recovery

### Complete Reset
```bash
# Stop Aurras
killall aurras

# Backup everything
cp -r ~/.config/aurras ~/.config/aurras.backup

# Complete removal
rm -rf ~/.config/aurras
rm -rf ~/.cache/aurras
rm -rf ~/.local/share/aurras

# Reinstall Aurras
# [Use your original installation method]

# First run will recreate default config
aurras
```

### Restore from Backup
```bash
# Stop Aurras
killall aurras

# Restore configuration
cp -r ~/.config/aurras.backup ~/.config/aurras

# Restart
aurras
```

---

**Still having issues?** Don't hesitate to reach out to our community for help! 🎵
