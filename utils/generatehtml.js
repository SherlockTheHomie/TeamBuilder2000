const generateEmployee = require("../utils/generateEmployee");
const index = require("../index");

function generateManager(managerProfile) {
    const{
      managername,
      managerid,
      manageremail,
      manageroffice,
    } = managerProfile;
    
    return `
<!DOCTYPE html>
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
            <div class="card-header card-title>${managername}</div>
            <h2>Employee ID: ${managerid}</h2>
            <h2>Email: <a href="mailto:${manageremail}" id="contact"></a></h2>
            <h2>Office Number: ${manageroffice}<h2>
        </div>
    </div>

    ${teamMember}





</body>


</html>
  `
};
  
  
  

function createDoc(params) {
    module.exports = generateHtml;
}
