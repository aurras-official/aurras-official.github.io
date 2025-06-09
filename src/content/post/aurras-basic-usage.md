---
title: "Basic Usage Guide"
description: "Master Aurras interface, controls, and essential features for everyday music enjoyment"
publishDate: "2025-06-09T00:00:00Z"
seriesId: "aurras-docs"
orderInSeries: 3
tags: ["aurras", "usage", "interface", "controls", "docs"]
draft: false
---

# Basic Usage Guide

Master Aurras with this comprehensive guide to the interface, controls, and essential features that make terminal music enjoyable.

## Interface Overview

### Main Interface Layout

```
┌─ Aurras v2.1.0 ──────────────────────────────────────────┐
│ 🎵 Library • 1,247 tracks • Playing: On    [GitHub] [?] │ ← Header Bar
├──────────────────────────────────────────────────────────┤
│ Search: _______________________________ [Filter: All ▼] │ ← Search Bar  
├──────────────────────────────────────────────────────────┤
│   Track Title                Artist          Album       │ ← Column Headers
│ ♪ Currently Playing Song     Great Artist    Album 2024  │ ← Playing Track
│ → Selected Track             Artist Name     Other Album │ ← Selected Track
│   Another Song               Different One   Best Songs  │ ← Regular Track
│   ...                                                    │
├──────────────────────────────────────────────────────────┤
│ [████████████████░░░░░░] 3:42 / 5:18    Shuffle    Loop │ ← Progress Bar
│ Volume: ████████░░ 80%     Queue: 5     Equalizer: On   │ ← Status Bar
└──────────────────────────────────────────────────────────┘
```

### Interface Elements

#### Header Bar
- **Title**: Shows current version and mode
- **Track Count**: Total tracks in current view
- **Status**: Playing/Paused/Stopped
- **Quick Actions**: Access to help and external links

#### Track List
- **Playing Indicator** (`♪`): Currently playing track
- **Selection Cursor** (`→`): Currently selected track
- **Multi-selection** (`✓`): Multiple tracks selected
- **Track Info**: Title, Artist, Album, Duration

#### Control Bar
- **Progress Bar**: Current position in track
- **Time Display**: Current time / Total duration
- **Mode Indicators**: Shuffle, Repeat, Queue status
- **Volume**: Visual volume level indicator

## Navigation & Selection

### Basic Navigation

#### Moving Around
```
Key                 Action
↑ / k              Move up one track
↓ / j              Move down one track
Page Up / Ctrl+U    Move up 10 tracks
Page Down / Ctrl+D  Move down 10 tracks
Home / g g         Jump to first track
End / G            Jump to last track
Ctrl + ↑          Jump to currently playing track
```

#### Track Selection
```
Key                 Action
Enter              Play selected track
Space              Toggle selection (multi-select)
Ctrl+A             Select all visible tracks
Ctrl+Shift+A       Clear all selections
Tab                Add selection to queue
Shift+Enter        Play selection and clear
```

### Views & Modes

#### Switching Views
```
Key     View                Description
1       Library View        All tracks in library
2       Playlist View       Your saved playlists
3       Queue View          Upcoming tracks
4       Visualizer View     Audio visualization
5       Album View          Browse by albums
6       Artist View        Browse by artists
7       Genre View         Browse by genres
8       Recent View        Recently played/added
```

#### View-Specific Controls

##### Library View (Default)
- Browse all tracks in your music library
- Sort by any column (Title, Artist, Album, Date)
- Filter by file type, rating, or custom criteria

##### Playlist View
```
Key     Action
n       Create new playlist
d       Delete selected playlist
r       Rename selected playlist
Enter   Open playlist
e       Edit playlist
```

##### Queue View
```
Key     Action
d       Remove from queue
↑/↓     Reorder queue items
c       Clear entire queue
s       Shuffle queue
Ctrl+S  Save queue as playlist
```

##### Visualizer View
```
Key     Action
v       Cycle visualization modes
+/-     Adjust visualization sensitivity
c       Change color scheme
f       Toggle fullscreen visualizer
```

## Playback Controls

### Basic Playback
```
Key           Action
Space         Play/Pause toggle
Enter         Play selected track
n / →         Next track
p / ←         Previous track
Ctrl+Space    Stop playback
```

### Seeking & Navigation
```
Key           Seek Amount
→ / l         +10 seconds
← / h         -10 seconds
Shift+→       +30 seconds
Shift+←       -30 seconds
Ctrl+→        +1 minute
Ctrl+←        -1 minute
Alt+→         +5 minutes
Alt+←         -5 minutes
```

### Volume Control
```
Key           Action
+ / =         Volume up (5%)
- / _         Volume down (5%)
Shift++       Volume up (1%)
Shift+-       Volume down (1%)
m             Mute toggle
0-9           Set volume (0=0%, 9=90%)
Ctrl+0        Set volume to 100%
```

### Playback Modes
```
Key     Mode        Description
s       Shuffle     Random track order
r       Repeat      Cycle: Off → Track → All
a       Autoplay    Continue after queue ends
x       Crossfade   Smooth transitions between tracks
```

## Search & Filtering

### Basic Search
```
Action                  Command
Open search            /
Search by title        /song name
Search by artist       /artist:name
Search by album        /album:name
Search by genre        /genre:rock
Search by year         /year:2024
Combined search        /artist:name album:title
Clear search          Esc
```

