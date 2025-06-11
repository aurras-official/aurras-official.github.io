---
title: "Troubleshooting Guide"
description: "Having issues with Aurras? This comprehensive troubleshooting guide will help you diagnose and fix common problems based on real user experiences and solutions."
publishDate: "2025-06-09T00:00:00Z"
seriesId: "aurras-user-docs"
orderInSeries: 5
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

### Python Version Problems

**Problem**: Installation fails due to Python version

**Solutions**:
```bash
# Check Python version
python --version
python3 --version

# Ensure Python 3.12+
# Install via pyenv if needed
pyenv install 3.12.0
pyenv global 3.12.0
```

### Permission Errors

**Problem**: Installation blocked by permissions

**Solutions**:
```bash
# Install user-level (recommended)
pip install --user aurras

# Use virtual environment
python -m venv aurras-env
source aurras-env/bin/activate
pip install aurras
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

## Search & Discovery Issues

### No Search Results

**Problem**: Search returns no results despite valid queries

**Solutions**:

1. **Check network connectivity**:
   - Verify internet connection
   - Try basic connectivity tests

2. **Simplify search terms**:
   ```bash
   # Instead of full titles, try key words
   "bohemian rhapsody" instead of "bohemian rhapsody remastered 2011"
   
   # Use artist names
   "queen" or "freddie mercury"
   ```

3. **Try alternative search methods**:
   ```bash
   # Use different keywords
   "thunderstruck" vs "thunder struck"
   
   # Include genre or era
   "80s rock hits"
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

## Audio Issues

### No Audio Output

**Problem**: No sound from Aurras

**Solutions**:

1. **Check system audio**:
   - Verify other applications produce sound
   - Check system volume levels
   - Test different audio devices

2. **Check Aurras audio settings**:
   ```bash
   # List available audio devices
   aurras --list-audio-devices
   
   # Set specific output device
   aurras config set audio.device "device_name"
   ```

3. **Audio driver issues**:
   ```bash
   # Try different audio backend
   aurras config set audio.backend pulse  # Linux
   aurras config set audio.backend coreaudio  # macOS
   aurras config set audio.backend wasapi  # Windows
   ```

### Audio Quality Issues

**Problem**: Poor audio quality, crackling, or distortion

**Solutions**:

1. **Adjust buffer settings**:
   ```bash
   # Increase buffer size for stability
   aurras config set audio.buffer_size 4096
   
   # Adjust latency
   aurras config set audio.latency 200ms
   ```

2. **Check sample rate**:
   ```bash
   # Auto-detect format (default)
   aurras config set audio.auto_format true
   
   # Or set manually
   aurras config set audio.sample_rate 44100
   aurras config set audio.bit_depth 16
   ```

## Performance Issues

### High CPU Usage

**Problem**: Aurras using too much CPU

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

## Configuration Issues

### Settings Not Saving

**Problem**: Configuration changes don't persist

**Solutions**:
```bash
# Check config directory permissions
ls -la ~/.config/aurras/

# Fix permissions
chmod 755 ~/.config/aurras/
chmod 644 ~/.config/aurras/config.toml

# Reset configuration
aurras config reset

# Or delete and recreate
rm -rf ~/.config/aurras/
aurras  # Will recreate default config
```

### Config File Corrupted

**Problem**: Invalid syntax or corrupted config

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

## Prevention Tips

### Best Practices

1. **Regular backups**:
   ```bash
   # Enable automatic backups (default: every 24 hours)
   aurras backup --create
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
3. **Documentation**: [Complete docs](/series/aurras-user-docs)

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

---

**Still having issues?** Don't hesitate to reach out to our community for help! 🎵
