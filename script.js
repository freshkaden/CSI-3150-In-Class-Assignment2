function revealAnimal(animal) {

    const box = document.getElementById(`${animal}-box`);
    box.classList.remove('hidden-animal');
    box.classList.add('visible-animal');
}

function hideAnimal(animal) {
    const box = document.getElementById(`${animal}-box`);
    box.classList.remove('visible-animal');
    box.classList.add('hidden-animal');
}