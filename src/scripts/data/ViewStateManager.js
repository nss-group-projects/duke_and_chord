const state = {
    view: "home"
}

const container = document.querySelector("#content")

export const getView = () => {
    return state.view
}

export const setView = (view) => {
    state.view = view
    container.dispatchEvent( new CustomEvent("stateChanged") )
}
