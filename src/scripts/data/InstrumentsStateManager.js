const state = {
    instruments: [],
    chosenInstrument: {},
    playSounds: false,
    filter: ""
}

const container = document.querySelector("#content")

export const getFilter = () => {
    return state.filter
}

export const setFilter = (type) => {
    state.filter = type
    container.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setInstrument = (id) => {
    state.chosenInstrument = state.instruments.find(i => i.id === id) || {}
    container.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getInstrument = () => {
    return state.chosenInstrument
}

export const turnOffSounds = () => {
    state.playSounds = false
    container.dispatchEvent( new CustomEvent("stateChanged") )
}

export const turnOnSounds = () => {
    state.playSounds = true
    container.dispatchEvent( new CustomEvent("stateChanged") )
}

export const shouldPlaySounds = () => {
    return state.playSounds
}

export const fetchAllInstruments = () => {
    return fetch(`http://localhost:5002/api/instruments?_expand=instrumentType&_expand=user`)
        .then(response => response.json())
        .then(
            (instrumentsArray) => {
                state.instruments = instrumentsArray
            }
        )
}

export const getInstruments = () => {
    return state.instruments.filter(
        (instrument) => {
            if (state.filter !== "" && instrument.instrumentType.name.toLowerCase() === state.filter) {
                return true
            }
            else if (state.filter === "") {
                return true
            }

            return false
        }
    )
    .map(instrument => ({...instrument}))
}
