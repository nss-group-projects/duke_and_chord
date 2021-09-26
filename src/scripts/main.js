import { LoginForm } from "./auth/Login.js"
import { RegisterForm } from "./auth/Register.js"
import { fetchAllClasses } from "./data/ClassStateManager.js"
import { fetchAllInstruments, fetchAllInstrumentTypes, setInstrument } from "./data/InstrumentsStateManager.js"
import { fetchUsers, isAuthenticated } from "./data/UserStateManager.js"
import { getURLParameter } from "./data/ViewStateManager.js"
import { DukeChord } from "./DukeChord.js"
import { Header } from "./nav/Header.js"

const header = document.querySelector("#header")
const container = document.querySelector("#content")

/*
    Determine if user is authenticated.
    If user is authenticated, get all data from API then render application
    If user is not authenticated, get all users from API then render login view
*/
const renderAllStateAsHTML = () => {
    if (isAuthenticated()) {
        fetchAllInstruments()
            .then(fetchAllInstrumentTypes)
            .then(fetchAllClasses)
            .then(() => {
                header.innerHTML = Header()
                container.innerHTML = DukeChord()
            })
    }
    else {
        fetchUsers().then(
            () => {
                container.innerHTML = LoginForm()
            }
        )
    }
}

renderAllStateAsHTML()

/*
    Listen for when any state is changed and render the application HTML
*/
container.addEventListener("stateChanged", () => {
    renderAllStateAsHTML()
})


window.addEventListener('popstate', function (event) {
	container.dispatchEvent(new CustomEvent("stateChanged"))
});
