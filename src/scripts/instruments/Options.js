import { getFilter, setFilter, shouldPlaySounds, turnOffSounds, turnOnSounds } from "../data/InstrumentsStateManager.js"

const container = document.querySelector("#content")
let playSound = false

container.addEventListener(
    "click",
    (event) => {
        const currentFilter = getFilter()

        switch (true) {
            case event.target.classList.contains("option__filter--percussion"):
                currentFilter === "percussion" ? setFilter("") : setFilter("percussion")
                break;

                case event.target.classList.contains("option__filter--string"):
                currentFilter === "string" ? setFilter("") : setFilter("string")
                break;

                case event.target.classList.contains("option__filter--wind"):
                currentFilter === "wind" ? setFilter("") : setFilter("wind")
                break;

            case event.target.classList.contains("option__sound"):
                playSound = shouldPlaySounds()
                playSound ? turnOffSounds() : turnOnSounds()
                break;

            default:
                break;
        }
    }
)

export const Options = () => {
    playSound = shouldPlaySounds()

    return `
        <nav class="options" id="options">
        <img class="option option__sound" src="/images/sound-${playSound ? "on" : "off"}.jpg" height="40rem" width="40rem" />
        <img class="option option__filter--wind" src="/images/filter--wind.jpeg" />
        <img class="option option__filter--string" src="/images/filter--string.jpeg" />
        <img class="option option__filter--percussion" src="/images/filter--percussion.jpeg" />
        </nav>
    `
}
