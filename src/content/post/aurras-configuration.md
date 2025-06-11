---
title: "Configuration Guide"
description: "Customize Aurras to match your workflow. Learn how to configure keybindings, themes, audio settings, and create the perfect terminal music experience."
publishDate: "2025-06-09T00:00:00Z"
seriesId: "aurras-user-docs"
orderInSeries: 4
tags: ["aurras", "configuration", "customization", "settings", "docs"]
draft: false
---

# Configuration Overview

Aurras stores its configuration in platform-specific directories:
- **Linux/macOS**: `~/.config/aurras/config.toml`
- **Windows**: `%APPDATA%\Aurras\config.toml`

## Initial Setup

On first run, Aurras creates a default configuration file. You can also generate a new one:

```bash
# Generate default config
aurras --generate-config

# Edit configuration file
aurras --edit-config
```

## Basic Configuration

### Audio Settings

```toml
[audio]
# Audio output device (auto-detected by default)
output_device = "auto"

# Default volume (0-100)
default_volume = 75

# Audio buffer size (lower = less latency, higher = more stable)
buffer_size = 4096

# Sample rate (44100, 48000, 96000)
sample_rate = 44100

# Audio quality (low, medium, high, lossless)
quality = "high"

# Enable audio normalization
normalize_audio = true

# Crossfade duration in seconds
crossfade_duration = 2.0
```

### Display Settings

```toml
[display]
# Show album artwork (requires terminal with image support)
show_artwork = true

# Artwork size in terminal cells
artwork_size = [20, 10]

# Show spectrum visualizer
show_visualizer = true

# Visualizer style (bars, wave, circle)
visualizer_style = "bars"

# Color scheme (dark, light, auto)
theme = "dark"

# Show track progress bar
show_progress = true

# Display format for track info
track_format = "{artist} - {title} ({album})"

# Update interval for display (milliseconds)
update_interval = 100
```

## Keybindings

Customize all keyboard shortcuts:

```toml
[keybindings]
# Playback controls
play_pause = "Space"
next_track = ["Right", "l"]
previous_track = ["Left", "h"]
stop = "s"

# Volume controls
volume_up = ["Up", "k", "+"]
volume_down = ["Down", "j", "-"]
mute = "m"

# Navigation
seek_forward = "Shift+Right"
seek_backward = "Shift+Left"
jump_to_start = "Home"
jump_to_end = "End"

# Playlist controls
shuffle_toggle = "z"
repeat_toggle = "r"
add_to_queue = "a"
remove_from_queue = "d"

# Library navigation
search = "/"
filter = "f"
sort = "o"

# Application
quit = ["q", "Ctrl+c"]
help = ["?", "F1"]
settings = ","
```

## Library Management

```toml
[library]
# Music directories to scan
music_directories = [
    "~/Music",
    "/mnt/external/music"
]

# File formats to include
supported_formats = [
    "mp3", "flac", "ogg", "m4a", "wav", 
    "opus", "aac", "wma", "aiff"
]

# Exclude directories
exclude_directories = [
    ".git", "temp", "cache"
]

# Scan subdirectories
recursive_scan = true

# Watch for file changes
watch_directories = true

# Metadata cache size (MB)
cache_size = 100

# Auto-organize library
auto_organize = false
organize_pattern = "{artist}/{album}/{track} - {title}"
```

## Playlist Settings

```toml
[playlists]
# Default playlist directory
playlist_directory = "~/.config/aurras/playlists"

# Auto-save current queue as playlist
auto_save_queue = true

# Default shuffle mode for new playlists
default_shuffle = false

# Smart playlist generation
enable_smart_playlists = true

# Recently played history size
history_size = 100
```

## Advanced Audio Configuration

### Equalizer Presets

```toml
[equalizer]
# Enable equalizer
enabled = false

# Default preset
default_preset = "flat"

# Custom presets
[equalizer.presets.rock]
"60Hz" = 4
"230Hz" = 2
"910Hz" = -1
"4kHz" = 3
"14kHz" = 2

[equalizer.presets.classical]
"60Hz" = 0
"230Hz" = 0
"910Hz" = 0
"4kHz" = 0
"14kHz" = 2
```

### Audio Effects

