const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
    {
        src: 'aries.webp',
        alt: 'Áries',
        description: 'Mu de Áries é conhecido por sua inteligência e habilidades de telecinese.'
    },
    {
        src: 'touro.webp',
        alt: 'Touro',
        description: 'Aldebaran possui força colossal e protege a Casa de Touro.'
    },
    {
        src: 'gemeos.webp',
        alt: 'Gêmeos',
        description: 'Saga de Gêmeos domina técnicas dimensionais devastadoras.'
    },
    {
        src: 'cancer.webp',
        alt: 'Câncer',
        description: 'Máscara da Morte controla espíritos e o mundo dos mortos.'
    },
    {
        src: 'leao.webp',
        alt: 'Leão',
        description: 'Aiolia é um dos cavaleiros mais velozes e poderosos.'
    },
    {
        src: 'virgem.webp',
        alt: 'Virgem',
        description: 'Shaka é considerado o homem mais próximo de Deus.'
    },
    {
        src: 'libra.webp',
        alt: 'Libra',
        description: 'Dohko guarda as armas de Libra e possui grande sabedoria.'
    },
    {
        src: 'escorpiao.webp',
        alt: 'Escorpião',
        description: 'Milo utiliza a técnica da Agulha Escarlate.'
    },
    {
        src: 'sagitario.webp',
        alt: 'Sagitário',
        description: 'Aiolos foi o cavaleiro que salvou Atena ainda bebê.'
    },
    {
        src: 'capricornio.webp',
        alt: 'Capricórnio',
        description: 'Shura possui a lendária Excalibur em seus braços.'
    },
    {
        src: 'aquario.webp',
        alt: 'Aquário',
        description: 'Camus domina o frio absoluto e as técnicas de gelo.'
    },
    {
        src: 'peixes.webp',
        alt: 'Peixes',
        description: 'Afrodite utiliza rosas mortais em combate.'
    },
];

const baseURL = 'images/';
const signTitle = document.querySelector('#sign-title');
const signDescription = document.querySelector('#sign-description');

for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', baseURL + image.src);
    newImage.setAttribute('alt', image.alt);
    newImage.setAttribute('tabindex', '0')
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        updateDisplayedImage(
            baseURL + image.src,
            image.alt,
            image.description
        );
    })
    
    newImage.addEventListener('keydown', (e) => {
        if (e.key === 'Enter'){
            updateDisplayedImage(
                baseURL + image.src,
                image.alt,
                image.description
            );
        }
    })
}

function updateDisplayedImage(src, alt, description) {
    displayedImage.src = src;
    displayedImage.alt = alt;

    signTitle.textContent = alt;
    signDescription.textContent = description;
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function() {
    const isDark = btn.classList.toggle('dark');
    btn.textContent = isDark ? 'Lighten' : 'Darken';
    overlay.style.backgroundColor = isDark ? 'rgba(0, 0, 0, .5)' : 'rgba(0, 0, 0, 0)';
});