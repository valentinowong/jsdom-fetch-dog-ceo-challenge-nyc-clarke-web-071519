console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', (event) => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    const dogBreedsList = document.querySelector("ul#dog-breeds");
    const selector = document.querySelector('select#breed-dropdown')

    // Challenge 1
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(function(json){
        const dogImageContainer = document.getElementById("dog-image-container");
        json.message.forEach(function(imageUrl){
            const dogImage = new Image(200,200);
            dogImage.src = imageUrl;
            dogImageContainer.appendChild(dogImage);
        })
    });

    // Challenge 2
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(function(json){
        Object.keys(json.message).forEach(function(breed){
            const liBreed = document.createElement('li');
            liBreed.textContent = breed;
            dogBreedsList.appendChild(liBreed);
        })  
    });

    // Challenge 3
    dogBreedsList.addEventListener("click", function(event){
        if (event.target.tagName === "LI") {
            event.target.style.color = "red"
        }
    })

    // Challenge 4
    selector.addEventListener('change', function(event) {
        const dogBreedsLis = document.querySelectorAll('li');
        dogBreedsLis.forEach(function(li){
            li.style.display = ""
            if (li.textContent.charAt(0) !== event.target.value) {
                li.style.display = "none"
            }
        })
    });
});