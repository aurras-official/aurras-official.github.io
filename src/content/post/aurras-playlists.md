---
title: "Advanced Playlist Management"
description: "Master advanced playlist features - smart playlists, automation, collaborative features, and sophisticated music organization techniques."
publishDate: "2025-06-09T00:00:00Z"
seriesId: "aurras-advanced"
orderInSeries: 3
tags: ["aurras", "playlists", "advanced", "automation", "smart-playlists"]
draft: false
---

# Playlist Management

Playlists are the heart of your music organization in Aurras. Learn how to create, manage, and automate playlists to perfectly organize your music library.

## Creating Playlists

### Basic Playlist Creation

```bash
# Create playlist from current directory
aurras --create-playlist "Rock Classics" /path/to/rock/music/

# Create playlist from multiple sources
aurras --create-playlist "Mixed Favorites" \
  /path/to/song1.mp3 \
  /path/to/album/ \
  /path/to/other/songs/

# Create empty playlist
aurras --create-playlist "New Playlist" --empty
```

### Interactive Playlist Building

```bash
# Start interactive playlist builder
aurras --playlist-builder

# Add currently playing track
aurras --add-current-to-playlist "Favorites"

# Add entire album of current track
aurras --add-current-album-to-playlist "Albums Collection"
```

## Managing Playlists

### Basic Operations

```bash
# List all playlists
aurras --list-playlists

# Show playlist contents
aurras --show-playlist "Rock Classics"

# Play a playlist
aurras --playlist "Rock Classics"

# Delete a playlist
aurras --delete-playlist "Old Playlist"

# Rename a playlist
aurras --rename-playlist "Old Name" "New Name"
```

### Playlist Editing

```bash
# Add tracks to existing playlist
aurras --add-to-playlist "Favorites" /path/to/new/song.mp3

# Remove track from playlist
aurras --remove-from-playlist "Favorites" --track "Artist - Song Title"

# Reorder playlist
aurras --reorder-playlist "Favorites" --move-track 5 --to-position 1

# Clear playlist
aurras --clear-playlist "Temporary"
```

## Advanced Playlist Features

### Smart Playlists

Smart playlists automatically update based on criteria:

```bash
# Create smart playlist for recently added music
aurras --smart-playlist "New Music" \
  --criteria "date_added > 30days" \
  --limit 100 \
  --auto-update

# Smart playlist for high-rated songs
aurras --smart-playlist "Top Rated" \
  --criteria "rating >= 4" \
  --sort "rating desc,date_added desc"

# Genre-based smart playlist
aurras --smart-playlist "Electronic" \
  --criteria "genre contains electronic" \
  --shuffle \
  --max-duration "2 hours"
```

### Playlist Criteria Options

```bash
# Time-based criteria
--criteria "date_added > 7days"
--criteria "last_played < 30days"
--criteria "duration between 3min and 6min"

# Rating and play count
--criteria "rating >= 3"
--criteria "play_count > 5"
--criteria "skip_count < 2"

# Metadata criteria
--criteria "genre in [rock,metal,punk]"
--criteria "artist = 'Pink Floyd'"
--criteria "album contains 'Greatest Hits'"
--criteria "year between 1970 and 1980"

# Audio properties
--criteria "bpm > 120"
--criteria "energy > 0.7"
--criteria "loudness < -10db"

# Complex criteria
--criteria "genre=jazz and rating>=4 and year>1950"
```

## Playlist Organization

### Folders and Categories

```bash
# Create playlist folder
aurras --create-playlist-folder "By Genre"

# Move playlist to folder
aurras --move-playlist "Rock Classics" --to-folder "By Genre"

# Organize playlists by category
aurras --categorize-playlists \
  --by-genre "By Genre/" \
  --by-year "By Decade/" \
  --by-mood "By Mood/"
```

### Playlist Metadata

```bash
# Add description to playlist
aurras --edit-playlist "Rock Classics" \
  --description "Classic rock hits from the 70s and 80s"

# Add tags to playlist
aurras --edit-playlist "Workout Mix" \
  --tags "gym,high-energy,motivational"

# Set playlist artwork
aurras --edit-playlist "Chill Vibes" \
  --artwork /path/to/cover.jpg
```

## Collaborative Playlists

### Sharing Playlists

```bash
# Export playlist
aurras --export-playlist "Favorites" --format m3u8 --output favorites.m3u8

# Import playlist
aurras --import-playlist favorites.m3u8 --name "Imported Favorites"

# Share playlist online
aurras --share-playlist "Public Mix" --service pastebox --public
```

### Playlist Formats

```bash
# Export in different formats
aurras --export-playlist "Mix" --format m3u       # Standard M3U
aurras --export-playlist "Mix" --format m3u8      # Extended M3U
aurras --export-playlist "Mix" --format pls       # PLS format
aurras --export-playlist "Mix" --format xspf      # XML Shareable Playlist
aurras --export-playlist "Mix" --format json      # JSON format
```

## Automated Playlist Management

### Auto-generated Playlists

```bash
# Create daily discovery playlist
aurras --auto-playlist "Daily Discovery" \
  --template "similar_to_recent + random_from_library" \
  --schedule daily \
  --limit 25

# Weekly genre rotation
aurras --auto-playlist "Genre of the Week" \
  --template "genre_rotation" \
  --schedule weekly \
  --criteria "rating >= 3"

# Seasonal playlists
aurras --auto-playlist "Seasonal Mix" \
  --template "mood_based" \
  --schedule monthly \
  --mood-from-weather
```

### Playlist Templates

```bash
# List available templates
aurras --list-playlist-templates

# Create custom template
aurras --create-template "MyWorkout" \
  --criteria "bpm > 120 and energy > 0.8" \
  --limit 30 \
  --shuffle

# Use template
aurras --create-playlist-from-template "MyWorkout" "Today's Workout"
```

