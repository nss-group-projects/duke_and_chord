import { getView } from "./data/ViewStateManager.js"
import { Home } from "./Home.js"
import { InstrumentDetail } from "./instruments/InstrumentDetail.js"
import { InstrumentForm } from "./instruments/InstrumentForm.js"
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

        case "about":
            return `
                ${NavBar()}
                ${InstrumentForm()}
            `
            break;

        case "sales":
            return `
                ${NavBar()}
                ${InstrumentList()}
            `
            break;

        case "instrument":
            return `
                ${NavBar()}
                ${InstrumentDetail()}
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
