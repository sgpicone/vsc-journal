const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const moment = require('moment');
const { exec } = require('child_process');

const config = require('../config.json');
const SHORT_DATE_FORMAT = config.shortDateFormat || 'yyyy-MM-DD';
const LONG_DATE_FORMAT = config.longDateFormat || 'dddd, MMMM DD, yyyy';
const YEAR_DIR_FORMAT = config.yearDirFormat || 'yyyy';
const MONTH_DIR_FORMAT = config.monthDirFormat || 'MM-MMMM';

const argv = yargs
    .usage('usage: $0 <command> -d <date>')
    .command(['entry', '$0'], 'Create a new entry for the specified date (today by default)')
    .command('page', 'Create a new page in the specified directory with the specified name', {
        folder: {
            alias: 'f',
            demandOption: true,
            description: `The folder in which the page will be saved. Can include subfolders, e.g. pages/art/poems. To include spaces, wrap the text in quotation marks, e.g. "this is a folder"`,
            default: 'pages'
        },
        name: {
            alias: 'n',
            description: 'The name of the page to create. To include spaces, wrap the text in quotation marks, e.g. "this is a file"',
            demandOption: true
        }
    })
    .option('date', {
        alias: 'd',
        description: 'The date of the new entry, in the format yyyy-MM-DD',
        type: 'string',
        requiresArg: true,
        demandOption: true,
        default: moment().format(SHORT_DATE_FORMAT)
    })
    .help()
    .argv;

const date = moment(argv.date);

const shortDate = date.format(SHORT_DATE_FORMAT);
const longDate = date.format(LONG_DATE_FORMAT);

const newEntryHeader = argv.name ? `# ${toTitleCase(argv.name)}\n` : `# ${longDate}\n`;
const newEntryName = `${argv.name || shortDate}.md`;

const newEntryPath = getNewFilePath(argv._[0] === 'page', argv.folder, newEntryName);
const newEntryDir = path.dirname(newEntryPath);

if (fs.existsSync(newEntryPath)) {
    console.log(`${newEntryName} exists; opening with VS Code.`);
    openInVsCode(newEntryPath);
} else {
    console.log(`Creating ${newEntryName}.`);
    try {
        if (!fs.existsSync(newEntryDir)) {
            fs.mkdirSync(newEntryDir, { recursive: true });
        }
        fs.writeFileSync(newEntryPath, newEntryHeader);
        openInVsCode(newEntryPath);
    } catch (error) {
        console.error(`Error writing file: ${error.message}`);
    }
}


function getNewFilePath(isPage, folder, fileName) {
    if (isPage) {
        if (!folder) {
            exitWithError('You must define a folder in which the page will be saved.');
        }
        if (!fileName) {
            exitWithError('You must define the name for the page.');
        }

        return path.join(
            __dirname,
            '..',
            folder,
            fileName,
        );
    } else {
        const yearDirectory = date.format(YEAR_DIR_FORMAT);
        const monthDirectory = date.format(MONTH_DIR_FORMAT).toLocaleUpperCase();

        return path.join(
            __dirname,
            '..',
            config.journalDirectory,
            yearDirectory,
            monthDirectory,
            fileName
        );
    }
}

function openInVsCode(path) {
    exec(`code "${path}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
        if (stdout) {
            console.log(`Output: ${stderr}`);
            return;
        }
    });
}

function toTitleCase(str) {
    return str
        .toLowerCase()
        .replace(
            /\b\S/g,
            (t) => t.toUpperCase() 
        );
}

function exitWithError(message) {
    console.error(message);
    process.exit(1);
}
// default - make new entry for current date