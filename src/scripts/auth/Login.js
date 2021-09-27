import { getUsers, login } from "../data/UserStateManager.js"
import { changeView } from "../data/ViewStateManager.js"

const container = document.querySelector("#content")

container.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "registerLink") {
        clickEvent.preventDefault()
        changeView("register")
    }
})

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
            login(foundUser)
            changeView("", false)
        }
    }
})


export const LoginForm = () => {
    return `
        <div class="loginForm">
            <input value="meg@ducharme.com" type="text" name="email" autofocus placeholder="Email address" />
            <button id="loginButton">Login</button>
        </div>

        <section class="register">
            <a id="registerLink" href="">Not a member yet?</a>
        </section>
    `
}
