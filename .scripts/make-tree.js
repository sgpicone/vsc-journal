const { execSync } = require('child_process');
const { makeTreeConfig } = require('../config.json');

const command = `npx markdown-notes-tree ${buildMakeTreeArgs(makeTreeConfig)}`;
execSync(command, { stdio: 'inherit'});

function buildMakeTreeArgs(config) {
    let args = [];
    for( const [key, value] of Object.entries(config)) {
        if (typeof value === "boolean" && value) {
            args = args.concat(`--${key}`);
        } else if(typeof value === "number") {
            args = args.concat(`--${key} ${value}`);
        } else if(Array.isArray(value)) {
            args = args.concat(value.map(v => `--${key} ${v}`));
        }
    }
    return args.join(" ");
}