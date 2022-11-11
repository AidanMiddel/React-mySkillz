import "./QuestionsRouter.css";
import { withRouter } from "react-router";
import React from "react";
import Questions from "../Data/Questions";
import Question from "../Question/Question";

class QuetionsRouter extends React.Component {
    constructor(props) {
        super(props);
        this.myNumber = this.props.match.params.number
        this.state = { Questions: [] }
    }

    componentDidMount() {
        this.setState({ Questions: Questions });
    }

    render() {
        let questionToBeRendered = this.state.Questions.map(questionObject => {
            if (this.myNumber == questionObject.number) {
                return <Question previous={questionObject.previous} next={questionObject.next} number={questionObject.number} key={questionObject.number} question={questionObject.question} rating={questionObject.rating} />;
            }
            else {
                return null;
            }
        })
        console.log(questionToBeRendered)
        return (
            <>
                {questionToBeRendered}
            </>
        )
    }
}

export default withRouter(QuetionsRouter);