import { getUsers, setCurrentUser } from "../data/UserStateManager.js"
import { setView } from "../data/ViewStateManager.js"

const container = document.querySelector("#content")

container.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "loginButton") {
        let foundUser = null
        const userState = getUsers()

        const email = document.querySelector("input[name='email']").value

        for (const user of userState) {
            if (user.email === email) {
                foundUser = user
            }
        }

        if (foundUser !== null) {
            const encodedUser = btoa(JSON.stringify(foundUser))
            localStorage.setItem("chord_user", encodedUser)
            setView("home")
            container.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
})

export const LoginForm = () => {
    return `
        <div class="loginForm">
            <form>
                <fieldset>
                    <label for="email">Email:</label>
                    <input value="meg@ducharme.com" type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
            </form>
            <button id="loginButton">Login</button>
        </div>
    `
}
