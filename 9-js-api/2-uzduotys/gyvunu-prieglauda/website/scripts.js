const BASE_URL = 'http://localhost:7789';

const getData = (url) => {
    return fetch(BASE_URL + url).then(response => response.json())
};

const generatePetsHTML = (pets) => {
    return pets.map(pet => `
      <div class="col-5">
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${pet.name}</h5>
                  <p class="card-text">Metai: ${pet.age}</p>
                  <p class="card-text">Veislė: ${pet.breed}</p>
                  <p class="card-text">${pet.type}, ${pet.vaccinated ? "skiepyta(s)" : "neskiepyta(s)"} - ${pet.state}</p>
                  <p class="card-text">
                      ${pet.features.map(feature => `<span class="badge text-bg-primary me-1">
                        ${feature}</span>`).join(' ')}
                  </p>
                  <p class="card-text">${pet.description}</p>
          </div>
        </div>
      </div>
    `).join('');
  };

  window.addEventListener('DOMContentLoaded', async () => {
    const pets = await getData('/pets');
    document.querySelector('.cards-list').innerHTML = generatePetsHTML(pets);
  });

  http://localhost:7789/pets/filters-list