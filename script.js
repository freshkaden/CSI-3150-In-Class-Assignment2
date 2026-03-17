let animalCount = 0;

function updateCount() {
    const display = document.getElementById('count-disp');
    display.innerText = `Animals on screen: ${animalCount}`;
}

function revealAnimal(animal) {
    const box = document.getElementById(`${animal}-box`);

    // Check if the box DOES NOT have the visible class
    if (box && !box.classList.contains('visible-animal')) {
        box.classList.add('visible-animal');
        animalCount++;
        updateCount();
    }
}

function hideAnimal(animal) {
    const box = document.getElementById(`${animal}-box`);

    // FIX: Changed 'visible.animal' to 'visible-animal'
    if (box && box.classList.contains('visible-animal')) {
        box.classList.remove('visible-animal');
        animalCount--;
        updateCount();
    }
}

function resetZoo() {
    // 1. Find all boxes using the result-box class
    const allBoxes = document.querySelectorAll('.result-box');
    
    // 2. Remove the visible class from all of them
    allBoxes.forEach(box => {
        box.classList.remove('visible-animal');
    });

    // 3. Reset the count and update the UI
    animalCount = 0;
    updateCount();
}