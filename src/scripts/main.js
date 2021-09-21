import { getAllInstruments } from "./data/InstrumentsStateManager.js";
import { DukeChord } from "./DukeChord.js";

const container = document.querySelector("#container")

const renderAllStateAsHTML = () => {
    getAllInstruments()
        .then(() => {
            container.innerHTML = DukeChord()
        })
}

renderAllStateAsHTML()