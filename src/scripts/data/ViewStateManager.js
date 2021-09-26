const state = {
    view: "home"
}

const container = document.querySelector("#content")

export const getView = () => {
    return state.view
}

export const changeView = (view) => {
    state.view = view
    history.pushState(null, "view", `?view=${view}`)
    var popStateEvent = new PopStateEvent('popstate', {state: {view} })
    window.dispatchEvent(popStateEvent)
    container.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getURLParameter = (name="home") => {
    return decodeURIComponent((new RegExp(`[?|&]${name}=([^&;]+?)(&|#|;|$)`).exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}
