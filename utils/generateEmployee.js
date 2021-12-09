// const index = require("../index");



// function generateEngineer(engineerProfile) {
//     const{
//         engineername,
//         engineerid,
//         engineeremail,
//         github,
//     } = engineerProfile;

//     return `
// <div class="card p-5">
//     <div class="card-body p-5">
//         <div class="card-header card-title">Engineer: ${engineername}</div>
//         <h2>Employee ID: ${engineerid}</h2>
//         <h2>Email: <a href="mailto:${engineeremail}" id="contact"></a></h2>
//         <h2>Github Profile: <a href="https://github.com/${github}><h2>
//     </div>
// </div>

// `
// }

// function generateIntern(internProfile) {
//     const{
//         internname,
//         internid,
//         internemail,
//         school,
//     } = internProfile;
//     const filename = 'TeamInformation.html'

//     fs.appendFileSync(filename, `
// <div class="card p-5">
//     <div class="card-body p-5">
//         <div class="card-header card-title>Intern: ${internname}</div>
//         <h2>Employee ID: ${internid}</h2>
//         <h2>Email: <a href="mailto:${internemail}" id="contact"></a></h2>
//         <h2>School: ${school}<h2>
//     </div>
// </div>
// `, function (err) {
//     if (err) throw err;
//     console.log('Saved!')
// })   

// }

// module.exports = generateIntern;
// module.exports = generateEngineer;
