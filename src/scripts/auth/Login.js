import { getUsers } from "../data/UserStateManager.js"
import { changeView } from "../data/ViewStateManager.js"

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
            changeView("home")
            container.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
})

container.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "registerLink") {
            event.preventDefault()
            history.pushState(null, "view", `?view=register`)
            var popStateEvent = new PopStateEvent('popstate', { state: { view: "register" } })
            window.dispatchEvent(popStateEvent)
        }
    }
)


export const LoginForm = () => {
    return `
        <div class="loginForm">
            <input value="meg@ducharme.com" type="text" name="email" autofocus placeholder="Email address" />
            <button id="loginButton">Login</button>
        </div>

        <section class="register">
            <a id="registerLink" href="/">Not a member yet?</a>
        </section>
    `
}
