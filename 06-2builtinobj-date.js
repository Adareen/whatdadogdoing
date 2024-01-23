let oggi= new Date();
console.log(oggi);

let annoCorrente= oggi.getFullYear();
let meseCorrente= oggi.getMonth();
let dataCorrente=oggi.getDate();
let giornoCorrente=oggi.getDay();

console.log(annoCorrente);
console.log(meseCorrente); // nota che gennaio = a zero. 
console.log(dataCorrente);
console.log(giornoCorrente); // giorno dlella settimana, conta domenica= 0; lunedì=1 and so on..
// la domenica è il "primo" giorno della settimana 

// momentjs.com  <-- da usare per implementare  le date, da installare nel progetto 