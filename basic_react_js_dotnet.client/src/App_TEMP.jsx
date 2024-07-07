import './App.css'
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import WeatherForecast from './components/WeatherForecast';

function App() {
    return (
        <div className="App">
            <nav>
                <div className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/weather">Weather Forecast</Link>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/weather" component={WeatherForecast} />
            </Switch>
        </div>
    )
}

export default App