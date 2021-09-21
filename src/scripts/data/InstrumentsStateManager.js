let instruments = []

export const getAllInstruments = () => {
    return fetch(`http://localhost:5002/api/instruments?_expand=instrumentType&_expand=user`)
        .then(response => response.json())
        .then(
            (instrumentsArray) => {
                instruments = instrumentsArray
            }
        )
}

export const getInstruments = () => {
    return instruments.map(
        (instrument) => {
            return {...instrument}
        }
    )
}