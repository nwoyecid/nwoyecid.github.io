document.addEventListener("DOMContentLoaded", () => {
    const publicationsContainer = document.getElementById('publications');
    const metadataUrl = '_papers/metadata.json'; // Metadata file URL
    let publications = [];
    let displayedCount = 0;
    const batchSize = 10;

    // Function to fetch metadata file
    async function fetchMetadata() {
        try {
            const response = await fetch(metadataUrl);
            const metadata = await response.json();
            return metadata;
        } catch (error) {
            console.error('Error fetching metadata:', error);
        }
    }

    // Function to fetch publication content
    async function fetchPublicationContent(filePath) {
        try {
            const response = await fetch(filePath);
            const content = await response.json(); // Assuming content is JSON
            return content;
        } catch (error) {
            console.error('Error fetching publication content:', error);
        }
    }

    // Function to display publications
    function displayPublications(publicationsToDisplay) {
        publicationsToDisplay.forEach(pub => {
            const publicationElement = document.createElement('div');
            publicationElement.className = 'publication';

            const title = document.createElement('h2');
            title.textContent = pub.title;
            publicationElement.appendChild(title);

            const authors = document.createElement('p');
            authors.textContent = `Authors: ${pub.authors}`;
            publicationElement.appendChild(authors);

            const journal = document.createElement('p');
            journal.textContent = `Journal: ${pub.journal}`;
            publicationElement.appendChild(journal);

            const img = document.createElement('img');
            img.src = pub.featureImage;
            img.alt = pub.title;
            publicationElement.appendChild(img);

            const description = document.createElement('p');
            description.textContent = pub.description;
            publicationElement.appendChild(description);

            const links = document.createElement('div');
            pub.links.forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.textContent = link.label;
                a.target = '_blank';
                links.appendChild(a);
                links.appendChild(document.createElement('br'));
            });
            publicationElement.appendChild(links);

            publicationsContainer.appendChild(publicationElement);
        });
    }

    // Function to load and display publications
    async function loadAndDisplayPublications() {
        const metadata = await fetchMetadata();
        if (metadata && metadata.files) {
            // Fetch all publication content
            const fetchPromises = metadata.files.map(file => fetchPublicationContent(`papers/${file}`));
            const publicationsContent = await Promise.all(fetchPromises);

            // Flatten and sort publications
            publications = publicationsContent.flat().sort((a, b) => new Date(b.date) - new Date(a.date));

            // Display initial batch
            displayPublications(publications.slice(0, batchSize));
            displayedCount = batchSize;

            // Add "See More" button if there are more publications to show
            if (publications.length > displayedCount) {
                const seeMoreButton = document.createElement('button');
                seeMoreButton.textContent = 'See More';
                seeMoreButton.onclick = () => {
                    const nextBatch = publications.slice(displayedCount, displayedCount + batchSize);
                    displayPublications(nextBatch);
                    displayedCount += batchSize;

                    // Hide button if no more publications to show
                    if (displayedCount >= publications.length) {
                        seeMoreButton.style.display = 'none';
                    }
                };
                publicationsContainer.appendChild(seeMoreButton);
            }
        }
    }

    // Load and display publications when page is ready
    loadAndDisplayPublications();
});
