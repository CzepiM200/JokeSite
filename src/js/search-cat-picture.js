const searchResultsElement = document.querySelector('#cat-picture');

const generateHTML = URL => `<center><img src="${URL}" class="img-fluid" alt="Responsive image"></center>`;

export const showCat = (results) => {
    let html = generateHTML(results.file);
    searchResultsElement.innerHTML = html;
}