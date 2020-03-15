const charactersList = document.getElementById('charactersList');

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="card">
                <div class="card__image">
                    <img src="${character.image}"></img>
                </div>
                <div class="card__details">
                    <h2 class="card__title">${character.name}</h2>
                    <p class="card__details">House: ${character.house}</p>
                </div>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
