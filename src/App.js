import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import "./App.css"
import Home from "./components/Home/Home"
import Increment from "./components/Increment/Increment"
import Composition from "./components/Composition/Composition"

const App = ()=>{
    return(
        <div className="App">
            <h2>Advanced topics {`{React}`}</h2>
            <Router>
                <Switch>
                <Route path="/" exact={true}>
                        <Home />
                    </Route>
                    <Route path="/increment">
                        <Increment />
                    </Route>
                    <Route path="/composition">
                        <Composition />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default App;
