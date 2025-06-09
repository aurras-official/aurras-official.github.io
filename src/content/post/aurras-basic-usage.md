---
title: "Basic Usage Guide"
description: "Master Aurras with this comprehensive guide to the interface, controls, and essential features that make your terminal music experience exceptional."
publishDate: "2025-06-09T00:00:00Z"
seriesId: "aurras-docs"
orderInSeries: 3
tags: ["aurras", "usage", "interface", "controls", "docs"]
draft: false
---

# Interface Overview

### Main Playback Interface

When playing music, Aurras displays a clean, informative interface:

```
🎵 Now Playing: "Bohemian Rhapsody" by Queen
📀 Album: A Night at the Opera (1975)
⏱️  Progress: [████████████░░░░░░░░] 3:42 / 5:55
🔊 Volume: 85% | 🎵 Quality: 320kbps | 🎨 Theme: cyberpunk

💬 Real-time synced lyrics (toggle with 'l'):
   Is this the real life?
   Is this just fantasy?
► Caught in a landslide
   No escape from reality

⌨️  Controls: [Space] Play/Pause | [n] Next | [b] Previous | [q] Quit
```

### Search Interface Components

Aurras features an intelligent search system with multiple interaction modes:

#### Standard Search
Simply type your query to search for songs across YouTube and local files:
```
🔍 Search: bohemian rhapsody queen
```

#### Command Palette (Type `>`)
Access powerful commands and features:
```
🔍 Search: > theme cyberpunk
🔍 Search: > download playlist "My Favorites"
🔍 Search: > settings appearance
```

#### Options Menu (Type `?`)
Quick access to special features:
```
🔍 Search: ? local
🔍 Search: ? discover
🔍 Search: ? disco mode
```

## Core Interface Modes

### Interactive Mode (Primary Interface)

Launch with `aurras` to enter the main interactive interface:

```bash
aurras
```

This mode provides:
- **Real-time search bar** with live recommendations
- **Intelligent command palette** for quick actions
- **Context-aware highlighting** with theme integration
- **Smart search history** accessible with ↑/↓ arrows
- **Live feedback** and status updates

### Command-Line Mode (Direct Playback)

Play music instantly with direct commands:

```bash
# Play a specific song
aurras "Hotel California Eagles"

# Use shortcuts and commands
aurras download "Stairway to Heaven"
aurras offline  # Play downloaded music
aurras playlist "My Mix"
```

## Essential Playback Controls

### Primary Controls
```
Key        Action                     Description
Space      Play/Pause                Toggle playback
n          Next Track                Skip to next song  
b          Previous Track            Go to previous song
q          Quit                      Exit player
l          Toggle Lyrics             Show/hide synced lyrics
t          Switch Theme              Cycle through themes
↑/↓        Volume Control            Increase/decrease volume
←/→        Seek                      Jump backward/forward
ESC        Stop Jump Mode            Cancel number-based jumping
```

### Advanced Jump Controls

Aurras features a powerful "Jump Mode" for precise navigation:

```bash
# Jump multiple tracks
5n          # Skip forward 5 songs
3b          # Go back 3 songs
10n         # Jump ahead 10 tracks
```

### Seek Controls
```
Key        Seek Amount               Use Case
←          5 seconds back            Fine adjustments
→          5 seconds forward         Quick repositioning
Shift+←    30 seconds back           Skip long intros
Shift+→    30 seconds forward        Jump to chorus
```

## Music Discovery & Search

### Basic Search

Type directly in the search bar to find music:

```bash
# Search by song title
bohemian rhapsody

# Search by artist
pink floyd

# Search artist and song
eagles hotel california

# Search by album
dark side of the moon
```

### Advanced Search Features

#### Smart Autocompletion
As you type, Aurras provides intelligent suggestions:
- Song titles with artist names
- Popular completions based on your history
- Contextual recommendations

#### Live Recommendations
Real-time suggestions appear as you type, showing:
- Matching songs from YouTube
- Your downloaded music
- Popular tracks from the artist

