import { Component } from 'react';

class Jira extends Component {
    render(){
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        Adopt IDF
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Fix the button</li>
                        <li className="list-group-item">Added extra photos</li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card-header">
                        Fusion
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Add audio cue</li>
                        <li className="list-group-item">Fix maintenance mode</li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Jira;