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
    instructions: "Click an Image to Begin!",
    click: []
  };

  shuffleImages = () => {
    let newImagesArr = this.state.images
    .map(image => [Math.random(), image])
    .sort((imageOne, imageTwo) => imageOne[0] - imageTwo[0])
    .map(image => image[1]);
    this.setState({images: newImagesArr});
  }

  scoreGenerator = id => {
    const images = this.state.images;
    const clicked = images.filter(image => image.id === id);
    
    if (this.state.click.indexOf(clicked[0].id) === -1){
      this.setState({score: this.state.score + 1 });
      this.setState({instructions: "You Guessed Correctly!"});
      this.setState({click: [...this.state.click, id]})
    } else {
      this.setState({score: 0});
      this.setState({click: []});
      this.setState({instructions: "You Guessed Incorrectly!"});
      if (this.state.score >= this.state.topscore){
        this.setState({topscore: this.state.score});
      }
    }
    if (this.state.topscore === 12){
      this.setState({instructions: "You're a Winner!"})
      this.setState({topscore: 0})
    }
    this.shuffleImages();
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
              scoreGenerator={this.scoreGenerator}
            />
          ))}
        </ImageBody>
        <Footer />
      </div>
    );
  }
}

export default App;
