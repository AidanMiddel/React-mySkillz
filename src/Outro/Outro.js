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
    console.log(props.questionsAndAnswers)

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    let labels = ["nee", "rot", "op"]
    let data = {
        labels: labels,
        datasets: [{
            label: "AAAA",
            data: [69, 80, 20],
        }]
    }

    return (
        <article className="outro">
            <Bar data={data} />
        </article>
    )
}

export default Outro;