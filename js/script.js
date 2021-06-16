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

const {nome,peso} = biciLeggera;

document.getElementById('container1').innerHTML = 
`
<ul>
    <li>Il nome della bici leggera è = ${nome}</li>
    <li>Il peso della bici leggera è = ${peso}kg</li>
</ul>
`;