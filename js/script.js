// RACCOLTA DATI E ASSEGNAZIONE IN DELLE VARIABILI

// Con un input chiediamo al cliente i km che vuole porcorrere
const kmInputElem = document.getElementById ("km"); //object | null
console.log (kmInputElem, typeof kmInputElem);

// Con un prompt chiediamo al cliente l'età del passeggero
const ageInputElem = document.getElementById ("age"); //object | null
console.log (ageInputElem);

//Trasformo le variabili degli input in nuove variabili per recuperare il "value"

let kmValue = kmInputElem.value; //string
console.log (kmValue, typeof kmValue);

let ageValue = ageInputElem.value; //string
console.log (ageValue, typeof ageValue);


const clickElem = document.getElementById("btn");

clickElem.addEventListener("click", function() {
    kmValue = parseFloat(kmInputElem.value);
    console.log(kmValue,typeof kmValue);

    ageValue = parseInt(ageInputElem.value);
    console.log(ageValue, typeof ageValue);
    //PARTE LOGICA 

    // Calcoliamo il prezzo del biglietto in base ai km

    const priceKm = kmValue * 0.21;

    console.log(priceKm, typeof priceKm);

    //Calcoliamo lo sconto

    let discount = "";

    if (ageValue < 18){
    discount = priceKm * 0.20
    console.log(discount, typeof discount);
    } else if (ageValue > 65) {
    discount = priceKm * 0.40
    console.log(discount,typeof discount);
    } else {
    discount = 0;
    };

    //Calcoliamo il prezzo del biglietto

    const price = priceKm - discount;

    console.log (price, typeof price);

    //OUTPUT

    //Preparo il messaggio da stampare in pagina

    const result = `${price.toFixed(2)} €`;

    console.log(result, typeof result);

    const thanks = `Grazie per aver scelto di viaggiare con noi`

    //Stampiamo il risultato in pagine

    document.getElementById("price") .innerHTML = (result);

    document.getElementById("thank-you") .innerHTML = (thanks);
});
    

