//your code here

// Input array of band names
let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Pink Floyd', 'Led Zeppelin'];

// Function to remove articles and sort lexicographically
function sortBandNames(bandNames) {
    // Define a list of common articles
    const articles = ['the', 'a', 'an'];

    // Create a custom comparison function
    function compareWithoutArticles(a, b) {
        // Remove articles from both band names
        const nameA = a.replace(new RegExp(`\\b(?:${articles.join('|')})\\b`, 'gi'), '').trim();
        const nameB = b.replace(new RegExp(`\\b(?:${articles.join('|')})\\b`, 'gi'), '').trim();

        // Compare the modified band names lexicographically
        return nameA.localeCompare(nameB);
    }

    // Sort the band names using the custom comparison function
    bandNames.sort(compareWithoutArticles);
}

// Call the function to sort the band names
sortBandNames(bandNames);

// Display the sorted band names in an HTML list
const ul = document.getElementById('band');
bandNames.forEach(bandName => {
    const li = document.createElement('li');
    li.textContent = bandName;
    ul.appendChild(li);
});
