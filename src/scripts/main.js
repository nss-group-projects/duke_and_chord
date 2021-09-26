import { LoginForm } from "./auth/Login.js"
import { fetchAllClasses } from "./data/ClassStateManager.js"
import { fetchAllInstruments, fetchAllInstrumentTypes, setInstrument } from "./data/InstrumentsStateManager.js"
import { fetchUsers, getCurrentUser, setCurrentUser } from "./data/UserStateManager.js"
import { setView } from "./data/ViewStateManager.js"
import { DukeChord } from "./DukeChord.js"
import { Header } from "./nav/Header.js"

const header = document.querySelector("#header")
const container = document.querySelector("#content")

const initializeApplication = () => {
    header.innerHTML = Header()
    syncStorage()
    renderAllStateAsHTML()
}

/*
    Determine if user is authenticated.
    If user is authenticated, get all data from API then render application
    If user is not authenticated, get all users from API then render login view
*/
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

/*
    Get all cached data from local storage and set application state
*/
const syncStorage = () => {
    // Get chosen view from local storage
    const view = sessionStorage.getItem("chord_view")
    view ? setView(view) : setView("home")  // Ternary statement (condensed if/else)

    // Get chosen instrument from local storage
    const instrument = sessionStorage.getItem("chord_instrument")
    instrument
        ? setInstrument(parseInt(instrument))
        : setInstrument(0) // Ternary statement (condensed if/else)
}


const determineAuth = () => {
    // Check if user is already in state
    if ("id" in getCurrentUser()) {
        return true
    }
    // Check if encoded user object in local storage
    else {
        const user = localStorage.getItem("chord_user")

        if (user) {
            const unencodedUser = atob(user)
            const parsedUser = JSON.parse(unencodedUser)
            setCurrentUser(parsedUser)
            return true
        }
    }

    // No user in state or in local storage
    return false
}

/*
    Listen for when any state is changed and render the application HTML
*/
container.addEventListener("stateChanged", () => {
    renderAllStateAsHTML()
})

initializeApplication()