## Queue Management

### Dynamic Queue

```bash
# Show current queue
aurras --show-queue

# Add to queue
aurras --add-to-queue /path/to/song.mp3

# Insert next in queue
aurras --queue-next /path/to/urgent/song.mp3

# Clear queue
aurras --clear-queue

# Save queue as playlist
aurras --save-queue-as-playlist "Current Session"
```

### Smart Queue

```bash
# Enable smart queue (auto-adds similar tracks)
aurras --smart-queue --similarity-threshold 0.7

# Queue radio mode (infinite similar tracks)
aurras --radio-mode --seed-track "Artist - Song"

# Queue from multiple playlists
aurras --queue-from-playlists "Favorites,Rock Classics" --interleave
```

## Playlist Analytics

### Usage Statistics

```bash
# Playlist play statistics
aurras --playlist-stats "Favorites" --period 30days

# Most played playlists
aurras --top-playlists --period month --limit 10

# Playlist completion rates
aurras --playlist-completion-stats --all
```

### Playlist Health

```bash
# Check for missing files
aurras --check-playlist "Old Playlist" --fix-missing

# Remove duplicates from playlist
aurras --deduplicate-playlist "Mixed Collection"

# Optimize playlist order
aurras --optimize-playlist "Party Mix" --by-energy-flow
```

## Advanced Playlist Features

### Crossfade Playlists

```bash
# Create smooth-transition playlist
aurras --create-playlist "Seamless Mix" \
  --analyze-transitions \
  --auto-crossfade \
  --key-matching

# DJ-style playlist
aurras --create-playlist "DJ Set" \
  --beat-matching \
  --harmonic-mixing \
  --energy-progression
```

### Conditional Playlists

```bash
# Time-based playlist switching
aurras --conditional-playlist \
  --morning "Energizing" \
  --afternoon "Focus" \
  --evening "Relaxing"

# Weather-based playlists
aurras --weather-playlist \
  --sunny "Upbeat Summer" \
  --rainy "Cozy Indie" \
  --cloudy "Contemplative"

# Activity-based playlists
aurras --activity-playlist \
  --work "Concentration" \
  --gym "High Energy" \
  --commute "Podcasts"
```

## Playlist Backup and Sync

### Backup

```bash
# Backup all playlists
aurras --backup-playlists --output playlists-backup.zip

# Backup specific playlists
aurras --backup-playlists "Favorites,Work Music" --output important-playlists.zip

# Automated backup
aurras --auto-backup-playlists --schedule weekly --location ~/Backups/
```

### Synchronization

```bash
# Sync with cloud service
aurras --sync-playlists --service dropbox --folder /Aurras/

# Sync between devices
aurras --sync-device --target "laptop.local" --playlists "all"

# Export for other players
aurras --export-for-player spotify --playlist "Favorites"
aurras --export-for-player itunes --playlist "Classical Collection"
```

## Troubleshooting Playlists

### Common Issues

**Playlist won't play:**
```bash
# Check for missing files
aurras --verify-playlist "Problem Playlist" --verbose

# Fix broken paths
aurras --fix-playlist-paths "Problem Playlist" --search-missing
```

**Slow playlist loading:**
```bash
# Optimize large playlists
aurras --optimize-playlist "Large Playlist" --cache-metadata

# Split large playlists
aurras --split-playlist "Huge Collection" --max-size 500 --by-artist
```

**Duplicates in playlists:**
```bash
# Find and remove duplicates
aurras --find-duplicates-in-playlist "Mixed Collection"
aurras --remove-duplicates-from-playlist "Mixed Collection" --keep first
```

## Playlist Best Practices

### Organization Tips

1. **Use descriptive names**: "80s Rock Hits" instead of "Playlist 1"
2. **Keep reasonable sizes**: 20-100 tracks for most playlists
3. **Use folders**: Group related playlists together
4. **Regular cleanup**: Remove broken links and update content
5. **Backup regularly**: Export important playlists

### Performance Tips

```bash
# For large libraries, use smart playlists instead of static ones
# Cache metadata for frequently used playlists
aurras --cache-playlist "Daily Driver" --priority high

# Use playlist folders to organize hundreds of playlists
# Regularly clean up unused playlists
aurras --cleanup-playlists --remove-empty --remove-unused
```

## Integration Examples

### Shell Scripts

```bash
#!/bin/bash
# Create mood-based playlist based on time of day
current_hour=$(date +%H)

if [ $current_hour -lt 12 ]; then
    aurras --create-playlist "Morning $(date +%Y-%m-%d)" \
      --criteria "energy > 0.6 and valence > 0.5" \
      --limit 20
elif [ $current_hour -lt 18 ]; then
    aurras --create-playlist "Afternoon $(date +%Y-%m-%d)" \
      --criteria "energy between 0.4 and 0.7" \
      --limit 30
else
    aurras --create-playlist "Evening $(date +%Y-%m-%d)" \
      --criteria "energy < 0.5 and valence > 0.3" \
      --limit 25
fi
```

### Automation

```bash
# Add to crontab for daily playlist updates
0 6 * * * aurras --update-smart-playlist "Daily Discovery"
0 18 * * 5 aurras --create-playlist "Weekend Vibes" --criteria "energy > 0.7" --auto-play
```

---

🎵 **Playlist mastery achieved!** You now have all the tools to organize and manage your music collection like a pro.

**Next Steps:**
- **[Advanced Features](/posts/aurras-advanced-features)** - Explore power user capabilities
- **[Configuration Guide](/posts/aurras-configuration)** - Customize playlist behaviors
- **[Contributing](/posts/aurras-contributing)** - Help improve Aurras playlist features
