### Rekordbox CUE file parser and converter

Parses cue files from rekordbox's recordings to produce readable playlists

    node cue-parser.js <path to cue file>

Will output a .txt file in the same folder in this format:

    00:00:47 : Artist Name 1 - Title of Track
    00:03:22 : Artist Name 2 - Title of Track

Tested against Rekordbox 5 cue sheets on MacOS.

Tested with latest NodeJS (v14.3.0), uses ES9 features.

MIT License.
