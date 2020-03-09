import axios from 'axios';
import { showResult } from './js/search-joke-results'
import { showCat } from './js/search-cat-picture'

const searchFormElement = document.querySelector('#search-form');
const searchOptionElement = document.querySelector('#search-option');

const apiJokeBasedURL = 'https://official-joke-api.appspot.com/jokes';
const apiCatBasedURL = 'https://aws.random.cat/meow';
let searchOption = 'general';

searchOptionElement.addEventListener('change', function (e) {
    searchOption = this.value;
    console.log('change event');
})

searchFormElement.addEventListener('submit', function (e) {
    e.preventDefault();
    const apiJokeURL = `${apiJokeBasedURL}/${searchOptionElement.value}/random`;

    axios.get(apiJokeURL)
        .then(result => result.data)
        .then(data => showResult(data))
        .catch(error => console.log(error));

        axios.get(apiCatBasedURL)
        .then(result => result.data)
        .then(data => showCat(data))
        .catch(error => console.log(error));
});
