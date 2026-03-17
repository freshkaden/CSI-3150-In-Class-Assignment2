let animalCount = 0;

function updateCount() {
    const display = document.getElementById('count-disp');
    display.innerText = `Animals on screen: ${animalCount}`;
}

function revealAnimal(animal) {
    const box = document.getElementById(`${animal}-box`);
    const btn = box.nextElementSibling;

    if (box && !box.classList.contains('visible-animal')) {
        box.classList.add('visible-animal');
        btn.classList.add('reveal-btn-active');
        animalCount++;
        updateCount();
    }
}

function hideAnimal(animal) {
    const box = document.getElementById(`${animal}-box`);
    const btn = box.nextElementSibling;

    if (box && box.classList.contains('visible-animal')) {
        box.classList.remove('visible-animal');
        btn.classList.remove('reveal-btn-active');
        animalCount--;
        updateCount();
    }
}

function resetZoo() {

    const allBoxes = document.querySelectorAll('.result-box');
    

    // remove all visible animals
    allBoxes.forEach(box => {
        box.classList.remove('visible-animal');
    });

   // reset count
    animalCount = 0;
    updateCount();
}