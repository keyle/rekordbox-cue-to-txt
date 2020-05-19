'use strict';
const fs = require('fs');

if (!process.argv[2]) {
    console.log('Rekordbox (5) Cue Parser 0.9\n' +
        'Parses cue files from rekordbox to produce readable playlists\n' +
        '\n\tnode cue-parser.js <path to cue file>\n\n' +
        'will output a .txt file in the same folder in this format:\n\n' +
        '\t00:00:47: Artist Name 1 - Title of Track\n' +
        '\t00:03:22: Artist Name 2 - Title of Track\n\t...\n');
    return;
}

console.log('Parsing...', process.argv[2]);

const file = fs.readFileSync(process.argv[2], {encoding: 'utf8', flag: 'r'});

const artist_re = /[\t\t| +]PERFORMER "(.*)"/g;
const title_re = /[\t\t| +]TITLE "(.*)"/g;
const index_re = /[\t\t| +]INDEX \d\d (.*)/g;

const artists = [...file.matchAll(artist_re)];
const titles = [...file.matchAll(title_re)];
const indices = [...file.matchAll(index_re)];

var output = '';
for (let i = 0; i < titles.length; i++) {
    const title = titles[i][1];
    const artist = artists[i][1];
    const time = indices[i][1];

    output += `${time}: ${artist} - ${title}\r\n`;
}

console.log(output);

fs.writeFileSync(process.argv[2].replace('.cue', '.txt'), output);