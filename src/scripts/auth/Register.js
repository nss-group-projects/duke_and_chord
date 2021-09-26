import { getUsers, setCurrentUser } from "../data/UserStateManager.js"
import { setView } from "../data/ViewStateManager.js"

const container = document.querySelector("#content")
const formState = {
    name: "",
    email: ""
}

container.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "register") {
        return fetch(`http://localhost:8088/users`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(formState)
        })
            .then(response => response.json())
            .then((newUser) => {
                const encodedUser = btoa(JSON.stringify(newUser))
                localStorage.setItem("chord_user", encodedUser)
                setView("home")
                container.dispatchEvent(new CustomEvent("stateChanged"))
            })

    }
})

export const RegisterForm = () => {
    return `
        <div class="loginForm">
            <input value="" type="text" name="name" autofocus placeholder="Your name" />
            <input value="" type="text" name="email" placeholder="Email address" />
            <button id="register">Register</button>
        </div>
    `
}
