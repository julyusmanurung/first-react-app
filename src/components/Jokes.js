import React, { Component } from "react";

class Jokes extends Component {
    state = { joke: {} };

    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(json => this.setState({ joke: json }));
    }
    
    render() {
        const { value} = this.state.joke;
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <p>{value}</p>
            </div>
        )
    }
}

export default Jokes;