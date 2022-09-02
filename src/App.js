import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from './assets/profile.jpg'

class App extends Component {
    state = { displayBio: false};
    
    toggleDisplayBio = () => {
        this.setState({ displayBio : !this.state.displayBio })
    }

    constructor() {
        super();
        this.state = { displayBio: false};
        console.log('Component this', this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
    
    render() {
        return (
            <div>
                <img src={profile} alt='julyus andreas' class='profile'/>
                <h1>Hello World!</h1>
                <p>My name is Julyus Andreas. I'm a informatics student gradute from Parahyangan Catholic University.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Bekasi, and sometimes code sometimes game every day.</p>
                            <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                            <p>Besides coding, I also love food!</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : 
                    ( 
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )        
                }
                <hr/>
                <Projects></Projects>
                <hr/>
                <SocialProfiles></SocialProfiles>
            </div>
        )
    }
}

export default App;

// class RegularClass {}
// class ComponentClass extends Component {}

// const RegularClassInstance = new RegularClass();
// const ComponentClassInstace = new ComponentClass();

// console.log('RegularClassInstance', RegularClassInstance);
// console.log('ComponentClassInstace', ComponentClassInstace);