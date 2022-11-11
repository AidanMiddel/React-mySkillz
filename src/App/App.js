import "./App.css"
import Question from "../Question/Question"
import { Route, Switch } from "react-router-dom";
import Intro from "../Intro/Intro";
import Questions from "../Data/Questions";

const App = () => {
    let questionsToBeRendered = Questions.map(questionObject => {
        return <Question key={questionObject.number} number={questionObject.number} question={questionObject.question} rating={questionObject.rating} />
    })
    return (
        <>
            <Switch>
                <Route path="/vraag/:number"><Question/></Route>
                <Route path="/"><Intro/></Route>
                
            </Switch>
        </>
    )
}

export default App;