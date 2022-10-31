// id UCFq30WFKUE5RKgFFXJfzGCg
//From rapid APIs
const API =
  'https://youtube-v31.p.rapidapi.com/search?channelId=UCFq30WFKUE5RKgFFXJfzGCg&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c1727653f3msh5312b82039bb0a2p1edfd0jsnb8603a267301',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

//when it loads, it executes our function
