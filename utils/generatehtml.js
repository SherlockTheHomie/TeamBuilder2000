const index = require("../index");
const fs = require('fs');

teamArray = [];

function generateHTML(managerProfile) {
    const{
      managername,
      managerid,
      manageremail,
      manageroffice,
    } = managerProfile;
    teamArray += filename = 'TeamInformation.html'
    let teamOrigin = (
     `<!DOCTYPE html>
    <html>
    <head>
        <title>Team Information</title>
        <link rel= "stylesheet" href="./Unit01Miniproject/assets/stylesheet.css">
        <script type="text/javascript" src="javascript.js"></script>
    </head>
    <body>
        <header>
    
        </header>
    
        <div class="card p-5">
            <div class="card-body p-5">
                <div class="card-header card-title">Team Manager: ${managername}</div>
                <h2>Employee ID: ${managerid}</h2>
                <h2>Email: <a href="mailto:${manageremail}" id="contact"></a></h2>
                <h2>Office Number: ${manageroffice}<h2>
            </div>
        </div>
    
    `)
    teamArray.push(teamOrigin)
}

function generateEngineer(engineerProfile) {
    const{
        engineername,
        engineerid,
        engineeremail,
        github,
    } = engineerProfile;
    const filename = 'TeamInformation.html'

    `
<div class="card p-5">
    <div class="card-body p-5">
        <div class="card-header card-title">Engineer: ${engineername}</div>
        <h2>Employee ID: ${engineerid}</h2>
        <h2>Email: <a href="mailto:${engineeremail}" id="contact"></a></h2>
        <h2>Github Profile: <a href="https://github.com/${github}><h2>
    </div>
</div>

`
}


function generateIntern(internProfile) {
    const{
        internname,
        internid,
        internemail,
        school,
    } = internProfile;
    const filename = 'TeamInformation.html'

    `
<div class="card p-5">
    <div class="card-body p-5">
        <div class="card-header card-title>Intern: ${internname}</div>
        <h2>Employee ID: ${internid}</h2>
        <h2>Email: <a href="mailto:${internemail}" id="contact"></a></h2>
        <h2>School: ${school}<h2>
    </div>
</div>
`   

}


module.exports = generateHTML;
module.exports = generateIntern;
module.exports = generateEngineer;


