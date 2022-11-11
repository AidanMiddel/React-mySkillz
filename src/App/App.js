import "./App.css"
import React from "react";
import { Route, Switch } from "react-router-dom";
import Intro from "../Intro/Intro";
import Outro from "../Outro/Outro";

import QuestionsRouter from "../QuestionsRouter/QuestionsRouter";

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            questionsAndAnswers: [],
        };
    }

    onLast = (newQuestionsAndAnswers) => {
        this.setState({questionsAndAnswers: newQuestionsAndAnswers})
    }
    render() {
        return (
            <>
                <Switch>
                    <Route path="/vraag/:number">
                        <QuestionsRouter onLast={this.onLast} />
                    </Route>
                    <Route path="/outro">
                        <Outro questionsAndAnswers={this.state.questionsAndAnswers} />
                    </Route>
                    <Route path="/" component={Intro}></Route>

                </Switch>
            </>
        )
    }
}

export default App;