alert("Salve, Benvenuto in EasyTicketsOnline, la più facile ed economica piattaforma dove acquistare biglietti per le tue destinazioni!");
var dis = prompt("Qual è la distanza che devi percorrere?");
var distanza = dis.match(/\d+/);
console.log(distanza);
var prezzoDefault = distanza * 0.21;
var eta = prompt("Qual è la tua età?");
if (eta >= 65) {
  var prezzo = (prezzoDefault - (prezzoDefault * 40 / 100)).toFixed(2);
  alert('Il prezzo del biglietto è di \n' + '€ ' + prezzo +'\n Grazie per aver scelto il nostro servizio e Buon Viaggio');
} else if (eta <= 17) {
        var prezzo = (prezzoDefault - (prezzoDefault * 20 / 100)).toFixed(2);
        alert('Il prezzo del biglietto è di \n' + '€ ' + prezzo +'\n   Grazie per aver scelto il nostro servizio e Buon Viaggio');
      } else {
          alert('Il prezzo del biglietto è di \n' + '€ ' + prezzoDefault.toFixed(2) +'\n Grazie per aver scelto il nostro servizio e Buon Viaggio');
}
