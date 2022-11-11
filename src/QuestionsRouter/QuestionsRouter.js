import "./QuestionsRouter.css";
import { withRouter } from "react-router";
import React from "react";
import Questions from "../Data/Questions";
import Question from "../Question/Question";

class QuetionsRouter extends React.Component {
    constructor(props) {
        super(props);

        this.state = { Questions: [] }
    }

    onRate = (rating, number) => {
        console.log(this.state.Questions[number -1])
    }

    componentDidMount() {
        this.setState({ Questions: Questions });
    }

    render() {
        this.myNumber = this.props.match.params.number
        let questionToBeRendered = this.state.Questions.map(questionObject => {
            if (this.myNumber == questionObject.number) {
                return <Question onRate={this.onRate} previous={questionObject.previous} next={questionObject.next} number={questionObject.number} key={questionObject.number} question={questionObject.question} rating={questionObject.rating} />;
            }
            else {
                return null;
            }
        })
        return (
            <>
                {questionToBeRendered}
            </>
        )
    }
}

export default withRouter(QuetionsRouter);