```toml
[effects]
# Reverb settings
[effects.reverb]
enabled = false
room_size = 0.3
damping = 0.5
wet_level = 0.1

# Bass boost
[effects.bass_boost]
enabled = false
frequency = 100  # Hz
gain = 3         # dB

# Dynamic range compression
[effects.compressor]
enabled = false
threshold = -20  # dB
ratio = 4.0
attack = 3       # ms
release = 100    # ms
```

## Theme Customization

### Built-in Themes

```bash
# List available themes
aurras --list-themes

# Switch theme
aurras --theme neon
```

### Custom Theme

```toml
[theme]
name = "custom"

# Color palette
[theme.colors]
background = "#1a1a1a"
foreground = "#ffffff"
accent = "#00ff88"
secondary = "#ff6b6b"
muted = "#666666"
warning = "#ffaa00"
error = "#ff4444"

# UI elements
[theme.ui]
progress_bar = "█"
progress_empty = "░"
volume_bar = "▮"
volume_empty = "▯"
```

## Performance Tuning

```toml
[performance]
# Number of worker threads
worker_threads = 4

# Memory usage limits
max_memory_mb = 512

# Prefetch next tracks
prefetch_count = 2

# Cache album artwork
cache_artwork = true

# Background processing priority
background_priority = "low"

# Disk cache settings
[performance.cache]
enabled = true
size_mb = 100
cleanup_interval = 3600  # seconds
```

## Platform-Specific Settings

### Linux/ALSA

```toml
[platform.linux]
# ALSA device
alsa_device = "default"

# PulseAudio server
pulseaudio_server = "unix:/run/user/1000/pulse/native"

# Audio latency
target_latency = 40  # milliseconds
```

### macOS/CoreAudio

```toml
[platform.macos]
# CoreAudio device
coreaudio_device = "default"

# Exclusive mode
exclusive_mode = false

# Bit-perfect playback
bit_perfect = false
```

### Windows/WASAPI

```toml
[platform.windows]
# WASAPI device
wasapi_device = "default"

# Exclusive mode
exclusive_mode = false

# Event mode
event_mode = true
```

## Configuration Validation

```bash
# Check configuration syntax
aurras --check-config

# Validate and show effective config
aurras --show-config

# Reset to defaults
aurras --reset-config

# Backup current config
aurras --backup-config
```

## Configuration Examples

### Minimal Setup (Lightweight)

```toml
[audio]
default_volume = 75
quality = "medium"

[display]
show_artwork = false
show_visualizer = false
theme = "dark"

[performance]
worker_threads = 2
max_memory_mb = 128
```

### Audiophile Setup (High Quality)

```toml
[audio]
output_device = "high_end_dac"
default_volume = 60
buffer_size = 8192
sample_rate = 96000
quality = "lossless"
normalize_audio = false

[effects.compressor]
enabled = false

[platform.linux]
target_latency = 20
```

### Party Mode (Visual Focus)

```toml
[display]
show_artwork = true
show_visualizer = true
visualizer_style = "circle"
update_interval = 50

[audio]
crossfade_duration = 5.0

[playlists]
default_shuffle = true
```

## Troubleshooting Configuration

### Common Issues

**Config file not found:**
```bash
# Recreate default config
aurras --generate-config
```

**Audio device errors:**
```bash
# List available devices
aurras --list-audio-devices

# Test audio output
aurras --test-audio
```

**Permission errors:**
```bash
# Fix config directory permissions
chmod 755 ~/.config/aurras/
chmod 644 ~/.config/aurras/config.toml
```

## Advanced Configuration Tips

1. **Multiple Configs**: Use `--config-file` to specify different config files
2. **Environment Variables**: Override settings with `AURRAS_VOLUME=50`
3. **Profile Switching**: Create config profiles for different use cases
4. **Live Reload**: Changes to config file are applied immediately (in most cases)

## Next Steps

- **[Advanced Features](/posts/aurras-advanced-features)** - Explore power user capabilities
- **[Playlist Management](/posts/aurras-playlists)** - Master playlist features
- **[Troubleshooting](/posts/aurras-troubleshooting)** - Fix configuration issues

---

⚙️ **Configuration complete!** Your Aurras setup is now perfectly tailored to your needs.
