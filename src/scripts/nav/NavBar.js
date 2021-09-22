import { setView } from "../data/ViewStateManager.js"

const container = document.querySelector("#header")

container.addEventListener(
    "click",
    (event) => {
        if (event.target.className === "navLink") {
            setView(event.target.id)
        }
    }
)

export const NavBar = () => {
    return `
        <header>
            <img class="title--icon" src="/images/dukechord.png" height="150rem" />
            <h1 class="title--name">Duke &amp; Chord</h1>

            <hr/>

            <nav>
                <ul class="navLinks">
                    <li id="home" class="navLink">Home</li>
                    <li id="sales" class="navLink">Instruments</li>
                    <li id="classes" class="navLink">Classes</li>
                    <li id="logout" class="navLink">Logout</li>
                </ul>
            </nav>
        </header>

    `
}
