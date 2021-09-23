import { getView } from "./data/ViewStateManager.js"
import { Home } from "./instruments/Home.js"
import { InstrumentList } from "./instruments/InstrumentList.js"
import { NavBar } from "./nav/NavBar.js"

export const DukeChord = () => {
    const view = getView()

    switch (view) {
        case "home":
            return `
                ${NavBar()}
                ${Home()}
            `
            break;

        case "sales":
            return `
                ${NavBar()}
                ${InstrumentList()}
            `
            break;

        default:
            return `
                ${NavBar()}
                ${Home()}
            `
            break;
    }

}
