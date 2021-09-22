import { InstrumentList } from "./instruments/InstrumentList.js"
import { NavBar } from "./nav/NavBar.js"

export const DukeChord = () => {
    return `
        ${ InstrumentList() }
    `
}
