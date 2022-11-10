import "./Question.css"

const Question = () => {
    return (
        <article className="question">
            <header className="question__header">
                <h2 className="question__h2">Hoe goed beheers je nu react?</h2>
            </header>
            <section className="question__section">
                <p className="question__text">(1 ster staat voor zéér slecht, 5 sterren staan voor zéér goed)</p>
                ⭐⭐⭐⭐⭐
            </section>
            <footer className="question__footer">
                <button className="question__button">Vorige</button>
                <button className="question__button">Volgende</button>
            </footer>
        </article>
    )
}

export default Question;