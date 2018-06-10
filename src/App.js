import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar.js'
import Jumbotron from './components/Jumbotron/Jumbotron.js'
import ImageBody from './components/ImageBody/ImageBody.js'
import Images from './components/Images/Images.js'
import images from "./images.json";
import Footer from './components/Footer/Footer.js'

class App extends Component {

  state = {
    images,
    score: 0,
    topscore: 0,
    instructions: "Click an Image to Begin!"
  };

  shuffleImages = () => {
    let newImagesArr = this.state.images
    .map(image => [Math.random(), image])
    .sort((imageOne, imageTwo) => imageOne[0] - imageTwo[0])
    .map(image => image[1]);
    this.setState({images: newImagesArr});
  }

  render() {
    return (
      <div>
        <Navbar instructions={this.state.instructions} score={this.state.score} topscore={this.state.topscore}/>
        <Jumbotron />
        <ImageBody>
          {this.state.images.map(image => (
            <Images
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              shuffleImages={this.shuffleImages}
            />
          ))}
        </ImageBody>
        <Footer />
      </div>
    );
  }
}

export default App;
