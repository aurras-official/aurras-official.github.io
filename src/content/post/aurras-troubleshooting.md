---
title: "Troubleshooting Guide"
description: "Having issues with Aurras? This comprehensive troubleshooting guide will help you diagnose and fix common problems based on real user experiences and solutions."
publishDate: "2025-06-09T00:00:00Z"
seriesId: "aurras-docs"
orderInSeries: 4
tags: ["aurras", "troubleshooting", "support", "debugging", "docs"]
draft: false
---

# Quick Diagnostics

### Check System Status
```bash
# Verify Aurras installation
aurras --version

# Get help with all available commands
aurras --help

# Check application status
aurras self --version

# View dependency information
aurras self --check-dependencies
```

### Enable Debug Information
```bash
# Get detailed error information
aurras --verbose

# Check cache and download status
aurras cache

# View listening history for pattern analysis
aurras history
```

## Installation Issues

### MPV or libmpv Not Found

**Problem**: `mpv or libmpv not found` error when starting Aurras

This is the most common issue and varies by platform:

#### Windows Users
**Solution**: Aurras includes bundled MPV DLLs for Windows, so this error shouldn't occur.

If you still see MPV-related errors:
```bash
# Force reinstall to get fresh bundled libraries
pip install --upgrade --force-reinstall aurras
```

#### Linux Users
**Problem**: Missing MPV installation

**Solution**: Install MPV via your package manager:
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install mpv

# Fedora/RHEL
sudo dnf install mpv

# Arch Linux
sudo pacman -S mpv

# Verify installation
mpv --version
```

#### macOS Users
**Problem**: Missing MPV installation

**Solution**: Install MPV via Homebrew:
```bash
# Install Homebrew if not present
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install MPV
brew install mpv

