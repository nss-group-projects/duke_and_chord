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

export const RegisterForm = () => {
    return `
        <div class="loginForm">
            <input value="" type="text" name="name" autofocus placeholder="your name" />
            <input value="" type="text" name="email" placeholder="Email address" />
            <button id="loginButton">Login</button>
        </div>
    `
}
