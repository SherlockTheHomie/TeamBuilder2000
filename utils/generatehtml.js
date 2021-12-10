const fs = require('fs');

const teamArray = [];

// for (let i = 0; i < teamArray.length; i++) {
//     const teamCard = teamArray[i];
// }

function generateManager(managerProfile) {
    const {
        managerName,
        managerId,
        managerEmail,
        managerOffice,
    } = managerProfile;

    let teamManager = `
<div class="card p-5">
    <div class="card-body p-5">
        <div class="card-header card-title">Team Manager: ${managerName}</div>
        <h2>Employee ID: ${managerId}</h2>
        <h2>Email: <a href="mailto:${managerEmail}" id="contact"></a></h2>
        <h2>Office Number: ${managerOffice}<h2>
    </div>
</div>`;

    teamArray.push(teamManager);
    console.log(teamManager);
    console.log(teamArray);
    return teamArray;
}

function generateEngineer(engineerProfile) {
    const {
        engineername,
        engineerid,
        engineeremail,
        github,
    } = engineerProfile;

    let engineer =
        `
<div class="card p-5">
    <div class="card-body p-5">
        <div class="card-header card-title">Engineer: ${engineername}</div>
        <h2>Employee ID: ${engineerid}</h2>
        <h2>Email: <a href="mailto:${engineeremail}" id="contact"></a></h2>
        <h2>Github Profile: <a href="https://github.com/${github}></a><h2>
    </div>
</div>`;

    teamArray.push(engineer);

    return teamArray;
}

function generateIntern(internProfile) {
    const {
        internname,
        internid,
        internemail,
        school,
    } = internProfile;
    let intern =
        `
<div class="card p-5">
    <div class="card-body p-5">
        <div class="card-header card-title>Intern: ${internname}</div>
        <h2>Employee ID: ${internid}</h2>
        <h2>Email: <a href="mailto:${internemail}" id="contact"></a></h2>
        <h2>School: ${school}<h2>
    </div>
</div>
`;
    teamArray.push(intern);

    return teamArray;
}


function generateHTML(title) {
    const {
        pagetitle,
    } = title;
    let teamWeb =
        `
 <!DOCTYPE html>
 <html>
 <head>
     <title>${pagetitle}</title>
     <link rel= "stylesheet" href="./Unit01Miniproject/assets/stylesheet.css">
     <script type="text/javascript" src="javascript.js"></script>
 </head>
 <body>
    <header>


    </header>
${teamArray}


</body>
</html>
`;
    console.log(teamWeb);
    const filename = `TeamRoster.html`;

    fs.writeFile(filename, teamWeb, (err) =>
        err ? console.error(err) : console.log('success!')
    );
}

const frank = { generateManager: generateManager, generateIntern: generateIntern, generateEngineer: generateEngineer, generateHTML: generateHTML };

module.exports = frank;



