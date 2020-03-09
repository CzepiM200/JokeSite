const searchResultsElement = document.querySelector('#search-results');

const generateHTML = text => `<li class="list-group-item">${text}</li>`;

export const showResult = (results) => {
    let html = results.map(results => 
        generateHTML(`<b>Setup:</b> ${results.setup} <br><b>Punchline</b> ${results.punchline}`)
        );
    searchResultsElement.innerHTML = html.join('');
}