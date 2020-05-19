### Rekordbox Cue Parser

Parses cue files from rekordbox to produce readable playlists

    node cue-parser.js <path to cue file>

Will output a .txt file in the same folder in this format:

    00:00:47: Artist Name 1 - Title of Track
    00:03:22: Artist Name 2 - Title of Track

Tested against Rekordbox 5 cue sheets on MacOS.
