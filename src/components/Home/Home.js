import {Link} from "react-router-dom"

const Home = ()=>{
    return (
        <div>
            <h3>Home pages</h3>
            <Link to="/increment">Increment(HOC)</Link>
            <br />
            <Link to="/composition">Composition</Link>
            <br />
        </div>
    )
}

export default Home