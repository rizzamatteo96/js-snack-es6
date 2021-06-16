//TODO Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

//* creo il mio array di oggetti
const parcoBici = [
    {nome : 'ktm', peso : 20},
    {nome : 'bianchi', peso : 5},
    {nome : 'torpado', peso : 10},
    {nome : 'trek', peso : 15}
];

//* Trovo qual'è la bici più leggera
let biciLeggera = parcoBici[0];
for(let i = 1; i < parcoBici.length; i++){
    if(parcoBici[i].peso < biciLeggera.peso){
        biciLeggera = parcoBici[i];
    }
}

//* destrutturo i dati nome e peso da biciLeggera per poterli stampare separatamente
const {nome,peso} = biciLeggera;

//* tramite "template literal" vado a mostrare nell'HTML i valori prima destrutturati
document.getElementById('container1').innerHTML = 
`
<ul>
    <li>Il nome della bici leggera è = ${nome}</li>
    <li>Il peso della bici leggera è = ${peso}kg</li>
</ul>
`;









//TODO Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti e stampiamo tutto in console.

//* creo il mio array di oggetti
const squadre = [
    {nome : 'Inter', puntiFatti : 0, falliSubiti : 0},
    {nome : 'Milan', puntiFatti : 0, falliSubiti : 0},
    {nome : 'Juventus', puntiFatti : 0, falliSubiti : 0},
    {nome : 'Roma', puntiFatti : 0, falliSubiti : 0},
    {nome : 'Lazio', puntiFatti : 0, falliSubiti : 0},
    {nome : 'Atalanta', puntiFatti : 0, falliSubiti : 0}
];

//* creo la funzione che mi restituisce un numero random
const randomNum = (min,max) => Math.floor(Math.random() * (max - min + 1) ) + min;

//* creo un array vuoto dove andrò ad inserire solo il nome e i falli subiti
const squadreNew = [];

//* scorro tutti gli elementi dell'array squadre dando dei valori a puntiFatti e falliSubiti. Fatto ciò effettuo il push di nome e falliSubiti dentro al nuovo array
for(let i = 0; i < squadre.length; i++){
    squadre[i].puntiFatti = randomNum(1,100);
    squadre[i].falliSubiti = randomNum(1,20);

    const {nome, falliSubiti} = squadre[i];
    squadreNew.push({nome,falliSubiti});
}

//* mostro in console log quanto ricavato dal ciclo
console.log(squadreNew);