import React, { Component } from 'react';
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
    click: [],
    jiggle: false
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
    let currentScore = this.state.score;
    let currentTopscore = this.state.topscore;
    this.setState({jiggle: false});
    
    if (this.state.click.indexOf(clicked[0].id) === -1){
      currentScore += 1;
      currentTopscore += 1;
      this.setState({score: this.state.score + 1 })
      this.setState({instructions: "You Guessed Correctly!"});
      this.setState({click: [...this.state.click, id]})
      if (currentScore >= currentTopscore){
        this.setState({topscore: currentScore});
      }
    } else {
      this.setState({score: 0});
      this.setState({click: []});
      this.setState({instructions: "You Guessed Incorrectly!"});
      this.setState({jiggle: true});
    }
    if (currentTopscore === 12){
      this.setState({instructions: "You're a Winner!"});
      this.setState({topscore: 0});
      this.setState({score: 0});
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
              className={this.state.jiggle ? "hvr-wobble-horizontal" : ""}
            />
          ))}
        </ImageBody>
        <Footer />
      </div>
    );
  }
}

export default App;