# Verify installation
mpv --version
```

**Technical Note**: Aurras uses python-mpv bindings which require `libmpv` (the shared library). Installing the `mpv` package provides both the executable and the required `libmpv.so` (Linux) / `libmpv.dylib` (macOS) that Aurras needs.

### Python Version Compatibility

**Problem**: `aurras` command not working after installation

**Causes & Solutions**:

1. **Python version too old**:
   ```bash
   # Check Python version (requires 3.12+)
   python --version
   python3 --version
   
   # Install Python 3.12 or newer from python.org
   # Or use package manager:
   
   # Ubuntu (requires adding deadsnakes PPA)
   sudo add-apt-repository ppa:deadsnakes/ppa
   sudo apt update
   sudo apt install python3.12
   
   # macOS
   brew install python@3.12
   ```

2. **Installation to wrong Python environment**:
   ```bash
   # Install with specific Python version
   python3.12 -m pip install aurras
   
   # Or create virtual environment
   python3.12 -m venv aurras-env
   source aurras-env/bin/activate
   pip install aurras
   ```

3. **PATH issues**:
   ```bash
   # Check if aurras is in PATH
   which aurras
   
   # If not found, check where pip installed it
   python3 -m pip show -f aurras
   
   # Add pip install location to PATH
   export PATH="$PATH:$(python3 -m site --user-base)/bin"
   ```

### Package Installation Issues

**Problem**: `pip install aurras` fails

**Solutions**:

1. **Upgrade pip first**:
   ```bash
   python3 -m pip install --upgrade pip
   pip install aurras
   ```

2. **Clear pip cache**:
   ```bash
   pip cache purge
   pip install aurras
   ```

3. **Install from specific index**:
   ```bash
   pip install --index-url https://pypi.org/simple/ aurras
   ```

4. **Use alternative installation methods**:
   ```bash
   # AUR (Arch Linux)
   yay -S aurras
   
   # Homebrew (macOS)
   brew install aurras
   
   # Chocolatey (Windows)
   choco install aurras
   ```

## Playback Issues

### Display Information Not Updating

**Problem**: The player's display freezes or fails to update song progress and information

This is a common issue related to network connectivity:

**Primary Causes**:
1. Slow internet connection
2. Network instability
3. Temporary loading issues

**Solutions**:

1. **Try replaying the song**:
   ```bash
   # Stop current playback
   q
   
   # Search and play the song again
   aurras "song name artist"
   ```

2. **Check your internet connection**:
   - Test with other applications
   - Try switching to different network (mobile hotspot, etc.)
   - Wait for connection to stabilize

3. **Use offline mode if available**:
   ```bash
   # Switch to downloaded music
   aurras offline
   
   # Or use shorthand
   o
   ```

4. **Clear cache and retry**:
   ```bash
   # Check current cache status
   aurras cache
   
   # Clean up cache
   aurras cleanup
   
   # Try playing again
   ```

### Songs Won't Play or Take Long to Load

**Problem**: Songs don't start playing or have long loading times

**Solutions**:

1. **Check network connection**:
   - Ensure stable internet for YouTube streaming
   - Test with different networks

2. **Try different search terms**:
   ```bash
   # Be more specific with artist name
   "bohemian rhapsody queen"
   
   # Try alternate spellings or shorter titles
   "hotel california eagles"
   ```

3. **Switch to offline mode**:
   ```bash
   # Use downloaded music for instant playback
   aurras offline
   ```

4. **Download frequently played songs**:
   ```bash
   # Download current song for future offline use
   download
   
   # Or use shorthand
   d
   ```

### Audio Quality Issues

**Problem**: Poor audio quality or distorted sound

**Solutions**:

1. **Check internet speed**:
   - Slow connections may cause quality reduction
   - YouTube automatically adjusts quality based on connection

2. **Download for better quality**:
   ```bash
   # Download songs for highest available quality
   download "song name"
   
   # Download with specific format/quality
   downloadp "playlist name" --format flac --bitrate 320k
   ```

3. **Check system audio settings**:
   - Ensure system volume is appropriate
   - Check for audio enhancements or equalizers

## Search & Discovery Issues

### No Search Results

**Problem**: Search returns no results or wrong songs

**Solutions**:

1. **Improve search specificity**:
   ```bash
   # Include artist name
   "imagine dragons believer"
   
   # Use distinctive keywords
   "stairway to heaven led zeppelin"
   
   # Try partial matches
   "bohemian rhapsody"
   ```

2. **Check spelling and try variations**:
   ```bash
   # Try different spellings
   "gray" vs "grey"
   "color" vs "colour"
   
   # Use common abbreviations
   "ac dc" instead of "AC/DC"
   ```

3. **Use search history**:
   ```bash
   # Navigate previous searches with arrows
   ↑  # Previous search
   ↓  # Next search
   ```

4. **Clear search history if corrupted**:
   ```bash
   aurras clear
   ```

### Wrong Song Playing

**Problem**: Search returns incorrect song or version

**Solutions**:

1. **Be more specific**:
   ```bash
   # Add more context
   "thunderstruck acdc live"
   "imagine dragons radioactive original"
   ```

2. **Include album information**:
   ```bash
   "hotel california eagles hell freezes over"
   "bohemian rhapsody queen night opera"
   ```

3. **Try different keywords**:
   ```bash
   # Use alternative terms
   "christmas song" vs "holiday music"
   "rock song" vs "rock ballad"
   ```

## Download Issues

### Download Failures

**Problem**: Downloads fail or are incomplete

**Solutions**:

1. **Check internet connection**:
   - Ensure stable connection for large downloads
   - Consider downloading during off-peak hours

2. **Verify storage space**:
   ```bash
   # Check available space
   df -h  # Linux/macOS
   
   # Check Aurras cache location
   aurras cache
   ```

3. **Retry download**:
   ```bash
   # Try downloading again
   download "song name"
   
   # Download playlist in smaller batches
   # Instead of entire playlist, download individual songs
   ```

4. **Clear cache and retry**:
   ```bash
   aurras cleanup
   download "song name"
   ```

### Slow Download Speeds

**Problem**: Downloads are very slow

**Solutions**:

1. **Check network speed**:
   - Test with speed test tools
   - Consider downloading during off-peak hours

2. **Download one at a time**:
   - Avoid downloading multiple songs simultaneously
   - Focus on most important songs first

3. **Use lower quality temporarily**:
   ```bash
   # Download with lower bitrate for faster speed
   download "song name" --bitrate 128k
   ```

## Playlist Management Issues

### Playlist Import Failures

**Problem**: Spotify playlist import not working

**Solutions**:

1. **Setup Spotify integration**:
   ```bash
   # Run Spotify setup wizard
   aurras setup
   
   # Or use in interactive mode
   aurras
   > setup
   ```

2. **Check OAuth authentication**:
   - Follow the browser-based authentication flow
   - Ensure you grant necessary permissions
   - Verify Spotify credentials

3. **Retry import**:
   ```bash
   # Import all playlists
   import
   
   # Import specific playlist
   import "playlist name"
   ```

### Playlist Not Found

**Problem**: Created playlists don't appear or can't be accessed

**Solutions**:

1. **Check playlist names**:
   ```bash
   # List all playlists
   view
   
   # Use exact names (fuzzy matching available)
   playlist "My Favorites"
   ```

2. **Use fuzzy name matching**:
   ```bash
   # Aurras can find playlists with typos
   "My Favrites" → finds "My Favorites"
   "wrk out" → finds "Workout Mix"
   ```

3. **Check database integrity**:
   ```bash
   # Clear corrupted data and reimport
   aurras backup --create  # Backup first
   # Then clear and recreate playlists
   ```

## Performance Issues

### High Memory Usage

**Problem**: Aurras consuming too much memory

**Solutions**:

1. **Limit cache size**:
   ```bash
   # Check current cache usage
   aurras cache
   
   # Clean up old cache files
   aurras cleanup
   ```

2. **Use offline mode more**:
   ```bash
   # Offline mode uses less memory for streaming
   aurras offline
   ```

3. **Restart Aurras periodically**:
   - Exit with `q` and restart
   - Clears temporary memory usage

### Slow Performance

**Problem**: Aurras feels sluggish or unresponsive

**Solutions**:

1. **Check system resources**:
   ```bash
   # Monitor CPU and memory usage
   top
   htop
   ```

2. **Close other applications**:
   - Free up system resources
   - Close unnecessary browser tabs
   - Exit other music applications

3. **Use command shortcuts**:
   ```bash
   # Use single letters instead of full commands
   d           # instead of "download"
   o           # instead of "offline"
   h           # instead of "history"
   ```

## Configuration Issues

### Settings Not Persisting

**Problem**: Settings reset after restart

**Solutions**:

1. **Check configuration location**:
   ```bash
   # Settings stored at ~/.aurras/config/settings.yaml
   ls -la ~/.aurras/config/
   ```

2. **Verify write permissions**:
   ```bash
   # Ensure Aurras can write to config directory
   chmod 755 ~/.aurras/
   chmod 644 ~/.aurras/config/settings.yaml
   ```

3. **Reset to defaults if corrupted**:
   ```bash
   aurras settings --reset
   ```

### Theme Issues

**Problem**: Themes not switching or displaying incorrectly

**Solutions**:

1. **Try different themes**:
   ```bash
   # Cycle through themes during playback
   t
   
   # Set specific theme
   > theme cyberpunk
   > theme ocean
   ```

2. **Check terminal compatibility**:
   - Ensure terminal supports color
   - Try different terminal applications
   - Update terminal if needed

3. **Reset theme settings**:
   ```bash
   # Switch to default theme
   > theme galaxy
   ```

## Backup & Recovery Issues

### Backup Creation Failed

**Problem**: Cannot create backups

**Solutions**:

1. **Check storage space**:
   ```bash
   # Verify available space for backups
   df -h ~/.local/share/aurras/backup  # Linux
   df -h ~/Library/Application\ Support/aurras/backup  # macOS
   ```

2. **Check permissions**:
   ```bash
   # Ensure write access to backup directory
   chmod 755 ~/.local/share/aurras/backup
   ```

3. **Manual backup**:
   ```bash
   # Copy important files manually
   cp -r ~/.aurras/config ~/backup/aurras-config
   cp -r ~/.aurras/playlists ~/backup/aurras-playlists
   ```

### Restore Failed

**Problem**: Cannot restore from backup

**Solutions**:

1. **List available backups**:
   ```bash
   aurras backup
   ```

2. **Check backup integrity**:
   ```bash
   # Verify backup files exist and are readable
   ls -la ~/.local/share/aurras/backup/
   ```

3. **Partial restore**:
   - Manually copy specific files from backup
   - Restore individual components instead of full backup

## Network & Connectivity Issues

### YouTube Access Problems

**Problem**: Cannot access YouTube or frequent streaming errors

**Solutions**:

1. **Check YouTube accessibility**:
   - Verify YouTube works in browser
   - Check for regional restrictions
   - Try different network

2. **Clear cache**:
   ```bash
   aurras cleanup
   ```

3. **Use offline mode**:
   ```bash
   # Switch to downloaded music
   aurras offline
   ```

### Spotify API Issues

**Problem**: Spotify integration not working

**Solutions**:

1. **Re-run setup**:
   ```bash
   aurras setup
   ```

2. **Check Spotify service status**:
   - Verify Spotify is accessible
   - Check Spotify developer console

3. **Clear Spotify credentials**:
   ```bash
   # Remove stored credentials and re-authenticate
   rm ~/.aurras/config/spotify_credentials.json
   aurras setup
   ```

## Getting Additional Help

### Self-Management Commands

```bash
# Check version and update status
aurras self --version