#### Search History
Use arrow keys to navigate your search history:
```
↑    Previous search
↓    Next search
```

## Command System

### Core Commands & Shortcuts

Aurras provides both full commands and convenient shortcuts:

#### Download Management
```
Command              Shortcut    Description
download            d           Download current/specified song
downloadp           dp          Download entire playlist
offline             o           Play from downloaded music
```

#### Playlist Operations
```
Command              Shorthand   Description
playlist            p           Play a specific playlist
view                v           View playlist contents
delete              de          Delete a playlist
import              -           Import Spotify playlists
```

#### History & Discovery
```
Command              Shorthand   Description
history             h           Show listening history
previous            prev        Play previous song
search              -           Search by song/artist
clear               -           Clear listening history
```

#### System Management
```
Command              Description
setup               Setup Spotify integration
cache               Display cache information
cleanup             Clean up cached files
self                App management (update, uninstall, etc.)
```

### Using Commands

Type commands in the search bar:
```bash
# Download the current song
download

# Play offline music
o

# View playlists
v

# Check listening history
h
```

## Music Sources & Integration

### YouTube Integration (Primary Source)
- Unlimited access to millions of songs
- High-quality audio streaming
- Intelligent search with filters
- Automatic quality selection

### Local Music Priority
- Downloaded songs play instantly
- Gapless playback for offline tracks
- Local files prioritized over streaming
- Smart caching for frequently played songs

### Spotify Integration

#### Setup Process
```bash
# Launch setup wizard
aurras
> setup

# Or use command shorthand
setup
```

Follow the OAuth flow to connect your Spotify account for:
- Full library access
- Playlist importing
- Synchronized listening history

## Playlist Management

### Creating Playlists

Playlists are created automatically when you first add songs:

```bash
# Add current song to "My Favorites" 
# (creates playlist if it doesn't exist)
playlist "My Favorites"
```

### Managing Playlists

#### View Playlists
```bash
# List all playlists
v

# View specific playlist
view "Workout Mix"
```

#### Download Playlists
```bash
# Download entire playlist
dp "My Favorites"

# Download with specific quality
downloadp "Chill Mix" --quality 320k
```

#### Import from Spotify
```bash
# Import all Spotify playlists
import

# Import specific playlist
import "Discover Weekly"
```

## Download Management

### Downloading Music

#### Single Songs
```bash
# Download currently playing song
download

# Download specific song
download "Imagine Dragons Believer"

# Use shorthand
d
```

#### Playlist Downloads
```bash
# Download entire playlist
downloadp "My Mix"

# Download with options
downloadp "Favorites" --format flac --bitrate 320k
```

### Offline Playback

Access your downloaded music:
```bash
# Play from downloads
offline

# Use shorthand
o
```

Benefits of offline music:
- **Instant playback** - No loading time
- **Gapless transitions** - Seamless song changes  
- **Higher reliability** - No network dependencies
- **Priority playing** - Local files play first

## Customization & Themes

### Theme Switching

Aurras includes 10 built-in themes that can be switched instantly:

```bash
# Cycle through themes during playback
t

# Set specific theme via command palette
> theme ocean
> theme cyberpunk
> theme galaxy
```

Available themes:
- **Galaxy** - Deep space purples and blues
- **Neon** - Vibrant digital visualization  
- **Vintage** - Warm retro vinyl feel
- **Minimal** - Clean distraction-free interface
- **Nightclub** - Dark club atmosphere
- **Cyberpunk** - Bright futuristic aesthetic
- **Forest** - Earthy green natural tones
- **Ocean** - Calming blue oceanic palette
- **Sunset** - Warm orange and pink tones
- **Monochrome** - Classic black and white

### Real-time Theme Changes

Switch themes without interrupting playback:
- Press `t` to cycle through all themes
- Themes apply instantly to all interface elements
- Lyrics highlighting adapts to theme colors
- Search bar and feedback match theme style

