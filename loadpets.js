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

function displayPets(petsToShow) {
    const petList = document.getElementById('pet-list');
    petList.innerHTML = ''; // Clear existing pets
    
    for(let i = 0; i < petsToShow.length; i++) {
        const pet = petsToShow[i];
        const petDiv = document.createElement('div');
        petDiv.className = 'pet';
        petDiv.innerHTML = `
            <img src="${pet.img}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p>Age: ${pet.age} years</p>
        `;
        petList.appendChild(petDiv);
    }
}

function filterPets() {
    const checkboxes = document.querySelectorAll('input[name="pets"]:checked');
    const selectedTypes = Array.from(checkboxes).map(cb => cb.value);
    
    if (selectedTypes.length === 0) {
        // If no checkboxes are selected, show nothing
        displayPets([]);
    } else {
        // Filter pets based on selected types
        const filteredPets = pets.filter(pet => 
            selectedTypes.includes(pet.type.toLowerCase())
        );
        displayPets(filteredPets);
    }
}

// Initial display of all pets
displayPets(pets);

// Add event listeners to checkboxes and check them by default
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[name="pets"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = true; // Automatically check all boxes
        checkbox.addEventListener('change', filterPets);
    });
});