import animalNames from './animalNames'
const animal_names = animalNames(); 
let AiImages = ["backgroundImageThree.png"] /* api call */
let nonAiImages = ["backgroundImage.png", "backgroundImageTwo.png"] /* api call */

export function randomizeNames(range, amountOfNumbers) {
    /*first parameter, choose a number between a range */
    /*second parameter, choose the number of numbers that should be returned */
    let numbers = new Set();
    while (numbers.size < amountOfNumbers) {
        let randomNumber = Math.floor(Math.random() * range);
        numbers.add(randomNumber);
    }
    
    numbers = Array.from(numbers);
    let animalsChosen = [];
    for (let i = 0; i < numbers.length; i++) {
        let animalName = animal_names[numbers[i]]
        animalsChosen.push(animalName);
    }
    return animalsChosen;
}

export function correctAnimalIndex(range) {
    let randomNumber = Math.floor(Math.random() * range);
    return randomNumber;
}

export function getImageUrl(typeOfArt) {
    /* if type is 1 then Ai Art should be used. If result is 0, 
    then non-Ai/user generated content should be used */
    let imageUrl = null;
    if (typeOfArt === 1) {
        let index = Math.floor(Math.random() * AiImages.length);
        imageUrl = AiImages[index];

    } else {
        let index = Math.floor(Math.random() * nonAiImages.length);
        imageUrl = nonAiImages[index];
    }   

    return imageUrl;
}

export function functionNameTwo() {
    
}

export function functionNameThree() {
    return (
        <></>
    )
}
