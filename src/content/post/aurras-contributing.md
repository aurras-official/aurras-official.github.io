---
title: "Contributing to Aurras"
description: "Join the Aurras development community! Learn how to contribute code, report bugs, suggest features, and help make the best terminal music player even better."
publishDate: "2025-06-09T00:00:00Z"
seriesId: "aurras-dev-docs"
orderInSeries: 2
tags: ["aurras", "contributing", "development", "open-source", "docs"]
draft: false
---

# Welcome Contributors! 🎵

Aurras is an open-source project that thrives on community contributions. Whether you're a seasoned developer or just getting started, there are many ways to help make Aurras better.

## Ways to Contribute

### 🐛 Reporting Bugs
Found a bug? Help us fix it!

**Before reporting:**
1. Check [existing issues](https://github.com/vedant-asati03/Aurras/issues)
2. Try the latest version
3. Reproduce the issue

**Creating a bug report:**
```bash
# Gather system information
aurras --system-info > system-info.txt

# Enable debug logging
aurras --log-level debug --log-file debug.log

# Include both files in your issue
```

### 💡 Suggesting Features
Have an idea? We'd love to hear it!

**Good feature requests include:**
- Clear problem description
- Proposed solution
- Use cases and examples
- Alternative approaches considered

### 📖 Improving Documentation
Help make Aurras more accessible:
- Fix typos and grammar
- Add examples and tutorials
- Translate documentation
- Update outdated information

### 💻 Code Contributions
Ready to dive into the code?

## Development Setup

### Prerequisites
- Python 3.12 or newer
- Git
- MPV library
- Poetry (recommended) or pip

### Getting Started

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/yourusername/Aurras.git
cd Aurras

# Create a virtual environment
python -m venv aurras-dev
source aurras-dev/bin/activate  # Linux/macOS
# or
aurras-dev\Scripts\activate     # Windows

# Install dependencies
pip install -e ".[dev]"

# Run tests to ensure everything works
python -m pytest

# Start developing!
aurras --help
```

### Development Dependencies

```bash
# Core development tools
pip install -e ".[dev]"

# This installs:
# - pytest (testing)
# - black (code formatting)
# - mypy (type checking)
# - flake8 (linting)
# - pre-commit (git hooks)
```

## Project Structure

```
Aurras/
├── aurras/           # Main package
│   ├── __init__.py
│   ├── cli.py        # Command-line interface
│   ├── core/         # Core functionality
│   │   ├── player.py
│   │   ├── library.py
│   │   └── playlist.py
│   ├── ui/           # User interface
│   │   ├── terminal.py
│   │   └── widgets/
│   ├── audio/        # Audio processing
│   │   ├── decoder.py
│   │   └── effects.py
│   └── utils/        # Utilities
├── tests/            # Test suite
├── docs/             # Documentation
├── scripts/          # Development scripts
└── examples/         # Usage examples
```

## Coding Guidelines

### Python Style
We follow PEP 8 with some modifications:

```python
# Good: Clear, descriptive names
def parse_audio_metadata(file_path: Path) -> AudioMetadata:
    """Parse metadata from an audio file."""
    pass

# Good: Type hints
class MusicLibrary:
    def __init__(self, root_path: Path) -> None:
        self._root_path = root_path
        self._tracks: List[Track] = []

# Good: Docstrings
def create_playlist(name: str, tracks: List[Track]) -> Playlist:
    """Create a new playlist with the given tracks.
    
    Args:
        name: Human-readable playlist name
        tracks: List of tracks to include
        
    Returns:
        Newly created playlist instance
        
    Raises:
        PlaylistError: If playlist creation fails
    """
```

### Code Formatting

```bash
# Format code automatically
black aurras/

# Check formatting
black --check aurras/

# Sort imports
isort aurras/

# Type checking
mypy aurras/

# Linting
flake8 aurras/
```

### Git Workflow

We use GitHub Flow:

```bash
# 1. Create a feature branch
git checkout -b feature/add-spotify-integration

# 2. Make your changes
# ... code, test, commit ...

# 3. Push to your fork
git push origin feature/add-spotify-integration

# 4. Create a Pull Request on GitHub
```

### Commit Messages

Follow [Conventional Commits](https://conventionalcommits.org/):

```bash
# Features
git commit -m "feat: add Spotify integration support"

# Bug fixes
git commit -m "fix: resolve audio crackling on Linux"

# Documentation
git commit -m "docs: add installation guide for Arch Linux"

# Performance
git commit -m "perf: optimize library scanning for large collections"

# Breaking changes
git commit -m "feat!: change config file format to TOML"
```

## Testing

### Running Tests

```bash
# Run all tests
python -m pytest

# Run specific test file
python -m pytest tests/test_player.py

# Run with coverage
python -m pytest --cov=aurras

# Run integration tests
python -m pytest tests/integration/
```

### Writing Tests

```python
import pytest
from aurras.core.player import AudioPlayer

class TestAudioPlayer:
    def test_player_creation(self):
        """Test that player can be created successfully."""
        player = AudioPlayer()
        assert player is not None
        
    def test_load_audio_file(self, sample_audio_file):
        """Test loading a valid audio file."""
        player = AudioPlayer()
        result = player.load(sample_audio_file)
        assert result.is_success()
        assert player.is_loaded()
        
    @pytest.mark.asyncio
    async def test_async_playback(self):
        """Test asynchronous playback functionality."""
        player = AudioPlayer()
        await player.play_async()
        assert player.is_playing()
```

## Performance Considerations

### Audio Performance
- Minimize latency in audio callbacks
- Use efficient data structures for large libraries
- Profile memory usage with large collections

### UI Performance
- Keep terminal updates efficient
- Avoid blocking the main thread
- Cache expensive operations

```python
# Good: Non-blocking UI updates
async def update_display(self):
    """Update display without blocking audio."""
    track_info = await self.player.get_current_track()
    self.ui.update_track_display(track_info)

# Good: Caching
@lru_cache(maxsize=1000)
def get_album_artwork(self, album_id: str) -> bytes:
    """Get album artwork with caching."""
    return self._load_artwork(album_id)
```

## Documentation

### Code Documentation

```python
class AudioDecoder:
    """Handles decoding of various audio formats.
    
    Supports MP3, FLAC, OGG, and other common formats through
    the MPV backend. Provides both synchronous and asynchronous
    interfaces for different use cases.
    
    Attributes:
        format_support: Dictionary of supported formats and their capabilities
        current_decoder: Active decoder instance if any
        
    Example:
        >>> decoder = AudioDecoder()
        >>> decoder.load('song.mp3')
        >>> samples = decoder.decode_chunk(1024)
    """
```

### User Documentation
- Write in Markdown
- Include code examples
- Test all examples
- Keep it up to date

## Release Process

### Version Numbers
We use semantic versioning (SemVer):
- `1.0.0` - Major release (breaking changes)
- `1.1.0` - Minor release (new features)
- `1.1.1` - Patch release (bug fixes)

### Creating Releases

```bash
# 1. Update version number
# Edit aurras/__init__.py
__version__ = "1.2.0"

# 2. Update changelog
# Edit CHANGELOG.md

# 3. Create release commit
git commit -m "release: version 1.2.0"

# 4. Tag the release
git tag v1.2.0

# 5. Push to main repository
git push origin main --tags
```

## Community Guidelines

### Code of Conduct
We follow the [Contributor Covenant](https://contributor-covenant.org/):
- Be respectful and inclusive
- Welcome newcomers
- Help others learn
- Focus on constructive feedback

### Communication Channels
- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Questions and general discussion
- **Discord**: Real-time chat with the community
- **Email**: Private communication with maintainers

## Getting Help

### For Contributors
- Read existing code and documentation
- Ask questions in GitHub Discussions
- Join our Discord community
- Reach out to maintainers

### For Users
- Check the documentation first
- Search existing issues
- Provide detailed bug reports
- Be patient and respectful

## Recognition

Contributors are recognized in:
- `CONTRIBUTORS.md` file
- Release notes
- Project README
- Special mentions for significant contributions

## Good First Issues

Looking for where to start? Check issues labeled:
- `good first issue` - Perfect for newcomers
- `help wanted` - Community input needed
- `documentation` - Documentation improvements
- `bug` - Bug fixes (often good starting points)

## Advanced Contributing

### Adding New Features

1. **Design Discussion**: Open an issue to discuss the feature
2. **Architecture Review**: Consider impact on existing code
3. **Implementation**: Follow established patterns
4. **Testing**: Comprehensive test coverage
5. **Documentation**: Update all relevant docs
6. **Performance**: Ensure no regression

### Debugging Tips

```bash
# Enable debug logging
export AURRAS_DEBUG=1
aurras --log-level debug

# Use Python debugger
python -m pdb -m aurras play song.mp3

# Profile performance
python -m cProfile -o profile.stats -m aurras scan-library

# Memory profiling
python -m memory_profiler aurras_script.py
```

## What We're Looking For

Priority areas for contributions:
- **Platform Support**: Windows, macOS, Linux improvements
- **Audio Formats**: New format support
- **Performance**: Optimization opportunities
- **Accessibility**: Making Aurras more accessible
- **Integration**: Streaming services, smart devices
- **Testing**: Improved test coverage

---

🤝 **Ready to contribute?** Start by forking the repository and checking out our [good first issues](https://github.com/vedant-asati03/Aurras/labels/good%20first%20issue).

**Questions?** Join our [Discord community](https://discord.gg/QDJqZneMVB) or open a discussion on GitHub!
