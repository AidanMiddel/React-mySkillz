import "./Outro.css"
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

const Outro = (props) => {
    let questions = [];
    let ratings = []; 
    props.questionsAndAnswers.map(question => {
        questions.push("Vraag #" + question.number)
        ratings.push(question.rating)
    })
    console.log(props.questionsAndAnswers)
    console.log(ratings)
    let labels = questions
    let data = {
        labels: labels,
        datasets: [{
            label: "mijn score",
            data: ratings,
            backgroundColor: "black"
        }]
    }
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    return (
        <article className="outro">
            <Bar data={data} />
        </article>
    )
}

export default Outro;