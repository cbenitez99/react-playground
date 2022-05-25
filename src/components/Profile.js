//Class component ->
import React, { Component } from 'react'
import '../App.css'

class Profile extends Component {
    constructor(props) {
        super(props)//passing props to parent constructor -> Component

        this.state = {
            name: "cristian",
            age: 22,
            isMale: true,
            emotion: "Happy"
            
        };
    }
    render() {
       
        const {name, age, isMale, emotion} = this.state;
        return (
            <div>
                <div className='canvas'>
                    {/* using props */}
                    <h2>My name is {name}</h2>
                    <h2>I am {age} years old</h2>
                    <h2>I am a {isMale ? "Male" : "Female"}</h2>
                    <h2>I am feeling {emotion}</h2>
                </div>
                {/* form with color inputs and canvas background */}
                <form class="canvas">
                    <input class="button green"></input>
                </form>

                {/* color animated buttons and canvas background */}
                <div class="canvas">
                    <button href="#" class="button blue"><span>Blue Button</span></button>
                    <button class="button orange"><span>Orange Button</span></button>
                    <button class="button purple"><span>Purple Button</span></button>
                </div>
              
            </div>
        );
    }
}

export default Profile;