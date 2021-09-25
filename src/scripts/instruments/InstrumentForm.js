import { getInstrumentTypes } from "../data/InstrumentsStateManager.js"
import { getCurrentUser } from "../data/UserStateManager.js"

const content = document.querySelector("#content")

content.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newInstrument__submit") {

        // savePost(formState)
        //     .then(
        //         () => {
        //         }
        //     )
    }
})

const formState = {
    "fileName": "",
    "name": "",
    "instrumentTypeId": 0,
    "audio": "",
    "used": false,
    "price": 0,
    "description": "",
    "userId": getCurrentUser().id
}


export const InstrumentForm = () => {
    const types = getInstrumentTypes()

    return `
        <div class="newInstrument">
            <div class="newInstrument__field">
                <label>Name:</label> <input value="${formState.name}" id="name" class="newInstrument__input" type="text"  />
            </div>

            <div class="newInstrument__field">
                <label>Type:</label> <select id="instrumentTypeId" class="newInstrument__input">
                    <option value="0">Choose type...</option>
                    ${
                        types.map(type => `<option value="${type.id}">${type.name}</option>`).join("")
                    }
                </select>
            </div>

            <div class="newInstrument__field">
                <label>Price:</label> <input value="${formState.audio}" id="price" class="newInstrument__input" type="number" />
            </div>

            <div class="newInstrument__field">
                <label>Audio file:</label> <input value="${formState.audio}" id="audio" class="newInstrument__input" type="text" />
            </div>


            <textarea id="description" value="${formState.description}"
                class="newInstrument__input newInstrument__description"
                placeholder="Description of instrument."></textarea>

            <button id="newInstrument__submit">Save</button>
            <button id="newInstrument__cancel">Cancel</button>
        </div>
        `
}
