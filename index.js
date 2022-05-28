const form = document.querySelector("#animal-form")
form.addEventListener("submit", (e) => {
        e.preventDefault()
        const animalObj = {
            name: e.target.name.value,
            imgUrl: e.target.url.value,
            description: e.target.description.value,
            donation: 0
        }
        console.log(animalObj);
        createAnimal(animalObj).then(newAnimal => {
            console.log("succes", newAnimal)
        })
    }
)

const body = document.querySelector("body")
fetch("http://localhost:3000/animals")
    .then(response => {
        return response.json()
    }).then(animals => {
        animals.forEach(item => {
            const card = document.createElement("ul");
            card.classList.add("cards")
            document.body.append(card)
            const name = document.createElement("h3")
            const img = document.createElement("img")
            const description = document.createElement("p")
            name.textContent = item.name
            img.src = item.imgUrl
            description.textContent = item.description
            card.append(name)
            card.append(img)
            card.append(description)
        })
    })
