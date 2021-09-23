export const MiniClass = (clas) => {
    return `
        <section class="class" id="class--${clas.id}">

            <div class="class__title">
                <a href="#">${clas.title}</a>
            </div>
            <div class="class__musician">With ${clas.musician.name}</div>
            <div class="class__price">${clas.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
            <div class="class__date">Starts on ${new Date(clas.start).toLocaleDateString('en-US')}</div>
        </section>
    `
}
