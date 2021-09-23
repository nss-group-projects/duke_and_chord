import { setView } from "../data/ViewStateManager.js"

document.querySelector("#header").addEventListener(
    "click",
    event => {
        setView("home")
        document.querySelector("#content").dispatchEvent(
            new CustomEvent("stateChanged")
        )
    }
)

export const Header = () => {
    return `
        <header>
            <img class="title--icon" src="/images/dukechord.png" height="150rem" />
            <h1 class="title--name">Duke &amp; Chord</h1>

            <hr/>
        </header>
    `
}