# Update Aurras to latest version
aurras self --update

# Check for missing dependencies
aurras self --check-dependencies

# Get help with self-management
aurras self --help
```

### Community Support

1. **GitHub Issues**: [Report bugs and request features](https://github.com/vedant-asati03/Aurras/issues)
2. **Discussions**: [Community discussions and Q&A](https://github.com/vedant-asati03/Aurras/discussions)
3. **Documentation**: [Complete documentation and guides](https://vedant-asati03.github.io/)

### Providing Debug Information

When reporting issues, include:

```bash
# System information
uname -a                    # Operating system
python3 --version          # Python version
mpv --version              # MPV version (Linux/macOS)

# Aurras information
aurras --version           # Aurras version
aurras cache               # Cache status
aurras self --check-dependencies  # Dependency status

# Error logs
# Run aurras with verbose output and share relevant error messages
```

### Last Resort: Complete Reset

If all else fails, you can completely reset Aurras:

**⚠️ Warning**: This will delete all your playlists, downloads, settings, and history.

```bash
# Create backup first (recommended)
aurras backup --create

# Complete uninstall and data removal
aurras self --uninstall --remove-data

# Fresh installation
pip install aurras

# Restore from backup if desired
aurras backup --restore [backup-id]
```

## Prevention Tips

### Best Practices

1. **Regular backups**:
   ```bash
   # Enable automatic backups (default: every 24 hours)
   aurras settings --set backup.enabled true
   ```

2. **Keep Aurras updated**:
   ```bash
   # Check for updates regularly
   aurras self --update
   ```

3. **Monitor cache size**:
   ```bash
   # Check cache periodically
   aurras cache
   
   # Clean up when needed
   aurras cleanup
   ```

4. **Use stable network**:
   - Download important music for offline use
   - Avoid streaming during unstable connections

5. **Organize playlists**:
   - Create themed playlists for better organization
   - Use descriptive names for easy identification

---

**Still having issues?** Don't hesitate to [open an issue](https://github.com/vedant-asati03/Aurras/issues) on GitHub or check the [discussions](https://github.com/vedant-asati03/Aurras/discussions) for community support.
   
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
