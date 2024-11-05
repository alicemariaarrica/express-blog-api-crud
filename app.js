//Esercizio parte 1
//Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
//Tutte le risposte saranno in json.
//All'interno creare le seguenti rotte:
// / - index: ritornerà un html con una ul che stamperà la lista dei post
// /:slug - show: tramite il parametro dinamico che rappresenta lo slug del post, ritornerà un json con i dati del post
//Scrivere tutte le funzioni delle rotte nel controller dedicato
//Registrare il router dentro app.js con il prefisso posts/.

//Esercizio parte 2
//Per il nostro blog, concentriamoci sul creare una rotta:
//la rotta dovrá rispondere al verbo POST e delegare un metodo store del controller dei posts per effettuare le operazioni di creazione della risorsa.
//Questa dovrà riceve i dati in formato json e dovrà restituire l'elenco dei posts in formato json incluso il nuovo elemento appena creato
//Tutte le funzioni delle rotte dovranno essere scritte nel controller dedicato.
//Testare le rotte tramite Postman.


const express = require("express");
const app = express();
const port = 3333;


app.use(express.static(path.join(__dirname, "public")));