### Advanced Filtering
```
Filter Type    Syntax                  Example
Rating         rating:>4               rating:>=3
Duration       duration:<3:00          duration:>5:30
File type      type:mp3                type:flac
Date added     added:>2024-01-01      added:last_week
Play count     played:>10             played:0
File size      size:>50MB             size:<10MB
```

### Search Examples
```bash
# Find high-quality jazz tracks
/genre:jazz type:flac

# Recent additions by favorite artist
/artist:"Miles Davis" added:>2024-01-01

# Long tracks for focus sessions
/duration:>8:00 genre:ambient

# Unplayed classical music
/genre:classical played:0

# High-rated rock songs
/genre:rock rating:>=4
```

## Library Management

### Adding Music

#### Scan Directories
```bash
# Scan single directory
aurras scan ~/Music

# Scan multiple directories
aurras scan ~/Music ~/Downloads/Music ~/Dropbox/Music

# Scan with options
aurras scan --recursive --follow-symlinks ~/Music

# Update existing library
aurras scan --update
```

#### Import Playlists
```bash
# Import M3U playlist
aurras import playlist.m3u

# Import various formats
aurras import --format m3u8 playlist.m3u8
aurras import --format pls playlist.pls
aurras import --format xspf playlist.xspf
```

### Organizing Music

#### Ratings & Tags
```
Key           Action
1-5           Set star rating (1-5 stars)
0             Clear rating
t             Add/edit tags
Shift+T       Remove tags
f             Toggle favorite
```

#### Creating Playlists
```
Action                 Steps
Create from selection  1. Select tracks (Space)
                      2. Press Ctrl+P
                      3. Enter playlist name
                      4. Press Enter

Quick playlist        1. Press n in Playlist view
                     2. Enter name
                     3. Add tracks with Tab key

Smart playlist        1. Create search filter
                     2. Press Ctrl+Shift+P
                     3. Save as smart playlist
```

### File Operations
```
Key           Action
Del           Delete selected tracks from library
Shift+Del     Delete files from disk (with confirmation)
Ctrl+I        Show track information
Ctrl+E        Edit track metadata
Ctrl+L        Locate file in system
Ctrl+C        Copy file path to clipboard
```

## Customization

### Themes & Appearance
```bash
# List available themes
aurras config themes list

# Set theme
aurras config set theme cyberpunk

# Custom colors
aurras config set colors.accent "#ff6b6b"
aurras config set colors.background "#1a1a1a"
```

### Interface Layout
```bash
# Show/hide columns
aurras config set columns.duration true
aurras config set columns.genre false

# Adjust column widths
aurras config set layout.title_width 40
aurras config set layout.artist_width 25

# Change time format
aurras config set display.time_format "mm:ss"
```

### Behavior Settings
```bash
# Auto-save queue on exit
aurras config set behavior.save_queue true

# Continue playback on startup
aurras config set behavior.resume_playback true

# Default volume
aurras config set audio.default_volume 70
```

## Keyboard Shortcuts Reference

### Quick Reference Card
Press `?` in Aurras to see this reference:

```
NAVIGATION          PLAYBACK           LIBRARY
↑↓ / jk    Move     Space    Play/Pause   /      Search
PgUp/Dn    Scroll   Enter    Play track   1-8    Views
Home/End   Jump     n/p      Next/Prev    Ctrl+A Select all
Ctrl+↑     Playing  +/-      Volume       Tab    Add to queue

PLAYLISTS           MODES              SYSTEM
Ctrl+P  New         s       Shuffle      ?      Help
n       Create      r       Repeat       q      Quit
e       Edit        a       Autoplay     Ctrl+R Refresh
d       Delete      x       Crossfade    Ctrl+S Settings
```

## Tips & Tricks

### Productivity Tips
1. **Use search extensively** - Faster than scrolling through large libraries
2. **Master keyboard shortcuts** - Much faster than mouse navigation
3. **Create smart playlists** - Auto-updating based on criteria
4. **Use queue for session planning** - Build your listening session
5. **Rate your music** - Build better recommendations over time

### Power User Features
1. **Command chaining**: `aurras play --artist "Pink Floyd" --shuffle --volume 60`
2. **Headless mode**: Perfect for background music in scripts
3. **Export/import**: Backup your playlists and settings
4. **Integration**: Control from other applications via command line
5. **Scripting**: Automate common tasks with shell scripts

### Performance Tips
1. **Large libraries**: Use filtering to reduce displayed tracks
2. **Network drives**: Cache metadata locally for faster access
3. **SSD storage**: Keep frequently played music on fast storage
4. **Memory usage**: Adjust cache settings for your system

## What's Next?

You've mastered the basics! Continue your Aurras journey:

1. **[Configuration Guide](/posts/aurras-configuration)** - Customize everything
2. **[Advanced Features](/posts/aurras-advanced-features)** - Equalizer, plugins, automation
3. **[Keyboard Shortcuts](/posts/aurras-keyboard-shortcuts)** - Complete reference
4. **[Troubleshooting](/posts/aurras-troubleshooting)** - Solve common issues

---

**Happy listening!** 🎵 You now have all the tools to enjoy music efficiently in your terminal.
