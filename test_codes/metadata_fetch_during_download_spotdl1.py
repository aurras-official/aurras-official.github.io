# import spotdl
# from spotdl.download.downloader import Downloader
# from spotdl.utils.spotify import SpotifyClient
# from spotdl.types.song import Song

# # Initialize SpotifyClient
# SpotifyClient.init(
#     client_id="5f573c9620494bae87890c0f08a60293",
#     client_secret="212476d9b0f3472eaa762d90b19b0ba8",
# )


# class MetadataDownloader(Downloader):
#     def __init__(self, *args, **kwargs):
#         # Ensure ytm_data is explicitly set to True
#         settings = kwargs.pop("settings", {}) or {}
#         settings["ytm_data"] = True
#         super().__init__(settings=settings, **kwargs)

#     def search_and_download(self, song):
#         # print(f"\nDEBUG - Song object attributes for {song.name}:")
#         for attr in dir(song):
#             if not attr.startswith("__") and not callable(getattr(song, attr)):
#                 print(f"{attr}: {getattr(song, attr)}")

#         # Check for YouTube metadata using different possible attribute names
#         if hasattr(song, "ytm_data") and song.ytm_data:
#             print(f"\n===== YOUTUBE METADATA FOR {song.name} =====")
#             for key, value in song.ytm_data.items():
#                 print(f"{key}: {value}")
#             print("============================\n")


# def download_songs(spotify_urls):
#     # Create songs from Spotify URLs
#     songs = []
#     for url in spotify_urls:
#         try:
#             song = Song.from_url(url)
#             songs.append(song)
#         except Exception as e:
#             print(f"Error creating song from URL {url}: {e}")

#     # Create downloader with YouTube metadata enabled
#     downloader = MetadataDownloader()

#     for song in songs:
#         downloader.search_and_download(song)


# # Example usage
# spotify_urls = [
#     "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",  # Blinding Lights
# ]
# # spotify_urls = ["blinding lights", "tu hai"]  # Example Spotify URL

# download_songs(spotify_urls)


from spotdl.download.downloader import Downloader
from spotdl.utils.spotify import SpotifyClient
from spotdl.types.song import Song

# Initialize SpotifyClient
SpotifyClient.init(
    client_id="5f573c9620494bae87890c0f08a60293",
    client_secret="212476d9b0f3472eaa762d90b19b0ba8",
)


class MetadataDownloader(Downloader):
    def __init__(self, *args, **kwargs):
        # Ensure ytm_data is explicitly set to True
        settings = kwargs.pop("settings", {}) or {}
        settings["ytm_data"] = True
        super().__init__(settings=settings, **kwargs)

    def search_and_download(self, query):
        # If the query is a URL, create a Song object
        song = Song.from_search_term(query)
       
        for attr in dir(song):
            if not attr.startswith("__") and not callable(getattr(song, attr)):
                print(f"{attr}: {getattr(song, attr)}")

        # Check for YouTube metadata
        if hasattr(song, "ytm_data") and song.ytm_data:
            print(f"\n===== YOUTUBE METADATA FOR {song.name} =====")
            for key, value in song.ytm_data.items():
                print(f"{key}: {value}")


def download_songs(queries):
    # Create downloader with YouTube metadata enabled
    downloader = MetadataDownloader()

    # Process each query (URL or song name)
    for query in queries:
        try:
            downloader.search_and_download(query)
        except Exception as e:
            print(f"Error processing query '{query}': {e}")


# Example usage with song names
song_queries = ["The Weeknd - Blinding Lights", "Alan Walker - Fade"]

# download_songs(song_queries)
# MetadataDownloader().search_and_download(["The Weeknd - Blinding Lights", "Alan Walker - Faded"])
