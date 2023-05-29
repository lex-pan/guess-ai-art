import animalNames from './animalNames'
const animal_names = animalNames(); 
let AiImages = ["backgroundImageThree.png"] /* api call */
let nonAiImages = ["backgroundImage.png", "backgroundImageTwo.png"] /* api call */
let animalDescription = [
    {
      "name": "Angelfish",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Actinopterygii",
        "order": "Perciformes",
        "family": "Pomacanthidae"
      },
      "locations": [
        "Ocean"
      ],
      "characteristics": {
        "main_prey": "Sponges, algae",
        "group_behavior": "Social",
        "estimated_population_size": "Unknown",
        "biggest_threat": "Water pollution",
        "most_distinctive_feature": "Brightly colored scales",
        "gestation_period": "1-3 days",
        "water_type": "Salt",
        "optimum_ph_level": "6.5 - 7.2",
        "habitat": "Coral reefs",
        "predators": "Larger fish, barracudas, sharks",
        "diet": "Omnivore",
        "favorite_food": "Fish",
        "type": "Perciformes",
        "common_name": "Angelfish",
        "number_of_species": "90",
        "slogan": "There are 70 different species!",
        "color": "YellowBlueBlackWhiteGreen",
        "skin_type": "Scales",
        "lifespan": "Up to 15 years",
        "weight": "Up to 2 pounds",
        "length": "8 to 12 inches"
      }
    }
]

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

export async function getAnimalDescription(animalName) {
    // api call but for now, using sample data
    let description_tags = ["habitat", "prey", "main_prey", "predators", "top_speed", "lifespan", "weight", "height", "length", "venomous", "aggression"]
    let data = animalDescription;
    let filtered_data = [[], {}, []];

    for (let i = 0; i < data.length; i++) {
        let animal = animalDescription[i];
        if (animal["name"] === animalName) {
            
            //put locations into first list
            for (let b=0; b < animal["locations"].length; b++) {
                filtered_data[0].push(animal["locations"][b]);
            }

            //put characteriscs into second list
            for (let a = 0; a < description_tags.length; a++) {
                if (description_tags[a] in animal["characteristics"]) {
                    let description_tag_no_underscore = description_tags[a].replace("_", " ");
                    filtered_data[1][description_tag_no_underscore] = animal["characteristics"][description_tags[a]]; 
                }
            }

            //put slogan into third list
            filtered_data[2].push(animal["characteristics"]["slogan"]);
        }
    }
    return filtered_data;
}

export function functionNameThree() {
    return (
        <></>
    )
}
