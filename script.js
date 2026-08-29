// Inizializza la mappa centrata su Helsinki
const map = L.map('map').setView([60.17, 24.94], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Icona personalizzata
const customIcon = L.icon({
  iconUrl: 'img/marker.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

// TAPPE DEL PERCORSO DI HELSINKI — FOTO MULTIPLE
const helsinkiRoute = [
  {
    name: "Aeroporto HEL",
    coords: [60.31836, 24.96334],
    photos: ["hel1.jpg", "hel2.jpg"],
    description: "Arrivo a Helsinki-Vantaa Airport."
  },
  {
    name: "Stazione centrale",
    coords: [60.1710, 24.9414],
    photos: ["central1.jpg", "central2.jpg"],
    description: "Helsinki Central Railway Station."
  },
  {
    name: "Piazza del Senato",
    coords: [60.1699, 24.9523],
    photos: ["senate1.jpg", "senate2.jpg"],
    description: "Senate Square, cuore storico della città."
  },
  {
    name: "Cattedrale Uspenski",
    coords: [60.1686, 24.9583],
    photos: ["uspenski1.jpg", "uspenski2.jpg"],
    description: "Cattedrale ortodossa di Uspenski."
  },
  {
    name: "Allas Sea Pool",
    coords: [60.1682, 24.9596],
    photos: ["allas1.jpg", "allas2.jpg"],
    description: "Piscine sul mare con vista sul porto."
  },
  {
    name: "Mercato coperto",
    coords: [60.1679, 24.9526],
    photos: ["market1.jpg", "market2.jpg"],
    description: "Mercato coperto storico sul waterfront."
  },
  {
    name: "Esplanadi Park",
    coords: [60.1676, 24.9459],
    photos: ["esplanadi1.jpg", "esplanadi2.jpg"],
    description: "Viale alberato nel centro di Helsinki."
  },
  {
    name: "Kappeli",
    coords: [60.1677, 24.9454],
    photos: ["kappeli1.jpg", "kappeli2.jpg"],
    description: "Storico ristorante nel parco Esplanadi."
  },
  {
    name: "Biblioteca Oodi",
    coords: [60.1735, 24.9383],
    photos: ["oodi1.jpg", "oodi2.jpg"],
    description: "Oodi, la nuova biblioteca centrale."
  },
  {
    name: "Töölönlahden Park",
    coords: [60.1770, 24.9345],
    photos: ["toolon1.jpg", "toolon2.jpg"],
    description: "Parco intorno al lago Töölönlahti."
  },
  {
    name: "Lasipalatsi Square",
    coords: [60.1694, 24.9389],
    photos: ["lasipalatsi1.jpg", "lasipalatsi2.jpg"],
    description: "Piazza moderna vicino a Kamppi."
  },
  {
    name: "Omena Hotel",
    coords: [60.1679, 24.9380],
    photos: ["omena1.jpg", "omena2.jpg"],
    description: "Omena Hotel in zona centrale."
  },
  {
    name: "Terminal traghetti per Tallinn",
    coords: [60.1575, 24.9550],
    photos: ["ferry1.jpg", "ferry2.jpg"],
    description: "Terminal traghetti per Tallinn."
  }
];

// MARKER + POPUP CON FOTO MULTIPLE + GLIGHTBOX
helsinkiRoute.forEach(stop => {

  const photosHtml = stop.photos
    .map(photo => `
      <a href="img/${photo}" class="glightbox" data-gallery="${stop.name}">
        <img src="img/${photo}" width="150" style="margin:5px; border-radius:4px;" />
      </a>
    `)
    .join("");

  const popupContent = `
    <h3>${stop.name}</h3>
    <div style="display:flex; flex-wrap:wrap; gap:10px;">
      ${photosHtml}
    </div>
    <p>${stop.description}</p>
  `;

  const marker = L.marker(stop.coords, { icon: customIcon })
    .addTo(map)
    .bindPopup(popupContent);

  // 🔥 CORREZIONE FONDAMENTALE: inizializza GLightbox quando il popup si apre
marker.on('popupopen', () => {
  GLightbox({
    selector: '.leaflet-popup-content .glightbox'
  });
});
});

// POLILINEA DEL PERCORSO
const routeCoords = helsinkiRoute.map(stop => stop.coords);

L.polyline(routeCoords, {
  color: 'red',
  weight: 4
}).addTo(map);
