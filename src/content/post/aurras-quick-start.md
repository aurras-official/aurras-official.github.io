---
title: "Quick Start Guide"
description: "Get started with Aurras in 2 minutes - your first steps to terminal music mastery"
publishDate: "2025-06-09T00:00:00Z"
seriesId: "aurras-docs"
orderInSeries: 2
tags: ["aurras", "quick-start", "tutorial", "docs"]
draft: false
---

# Quick Start Guide

Welcome to Aurras! This guide will get you playing music in your terminal in just 2 minutes.

## Your First Song

### Step 1: Launch Aurras
Open your terminal and run:

```bash
aurras
```

If you have music files in common locations, Aurras will automatically scan and display them. If not, you'll see the welcome screen.

### Step 2: Add Your Music Library

#### Option A: Scan a Directory
```bash
# Scan your music folder
aurras scan ~/Music

# Or scan multiple directories
aurras scan ~/Music ~/Downloads/Music
```

#### Option B: Play a Single File
```bash
# Play any audio file directly
aurras play ~/Music/song.mp3

# Aurras supports: MP3, FLAC, WAV, OGG, M4A, and more
```

#### Option C: Use the Interactive Mode
1. Launch `aurras` with no arguments
2. Press `a` to add music directories
3. Navigate and select your music folders
4. Press `Enter` to confirm

### Step 3: Navigate Your Library

Once your music is loaded, you'll see the main interface:

```
┌─ Aurras Music Player ────────────────────────────────────┐
│ Library (1,247 tracks)                    ♪ Playing: On │
├──────────────────────────────────────────────────────────┤
│ ♪ Song Title                    Artist        Album      │
│ → Amazing Grace                 Artist Name   Album 2024 │
│   Another Song                  Different     Other Album│
│   Beautiful Music               Great Artist  Best Songs │
│                                                          │
│ [Progress Bar ████████████░░░░] 2:34 / 4:12             │
│ Volume: ████████░░ 80%          Shuffle: Off  Repeat: ••│
└──────────────────────────────────────────────────────────┘
```

## Essential Controls

### Playback Controls
| Key | Action |
|-----|--------|
| `Space` | Play/Pause |
| `Enter` | Play selected track |
| `n` / `→` | Next track |
| `p` / `←` | Previous track |
| `s` | Shuffle toggle |
| `r` | Repeat mode (off → track → all) |

### Navigation
| Key | Action |
|-----|--------|
| `↑` / `↓` | Navigate track list |
| `j` / `k` | Navigate track list (vim-style) |
| `Page Up` / `Page Down` | Scroll faster |
| `Home` / `End` | Jump to first/last track |

### Volume & Seeking
| Key | Action |
|-----|--------|
| `+` / `=` | Volume up |
| `-` / `_` | Volume down |
| `m` | Mute toggle |
| `→` / `l` | Seek forward 10s |
| `←` / `h` | Seek backward 10s |
| `Shift + →` | Seek forward 30s |
| `Shift + ←` | Seek backward 30s |

### Views & Search
| Key | Action |
|-----|--------|
| `/` | Search tracks |
| `Esc` | Clear search/exit modes |
| `1` | Library view |
| `2` | Playlist view |
| `3` | Queue view |
| `4` | Visualizer view |
| `?` | Help screen |

## Quick Tasks

### Create Your First Playlist
1. Select tracks with `Space` (multi-select)
2. Press `Ctrl + P` to create playlist
3. Enter playlist name
4. Press `Enter` to save

### Queue Songs for Later
1. Navigate to any song
2. Press `q` to add to queue
3. Press `3` to view queue
4. Queue plays after current song ends

### Search Your Music
1. Press `/` to open search
2. Type artist, song, or album name
3. Use `↑` / `↓` to navigate results
4. Press `Esc` to clear search

### Enable Visualizer
1. Press `4` to switch to visualizer view
2. Press `v` to cycle through visualization modes:
   - Spectrum analyzer
   - Waveform
   - Bars
   - Oscilloscope

## Common Workflows

### Morning Routine: Quick Album Play
```bash
# Search and play an album instantly
aurras search "album:Favorite Album"
# Or
aurras play --album "Favorite Album"
```

### Focus Session: Ambient Playlist
```bash
# Play ambient music on shuffle
aurras play --genre ambient --shuffle
```

### Discovery Mode: Random Exploration
```bash
# Play random tracks from library
aurras play --random --limit 50
```

## Command Line Power User Tips

### Direct Commands
```bash
# Play specific artist
aurras play --artist "Artist Name"

# Play by genre
aurras play --genre "jazz"

# Play recently added
aurras play --recent 30  # last 30 days

# Background mode (no UI)
aurras play --headless ~/Music/playlist.m3u
```

### Integration with Other Tools
```bash
# Show current playing track
aurras status

# Control from scripts
aurras pause
aurras next
aurras volume 75

# Export current playlist
aurras export --format m3u ~/playlists/current.m3u
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
2. **[Configuration](/posts/aurras-configuration)** - Customize everything to your liking
3. **[Advanced Features](/posts/aurras-advanced-features)** - Explore plugins, equalizer, and more
4. **[Keyboard Shortcuts](/posts/aurras-keyboard-shortcuts)** - Complete reference

## Getting Help

- Press `?` in Aurras for built-in help
- Run `aurras --help` for command-line options
- Check our [Troubleshooting Guide](/posts/aurras-troubleshooting)
- Join our [Discord Community](https://discord.gg/QDJqZneMVB)

---

**You're all set!** 🎵 Enjoy your music in the terminal with Aurras!
