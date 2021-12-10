const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

const frank = require('./utils/generatehtml')

const generateManager = frank.generateManager;
const generateEngineer = frank.generateEngineer;
const generateIntern = frank.generateIntern;
const generateHTML = frank.generateHTML;

const mainMenu = [
    {
        type: 'list',
        name: 'choice',
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
            if (userChoice.choice === 'Create a Team') {
                createTeam();
            } else if (userChoice === 'Talk with you') {
                return ("I'm sorry HAL, I'm not in the mood to speak to humans");
            } else {
                process.exit();
            }

        });
}

const tmLeadQuestions = [
    {
        type: 'input',
        message: 'What is the name of your Team Manager',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is their employee ID number?',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'What is your Team Managers office number?',
        name: 'managerOffice',
    },
]

function createTeam() {
    inquirer
        .prompt(tmLeadQuestions)
        .then((managerProfile) => {
            generateManager(managerProfile);
            continueQuery();
        });
}

const continueQ = [
    {
        type: 'list',
        name: 'more',
        message: 'Add another team Member or create your roster?',
        choices: [
            {
                name: "Add Team Member",
            },
            {
                name: "Generate Roster",
            },
        ],
    },
]

function continueQuery() {
    inquirer
        .prompt(continueQ)
        .then((continueAnswer) => {
            if (continueAnswer.more === "Add Team Member") {
                TeamMemberSelect();
            } else if (continueAnswer.more === "Generate Roster") {
                createDoc();
            }
        }
        )
}


const selectTeamMember = [
    {
        type: 'list',
        name: 'userchoice',
        message: 'What is your team members title?',
        choices: [
            {
                name: "Engineer",
            },
            {
                name: "Intern",
            },
        ],
    },
]

function TeamMemberSelect() {
    inquirer
        .prompt(selectTeamMember)

        .then((selection) => {
            if (selection.userchoice === "Engineer") {
                createEngineer();
            } else if (selection.userchoice === "Intern") {
                createIntern();
            } else {
                process.exit();
            }
        }
        )
}

const engineerQ = [
    {
        type: 'input',
        message: 'Please enter the name of your Engineer',
        name: 'engineername',
    },
    {
        type: 'input',
        message: 'What is their employee ID number?',
        name: 'engineerid',
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'engineeremail',
    },
    {
        type: 'input',
        message: 'What is their github profile name?',
        name: 'github',
    },
]

function createEngineer() {
    inquirer
        .prompt(engineerQ)
        .then((engineerProfile) => {
            generateEngineer(engineerProfile);
            continueQuery();
        }
        )
}

const internQ = [

    {
        type: 'input',
        message: 'Please enter the name of your Intern',
        name: 'internname',
    },
    {
        type: 'input',
        message: 'What is their employee ID number?',
        name: 'internid',
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'internemail',
    },
    {
        type: 'input',
        message: 'What school is your intern attending?',
        name: 'internschool',
    },
]

function createIntern() {
    inquirer
        .prompt(internQ)
        .then((internProfile) => {
            generateIntern(internProfile);
            continueQuery();
        }
        )
}

const pageName = [
    {
        type: 'input',
        message: 'Please enter an awesome title for your team roster page',
        name: 'pagetitle',
    },
]


function createDoc() {
    inquirer
        .prompt(pageName)

        .then((title) => {
            generateHTML(title);

        });
}



// inquirer
// .prompt(teammemberprofile)

// .then((teamprofile) => {
//     const filename = `generateTeamMember.js`;

//     fs.writeFile(filename, generateManager(teamprofile), (err) =>
//         err ? console.error(err) : console.log('success!')
//     );
// });