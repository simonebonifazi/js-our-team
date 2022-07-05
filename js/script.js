/** TRACCIA
 Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
# MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
# MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
# MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
# BONUS 1:
Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
# BONUS 2:
Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! 
// # DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg 
 */

/*
steps__
aggangio elementi globali per stampare in pagina
poi costruisco il array di oggetti
lo stampo in pagina
*/
//variabili globali
const card = document.getElementById('card');

//array di oggetti

const team = [
    {
        name: 'Wayne ',
        surname: ' Barnett ',
        role: ' Founder_and_CEO ',
        image: ' wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela ',
        surname: ' Carroll ',
        role: ' Chief Editor ',
        image: ' angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter ',
        surname: ' Gordon ',
        role: ' Office Manager ',
        image: ' walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela ',
        surname: 'Lopez ',
        role: ' Social Media Manager ',
        image: ' angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott ',
        surname: 'Estrada ',
        role: ' Developer ',
        image: ' scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara ',
        surname: 'Ramos ',
        role: ' Graphic Designer ',
        image: ' barbara-ramos-graphic-designer.jpg ',
    }
]
console.log(team)
//per stampare solo gli oggetti senza tutti l'array
for (let i = 0; i < team.length; i++) {
    console.log(team[i].name + team[i].surname + team[i].role + team[i].image)
}
