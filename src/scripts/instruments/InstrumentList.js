import { getInstruments } from "../data/InstrumentsStateManager.js"

export const InstrumentList = () => {
    const instruments = getInstruments()

    return `
        <article class="instruments">
        ${
            instruments.map(i => {
                return `
                    <section class="instrument" id="instrument--${i.id}">
                        <h3 class="instrument__name">${i.name}</h3>
                        <h4 class="instrument__type">(${i.instrumentType.name} instrument)</h4>
                        <img class="instrument__image" src="/images/${i.fileName}" />
                    </section>
                `
            }).join("")
        }
        </article>
    `
}