module.exports = myTeam => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>My Team</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet"> 
      <script src="https://kit.fontawesome.com/cf7c2b8cf6.js" crossorigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>
                My Team
                <i class="fa-solid fa-people-group"></i>
            </h1>
        </header>
      
        <main class="container">
            <div class="card-deck">
                ${generateTeam(myTeam)}
            </div>    
        </main>
    </body>
    </html>`
}

// Generate Team with user input
const generateTeam = myTeam => {
   // Empty string to pass results into
   let finalTeam = "";

    //get manager
    const generateManager = myTeam => {
        return `
        <div class="card card-body manager-card" style="width: 18rem;">
        <h3 class="card-title">${myTeam.name}</h3>
        <h4 class="card-text manager">
            Manager
            <i class="fa-solid fa-briefcase"></i>
        </h4>
        <ul class="list-group list-group-flush card-info">
          <li class="list-group-item">ID: ${myTeam.id}</li>
          <li class="list-group-item">Email: ${myTeam.email}</li>
          <li class="list-group-item">Office Number: ${myTeam.officeNumber}</li>
        </ul>
    </div>
    `
    }

    const generateEngineer = myTeam => {
        return `
        <div class="card card-body engineer-card" style="width: 18rem;">
        <h3 class="card-title">${myTeam.name}</h3>
        <h4 class="card-text engineer">
            Engineer
            <i class="fa-solid fa-glasses"></i>
        </h4>
        <ul class="list-group list-group-flush card-info">
          <li class="list-group-item">ID: ${myTeam.id}</li>
          <li class="list-group-item">Email: ${myTeam.email}</li>
          <li class="list-group-item">GitHub: ${myTeam.github}</li>
        </ul>
    </div>
    `
    }

    const generateIntern = myTeam => {
        return `
        <div class="card card-body intern-card" style="width: 18rem;">
        <h3 class="card-title">${myTeam.name}</h3>
        <h4 class="card-text intern">
            Intern
            <i class="fa-solid fa-school"></i>
        </h4>
        <ul class="list-group list-group-flush card-info">
          <li class="list-group-item">ID: ${myTeam.id}</li>
          <li class="list-group-item">Email: ${myTeam.email}</li>
          <li class="list-group-item">School: ${myTeam.school}</li>
        </ul>
    </div>`    
    }

    myTeam.forEach(employee => {
        switch(employee.role) {
            case 'Manager':
               finalTeam += generateManager(employee);
                break;
            case 'Engineer':
                finalTeam += generateEngineer(employee);
                break;
            case 'Intern':
                finalTeam += generateIntern(employee);
                break;
        } 
    })

    return finalTeam;
}