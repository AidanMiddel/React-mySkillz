import React from "react";
import { withRouter} from "react-router";
import { Link } from "react-router-dom";
import "./Question.css";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
        }
    }

    componentDidMount() {
        this.setState({ rating: this.props.rating })
    }

    onStarClicked = (rating) => {
        this.setState({
            rating: rating + 1,
        }, () =>{
            this.props.onRate(this.state.rating, this.props.number);
        })
    }
    render() {
        let starsArray = [];
        for (let i = 0; i < this.state.rating; i++) {
            starsArray.push(<i onClick={() => this.onStarClicked(i)} className="question__star fa-solid fa-star"></i>)
        }
        for (let i = this.state.rating; i < 5; i++) {
            starsArray.push(<i onClick={() => this.onStarClicked(i)} className="question__star fa-regular fa-star"></i>)
        }
        return (
            <article className="question">
                <header className="question__header">
                    <h2 className="question__h2">#{this.props.number} {this.props.question}</h2>
                </header>
                <section className="question__section">
                    <p className="question__text">(1 ster staat voor zéér slecht, 5 sterren staan voor zéér goed)</p>
                    <div className="question__stars">
                        {starsArray}
                    </div>
                </section>
                <footer className="question__footer">
                    <Link to={this.props.previous}>
                        <button className="question__button">Vorige</button>
                    </Link>
                    <Link to={this.props.next}>
                        <button className="question__button">Volgende</button>
                    </Link>
                </footer>
            </article>
        )
    }
}

export default withRouter(Question);