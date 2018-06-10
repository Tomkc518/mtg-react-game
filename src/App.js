import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar.js'
import Jumbotron from './components/Jumbotron/Jumbotron.js'
import ImageBody from './components/ImageBody/ImageBody.js'
import Images from './components/Images/Images.js'
import images from "./images.json";

class App extends Component {

  state = {
    images
  };

  render() {
    return (
      <div>
        <Navbar instructions={"Click an Image to Begin!"} score={0} topscore={0}/>
        <Jumbotron />
        <ImageBody>
          {this.state.images.map(image => (
            <Images
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
            />
          ))}
        </ImageBody>
      </div>
    );
  }
}

export default App;
