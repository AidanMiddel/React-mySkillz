import "./App.css"
import Question from "../Question/Question"
import { Route, Routes } from "react-router-dom";
import Intro from "../Intro/Intro";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Intro />}></Route>
            <Route path="/vraag" element={<Question/>}></Route>
            
        </Routes>
    )
}

export default App;