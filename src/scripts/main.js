import { LoginForm } from "./auth/Login.js"
import { RegisterForm } from "./auth/Register.js"
import { fetchAllClasses } from "./data/ClassStateManager.js"
import { fetchAllInstruments, fetchAllInstrumentTypes, setInstrument } from "./data/InstrumentsStateManager.js"
import { fetchUsers, getCurrentUser, isAuthenticated, setCurrentUser } from "./data/UserStateManager.js"
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

/*
    Listen for when any state is changed and render the application HTML
*/
container.addEventListener("stateChanged", () => {
    renderAllStateAsHTML()
})

renderAllStateAsHTML()

window.addEventListener('popstate', function (event) {
	switch (event.state.view) {
        case "register":
            container.innerHTML = RegisterForm()
            break;

        default:
            break;
    }
});
