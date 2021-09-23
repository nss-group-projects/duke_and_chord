import { getInstrument } from "../data/InstrumentsStateManager.js"

export const InstrumentDetail = () => {
    const instrument = getInstrument()

    return `
        <section class="instrument" id="instrument--${instrument.id}">
            <div class="instrument__price--detail">
                ${instrument.price.toLocaleString(
                    'en-US',
                    { style: 'currency', currency: 'USD' }
                )}
            </div>
            <img class="instrument__image" src="/images/${instrument.fileName}" />
            <h3 class="header--centered instrument__name">${instrument.name}</h3>
            <h4 class="header--centered instrument__type">(${instrument.instrumentType.name})</h4>

            <div class="instrument__seller--detail">
                <div>
                    Seller is <a href="#">${instrument?.user?.name}</a>
                </div>
            </div>
        </section>
    `
}
