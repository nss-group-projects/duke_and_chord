import { getAllInstruments } from "./data/InstrumentsStateManager.js";
import { DukeChord } from "./DukeChord.js";
import { NavBar } from "./nav/NavBar.js";

const header = document.querySelector("#header")
const container = document.querySelector("#content")

const renderAllStateAsHTML = () => {
    getAllInstruments()
        .then(() => {
            container.innerHTML = DukeChord()
        })
}

header.innerHTML = NavBar()
renderAllStateAsHTML()

container.addEventListener("stateChanged", renderAllStateAsHTML)
