const state = {
    view: "home"
}

const container = document.querySelector("#content")

export const getView = () => {
    return state.view
}

export const setView = (view) => {
    state.view = type
    container.dispatchEvent( new CustomEvent("stateChanged") )
}
