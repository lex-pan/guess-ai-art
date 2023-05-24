let AiImages = ["backgroundImageThree.png"] /* api call */
let nonAiImages = ["backgroundImage.png", "backgroundImageTwo.png"] /* api call */

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
