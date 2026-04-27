let hour = 14;
if  (hour < 12) {
    console.log("Доброе утро!")
}   else if (hour < 18)    {
    console.log("добрый день!")
}   else {console.log("Добрый вечер")}

for (let i = 0; i < 5; i++) {
    console.log(i)
}

const buttonDarkOrLight = document.querySelector(".DorL")

buttonDarkOrLight.addEventListener("click", function() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "rgb(204, 200, 186)"
    } else {
        document.body.style.backgroundColor = "black"
    }
})

const button = document.querySelector(".button")
const title = document.getElementById("title")

button.addEventListener("click", function() {
    if (title.textContent === "Alexey Kozar")    {
    title.textContent = ("Alexey — Frontend Developer")
        }   else    {
    title.textContent = ("Alexey Kozar")
        }
    }
)

function greet(name,age) {
    return "Привет! Меня зовут " + name +", мне " + age + " лет."
}

const greetArrow = (name, age) => {
    return "Привет! Меня зовут " + name +", мне " + age + " лет."
}

//console.log(greet("Alexey", 21))
console.log(greetArrow("Alexey", 21))

const skills = ["HTML","CSS","JS"]
console.log(skills[0])

skills.push("React")

console.log(skills.length)

skills.forEach((skill) => {
    console.log(skill)
})

const devoloper = {
    name: "Alexey",
    age: 21,
    skills: ["HTML", "CSS", "JS"],
    greet: function() {
    return "Меня зовут Alexey, я Frontend Developer"
    }
}
console.log(devoloper.name)
console.log(devoloper.skills[1])
console.log(devoloper.greet())

const input = document.getElementById("nameInput")
const btn = document.getElementById("greetBtn")
const result = document.getElementById("result")

btn.addEventListener("click", () => {
    const name = input.value
    result.textContent = "Привет, " + name + "!"
})