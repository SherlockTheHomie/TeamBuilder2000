const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generatehtml = require('./utils/generatehtml');
const generateManager = require('./utils/generateEmployee');

let teamArray = [];

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
            process.exit;
        }
        
});
}

const tmLeadQuestions = [ 
    {
        type: 'input',
        message: 'What is the name of your Team Manager',
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
            generateHTML(managerProfile);
            const filename = `TeamInformation.html`;
    
            fs.appendFile(filename, generateManager(managerProfile), (err) =>
                err ? console.error(err) : console.log('success!')
            );
            continueQuery();
    });
    }

const continueQ = [
    {
        type: 'list',
        name: 'more',
        messsage: 'Add another team Member or create your roster?',
        choices: [
            {
                name:"Add Team Member"
            },
            {
                name:"Generate Roster"
            },
        ]
    }
]

function continueQuery() {
    inquirer
        .prompt(continueQ)
        .then(continueAnswer)
            if (continueAnswer.more === "Add Team Member") {
                TeamMemberSelect();
            } else {
                createDoc()
            }

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

    .then(selection)
    if (selection.name === "Engineer") {
        createEngineer();
    } else if (selection.name === "Intern") {
        createIntern();
    } else {
        process.exit;
    }
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
            .then(engineerProfile)
            generateEngineer(engineerProfile);
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
        .then(internProfile)
            generateIntern(internProfile);
}


// inquirer
// .prompt(teammemberprofile)

// .then((teamprofile) => {
//     const filename = `generateTeamMember.js`;

//     fs.writeFile(filename, generateManager(teamprofile), (err) =>
//         err ? console.error(err) : console.log('success!')
//     );
// });