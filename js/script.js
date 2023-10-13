//inserisci un numero, se è pari stampa 
//se è dispari stampa quello dopo


//scompongo:
//prendere il numero inserito
//controllo che sia un numero:
  //sennò stampo messaggio errore
//se è un numero continuo:
    //altrimenti il numero dopo quindi il numero++
//se il numero inserito è divisibile x 2:
//stampa il numero

/*
let msg;
const btn = document.querySelector('button');
const inputel = document.getElementById('data');
const resultel = document.querySelector('.alert');

btn.addEventListener('click', function() {
    resultel.classList.add('d-none');
    let numeroinserito = parseInt(inputel.value);
    if (numeroinserito) {
        if (numeroinserito % 2 === 0) {
            msg = numeroinserito;
        } else {
            msg = numeroinserito + 1;
        }
    }else {
        msg = 'non hai inserito alcun numero'
    }
    resultel.classList.remove('d-none');
    resultel.innerText = msg;
});
*/
//ricordati che se vuoi resettare ogni volta che premi il bottone puoi dare il d-none e poi toglierlo

//genera una lista di nomi 
//genera una listaq di cognomi
//genero una funzione in cui prendo gli elementi di array 1 e array 2 e li metto assieme 

const btn = document.querySelector('button');
const inputel = document.getElementById('data');

const listname = [
    'luca',
    'enzo',
    'gesù'
]

const listsurname = [
    'marrone',
    'vegni',
    'giuntoli'
]

/*
btn.addEventListener('click', function(){
    
    let rngname = [Math.floor(Math.random()*listname.length + listsurname.length)];

    console.log(rngname);

    for(i =0; i < rngname.length; i++) {
        let result = rngname[i]
        inputel.innerHTML = result

        console.log(result);
    }
});
*/

btn.addEventListener('click', function(){
    
    for(let i = 0; i < 3; i++) {
        let name;
        let surname;
        let invitato;
        name = listname[getRndInteger(0, 4)];
        surnamename = listsurname[getRndInteger(0, 4)];
        invitato = name + ' ' + surname;
        console.log(invitato);
    }
});

