const form = document.querySelector("#animal-form")
form.addEventListener("submit", (e) =>{
    e.preventDefault()
        const animalObj = {
        name: e.target.name.value,
        imgUrl: e.target.url.value,
        description: e.target.description.value,
        donation: 0
    }
        console.log(animalObj);
    createAnimal(animalObj).then(newAnimal => {
        console.log("succes",newAnimal)
    })
    }
)