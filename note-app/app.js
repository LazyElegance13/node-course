// - Importing core modules:
// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'Notes App!');

// fs.appendFileSync('notes.txt', '\n------------------')
// fs.appendFileSync('notes.txt', '\n1. My first entry, trying to learn node.')


// -------------
// - Importing your own files
// const add = require('./utils');

// // const name = 'Zico';
// const sum = add(434, 212);
// console.log(sum);

// const getNotes = require('./notes');
// console.log(getNotes());


// -------------
// - Importing npm Modules
// import validator from "validator"; - Node doesnt currently support import
// const validator = require('validator');

// // console.log(validator.isEmail('lazylucifer@yahoo.com'));
// console.log(validator.isURL('https://mead.io'));

// // import chalk from "chalk"; - Node doesnt currently support import
// const chalk = require('chalk');

// const log = console.log;

// log(chalk.bold.blue('Hello') + ' World' + chalk.red('!'));

// log(chalk.bold.inverse.green('Success!'));
// log(chalk.blue.underline.bold('With a blue substring'));
// log(chalk.bgWhite.cyanBright('I am cyan!'));
// log(chalk.inverse.magentaBright('I am inverted Magenta Bright!'));
// log(chalk.bgWhite.magentaBright('I am Magenta!'));

// - File System and Commnad Line Args
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

const log = console.log;

// customize yargs version
yargs.version('1.1.0')
;

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // to make a title mandatory
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            descibe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all the notes titles',
    handler() {
        notes.listNotes();
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});


// log(yargs.argv);
yargs.parse();