const pets = [
    {
        "name": "Buddy",
        "type": "Dog",
        "age": 3,
        "img": "img/dogs/dog01.jpg"
    },
    {
        "name": "Buddy",
        "type": "Dog",
        "age": 3,
        "img": "img/dogs/dog02.jpg"
    },
    { 
        "name": "Whiskers", 
        "type": "Cat", 
        "age": 2, 
        "img": "img/cats/cat01.jpg" 
    },
    { 
        "name": "Mittens", 
        "type": "Cat", 
        "age": 4,
        "img": "img/cats/cat02.jpg"
    },
    {
        "name": "Max",
        "type": "bird",
        "age": 5,
        "img": "img/birds/bird01.jpg"
    },
    {
        "name": "Luna",
        "type": "bird",
        "age": 1,
        "img": "img/birds/bird02.jpg"
    },
    {
        "name": "Charlie",
        "type": "capybara",
        "age": 2,
        "img": "img/capybaras/capybara01.jpg"
    },
    {
        "name": "Bella",
        "type": "capybara",
        "age": 3,
        "img": "img/capybaras/capybara02.jpg"
    }
]

for(let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    const petDiv = document.getElementById('pet-list')
                    .appendChild(document.createElement('div'));
    petDiv.className = 'pet';
    petDiv.innerHTML = `
        <img src="${pet.img}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
    `;
    // document.getElementById('pet-list').appendChild(petDiv);
}