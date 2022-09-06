import React, { Component } from "react";
import Projects from "../components/Projects";
import SocialProfiles from "../components/SocialProfiles";
import Title from "../components/Title";
import profile from '../assets/profile.jpg'

class App extends Component {
    state = { displayBio: false};
    
    toggleDisplayBio = () => {
        this.setState({ displayBio : !this.state.displayBio })
    }
    
    render() {
        return (
            <div>
                <img src={profile} alt='julyus andreas' className='profile'/>
                <h1>Hello World!</h1>
                <p>My name is Julyus Andreas.</p>
                <Title/>
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
                <hr/>
            </div>
        )
    }
}

export default App;