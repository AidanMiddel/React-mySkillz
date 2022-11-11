import "./App.css"

import { Route, Switch } from "react-router-dom";
import Intro from "../Intro/Intro";

import QuestionsRouter from "../QuestionsRouter/QuestionsRouter";

const App = () => {

    return (
        <>
            <Switch>
                <Route path="/vraag/:number" component={QuestionsRouter}></Route>
                <Route path="/" component={Intro}></Route>
            </Switch>
        </>
    )
}

export default App;