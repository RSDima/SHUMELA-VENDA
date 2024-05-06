// Function to fetch publications from Google Scholar
function fetchPublicationsFromGoogleScholar() {
    // Replace 'YOUR_API_KEY' with your actual Google Cloud Platform API key
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = 'https://api.scholar.google.com/v1/scholar';

    // Construct the search query URL for CSIR publications
    const query = 'csir';
    const maxResults = 10; // Number of publications to retrieve
    const searchUrl = `${apiUrl}?q=${encodeURIComponent(query)}&key=${apiKey}&max_results=${maxResults}`;

    // Fetch CSIR publications data from Google Scholar
    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            displayCSIRPublications(data);
        })
        .catch(error => {
            console.error('Error fetching CSIR publications:', error);
        });
}

// Function to display CSIR publications on the webpage
function displayCSIRPublications(data) {
    const publicationsList = document.getElementById('csirPublicationsList');

    // Clear any existing content in the list
    publicationsList.innerHTML = '';

    // Loop through each publication and create HTML elements to display them
    data.publications.forEach(publication => {
        const publicationItem = document.createElement('div');
        publicationItem.classList.add('col-lg-6', 'col-xl-4', 'mb-5');

        const publicationCard = document.createElement('div');
        publicationCard.classList.add('card', 'h-100');

        const publicationCardBody = document.createElement('div');
        publicationCardBody.classList.add('card-body');

        const publicationTitle = document.createElement('h5');
        publicationTitle.classList.add('card-title');
        publicationTitle.textContent = publication.title;

        const publicationAuthors = document.createElement('p');
        publicationAuthors.classList.add('card-text', 'small', 'text-muted', 'mb-2');
        publicationAuthors.textContent = `Authors: ${publication.authors.join(', ')}`;

        const publicationYear = document.createElement('p');
        publicationYear.classList.add('card-text', 'small', 'text-muted', 'mb-2');
        publicationYear.textContent = `Year: ${publication.year}`;

        const publicationSnippet = document.createElement('p');
        publicationSnippet.classList.add('card-text');
        publicationSnippet.textContent = publication.snippet;

        publicationCardBody.appendChild(publicationTitle);
        publicationCardBody.appendChild(publicationAuthors);
        publicationCardBody.appendChild(publicationYear);
        publicationCardBody.appendChild(publicationSnippet);

        publicationCard.appendChild(publicationCardBody);
        publicationItem.appendChild(publicationCard);

        publicationsList.appendChild(publicationItem);
    });
}

// Call the function to fetch CSIR publications when the page loads
document.addEventListener('DOMContentLoaded', fetchPublicationsFromGoogleScholar);
