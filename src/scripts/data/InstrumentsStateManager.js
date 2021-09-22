const state = {
    instruments: [],
    chosenInstrument: {},
    playSounds: true
}



export const setInstrument = (id) => {
    state.chosenInstrument = state.instruments.find(i => i.id === id) || {}
    console.log(state)
}

export const getInstrument = () => {
    return state.chosenInstrument
}

export const shouldPlaySounds = () => {
    return state.playSounds
}

export const getAllInstruments = () => {
    return fetch(`http://localhost:5002/api/instruments?_expand=instrumentType&_expand=user`)
        .then(response => response.json())
        .then(
            (instrumentsArray) => {
                state.instruments = instrumentsArray
                console.log(state)
            }
        )
}

export const getInstruments = () => {
    return state.instruments.map(
        (instrument) => {
            return {...instrument}
        }
    )
}
