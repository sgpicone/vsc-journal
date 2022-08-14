const fs = require('fs');
const Cryptify = require('cryptify');
const path = require('path');
const yargs = require('yargs');

const config = require('../config.json');

const argv = yargs
    .usage('usage: $0 <command>')
    .command('lock', 'Encrypts (locks) the journal using the provided password')
    .command('unlock', 'Decrypts (unlocks) the journal using the provided password')
    .option('password', {
        alias: 'p',
        description: 'The password to use for encryption/decryption',
        type: 'string',
        requiresArg: true,
        demandOption: true
    })
    .option('target', {
        alias: 't',
        description: `The file(s) (or folder(s)) to lock or unlock.
                Uses the private-directories configuration parameter by default. 
                Use -- to indicate the end of your list.`,
        type: 'array',
        default: config.privateDirectories
    })
    .option('loose', {
        alias: 'o',
        description: 'ADVANCED: Whether to use loose password rules (default is false)',
        type: 'boolean',
        default: false
    })
    .option('silent', {
        alias: 's',
        description: 'ADVANCED: Whether to suppress the console output from the crypto module',
        type: 'boolean',
        default: false
    })
    .help().argv;

checkCommands(argv, 1);



const targetPaths = [].concat(argv.target);
const fileList = targetPaths.map(dir => {
    return path.join(__dirname, "..", path.normalize(dir));
});

if (argv._.length) {
    cryptInstance = getInstance(getFilePaths(fileList), argv.password, argv.silent, argv.loose);
    switch (argv._[0]) {
        case 'lock':
            console.log('locking');
            cryptInstance.encrypt();
            break;
        case 'unlock':
            console.log('unlocking');
            cryptInstance.decrypt();
            break;
        default:
            console.error('Invalid command');
            process.exit(1);
    }
}

function getInstance(files, password, silent, loose) {
    try {
        const instance = new Cryptify(files, password, null, null, silent, loose);
        //validate password ahead of time so there's no alarms and no surprises
        if(!loose) instance.validatePassword(password); 
        return instance;
    } catch (error) {
        if (!error.message.includes('Invalid password')) {
            console.error(error);
        }
        process.exit(1);
    }
}

function traverseDir(dir) {
    let paths = [];
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            paths = paths.concat(traverseDir(fullPath));
        } else {
            paths.push(fullPath);
        }
    });
    return paths;
}

function checkCommands(argv, numRequired) {
    if (argv._.length != numRequired) {
        console.error(`You must provide exactly one command, e.g. 'lock' or 'unlock'`);
    }
}

function getFilePaths(targets) {
    let files = [];

    targets.forEach(filePath => {
        try {
            if (fs.lstatSync(filePath).isDirectory()) {
                files = files.concat(traverseDir(filePath));
            } else if (fs.lstatSync(filePath).isFile()) {
                files = files.concat([filePath]);
            }
        } catch (error) {
            if (error.code === 'ENOENT') {
                console.error(`Error: The file/directory ${error.path} does not exist.`);
                process.exit(1);
            } else {
                console.error(error);
            }
        }
    });

    return files;
}