// 1 - Chiedere l'eta' del passeggero tramite input;
//     1.1 - Realizare campo input per eta facendo sceglire tra le 3 fasce di età;
// 2 - Chiedere i km da percorrere tramite input;
//     2.1 - Realizzare campo input per inserire i km;
// 3 - Chiedere il nome dell'utente
//     3.1 - Realizzare campo input per nome e cognome
// 4 - Calcolo del prezzo del biglietto (0.21 x km percorsi) alla pressione di un pulsante;
//     4.1 - Realizzare pulsante
//     4.2 - Recuperare i valori dei campi input alla pressione del pulsante;
//     4.3 - Se età < 18 = calcolo del prezzo scontato del 20%;
//     4.4 - Se età > 65 = calcolo del prezzo scontato del 40%;
//     4.5 - Se età (18 <= x <= 65) non applicare nessuno sconto
// 5 - Mostrare a video i dati inseriti Nome, Cognome, Categoria biglietto, Prezzo finale
//     5.1 - Realiizare nell'html elementi per inserire i risultati

const price_button = document.getElementById("calc")

let nome_e_cognome;
let eta;
let chilometri;
let prezzo;
let categoria_biglietto

price_button.addEventListener ("click", function(){
    nome_e_cognome = document.getElementById("name_surname").value;
    console.log(nome_e_cognome)

    eta = document.getElementById("eta").value;
    console.log(eta)

    chilometri = document.getElementById("km").value;
    console.log(chilometri)

    if (eta == "minorenne"){
        prezzo = (0.21 * chilometri * 0.8).toFixed(2)
        categoria_biglietto = ("Scontato 20%")
    }
    else if (eta == "over"){
        prezzo = (0.21 * chilometri * 0.6).toFixed(2)
        categoria_biglietto = ("Scontato 40%")
    }
    else if (eta == "maggiorenne"){
        prezzo = (0.21 * chilometri).toFixed(2)
        categoria_biglietto = ("Biglietto standard")
    }
    else{
        alert("SELEZIONE UNA ETA'!")
    }

    console.log(prezzo)

    document.getElementById("put_price").innerHTML = prezzo + " $"
    document.getElementById("put_name").innerHTML = nome_e_cognome
    document.getElementById("put_type_ticket").innerHTML = categoria_biglietto
})