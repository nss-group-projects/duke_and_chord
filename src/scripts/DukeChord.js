import { RegisterForm } from "./auth/Register.js"
import { ClassList } from "./classes/ClassList.js"
import { getInstrument } from "./data/InstrumentsStateManager.js"
import { getURLParameter } from "./data/ViewStateManager.js"
import { Home } from "./Home.js"
import { InstrumentDetail } from "./instruments/InstrumentDetail.js"
import { InstrumentForm } from "./instruments/InstrumentForm.js"
import { InstrumentList } from "./instruments/InstrumentList.js"
import { NavBar } from "./nav/NavBar.js"

export const DukeChord = () => {
    return `
        ${NavBar()}
        ${buildView()}
    `
}

const buildView = () => {
    const view = getURLParameter("view")

    switch (view) {
        case "home":
            return Home()

        case "sell":
            return InstrumentForm()

        case "store":
            return InstrumentList()

        case "instrument":
            return InstrumentDetail()

        case "classes":
            return ClassList()

        case "register":
            return RegisterForm()

        default:
            return Home()
    }
}
