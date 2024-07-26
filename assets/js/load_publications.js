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
      console.log(`Fetching metadata from ${folderPath}${metadataFile}`);
      const response = await fetch(`${folderPath}${metadataFile}`);
      if (!response.ok) throw new Error('Network response was not ok.');
      const fileList = await response.json();
      console.log('Metadata file loaded:', fileList);
      
      // Fetch each publication file listed in the metadata
      await Promise.all(fileList.map(file => fetchPublication(`${folderPath}${file}`)));
      
      publications.sort((a, b) => new Date(b.date) - new Date(a.date));
      console.log('Publications sorted:', publications);
      displayPublications();
    } catch (error) {
      console.error('Error fetching metadata:', error);
    }
  }

  async function fetchPublication(fileUrl) {
    try {
      // Fetch the publication file
      console.log(`Fetching publication from ${fileUrl}`);
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error('Network response was not ok.');
      const publication = await response.json();
      publications.push(publication);
      console.log('Publication loaded:', publication);
    } catch (error) {
      console.error('Error fetching publication:', error);
    }
  }

  function displayPublications() {
    const start = currentBatch * batchSize;
    const end = start + batchSize;
    const batch = publications.slice(start, end);

    if (batch.length === 0) {
      console.log('No more publications to display.');
      seeMoreButton.style.display = 'none';
      return;
    }

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
