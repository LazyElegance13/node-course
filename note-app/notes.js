const { default: chalk } = require('chalk');
const fs = require('fs'); 

const readNote = (title) => {
    const notes = loadNotes();
    const requestedNote = notes.find((note) => note.title === title);
    if (requestedNote) {
        console.log(chalk.bold.inverse(requestedNote.title));
        console.log(requestedNote.body);
    } else {
        console.log(chalk.inverse.red('Note not found'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.cyanBright.inverse('Your notes'))
    notes.forEach((note) => console.log(note.title));
};

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title);
    // if (duplicateNotes.length === 0){
    // can add "debugger" above a line where we want to check the variables
   // can access on chrome browser using the url chrome://inspect/#devices
        
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.inverse.green('New note added!'));
    } else {
        console.log(chalk.inverse.red('Note title taken'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const revisedNotes = notes.filter((note) => note.title !== title);
    if (revisedNotes.length === notes.length) {
        console.log(chalk.red.inverse('No note found.'))
    } else {
        saveNotes(revisedNotes);
        console.log(chalk.green.inverse('Note with title '+ title + ' removed!'));
    }
    
}

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
}

