/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//# MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

//# MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

# MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/


//RECUPERO GLI ELEMENTI DAL DOM
const boardTeam = document.getElementById('board-team');

//1- Creo array di oggetti con le informazioni fornite
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    }

];

//2-Stampo su console le informazioni di nome, ruolo e la stringa della foto
let message = '';

for(let i = 0; i < team.length; i++){
    const currentTeam = team[i];
    message += `<li>--------PERSONA--------</li>`;
    console.log('--------PERSONA--------');

    message += `<li>name: ${currentTeam.name}</li>`;
    console.log('name: ' + currentTeam.name);

    message += `<li>role: ${currentTeam.role}</li>`;
    console.log('role: ' + currentTeam.role);

    message += `<li>img: ${currentTeam.img}</li><br>`;
    console.log('img: ' + currentTeam.img);
}

boardTeam.innerHTML = message;
