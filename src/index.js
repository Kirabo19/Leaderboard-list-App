import './lead.css';

const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

fetch(api, {
  method: 'POST',
  body: JSON.stringify({
    name: 'My cool new game',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

const form = document.querySelector('#leader_form');
const userName = document.querySelector('#userName');
const userScore = document.querySelector('#userScore');

const newScoreAndUser = async () => {
  await fetch(`${api}games/Zl4d7IVkemOTTVg2fUdz/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: userName.value,
      score: userScore.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  newScoreAndUser();
  form.reset();
});

// Display the Data

const scoresList = document.querySelector('.lead_list');

const display = (data) => {
  scoresList.innerHTML = '';
  data.forEach((item) => {
    scoresList.innerHTML += `<li>${item.user}:${item.score}</li>`;
  });
};

// GET Data to API

const refreshBtn = document.querySelector('.Refresh_btn');

const getScoresList = async () => {
  const getScrores = await fetch(`${api}games/Zl4d7IVkemOTTVg2fUdz/scores/`);
  const reponse = await getScrores.json();
  const data = JSON.parse(JSON.stringify(reponse));
  display(data.result);
};

refreshBtn.addEventListener('click', getScoresList);

// Window onLoad

window.onload = getScoresList();