## Advanced Features

### Synced Lyrics

Experience lyrics that dance with your music:

#### Toggle Lyrics Display
```bash
# Show/hide lyrics
l
```

#### Lyrics Features
- **Millisecond accuracy** - Perfect synchronization
- **Gradient highlighting** - Current line emphasis
- **Theme integration** - Colors match your theme
- **Real-time updates** - Follows playback position
- **Smart formatting** - Context lines for readability

### Smart Feedback System

Aurras provides real-time feedback for all actions:
- **Search suggestions** as you type
- **Command confirmation** when executed
- **Error messages** with helpful guidance
- **Status updates** for downloads and operations
- **Theme-aware styling** for visual consistency

### Cache Management

Monitor and manage your music cache:

```bash
# Check cache status
cache

# Clean up old files
cleanup
```

Cache features:
- **Intelligent storage** of frequently played songs
- **Automatic cleanup** of old cache files
- **Size monitoring** to prevent storage overflow
- **Download management** with duplicate detection

## Tips for Effective Usage

### Search Strategies

1. **Be specific but flexible**
   ```bash
   # Good: Include artist name
   "hotel california eagles"
   
   # Better: Use distinctive keywords
   "bohemian rhapsody queen"
   ```

2. **Use command shortcuts**
   ```bash
   # Instead of typing full commands
   d           # download
   o           # offline  
   h           # history
   ```

3. **Leverage search history**
   - Use ↑/↓ arrows to revisit previous searches
   - Build on previous queries for similar music

### Workflow Optimization

1. **Download frequently played songs**
   ```bash
   # Download for offline access
   d
   ```

2. **Organize with playlists**
   ```bash
   # Create themed playlists
   playlist "Study Music"
   playlist "Workout Beats"
   ```

3. **Use jump mode for long playlists**
   ```bash
   # Skip multiple tracks quickly
   5n          # Jump ahead 5 songs
   10b         # Go back 10 songs
   ```

### Performance Tips

1. **Let downloads complete** for best experience
2. **Use offline mode** for unstable connections
3. **Regular cache cleanup** for optimal storage
4. **Theme switching** for different moods/times

## Troubleshooting Common Issues

### Playback Issues

**Song won't play or loads slowly:**
1. Check internet connection
2. Try playing the song again
3. Switch to offline mode if downloaded: `o`

**Display not updating:**
1. May indicate slow connection
2. Wait a moment for buffer to catch up
3. Restart the song if needed

### Search Problems

**No results found:**
1. Try simpler search terms
2. Check spelling of artist/song names
3. Use partial matches instead of full titles

**Wrong song playing:**
1. Be more specific in search (include artist)
2. Use unique keywords from the song title

### Download Issues

**Download fails:**
1. Check internet connection
2. Verify sufficient storage space
3. Try again with retry mechanism

For more detailed troubleshooting, see our [Troubleshooting Guide](/posts/aurras-troubleshooting).

## What's Next?

You've mastered Aurras basics! Continue your journey:

1. **[Troubleshooting Guide](/posts/aurras-troubleshooting)** - Solve common issues
2. **[Quick Start Guide](/posts/aurras-quick-start)** - Essential commands recap
3. **[Technical Deep Dive](/posts/aurras-technical-deep-dive)** - Advanced architecture details
4. **[Installation Guide](/posts/aurras-installation)** - Setup reference

---

**Happy listening!** 🎵 You now have all the tools to enjoy music efficiently in your terminal with Aurras.
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

1. **[Troubleshooting Guide](/posts/aurras-troubleshooting)** - Solve common issues and optimize performance
2. **[Technical Deep Dive](/posts/aurras-technical-deep-dive)** - Advanced architecture and features
3. **[Quick Start Guide](/posts/aurras-quick-start)** - Essential commands recap
4. **[Installation Guide](/posts/aurras-installation)** - Setup and configuration reference

---

**Happy listening!** 🎵 You now have all the tools to enjoy music efficiently in your terminal.
