import { settings } from "./Settings.js"

const container = document.querySelector("#content")

const state = {
    currentUser: {},
    users: []
}

export const logout = () => {
    localStorage.removeItem("chord_user")
    state.currentUser = {}
    container.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setCurrentUser = (user) => {
    state.currentUser = user
}

export const getCurrentUser = () => {
    return state.currentUser
}

export const fetchUsers = () => {
    return fetch(`${settings.apiURL}/api/users`)
        .then(response => response.json())
        .then(data => state.users = data)
}

export const getUsers = () => {
    return state.users.map(u => ({...u}))
}
