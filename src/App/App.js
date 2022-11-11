import "./App.css"
import Question from "../Question/Question"
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/vraag" element={<Question/>}></Route>
        </Routes>
    )
}

export default App;