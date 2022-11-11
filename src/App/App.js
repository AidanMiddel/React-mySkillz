import "./App.css"

import { Route, Switch } from "react-router-dom";
import Intro from "../Intro/Intro";
import Outro from "../Outro/Outro";

import QuestionsRouter from "../QuestionsRouter/QuestionsRouter";

const App = () => {

    const onLast = (questionsAndAnswers) => {
        console.log(questionsAndAnswers)
    }
    return (
        <>
            <Switch>
                <Route path="/vraag/:number">
                    <QuestionsRouter onLast={onLast}/>
                </Route>
                <Route path="/outro" component={Outro} />
                <Route path="/" component={Intro}></Route>
                
            </Switch>
        </>
    )
}

export default App;