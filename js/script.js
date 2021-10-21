/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca*/

const age = parseInt(prompt('Quanti anni hai?'));

if(isNaN(age)){

  alert("Sono accettati solo i numeri");

}

const distance = parseInt(prompt('Quanti KM devi percorrere?'));


if(isNaN(distance)){

  alert("Sono accettati solo i numeri");

}


let price= 0
let sale= 0
let priceSale= 0



price= distance*0.21

/*Condizione per lo sconto*/
if (age<18) {
  sale= (price / 100) * 20;
  priceSale= price - sale;
  document.getElementById('output').innerHTML =
  `
  Il Prezzo del biglietto è: &euro;${priceSale.toFixed(2)}
  
  `;
} else if (age>65) {
  sale= (price / 100) * 40;
  priceSale= price - sale;
  document.getElementById('output').innerHTML =
  `
  Il Prezzo del biglietto è: &euro;${priceSale.toFixed(2)}
  
  
  `;
} else{
  document.getElementById('output').innerHTML =
  `
  Il Prezzo del biglietto è: &euro;${price.toFixed(2)}
  
  `;
}







/*BONUS*/
if (age<=20) {

  let sale20= parseInt(prompt('Hai meno di 20 anni, sei munito del codice sconto? 0 = NO  1 = SI'));

  switch (sale20) {
    case 0:
      if (age<18) {
        document.getElementById('output').innerHTML =
      `
      Il Prezzo del biglietto è: &euro;${priceSale.toFixed(2)}
      `;

      }else{

        document.getElementById('output').innerHTML =
        `
        Il Prezzo del biglietto è: &euro;${price.toFixed(2)}
        `;
      }
      
      break;
  
    default:

      let saleCode= prompt('Inserire il codice sconto: ');
      let sale20price= 0

      if (saleCode === 'SCONTO20' && age<18) {

        saleplus= (priceSale / 100) * 20;
        sale20price= priceSale - saleplus;
        document.getElementById('output').innerHTML =
        `
        Il Prezzo del biglietto è: &euro;${sale20price.toFixed(2)}
        
        `;

      }else if (saleCode === 'SCONTO20' && age>17 && age<21)
      {

        saleplus= (price / 100) * 20;
        sale20price= price - saleplus;
        document.getElementById('output').innerHTML =
        `
        Il Prezzo del biglietto è: &euro;${sale20price.toFixed(2)}
        
        `;
        
      }else {

        if (age<18) {
          document.getElementById('output').innerHTML =
        `
        Il tuo Codice è errato<br>
        Il Prezzo del biglietto è: &euro;${priceSale.toFixed(2)}
        `;

        }else{

          document.getElementById('output').innerHTML =
          `
          Il tuo Codice è errato<br>
          Il Prezzo del biglietto è: &euro;${price.toFixed(2)}
          `;
        }
        
      }

      break;
  }
  
}

