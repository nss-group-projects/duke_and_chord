import { getInstruments } from "../data/InstrumentsStateManager.js"

export const InstrumentList = () => {
    const instruments = getInstruments()

    return `
        <article class="instruments">
        ${
            instruments.map((i, idx, arr) => {
                return `
                    <section class="instrument" id="instrument--${i.id}">
                        <img class="instrument__image" src="/images/${i.fileName}" />
                        <h3 class="header--centered instrument__name">${i.name}</h3>
                        <h4 class="header--centered instrument__type">(${i.instrumentType.name})</h4>

                        <div class="instrument__seller">
                            Seller is <a href="#">${i.user.name}</a>
                        </div>
                    </section>
                `
            }).join("")
        }
        </article>
    `
}