import React from "react"
import "./Question.css"

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 1,
        }
    }

    onStarClicked = (event) => {
        console.log("geklikt")
    }
    render() {
        let starsArray = [];
        for(let i = 0; i < this.state.rating; i++){
            starsArray.push(<i onClick={this.onStarClicked} className="question__star fa-solid fa-star"></i>)
        }
        return (
            <article className="question">
                <header className="question__header">
                    <h2 className="question__h2">Hoe goed beheers je nu react?</h2>
                </header>
                <section className="question__section">
                    <p className="question__text">(1 ster staat voor zéér slecht, 5 sterren staan voor zéér goed)</p>
                    <div className="question__stars">
                        {starsArray}
                    </div>
                </section>
                <footer className="question__footer">
                    <button className="question__button">Vorige</button>
                    <button className="question__button">Volgende</button>
                </footer>
            </article>
        )
    }
}

export default Question;