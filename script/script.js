const lifeContainer = document.querySelector('.life-container')

const lifeFormatter = new Intl.NumberFormat("en-us", {
    minimumIntegerDigits: 4,
    maximumFractionDigits: 0,
    useGrouping: false
})

const lifeDisplay = 6785
setupLife()

async function setupLife() {
    const stringifiedAmount = lifeFormatter.format(lifeDisplay)

    const lifeAmounts = {
        xxl: {
            amount: parseInt(`${stringifiedAmount[0]}`),
            icon: "fish3"
        },
        xl: {
            amount: parseInt(`${stringifiedAmount[1]}`),
            icon: "fish"
        },
        l: {
            amount: parseInt(`${stringifiedAmount[2]}`),
            icon: "frog"
        },
        m: {
            amount: parseInt(`${stringifiedAmount[3]}`),
            icon: "fish2"
        },
    }

    Object.values(lifeAmounts).forEach(({amount, icon}) => {
        for(let i = 0; i< amount; i++) {
            createLife(icon)
        }
    })
}

function createLife(icon) {
    const img = document.createElement("img")
    const top = randomNumberBetween(0, 50)
    img.classList.add("life")
    const size = top / 5 + 1
    img.style.width = `${size}vmin`
    img.style.height = `${size}vmin`
    img.style.top = `${top}vh`
    img.style.left = `${randomNumberBetween(0, 100)}vw`
    img.style.setProperty("--rotation", `${randomNumberBetween(-30, 30)}deg`)
    img.src = `./assets/${icon}.svg`
    lifeContainer.appendChild(img)
}

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}