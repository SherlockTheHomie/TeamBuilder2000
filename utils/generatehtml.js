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
    <div class="card" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">Manager ${managerName}</h5>
            <p class="card-text">Manager ID: ${managerId}</p>
            <p class="card-text">Office: ${managerOffice}</p>
            <a href="mailto:${managerEmail}" class="btn btn-primary">Send Email</a>
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

    let engineer =`
    <div class="card" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">Engineer: ${engineername}</h5>
            <p class="card-text">Engineer ID: ${engineerid}</p>
            <p class="card-text">Github Profile: https://github.com/${github}</p>
            <a href="mailto:${engineeremail}" class="btn btn-primary">Send Email</a>
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
    let intern =`
    <div class="card" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">Intern: ${internname}</h5>
            <p class="card-text">Intern ID: ${internid}</p>
            <p class="card-text">School:${school}</p>
            <a href="mailto:${internemail}" class="btn btn-primary">Send Email</a>
        </div>
    </div>`;
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
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <title>${pagetitle}</title>
 </head>
 <body>
    <header>
        <h1>${pagetitle} TEAM ROSTER</h1>

    </header>
    <div class="d-flex">
${teamArray}

    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>
`;
    console.log(teamWeb);
    const filename = `./dist/TeamRoster.html`;

    fs.writeFile(filename, teamWeb, (err) =>
        err ? console.error(err) : console.log('success!')
    );
}

const frank = { generateManager: generateManager, generateIntern: generateIntern, generateEngineer: generateEngineer, generateHTML: generateHTML };

module.exports = frank;



