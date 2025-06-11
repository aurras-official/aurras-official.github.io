---
title: "Quick Start Guide"
description: "Welcome to Aurras! This guide will get you playing music in your terminal in just 2 minutes."
publishDate: "2025-06-09T00:00:00Z"
seriesId: "aurras-user-docs"
orderInSeries: 2
tags: ["aurras", "quick-start", "tutorial", "docs"]
draft: false
---

# Your First Song

### Step 1: Launch Aurras
```bash
# Install Aurras (if you haven't already)
pip install aurras

# Launch the interactive mode
aurras

# Or use command-line mode to search and play directly
aurras "bohemian rhapsody"

# For more options and features
aurras --help
```

### Step 2: Search and Play Your First Song

Aurras provides multiple ways to find and play music:

#### Option A: Direct Song Search
```bash
# Search for any song by name
aurras "song name"

# Search with artist
aurras "bohemian rhapsody queen"
```

#### Option B: Interactive Mode
1. Launch `aurras` with no arguments to enter interactive mode
2. Type your search query directly
3. Use arrow keys to navigate results
4. Press Enter to play

#### Option C: Use Commands and Shortcuts
```bash
# Download and play offline
aurras download "favorite song"

# Play from your downloaded collection
aurras offline

# View your playlists
aurras playlist
```

### Step 3: Master the Basic Controls

Once a song starts playing, you'll see the main Aurras interface with real-time synced lyrics and playback information.

## Essential Controls

### Basic Playback Controls
| Key | Action |
|-----|--------|
| `Space` | Play/Pause |
| `n` | Next song |
| `b` | Previous song |
| `l` | Toggle lyrics display |
| `q` | Quit playback |
| `↑` / `↓` | Volume up/down |
| `←` / `→` | Seek backward/forward |
| `t` | Switch themes |

### Jump Mode
Before pressing `b` or `n`, you can press any *number* to jump through that many songs:
- `5n` - Skip forward 5 songs
- `3b` - Go back 3 songs

### Command Palette & Options
| Key | Action |
|-----|--------|
| `>` | Open command palette for quick actions |
| `?` | Open options menu for feature access |

## Quick Tasks

### Download Songs for Offline Play
```bash
# Download a song for offline listening
aurras download "song name"

# Download entire playlist
aurras downloadp "playlist name"

# Play offline music
aurras offline
```

### Create and Manage Playlists
```bash
# View your playlists
aurras playlist

# Create a new playlist (it will be created when you add first song)
aurras playlist "My Favorites"

# Delete a playlist
aurras delete "playlist name"
```

### Search with Intelligence
The search bar supports:
- **Live recommendations** as you type
- **Command shortcuts** starting with `>`
- **Options menu** starting with `?`
- **History navigation** with ↑/↓ arrows

### Import Your Spotify Library
```bash
# Set up Spotify integration
aurras setup

# Import your Spotify playlists
aurras import

# Search across Spotify and local files
aurras "any song from spotify"
```

## Common Workflows

### Quick Music Discovery
```bash
# Just search and play
aurras "chill music"

# Use interactive mode for exploration
aurras
> jazz piano
```

### Building Your Collection
```bash
# Download favorites for offline
aurras download "relaxing ambient"

# Organize into playlists
aurras playlist "Study Music"
# (Add songs to playlist through interactive mode)

# Batch download playlists
aurras downloadp "Study Music"
```

### Theme Customization
```bash
# List available themes
aurras theme

# Switch to a specific theme
aurras theme cyberpunk
aurras theme galaxy
aurras theme ocean
```

## Command Line Power User Tips

### Direct Commands and Shortcuts
```bash
# Use command shortcuts
aurras d "song"          # download (d = download shortcut)
aurras o                 # offline (o = offline shorthand)
aurras p "playlist"      # playlist (p = playlist shorthand)
aurras h                 # history (h = history shorthand)
aurras v "playlist"      # view playlist (v = view shorthand)
```

### Settings Management
```bash
# View all settings
aurras settings

# Disable lyrics display
aurras settings --set appearance-settings.display-lyrics no

# Reset all settings to defaults
aurras settings --reset
```

### Backup & Restore
```bash
# Create a backup of your data
aurras backup --create

# List existing backups
aurras backup

# Restore from backup
aurras backup --restore ID
```

## Customization Quick Wins

### Change Theme
```bash
# List available themes
aurras config themes list

# Set theme
aurras config set theme dark
aurras config set theme cyberpunk
aurras config set theme minimal
```

### Keyboard Shortcuts
```bash
# Customize key bindings
aurras config keys edit

# Or edit config file directly
nano ~/.config/aurras/config.toml
```

### Audio Quality
```bash
# Set audio quality preferences
aurras config set audio.quality high
aurras config set audio.bit_depth 24
aurras config set audio.sample_rate 96000
```

## What's Next?

Now that you're up and running:

1. **[Basic Usage Guide](/posts/aurras-basic-usage)** - Master all interface features
2. **[Troubleshooting Guide](/posts/aurras-troubleshooting)** - Solve common issues and optimize performance
3. **[Technical Deep Dive](/posts/aurras-technical-deep-dive)** - Explore advanced features and architecture
4. **[About Aurras](/about)** - Learn more about the project and philosophy

## Getting Help

- Press `?` in Aurras for built-in help
- Run `aurras --help` for command-line options
- Check our [Troubleshooting Guide](/posts/aurras-troubleshooting)
- Join our [Discord Community](https://discord.gg/QDJqZneMVB)

---

**You're all set!** 🎵 Enjoy your music in the terminal with Aurras!
