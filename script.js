// Inizializza la mappa
const map = L.map('map').setView([58.5, 24.0], 6);

// Layer base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Tappe del viaggio
const places = [
  {
    name: "Helsinki – Cattedrale",
    coords: [60.1699, 24.9384],
    photo: "img/helsinki.jpg",
    description: "La Cattedrale bianca, simbolo della città."
  },
  {
    name: "Tallinn – Old Town",
    coords: [59.437, 24.753],
    photo: "img/tallinn.jpg",
    description: "Centro storico medievale, patrimonio UNESCO."
  },
  {
    name: "Vilnius – Cattedrale",
    coords: [54.686, 25.287],
    photo: "img/vilnius.jpg",
    description: "Cuore storico della capitale lituana."
  }
];

// Marker + popup con foto
places.forEach(place => {
  const popupContent = `
    <h3>${place.name}</h3>
    <img src="${place.photo}" alt="${place.name}" width="200" />
    <p>${place.description}</p>
  `;
  L.marker(place.coords).addTo(map).bindPopup(popupContent);
});

// Percorso tra le tre città
const route = [
  [60.1699, 24.9384], // Helsinki
  [59.437, 24.753],   // Tallinn
  [54.686, 25.287]    // Vilnius
];

L.polyline(route, { color: 'blue', weight: 3 }).addTo(map);
