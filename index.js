const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateHtml = require('./utils/generatehtml');

const mainMenu = [
    {
        type: 'list',
        name: 'userchoice',
        message: 'Hello, what would you like to do?',
        choices: [
            {
            name: "Create a Team",
            },
            { 
            name: "Talk with you",
            },
            { 
            name: "Exit the program",
            },
        ],
    },   
]








init();






function init() {

inquirer
    .prompt(mainMenu)

    .then((userChoice) => {
        if (userChoice === 'Create a Team') {
            createTeam();           
        } else if (userChoice === 'Talk with you') {
        return ("I'm sorry HAL, I'm not in the mood to speak to humans");
        } else {
            process.exit;
        }
        
});
}

const tmMemberQuestions = [
    {
        type: '',
        message: '',
        name: '',
    },
    {
        type: ''.
        message: '',
        name: '',
    },
]


function createTeam() {
    inquirer
        .prompt(tmMemberQuestions)
    
        .then((answers) => {
            const filename = `README.md`;
    
            fs.writeFile(filename, generateMarkdown(answers), (err) =>
                err ? console.error(err) : console.log('success!')
            );
    });
    }