const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateHtml = require('./utils/generatehtml');
const generateManager = require('./utils/generateEmployee');
const generateTeamMember = require('./utils/generateTeamMember')

let teamArray = [];

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

const tmLeadQuestions = [
    
    {
        type: 'input',
        message: 'What is the name of your Team Manager?',
        name: 'managername',
    },
    {
        type: 'input',
        message: 'What is their employee ID number?',
        name: 'managerid',
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'manageremail',
    },
    {
        type: 'input',
        message: 'What is your Team Managers office number?',
        name: 'manageroffice',
    },
]


function createTeam() {
    inquirer
        .prompt(tmLeadQuestions)
    
        .then((managerProfile) => {
            const filename = `TeamInformation.html`;
    
            fs.writeFile(filename, generateManager(managerProfile), (err) =>
                err ? console.error(err) : console.log('success!')
            );
            addTeamMember();
    });
    }

function addTeamMember() {
   console.log("we out here");


}


// inquirer
// .prompt(teammemberprofile)

// .then((teamprofile) => {
//     const filename = `generateTeamMember.js`;

//     fs.writeFile(filename, generateManager(teamprofile), (err) =>
//         err ? console.error(err) : console.log('success!')
//     );
// });