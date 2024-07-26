document.addEventListener('DOMContentLoaded', () => {
  const folderPath = '_papers/';
  const metadataFile = 'publications.json';
  const publicationsList = document.getElementById('publications-list');
  const seeMoreButton = document.getElementById('see-more');
  let publications = [];
  let batchSize = 10;
  let currentBatch = 0;

  async function fetchMetadata() {
    try {
      // Fetch the metadata file listing all publication files
      const response = await fetch(`${folderPath}${metadataFile}`);
      const fileList = await response.json();
      
      // Fetch each publication file listed in the metadata
      await Promise.all(fileList.map(file => fetchPublication(`${folderPath}${file}`)));
      
      publications.sort((a, b) => new Date(b.date) - new Date(a.date));
      displayPublications();
    } catch (error) {
      console.error('Error fetching metadata:', error);
    }
  }

  async function fetchPublication(fileUrl) {
    try {
      // Fetch the publication file
      const response = await fetch(fileUrl);
      const publication = await response.json();
      publications.push(publication);
    } catch (error) {
      console.error('Error fetching publication:', error);
    }
  }

  function displayPublications() {
    const start = currentBatch * batchSize;
    const end = start + batchSize;
    const batch = publications.slice(start, end);

    batch.forEach(pub => {
      const publicationElement = document.createElement('div');
      publicationElement.className = 'publication';

      publicationElement.innerHTML = `
        <h2>${pub.title}</h2>
        <p><strong>Authors:</strong> ${pub.authors}</p>
        <p><strong>Journal:</strong> ${pub.journal}</p>
        <img src="${pub.image}" alt="${pub.title}" />
        <p>${pub.abstract}</p>
        <p>
          <a href="${pub.links.arxiv}">arXiv</a> |
          <a href="${pub.links.publication}">Publication</a> |
          <a href="${pub.links.code}">Code</a> |
          <a href="${pub.links.project}">Project</a>
        </p>
      `;

      publicationsList.appendChild(publicationElement);
    });

    currentBatch++;
    if (currentBatch * batchSize >= publications.length) {
      seeMoreButton.style.display = 'none';
    } else {
      seeMoreButton.style.display = 'block';
    }
  }

  seeMoreButton.addEventListener('click', () => {
    displayPublications();
  });

  fetchMetadata();
});
