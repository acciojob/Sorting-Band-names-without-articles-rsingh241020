// Array of band names
let bandNames = [
  'The Rolling Stones',
  'Aerosmith',
  'The Beatles',
  'Pink Floyd',
  'Led Zeppelin',
];

// Function to remove articles from a band name
function removeArticles(name) {
  return name.replace(/^(?:The|A|An)\s+/i, '').trim();
}

// Sort the band names lexicographically
bandNames.sort((a, b) => {
  const nameA = removeArticles(a);
  const nameB = removeArticles(b);
  return nameA.localeCompare(nameB);
});

// Get the ul element with id "band"
const ul = document.getElementById('band');

// Create and append li elements for each band name
bandNames.forEach((bandName) => {
  const li = document.createElement('li');
  li.textContent = bandName;
  ul.appendChild(li);
});
