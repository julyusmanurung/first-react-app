import React, { Component } from "react";

const Joke = ({ joke: { setup, punchLine } }) => (
   <p style={{ margin: 20 }}>{setup} <em>{punchLine}</em></p>
)

class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({ joke: json }))
        .catch(error => alert(error.message));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({ jokes: json }))
        .catch(error => alert(error.message));
    }   

    render() {
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke}/>
                <hr/>
                <h3>Wat ten new jokes?</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {
                    this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke}/>))
                }
            </div>
        )
    }
}

export default Jokes;