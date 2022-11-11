import "./App.css"
import Question from "../Question/Question"
import { Route, Routes } from "react-router-dom";
import Intro from "../Intro/Intro";
import Questions from "../Data/Questions";

const App = () => {
    let questionsToBeRendered = Questions.map(questionObject => {
        return <Question key={questionObject.number} number={questionObject.number} question={questionObject.question} rating={questionObject.rating} />
    })
    return (
        <>
            {questionsToBeRendered}
        </>
    )
}

export default App;