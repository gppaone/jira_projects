import { Component } from 'react';
import './App.css';
import './app-styles.css';
import Logo from './images/brick2x1.jpg';


class App extends Component {
    constructor(){
        super();
        
        this.state = {
            projects: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then((jsondata) => this.setState(() => {
            return{projects : jsondata}
        },
        () => {
            //console.log(this.state)
        }
        ))
    }
        
    render(){
        return (

            <div className="App">
                <nav className="navbar navbar-light">
                    <a className="navbar-brand" href="#">
                        <img src={ Logo } alt="NCSU" className="d-inline-block logo" />
                        Software & Development Projects
                    </a>
                </nav>
                { this.state.projects.map((item) => {
                    return(
                        <div className="card">
                            <div className="card-header">
                            { item.title }
                            </div>
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    )
                }) }
            </div>
        );
    }
}

export default App;
