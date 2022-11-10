import "./Question.css"

const Question = () => {
    return (
        <article className="question">
            <header className="question__header">
                <h2>Hoe goed beheers je nu react?</h2>
            </header>
            <section className="question__section">
                ⭐⭐⭐⭐⭐
            </section>
            <footer className="question__footer">
                <button className="question__previous">Vorige</button>
                <button className="question__next">Volgende</button>
            </footer>
        </article>
    )
}

export default Question;