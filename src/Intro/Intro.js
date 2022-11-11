import { Link } from "react-router-dom";
import "./Intro.css"

const Intro = () => {
    return (
        <article className="Intro">
            <Link className="intro__link" to="/vraag/1">
                start
            </Link>
        </article>
    )
}

export default Intro;