import { fetchAllClasses } from "./data/ClassStateManager.js";
import { fetchAllInstruments } from "./data/InstrumentsStateManager.js";
import { setView } from "./data/ViewStateManager.js";
import { DukeChord } from "./DukeChord.js";
import { NavBar } from "./nav/NavBar.js";

const header = document.querySelector("#header")
const container = document.querySelector("#content")

const syncStorage = () => {
    const view = sessionStorage.getItem("chord_view")
    view ? setView(view) : setView("home")
}

const renderAllStateAsHTML = () => {

    fetchAllInstruments()
    .then(fetchAllClasses)
    .then(() => {
        container.innerHTML = DukeChord()
    })
}

header.innerHTML = NavBar()
syncStorage()
renderAllStateAsHTML()

container.addEventListener("stateChanged", renderAllStateAsHTML)
