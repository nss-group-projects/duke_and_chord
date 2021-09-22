import { getView } from "./data/ViewStateManager.js"
import { Home } from "./instruments/Home.js"
import { InstrumentList } from "./instruments/InstrumentList.js"

export const DukeChord = () => {
    const view = getView()

    switch (view) {
        case "home":
            return Home()
            break;

        case "sales":
            return InstrumentList()
            break;

        default:
            break;
    }

}
