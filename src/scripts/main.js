import { LoginForm } from "./auth/Login.js"
import { fetchAllClasses } from "./data/ClassStateManager.js"
import { fetchAllInstruments, fetchAllInstrumentTypes, setInstrument } from "./data/InstrumentsStateManager.js"
import { fetchUsers, setCurrentUser } from "./data/UserStateManager.js"
import { setView } from "./data/ViewStateManager.js"
import { DukeChord } from "./DukeChord.js"
import { Header } from "./nav/Header.js"

const header = document.querySelector("#header")
const container = document.querySelector("#content")

const syncStorage = () => {
    const view = sessionStorage.getItem("chord_view")
    view ? setView(view) : setView("home")

    const instrument = sessionStorage.getItem("chord_instrument")
    instrument
        ? setInstrument(parseInt(instrument))
        : setInstrument(0)
}

const determineAuth = () => {
    const user = localStorage.getItem("chord_user")

    if (user) {
        const unencodedUser = atob(user)
        const parsedUser = JSON.parse(unencodedUser)
        setCurrentUser(parsedUser)
        return true
    }

    return false
}

const renderAllStateAsHTML = () => {
    if (determineAuth()) {
        fetchAllInstruments()
            .then(fetchAllInstrumentTypes)
            .then(fetchAllClasses)
            .then(() => container.innerHTML = DukeChord())
    }
    else {
        fetchUsers().then(
            () => {
                container.innerHTML = LoginForm()
            }
        )
    }
}

header.innerHTML = Header()
syncStorage()
renderAllStateAsHTML()

container.addEventListener("stateChanged", () => {
    console.log("State changed")
    renderAllStateAsHTML()
})


