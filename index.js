const argv = require('yargs').argv;
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

if (argv._[0] == 'write') {
    askForUserInput('Please provide the filename:=>');
}
else {
    console.log('No write operation');
}

function askForUserInput(message) {
    rl.question(message, (fileName) => {
        if (ifFileExists(fileName)) {
            askForUserInput('File already exists, Please provide a new filename:=>');
        } else {
            writeToFile(fileName);
            rl.close();
        }
    });
}

function writeToFile(fileName) {
    fs.writeFile('fileNameList.txt', fileName, err => {
        if (err) {
            console.log('Error occured');
            return;
        }
        fs.writeFile(fileName, 'Hello', err => {
            if (err) {
                console.log('Error occured');
                return
            }
        });
    });
}

function ifFileExists(filepath) {
    try {
        fs.accessSync(filepath, fs.constants.F_OK);
        return true;
    } catch (e) {
        return false;
    }
}
