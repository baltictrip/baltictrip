# Baltic Trip Map

Mappa interattiva del viaggio nei Baltici (Helsinki, Tallinn, Vilnius) realizzata con **Leaflet**.  
Ogni tappa contiene un marker con foto e descrizione, e una polilinea mostra il percorso tra le città.

## Demo

La versione pubblicata su GitHub Pages è disponibile qui:

https://baltictrip.github.io/baltictrip/

*(Se la pagina non è ancora visibile, vedi la sezione “Pubblicazione su GitHub Pages” qui sotto.)*

---

## Struttura del progetto

---

## Tecnologie utilizzate

- **Leaflet** – libreria JS per mappe interattive  
- **OpenStreetMap** – layer cartografico  
- **GitHub Pages** – hosting statico gratuito

---

## Come funziona

La mappa viene inizializzata centrata sui Paesi Baltici.  
Ogni città è definita in `script.js` con:

- coordinate GPS
- nome
- descrizione
- foto associata

Esempio:

```js
{
  name: "Tallinn – Old Town",
  coords: [59.437, 24.753],
  photo: "img/tallinn.jpg",
  description: "Centro storico medievale, patrimonio UNESCO."
}


