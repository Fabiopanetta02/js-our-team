/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//# MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

//# MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

//# MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

//# BONUS 1:
Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)

//# BONUS 2:
Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato
*/

//RECUPERO GLI ELEMENTI DAL DOM
const boardTeam = document.getElementById('board-team');

//1- Creo array di oggetti con le informazioni fornite
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg',
    }
];


//3-Stampo le stesse informazioni su DOM sottoforma di stringhe
let message = '';

for(let i = 0; i < team.length; i++){
    const currentTeam = team[i];
    
    //Montaggio tag li
    message += 
    `<li>
        <img src="${currentTeam.img}" alt="" class="img-fluid">
        <div class="description">
            <h5 class="name-person">${currentTeam.name}</h5>
            <p class="description-person">${currentTeam.role}</p>
        </div>
    </li>
    <br>`;
    
    //2-Stampo su console le informazioni di nome, ruolo e la stringa della foto
    console.log('--------PERSONA--------');
    console.log('name: ' + currentTeam.name);
    console.log('role: ' + currentTeam.role);
    console.log('img: ' + currentTeam.img);
}

//3-
boardTeam.innerHTML = message;
